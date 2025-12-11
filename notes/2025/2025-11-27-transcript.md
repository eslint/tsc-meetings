# 11/27/2025 ESLint TSC Meeting Transcript

**fasttime:** Hi!

**mdjermanovic:** Hi!

**mdjermanovic:** @nzakas will be absent today

**fasttime:** Yes, it's only the two of us today.

**mdjermanovic:** We don't have meeting notes from the previous meeting yet, but by scroliing up through it I don't see any action items aside from v10.0.0-alpha.0 ones which we have finished
 * 👍 @fasttime

**mdjermanovic:** Shall we do statuses first

**mdjermanovic:** I was mostly reviewing v10-related PRs

**fasttime:** I've been mostly busy working on the `eslint-scope` types, also some reviews.

**mdjermanovic:** Availability

**mdjermanovic:** ... for the next two weeks. I'm expecting to be able to work around 2h each day

**fasttime:** I should be available 9-12 hours per week.

**mdjermanovic:** RFC duty

**mdjermanovic:** This week - @fasttime
Dec 1 - @nzakas 
Dec 8 - @mdjermanovic
 * 👍 @fasttime

**fasttime:** I don't have anything in particular to discuss today.

**mdjermanovic:** I don't have anything either

**mdjermanovic:** Let's take a look at v10

**mdjermanovic:** https://github.com/orgs/eslint/projects/6

**mdjermanovic:** Seems like we won't have all breaking changes merged for tomorrow, so the next release will be alpha.1?

**fasttime:** Yes, there are still breaking changes in todo.

**mdjermanovic:** Alright, then we'll have v10.0.0-alpha.1 release tomorrow, with several more breaking changes we've merged after alpha.0.
 * 👍 @fasttime

**mdjermanovic:** We should do contributor pool for October, and talk about tomorrow's release

**mdjermanovic:** Anything else you would to discuss before we start with the contributor pool?

**fasttime:** Just wondering if there is anything we should do to get the remaining breaking changes done before the next meeting.

**mdjermanovic:** The JSX one I think iis almost finished, so I'd expect it to be merged for the release after this one
 * 👍 @fasttime

**mdjermanovic:** `chalk` -> `util.styleText` is work in progress,  I'd expect it to be merged for the release after this one as well

**fasttime:** Yes, I think it will be ready soon.

**mdjermanovic:** `eslint-scope` types as well, just needs reviews
 * 👍 @fasttime

**fasttime:** What about https://github.com/eslint/eslint/issues/19936 ? Does that even count as a breaking change?

**mdjermanovic:** That one isn't entirely clear to me. I think we should focus on the design, in particular on what exactly we want to do

**mdjermanovic:** There's already a PR for a non-breaking part of the proposed change: https://github.com/eslint/eslint/pull/19976

**mdjermanovic:** Previously, the PR had `node:fs` dependency added to RuleTester, which was the reason we added the issue to v10

**mdjermanovic:** Now it isn't entirely clear to me whether we want to add `node:fs` dependency

**mdjermanovic:** And I'm not sure if it's feasible to analyze test source code the way it was originally implemented in the PR (first few commits)

**fasttime:** If we add the `node:fs` dependency conditionally (for example, only when the import exists), would that be still a breaking change?

**mdjermanovic:** I think it was discussed on the PR and to be safe we've decided at the time to still consider it as a breaking change: https://github.com/eslint/eslint/pull/19976#issuecomment-3144785189

**fasttime:** I think we would like to maintain compatibility with current rule tests.

**mdjermanovic:** Yes, that would be ideal, I'm just not sure if it's feasible

**mdjermanovic:** RuleTester would need to look into the test source code and try to find the test case

**fasttime:** Basically yes, I think it's feasible with some restrictions. I'm just not sure if that will be ready in two weeks from now.

**mdjermanovic:** Shall we, as an action item, focus on that issue/PR from the next week?

**fasttime:** Sounds good.

**mdjermanovic:** I think it's the only problematic change left for v10

**fasttime:** Okay, then let's focus on that change next week and we can discuss it again later if it's not ready in time.
 * 👍 @mdjermanovic

**fasttime:** I don't have anything else to discuss.

**mdjermanovic:** Me neither, so let's do the contributor pool for October

**mdjermanovic:** https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-11-01-contributor-pool.md
 * 👍 @mdjermanovic

**mdjermanovic:** The calculated budget is $1071.70

**fasttime:** Yes. There are 8 contributors and 20 PRs.

**mdjermanovic:** I checked the PRs before the meeting. Here's an initial proposal:
xbinaryx $350
jaymarvelz $250
Sethamus $150
thecalamiity $150
TKDev7 $150

**mdjermanovic:** That would be $1050, so we could add $50 more (I think we can round up to $1100)

**mdjermanovic:** What do you think, does this distribution make sense?

**fasttime:** Do you think xbinaryx did the most valuable contributions?

**mdjermanovic:** It looked like it to me, there was a big fix in the eslint.org repo, and a big refactor in code explorer

**mdjermanovic:** If you have a different opinion, we can rearrange the funds

**fasttime:** What do you think about increasing the amount for Sethamus? It looks like they did more work than the other $150.

**mdjermanovic:** Sounds good to me, what amount you propose?

**mdjermanovic:** The $50 we have left, or more?

**fasttime:** Yes, let's say $200 for Sethamus?

**mdjermanovic:** Sounds good to me

**mdjermanovic:** So, that would be:
xbinaryx $350
jaymarvelz $250
Sethamus $200
thecalamiity $150
TKDev7 $150

**fasttime:** We still have $20

**mdjermanovic:** Any other modifications you think we should do?

**mdjermanovic:** Oh, I think the sum is $1100 so it's already a bit over the budget?

**fasttime:** Oh yes, you're right.

**mdjermanovic:** Alright, so this is the final list?

**fasttime:** Okay, then we'll be giving out $1100 in contributions for October.
 * 👍 @mdjermanovic

**mdjermanovic:** Now, tomorrow's v10.0.0-alpha.1 release
 * 👍 @fasttime

**mdjermanovic:** I'm available tomorrow

**fasttime:** I will also have time, but as you prefer.

**fasttime:** It's good if you do it I think.

**mdjermanovic:** If you would like to do the release, I could be online

**fasttime:** It's fine if you take it, I'll do the next one.
 * 👍 @mdjermanovic

**mdjermanovic:** Alright, then I'll do the relase tomorrow and you'll take the next one

**fasttime:** Sounds good. Probably the last two releases this year.

**mdjermanovic:** We had a change in `@eslint/js` so it should be released
 * 👍 @fasttime

**mdjermanovic:** And I think this time we should release `@eslint/eslintrc` because it addresses a problem that `@eslint/js` would introduce for users who still use eslintrc configs?
 * 👍 @fasttime

**mdjermanovic:** So, that would be: `eslint`, `@eslint/js` and `@eslint/eslintrc` ?

**fasttime:** Yes, I don't think there are any breaking changes in other packages.

**mdjermanovic:** Yes, I also don't see any releasable changes merged

**mdjermanovic:** Anything else you would like to discuss for today?

**fasttime:** Nothing else.

**mdjermanovic:** Me neither. Then, that would be all for today, thanks! 👋
 * 👋 @fasttime

**fasttime:** Thanks! Bye
