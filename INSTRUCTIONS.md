# INSTRUCTIONS

Read this after `AGENTS.md`, before touching anything.

These are actions, not advice. Each names the trigger that makes it mandatory.
When a trigger fires, the action is required and the task is not done without it.
When it does not fire, skip it and say so.

This is the only file that refers to other files. If a file matters here, it is
in the map below. If it is not in the map, it does not exist as far as you are
concerned.

## 1. Project facts

- **Name:** Thomas Vezzani — personal lab
- **What it is:** Personal publishing site for Thomas's software, AI systems, experiments, films, and reusable resources.
- **Status:** live
- **Machine:** Mac. This repository is only ever worked on there. A copy on any other machine is a read-only mirror. Never commit in one.
- **Stack:** Astro 7, TypeScript, Markdown content collections, npm
- **Run:** `npm run dev`
- **Test:** `npm run check`
- **Build:** `npm run build`

## 2. File map

| File | Holds | Update trigger |
|---|---|---|
| `CLAUDE.md` | pointer to `AGENTS.md` | never |
| `AGENTS.md` | how to behave, shared by all projects | never, edit the template instead |
| `INSTRUCTIONS.md` | this file | a file is added or removed, or its rules change |
| `STATE.md` | what is in progress **right now** | after every completed step, and always before ending a session |
| `MEMORY.md` | measured facts and gotchas the code does not state | you measured or discovered something durable |
| `ROADMAP.md` | what is planned, in order | an item is finished, dropped, or reordered |
| `README.md` | what this is and how to run it | setup, commands, or public interface changed |
| `docs/decisions/` | one file per decision, MADR format | a decision was made between real alternatives |
| `index.html` | current legacy visit-card homepage | removed when the Astro publishing surface ships |
| `style.css` | current legacy visit-card styles | removed when the Astro publishing surface ships |
| `script.js` | current legacy visit-card interaction | removed when the Astro publishing surface ships |
| `assets/` | current dithered personal imagery and icons | preserve/migrate when the visual system changes |

## 3. Conventions

This project follows these standards. They are not optional and they are not project-specific opinions.

- **Conventional Commits** for every commit message. `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`, and `!` or a `BREAKING CHANGE:` footer for breaking changes.
- **Semantic Versioning**. Versions are computed from commit types, never chosen by hand.
- **MADR** for `docs/decisions/`.
- **GitHub Flow.** Short branch off `main`, pull request, merge. `main` is always releasable.

## 4. Start of every session

The repository is the history. The conversation is not.

1. Read `STATE.md` first. If it describes work in progress, resume from its next action.
2. Inspect recent git history/status/branches/tags.
3. Read `MEMORY.md` and the current section of `ROADMAP.md`.
4. Where a document disagrees with git, git wins. Say which document is stale rather than propagating it.
5. State in one line where the project stands, then wait. Do not start work that was not asked for.

## 5. Before calling any piece of work done

State the outcome of each, including "not applicable" and why.

- [ ] **Tests pass.** Give the command and its actual output, not the expected one.
- [ ] **A real user flow completes**, for anything user-facing.
- [ ] **It is observable.** Build/deploy failures are visible; analytics are optional and must remain privacy-respecting.
- [ ] **`ROADMAP.md` matches reality.** Trigger: an item finished or changed.
- [ ] **`README.md` still accurate.** Trigger: setup, commands, or interface changed.
- [ ] **Decision recorded in `docs/decisions/`.** Trigger: you chose between real alternatives. Include reversibility and a revisit trigger.
- [ ] **`MEMORY.md` updated.** Trigger: you measured or discovered something durable.
- [ ] **`STATE.md` rewritten.** Always. Empty to "No work in progress" if the work shipped.
- [ ] **Commit message follows Conventional Commits.**
- [ ] **Not pushed without explicit human approval.**

## 6. Project specifics

- The site is Thomas's personal research/creative surface, not the Always Late corporate site.
- Keep the existing Japanese/dithered/late-night personal-computer character. Do not turn it into a generic developer portfolio or SaaS landing page.
- Git is the CMS. Public writing and case studies live as Markdown content in-repo; no CMS, database, account system, or admin UI without evidence that one is needed.
- Prefer static output and minimal client JavaScript.
- `src/data/notes/` is public writing/video metadata; `src/data/projects/` is selected public work. Draft entries must never appear in production routes, feeds, or indexes.
- Millie may recommend and draft content from real work, but must never publish, disclose private repository details, or flip `draft: true` to public without explicit human approval.
- A content idea is worth surfacing when real work produced a useful lesson, visual artifact, reusable mechanism, surprising decision, failure/reversal, or coherent story. Do not manufacture a posting cadence.
- Anything derived from private company/product work needs a publicability check before drafting: no secrets, private customer data, credentials, confidential commercial detail, or unannounced facts.
- Current success signal: the site makes it easy to understand what Thomas builds, browse selected work, publish a note/video by adding one Markdown file, and expose reusable resources without turning commerce into the homepage.
