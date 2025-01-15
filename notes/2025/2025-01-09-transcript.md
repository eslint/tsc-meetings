# 01/09/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just pulling up the notes from our last meeting

**nzakas:** That was on 2024-12-12

**nzakas:** Okay, so only followup item was for @fasttime to unflag the TS config functionality, which has been completed.

**nzakas:** Let's get started with statuses. For me, I've been working on the `extends` RFC, the CSS plugin, and fixing the GitHub bot (which we'll discuss in a moment).

**mdjermanovic:** I fixed a bug with suggestions in `@eslint/markdown` and updated docs site to use flat config format in rule examples.

**fasttime:** I opened the RFC for multithread linting, unflagged TS config file support, worked to fix some issues with types in the rewrite repo, and I also opened a PR to partly automate the process of generating TSDoc comments in rule types https://github.com/eslint/eslint/pull/19276.

**nzakas:** Let's reset RFC duty next:
Next week: @nzakas

**nzakas:** Jan 20: @mdjermanovic

**nzakas:** Jan 27: @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looks like we don't have any issues flagged. I do have a couple items to discuss.

**nzakas:** First, @mdjermanovic noticed that the GitHub bot was down earlier this week.

**nzakas:** I investigated and found that we're still running on Node.js 16 and Octokit made some breaking changes in a minor release so the app just crashed.

**nzakas:** I'm in the process of updating the bot to run on Node.js 22 right now. It's a painfully slow process that AI doesn't seem to be able to make much of a dent in, so I'm just making my way through each plugin.

**nzakas:** Probably will have it done early next week.

**mdjermanovic:** Don't we have `package-lock.json`?

**nzakas:** We do, but Dokku doesn't seem to be honoring it.

**mdjermanovic:** Oh, that's unfortunate

**nzakas:** In any event, it looks like Octokit and Probot aren't getting very frequently updated anymore, so hopefully once this is fixed we'll be set for a while.
 * 👍 @mdjermanovic

**nzakas:** I going to remove some of the old plugins that are in there that we don't have enabled to reduce the amount of work.

**nzakas:** Next topic: Browser tests.

**nzakas:** https://github.com/eslint/eslint/issues/19234

**nzakas:** We're at the point now where the browser tests always fail and are useless. I think we need to prioritize moving to a different tool.

**fasttime:** I've looked into this, was considering using Cypress as an alternative to WebdriverIO (https://www.cypress.io/). It looks like it's got everything we need.

**fasttime:** It's definitely more used then wdio, so hopefully it'll run with less troubles.

**nzakas:** I'm all for anything that just works. 🙂 I'm not opposed to going back to Karma, too, as it seemed to just work even though it was old.

**fasttime:** Why did we move away from Karma? I think it's because it's no longer maintained?

**mdjermanovic:** Yes, that was the reason
 * 👍 @fasttime

**fasttime:** I could look more into Cypress next week.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Sounds good. I think if we spend the next two weeks getting infrastructure fixed (GitHub bot and browser tests) that will be a good way to kick off 2025.

**nzakas:** Any other topics to discuss before Contributor Pool?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from my side as well.

**nzakas:** Okay, let's discuss Contributor Pool:

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-12-01..2024-12-31

**nzakas:** I'm thinking $250 for hildjj's three PRs to `eslint/json`
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Unsure about  aryaemami59's PR. Thoughts?

**fasttime:** Maybe $200 because it took a while to complete?
 * 👍 @nzakas, @mdjermanovic

**nzakas:** And $100 for the rest?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll let them know.

**nzakas:** Let's talk about the release tomorrow

**fasttime:** I have time.
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** Just `eslint/js` and `eslint` as it seems.

**nzakas:** Looks like it

**mdjermanovic:** Maybe also `eslint/rewrite` packages? https://github.com/eslint/rewrite/pull/139
 * 👍 @nzakas

**fasttime:** Ah yes. Maybe we can release those earlier tomorrow, so there's time to update the dependencies in eslint.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Sounds good.

**fasttime:** Okay, I'll do that.

**nzakas:** All right, I think that's it for today. Thanks everyone!

**mdjermanovic:** Thanks! 👋

**nzakas:** (thanks @sam3k_ for the notes)

**fasttime:** Thanks! Bye 👋
