# 05/28/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Pulling up notes from last time

**nzakas:** Looks like we don't have any followups

**nzakas:** We can start with statuses.

I am still dealing with health issues and have only been able to periodically check in on triaging issues/PRs.

**mdjermanovic:** I switched our web app builds to Node.js v24, submitted an issue to file-entry-cache with a summary of problems I found with v11, and was reviewing PRs and triaging issues.

**fasttime:** I've added a new alternative solution for the `--base-path` RFC that works without `--base-path`, which I'm still testing, besides the usual PR review work.

**nzakas:** Okay, let's talk availability the next couple of weeks.

Mine remains unchanged due to ongoing health issues. Will try to pop in when I can but don't expect more than an hour each week in total.

**mdjermanovic:** I expect to be able to work 1-1.5h each day

**fasttime:** I expect to be able to work 10-12 hours per week the next two weeks

**nzakas:** RFC Duty:
This week - @nzakas 
June 1 - @fasttime 
June 8 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I just flagged one issue to discuss:
https://github.com/eslint/eslint/issues/20442

**nzakas:** The Codemod work is now complete and we need to decide how to move forward. DMartens believes it is now ready for a public beta, so the question is:

What does that look like? Should we maybe do a blog post and invite people to try it out? Should we update the migration guides to include it as another option? Something else?

**fasttime:** It seems that the last version is already v1.9.36

**nzakas:** ?

**nzakas:** As a note, this is purely v8 -> v9 conversion

**fasttime:** I'm looking in https://app.codemod.com/registry/@eslint/v8-to-v9-config at the versions tab

**nzakas:** Yes, I'm just not sure what you're implying. Why does the version matter?

**fasttime:** Oh, I thought the open beta would start with a prerelease

**nzakas:** No. In this case, "beta" is just a marketing term.

**fasttime:** Sure. Then if it's been tested and is already deployed to the codemod registry, it only needs to be publicized.

**nzakas:** So maybe then we can invite them to write a guest blog post explaining that it's now available and ready to try out?
 * 👍 @mdjermanovic

**fasttime:** Sounds good to me 👍

**nzakas:** Okay, we've agreed to invite the Codemod team to write a guest blog post publicizing the availability.

**nzakas:** Let me check if there are any tsc waiting issues...

**nzakas:** This one is flagged, but wasn't by one of us so I'm not sure what the question is:
https://github.com/eslint/eslint/pull/19812

**mdjermanovic:** It's probably asking for review

**nzakas:** Maybe it's still the question of the diff size? 4,700 lines of code still seems like a steep price to pay for this.

**nzakas:** I can't imagine that's good for overall perf given the popularity of this rule

**mdjermanovic:** Maybe the diff is necessary to have TS support in this rule, would need to take a look

**mdjermanovic:** My main concern was using `@typescript-eslint/scope-manager` as a dependency, which doesn't seem to be case anymore

**mdjermanovic:** Diff in the rule file is ~600 lines of code. The majority of 4,000+ are tests

**nzakas:** Oops, good catch!

**nzakas:** 600 doesn't make me happy but is more reasonable. I'd say let's do some perf testing to see if there's any degradation before making a final decision.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed to review the code and do some perf testing to validate the extra code doesn't cause a significant slowdown to add TypeScript support.

**nzakas:** That's all we have flagged. Any other issues, PRs, or topics anyone would like to discuss?

**fasttime:** Nothing from my end.

**mdjermanovic:** Nothing else from my side for today

**nzakas:** Okay, let's talk about the release.

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**mdjermanovic:** There's an `@eslint/plugin-kit` update pending release: https://github.com/eslint/rewrite/pull/454

**fasttime:** It will be `eslint/eslint` and `eslint/rewrite` I think.
 * 👍 @mdjermanovic

**fasttime:** There are some PRs in the second review column on the board, but probably nothing critical.

**mdjermanovic:** Yeah, I also don't see any critical ones

**fasttime:** Okay, then we'll have a patch release tomorrow.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I think that's all for today. Thanks everyone! (and thanks @sam3k_ for the notes)

**fasttime:** Thanks! 👋

**mdjermanovic:** Thanks! 👋
