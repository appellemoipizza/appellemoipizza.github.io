---
status: accepted
date: 2026-08-21
reversibility: two-way door
revisit-trigger: Publishing friction or dynamic requirements that cannot be solved cleanly with static content.
supersedes: none
superseded-by: none
---

# 0001. Use a static Astro publishing system

## Context and problem statement

The existing personal site is a strong visual business card but cannot naturally hold project case studies, writing, films and reusable resources. The goal is a personal lab where publishing follows real work without adding a CMS or operating burden.

## Considered options

- Continue hand-authoring standalone HTML pages.
- Use Astro with local Markdown content collections and static output.
- Add a hosted CMS/database and dynamic application layer.

## Decision outcome

Chosen: **Astro with local Markdown content collections and static output**.

### Value

Git remains the source of truth, content gets typed frontmatter and reusable routes, RSS is simple, and the site can grow from a few notes to a substantial archive without becoming an application to operate.

### Cost

A Node build step and framework dependency are introduced. Publishing locally requires `npm install` and a static build instead of editing one HTML file.

### Risk

GitHub Pages must use the Actions deployment path for Astro output. The existing root static site is retained as a fallback until that deployment is verified.

### Consequences

- Good: no CMS, database, accounts or server runtime.
- Good: projects and notes share one maintainable design system.
- Good: draft content can exist safely in-repo without being routed or fed to RSS.
- Bad: framework upgrades and npm dependencies now exist.
- Bad: non-technical editing is less convenient than a hosted CMS.

## More information

Astro 7 content collections and GitHub Pages deployment were checked against current official Astro documentation on 2026-08-21 before implementation.
