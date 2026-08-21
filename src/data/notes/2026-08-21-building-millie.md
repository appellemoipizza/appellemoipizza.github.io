---
title: I'm building an AI to help run my one-person software company
summary: More agents were giving me more management work. Millie is my attempt to make the human talk to one operating partner instead of becoming the message bus between tools.
date: 2026-08-21
kind: log
draft: false
featured: true
project: millie
tags: [agents, company, orchestration, AI]
---
The promise of coding agents is that one person can do more. The slightly absurd failure mode is that you end up spending your day managing the agents that were supposed to remove work.

I could feel that happening.

One agent had project context. Another did research. Another reviewed code. I knew which model was good at what. I knew where the company facts lived, which service could be touched, what needed human approval and which branch was supposed to disappear when the job was done.

In other words, **I was the orchestration layer.**

Millie is my attempt to remove that job from myself.

## One interface, replaceable workers

The idea is deliberately simple at the top:

```text
me
↓
Millie
↓
relevant specialists / tools
↓
projects + evidence + approved services
↓
verification
↓
durable result
↓
back to me
```

I do not want to choose an agent for every request. I want to say what I am trying to achieve.

Underneath, the system can still be strict. A Builder can make bounded code changes but cannot silently deploy production. A Reviewer is independent. Company policy and evidence live outside project repositories. Models are qualified for roles rather than becoming defaults because they are fashionable. Context is loaded lazily instead of pouring the whole company into every prompt.

## The part that surprised me

Once I had a coordinating layer, it started to look useful for things beyond code.

Finance packets. Research. Company health. Opportunity scans. Visual briefs. Remembering what a project actually proved. Not because Millie needs to impersonate a department, but because the same core job keeps appearing: **take intent, find the relevant evidence and capabilities, produce a verified outcome, retain only what should survive.**

And now there is another small job I want it to do.

Notice when the work itself is worth talking about.

Not "generate me five LinkedIn ideas." More like:

> You changed this architecture three times and the reason the third version survived is interesting. I think this deserves a post.

That is the kind of AI assistance I want: less content generation, more noticing.
