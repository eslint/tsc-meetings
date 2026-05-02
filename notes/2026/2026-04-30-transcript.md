# 04/30/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Looks like we're at full strength 🏋️‍♂️
 * 🎉 @mdjermanovic, @fasttime

**nzakas:** We don't have any followups from last time, so let's just jump into statuses.

I don't have anything to share. My health pretty much kept me from contributing in any meaningful way since last meeting.

**mdjermanovic:** I fixed some ASI-related bugs in core rules, and I've been working on upgrading file-entry-cache to v11

**fasttime:** I've made progress on the `--base-path` RFC and added tests for older TypeScript versions to a few repos.

**nzakas:** Let's talk availability for the next couple of weeks.

For me, I just can't be sure given what's going on with my health. It's probably best to assume I won't be around consistently until things resolve. 😕

**mdjermanovic:** I'm hoping to be able to work 1-1.5h each day

**fasttime:** I hope to work 9-12 hours per week the next couple of weeks

**nzakas:** RFC Duty:
This week: @mdjermanovic 
May 4: @nzakas 
May 11: @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have anything flagged for today. Are there any topics anyone would like to discuss?

**mdjermanovic:** What shall we do with this issue. After @fasttime's investigation it turned out to be a bug in Yarn. https://github.com/eslint/eslint/issues/20813

**fasttime:** Maybe we could wait until the next Node.js 24 release to see if it fixes the problem and then decide how to proceed?

**nzakas:** The fix seems pretty low-risk to me, so I'm not opposed to making the change so we can get people unblocked tomorrow.

**nzakas:** I think in an ideal world Yarn and Node.js fix things quickly but I'd rather people not be prevented from using ESLint in the meantime.

**mdjermanovic:** Okay, then we already have a PR for this change up: https://github.com/eslint/eslint/pull/20812
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Another issue (PR actually): https://github.com/eslint/eslint/pull/20814

**mdjermanovic:** If the change would break some existing usage, I agree that it should be treated as a breaking change and postponed to eslint v11.

**nzakas:** I agree, if there are any existing use cases that stop working then we should wait until v11 to consider it.

**fasttime:** Yeah, that's probably safer.

**nzakas:** Okay, it sounds like we've agreed that this is a breaking change and we should hold off until v11
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics?

**fasttime:** Nothing else for the meeting from my side. Just noting that there's another issue tagged "tsc waiting".

**nzakas:** good reminder: "tsc agenda" is intended for discussion at the meeting, "tsc waiting" is for trying to resolve offline...but since we're here, might as well takea  look.
 * 👍 @fasttime

**mdjermanovic:** Nothing else from my side as well

**nzakas:** https://github.com/eslint/eslint/issues/20603

**fasttime:** The question is if and how invalid `meta.deprecated` values in rules should be handled.

**nzakas:** Because these don't affect runtime behavior, I don't think they should be checked at runtime. Maybe `RuleTester` should do this?

**nzakas:** `meta.languages` affects runtime behavior, which is why it's validated at runtime.

**nzakas:** Actually, this seems like a good use case for using the TypeScript `JSRuleDefinition` (or whatever we ended up calling it).

**mdjermanovic:** In some cases it can affect runtime behavior, in sense that invalid object could make ESLint crash

**fasttime:** Yes, I think types should catch incorrect values already during development (I'll double-check that). But there is no validation currently in `RuleTester`.

**nzakas:** @mdjermanovic can you be more specific?

**mdjermanovic:** This line in particular: https://github.com/eslint/eslint/blob/3ffb14ea517de750ed1181579ef844af342e4096/lib/eslint/eslint.js#L148

**nzakas:** Ah gotcha

**mdjermanovic:** If `meta.deprecated.replacedBy` exists but is not an array, ESLint will crash. I recall it was the case with one rule

**nzakas:** It seems like adding runtime validation would be a breaking change. Could we just guard against non-array values right before we try to use it?

**mdjermanovic:** Yes, it was a rule in eslint comments plugin. This was the fix: https://github.com/eslint-community/eslint-plugin-eslint-comments/commit/de049807e525ac3e2d164c8873f9035b08eb23a6

**nzakas:** and maybe add validation to RuleTester in the meantime?

**mdjermanovic:** That makes sense to me. Ensure that ESLint doesn't crash in runtime, and add a more comprehensive validation to RuleTester.

**fasttime:** So `RuleTester` will catch invalid schemas for `meta.deprecated` (breaking change). And at runtime, if `meta.deprecated.replacedBy` is not an array, it will be ignored (regular fix).
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Shall we ask for an RFC for the RuleTester change?

**nzakas:** It doesn't seem big enough to warrant an RFC but I don't feel strongly.

**mdjermanovic:** I'm slightly in favor of an RFC. @fasttime what do you think?

**fasttime:** I also don't feel strongly, but if @mdjermanovic prefers an RFC, then it's better to have one.

**nzakas:** Okay, let's do an RFC.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** I imagine there will be some details to discuss, for example, regarding invalid properties, URLs, etc.

**nzakas:** Any other topics before we discuss the release?

**mdjermanovic:** Nothing else from my side for today

**fasttime:** Nothing else from my side.

**mdjermanovic:** I can do the release tomorrow

**nzakas:** Thanks!

**fasttime:** Thanks!

**mdjermanovic:** There doesn't seem to be any pending releases for eslint dependencies, so it would be just the `eslint` package I believe
 * 👍 @nzakas, @fasttime

**mdjermanovic:** I'll check https://github.com/eslint/eslint/pull/20812 again tomorrow. The suggestion I left is minor (test-related), I believe it should be good to go either way.

**fasttime:** Sounds good. I can also take a look.

**mdjermanovic:** Thanks!

**nzakas:** 👍

**nzakas:** All right if that's all, thanks everyone! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks 👋
