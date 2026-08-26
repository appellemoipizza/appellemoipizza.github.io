---
title: Measuring the cost of a context switch
summary: Four weeks of self-logged task switches, timestamped and bucketed, to replace a feeling I kept asserting with a number I could actually check.
date: 2026-08-23
kind: note
draft: true
featured: false
tags: [self-tracking, focus, data]
---
"Switching costs me about twenty minutes" is a sentence I'd said out loud for years without ever having checked it. This note checks it.

## Method

Every task switch during working hours was logged for 27 consecutive days (2026-07-27 to 2026-08-22): a timestamp at the moment of switching, plus the project, module, and stack of the context being left and entered. Recovery time was defined operationally, not subjectively, elapsed minutes from the switch timestamp to the first substantive edit in the new context, where "substantive" means a diff of five or more changed lines. Switches shorter than 90 seconds (tab-checks, not real re-entries) were discarded.

```text
switch timestamp
  -> log {from, to, stack_from, stack_to}
  -> watch filesystem + editor events in `to`
  -> first diff >= 5 lines  =>  recovery_time = t(diff) - t(switch)
  -> bucket by category, append to dataset
```

118 switches passed the filter. Four categories emerged from the from/to metadata:

```text
A  same project, same module        adjacent function, same file area
B  same project, different module   same repo, unrelated subsystem
C  different project, same stack    e.g. two TypeScript/Astro codebases
D  different project, different stack   e.g. Go service -> React app
```

## Results

| category | n  | mean (min) | median (min) | sd   |
|----------|----|-----------:|--------------:|-----:|
| A        | 34 |        4.1 |           3.0 |  2.6 |
| B        | 41 |        9.7 |           8.0 |  4.9 |
| C        | 26 |       14.3 |          12.5 |  6.1 |
| D        | 17 |       23.8 |          21.0 |  8.4 |

Recovery time by category, all 118 switches, 2-minute bins:

```text
 0- 2 |####                              4
 2- 4 |##########                       10
 4- 6 |##################               18
 6- 8 |######################           22
 8-10 |###################              19
10-12 |##############                   14
12-14 |##########                       10
14-16 |#######                           7
16-18 |#####                             5
18-20 |###                               3
20-22 |##                                2
22-24 |####                              4
```

The distribution is bimodal in shape, not smooth, a fast cluster around 4–8 minutes (mostly categories A and B) and a slower, thinner tail past 12 minutes that is almost entirely C and D. There is effectively no overlap between "same stack" and "different stack" switches past the 16-minute mark; every switch that took longer than that changed language.

## What actually moved the number

Distance between projects predicted recovery time less than distance between *stacks* did. B and C sit at similar conceptual distance, "somewhere else in something familiar" versus "something familiar, elsewhere", but C costs 47% more. The switching cost isn't really about the project boundary. It's about how much of the mental state being carried over (syntax, idioms, the shape of the standard library) is invalidated on arrival.

## Limitations

N=118 from a single subject over one month is a log, not a study, nothing here generalizes past this desk. The five-line-diff threshold for "recovered" is a proxy, not a measure of actual comprehension; it's possible to type five substantive-looking lines before you're really back. And the categories were assigned after the fact from repo metadata, not decided in advance, which leaves room for the boundaries to have been drawn to fit the data rather than the reverse. Worth rerunning with the buckets fixed beforehand before I trust the D number specifically, n=17 is thin.

The number I'll actually keep using: twenty minutes was roughly right for a stack switch, and roughly triple the real cost everywhere else.
