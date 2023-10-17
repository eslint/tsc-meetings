# 10/05/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Looks like we don't have any issues labeled as "tsc agenda" today, so we'll go straight to v9.0.0 review.

**nzakas:** https://github.com/orgs/eslint/projects/4

**nzakas:** For easy reference

**nzakas:** So I added this one because it would need to be addressed after we finalize the formatters work: https://github.com/eslint/eslint/issues/17505
 * 👎 @nzakas, @mdjermanovic

**nzakas:** Clearly can be done after the release, though, so potentially not necessary to be tracked here?

**mdjermanovic:** Yes, it isn't a blocker for v9

**nzakas:** Okay, I'll remove it

**mdjermanovic:** Agreed to remove it from the project and evaluate it later unrelated to v9

**nzakas:** https://github.com/eslint/eslint/issues/17622
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I was unaware that this was happening.

**mdjermanovic:** I noticed that while reviewing the `SourceCode#applyInlineConfig()` PR.

**nzakas:** Just looking back to see where this happened

**mdjermanovic:** From the very first commit that introduced `/* exported */`

**nzakas:** That's interesting

**mdjermanovic:** I think it just went unnoticed at the time

**mdjermanovic:** https://github.com/eslint/eslint/commit/e2b079f7de51b0bc433c9180883673243e240c8f

**nzakas:** Thanks. Interesting that it does use `parseBooleanConfig()` there but the value isn't used. It was probably a copy-paste error.

**nzakas:** (copying from how globals were handled)

**mdjermanovic:** I also tried switching to `parseListConfig` and all tests are still passing.

**nzakas:** Yeah, I don't think this was intentional in any way based on the tests in that original commit.

**nzakas:** So I agree, let's fix this.

**mdjermanovic:** I think the same, just a wrong copy & paste that went unnoticed

**nzakas:** Okay, are there any issues in v9.0.0 that we need to discuss?

**nzakas:** I could use some feedback on this one to make sure I'm going in the right direction: https://github.com/eslint/eslint/issues/17579

**mdjermanovic:** Nothing in particular, except that we might have some open issues related to FlatConfig that should also be fixed before v9, for example https://github.com/eslint/eslint/issues/14308

**mdjermanovic:** We could include that in https://github.com/eslint/eslint/issues/13481 if it isn't already listed
 * 👍 @nzakas

**mdjermanovic:** I'll take a look.

**nzakas:** Thanks. I figure while my brain is fresh with code path analysis would be a good time to bang that one out as well.

**nzakas:** But need to figure out what the correct code paths should look like. In looking at existing tests, the unreachable handling is kind of a mess.

**nzakas:** Sure wish we had had RFCs back when this was implemented. 😆

**mdjermanovic:** I remember that some decisions about try-catch were for performance reasons. The most correct graph would be with paths from each throwable node to `catch`, but that would create a huge graph

**nzakas:** Right, and not very useful.

**mdjermanovic:** I'll take a look certainly

**nzakas:** Okay, another v9.0.0 topic: I brought up a couple meetings ago the possibility of merging v9 changes into a staging branch. You were going to investigate how other projects handled major changes. Any updates or thoughts on that?

**mdjermanovic:** Still investigating. From what I can tell at the moment is that what we'd like to do is pretty uncommon.

**mdjermanovic:** Most projects are doing only hotfixes (or nothing) on the previous major version. What we'd like to do is two branches that would significantly diverge

**mdjermanovic:** Node.js, I believe, has latest development on the `main` branch, and that includes breaking changes, and then they're cherrypicking commits for minor releases

**nzakas:** Ah yes, I seem to recall that now.

**mdjermanovic:** Downside is that they don't have a clear version history on the `main` branch

**nzakas:** Right.

**mdjermanovic:** The simplest and most efficient thing for us would be to stop with minor versions, like we were doing before v8

**nzakas:** Agreed. The only problem is we don't know how long we'll go without a minor release once we do that.

**mdjermanovic:** Otherwise, we could try the process you suggested, but it will likely require a huge rebase effort

**mdjermanovic:** That said, I think it is doable, just uncommon

**nzakas:** I wonder if we could do incremental rebasing. So the `v9-staging` branch would regularly rebase on top of `main` rather than doing a big bang at the end.

**mdjermanovic:** I thought of that too. A problem is that such rebasing breaks pending PRs.

**nzakas:** Would that be true even if the rebase didn't require manual fixes?

**mdjermanovic:** That's similar to how `main` branch should never be force-pushed

**mdjermanovic:** Rebases create new commits, so they change the most recent common ancestor

**nzakas:** Hmmm

**mdjermanovic:** I'll create a test repo and do some experimenting with different approaches

**nzakas:** Sounds good. We can always do the same thing we did last time...which is fine, but we have 27 issues planned for v9, and I don't relish letting all those PRs pile up at once.

**mdjermanovic:** That's another option, too.

**mdjermanovic:** Though that would very likely create many conflicts between PRs

**nzakas:** Yep. It's a pick your poison situation.

**mdjermanovic:** Last time I think we didn't have that many changes targeting same parts of the code as we'll have now, so it was indeed relatively easy.

**nzakas:** Yes, this is a particularly big and gnarly major release thanks to the flat config stuff.

**mdjermanovic:** Yes, this is much bigger release than v8

**nzakas:** I find myself wishing we had a feature flag system so we could ship code that wouldn't run. I'll add that to my wishlist for the core rewrite.

**nzakas:** Last topic for v9: Do we want to freeze the feature list now?

**nzakas:** The release is certainly large enough 🙂

**mdjermanovic:** I think yes.

**mdjermanovic:** 27 issues sounds large enough 🙂
 * 👍 @nzakas

**nzakas:** Okay, we've agreed that the feature list for v9 is now frozen. 🎉
 * 👍 @mdjermanovic

**mdjermanovic:** And some of them are quite big

**nzakas:** Oh yes they are.

**nzakas:** I am working on the "flat config rollout" blog post that outlines how things will be changing in v9 and v10, expect to see a PR for that soon.
 * 🎉 @mdjermanovic

**nzakas:** Any other issues to discuss before we do contributor pool?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Okay, then here we go: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-09-01..2023-10-01+

**mdjermanovic:** Some were included in the last one?

**nzakas:** It looks like zamiel is the only repeat

**mdjermanovic:** The typescript template PR I think

**mdjermanovic:** Yes, that one, since `2023-09-01` is overlapping

**nzakas:** Right. Need to watch out for that. 👍

**nzakas:** tanujkanti4441 has two PRs so $250?
 * 👍 @mdjermanovic

**nzakas:** DMartens $100?
 * 👍 @mdjermanovic

**nzakas:** Domnantas - that one was the result of an RFC started in 2022. I'd like to propose $1000 to say "thank you" for sticking with it
 * 👍 @mdjermanovic

**mdjermanovic:** Absolutely. There was a lot of work starting from the issue, then RFC and the PR

**nzakas:** Great, I'll let them all know.

**nzakas:** Let's talk the release.

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**mdjermanovic:** Just `eslint` and `@eslint/js` this time I believe

**nzakas:** Looks like it. It's been relatively slow on the other repos.

**nzakas:** All right, I think that's it for today. Thanks! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**nzakas:** Bye! 👋

**mdjermanovic:** Bye! 👋
