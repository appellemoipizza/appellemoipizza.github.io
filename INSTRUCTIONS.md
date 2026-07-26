<!-- BOOTSTRAP:START -->
> ## BOOTSTRAP: this project has not been set up yet
>
> This file is still a template. Every `<FILL: ...>` below is unanswered, and
> until they are answered this project has no instructions.
>
> **Your first action in this repository is to resolve them. Not to write code.**
>
> **Rules. These are not negotiable.**
>
> 1. **Ask the human.** Do not infer answers from the repository name, the
>    directory contents, the git history, the language, or anything you already
>    know. A placeholder filled by inference is worse than an empty one, because
>    it looks answered.
> 2. **Ask once, grouped.** Read every `<FILL:>` in this file first, then ask all
>    the questions in one round. Do not drip-feed.
> 3. **Write the answer given, at the length given.** Do not expand a one-line
>    answer into a paragraph. Do not add plausible detail. Do not invent users,
>    metrics, goals, or roadmap items that were not stated.
> 4. **"Unknown" and "not yet" are valid answers.** Write them down as such.
>    Never replace an unknown with a reasonable-sounding guess.
> 5. **Delete rows, do not fake them.** If this project has no `MEMORY.md`,
>    delete that row from the file map. Do not create the file to match the
>    template.
> 6. **When every placeholder is resolved, delete this whole block** and commit
>    with `chore: bootstrap project instructions`.
>
> The point of this block is that the project describes itself accurately from
> day one. An `INSTRUCTIONS.md` full of confident, invented content is actively
> harmful: every future session will trust it.
<!-- BOOTSTRAP:END -->

# INSTRUCTIONS

Read this after `AGENTS.md`, before touching anything.

These are actions, not advice. Each names the trigger that makes it mandatory.
When a trigger fires, the action is required and the task is not done without it.
When it does not fire, skip it and say so.

This is the only file that refers to other files. If a file matters here, it is
in the map below. If it is not in the map, it does not exist as far as you are
concerned.

## 1. Project facts

- **Name:** `<FILL: project name>`
- **What it is:** `<FILL: one sentence. What it does, for whom.>`
- **Status:** `<FILL: pre-v1.0 R&D | live | parked>`
- **Machine:** `<FILL: Mac | PC>` . This repository is only ever worked on
  there. A copy on any other machine is a read-only mirror. Never commit in one.
- **Stack:** `<FILL: language, framework, package manager>`
- **Run:** `<FILL: command>`
- **Test:** `<FILL: command>`
- **Build:** `<FILL: command, or "none">`

## 2. File map

| File | Holds | Update trigger |
|---|---|---|
| `CLAUDE.md` | pointer to `AGENTS.md` | never |
| `AGENTS.md` | how to behave, shared by all projects | never, edit the template instead |
| `INSTRUCTIONS.md` | this file | a file is added or removed, or its rules change |
| `STATE.md` | what is in progress **right now** | after every completed step, and always before ending a session |
| `MEMORY.md` | measured facts and gotchas the code does not state | you measured or discovered something durable |
| `CHANGELOG.md` | released versions, newest first | **never by hand**, release-please generates it |
| `ROADMAP.md` | what is planned, in order | an item is finished, dropped, or reordered |
| `README.md` | what this is and how to run it | setup, commands, or public interface changed |
| `docs/decisions/` | one file per decision, MADR format | a decision was made between real alternatives |

`<FILL: delete any row this project does not have. Add rows for files it has
that are not listed. Never invent a file to match the template.>`

## 3. Conventions

This project follows these standards. They are not optional and they are not
project-specific opinions.

- **[Conventional Commits](https://www.conventionalcommits.org)** for every
  commit message. `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`, and
  `!` or a `BREAKING CHANGE:` footer for breaking changes. The type is English
  and machine-read; the description is prose. A `commit-msg` hook rejects
  anything else.
- **[Semantic Versioning](https://semver.org)**. Versions are computed from
  commit types, never chosen by hand.
- **[Keep a Changelog](https://keepachangelog.com)** for `CHANGELOG.md`, written
  by release-please from the commits. Do not edit it by hand.
- **[MADR](https://adr.github.io/madr/)** for `docs/decisions/`.
- **GitHub Flow.** Short branch off `main`, pull request, merge. `main` is always
  releasable.

## 4. Start of every session

The repository is the history. The conversation is not.

1. **Read `STATE.md` first.** If it describes work in progress, that is where
   you are. Resume from its next action. Do not ask the human to re-explain
   what it already says.
2. `git log --oneline -20`, `git status`, `git branch -a`, `git tag`
3. Read `MEMORY.md`, the top of `CHANGELOG.md`, and the current section of
   `ROADMAP.md`.
4. Where a document disagrees with git, **git wins**. Say which document is
   stale rather than propagating it.
5. State in one line where the project stands, then wait. Do not start work
   that was not asked for.

## 5. Before calling any piece of work done

State the outcome of each, including "not applicable" and why.

- [ ] **Tests pass.** Give the command and its actual output, not the expected one.
- [ ] **A real user flow completes**, for anything user-facing.
- [ ] **It is observable.** Logs, errors, or analytics fire. Shipped in the same
      change as the feature, never "we will add it later".
- [ ] **`ROADMAP.md` matches reality.** Trigger: an item finished or changed.
- [ ] **`README.md` still accurate.** Trigger: setup, commands, or interface changed.
- [ ] **Decision recorded in `docs/decisions/`.** Trigger: you chose between real
      alternatives. Include reversibility and a revisit trigger.
- [ ] **`MEMORY.md` updated.** Trigger: you measured or discovered something
      durable. Update in place, flag contradictions, absolute dates.
- [ ] **`STATE.md` rewritten.** Always. Emptied to "No work in progress" if the
      work shipped, otherwise describing exactly where you stopped and what the
      next action is.
- [ ] **Commit message follows Conventional Commits.**
- [ ] **Not pushed.** Pushing needs an explicit go, every time.

`STATE.md` is also rewritten after **every completed step**, not only here. A
crash or a closed laptop should cost one step, never a session.

## 6. Project specifics

`<FILL: anything true of this project and no other. Enforced conventions, known
traps, what a newcomer gets wrong, and what currently counts as a signal that a
change was worth making. If the human has no answer yet, write "none yet" and
leave it.>`
