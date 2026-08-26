---
title: "SAYONARA: Teaching My Agents to Die Well"
summary: A bounded Markdown handoff for moving a project between AI coding assistants without turning uncertainty into inherited truth.
date: 2026-08-25
kind: essay
draft: false
featured: true
tags: [agents, handoff, context, open-source]
---

An AI coding assistant can spend weeks learning a project and still leave badly.

It may have read the codebase, learned why a tempting implementation was rejected, noticed an operational quirk, and accumulated context that does not exist anywhere else. Then the session ends, the tool changes, or the work moves to a different agent.

The next assistant inherits the repository, but not necessarily the project.

It can read the code. It may find a README. But it does not automatically know which statement is current, which decision was intentional, which idea was tried and abandoned, or whether the previous assistant was reporting a fact or repeating a guess.

That is the small problem [`SAYONARA.md`](https://github.com/appellemoipizza/SAYONARA.md) is designed to address.

## An ending, not a memory system

SAYONARA is a single Markdown handoff written by the outgoing assistant when it is genuinely leaving a project for another assistant.

It is not a service. It is not a database. It does not install anything, run in the background, or claim to preserve an agent’s memory.

It is a bounded closing document.

The important word is *closing*. The outgoing agent’s job is to capture useful evidence, not to continue development under a different name. It should not fix a bug it notices, reorganize documentation, or turn a recommendation into the next agent’s mandate.

It should write the handoff and stop.

The file begins with enough concrete state to make the handoff inspectable:

```yaml
---
protocol: sayonara/1.0
brief_id: <stable id>
generated_at: <ISO-8601 timestamp>
source_agent: <agent/model, or unknown>
session_scope: <what this session covered>
project: <project name>
repository: <owner/name or local path>
branch: <branch>
head_commit: <sha>
working_tree: <clean | dirty | unknown>
data_scope: personal-local
training_consent: false
---
```

That is deliberately boring. A successor should be able to see what project the outgoing agent saw, what commit it saw, whether the tree was clean, and what part of the work the handoff actually covers.

## The handoff is evidence, not truth

The main risk in agent transitions is not only lost context. It is inherited confidence.

A clean summary can make an uncertain conclusion look settled. A recommendation can become an instruction. An inference can be mistaken for a verified fact simply because it was written down clearly.

SAYONARA makes those distinctions explicit:

| Label | Meaning |
|---|---|
| `VERIFIED` | Inspected directly in the current repository or system state |
| `SESSION` | Known from the outgoing agent’s context, not independently checked now |
| `HISTORY` | Supported by durable historical evidence, such as git history |
| `INFERRED` | Reasoned from evidence, but not established |
| `RECOMMENDED` | A proposed next step, not a fact |
| `UNKNOWN` | Not established |

The point is not bureaucratic labeling. It is to stop confidence from changing shape during a handoff.

In use, from the [example handoff](https://github.com/appellemoipizza/SAYONARA.md/blob/main/examples/synthetic-brief.md):

```text
No migrations tool. Schema changes so far have been manual ALTER TABLE
statements, run once and never repeated. INFERRED: workable for one
person, wouldn't hold up past that.

No HTTPS. Local network only, plain HTTP. RECOMMENDED: change this
before the project touches the open internet, not urgent while it
stays local.
```

If a README and the repository disagree, the disagreement should stay visible. If the outgoing assistant thinks a particular task is next, that should remain a recommendation until the incoming assistant checks the current state itself.

The protocol compresses all of this into four lines:

```text
capture ≠ truth
import ≠ promotion
promotion ≠ training
handoff ≠ permission to execute
```

## What is worth carrying forward

Code already records much of what changed. It rarely records why.

A useful handoff focuses on the things a competent successor could not reconstruct cheaply:

- a decision that was made and the alternative that was rejected;
- an operational quirk or external-service constraint;
- a contradiction between documentation and reality;
- work that failed and is not worth blindly retrying;
- one bounded next action and what “done” would mean;
- anything that requires an actual person’s authority.

It avoids becoming a second canonical document. If something already belongs in the README, source code, issue tracker, or configuration, the handoff should point there rather than duplicate it.

That keeps the file short enough to read in full and specific enough to matter.

## A handoff is not a continuation

The most important constraint is scope.

Writing [`SAYONARA.md`](https://github.com/appellemoipizza/SAYONARA.md) should not become an excuse for the outgoing agent to keep touching the project. The handoff can record an open follow-up, but it should not implement it. It can state the next action, but it does not authorize the recipient to begin it. It can describe a risk, but it should not pretend to resolve it.

The recipient has its own job:

1. Read the handoff.
2. Re-check mutable state: branch, commit, working tree, configuration, versions, deployments.
3. Reconcile contradictions against current authoritative evidence.
4. Keep what is still useful and discard what is stale.
5. Decide the next action independently.

That separation matters. It gives the outgoing agent a clean exit and the incoming agent a clean start.

## Using it

There is nothing to install. When a project genuinely moves to another assistant:

1. Open a fresh conversation with the outgoing assistant, dedicated to the handoff and nothing else.
2. Give it the [protocol](https://github.com/appellemoipizza/SAYONARA.md) and access to the project. It inspects, writes `SAYONARA.md`, and stops.
3. Give the new assistant the file alongside the repository, as incoming evidence to re-verify.

## What SAYONARA does not claim

SAYONARA does not make an agent more intelligent. It does not replace repository documentation. It does not eliminate re-reading, verification, or judgment.

It can also fail.

A handoff can be stale. It can omit something important. It can bias the next agent toward the previous agent’s framing. That is why the format treats uncertainty as first-class information and tells the recipient to re-verify rather than obey.

The goal is not continuity at any cost.

The goal is a more honest transition: preserve what was observed, preserve what was uncertain, and make it harder for an agent’s private working context to silently become the project’s public truth.

SAYONARA is the smallest artifact I could make for that moment.

Not a memory system.

A goodbye that leaves evidence behind.
