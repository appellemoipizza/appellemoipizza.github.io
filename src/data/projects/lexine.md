---
title: Lexine
eyebrow: private professional AI
summary: An on-premises assistant that answers professionals from their own documents and indexed corpus, with citations and explicit abstention when the evidence does not support an answer.
status: R&D
role: founder / AI engineering
year: 2026
featured: true
order: 6
tags: [RAG, local AI, FastAPI, professional tools]
---
Lexine explored a simple question: what would an AI assistant for confidential professional work look like if **the documents never left the office and admitting uncertainty was part of the product contract?**

One mode retrieves from an indexed corpus using hybrid full-text and vector search. Another answers only from a document pasted for the current task. Both are designed around epistemic boundaries rather than a model being encouraged to complete the sentence at any cost.

The first target was Belgian notarial work, but the architecture is deliberately transferable to other professions dealing with sensitive documents.

Lexine is one of the systems that pushed me toward a recurring principle: a grounded AI product is not just a prompt plus citations. The refusal path, retrieval scope and user's ability to inspect where an answer came from are core interface features.
