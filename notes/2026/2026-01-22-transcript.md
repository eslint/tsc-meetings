# 01/22/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**mdjermanovic:** Hi!

**nzakas:** Just pulling up the notes from last time

**nzakas:** Followups from last time:

I sent out an email letting the team know of the payment policy. I didn't yet get to set up a page on the website explaining it.

**nzakas:** @mdjermanovic to document `require(esm)` policy?

**mdjermanovic:** Here's a PR submitted today: https://github.com/eslint/eslint/pull/20448
 * 👍 @nzakas, @fasttime

**nzakas:** Let's start with status updates.

I spent most of my time writing up the year-in-review post, then investigating the Netlify charges, reviewing PRs, and looking at Codemod.

**mdjermanovic:** I was verifying data for the year-in-review, fixed a bug in `espree`, tested whether eslint/js packages head versions work with `eslint` and released `espree` and `eslint-scope` with built-in types, and fixed a bug in the core `no-shadow` rule.

**fasttime:** I worked on improving the location estimation for failing test cases in RuleTester and reviewed issues and PRs. Also followed up with a PR in typescript-eslint for ESLint v10 compatibility.

**nzakas:** Let's discuss availability for the next couple of weeks:

I'm still at 0.5-1 hours per weekday.

**mdjermanovic:** I expect to be able to work 1-1.5h each day

**fasttime:** I should be available 7-9 hours per week the next two weeks

**nzakas:** RFC Duty:
This week - @mdjermanovic 
January 26 - @fasttime 
February 2 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We have a bunch of issues remaining to review from last time, plus Contributor Pool, and the release, so let's get started!

**nzakas:** First item: Just to review the Netlify situation. We unexpectedly received an invoice for $100 for going over the limits of the open source plan. I tried working through official support channels to find out what happened but I didn't get anywhere.

**nzakas:** I put out a tweet and got a response from Netlify's CEO. Today, I got an email from the support folks stating that the $100 charge has been removed and we've been switched to an unlimited open source plan so we won't be charged again. 🎉
 * 🎉 @mdjermanovic, @fasttime

**nzakas:** So, no need to change anything immediately, which I'm glad about. 😅

**nzakas:** Next item:
https://github.com/eslint/js/issues/671

**nzakas:** > **TSC Summary:** [ESLint v11 is planning to drop support for formatting rules](https://github.com/eslint/eslint/issues/20097), so this PR seeks feedback on introducing Prettier as the dedicated formatter for the JS (`eslint/js`) repository. There is currently no definitive team consensus on this change.
> 
> **TSC Questions:**
>     1. Would it be acceptable to introduce Prettier into the JS (`eslint/js`) repository?
>     2. According to the comment([Change Request: Introduce Prettier #671 (comment)](https://github.com/eslint/js/issues/671#issuecomment-3341921152)), when would be the best time to open a PR? Currently, only [feat: add types to ESLint Scope #709](https://github.com/eslint/js/pull/709) remains as part of the ESLint v10 changes.
>     3. The `tsc-meetings` repository has introduced Prettier in [chore: introduce `prettier` tsc-meetings#641](https://github.com/eslint/tsc-meetings/pull/641). Is there a plan to introduce Prettier to other repositories such as [`create-config`](https://github.com/eslint/create-config) or [`eslint-github-bot`](https://github.com/eslint/eslint-github-bot)?

**mdjermanovic:** I'm in favor of introducing Prettier to that repository

**fasttime:** I'm also in favor of Prettier

**nzakas:** No objections from me.

**mdjermanovic:** The alternative would be to have no formatting as the rules the repo currently uses are deprecated and will be removed in the future

**mdjermanovic:** As for the timing, we don't have any pending changes, so now could be a good time

**nzakas:** Looks like the types PR has already been merged, so I agree, now would be a good time.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** For the third one, I don't think we have an official plan, but those repos don't get a lot of changes so I think switching to Prettier there can be done whenever someone feels like it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed:
1. Yes, we can use Prettier in `eslint/js` repo.
2. Now is a good time to start.
3. While no official plan exists for these repos, it's okay to switch them to use Prettier.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/markdown/issues/331

**nzakas:** > **TSC Summary:** This issue proposes adding a `math` option to `languageOptions` to support math blocks using `$...$` or `$$...$$` syntax. The team has not yet reached a definitive consensus on this change.
> 
> **TSC Question:** Should this proposal be accepted?

**fasttime:** I'm in favor of this

**mdjermanovic:** No objections from me.

**nzakas:** I don't have a strong opinion. Given that others are in favor, I think we've agreed to accept the proposal.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/17881

**nzakas:** > **TSC Summary:** This issue suggests expanding suggestions to be able to apply changes to other files. It provides several use cases that cannot be handled by existing systems in ESLint or Git.
> 
> **TSC Question:** Would ESLint be interested in an RFC proposing how to solve this?

**mdjermanovic:** As I mentioned in the first comment on the issue, I think this is similar to https://github.com/eslint/rfcs/pull/93

**nzakas:** I'm still 👎 to this. I think it moves too far away from ESLint's responsibilities and architecture and introduces unnecessary complexity.

**mdjermanovic:** On the RFC, we got info from vscode-eslint that it can't do a callback: https://github.com/eslint/rfcs/pull/93#issuecomment-1266454318

**mdjermanovic:** I'm generally not opposed to the proposal, just not sure if there's techical possibility for it

**mdjermanovic:** I see that issue mentions some extensions that are doing this: https://github.com/eslint/eslint/issues/17881#issuecomment-1883593657

**mdjermanovic:** So perhaps they are working based on some other mechanism that isn't a callback

**nzakas:** Just because someone hacked something into an ESLint rule doesn't mean it's generalizable or desirable to bake-in to ESLint.

**fasttime:** I'm not sure if the ability to cross-fix files should depend on the ability of plugins to implement it, but I also think that it would introduce a lot of complexity.

**mdjermanovic:** Oh, the comment I linked isn't an ESLint rule, but a spellchecker extension

**nzakas:** I just think the amount of work required to investigate this is out of proportion with the value it would provide.

**mdjermanovic:** Maybe the suggestion object could have a new `filename` property and _maybe_ the vscode-eslint extension could do something with it, but that's guessing and we'd need to investigate if we are in favor of the proposal

**mdjermanovic:** If we generally don't think updating other files is something ESLint rules should be generally doing, even if techically possible and not a hack, then we should close the issue

**nzakas:** I'm 👎, so it's up to you two.

**fasttime:** I don't think it's good to have a dedicated mechanism to allow ESLint rules to update unrelated files.

**mdjermanovic:** I'm neutral. I see use cases, but I could agree with the argument presented on the issue that this doesn't seem like a responsiblity of a linter.

**fasttime:** But I wouldn't be opposed to providing a callback or event when a fix is applied by the ESLint CLI.

**nzakas:** I think that's more technically feasible, and I'd suggest opening a separate issue to discuss that rather than continuing to discuss now.
 * 👍 @fasttime

**nzakas:** Okay, so it sounds like we've agreed not to pursue applying suggestions to other files.
 * 👍 @nzakas, @mdjermanovic, @fasttime

**mdjermanovic:** Yes, we have two 👎 and one neutral, so that's overall 👎.

**nzakas:** Last item:
https://github.com/eslint/eslint/issues/16578

**nzakas:** > **TSC Summary:** When we did our documentation update, we filed this issue to update headings.
> 
> **TSC Agenda:** Do we want to move forward with this or close it?

**nzakas:** This issue is partially complete, so the question is really do we want to continue the work.

**nzakas:** I'm 👍, partly because I like consistency and partly because I think AI can do it completely. 🙂

**mdjermanovic:** I'm not opposed

**mdjermanovic:** We should just remember the convention when adding new headings

**fasttime:** I actually asked AI and it told me it's good to use non-gerund forms in headings, so who am I to be opposed?
 * 😆 @nzakas

**nzakas:** Okay, we've agreed to finish this work. I'll set up AI to do it. 🙂
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Thanks!

**nzakas:** Okay, any other topics before we discuss contributor pool?

**fasttime:** Nothing in particular from my end

**mdjermanovic:** Nothing from my end as well

**nzakas:** All right, here's contributor pool:
https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-01-01-contributor-pool.md

**nzakas:** So let's start with: which PR was the largest?

**fasttime:** I think this one: https://github.com/eslint/js/pull/705

**nzakas:** Agreed

**mdjermanovic:** ST-DDT's PRs would be close second
 * 👍 @nzakas, @fasttime

**nzakas:** Are there any PRs that we should eliminate from consideration because they're quite small?

**nzakas:** I think fixing Scope typings fall under that category

**mdjermanovic:** Comparing to the mentioned two, jaymarvelz's seem like a very small change
 * 👍 @nzakas, @fasttime

**fasttime:** https://github.com/eslint/eslint/pull/20404 is also a small one

**nzakas:** Yeah, that's the one I was referring to

**fasttime:** So maybe all other PRs should get at least $100, and the rest we can split?

**nzakas:** So that would be $100 to TKDev7, GerkinDev, ntnyq, Sethamus. Then $300 Brettz and $200 ST-DDT?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll let them know
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's talk about v10:
https://github.com/orgs/eslint/projects/6

**nzakas:** I think the only thing that changed from last release was the merging of the `eslint-scope` types?

**mdjermanovic:** And `espree` types
 * 👍 @nzakas, @fasttime

**nzakas:** So it makes sense to do another RC with those changes in.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Yes. There are also several small-ish things that should be prepared for the final release

**mdjermanovic:** We could prepare and discuss those over the next two weeks

**nzakas:** Do those exist in an issue anywhere?

**fasttime:** Sounds good. I think you have a PR with a list of todos

**mdjermanovic:** I'm working on a PR with a list of todos for all major releases, but will open an issue for this particular one as well
 * 👍 @nzakas, @fasttime

**nzakas:** Do we want to plan on doing v10.0.0 in two weeks and work towards that?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Yes, I think we can plan that.
 * 🎉 @nzakas, @fasttime

**nzakas:** Then we'll leave the action item for you to open that issue, and you can let us know what kind of help you want with those tasks.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics before we discuss the release?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing else from me

**nzakas:** Okay then, let's discuss tomorrow's release. Any volunteers?

**mdjermanovic:** I can

**nzakas:** Thanks!

**fasttime:** Thanks!

**mdjermanovic:** The released`@eslint/js` is already a RC so I don't think there's a need for another one.

**mdjermanovic:** So it would be just `eslint` this time?
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Alright

**mdjermanovic:** I'll also update the upcoming release on the eslint.org home page to the final major
 * 🎉 @nzakas
 * 👍 @fasttime

**nzakas:** Anything else before we end the meeting?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** I don't have anything else to discuss for today.

**nzakas:** All right, then I think we're done. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye 👋
