---
title: huhu
eyebrow: cognitive companion
summary: A local-only thinking companion that remembers what you write, usually stays silent, and only reflects patterns it can actually ground in your own words.
status: private experiment
role: creator / engineer
year: 2026
featured: true
order: 3
tags: [local AI, memory, silence, SQLite]
---
huhu began with a deliberately unfashionable premise: maybe the most useful thing an AI holding your thoughts can do is **remember everything and mostly say nothing.**

It is not a journal, coach or productivity bot. You write. It receives. Most turns end there. When the mirror speaks, it has to be brief, specific and grounded in material you actually wrote.

## Silence is an engineered output

A deterministic policy layer decides whether there is enough evidence to speak before a model is called. Advice is rejected. Unsupported patterns do not become insights. Corrections from the user are authoritative.

The architecture uses three local SQLite databases to separate captured writing, learned state and replayable responses. Retrieval is token-cheap and local; a Qwen-family model can run through an OpenAI-compatible local endpoint.

I built it because I wanted a system whose failure mode was **not saying enough**, rather than confidently inventing a story about me.
