---
title: "What offline-first really costs"
date: "2025-04-21"
summary: "Sync is not a feature you add. It is a decision about what truth means in your app."
tags: ["Engineering", "Architecture"]
---

"Let's make it work offline" sounds like a scope item. It isn't. It's a change to the definition of correctness.

In a server-authoritative app there's exactly one answer to "what is the current state?" — whatever the database says. Go offline-first and you now have N answers, one per device, all of them legitimately current from their own point of view. Everything downstream inherits that.

## The three things that get harder

**Identity.** Client-generated IDs, because the server isn't there to assign one. Which means UUIDs everywhere, which means your indexes and your URLs get uglier.

**Ordering.** Wall-clock timestamps are a trap — two devices disagree about what time it is, and one of them is about to win an argument it should have lost. You need logical clocks, and you need to decide what "last" means before you need it.

**Deletion.** You can't delete a row. You can only write a tombstone and hope everyone sees it, because a device that's been offline for a month will happily resurrect anything that's merely *missing*.

## What you get back

For the right product, all of it is worth paying. Reads are instant because they're local. The app keeps working on a train. And the sync layer, once built, tends to give you real-time collaboration nearly for free — it's the same machinery pointed at a different problem.

## The question to ask first

Not "can we make this work offline" — you can — but **how often are two people going to edit the same thing at the same time?**

If the answer is "almost never," last-write-wins with a visible conflict banner will carry you a very long way, and you can skip most of the theory. If the answer is "constantly," budget for CRDTs and budget honestly. It is a quarter, not a sprint.
