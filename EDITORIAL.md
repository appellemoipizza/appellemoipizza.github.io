# Editorial loop

This site documents real work. It does not create work to feed a publishing schedule.

## Source loop

```text
project / research / operating work
        ↓
verified outcome, surprise, artifact, failure or reusable mechanism
        ↓
Millie content signal in Today brief or weekly Company Pulse
        ↓
human chooses: ignore | save | draft | film | turn into resource
        ↓
publicability + moat check
        ↓
draft entry in this repository (`draft: true`)
        ↓
human review / edit
        ↓
explicit publish approval
        ↓
`draft: false` → main → static deploy
```

## What deserves a signal

Surface an idea only when at least one is true:

- a real implementation produced a reusable lesson;
- a decision changed because evidence contradicted the first plan;
- there is a strong visual/demo artifact;
- a mechanism now exists in more than one project and may be reusable;
- a failure or operational mistake has a useful cause and fix;
- several projects reveal the same coherent point of view;
- a meaningful milestone has a story beyond "we shipped it."

No quota. Silence is correct when nothing is worth publishing.

## Signal shape

```text
I think this deserves a <post | vlog | short | resource | case study>.
Working title: <specific, not clickbait>
Why: <what changed / what is useful>
Evidence: <project, commit, artifact, report or source>
Best public proof: <safe demo, screenshot, diagram, aggregate number, before/after>
Publicability: safe | needs review | do not publish
Moat risk: low | medium | high
Smallest next step: <outline | capture footage | extract safe evidence | park>
```

Daily/TODAY: at most one signal, and only when strong.
Weekly Company Pulse: at most three ranked signals.

## Publication firewall

The goal is **public evidence of competence, private implementation advantage**.

A strong technical post should usually publish:

- the problem and why it matters;
- the constraints and assumptions that shape the problem;
- the experiment or evaluation question;
- safe methodology at a level that makes the conclusion credible;
- aggregate or sanitized evidence;
- what failed or changed the author's mind;
- the conclusion, limitation and next question;
- enough context for a non-specialist to understand the first layer without flattening the technical layer.

A strong post should usually withhold:

- the exact end-to-end recipe that reproduces a product advantage;
- proprietary prompts, hidden system instructions, routing rules or agent policies;
- exact thresholds, scoring weights, heuristics or decision boundaries that are part of the moat;
- private evaluation sets, held-out test cases or unpublished benchmark items;
- internal datasets, source lists or enrichment rules whose curation is costly or differentiating;
- unreleased architecture, roadmap, pricing, commercial strategy or customer pipeline;
- credentials, secrets, private URLs, identifiers, infrastructure topology or security-relevant detail;
- customer/user documents, personal data, confidential metrics or small-sample data that can identify someone;
- code whose main value is the proprietary implementation rather than the lesson;
- anything that may be patentable before an IP decision has been made.

A useful rule: **publish the question, evidence and lesson; keep the irreducible recipe private.**

## Three disclosure levels

Use the smallest level that still makes the post credible.

### Level 1 — concept
Explain the problem, mental model, constraints and result. No implementation specifics. Default for early product research and anything close to the moat.

### Level 2 — method
Explain the experimental setup, architecture shape, categories of techniques, safe diagrams and aggregate results. Omit exact proprietary parameters, private data, prompts and reproducible internal recipes. Default for mature technical posts.

### Level 3 — reproducible
Share code, exact methods, datasets or detailed implementation only when the work is intentionally open-source, already commoditized, strategically beneficial to release, or explicitly approved for publication.

Most posts on this site should be Level 1 or Level 2.

## Reader layers

Write substantial posts so they work at two depths:

1. **First layer:** what is the problem, why should a normal person care, and what did we learn?
2. **Second layer:** the actual technical/scientific reasoning, evidence, caveats and terminology for technical readers.

Accessible does not mean simplified into inaccuracy. Technical does not require being unreadable.

## Publicability gate

Before drafting from private work, remove or withhold:

- secrets, credentials, tokens, private URLs or identifiers;
- customer/user documents and personal data;
- confidential business or financial details not intentionally public;
- unreleased claims that would reveal product/company plans without approval;
- security weaknesses whose disclosure creates risk;
- copied source material that cannot be republished;
- proprietary implementation details whose disclosure materially reduces the cost of copying the product;
- potentially patentable inventions that have not been reviewed for filing strategy.

If in doubt, downgrade the disclosure level or keep the story private.

## Publishing authority

Millie may identify, outline and draft. She may create a `draft: true` entry on an isolated branch when asked.

Millie must never:

- publish automatically;
- merge a public draft merely because it is finished;
- change `draft: true` to `draft: false` without explicit human approval;
- expose private implementation detail to make a story more interesting;
- manufacture opinions, experiences or metrics in Thomas's voice;
- infer that a detail is safe merely because it exists in a repository;
- turn private evals, prompts, customer data or internal architecture into public examples without approval.

The human is the publication gate.
