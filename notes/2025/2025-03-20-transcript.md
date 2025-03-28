# 03/20/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Pulling up the notes from last meeting...

**nzakas:** Looks like @mdjermanovic was planning on starting the basePath RFC?

**mdjermanovic:** Yes, I'm working on it.
 * 👍 @nzakas, @fasttime

**nzakas:** All right, then let's do statuses. I've been spending my time working on the CSS plugin and CSSTree together, updating `defineConfig`, `@eslint/migrate-config`, and `@eslint/create-config`.

**mdjermanovic:** I've been working on the basePath RFC, and finished circular autofix detection.

**fasttime:** I've been fixing a few bugs and doing maintenance tasks, did some work on types, and reviewed PRs.

**nzakas:** RFC Duty:
This week - @nzakas 
March 24 - @mdjermanovic 
March 31 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'd like to go over everyone's availability over the next couple of weeks.

**nzakas:** I'm expecting to be putting in 2-2.5 hours each work day during that period.

**mdjermanovic:** I'll still be at around 70-80% of my usual availability

**fasttime:** For me it will be like 7-9 hours a week.

**nzakas:** Thanks. I'd just ask please everyone be sure to check in on Discord once per weekday so you can be kept in the loop on high-priority things.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It doesn't look like we have any issues or PRs flagged. Are there any anyone would like to discuss? Anything that's been stalled that we can get moving again?

**mdjermanovic:** Nothing in particular that I'm aware of

**fasttime:** Maybe this issue? https://github.com/eslint/eslint/issues/19413

**nzakas:** It seemed like we were waiting for Arya to take a look?

**fasttime:** Yeah, then let's wait for him.

**nzakas:** Yeah, doesn't look like we were waiting on a decision there.

**nzakas:** This one: https://github.com/eslint/eslint/issues/19438

**nzakas:** I pinged TSC three weeks ago 🙂

**nzakas:** The ask is to pass in some information about the config file to parsers. I don't think this is a good idea.

**fasttime:** I don't have a strong opinion, just more tending to say no if the only purpose is to assist typescript-eslint to look up tsconfig.json.

**mdjermanovic:** I don't have a strong opinion either

**nzakas:** I have a strong opinion. 🙂 I just don't think we should keep expanding the scope of parser responsibilities. Parsers are explicitly not supposed to know anything about the config file. They're just supposed to get the arguments that are passed to them from ESLint no matter where they come from.

**mdjermanovic:** Then, we've agreed not to accept this request
 * 👍 @nzakas

**fasttime:** Yes, there's no consensus, so we can't accept it.

**nzakas:** Okay, we can close this issue as we're not moving forward with it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looking through other open issues to see if anything jumps out...

**nzakas:** https://github.com/eslint/eslint/issues/19521

**nzakas:** Looks like we're almost at resolution here, so let's just finish it off.

**nzakas:** The ask was to create a generic `RuleModule` definition to export from ESLint.

**nzakas:** My comment:
> We want to encourage people to use `RuleDefinition` from `@eslint/core` for any non-JS language rules.
> 
> For JavaScript, I'd much rather create a `JSRuleDefinition` similar to [`JSONRuleDefinition'](https://github.com/eslint/json/blob/d613ddec3c7fd608ad6f258d455c6e692f5c9bbf/src/types.ts#L127-L138) that is exported from the `eslint`package (although, eventually it will live in the`@eslint/js` package).
> 
> We should not be making any further changes to `RuleModule` or encourage its further use outside of ESLint itself.

**nzakas:** My proposal is that we create a generic `JSRuleDefinition` type that is exported from the `eslint` package to fulfill this need.

**fasttime:** I agree. I created a similar type in `@eslint/markdown` in https://github.com/eslint/markdown/pull/324

**fasttime:** I'd recommend that the generic `JSRuleDefinition` accepts a single type parameter - an object where each property is optional, so users can override only what they need.

**nzakas:** Let's discuss back on the issue because that's not how `JSONRuleDefinition` works, and it would be nice to have some consistency.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've decided to create and export a `JSRuleDefinition` type from the `eslint` package and will follow up on the issue to discuss implementation details.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Nothing else is jumping out at me at the moment.

**nzakas:** Let's talk about the release

**fasttime:** I can do the release tomorrow
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** I'd like to disable Prettier on certain files because I suspect the CI build will fail otherwise during the release.
 * 👍 @mdjermanovic

**nzakas:** Which files?

**mdjermanovic:** Would `.prettierignore` do the work?

**fasttime:** I'll have to check exactly which files are generated in Makefile.json. Mostly .json stuff in the docs folder.

**fasttime:** I was thinking to ignore the files in the Trunk config but just for Prettier: https://github.com/eslint/eslint/blob/main/.trunk/trunk.yaml#L67-L72
 * 👍 @mdjermanovic

**fasttime:** I'll have to see if that works.

**fasttime:** Oh, and we'll have to release also `@eslint/eslintrc`
 * 👍 @nzakas, @mdjermanovic

**nzakas:** We can also release `@eslint/create-config`, although I can just do that after the meeting.
 * 👍 @mdjermanovic

**fasttime:** Yes, just go ahead 🙂

**nzakas:** Okay, if there isn't anything else, then I think we're done. Thanks everyone (and thanks @Sam3k for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks! 👋
