---
status: proposed
date: YYYY-MM-DD
reversibility: two-way door
revisit-trigger: none
supersedes: none
superseded-by: none
---

# NNNN. Short title, in the imperative

<!--
Copy this file to NNNN-short-title.md with the next number. Keep it short: a
decision that needs three pages is two decisions.

reversibility
  two-way door  cheap to undo. Decide fast, write two lines, move on.
  one-way door  costly or impossible to undo: public APIs, data schemas,
                pricing, brand, core UX patterns users learn, anything a
                client depends on. These need the tradeoffs written out and
                an explicit go before proceeding.

revisit-trigger
  A metric, a date, or a condition that would reopen this. "none" is a valid
  answer for a two-way door. Without one, a decision quietly becomes an
  unquestioned default, and those are the ones that look absurd two years
  later when nobody remembers why.
-->

## Context and problem statement

What is the problem, for whom, and why now. Two or three sentences.

## Considered options

- Option A
- Option B
- Option C

## Decision outcome

Chosen: **Option X**, because ...

### Value

What outcome this unlocks.

### Cost

Time, complexity, and ongoing maintenance.

### Risk

What breaks if this is wrong, and who pays for it.

### Consequences

- Good: ...
- Bad: ...

The test of a decision written well: someone who disagrees with it can still
explain why it was chosen.

## More information

Links, measurements, anything that would be needed to re-open this.
