# 07/29/2021 ESLint TSC Meeting Transcript

**nzakas:** Hello!

**btmills:** 👋

**nzakas:** Hey there!

**nzakas:** It's just you and me today

**btmills:** I'll try not to hog the conversation haha
 * 🤣 @nzakas

**nzakas:** Okay, so we don't have any agenda items listed, so let's take a look at v8.0.0

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** I've been trying to push https://github.com/eslint/eslint/pull/14591 over the finish line

**btmills:** Do you need any help with it?

**nzakas:** The only thing I didn't do was update code path analysis, which I'm actually not sure how to do.

**btmills:** Looks like code path analysis, fun...

**nzakas:** I'm of the mind that code path analysis shouldn't be a blocker because it applies only to class field initialization

**btmills:** At one point I was like halfway to understanding how that worked

**nzakas:** Code path updates have historically trailed syntax updates, as well

**btmills:** We may end up with some false positives/negatives in a few rules without updating code path analysis, but I'm fine not blocking merge on having it

**btmills:** And then we can let the prerelease tell us if those are egregious

**nzakas:** Sounds good. I'll still make an attempt at code path analysis, but I don't know how long that will take, especially given my energy availability.

**nzakas:** So shall we say this PR is ready to merge and I'll spin up a separate PR for code path analysis?

**btmills:** Works for me

**btmills:** Are all of the rules updated aside from needing code path analysis?

**nzakas:** I added another task to https://github.com/eslint/eslint/issues/14343 for updating code path analysis
 * 👍 @btmills

**btmills:** Or do we plan to have issues to work on those in parallel after merging the syntax support?

**nzakas:** The ID-specific rules are updated. We should work on the rest on an individual basis.

**btmills:** Cool. Should we track rule updates in a checklist on the issue?

**btmills:** https://github.com/eslint/eslint/issues/14343

**nzakas:** I think maybe we should create a new issue for general rule updates for all of the new syntax we'll be introducing?

**btmills:** That works too

**nzakas:** Are you thinking a checklist with every rule listed out for us to verify?

**btmills:** I was thinking just the subset of ones that we think will need to be updated

**btmills:** I can go through the rule list tonight and put that together

**nzakas:** Sounds good.

**nzakas:** There's always a long tail of rule updates that need to be made for new syntax, so I don't think we'll find them all until after v8.0.0 is released

**btmills:** I'm sure I'll miss some

**nzakas:** That's what users are for 🙂

**btmills:** haha and I was thinking that to myself about beta testers

**nzakas:** I'm not sure how many people actually beta test, but we will find out!

**nzakas:** Oh, which reminds me, we do need a task to write the "Migrating to v8.0.0" guide. Can you create an issue for that as well?

**btmills:** Will do

**nzakas:** Thanks!

**nzakas:** We are still waiting on https://github.com/eslint/eslint/pull/14617

**nzakas:** Looks like there hasn't been an update in over a week, so I left a comment. We might need to push that one over the finish line ourselves.

**btmills:** Aside from mdjermanovic's suggestions, it's very close, so that's not a big deal if we need to pick it up

**nzakas:** Agreed

**nzakas:** And then this one: https://github.com/eslint/eslint/issues/14632

**nzakas:** I'm not sure if we need a separate PR for this? It seems like we get top-level `await` support when we merge the Espree upgrade. I don't think there's any rules we need to update. What do you think?

**btmills:** I was just typing the same thing. And we shouldn't need to update any rules since they already support top-level await thanks to `@babel/eslint-parser`

**nzakas:** So shall we move that to "ready to merge" even though there's nothing to do?
 * 👍 @btmills

**nzakas:** All right, and I'll update the PR to have a "Fixes" statement for it to cover our bases.

**btmills:** sounds good

**nzakas:** All of a sudden, v8.0.0 looks almost ready 🎉

**btmills:** It's very close! 🎉

**nzakas:** What do you think about doing one more regular release tomorrow and then starting to merge v8.0.0 PRs on Monday (assuming no patch release)?

**btmills:** That sounds smart

**btmills:** I won't have much time tomorrow, so I can click the button and supervise a regular release, but I wouldn't be able to work through a prerelease

**nzakas:** That's okay, I can do that on Monday.

**nzakas:** And you're away next week, right?

**btmills:** Correct

**nzakas:** Cool, I hope you're going to get to relax?

**btmills:** If you count hiking as relaxing, and I do, then yes 😄

**nzakas:** Awesome

**nzakas:** Okay, so we just talked about the release.

**nzakas:** Anything else we need to discuss?

**btmills:** nothing from me

**nzakas:** Oh, I just wanted to mention again, formally, let's be sure to use the <#688770853588172860> channel for anything that isn't sensitive. I'd like to be as transparent as possible with the whole team about how the project is run. Sensitive things would be issues related to money/sponsors, nominating people for various positions, etc.

**btmills:** Noted 👍

**nzakas:** Cool, well I guess that is it for today.

**nzakas:** I'll go see if I can figure out code path analysis 😄

**btmills:** Good luck!

**nzakas:** Thanks

**nzakas:** Have a good break if I don't get to talk to you before next week

**btmills:** Thanks!

**btmills:** Take care

**nzakas:** You too
