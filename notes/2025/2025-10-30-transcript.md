# 10/30/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Checking over notes from last time

**nzakas:** Looks like nothing to follow up on

**nzakas:** Let's do statuses. I've mostly been doing issue/PR triage with limited time, but I did open a PR to update the core types in `eslint` package.

**mdjermanovic:** I was mostly reviewing PRs.

**fasttime:** I 've been also reviewing PRs and issues most of the time.

**nzakas:** Exciting two weeks. 🙂

**nzakas:** Let's talk availability for the next couple of weeks. I'm still at 0.5-1 hours each week day.

**mdjermanovic:** I expect to be available around 2h each day

**fasttime:** I should be available around 12 hours per week

**nzakas:** RFC Duty:
This week - @mdjermanovic 
Nov 3 - @fasttime 
Nov 10 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We don't have any issues flagged for today, specifically. I did add one agenda item to the issue:

> Agenda item: As we continue to spend more money than we bring in, I think it's time to put a cap on contributor pool payouts. We had [previously agreed](https://github.com/eslint/tsc-meetings/blob/deb59703811574e196c0e252416a0df4a97a413c/notes/2021/2021-06-17.md?plain=1#L115) to awarding a total of $1,000 per month. We later [agreed to go over one time](https://github.com/eslint/tsc-meetings/blob/deb59703811574e196c0e252416a0df4a97a413c/notes/2022/2022-05-05.md?plain=1#L48), but it seems like we just kind of forgot about the cap over time.
> 
> Initially the $1,000 was based on bringing in donations of $10,000/month, so we were allocating 10% of the donations. We can either set a hard limit (like $1,000) or a percentage limit (10% of donations for that month), or any other suggestions are welcome.
> 
> We could always go over for outstanding contributions, but I think we need to rein in the spending on a monthly basis.

**mdjermanovic:** I agree to set a cap. If it's based on a percentage, 10% of _average_ monthly donations would probably make more sense than donations for that particular month

**nzakas:** Average means we have to do math. 🙂

**nzakas:** An average over what time period?

**mdjermanovic:** Well, maybe we don't have to recalculate each month

**fasttime:** A cap makes sense, I'm  just not sure how to split the limited budget across contributions.

**mdjermanovic:** With a percentage for a particular month there would be a problem that we sometimes have big one-time donations, so that month would be much above the average

**nzakas:** We could do it as a percentage of recurring sponsorships and omit one-time donations.

**nzakas:** That data is already separate on the website

**mdjermanovic:** Makes sense to calculate recurring sponsorships we have and then allocate a percentage of that

**nzakas:** When we generate the contributor pool report we could also pull that data and divide by 10%, drop it right into the report.

**mdjermanovic:** Yeah, we have the data in the eslint.org repo

**nzakas:** @fasttime we'd divide it by impact for that month.

**fasttime:** Will we be going under $100?

**nzakas:** I'd prefer not to. If we don't think a contribution is worth $100, it's probably best to leave it off.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** That may necessitate not paying people whose PRs were labeled, but I think that's okay. This program was never meant to award for every contribution. It was supposed to be for those who had made significant contributions.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** So the PRs labeled as "contributor pool" become the nominees and then we decide who to award out of that.

**mdjermanovic:** Makes sense to me

**fasttime:** Makes sense to me too.

**nzakas:** Okay, we've agreed to set a monthly cap for contributor pool payouts at 10% of the month's recurring sponsorship. We'll update the contributor pool report to calculate that for us. I'll take that as an action item.

**nzakas:** Before we talk about v10, are there any issues or PRs anyone would like to discuss?

**fasttime:** Nothing in particular from my side.

**mdjermanovic:** Nothing in particular from my side for today

**nzakas:** Okay, let's talk v10

**nzakas:** https://github.com/orgs/eslint/projects/6

**nzakas:** It looks like everything is at least being implemented at the moment.

**mdjermanovic:** Some tasks for alpha are ready to merge, some have change requests, some are waiting for approval or second approval

**nzakas:** tbh I haven't bothered reviewing anything for v10 to this point

**mdjermanovic:** Do we need to release all changes planned for alpha in alpha.0?

**nzakas:** Ideally yes as we want to get the biggest breaking changes out first.

**nzakas:** Are there any you're concerned about?

**mdjermanovic:** For example, the program range change has a change request

**nzakas:** link?

**mdjermanovic:** https://github.com/eslint/eslint/pull/20133#discussion_r2459252853

**mdjermanovic:** Now when looking at the list, I believe all other have at least one approval, except for the eslintrc removal PR but I wouldn't be worried about that one

**fasttime:** Maybe if the author doesn't bother addressing the review in time we could go ahead and apply the changes?

**mdjermanovic:** I'll ping them on the PR
 * 👍 @fasttime

**nzakas:** Can you summarize what's happening here?

**mdjermanovic:** The change in Program range requires some changes in the JS SourceCode implementation. I think the changes made in the PR should be modified as they decrease efficiency of source code methods

**nzakas:** Yes, that part I got. 🙂 I'm asking why there are changes needed.

**mdjermanovic:** To keep performance at O(1)

**nzakas:** Okay, yes, I got that too. 🙂 Help me understand why there's a logic change needed.

**mdjermanovic:** Oh, you mean why there's need for any changes in SourceCode?

**mdjermanovic:** Part of the implementation was based on the assumption that all nodes start/end with a token

**nzakas:** Ah okay, and `Program` may not start with a token with leading white space.

**mdjermanovic:** Now we have Program node that doesn't necessarily start/end with a token

**mdjermanovic:** And that needs some changes. That was particularly tricky to catch (I had to verify all of the SourceCode source code) as it wasn't caught by tests.

**nzakas:** Gotcha, thanks. Well, we have two weeks to get this resolved, so I think we're okay at this point.

**mdjermanovic:** Yes, I'd expect this to be resolved in time

**mdjermanovic:** And I don't see any other PRs that might be particularly problematic

**mdjermanovic:** The minimatch change might have some hidden issues, but it isn't announced for alpha

**nzakas:** One thing I noticed we don't have tracked anywhere is updating `@eslint/compat` for the removed `SourceCode` rules.

**nzakas:** Which we did announce.

**fasttime:** I can create an issue and work on a PR.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Maybe here: https://github.com/eslint/rewrite/issues/279

**mdjermanovic:** That should be ready for alpha.0 too?

**nzakas:** Ooh good catch.

**nzakas:** Yes

**nzakas:** Adding to the board

**mdjermanovic:** I think we considered that as part of issues already present on the board, but it seems good to separate it

**fasttime:** That's been accepted for over one month now.

**nzakas:** Yeah, it's not a breaking change so really it didn't have to go through the v10 process. I left a comment to see if they still plan on working on it, and if not, we can take it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** By "we" I mean @fasttime 😉
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Anything else v10-related to discuss?

**mdjermanovic:** Nothing in particular

**fasttime:** I would like to understand what the next steps are after we close tomorrow's release. Shall we create a v9.x-dev branch from main and start to merge v10-alpha PRs that are ready to merge?

**mdjermanovic:** I made a list of some 8 small-ish things that should be done before alpha.0 releases. I'll raise a PR to update our Manage Releases docs with these details
 * 👍 @nzakas

**mdjermanovic:** Yes, exactly that.
 * 👍 @fasttime

**mdjermanovic:** I'll add that explanation to the docs as well

**fasttime:** Thanks!

**nzakas:** Good time to discuss tomorrow's release

**nzakas:** (which will go on as usual)

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**nzakas:** I'd like to get this in:
https://github.com/eslint/eslint/pull/20257
 * 👍 @fasttime

**fasttime:** We have a pending release in `@eslint/eslintrc`. Shall we do that tomorrow as well?

**nzakas:** We should also try to merge as many non-breaking PRs as possible. I'll plan on reviewing everything tomorrow morning.

**nzakas:** The changes aren't necessary until v10, so I think it's okay to skip it unless you really want to.

**fasttime:** Fine, I will start with the release around today's meeting time.
 * 👍 @nzakas, @mdjermanovic

**fasttime:** Okay, then I'll leave it out.

**fasttime:** So only `@eslint/js` and `eslint` will be released tomorrow.
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Looks like only these two, yes

**nzakas:** Okay, I think that's all for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye 👋
