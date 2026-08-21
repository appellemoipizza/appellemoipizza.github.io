---
title: How Millie decides who does the work
summary: A technical look at the layer underneath Millie that turns a request into a task, a capability, and a chosen route — without the exact rules that make it hers.
date: 2026-08-21
kind: note
draft: false
featured: false
project: millie
tags: [agents, orchestration, architecture, schemas]
---
The first version of this note explained why I built Millie. This one is about the part people usually ask about next: okay, but how does she actually decide anything?

## The problem

Once you have more than one model, tool or agent available, every request hides a small pile of decisions before any work happens: which capability does this need, which route is qualified for it, how much effort does it deserve, does the result need independent review, and what should be remembered afterward. If a human makes those decisions every time, the coordination layer has just moved — from tool to human — instead of disappearing.

## The idea

Treat every request the same way, regardless of what it turns out to need: resolve it into a small, typed **task envelope** before anything executes. Not a prompt. A structured description of intent, risk and required capability that the rest of the system can reason about mechanically.

Roughly:

```json
{
  "intent": "modify-code",
  "capability": "typescript-refactor",
  "risk_level": "low",
  "context_scope": "single-project",
  "requires_review": false,
  "requires_verification": true
}
```

That shape is intentionally boring. The interesting part isn't the schema — it's that everything downstream, including routing, review and memory, reads from the same object instead of re-deriving intent from raw conversation text every time.

## What happened

Coding tasks were the easiest place to test this, since they already have a cheap ground truth: tests pass or they don't. Once tasks carried their own risk and capability tags, routing stopped being an interactive question. Low-risk, well-scoped changes went straight to execution and verification. Anything touching shared state or production got flagged for review before a worker ever ran. The number of times I had to answer "which model/agent should do this?" dropped close to zero for the boring 80% of requests, which was the entire point.

## Setup / method

The routing decision itself is a small, ordered filter rather than a single scoring function:

```text
resolve task envelope
  -> shortlist routes qualified for this capability
  -> drop routes without enough verified evidence for this risk level
  -> pick the minimum-sufficient route, not the most powerful one
  -> attach a verification strategy appropriate to the risk level
  -> execute, verify, and only then hand back to the human
```

"Minimum-sufficient" matters more than it sounds. A route only gets promoted to handle a class of task after it has enough recorded outcomes at that risk level — not because a newer model is available. New models get evaluated into the pool; they don't get trusted by default.

Every completed task leaves behind a compact trace rather than a transcript:

```json
{
  "task_class": "typescript-refactor",
  "route": "route-b",
  "effort": "medium",
  "verification": "tests+lint",
  "verified": true,
  "human_intervention": false,
  "latency_s": 42
}
```

No prompts, no source, no conversation content — just enough shape to answer, later, "for this class of task, did this route actually work."

## Evidence

Over a few weeks of routing real coding tasks this way, the pattern that held up was that verified success correlated more with capability-matching and verification strategy than with which specific model executed the task. A cheaper route with a tight verification loop reliably matched a more expensive one for narrow, well-scoped changes. That is the opposite of the incentive most tooling has right now, which defaults to "use the strongest model for everything."

## What failed / changed

My first version scored routes with a single numeric confidence value. It looked clean and was wrong in practice — it collapsed "qualified with evidence" and "technically capable but untested" into the same number, which meant an unproven route could occasionally outscore a boring, reliable one. Replacing the score with an explicit qualification gate (evidence required before promotion, no exceptions for a route just because it's new) fixed more routing mistakes than any prompt change did.

## Limitations

This says nothing yet about tasks with fuzzy or shifting intent, only about requests that can be resolved into a clean envelope. It also doesn't cover how much context is genuinely required versus merely convenient — that's a separate, harder question I'm still measuring rather than asserting an answer to.

## Next question

How much of "which route for this task" can be decided from the outcome trace alone, without a human ever restating a preference twice.
