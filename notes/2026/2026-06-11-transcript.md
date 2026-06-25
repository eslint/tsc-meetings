# 06/11/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just pulling up last meeting's notes

**nzakas:** Okay, doesn't look like there was anything to follow up on, so let's jump into statuses.

I wasn't able to do much in the past two weeks due to ongoing health stuff.

**mdjermanovic:** I was mostly reviewing PRs. Also fixed a bug in the ESLint Playground, and located the problem with empty tsc meeting transcripts and committed missing ones.
 * 🎉 @nzakas, @fasttime

**fasttime:** I was mostly busy reviewing issues and pull requests, and I opened issues to improve the ecosystem tests.

**nzakas:** Great, let's talk availability the next couple of weeks.

I'm going to try to be online a bit more, probably around 1-1.5 hours during each week, depending on how I'm feeling.

**mdjermanovic:** I expect to be available 1-1.5 hours per day

**fasttime:** For me it will be 1 hour Mo-Fr and something more in the weekend, so maybe 10-12 hours per week

**nzakas:** RFC Duty update:
This week - @mdjermanovic 
June 15 - @nzakas 
June 22 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looks like we have some issues tagged for today, so we'll start with those, quickly look at "tsc waiting", open up for other issues, then do contributor pool and the release.

**nzakas:** First item: https://github.com/eslint/rewrite/pull/457

**nzakas:** > **TSC Summary**: This PR is mainly about the future of the `@eslint/migrate-config` package, since `@eslint/v8-to-v9-config`, which has been verified in [eslint/eslint#20442](https://github.com/eslint/eslint/issues/20442) and is ready for a blog announcement, could replace it. This PR also changes the implementation to use `includeIgnoreFile` from the `eslint/config` subpath import. Since this feature was added in ESLint v10.4.0, it would break the existing v8-to-v9 migration tooling. This change need to be added in the next major version of `@eslint/migrate-config` instead, so it doesn’t break the current migration solution.
> 
> **TSC Question**: Given that the v8-to-v9 and v9-to-v10 codemods could cover the `migrate-config` package, should this package be deprecated and frozen for new feature requests, with all codemods unified in the codemods repo moving forward? Or do we plan to maintain both packages?

**mdjermanovic:** I guess the first question is shall we deprecate `migrate-config` in near future

**nzakas:** I think it's too early to know.

**mdjermanovic:** Then, seems like we should not consider it as a frozen package
 * 👍 @nzakas, @fasttime

**nzakas:** It seems like another question is if we want `migrate-config` to always migrate people to the latest ESLint version?

**nzakas:** I think the answer is yes (why would someone migrate to v9 if v10 is available?).

**mdjermanovic:** Maybe if they are using some plugins that don't support v10 yet

**mdjermanovic:** But I guess it's a rare case to migrate to a non-last major line

**nzakas:** We could add a `--target-version` option if we think that's a common enough case.

**mdjermanovic:** That seems like the safest option

**mdjermanovic:** What would be default, v10?

**nzakas:** Yes

**nzakas:** I think people need to opt-out of the latest version if they really want it.

**mdjermanovic:** That sounds good to me

**fasttime:** That would make the PR be a non-breaking change, I guess

**mdjermanovic:** Oh, I think it should still be a breaking change if the default will be v10
 * 👍 @nzakas

**mdjermanovic:** Because, after the change, it could produce configs that don't work with v9

**mdjermanovic:** Which isn't currently the case

**fasttime:** Makes sense 👍

**nzakas:** Sounds like we've agreed that:
- We don't want to freeze or deprecate `migrate-config` right now
- We'd like to maintain v9 output behind a `--target-version` option with `10` as the default and `9` as an option
- This PR is a breaking change
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item: https://github.com/eslint/markdown/pull/648

**nzakas:** > **TSC Summary**: This PR is seeking consensus on the current approach to mitigating type compatibility issues with ESLint v9.x for the Markdown, JSON, and CSS language plugins, as mentioned in [eslint/json#213](https://github.com/eslint/json/issues/213).
> 
> **TSC Question**: This PR includes only typing changes and no runtime behavior changes. Is the current change acceptable? If so, would it be fine to mark [eslint/json#213](https://github.com/eslint/json/issues/213) and this PR as accepted and move forward with JSON and CSS using this approach?

**fasttime:** Basically the PR widens the type of the rules' `create()` methods, so they're compatible with ESLint v9.

**nzakas:** Sorry, I'm not sure what that means exactly. Can you explain some more?

**nzakas:** I can't quite follow the thread on the PR

**fasttime:** One problem is that the type of a rule's context was changed in v10.

**fasttime:** So currently, the rule type in ESLint v10 is different from what it would be in ESLint v9, and that makes it difficult to create plugins that work with both ESLint v9 and v10.

**nzakas:** right

**fasttime:** The proposed solution by lumir consists in typing the context of each rule in the plugin with `unknown`, and making the return type `any`, which bypasses TypeScript checks.

**fasttime:** That should be fine I think as long as the `create()` method is only invoked by ESLint.

**fasttime:** (and not by TypeScript-aware tools)

**nzakas:** That's only in the built file, not in the source code?

**fasttime:** Yes

**nzakas:** I'm okay with that for now though I would like to be able to remove it at some point in the future, maybe after v11.

**nzakas:** I'm just not a fan of jumping through hoops to satisfy types on an ongoing basis. 🙂

**fasttime:** I was thinking the same. That should be removed at some point.

**nzakas:** @mdjermanovic thoughts?

**mdjermanovic:** I'm also okay with the solution

**nzakas:** Okay, we've agreed to use this approach for the time being. We'd like to remove it after v11.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/20590

**nzakas:** > **TSC Summary**: This issue is seeking consensus on exporting common glob patterns for certain languages, such as `**/*.{mjs,cjs,js,jsx,mts,cts,ts,tsx}` for JavaScript.
> 
> **TSC Question**: There is currently no definitive consensus on the design of the glob patterns, where to place them, or how to treat them across the language plugins. Should we seek consensus on this approach, or do we need an RFC for this issue?

**nzakas:** I'm not in favor of adding this to the core but I think the idea has merit as part of language plugins.

So `@eslint/js` could exports JS-related globs, `@eslint/markdown` could export Markdown-related globs, etc.

**nzakas:** My suggestion would be to submit an RFC for extending language plugins with this information.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed we don't want to add this to the core and we'll accept an RFC for extending language plugins with this info.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We have on TSC waiting issue:
https://github.com/eslint/eslint/issues/20946

**nzakas:** Looks like the ask here is to be able to use an environment variable to set the formatter name

**nzakas:** I had the same thought as @fasttime re: being able to achieve this already...I'm not sure why an environment variable is necessary.

**fasttime:** I don't feel strongly about this because the use case they show can be done by parameterizing the CLI command, but not opposed either

**nzakas:** I mean, you could also set up a small shell script that reads the environment variable and then runs ESLint, and update CI to use that instead of calling ESLint directly.

**mdjermanovic:** I was initially in favor, but since there's already another way (or ways) to achieve the same, I think it's fine to close the issue

**nzakas:** Okay, we've agreed not to accept this proposal because there are other ways of achieving the same thing.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, that's all we have flagged. Anything else anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing in particular.

**nzakas:** I just want to point out that we're currently down to $7,699.08/month in donations, which is the lowest we've been in a long time. I've reached out to some lapsed sponsors. I'm not sure what we can do at this point but just wanted to note this should levels continue to drop.
 * ☹️ @mdjermanovic, @fasttime

**nzakas:** Let's talk contributor pool:
https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-06-01-contributor-pool.md

**nzakas:** I should note the budget for this month is $741.50

**mdjermanovic:** Maybe $250 for each of the three contributors? Looks to me the effort was about the same
 * 👍 @nzakas, @fasttime

**nzakas:** That puts us at $750 🙂

**mdjermanovic:** Yeah, just a bit above to round up 🙂

**nzakas:** Heh ok

**nzakas:** I'll let them know

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** I think it would be just `eslint` this time. After the `eslint` release, I could release `@eslint/mcp` with updated `eslint` dependency
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's all for today. Thanks everyone (and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Take care 👋
