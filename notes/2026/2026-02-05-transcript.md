# 02/05/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just looking over last meeting's notes

**nzakas:** Looks like we didn't have anything to follow up on, so let's get started with statuses.

I unexpectedly didn't have much time this week or last week, so I mostly focused on issue/PR triage.

**mdjermanovic:** I was working on tasks for the final ESLint v10.0.0 release, and reviewing PRs.

**fasttime:** I worked on removing `FlatESLint` and `LegacyESLint` exports and adding support for `Array.fromAsync` to core rules, and reviewing PRs.

**nzakas:** Let's discuss availability for the next couple of weeks.

I should mostly be back to 0.5-1 hours per weekday for the next two weeks.

**mdjermanovic:** I should be available around 1-1.5h each day.

**fasttime:** I expect to be available 7-9 hours per week the next couple of weeks

**nzakas:** RFC Duty:
This week - @nzakas 
Feb 9 - @mdjermanovic 
Feb 16 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We don't have any issues tagged for the agenda. Is there anything non-v10-related anyone wants to discuss?

**mdjermanovic:** Nothing from my side

**fasttime:** Nothing from me either

**nzakas:** Okay then we'll start with v10, then do Contributor Pool for January.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Are we on track for v10.0.0 tomorrow?

**mdjermanovic:** I believe everything is ready
 * 🎉 @nzakas, @fasttime

**mdjermanovic:** I just wouldn't be available tomorrow

**nzakas:** Right. It looks like you've documented everything in these two issues:
https://github.com/eslint/eslint/issues/20326
https://github.com/eslint/eslint/issues/20459

**mdjermanovic:** Yes, all PRs are prepared and have at least one approval, and I left an ordered task list on the release issue

**nzakas:** It looks like everything for https://github.com/eslint/eslint/issues/20326 has already been merged?

**mdjermanovic:** No, but those are not urgent tasks

**nzakas:** Oh I see, those are "original PRs"

**mdjermanovic:** Some are still blocked, but they can be done after the release, when possible

**mdjermanovic:** For the release, tasks on https://github.com/eslint/eslint/issues/20459 are important
 * 👍 @nzakas

**fasttime:** I think some PRs in https://github.com/eslint/eslint/issues/20459 can be merged in advance so we don't have to do that while releasing

**nzakas:** Yeah, I think everything related to the v9.x branch can be done now?

**fasttime:** https://github.com/eslint/eslint/pull/20452
https://github.com/eslint/eslint/pull/20453
 * 👍 @mdjermanovic

**mdjermanovic:** Hm, it's possible we could already merge the two link checker PRs

**mdjermanovic:** Yes, those two can definitely be merged now.

**fasttime:** Also https://github.com/eslint/eslint/pull/20466 and https://github.com/eslint/eslint/pull/20467 I think

**mdjermanovic:** For those two, I'm not 100% sure, but since they're already passing CI checks it's most likely they're also safe to merge now.

**nzakas:** Looks like it.

**mdjermanovic:** The remaining 3 I think should wait for the release time (1 right before, and the other 2 right after the release)
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, it looks like we're in good shape.

**mdjermanovic:** I also tested the release process locally and everything seemed fine.
 * 👍 @nzakas

**nzakas:** I'm available tomorrow about an hour after this meeting time. (Maybe a little earlier depending on traffic.)

**nzakas:** So I can do the release, though I think it would be helpful if @fasttime were around for another set of eyes.

**fasttime:** I will be around!
 * 🙏 @nzakas

**mdjermanovic:** For eslint release, RELEASE_TYPE should be `latest`
 * 👍 @nzakas, @fasttime

**mdjermanovic:** For `@eslint/js` release, due to the patch we are doing to skip already published 10.0.0, RELEASE_TYPE should be `patch`, and we'll release 10.0.1
 * 👍 @nzakas, @fasttime

**mdjermanovic:** RELEASE_BRANCH is `main` for both
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think we're ready. Any other v10-related topics?

**mdjermanovic:** Nothing in particular I see

**fasttime:** There are other packages awaiting release but I think those aren't important for v10

**nzakas:** Nothing critical, no

**fasttime:** https://github.com/pulls?q=org%3Aeslint+is%3Apr+label%3A%22autorelease%3A+pending%22+is%3Aopen

**mdjermanovic:** I also don't see anything critical for eslint v10

**nzakas:** Ah, looks like for some reason the ESLint Bot commits are now failing CI. I'll file an issue with EasyCLA to add that as an exception.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** https://github.com/openjs-foundation/infrastructure/issues/100

**nzakas:** All right, let's talk Contributor Pool.

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-02-01-contributor-pool.md

**nzakas:** Like last time, are there any that are really too small to receive an award?

**fasttime:** Doesn't really look like

**nzakas:** I'd suggest Sethamus and ntnyq's PRs are quite small

**nzakas:** Especially when compared to ST-DDT and patricktree

**fasttime:** Yes, those two were the largest

**mdjermanovic:** Yeah, compared to those two

**fasttime:** Then shall we first reward the two big ones and then share what's left?

**nzakas:** Here's what I'd suggest:
patricktree - $300
ST-DDT - $200
xbinaryx - $150

That would leave us with $266 left.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And remember, we do not have to award all that is available.

**nzakas:** cryptnix is also fairly small, so we could stop there and bump up the amounts to those three.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** patricktree - $400
ST-DDT - $300
xbinaryx - $200
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll let them know.

**fasttime:** Thanks!

**nzakas:** Any last topics before we close?

**mdjermanovic:** Nothing in particular for today from my side

**fasttime:** Nothing else I think

**nzakas:** All right, thanks everyone (and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye bye
