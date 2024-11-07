# 10/31/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Pulling up last meeting's notes

**nzakas:** Okay, looks like no action items to follow up on, so let's do status updates. For me, I've been working on the CSS plugin and adding concurrency for the `readFile` retrier.

**mdjermanovic:** I was working on config loader caching, new syntax, and spent a lot of time reviewing the `meta.defaultOptions` PR as it updates the core and 70+ rules.

**fasttime:** I did the release, completed https://github.com/eslint/rewrite/pull/59 and continued working on fixing drive letter handing on Windows in ESLint. Also did some repo maintenance to fix the build and updated dependencies.

**nzakas:** Let's review RFC duty next

**nzakas:** This week: @mdjermanovic 
November 4: @fasttime 
November 11: @nzakas 
November 18: @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues tagged for this meeting. Are there any issues or PRs anyone would like to discuss?

**fasttime:** Nothing from me.

**mdjermanovic:** Nothing in particular

**nzakas:** Okay, I'll just call out that the PR for the CSS plugin is ready for review: https://github.com/eslint/css/pull/2
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Definitely interesting working in another AST format. 😄

**mdjermanovic:** I'll take a look this weekend or early next week
 * 🙏 @nzakas

**fasttime:** thanks!

**nzakas:** Just looking through the triage board to see if anything jumps out as needing discussion

**fasttime:** just noting that someone posted a reply on https://github.com/eslint/eslint/discussions/18957
 * 👀 @nzakas

**nzakas:** Maybe we can decide on this one? https://github.com/eslint/eslint/issues/19022

**nzakas:** The ever-complicated `require-atomic-updates`

**nzakas:** It seems that `this` is excepted from the rule, and the question is whether or not that should be the case. If not, should it be a change of default or a new option?

**fasttime:** I think it's okay to add a new option to not break existing projects, but would like another opinion if it makes sense to report on `this` in the first place.

**mdjermanovic:** Yeah, I think it's a bug that `this` is omitted. So this is a valid request. But given that the way this rule works with properties is "controversial" (there were many reports for false positives) and the complexity required to support `this` (as it's not handled by scope manager) I'm 50/50 on accepting/wontfix.

**mdjermanovic:** If we do accept, I think it should be behind an option

**nzakas:** @mdjermanovic can you explain a bit more about the complexity of implementing this? I'm just wondering if the effort-value tradeoff is worth it.

**mdjermanovic:** Variables are tracked by the scope manager, the rule has references and other things "for free". For `this`, I believe the rule should implement its own tracking.

**nzakas:** And what's the effort for that?

**mdjermanovic:** I don't have an estimate at the moment, but the fix certainly wouldn't be trivial.

**nzakas:** In that case, I'd vote either for wontfix or accepting for outside contributions. We have too many other higher-priority things to work on at the moment.

**nzakas:** It's not something I'd want to see us spending much time on.

**fasttime:** The OP checked the box to say he would like to submit a pull request.

**fasttime:** We could ask him if he's still willing to work on it.

**mdjermanovic:** I'm fine with accepting. Would be fine with wontfix as well 🙂 so whichever you are in favor

**fasttime:** I'm also in favor of accepting or not fixing.

**nzakas:** I question whether the OP actually understands what it would mean to implement the fix and whether or not we'd get pulled into handholding on the PR. So my vote is wontfix.

**mdjermanovic:** Sounds like a tiebreaker for wontfix then.

**fasttime:** Okay for me 👍

**nzakas:** Okay, we've decided to close as wontfix.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, last call for other issues or PRs to discuss?

**mdjermanovic:** Nothing for today from me

**fasttime:** Nothing else

**nzakas:** Do we want to do contributor pool today since it's the last day of October?
 * 👍 @fasttime

**mdjermanovic:** Sounds good to me.

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-10-01..2024-10-31

**nzakas:** Do any of these rise above $100?

**nzakas:** (I wasn't really involved in most of these so not enough context.)

**mdjermanovic:** The new syntax PR I think

**fasttime:** I'm not sure about https://github.com/eslint/js/pull/639

**mdjermanovic:** ota-meshi also did all the work in `acorn` and `regexpp`

**fasttime:** for the rest $100 is fine

**nzakas:** So $500 for ota-meshi?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, I'll let them know.

**nzakas:** let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** Since there is a change request on the `meta.defaultOptions` PR, I think we'll have just `eslint` and `@eslint/js` releases tomorrow (otherwise, it would be `@eslint/eslintrc` as well).
 * 👍 @nzakas, @fasttime

**nzakas:** It looks like `@eslint/json` and `@eslint/create-config` have releases pending too.

**nzakas:** Shall we publish those as well?

**mdjermanovic:** If this can be merged, it would be great since we've already enabled parsing support: https://github.com/eslint/eslint/pull/19076
 * 👍 @nzakas

**mdjermanovic:** Yes, I can publish those two after the meeting.
 * 👍 @fasttime

**nzakas:** And we can do the more extended highlights section on the blog. 😄
 * 👍 @fasttime

**mdjermanovic:** Oh, I've already prepared that
 * 🎉 @nzakas

**nzakas:** After the release, I think it would be helpful to compare the runtime of v9.12.0 to v9.14.0 since we'll have implemented two perf improvements (compile cache and config array caching).
 * 👍 @mdjermanovic

**nzakas:** At least for me, the compile cache alone reduced linting `eslint/eslint` from about 2:45 to like 1:50.
 * 🎉 @mdjermanovic

**fasttime:** I also noticed that improvement with the compile cache.

**nzakas:** I think this will be ready by tomorrow (will finish up tonight and tomorrow morning): https://github.com/eslint/eslint/pull/19077

**mdjermanovic:** I'll also ask on https://github.com/eslint/eslint/issues/19025 whether they notice better performance with 9.14.0
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's it for today. Thanks everyone (and thanks @sam3k_ for the notes!)

**mdjermanovic:** Thanks!

**fasttime:** Thank you 👋
