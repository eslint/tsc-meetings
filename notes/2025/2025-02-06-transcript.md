# 02/06/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Pulling up last meeting's notes...

**nzakas:** We had @mdjermanovic to update the flags behavior and that has been merged.

**nzakas:** @fasttime looked into Ajv and found that it wasn't the source of the punycode deprecation warnings so we decided not to ahead and fork Ajv.

**nzakas:** Okay, let's start with statuses. I've been working on the CSS plugin, the `extends` RFC and code, and adding some tooling into the `eslint/rewrite` repo to make it easier to add packages.

**mdjermanovic:** I was working on the flags update and the new `--ext` option.

**fasttime:** I was mostly busy with reviews. Haven't managed to do much progress on the browser tests. I'll post a draft PR tomorrow so folks can have a look.
 * 👍 @nzakas

**nzakas:** You also worked on the concurrency RFC. 🤩

**fasttime:** Yes 🙂

**nzakas:** RFC Duty:
This week - @nzakas 
Feb 10 - @mdjermanovic 
Feb 17 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I flagged some issues for today. I could have sworn I flagged more than two, but alas.

**nzakas:** First issue: https://github.com/eslint/js/issues/645

**nzakas:** This suggests adding the ability for eslint-scope to track JSX references by adding a new option (non-breaking). Shall we accept this proposal?

**mdjermanovic:** Sounds good to me

**fasttime:** Makes sense, yes.

**nzakas:** Okay, we've agreed to accept this proposal. 🎉

**nzakas:** Next: https://github.com/eslint/eslint/issues/18948

**nzakas:** The proposal here is to add `basePath` as a key to config objects. Shall we accept this proposal?

**mdjermanovic:** I'm in favor. Still not sure how it would work when user-specified, but we can discuss that on the RFC.
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, we've agreed to accept this proposal and will move forward with an RFC. @mdjermanovic are you planning on doing that?

**mdjermanovic:** Yes, I'll initiate a RFC.
 * 🙏 @fasttime

**nzakas:** Thanks!

**nzakas:** Those were the two issues I had flagged. Any other issues or PRs anyone would like to discuss?

**fasttime:** Nothing from my side.

**mdjermanovic:** Nothing from my side as well

**nzakas:** Okay, one other thing I'd like to discuss outside of issues and PRs. It seems like folks haven't been around much the past few weeks? So just wanted to check in and see if we can share our expected availability in the next two weeks.

For me, I'll be available as normal.

**fasttime:** I'll be more available than normal next week.

**mdjermanovic:** I also expect to be available as normal.

**nzakas:** Sounds good. Thanks.

**nzakas:** Let's do Contributor Pool for January

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2025-01-01..2025-01-31

**nzakas:** I'm thinking $100 for RobinTail and $200 for each of the others?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll let them know.

**nzakas:** Let's talk about the release

**fasttime:** I can do the release tomorrow.

**mdjermanovic:** Thanks!

**nzakas:** Thanks!

**fasttime:** Any PRs we should merge before the release?

**mdjermanovic:** This one is waiting for a second review: https://github.com/eslint/eslint/pull/19405
 * 👍 @fasttime

**nzakas:** I think this one is ready: https://github.com/eslint/eslint/pull/19157

**fasttime:** Okay, I can review both tomorrow.
 * 🙏 @nzakas, @mdjermanovic

**nzakas:** Okay, any other topics to discuss before we end?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** I also have nothing in particular.

**nzakas:** Then we can adjourn early. Thanks everyone (and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks! 👋
