---
title: motes
eyebrow: living notes field
summary: A local viewer that turns a folder of Markdown into a drifting pixel field where notes cluster into habitats and connections become visible.
status: active experiment
role: creator / engineer
year: 2026
featured: true
order: 4
tags: [Go, canvas, knowledge, local-first]
---
motes watches a normal folder of Markdown. It does not own capture, invent a new note format or ask you to migrate your thinking into another app.

A deterministic Go engine parses the notes, computes relatedness, discovers habitats and serves a small JSON graph. A thin desktop shell or daemon renders that graph as a living pixel field.

## Why a field instead of another graph

Most knowledge tools make structure feel like database administration. I wanted notes to feel more like objects accumulating on a desk: some drift together, some become bridges, some form little territories before you consciously name them.

The optional LLM layer follows the same rule I keep rediscovering elsewhere: **deterministic before inference, evidence or silence.** The field works without AI. A model can add a suggestion when the evidence is good enough; it never gets to become the source of truth.
