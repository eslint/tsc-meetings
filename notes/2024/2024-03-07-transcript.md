# 03/07/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Hi everyone! 🙂

**nzakas:** Welcome to @fasttime our new TSC member 🎉
 * 🎉 @sam3k_, @ota_meshi, @strek4458, @mdjermanovic

**mdjermanovic:** Welcome!

**fasttime:** Thanks! So excited right now

**fasttime:** I'm delighted to join the TSC

**nzakas:** So as a brief intro to TSC meetings: we go through any agenda items listed on the meeting issue and any issues/PRs labeled as "tsc agenda". And because we are working on v9, we'll also go through that planning process.
 * 👍 @fasttime

**nzakas:** I go through each item, one-by-one, and then we discuss and come to a conclusion (most of the time, anyway)

**nzakas:** All right, first agenda item:

**nzakas:** > Agenda item: I'd like to suggest we add a couple new columns to the Triage board to help deal with PRs. Right now, all open PRs end up in the "Implementing" column, even though they may not all be in the same state. I propose adding "Additional Review Needed" for PRs where there is one approval but that person would like another review before merging, and "Merge Candidate" for PRs we believe are ready for merge but just want a double-check. We could then review these two columns before each release to check which ones might be ready.

**mdjermanovic:** Makes sense to me 👍

**fasttime:** It's fine, just how will the team know how to use the new columns?

**nzakas:** I'll send out an email and update the triage process docs

**fasttime:** Sounds good 👍

**nzakas:** Okay, we've agreed to add those two columns to the Triage board. I'll take the action item of doing that, documenting the change, and sending out the email to the team.

**nzakas:** next item:

**nzakas:** > Agenda item: We have the repo set up so that PR approvals are not removed when new commits are pushed, which is confusing. Sometimes I've approved a PR and then there are several more commits that I haven't seen, but our settings make it seem like I've approved. GitHub has a setting that removes approvals when new commits are pushed. Shall we enable it?

**mdjermanovic:** Shall we require all reviewers to approve again?

**mdjermanovic:** Theoretically, that's the right thing to do

**mdjermanovic:** If there are any changes, the approval is no longer valid

**nzakas:** Right, which is why it would be removed.

**nzakas:** But if someone else comes along and approves, I'm debating whether it's worth trying to circle back and get previous approvers to re-approve.

**nzakas:** I believe all of the previous approvers will get a notification of the state change, so maybe an explicit step isn't needed

**nzakas:** I'm a bit sensitive to how long it takes to get PRs merged, so if there are enough approvals without circling back to removed ones, I'd prefer to go ahead and merge it.

**nzakas:** In theory, it shouldn't matter who has approved so long as it meets our guidance re: committers vs. reviewers

**mdjermanovic:** So, we could set up GitHub to remove approvals, but still merge when the conditions are met even though not everyone has re-approved?

**nzakas:** That's what I'm proposing, yes

**mdjermanovic:** Makes sense to me

**fasttime:** I think we already have this setup in eslint-release

**fasttime:** It should be fine to do this change in all repos 👍

**nzakas:** Yup, it's enabled on eslint-release. Wouldn't surprise me if more repos already had it enabled.

**nzakas:** And I agree, I think we can make the change in all repos. @mdjermanovic ?

**mdjermanovic:** Agreed

**nzakas:** Okay, we've agreed to dismiss stale pull requests reviews on all repos, and that we won't require re-review of previous approvers so long as our usual pull request merge requirements are met.

**nzakas:** Anyone want to take that as an action item?

**mdjermanovic:** I can

**nzakas:** Thanks!

**nzakas:** Next item:

**nzakas:** https://github.com/eslint/eslint/pull/18167

**nzakas:** > **TSC Summary:** As part of this work, we are moving the AST traversal from `Linter` into `SourceCode`. For normal AST traversal, this works exactly the same way; for code path analysis, there is actually a difference. With the traversal in `Linter`, the code paths are incomplete during the traversal and are only completed upon complete traversal of the AST. That means `CodePathSegment` fields like `nextSegments` and `prevSegments` would be empty when `onCodePathSegment` is called with `Linter` traversal, whereas they would be filled with `SourceCode` traversal. Rules relying on the `Linter`-based traversal of incomplete code path data might not work correctly when all data is present.
> 
> In our codebase we have three rules that broke: `no-useless-returns`, `no-this-before-super`, and `super-constructor`.
> 
> **TSC Question:** This would be another breaking change for v9.0.0. Are we okay with that?

**nzakas:** @fasttime for context, we cut off breaking changes for v9 previously, but I just discovered that this would be a breaking change.

**mdjermanovic:** Yeah, that's definitely a breaking change. I agree to include this change in v9.

**fasttime:** I agree to include this change in v9

**nzakas:** Okay, we've agreed to include this PR in v9. I'll keep working on it to get to completion.

**nzakas:** Next we'll review the v9 board: https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** We'll keep releasing betas until we're ready for a release candidate, meaning all planned work has been completed.

**nzakas:** Here are the ones we have open:

**nzakas:** https://github.com/eslint/eslint/issues/17579

**nzakas:** @fasttime where are you on this?

**fasttime:** I've just done some analysis so far. I could try to change the code path analysis as suggested in https://github.com/eslint/eslint/issues/17579#issuecomment-1969338176 if we are okay with that solution. This could take me some weeks to complete.

**nzakas:** Okay, let's follow up on the issue and see where we are in a couple of weeks. If we're not much closer, I think we should hold it over for v10.

**fasttime:** I agree

**nzakas:** Okay, next one: https://github.com/eslint/eslint/issues/18087

**nzakas:** I think we can remove this from v9 tracking. There doesn't seem to be a lot of urgency from Jordan to get this resolved, so I don't see any reason to hold up a potential release candidate for it.

**mdjermanovic:** I'm fine with that

**fasttime:** Yes, makes sense

**nzakas:** Okay, removed!

**nzakas:** The next one is this: https://github.com/eslint/eslint/pull/18134

**nzakas:** Similarly, I don't think this should hold up an rc so I'd propose removing it from the v9 plan

**mdjermanovic:** Agreed. It doesn't seem like a trivial change so it might be best to go through the RFC process.
 * 👍 @nzakas

**fasttime:** I think that issue needs an RFC

**fasttime:** Yes, let's remove it

**nzakas:** Okay, I'll remove it and we can refer for an RFC.

**nzakas:** Next one: https://github.com/eslint/create-config/issues/51

**nzakas:** This one is close

**nzakas:** The PR could use another set of eyes before merging
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Last one: https://github.com/eslint/eslint.org/issues/507

**nzakas:** Looks like it's also close

**mdjermanovic:** That one is close, too.

**mdjermanovic:** I don't think there will be any significant problems with it

**nzakas:** So given the state of these, we might be ready for an rc in two weeks 🎉
 * 🎉 @sam3k_, @mdjermanovic
 * 👍 @sam3k_, @fasttime

**nzakas:** Any other topics to discuss before we discuss the next release?

**fasttime:** Nothing specific from my side

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay, so @fasttime, we always do a release the day after a TSC meeting (or sometimes on Saturday if no one is available Friday). So we spend a little time looking that over at the end of each meeting.

**nzakas:** @mdjermanovic are you available to do the release tomorrow?

**mdjermanovic:** Yes, I can tomorrow

**mdjermanovic:** This time, it will be just `@eslint/js` and `eslint` , new betas
 * 👍 @nzakas, @fasttime

**nzakas:** @fasttime are you around tomorrow? It would be good to have you observe as we do a release so you can learn the process.

**mdjermanovic:** I'll start with releases somewhere between 21-22 CET

**fasttime:** I should be available by that time
 * 👍 @mdjermanovic

**fasttime:** Is there anything in particular I should care about during the release?

**mdjermanovic:** Nothing specific, just to see the steps

**mdjermanovic:** It's mostly automated

**fasttime:** Fine 👍 I've already followed that process before 😀

**mdjermanovic:** You'll be able to see now what happens on Jenkins, etc.

**fasttime:** Right! I will make myself familiar with the new tools I can access now
 * 👍 @mdjermanovic

**nzakas:** And I'll get you set up with the rest of the systems today, too.

**fasttime:** Thanks 🙏

**nzakas:** For the record: I'll be mostly offline starting tomorrow and through the end of the next week.
 * 👍 @mdjermanovic

**fasttime:** Wish you all the best for your father!
 * 🙏 @nzakas, @aladdin_add

**nzakas:** Okay, I think that's it for today. Thanks everyone! (and thanks @sam3k4299 for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! See you 👋
