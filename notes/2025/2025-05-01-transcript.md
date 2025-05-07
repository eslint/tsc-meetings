# 05/01/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**mdjermanovic:** Hi!

**nzakas:** Just pulling up last TSC meeting notes

**nzakas:** Looks like the only action item was to dedicate one day each week to reviewing team PRs. How did that go?

**mdjermanovic:** It went fine with me, spent more than one day this week

**fasttime:** For me it was more like every day 😅

**nzakas:** Hehe. I actually check every day because I have time to do so. It was really more a minimum than a maximum, to give us all permission to focus for at least one day.

**nzakas:** Let's do statuses. This past two weeks I've been working on CSSTree and doing some refactoring of `Linter` in preparation for the core rewrite (more PRs coming for that). Overall goal is to split out a lot of the functionality into easier-to-manage pieces and then figure out an API on top of it.

**mdjermanovic:** I was mostly reviewing PRs. Also fixed a bug with circular references in RuleTester. I plan to focus on RFCs in the coming days.

**fasttime:** I was mostly busy reviewing PRs and issues.

**nzakas:** RFC Duty:
This week - @nzakas 
May 5 - @mdjermanovic 
May 12 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** (Please double-check 😅 )

**nzakas:** And availability for the next two weeks.

My plan right now is for 3 hours each week day unless some freelance stuff pops up. I'll drop a note in Discord if that happens.

**mdjermanovic:** I think I'll be able to work 1.5-2 hours each day

**fasttime:** I should be able to work 10-12 hours a week

**nzakas:** Looks like no issues or PRs are flagged. Anything anyone wants to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Also nothing in particular from me

**nzakas:** I've got a few things to quickly go over.

**nzakas:** https://github.com/eslint/eslint/issues/19462

**nzakas:** Specifically this comment: https://github.com/eslint/eslint/issues/19462#issuecomment-2794319204

**nzakas:** If you can please think about and comment on this after the meeting, I'd appreciate it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Other things is I'd like to get both of your RFCs approved soon. I think the `basePath` one is probably the only thing holding up a v10 (which I think we should do soon), and the concurrency one seems ready to move into a prototype to me.

**mdjermanovic:** I'll focus on the `basePath` RFC from the next week
 * 👍 @nzakas, @fasttime

**nzakas:** Please also comment on the concurrency one

**mdjermanovic:** Yes, I'll also review the concurrency one

**fasttime:** I could work on a prototype for the multithread linting but I'd appreciate some comments about the open questions.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, let's do contributor pool

**nzakas:** Lots of contributions in April

**nzakas:** https://github.com/issues?q=org%3Aeslint%20label%3A%22contributor%20pool%22%20merged%3A2025-04-01..2025-04-30%20

**nzakas:** lumirlumir had 9: https://github.com/issues?q=org%3Aeslint%20label%3A%22contributor%20pool%22%20merged%3A2025-04-01..2025-04-30%20author%3Alumirlumir

**nzakas:** So $1000 for all of them?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** For some reason GitHub won't filter on anyone else's name...

**nzakas:** sethamus has five PRs

**mdjermanovic:** Yeah, weird, I've just tried sethamus

**nzakas:** xbinaryx had three PRs

**fasttime:** I just open the text search in the browser and it's highlighting the names
 * 👍 @mdjermanovic

**nzakas:** Yeah that's what I'm doing too

**nzakas:** Very annoying

**nzakas:** Here's the list without lumirlumir: https://github.com/issues?q=org%3Aeslint%20label%3A%22contributor%20pool%22%20merged%3A2025-04-01..2025-04-30%20-author%3Alumirlumir

**nzakas:** For xbinaryx $300? The changes were fairly small.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, sethamus had a PR that he later reverted, so really that's three PRs.

**nzakas:** Er no, that wasn't his PR he reverted

**mdjermanovic:** I think that wasn't their PR

**mdjermanovic:** And it wasn't a clean revert, it retained the new feature while fixing the regression

**nzakas:** Shall we say $500?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** So it was very helpful

**nzakas:** aryaemami59 $250? https://github.com/eslint/eslint/pull/19401
 * 👍 @mdjermanovic, @fasttime

**nzakas:** The rest all seem like $100 to me
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Fairly small PRs

**nzakas:** Okay, I'll let them know.

**nzakas:** Let's talk about the release

**mdjermanovic:** I won't be available for the release this time

**fasttime:** I can do the release tomorrow
 * 👍 @mdjermanovic
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** It will be only eslint/js and eslint/eslint I think.

**mdjermanovic:** I think the same

**fasttime:** Are there any PRs we should try to get merged until then?

**nzakas:** Maybe this? https://github.com/eslint/eslint/pull/19648

**mdjermanovic:** I'll review tomorrow morning
 * 👍 @fasttime

**nzakas:** And this? https://github.com/eslint/eslint/pull/19670

**mdjermanovic:** I'll review that one as well
 * 👍 @fasttime

**nzakas:** Thanks!

**nzakas:** Nothing else looks pressing to me

**mdjermanovic:** This one needs a second review: https://github.com/eslint/eslint/pull/19640
 * 👍 @nzakas

**fasttime:** I can review it tomorrow.
 * 👍 @mdjermanovic

**nzakas:** Okay, anything else before we end the meeting?

**fasttime:** Nothing else from my side.

**mdjermanovic:** Nothing in particular from my side

**nzakas:** All right, then that's it for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye...
