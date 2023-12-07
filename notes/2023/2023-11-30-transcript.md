# 11/30/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** It looks like we don't have any issues flagged for today. Are there any non-v9 issues or PRs you'd like to discuss first?

**mdjermanovic:** Nothing in particular about issues or PRs

**mdjermanovic:** We have a problem with Node 21.3.0 in CI, what do you think about pinning Node 21.2.0 until the problem is resolved, and since we have a release tomorrow

**nzakas:** Fine by me. I don't care too much about the odd-number releases for Node.js in general.
 * 👍 @mdjermanovic

**mdjermanovic:** Agreed

**nzakas:** Then let's go to v9

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**mdjermanovic:** All tasks are in progress now
 * 👍 @nzakas

**nzakas:** I noticed that some of the PRs are now listed on the board without any target. For major releases, we typically have only put issues on the board, not the PRs. What do you think?

**mdjermanovic:** I think we used to have only issues

**mdjermanovic:** Not sure how PRs appeared

**nzakas:** We definitely started out with only issues. Curiously, the PRs don't have any history of when they were added. If it's okay with you, I'm going to remove them to keep the board clean.

**mdjermanovic:** Definitely agree

**mdjermanovic:** Strange, I don't see any info on the PRs that they were added to the project, maybe GitHub automatically did that

**nzakas:** I don't think so. We don't have any automation set up for the board. My guess is that someone was trying to be helpful but didn't know how things were set up.

**mdjermanovic:** Could be the case

**nzakas:** In any event, are there any issues you'd like to discuss?

**mdjermanovic:** Nothing in particular

**nzakas:** I think there are probably some of the PRs that are ready for merge that aren't marked as such, or at least haven't been fully reviewed but otherwise would probably be ready.

**nzakas:** https://github.com/eslint/eslint/issues/17595

**mdjermanovic:** I'm moving to ready for merge only fully reviewed once. There are few more that are very close though

**nzakas:** Me too. I just want to go through the alpha issues here to see where they all are

**nzakas:** The one I pasted above seems ready, so I just reviewed and marked as Ready for Merge.

**nzakas:** This one: https://github.com/eslint/eslint/issues/17524. We are waiting on your last bits of changes to be implemented.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/14709 - looks like you just put up a PR for this
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16450 - this one is close, just making final changes

**mdjermanovic:** I'll also take a look at that one soon

**nzakas:** https://github.com/eslint/eslint/issues/14308 - this one is ready for review

**mdjermanovic:** Oh, I must have missed notifications that it was updated, I'll take a look soon
 * 👍 @nzakas

**mdjermanovic:** The language plugins task has three subtasks left?

**nzakas:** https://github.com/eslint/eslint/issues/16999 - Language Plugins. I think the planned tasks are encapsulated in https://github.com/eslint/eslint/pull/17698

**nzakas:** Those three tasks under phase 2 aren't blockers for v9

**mdjermanovic:** Agreed

**nzakas:** So when that PR is approved, we can move that issue to Ready to Merge, although we still need `eslint-plugin-n` to update the APIs its using: https://github.com/eslint-community/eslint-plugin-n/issues/143
 * 👍 @mdjermanovic

**nzakas:** Flat config - https://github.com/eslint/eslint/issues/13481

**nzakas:** Right now I'm blocked on getting the rule tests switched over to use `FlatRuleTester`. I'm close to being done with that. After that's merged, I can get through the rest of the code tasks and start on the docs.
 * 👍 @mdjermanovic

**mdjermanovic:** Switching tests to `FlatRuleTester` could be merged in v8 (i.e., before we start with v9)?

**nzakas:** Yes, that's what I was planning.

**mdjermanovic:** Agreed

**nzakas:** Sorry for not being clear about that.

**nzakas:** Basically as soon as we switch `Linter` to use flat config by default, then `RuleTester` tests mostly start failing.

**mdjermanovic:** Shall we keep the internal structure the same for some time, like `FlatRuleTester`, and update only the API?

**nzakas:** Sorry, not quite sure what's you're asking. Can you explain more?

**mdjermanovic:** To keep internal files the same, for example keep `flat-eslint.js` (not rename it to `eslint.js`, just switch them in `api.js` public  interface)

**mdjermanovic:** To avoid merge conflicts for pending PRs

**nzakas:** Oh, I was going to swap names and filenames, to mark the old stuff as "legacy". That way in v10, we can just search for "legacy" and remove all that stuff.

**mdjermanovic:** That would cause a lot of merge issues

**mdjermanovic:** I was thinking about keeping internal files the same until we merge all v9 PRs, and then we could rename them

**nzakas:** You're saying rename after v9 and before v10?

**mdjermanovic:** We can rename them before v9.0.0 if we have time, or after. I think it's important to change public API, internal files could be the same for now

**nzakas:** Okay, I'm a bit lost. 🙂 When you say "before v9", what does that mean?

**mdjermanovic:** Anytime after we merge v9 PRs, probably before we release the final v9.0.0

**nzakas:** Okay...that sounds like what I started out suggesting. 🙂

**mdjermanovic:** It would just internal refactor

**mdjermanovic:** Oh, maybe I didn't understand

**nzakas:** My plan was to put together a PR that just does the renaming. We can, of course, merge that last.

**nzakas:** So it would be released in v9 alpha

**mdjermanovic:** To rephrase, I think the PR that's going to change public `api.js` should not rename files. That would be a huge merge conflict with other PRs

**nzakas:** Ah okay, I understand now.

**nzakas:** Yes, agreed, let's do that separately.
 * 👍 @mdjermanovic

**nzakas:** I'll update the flat config issue to reflect that as different steps
 * 👍 @mdjermanovic

**nzakas:** Okay, next

**nzakas:** https://github.com/eslint/eslint/issues/17520 - This one will be ready along with the language plugins issue because it's all in the same PR
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15466 - looks like we are waiting for @bmish to finish up the PR

**mdjermanovic:** Yeah, it looks like there's not much left to finish it. Might be good to ping bmish 🙂

**nzakas:** Just left a note on the PR and maybe he'll see the mention above. 🙂

**mdjermanovic:** Also, there should be another PR after this one. This one is non-breaking changes only

**nzakas:** Ah

**mdjermanovic:** It could be merged for v8, if finished on time
 * 👍 @nzakas

**nzakas:** Okay, so that's all the issues we have planned for alpha. Seems like we're in pretty good shape to get this out in the next couple of months.
 * 👍 @mdjermanovic

**nzakas:** Any other topics before we move on to contributor pool?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Looks like we just have one PR this month: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-11-01..2023-11-30
 * 👍 @mdjermanovic

**nzakas:** I'd also like to nominate That_Guy997 for contributing to <#1059928426217209896>
 * 👍 @mdjermanovic

**nzakas:** They've been active for a couple months now, so maybe $300?
 * 👍 @mdjermanovic

**nzakas:** And for the PR, $100?

**mdjermanovic:** Sounds good to me

**nzakas:** All right, I'll let them know.
 * 👍 @mdjermanovic

**nzakas:** Let's talk the release tomorrow. Are you available?

**mdjermanovic:** Yes, I can tomorrow

**mdjermanovic:** That'll be `@eslint/eslintrc`, `@eslint/js`, and `eslint`
 * 👍 @nzakas

**nzakas:** All right, I think that's it for today. Thanks!

**mdjermanovic:** Thanks! 👋
