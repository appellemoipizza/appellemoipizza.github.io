# Technical post template

Use this as a drafting aid, not as a mandatory public section structure.

## Frontmatter

```yaml
---
title: <specific title>
summary: <one or two sentences a non-specialist can understand>
date: YYYY-MM-DD
kind: note # note | essay | film | log
draft: true
featured: false
image: /posts/<slug>/cover.png # optional
tags: []
---
```

## Before writing

- **Why is this worth documenting?**
- **Disclosure level:** 1 concept | 2 method | 3 reproducible
- **Moat risk:** low | medium | high
- **Potentially patentable?** yes | no | unsure
- **Sensitive data involved?** yes | no
- **Private implementation advantage involved?** yes | no

If patentable = yes/unsure, sensitive data = yes, or moat risk = high, do not publish until explicitly reviewed.

## Reader layer 1 — understand the work

### The problem
What is happening, and why should someone who does not know the implementation care?

### The idea
What mental model or hypothesis did you use? Explain the category of approach, not necessarily the proprietary recipe.

### What happened
What did the experiment/build/research show? Prefer safe aggregate evidence, screenshots, diagrams or sanitized examples.

## Reader layer 2 — technical depth

### Setup / method
Give enough information for a technical reader to assess whether the conclusion is credible. Use architecture shapes, experimental design, constraints, comparison baselines and categories of technique.

Do **not** automatically include exact prompts, hidden policies, private eval cases, internal datasets, thresholds, scoring weights, infrastructure topology or unreleased architecture.

### Evidence
What data or observations support the conclusion? State uncertainty and sample size where relevant.

### What failed / changed
What did not work, what surprised you, or what changed your mind?

### Limitations
What does this result not prove? What remains unknown?

### Next question
What is now worth investigating?

## Private-only publication check — remove before publishing

- What exact detail would reduce a competent competitor's reproduction cost the most?
- Is that detail necessary for the reader to trust the conclusion?
- Can it be replaced by a category, range, diagram, aggregate result or sanitized example?
- Does any example expose a real user/customer, private document, private URL, internal identifier or confidential metric?
- Does the post expose a held-out evaluation set or teach someone how to optimize against it?
- Does it reveal unreleased roadmap, pricing, vendor negotiation, commercial strategy or operational weakness?
- Would public disclosure interfere with a possible patent filing?

Default rule: **publish the question, evidence and lesson; keep the irreducible recipe private.**
