# 10/16/2025 ESLint TSC Meeting Transcript

**nzakas:** Hi!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Just pulling up the notes from last time

**nzakas:** Okay, looks like we don't have anything to follow up on.

**nzakas:** Let's start with statuses. I've mostly been focused on switching packages to trusted publishing. (of which, all release-please packages are now officially migrated)

**mdjermanovic:** I was working on removing `nodejsScope` option from `eslint-scope`, switching eslint/rewrite packages to trusted publishing, and testing and providing feedback for `file-entry-cache` v11 to unblock the Relative cache support RFC.

**fasttime:** I was mostly busy with fixing the configuration types in pnpm, and worked on some maintenance PRs.

**nzakas:** Let's discuss availability the next couple of weeks. I'm still at 0.5-1 hours per weekday.

**mdjermanovic:** I expect to be available around 2h each day

**fasttime:** I should be available 9-12 hours per week

**nzakas:** RFC Duty:
This week - @fasttime 
Oct 20 - @nzakas 
Oct 27 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues flagged for today. Anything non-v10-related anyone would like to discuss first?

**mdjermanovic:** Nothing in particular non-v10-related

**fasttime:** I noticed that the author of github.com/eslint/rfcs/pull/114 hasn't been active on GitHub this year at all

**fasttime:** wrong link

**mdjermanovic:** The RFC you linked first also looks inactive 🙂

**nzakas:** Was thinking the same thing 🙂

**fasttime:** True 🙂 I was saying that the GitHub user https://github.com/cs6cs6 seems inactive

**nzakas:** It looks like they were never very active
 * 😄 @fasttime

**nzakas:** And the RFC has been open for two years, so I wouldn't blame them for spending their time elsewhere.

**mdjermanovic:** That RFC was blocked on file-entry-cache. Now it should be good to continue. I asked the author if they're willing to. If they don't respond in a week we could close it?

**mdjermanovic:** And leave a notice on the original issue that an RFC is welcome

**nzakas:** IIRC we were just waiting on the `file-entry-cache` update to move forward? I'd hate to close it now that we actually have that.

**mdjermanovic:** Yes, that was a big blocker. The just-released v11 supports what we need for this RFC.

**nzakas:** Because you've spent so much time on this, would you be willing to finish the RFC?

**mdjermanovic:** Yes, I could take it
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** I'll give a chance for a week to the original author to respond, otherwise I'll open a new one
 * 👍 @fasttime

**nzakas:** Sounds good

**nzakas:** On the other RFC (localization), I think we could also post a note and if there's no response, close it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** To review.

https://github.com/eslint/rfcs/pull/114: We've agreed to give the author a week to see if they'd like to pick it up, and if not, @mdjermanovic will take it over.

https://github.com/eslint/rfcs/pull/128: We've agreed to post on the RFC to see if the author still wants to continue with it, and if after a week we don't get a response, we'll close the RFC.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, anything else non-v10-related?

**fasttime:** Nothing else from my side

**nzakas:** @mdjermanovic ?

**mdjermanovic:** Nothing from my side non-v10-related

**nzakas:** Okay, we'll move on to v10

**nzakas:** https://github.com/orgs/eslint/projects/6/views/1

**nzakas:** There was actually an issue we missed last time:
https://github.com/eslint/eslint/issues/19916

**mdjermanovic:** I'm in favor of including this in v10
 * 👍 @nzakas

**fasttime:** Sounds good

**nzakas:** Okay, we've agreed to include it in v10.

**nzakas:** Other v10-related topics to discuss?

**nzakas:** To be more specific: any issues in particular?

**fasttime:** Nothing from me

**mdjermanovic:** About removing `ecmaFeatures.globalReturn`, we got a note from a user that it will make use of ESLint to lint code that run in environments that wrap the code in a function, but are not CommonJS environments, more difficult. https://github.com/eslint/js/issues/525#issuecomment-3405494567

**mdjermanovic:** Any concerns about this use case?

**fasttime:** That's not a case we support in built-in rules

**fasttime:** And I don't think it's tested in eslint/js packages

**mdjermanovic:** Maybe not explicitly, but setting `globalReturn: true` adds a function scope around the code and affects rules such as no-redeclare

**mdjermanovic:** Now the user would need to set `sourceType: "commonjs"` to get an approximation, but their code is no CommonJS. E.g., there are no commonjs globals

**fasttime:** I wouldn't be opposed to support that mode (ESM wrapped in IIFE), maybe with a new `sourceType`, but I think it's safe to remove `globalReturn`.

**nzakas:** `ecmaFeatures.globalReturn` works hand-in-hand with `eslint-scope` `nodejsScope`

**nzakas:** https://github.com/eslint/eslint/blob/e37e590aae2a7fcca4d3a9adc1379ad466e5c5d1/lib/languages/js/index.js#L52

**nzakas:** So really, we need to move these two together no matter the decision.

**mdjermanovic:** Yeah, it was adding a `function` scope. Now that we're going to remove `ecmaFeatures.globalReturn` and `nodejsScope` altogether, the only option for users is to set `sourceType: "commonjs"`

**nzakas:** I'd prefer not to just remove a use case without adding an official way to support it, and I don't see removing these as particularly important to v10. I propose we defer to v11 to give us more time to think this through.

**mdjermanovic:** Yeah, I was also inclined to suggest the same.

**fasttime:** Makes sense to me

**nzakas:** Okay, we've agreed to defer this change to v11 with the intent to find a way to support the userscript use case that doesn't require `globalReturn`.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other v10 issues to discuss?

**mdjermanovic:** Nothing in particular. I believe all eslint/js-related PRs are up, they just need reviews and/or second reviews.
 * 👍 @fasttime

**fasttime:** I  have nothing to discuss in particular

**mdjermanovic:** We're still waiting for a `v10_*` flags PR, which is I think the main feature of ESLint v10

**nzakas:** Yeah, I was going to bring that up regarding timing.
https://github.com/eslint/eslint/issues/19967

**nzakas:** We do need that complete to be ready for an alpha. I left a comment asking for an ETA.

**mdjermanovic:** Yeah, I think that should be included in the first prerelease, as the lookup from file is the major difference.

**nzakas:** Especially because we announced it in the blog post. 🙂

**mdjermanovic:** That's another reason, yes 🙂

**nzakas:** One way or another, though, we should have that complete in the next two weeks so we can tentatively plan the first alpha for November 7?

**nzakas:** (Assuming we want to do one more minor release in two weeks.)

**mdjermanovic:** Yeah, it looks like Nov 14 could be the date for the first prerelease
 * 👍 @nzakas, @fasttime

**nzakas:** Did I count wrong again. 🤦‍♂️

**mdjermanovic:** Thats about one month from now

**nzakas:** Yes, November 14th

**nzakas:** All right, let's talk about tomorrow's release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** Aside from `eslint` and `@eslint/js` of course, we could release `@eslint/config-helpers` with bug fixes in `defineConfig()`

**nzakas:** That sounds like a good idea. 👍

**mdjermanovic:** We have one bug fix merged. It would be good to include the other one as well (needs a second review): https://github.com/eslint/rewrite/pull/288

**fasttime:** I was hoping to get https://github.com/eslint/rewrite/pull/289 merged to fix the regression in pnpm, but if that's not possible we can wait until the other release

**nzakas:** Looks like this we need this merged first? 
https://github.com/eslint/rewrite/pull/294

**fasttime:** That's actually independent, but it wouldn't hurt 🙂

**nzakas:** Okay, I'll plan on reviewing those tomorrow morning

**fasttime:** Thanks!

**mdjermanovic:** Then, I'll release everything that is merged in eslint/rewrite
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Are there any updates other than package.json needed in eslint/eslint regarding those two PRs?

**fasttime:** No, just updating the versions of the rewrite packages should work
 * 👍 @mdjermanovic

**mdjermanovic:** Alright 👍

**fasttime:** I will be available tomorrow to make small changes if necessary

**mdjermanovic:** Thanks!

**mdjermanovic:** This PR might also be ready (pending review from @nzakas) : https://github.com/eslint/eslint/pull/20048
 * 👍 @nzakas, @fasttime

**mdjermanovic:** And I think that would be all, no other PRs seem like merge candidates at the moment.
 * 👍 @fasttime

**nzakas:** I'd like to see if I can finish up https://github.com/eslint/eslint/pull/20168

**nzakas:** Will try to get to it tomorrow morning as well.
 * 👍 @fasttime

**mdjermanovic:** Okay, I'll plan the release for evening (CET) to give time for implementations and reviews
 * 🙏 @nzakas, @fasttime

**nzakas:** I think that's it for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! See you tomorrow!
