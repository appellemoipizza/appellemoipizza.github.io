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
- **What it is:** Personal research journal and publishing site for software, AI systems, experiments, films and useful things learned by making them.
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
| `README.md` | what this is and how to run/publish | setup, commands, or public interface changed |
| `EDITORIAL.md` | Millie handoff, publication workflow and disclosure firewall | publishing/publicability rules change |
| `docs/decisions/` | one file per decision, MADR format | a decision was made between real alternatives |
| `src/pages/index.astro` | permanent authored visit-card front door | only on explicit human request |
| `src/pages/home.astro` | quiet research-journal home | journal layout or publishing surface changes |
| `src/layouts/JournalLayout.astro` | shared journal shell/rail/room styling | journal navigation or visual shell changes |
| `src/data/notes/` | public/draft writing and video metadata | a post is drafted or published |
| `public/assets/` | dithered personal imagery and post assets | visual assets change |

## 3. Conventions

- **Conventional Commits** for every commit message.
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

- [ ] **Tests pass.** Give the command and its actual output.
- [ ] **A real user flow completes**, for anything user-facing.
- [ ] **It is observable.** Build/deploy failures are visible.
- [ ] **`ROADMAP.md` matches reality.** Trigger: an item finished or changed.
- [ ] **`README.md` still accurate.** Trigger: setup, commands, or interface changed.
- [ ] **Decision recorded in `docs/decisions/`.** Trigger: you chose between real alternatives.
- [ ] **`MEMORY.md` updated.** Trigger: you measured or discovered something durable.
- [ ] **`STATE.md` rewritten.** Always. Empty to "No work in progress" if the work shipped.
- [ ] **Commit message follows Conventional Commits.**
- [ ] **Not pushed without explicit human approval.**

## 6. Project specifics

- The site is Thomas's personal research/creative surface, not the Always Late corporate site.
- `/` is a permanent authored front door. Preserve its one-screen simplicity, 3D tilt, grab-to-flip, cursor/pixel trail, dither swaps and personal identity unless Thomas explicitly asks to change them.
- `/home` is a quiet research journal, not a product dashboard, creator funnel or forced visual universe.
- Keep the Japanese/dithered/late-night personal-computer character, but do not make every post carry a mascot, illustration system or elaborate art direction.
- Git is the CMS. Public writing lives as Markdown content in-repo; no CMS, database, account system or admin UI without evidence that one is needed.
- Publishing must remain dead simple: decide → write one Markdown file → optionally add one image → review → publish.
- Text-only posts are first-class. Never block publication because an image or visual concept is missing.
- Write for two depths: a normal reader should understand the problem and why it matters; a technical reader should find real methodology, evidence, caveats and terminology below that layer.
- Accessible does not mean oversimplified. Technical does not mean unnecessarily opaque.
- `EDITORIAL.md` is mandatory for any draft derived from private work. Use its disclosure levels and moat-risk gate.
- Public evidence of competence is desirable; reproducible disclosure of proprietary advantage is not.
- Millie may recommend and draft content from real work, but must never publish, disclose private repository details, or flip `draft: true` to public without explicit human approval.
- Do not manufacture a posting cadence. A post exists when the work produced something worth documenting.
