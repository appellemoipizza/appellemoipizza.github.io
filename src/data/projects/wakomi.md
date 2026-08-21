---
title: Wakomi
eyebrow: resident companion
summary: An iOS-first AI companion for international residents of Japan: understand documents, ask administrative questions, translate and prepare Japanese with evidence attached.
status: pre-v1.0
role: founder / product / system design
year: 2026
featured: true
order: 2
tags: [iOS, on-device AI, Japan, evidence]
---
Wakomi is built around a high-stakes but ordinary problem: living in another country generates paper, rules, deadlines and conversations that are hard to navigate when the language and institutions are unfamiliar.

The product starts with conversation, documents and verified guides. A resident can show a Japanese notice, ask what it means, translate something, or prepare Japanese they need to say or send.

## The architecture has to respect the stakes

Official rules and values read from a person's own document are different kinds of evidence. Wakomi keeps that boundary explicit. An official source can explain a rule; it cannot silently prove that the rule applies to this resident.

Private document context stays local-first. OCR, translation and on-device model work are treated as product architecture rather than privacy copy added at the end.

## The part I care about most

The durable moat is not a chatbot transcript. It is an inspectable evidence system: source scope, age, applicability, document provenance, evaluations and the ability to say **this is what I know, this is what I read from your paper, and this is where uncertainty remains.**
