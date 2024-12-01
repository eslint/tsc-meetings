# 11/28/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**mdjermanovic:** nzakas will not be present today, so we can start

**fasttime:** Yes, just the two of us today

**mdjermanovic:** Let's start with statuses. I made a follow-up refactor PR that adds missing properties in `meta.defaultOptions` of core rules and simplifies getting options in several rules. Also added new `ignoreComputedKeys` option in the `sort-keys` rule and enabled `eslint-plugin-eslint-plugin` in `@eslint/*` language plugins.

**fasttime:** I've been adding type tests for the language plugins and triaging several issues. I'm also working on preparing an RFC for multithread linting.
 * 👍 @mdjermanovic

**mdjermanovic:** RFC Duty schedule

**mdjermanovic:** This week: @fasttime 
December 2: @nzakas 
December 9: @mdjermanovic 
December 16: @fasttime
 * 👍 @fasttime

**mdjermanovic:** We had an action item from the meeting before the previous one, to compare performances starting from ESLint v9.11.1

**fasttime:** Ah yes

**mdjermanovic:** I did some testing: https://github.com/eslint/eslint/pull/19042#issuecomment-2500523800

**mdjermanovic:** Some observations:

**mdjermanovic:** 1. Per the "Multiple Individual Files" test made for that PR, the config caching problem introduced in v9.12.0 has been fixed in v9.14.0.

**mdjermanovic:** 2. Interestingly, on the other hand, all of our standard performance tests, which are Loading, Single File (one big file), and Multi Files (450 files matched by a glob) show notable performance improvements in v9.12.0. This was unexpected, but welcome 🙂

**mdjermanovic:** 3. Surprisingly, the effects of Node.js compile cache, enabled in ESLint v9.13.0, aren't noticeable in test results.

**mdjermanovic:** 4. There seems to be a small but noticeable degradation in Loading and Multiple Individual Files tests in v9.15.0

**fasttime:** I thought the compile cache was only enabled when launching eslint from the CLI

**mdjermanovic:** I'm not overly confident in the validity of my testing as 2-4 were unexpected, so I'll doublecheck.
 * 👍 @fasttime

**mdjermanovic:** Yes, doesn't the Loading test run CLI?

**fasttime:** So mocha tests would not count unless they run `eslint` as a command

**fasttime:** I think tests in `tests/lib/cli.js` do

**mdjermanovic:** I was mostly expecting to see the effects in the Loading test, as in the PR that enabled the Node.js compile cache: https://github.com/eslint/eslint/pull/19012#issue-2580716644

**mdjermanovic:** Anyways, I'll repeat the tests and try to figure out if I'm doing something wrong

**fasttime:** I'm not sure what the reason could be. You could try to run a profiler if you haven't yet. But well, perhaps the effect of the compile cache is just not that noticeable for our setup.
 * 👍 @mdjermanovic

**fasttime:** Are you planning to open a new issue to track your results?

**mdjermanovic:** I'll post  new results on the same PR, and if something doesn't seem right I'll open an issue (or issues)

**fasttime:** Sounds good, thanks.

**mdjermanovic:** We don't have any issues/PRs tagged for this meeting. Are there any issues/PRs you would like to discuss today?

**fasttime:** Nothing in particular from my side I guess.

**mdjermanovic:** Nothing from my side as well.

**mdjermanovic:** So, we can talk about release

**fasttime:** I could do the release tomorrow.

**mdjermanovic:** Thanks!

**fasttime:** It looks like we will have just `@eslint/js` and `eslint` this time.
 * 👍 @mdjermanovic

**mdjermanovic:** I think the same

**fasttime:** I will be probably ignoring browser test errors because those are very unreliable lately, and I think it's not useful to retry running failed jobs until the browser test happens to pass.

**mdjermanovic:** Yeah, we can check locally and if it works then we can consider it successful (interesting that it usually works locally, at least for me, but not in CI)

**fasttime:** For me, the browser tests works locally on Windows. It fails always on MacOS.

**fasttime:** But yes, seems good to run the test locally.
 * 👍 @mdjermanovic

**fasttime:** Especially if doesn't pass on CI.
 * 👍 @mdjermanovic

**fasttime:** Okay, I don't see any issues that should be included in tomorrow's release. Do you have any?

**mdjermanovic:** I don't see nothing in particular either

**fasttime:** Alright. Anything else we should discuss?

**mdjermanovic:** Nothing in particular for today from my side

**fasttime:** Nothing from me either. We can call it a meeting 🙂

**mdjermanovic:** Yes 🙂

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! And thanks for the notes @sam3k_
 * 👍 @mdjermanovic
