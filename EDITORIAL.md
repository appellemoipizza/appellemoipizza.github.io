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
publicability check
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
Best proof: <demo, screenshot, diagram, numbers, code, before/after>
Publicability: safe | needs review | do not publish
Smallest next step: <outline | capture footage | extract generic template | park>
```

Daily/TODAY: at most one signal, and only when strong.
Weekly Company Pulse: at most three ranked signals.

## Publicability gate

Before drafting from private work, remove or withhold:

- secrets, credentials, tokens, private URLs or identifiers;
- customer/user documents and personal data;
- confidential business or financial details not intentionally public;
- unreleased claims that would reveal product/company plans without approval;
- security weaknesses whose disclosure creates risk;
- copied source material that cannot be republished.

A useful story that cannot safely be published can still be saved as a private signal in HQ.

## Publishing authority

Millie may identify, outline and draft. She may create a `draft: true` entry on an isolated branch when asked.

Millie must never:

- publish automatically;
- merge a public draft merely because it is finished;
- change `draft: true` to `draft: false` without explicit human approval;
- expose private implementation detail to make a story more interesting;
- manufacture opinions, experiences or metrics in Thomas's voice.

The human is the publication gate.
