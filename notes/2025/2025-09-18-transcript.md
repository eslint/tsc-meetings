# 09/18/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Just going to pull up the notes from last meeting

**nzakas:** Okay, doesn't look like anything to follow up on

**nzakas:** Let's start with statuses. I've mostly been reviewing PRs and issues though did start a couple of v10-related tasks to remove deprecated methods from `context` and remove eslintrc from `Linter`

**mdjermanovic:** I was working on v10-related eslint-scope update regarding globals, and reviewing a lot of PRs

**fasttime:** I worked on disallowing `eslin-env` comments and other v10 related tasks, also reviewed v10 related PRs.

**nzakas:** Moving on to availability for the next two weeks. I'm still at 0.5-1 hours each weekday.

**mdjermanovic:** I expect to be able to work about 2 hours each day

**fasttime:** I will be limitedly available next week, probably only 0.5 hours per day. The other week, I should be available about 12 hours per week.

**nzakas:** RFC Duty:
This week - @mdjermanovic 
Sept 22 - @fasttime 
Sept 29 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** I think it should be Sept 22 and 29?

**nzakas:** Yep. Math is hard.
 * 😄 @fasttime

**nzakas:** We have on agenda item:

> Agenda item: Do we want to keep updating our `zh-hans` docs site? It's currently on v8.50.0, which is 2 years old and more than 40 versions behind, including 1 major. If we can't keep it up to date on regular basis, then it's not much useful for users, and thus not worth the effort.

**nzakas:** Note that aladdin-add mentioned willingness to help update the site to v9

**mdjermanovic:** I raised this question because there have been some activity in the repo past couple days, so I was wondering if we want to continue updating the site

**mdjermanovic:** https://github.com/eslint/zh-hans.docs.eslint.org/pulls

**nzakas:** Let me check what kind of traffic it gets...

**mdjermanovic:** My concern is that it could happen again that it lags a lot

**nzakas:** Doh, looks like we never set up Google analytics for it. 🙁

**nzakas:** Oh actually, it's still listed as cn.eslint.org

**mdjermanovic:** Yeah, there is Google Analytics script in html

**nzakas:** So we had 4,000 users in the past month

**mdjermanovic:** How much did we have on the English docs site, for comparison?

**nzakas:** 140,000

**nzakas:** Here's my thinking: I don't want to be paying someone by the hour to translate our docs into Chinese. I don't think that's a good use of time or money based on the number of people visiting the site.

**mdjermanovic:** I think the same, and also have concerns that it might happen again that the site falls significantly behind the latest version

**fasttime:** Then it makes sense to stop the Chinese site.

**nzakas:** Okay, we've agreed to no longer update the zh-hans.eslint.org site. It's still on my long todo list to investigate automated documentation translation, and we can revisit at that point.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other issues or PRs to discuss before we move on to v10?

**fasttime:** Nothing else from my side.

**mdjermanovic:** Nothing in particular that isn't related to v10 from my side

**nzakas:** Okay, let's discuss v10:
https://github.com/orgs/eslint/projects/6

**nzakas:** It looks like we have some new issues on the board.
 * 👍 @fasttime

**nzakas:** https://github.com/eslint/eslint/issues/20097
Should we remove deprecated formatting rules from the core?

**nzakas:** I think we should push this to v11.
 * 👍 @mdjermanovic

**mdjermanovic:** Well, there is a replacement plugin, so we could, but I think it's too soon
 * 👍 @nzakas

**fasttime:** Then let's postpone this to v11.

**nzakas:** Okay, we've agreed to wait to consider this for v11. I've moved it onto that board.

**mdjermanovic:** Shall we update `availableUntil` in rule's meta to v11? https://github.com/eslint/eslint/issues/20097#issuecomment-3284906707

**fasttime:** I'd say yes 👍
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Agreed. We should update all of those rules to say `availableUntil: "11.0.0"` for clarity.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Does anyone want to take that as an action item?

**mdjermanovic:** I can

**nzakas:** Thanks!

**fasttime:** Thanks!

**nzakas:** Next one: https://github.com/eslint/eslint/issues/20134

Fix `func-names` schema to not allow extra, unused elements.

**mdjermanovic:** That's a tiny change with low impact, so I'm in favor

**nzakas:** I'm 👍

**fasttime:** Sounds good 👍

**nzakas:** Okay, we've agreed to include this in v10.

**nzakas:** Next: https://github.com/eslint/eslint/issues/20113

Remove deprecated `SourceCode` methods

**mdjermanovic:** `getTokenOrCommentBefore()` and `getTokenOrCommentAfter()` deprecation was announced in ESLint v4: https://eslint.org/docs/latest/use/migrating-to-4.0.0
 * 😂 @nzakas

**mdjermanovic:** And there is a direct replacement, so I' im in favor of removing these two

**nzakas:** I suppose it would be good to finally remove them.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** `isSpaceBetweenTokens()` is still used by deprecated core rules, and I'd guess it's still used by their replacements.

**mdjermanovic:** And I'm not sure if we ever announced its deprecation

**nzakas:** You're talking about formatting rules?

**mdjermanovic:** Perhaps we could postpone this for v11, when we'll remove formatting rules

**mdjermanovic:** Yes, formatting rules

**nzakas:** https://eslint.org/blog/2019/11/eslint-v6.7.0-released/#deprecations

**nzakas:** We did announce deprecation of `isSpaceBetweenTokens()` in v6.7.0

**fasttime:** I mean, it's on this page: https://eslint.org/docs/latest/extend/custom-rules#deprecated-sourcecode-methods

**mdjermanovic:** Ah, yes

**nzakas:** eslint-stylistic doesn't use it: https://github.com/eslint-stylistic/eslint-stylistic/blob/2a422b7955f317a141e1d921b05c9156072765e5/CHANGELOG.md?plain=1#L496

**fasttime:** So actually it's already announced that all of these methods will be removed.

**mdjermanovic:** Good find! Then, I'll be fine with removing it

**nzakas:** and what about `getJSDocComment`?

**nzakas:** https://eslint.org/blog/2018/11/jsdoc-end-of-life/

**fasttime:** That could be moved to `ast-utils` for rules that use it, but there will be no external replacement, unless we extend `@eslint/compat`.

**nzakas:** I think 7 years is enough notice 🙂

**mdjermanovic:** That one is a bit more problematic because there's no quick replacement, but I guess people could copy & paste the implementation to their plugin.

**nzakas:** They could. We can also add it to `@eslint/compat` (which I think we should do with all four of these methods regardless)
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** I checked the implementation now, and it doesn't seem it's using any internals of SourceCode, so it should be easy copy & paste
 * 👍 @nzakas

**nzakas:** Okay, we've agreed to remove these four deprecated methods and provide fallbacks in `@eslint/compat`.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next, let's talk about the Node.js version support:
https://github.com/eslint/eslint/issues/19969

**mdjermanovic:** Would we use `require(ESM)`, as it isn't marked as stable?

**nzakas:** Can you expand that statement a bit, I'm not sure what it is you're saying.

**mdjermanovic:** One of things mentioned in the issue is usage  of `require(ESM)`, and aligning versions of Node.js we'd support with versions that support this feature

**mdjermanovic:** But it's still not marked as stable, so I'm unsure if we would use it in production code

**nzakas:** It's considered a release candidate now:
https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require

**mdjermanovic:** Does it make it safe for use? The page that describes stability statuses says " Use of the feature is not recommended in production environments." for 1.x statuses. https://nodejs.org/api/documentation.html#stability-index

**nzakas:** I can't answer if we'd actually use it or not. I think we would like the option to do so.

**fasttime:** If we use it, for example, we could distribute language plugins in ESM only, and tell users to require them if they are using CommonJS.

**nzakas:** We could also just tell them to use ESM config files and not worry about it. 🙂

**mdjermanovic:** We could also consider converting several `eslint/rewrite` packages to ESM-only

**mdjermanovic:** e.g. config-array

**nzakas:** I think we can take that as a separate discussion if we agree on a range where `require(esm)` is available.

**nzakas:** Which is my point: I'd like to have the option to use it, so I'd like to choose a range where it's available.

**mdjermanovic:** That's my question, if we use availability of `require(esm)` to determine the range, then it means we might want to use it. But could we use it, since it's not marked as stable

**nzakas:** I think yes, as I think it's close enough to stable that I'm not concerned.

**mdjermanovic:** Alright, then we consider 1.2 stability as something we can use 👍
 * 👍 @nzakas

**nzakas:** So it looks like the latest proposal is `^20.19.0 || ^22.13.0 || >=24`
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Do we feel comfortable with that?

**nzakas:** Okay, we've agreed that the supported Node.js versions for v10 will be `^20.19.0 || ^22.13.0 || >=24`.
 * 👍 @michael.faith, @mdjermanovic, @fasttime

**nzakas:** There are a couple of other things we need for v10 that aren't currently represented in issues:

1. A "what's coming in v10" blog post. We typically have done this before the first prerelease to give people a heads up. v9 version: https://eslint.org/blog/2023/11/whats-coming-in-eslint-9.0.0/

2. A migration guide. What worked well for v9 was to merge a shell of the migration guide first, then ask everyone who implements a PR to update the migration guide to reflect the contents of the PR.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Just adding these to the board...

**nzakas:** Okay. Leaving them unassigned so anyone who wants to can grab them.
 * 👍 @mdjermanovic

**nzakas:** Any other v10-related topics to discuss?

**fasttime:** Nothing else I think.

**mdjermanovic:** Nothing in particular from my side as well

**nzakas:** All right, then let's move on to discuss tomorrow's release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** That would be `eslint` and `@eslint/js`?
 * 👍 @fasttime

**nzakas:** Looks like it

**mdjermanovic:** All right then

**nzakas:** We have some other unrelated releases we can do too: https://github.com/pulls?q=org%3Aeslint+is%3Apr+label%3A%22autorelease%3A+pending%22+is%3Aopen

**nzakas:** Though those can also be done separately

**mdjermanovic:** I think we could do those next week
 * 👍 @fasttime

**nzakas:** Sounds good
 * 👍 @mdjermanovic

**nzakas:** Anything in need of review to be included?

**mdjermanovic:** I don't see anything that's critical and/or merge candidate or needs a second review

**fasttime:** There's this PR: https://github.com/eslint/eslint/pull/20048

**fasttime:** But it's not critical

**mdjermanovic:** Ah, yes. The code was good, it needed tests

**nzakas:** Okay, then let's come to a close. Thanks everyone! (and thanks @sam3k_ for the notes).

**fasttime:** Thanks! Bye 👋

**mdjermanovic:** Thanks! 👋
