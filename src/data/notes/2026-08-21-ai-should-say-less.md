---
title: I want AI to say less
summary: Across several projects I kept independently rebuilding the same idea: uncertainty, abstention and silence are product features, not embarrassing gaps to hide.
date: 2026-08-21
kind: essay
draft: false
featured: true
tags: [AI, grounding, product design, local AI]
---
I did not set out to build a philosophy around AI restraint. I just kept running into the same failure from different directions.

A system reads a private document and confidently turns a fuzzy number into a deadline. A professional asks a question that sits outside the indexed corpus and the model fills the gap anyway. A thinking companion sees three diary entries and announces a life pattern as if it discovered gravity.

The common problem is not that the model wrote bad prose. It is that the product made **speaking** the default successful outcome.

## Four projects, the same lesson

In **Lexine**, an answer can be explicitly not covered by the evidence.

In **huhu**, silence is the normal response. A deterministic gate asks whether there is enough grounded material to say something useful before inference even happens.

In **motes**, the core graph is deterministic. The LLM can suggest a habitat name, but the field does not depend on it and a lack of evidence returns nothing.

In **Wakomi**, an official rule and a value read from somebody's paper remain separate evidence. Knowing the rule does not magically prove how it applies to that person.

These systems are very different, but they keep teaching me the same thing:

> AI products need a designed path for "I do not have enough evidence to say that."

## Abstention is interface design

It is tempting to treat uncertainty as a model-quality problem that disappears when the next model gets smarter. I think that misses the product responsibility.

The application decides what context the model gets, what claims it is allowed to make, how sources are represented, what happens when retrieval is weak, whether the user can inspect the evidence, and whether silence is considered an error.

Those are architecture and interface decisions.

A stronger model helps. It does not remove the need for boundaries.

## The product should earn the sentence

I increasingly like systems that behave as if every consequential sentence costs something.

Retrieve first. Measure what can be measured. Keep deterministic structure deterministic. Preserve provenance. Ask a clarifying question when applicability is uncertain. If the evidence is not there, let the missing sentence stay missing.

Less impressive in a demo, maybe.

More useful when the software matters.
