Branch `simplify-journal-and-article-layout`, 2 commits, not pushed. Waiting on Thomas's go to push and open a PR.

- Removed ROADMAP.md and its references (this is a personal site, not a roadmapped product).
- Deleted orphaned pre-journal layout code: `BaseLayout.astro`, `global.css`, `ProjectCard.astro`, `NoteRow.astro` (none were imported anymore).
- Deleted two notes ("What this site is for", "I want AI to say less"); kept "I'm building an AI to help run my one-person software company" as the only live note.
- Redesigned `src/pages/notes/[id].astro`: article now reads as two greyscale cards — photo+metadata header, then body. Code/schema/data fences render as their own dark card with a language tag.
- Added `src/data/notes/2026-08-21-how-millie-decides.md`, a technical companion to the kept post (routing/task-envelope schema, pseudocode, sanitized outcome-trace example). `draft: true`, Level 2 disclosure per EDITORIAL.md — needs human review before publishing.
- `npm run check` passes, 0 errors.

Next action: get explicit approval to push the branch and open a PR; separately, get approval to flip the new note's `draft` to `false` once reviewed.
