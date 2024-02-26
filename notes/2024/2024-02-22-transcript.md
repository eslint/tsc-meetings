# 02/22/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Looking through the issues and it looks like we don't have anything flagged specifically for today, so we'll jump right into v9 planning.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** Next release will be beta.1 and we still have a bunch of issues open

**nzakas:** First is this one:

**nzakas:** https://github.com/eslint/eslint/issues/17579

**mdjermanovic:** Looks like we don't have the final design yet

**nzakas:** Agreed. I created a `rc.0` target on the board, so anything that's not going out tomorrow I'll move to that target as I don't think it makes sense to keep targeting specific betas at this point.
 * 👍 @mdjermanovic

**nzakas:** This one was just completed:
https://github.com/eslint/eslint/issues/17943
 * 👍 @mdjermanovic

**nzakas:** Now we need to add that to the `v8.x` branch as well. I'll take the action item to do that after the meeting.
 * 👍 @mdjermanovic

**nzakas:** Next one: https://github.com/eslint/eslint/issues/18075

**mdjermanovic:** That is finished in both branches?

**nzakas:** Yeah, was just looking over that. I probably just did `refs` on each PR so it wouldn't be closed until both PRs were closed.

**nzakas:** But does look complete to me.
 * 👍 @mdjermanovic

**nzakas:** Marking as complete and closing.
 * 👍 @mdjermanovic

**nzakas:** Next one: https://github.com/eslint/eslint/issues/18087

**nzakas:** We are still waiting for feedback from ljharb on if this approach will work, so moving that to `rc.0`.
 * 👍 @mdjermanovic

**nzakas:** As an added bonus, I added this to track:
https://github.com/eslint/eslint/pull/18134

**nzakas:** I didn't realize that adding support for `.ts` config files could be so easy. If it really is as simple as this PR, is it something we want to consider?

**mdjermanovic:** I'm not sure if that's a solution we could accept

**mdjermanovic:** Because it adds a library that hooks into loaders, which is a side effect that might not be desirable, especially when eslint is used as a library (through API)

**nzakas:** Can you leave that feedback on the PR? I hadn't looked at it closely.

**mdjermanovic:** I left a few questions to clarify what's happening first
 * 👍 @nzakas

**nzakas:** That's all we have on the v9 board. We're getting close!

**mdjermanovic:** What do you think about adding this one: https://github.com/eslint/eslint/issues/18132

**nzakas:** Seems reasonable. I'm assuming the amount of work to do that is fairly small?

**mdjermanovic:** Yes, I can do that next week

**nzakas:** Sounds good to me. I'll mark as accepted and add it to the board.

**nzakas:** At this point, though, I think we need to lock down v9 to what's on the board already. Otherwise we'll probably continue to find small breaking changes we'd like to get in. 🙂

**mdjermanovic:** Yeah, I added this mostly because that behavior becomes especially confusing now that we implemented https://github.com/eslint/eslint/issues/17381 for v9

**nzakas:** Understood.

**nzakas:** I'd just like to come to an agreement that we're done adding new things now unless absolutely necessary.

**mdjermanovic:** I agree
 * 👍 @nzakas

**nzakas:** For the record: we've agreed that what's on the v9 board is the final group of breaking changes we'll consider for v9, excluding an emergency of some sort.
 * 👍 @mdjermanovic

**nzakas:** Anything else to discuss about v9?

**mdjermanovic:** Nothing in particular that I'm aware of

**nzakas:** Okay, then moving on.

**nzakas:** Regarding the year in review blog post: I'd like to go back and our top sponsors to that post. I feel bad that I didn't think to do that but I think it would be nice to give them some public recognition. Basically, the top 10 sponsors for the year. What do you think?
 * 👍 @mdjermanovic

**mdjermanovic:** Makes a lot of sense

**nzakas:** I was also thinking of going back and updating the 2022 year in review, recalculating all of the numbers so they're done the same way as in 2023. That way, we can easily look back to compare.
 * 👍 @mdjermanovic

**nzakas:** Okay, I'll take the action items to do that.
 * 👍 @mdjermanovic

**nzakas:** Shall we talk about the release? (And potentially the backport release?)

**mdjermanovic:** Yes

**mdjermanovic:** I tested today `release:generate:latest` on the `v8.x` branch, and right after that `release:generate:beta` on the `main` branch, and both looked perfectly good

**mdjermanovic:** I couldn't test `release:publish` for either though, hopefully there will be no surprises there

**mdjermanovic:** So, I think we can release both v8.57.0 and v9.0.0-beta.1 tomorrow
 * 🎉 @nzakas

**mdjermanovic:** All planned tasks for v8.57.0 are done, except porting the just-merged https://github.com/eslint/eslint/pull/18135 which should be easy

**mdjermanovic:** So it looks like we'll be ready for v8.57.0 tomorrow

**nzakas:** Nice. I think the only potential other candidate for backporting is probably: https://github.com/eslint/eslint/issues/18087

**mdjermanovic:** Then, we might want to wait with the backport? Or possibly release two backports

**nzakas:** Not that I think that should hold up v8.57.0, just that we may need to do v8.58.0 before v9.0.0.

**nzakas:** It would be nice to have matching flat config support on both branches to minimize disruptions.

**mdjermanovic:** Yes, I recall testing generating multiple backports and it was working fine with `eslint-release`
 * 👍 @nzakas

**mdjermanovic:** As long as neither is released after v9.0.0 final. If we need to do more 8.x releases after v9.0.0, that would require some changes in `eslint-release`

**nzakas:** Right. I'd like to avoid that.

**nzakas:** Oh, I missed one other issue for v9: https://github.com/eslint/create-config/issues/51

**nzakas:** Because it's not in the main repo

**nzakas:** But we should definitely have that complete for `rc.0`

**mdjermanovic:** Then we could add the Playground change too? https://github.com/eslint/eslint.org/pull/509

**nzakas:** Good call! Yes, let's keep all that together so we don't lose track.

**nzakas:** Added those both to `rc.0`
 * 👍 @mdjermanovic

**nzakas:** So we're doing `eslint` and `@eslint/js` only?

**mdjermanovic:** We had a change in `@eslint/eslintrc` too

**mdjermanovic:** I think the list would be: `@eslint/js` v8.57.0, `eslint` v8.57.0, `@eslint/eslintrc` v3.0.2, `@eslint/js` v9.0.0-beta.1, `eslint` v9.0.0-beta.1

**nzakas:** https://github.com/pulls?q=org%3Aeslint+is%3Apr+label%3A%22autorelease%3A+pending%22

**nzakas:** Should we also release these?

**nzakas:** `eslint-plugin-markdown` should be ready to go I think

**mdjermanovic:** For `eslint-visitor-keys` there would be no changes in the published package so I think a release isn't necessary
 * 👍 @nzakas

**mdjermanovic:** Others I think we could evaluate separately from the eslint release cycle

**nzakas:** Fair enough.

**nzakas:** Okay, I think that's all for today. Unless you have anything else to discuss before we call it?

**mdjermanovic:** I can do all releases tomorrow. Will you maybe be around in case something goes wrong since this is the first time we're doing backports

**nzakas:** I'll be around until about 3pm my time (end of this meeting)

**mdjermanovic:** Great, thanks! I'll then plan to start with releases bit earlier than the meeting start time
 * 👍 @nzakas

**nzakas:** All right, see you tomorrow!

**mdjermanovic:** Thanks! See you 👋
