# 05/30/2024 ESLint TSC Meeting Transcript

**fasttime:** TSC meeting anyone?

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Sorry,  got carried away looking at the retry release problem. 🙂

**nzakas:** Howdy!

**fasttime:** no problem, hi!

**nzakas:** First, let's go over action items from last time.

**nzakas:** So we decided to set up RFC duty, and it seems that we did that. 👍
 * 👍 @mdjermanovic, @fasttime

**nzakas:** @fasttime to create the "tsc waiting" label across repos

**fasttime:** It's set up in all public repos I think, except config-inspector
 * 👍 @nzakas

**nzakas:** I also added a tab to the Triage board for easy reference: https://github.com/orgs/eslint/projects/3/views/3
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next up: what we've been working on. I'll go first.

**nzakas:** I've spent most of my time split across two things: the `migrate-config` utility and the refactor that splits out the JavaScript-specific functionality to move us towards language plugins.

**nzakas:** @mdjermanovic ?

**mdjermanovic:** Mostly reviewing PRs (some big ones) and triaging issues. I also fixed a couple of bugs and updated release-please config in all repos.

**mdjermanovic:** Outside eslint org, I submitted a PR to eslint-plugin-react to support eslint v9.
 * 🎉 @nzakas

**fasttime:** Okay, I've been mostly doing triaging and code review, and I've worked on `getConfigStatus` in the config-array package: https://github.com/eslint/rewrite/pull/7

**fasttime:** And taking care of the RFCs of course
 * ❤️ @nzakas

**nzakas:** Seems like a good time to review RFC duty.

**nzakas:** Next week: me

**nzakas:** June 10: @mdjermanovic
 * 👍 @mdjermanovic

**nzakas:** June 17: @fasttime
 * 👍 @fasttime

**nzakas:** All right, now with all the ceremony out of the way: it looks like we don't have any issues flagged. Are there any topics anyone would like to discuss?

**fasttime:** nothing from my side

**mdjermanovic:** Nothing in particular from my side, too

**nzakas:** Me either. 🤷‍♂️

**nzakas:** Let's just talk about the release then

**fasttime:** I have time, if noone else available

**nzakas:** Thanks!

**mdjermanovic:** Thanks!

**nzakas:** I can check in around meeting time to make sure everything is going ok.

**fasttime:** Thanks!

**fasttime:** Checking which packages need to be released

**mdjermanovic:** I think only `eslint` (including `@eslint/js`)?

**fasttime:** eslint-scope?

**mdjermanovic:** There's not release PR for eslint-scope?

**fasttime:** Yeah, nope, it's only chores and cis

**mdjermanovic:** I closed non-releasable PRs
 * 👍 @fasttime

**fasttime:** so only eslint/eslint and @eslint/js
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** And if we manage to release `@eslint/config-array`, we could switch eslint to it
 * 👍 @nzakas, @fasttime

**fasttime:** Okay, so I'll start with the release tomorrow around meeting time
 * 👍 @mdjermanovic

**nzakas:** Sounds good, thanks!

**nzakas:** With that, we can call it a meeting. Thanks everyone! (And thanks @sam3k_ for the notes.)

**mdjermanovic:** Thanks!

**fasttime:** Thanks!
