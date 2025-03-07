# 03/06/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** Just gathering myself, one moment. (First time I've turned on the computer in two days)

**nzakas:** Okay, looks like the only action item from last time was for me to set up the CSSTree fork repo, which I did.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's start with statuses. I worked on the CSSTree fork, finished up the `@eslint/config-helpers` package, and added JSX reference tracking to eslint-scope.

**mdjermanovic:** I was less active than usual, I was mostly reviewing PRs.

**fasttime:** I was also mostly reviewing PRs, and I did some maintenance work in the main repo.

**nzakas:** The RFC duty schedule is:
This week - @mdjermanovic 
Mar 10 - @fasttime 
Mar 17 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues tagged for today.

**nzakas:** Are there any topics anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from me also.

**nzakas:** I just want to check in on https://github.com/eslint/eslint/issues/18948. @mdjermanovic are you still planning on putting together an RFC for this?

**mdjermanovic:** Yes, I'll start it next week
 * 👍 @nzakas, @fasttime

**nzakas:** Also, I'm still looking for feedback on this: https://github.com/eslint/eslint/issues/19462

**nzakas:** Please take a look. 😄
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, let's do Contributor Pool for February: 
https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2025-02-01..2025-02-28

**nzakas:** We have some really good stuff last month.

**mdjermanovic:** DMartens was also working on the related RFC

**nzakas:** Right

**nzakas:** I think you spent the most time reviewing the RFC and code, what would you suggest?

**mdjermanovic:** $1,000?
 * 👍 @nzakas, @fasttime

**nzakas:** pkerschbaum made a bunch of improvements to Code Explorer, so I'd say $250.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** rviscomi and ryo-manba each made significant contributions to the require-baseline rule, so I'd suggest $200 for each.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And $100 for Pixel998?
 * 👍 @mdjermanovic

**fasttime:** It looks like all he did was updating a dependency?

**mdjermanovic:** Yeah, but there was also work to verify if there are any regressions

**fasttime:** Ah, then $100 is okay
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I'll let them know.

**fasttime:** Thanks.

**nzakas:** Let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** We could release `eslint-scope`? The new feature isn't currently available in ESLint but it would be good to verify if there are any regressions, and allow for further work in ESLint
 * 👍 @fasttime

**nzakas:** I think that's a good idea. 👍

**mdjermanovic:** `@eslint/markdown` seems ready for release, but that can be done unrelated to the main release. I can release it after the meeting
 * 👍 @nzakas, @fasttime

**nzakas:** I'd like to try to get `defineConfig()` into ESLint.

**mdjermanovic:** `@eslint/css` - there are some failures on the `main` branch, might be good to investigate that before doing the release, and is also unrelated to the main release

**mdjermanovic:** To re-export the helpers from `eslint`?

**nzakas:** That's because `jsx` is barfing on the `file:` reference where it didn't previously. The only real fix is to get `@eslint/css-tree` released with built-in types and update `@eslint/css` to use that.

**nzakas:** Yes. And update the docs (which I have mostly done now).

**nzakas:** I'll see if I can get that all ready for tomorrow AM EST.
 * 👍 @mdjermanovic

**nzakas:** I'd like to do a blog post announcing it along with the release, too.

**nzakas:** I'll need to get onemore commit into config-helpers since release-please incorrectly labeled the release as 1.0.0
 * 👍 @mdjermanovic

**nzakas:** I'll get that set up after the meeting
 * 👍 @mdjermanovic

**nzakas:** Okay, anything else related to the release?

**nzakas:** Then I think we're done. Thanks everyone ( and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks!
