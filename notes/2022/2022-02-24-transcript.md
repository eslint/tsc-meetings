# 02/24/2022 ESLint TSC Meeting Transcript

**nzakas:** Hi 👋

**mdjermanovic:** Hi!

**nzakas:** Let's give @btmills a couple minutes to join
 * 👍 @mdjermanovic

**btmills:** Hi!

**nzakas:** Howdy!

**nzakas:** Looks like we are at full strength

**nzakas:** @btmills are you set for note taking?

**btmills:** yep!

**nzakas:** Thanks!

**nzakas:** I tagged a bunch of issues to discuss just this morning, so we'll go through them. As a reminder: if an issue isn't progressing in any meaningful way, please tag them for the TSC meeting so we can resolve them.

**nzakas:** First item: https://github.com/eslint/eslint/issues/15631

**nzakas:** > **TSC Summary:** This issue proposes adding a way for fine-grained disabling of inline directives on a per-rule basis. We currently have `noInlineConfig` that disables all inline configuration, but this request is for configuring based on rule name, so you could allow inline configuration of some rules but not others.
> 
> **TSC Question:** Do we want to support this idea and go to the next step of creating an RFC?

**nzakas:** I think the idea is interesting, I'm more concerned about the potential complexity than anything else.

**mdjermanovic:** I think this makes sense. There are some workarounds, but they're not ideal

**mdjermanovic:** I'd support this change

**nzakas:** I'm on board for an RFC so we can evaluate how complex such a change would be. Note that this would have to be a change in flat config, not eslintrc.

**btmills:** @mdjermanovic are you specifically supporting adding `forbid` as a configuration level?

**btmills:** I'm open to an RFC

**mdjermanovic:** Not specifically that solution, just any way to have the feature

**nzakas:** Okay, so it sounds like we're all on board that we'd like to see an RFC
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** I didn't think that much about the design

**nzakas:** (Please 👍 if you agree)

**nzakas:** Excellent

**nzakas:** Next item: https://github.com/eslint/eslint/issues/15586

**nzakas:** > **TSC Summary:** This issue requests that we deprecated `no-restricted-imports` in favor of a plugin rule. This rule doesn't currently exist in another plugin but `eslint-plugin-import` would be willing to take it if we would like to deprecate it. We have previously deprecated `no-restricted-modules` in favor of moving it into `eslint-plugin-node` as we removed CommonJS support in the core.
> 
> **TSC Question:** Do we want to deprecate `no-restricted-imports`?

**mdjermanovic:** There's no strong reason to deprecate that rule, so maybe we just shouldn't? 🙂

**nzakas:** Yeah, I don't think the rationale made sense, but I wanted to bring it up here because there is a universe where maybe we want to start offloading some core rules to plugins to lighten our maintenance load. 🙂

**mdjermanovic:** That's a good reason though

**nzakas:** It is, and that's why I wanted to discuss. Especially given how many requests we get for changes to this rule.

**mdjermanovic:** Yes, that's a rule that has many updates, there's even one already pending https://github.com/eslint/eslint/issues/15261

**btmills:** Some quick research: [4 merged PRs mentioning it](https://github.com/eslint/eslint/pulls?q=is%3Amerged+no-restricted-imports+) in the last year, ~double in 2yr

**mdjermanovic:** And another one pending, that seems reasonable https://github.com/eslint/eslint/issues/14274

**btmills:** We have a handful of other import-related rules as well. I'd say if we move one to a plugin, we should move them all

**nzakas:** Fair point

**nzakas:** Does anyone feel strongly either way?

**mdjermanovic:** Not strongly

**nzakas:** I myself don't feel very strongly in either direction -- good arguments both ways. We can also table this and reconsider again in the future.

**btmills:** Only strongly against moving just one rule. Perhaps table this to ask on the thread if `eslint-plugin-import` would be willing to add them all? (Assuming we'd be interested in moving all of them were they willing to take them)

**btmills:** But I don't feel strongly about either of the two extremes

**nzakas:** I'd say if no one feels strongly, then let's just close the issue. We can always revisit again in the future. I just don't think it's worth a lot of extra time digging into details at this point.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, we've decided not to deprecate no-restricted-imports
 * 👍 @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/15576

**nzakas:** > **TSC Summary:** This issue seeks to either remove `no-inner-declaration` from `eslint:recommended` or change the default behavior of `no-inner-declaration` based on how ES6+ works with inner declarations.
> 
> **TSC Question:** Do we want to make any change now? Do we want to make any changes in the next major release?

**mdjermanovic:** I think we should certainly make a change in the next major release. There's nothing particularly wrong with block scoped functions, so `eslint:recommended` should not disallow them

**mdjermanovic:** I'd prefer that we redesign the options so that the rule can have a different default behavior, and change defaults in the next major

**btmills:** Feels like changing the behavior in the next major would prevent users from nonstandard behavior while still allowing the portion that's safe

**nzakas:** It was only nonstandard prior to ES6 -- since then the behavior is standardized

**nzakas:** For most users this is effectively a stylistic preference at this point

**mdjermanovic:** In non-strict it is standardized, but has Annex B

**btmills:** The behavior suggested by @mdjermanovic at the end of https://github.com/eslint/eslint/issues/15576#issuecomment-1049823451 is what I was thinking

**nzakas:** This part?

**nzakas:** > I think there's a value in reporting block-level functions in:
> 
> *     non-strict code regardless of ecmaVersion, because they have a confusing legacy behavior.
>  *   ecmaVersion: 5 code regardless of strict, because it's either the same confusing legacy behavior or a SyntaxError in most ES5 engines.

**btmills:** yep

**nzakas:** We've typically tried not to have rules depend on ecmaVersion to define their behavior, mostly because that value can't be counted on, especially if a custom parser is used

**mdjermanovic:** That will become better with flat config?

**nzakas:** Better-ish. I still don't think it's a good idea to rely on ecmaVersion to determine how a rule should work.

**nzakas:** I'd much rather add an option to the rule like `legacy: true` to enable such behavior

**nzakas:** In any event, it seems like we agree that 1) we should add an option to change current behavior 2) change default in a major version, and 3) remove from "eslint:recommended" in a major version. Correct?
 * 👍 @btmills, @mdjermanovic

**btmills:** Grr, you're right, relying ecmaVersion implicitly could be tough. But a "I'm not guaranteed to run in newer engines, keep me safe" flag could work

**nzakas:** If so, we can discuss implementation details on the issue.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've decided to accept the issue and we can discuss implementation on the issue

**nzakas:** Those are the only issues I have tagged. Any other issues or PRs folks want to discuss?
 * 🦗 @btmills

**nzakas:** All right, then a quick update on the site redesign.

**nzakas:** The last major thing to complete on the marketing site is the homepage animation, and there's a pull request for that today.

**nzakas:** After that, we should go through the site and do spot-checks for anything that might be off. I already know the search isn't quite right, so I need to look into that, but everything else should be good-ish. Feel free to open issues/PRs for anything that you find that is broken or strange.

**nzakas:** The documentation site is basically done at this point. This one will be more complicated to roll out because we need to get everything checked in to the main eslint repo, which means we'll need a transitionary release where we do the heavy lifting to ensure the next release generates the new site and not the old one.

**nzakas:** I'll also need to coordinate with the cn.eslint.org folks to see how best to work on the Chinese site

**nzakas:** And the playground site shell is also done. Similarly, we will now need to implement that for real. If anyone is interested in taking a look at that, please feel free, otherwise I'll plan on looking at in the future.

**nzakas:** Sara will be rolling off at the end of next week

**btmills:** Great job PMing this. I'm excited to see it coming together

**nzakas:** Thanks, me too. Very different type of work but it has been fun playing product manager for this effort.

**nzakas:** Okay, let's do contributor pool for February!

**nzakas:** Our Discord folks: JackNapis and Kepeniukas
 * 👍 @btmills, @mdjermanovic

**nzakas:** Gatam-Arora24 for https://github.com/eslint/eslint/pull/15566
 * 👍 @btmills, @mdjermanovic

**btmills:** AkashaRojee for https://github.com/eslint/website/pull/921
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Yiwei-Ding for https://github.com/eslint/eslint/pull/15459 (it's from January, but it was merged after the meeting where we discussed contributions for January)
 * 👍 @nzakas, @btmills

**btmills:** codeworrior for https://github.com/eslint/espree/pull/532
 * 👍 @nzakas, @mdjermanovic

**btmills:** that's all from me

**mdjermanovic:** from me, too

**nzakas:** And me too

**nzakas:** I'm thinking $250 for Yiwei-Ding and $100 for others? (I feel like implementing an RFC should automatically be a higher amount.)
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I'll take the action item to email everyone.

**nzakas:** Let's talk about the release tomorrow

**mdjermanovic:** I can do the release tomorrow

**btmills:** ~~I'm available this weekend~~ thanks again @mdjermanovic

**mdjermanovic:** If this PR gets finished and everything looks good with the integration, I'll release `@eslint/eslintrc` too

**mdjermanovic:** https://github.com/eslint/eslint/pull/15616
 * 👍 @nzakas

**mdjermanovic:** Otherwise, I think it would be only `eslint` this time

**nzakas:** Sounds good. Thanks for handling that.

**nzakas:** All right, I think that's all we have for today. Thanks everyone. Stay safe and healthy!

**mdjermanovic:** Thanks!

**btmills:** 👋 thanks all!
