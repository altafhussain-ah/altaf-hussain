---
title: "The cost of a clever abstraction"
date: "2025-11-14"
summary: "Every abstraction is a bet that the future resembles the past. Most of mine have lost."
tags: ["Engineering", "Design"]
---

There's a particular kind of pull request I've learned to distrust — my own, written at the end of a long day, that replaces three similar-looking functions with one configurable one.

It always feels like progress. Three things became one thing. The diff is green. The tests pass.

Six months later someone needs a fourth case, and the one thing now takes a options object with nine keys, four of which are only valid in combination with each other.

## What actually happened

The three functions weren't duplicated. They were *coincidentally similar* — a different thing entirely. They looked alike at one moment in time, and I mistook that snapshot for a shared underlying rule.

Duplication is a signal, not a verdict. Before collapsing two pieces of code together, the question worth asking is: **if one of these changes, should the other change too?** If the honest answer is "probably not," they aren't duplicates. They're neighbours.

## A rule I actually follow

Wait for the third occurrence — but more importantly, wait until you've *seen one of them change*. A second instance tells you the shape repeats. Watching one diverge tells you whether the shape is real.

The cost of a wrong abstraction isn't the code. It's that every future reader now has to hold a false model of the system in their head to make sense of it.

Copy and paste is cheap. Untangling a bad abstraction is not.
