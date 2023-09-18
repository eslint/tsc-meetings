# 09/07/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Just bringing up the agenda here.

**nzakas:** Looks like we don't have any issues flagged. Are there any you want to discuss outside of v9? (We can go over the v9 board next.)

**mdjermanovic:** Nothing in particular, aside from the new candidates for v9

**nzakas:** Okay, then let's jump right into v9

**nzakas:** https://github.com/orgs/eslint/projects/4

**nzakas:** https://github.com/eslint/eslint/issues/17457
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17381
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17524
 * 🤷‍♂️ @mdjermanovic
 * 👍 @nzakas

**nzakas:** Let's circle back to that one

**nzakas:** https://github.com/eslint/eslint/issues/17522
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** 👍 pending the list of rules

**nzakas:** Yeah, we still need some discussion on that one.

**mdjermanovic:** But we definitely agree on removing whitespace rules, so we

**mdjermanovic:** ..we'll definitely deprecate some rules, so 👍

**nzakas:** For 17524, want to share your concerns?

**mdjermanovic:** There's a danger of breaking some integrations

**mdjermanovic:** that expect certain formatters

**nzakas:** Can't that be solved by using a package instead?

**mdjermanovic:** Also, per the survey, `html` and `visualcode` have ~10% each

**mdjermanovic:** I'd guess yes, but that would require adding a devdependency to the project

**nzakas:** Presumably ESLint is already a dev dependency in those cases?

**mdjermanovic:** Yes

**nzakas:** So is there  a reason that adding another dev dependency would be a problem?

**mdjermanovic:** If it's project-related no, but if only some users need a particular formatter then maybe

**nzakas:** To pop the stack a second, it looks like you're in favor of removing some of the formatters but aren't sure about `compact`, `html`, and `visualstudio`?

**mdjermanovic:** Yes, though we can't be sure that some integrations (e.g., editor integrations) are not using some of the other formatters

**nzakas:** I'm not sure hypothetical integrations that might not be able to change are a good reason not to move forward. If we think this is the right thing to do for the project as a whole, I'd suggest we go ahead and announce it, do it, and use the beta period to evaluate any breakages. This is a trivially simple change to undo if it causes problems.

**mdjermanovic:** Though they could switch to using the `json` formatter indeed

**mdjermanovic:** Agreed.

**nzakas:** I'll post the issue on Twitter and Mastodon to see if we can get some early feedback on potential issues.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've agreed to include https://github.com/eslint/eslint/issues/17524 in v9 with a note that we can use the beta period to evaluate the safety of this change and reverse course if necessary.
 * 👍 @mdjermanovic

**nzakas:** I'd suggest that we not lock down v9 until at least next meeting to see if anything else pops up as a candidate between now and then. If not, then it's probably safe to lock it down.
 * 👍 @mdjermanovic

**nzakas:** Speaking of v9, I was thinking about how we did the release last time -- keeping PRs open and then merging all at once. I'm wondering if we could simplify things by merging those PRs into a `v9-candidate` branch so they don't need to stay open after we review them. Then we could do a PR from `v9-candidate` to `main` when ready (we'd need to NOT squash merge that PR to keep the changelog clean). What do you think?

**mdjermanovic:** I'll need some time to think about it.

**mdjermanovic:** Re not squash-merging, not sure what will happen if there're conflicts

**nzakas:** I think we did a rebase merge it would end up preserving the commit history

**nzakas:** But sure, think about it. Just trying to think of ways to keep the PR list tidy.

**nzakas:** As v9 PRs are already starting to stack up.

**mdjermanovic:** We could check how other projects are handling major releases

**nzakas:** Last time I checked, most were pretty about opaque about their process for major releases.

**nzakas:** I do know that Node.js merges PRs into a staging branch before releasing

**nzakas:** Do you want to take the action item to investigate that?

**mdjermanovic:** Yes
 * 👍 @nzakas

**nzakas:** Node.js example: https://github.com/nodejs/node/pull/49528

**nzakas:** Okay, any other topics before we look at contributor pool?

**mdjermanovic:** Thanks, I'll check that PR

**mdjermanovic:** Nothing in particular for today

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-08-01..2023-09-01

**nzakas:** $100 each except for WebDriver.io? You worked more on that than I, what would you say for that one?

**mdjermanovic:** A lot of effort for that one, maybe $300
 * 👍 @nzakas

**nzakas:** I'll take the action item to let them know

**mdjermanovic:** I'm not sure if this one was included in the last contributor pool since it was on 2023-07-27: https://github.com/eslint/eslint/pull/17402

**nzakas:** let me check

**nzakas:** Indeed it was not

**mdjermanovic:** Then $100 as well?
 * 👍 @nzakas

**nzakas:** $100 for that?

**mdjermanovic:** Agreed.

**nzakas:** I'll add that one to the list.

**nzakas:** Okay, let's talk release.

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**mdjermanovic:** I think it's only `eslint` & `@eslint/js`

**nzakas:** Looks like it.

**mdjermanovic:** This PR is ready, I'll merge it today to see if merging will be  okay because it has kind of unusual commit history: https://github.com/eslint/eslint/pull/17511

**mdjermanovic:** I also plan to clean up the squash commit message (description), to remove lines related to commits pulled from the main branch.
 * 🙏 @nzakas

**nzakas:** Yeah, sorry about that. I couldn't figure out why I kept getting merge conflicts. I'd fix it locally and then GitHub would say it still had conflicts.

**mdjermanovic:** The `Files changed` tab looks good to me, so I believe the squash commit will be okay 🙂

**nzakas:** I ❤️ squash merge. I shudder to remember the old days when we were forced to have merge commits.

**nzakas:** Or else talk people through squashing their commits manually. Ooph

**mdjermanovic:** Oh yes, squash commits are very clean

**mdjermanovic:** Produce nice history

**nzakas:** All right, I think that's it for today. Thanks! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋
