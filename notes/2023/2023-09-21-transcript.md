# 09/21/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy! Apologies for the delay. I had no idea the dentist would be over two hours.

**mdjermanovic:** Hi! No worries

**mdjermanovic:** That often happens at dentists
 * 😬 @nzakas

**nzakas:** So let's jump right in.

**nzakas:** It looks like we don't have anything tagged as "tsc agenda", so let's look at the v9 board

**nzakas:** https://github.com/orgs/eslint/projects/4

**nzakas:** We can start with 👍 or 👎 for inclusion, and then discuss any details on the issues.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17579
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I'd like to get that in and test my new knowledge of code path analysis 🙂
 * 👍 @mdjermanovic

**mdjermanovic:** You're now our new expert for code path analysis

**nzakas:** Hehe. Scary, because I still don't understand it all. But I'm getting there.

**nzakas:** https://github.com/eslint/eslint/issues/16999
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I added it because it has some breaking changes, like removing methods in v9

**nzakas:** Yup, good call.

**nzakas:** Interesting, it looks like phase 7 calls for warning about `getCwd()` and friends on `context` in `RuleTester`.

**nzakas:** and Phase 8 for removal of those

**nzakas:** So do we want to do all of that for v9?

**mdjermanovic:** I'd still leave them for v10

**nzakas:** Sounds good. Just going to add that as a note in the issue.

**mdjermanovic:** There will be plenty of other changes for rules, so might be better to leave non-critical ones for later
 * 👍 @nzakas

**nzakas:** Okay, added the note and also created a v10.0.0 board and added the issue to that one as well.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/orgs/eslint/projects/6/
 * 👍 @.rec0il, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17595
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Do you want to talk minor versions now or do that on the issue?

**mdjermanovic:** Might be better on the issue, to gather other opinions

**nzakas:** Sounds good

**mdjermanovic:** We're usually looking into features we'd like to use and determining minor versions based on that

**nzakas:** Right

**nzakas:** https://github.com/eslint/eslint/issues/17596
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I added an initial proposal there. If we add new rules until we start with v9, we could add them as well

**nzakas:** Yup. Trivial to add right up before the major release, so no time pressure.
 * 👍 @mdjermanovic

**nzakas:** Thanks for adding those last two issues. I've been thinking about those and keep forgetting to open issues.

**mdjermanovic:** I think we should also add the Flat Config issue

**nzakas:** Oh good call

**mdjermanovic:** https://github.com/eslint/eslint/issues/13481

**nzakas:** Added to both v9 and v10 boards
 * 👍 @mdjermanovic

**mdjermanovic:** While at that issue, do we plan to remove `context.parserPath` and `context.parserOptions` in v9?

**mdjermanovic:** That task is in Phase 5, which I think implies a later version?

**nzakas:** Ah yes, good question.

**mdjermanovic:** I'd be fine with removing them in v9, as described in the upcoming blog post, just wanted to double check with you if that's the plan

**nzakas:** Just reviewing everything and trying to remember my thinking

**nzakas:** Okay, so I think it's probably best to leave them in v9 and remove them in v10. That will avoid any eslintrc compatibility issues between now and when we remove eslintrc.
 * 👍 @mdjermanovic

**nzakas:** I'll update the blog post. So many moving parts to keep track of. 😅

**mdjermanovic:** A plenty of details

**nzakas:** Okay, any other issues related to v9 we need to discuss?

**mdjermanovic:** Nothing in particular I think

**nzakas:** Okay, any other issues in general?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Me either. Let's talk about the release.

**mdjermanovic:** I can tomorrow

**mdjermanovic:** Just `eslint` and `@eslint/js` I think

**nzakas:** Thanks. And I believe you're correct.

**mdjermanovic:** I left a few comments on the blog post, it would be nice to merge it for the release too since the release brings deprecation warnings that are explained in the blog post

**nzakas:** I was thinking to do the blog post next week (hence the date on the file), after the release.

**mdjermanovic:** Ah, I missed the date

**nzakas:** Having two posts on the same day is usually not a good idea for reach

**mdjermanovic:** Alright, agreed

**nzakas:** Okay, anything else before end the meeting?

**mdjermanovic:** I totally missed the date, thought you'd like to publish it before the release

**mdjermanovic:** Nothing in particular

**nzakas:** All right, then let's call it.

**nzakas:** Thanks, and sorry for my lateness. (Thanks @sam3k_ for taking notes)

**nzakas:** Have a good one!

**mdjermanovic:** Thanks! 👋

**sam3k_:** Thanks and sorry for my lateness Thanks
