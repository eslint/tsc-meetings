# 02/19/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Looking up last meeting's notes

**nzakas:** Nothing to follow up on since it was mostly v10 planning

**nzakas:** Let's start with statuses.

I spent some time writing up the AI usage policy and investigating what it would take to convert eslint.org to use Astro.

**mdjermanovic:** I was mostly reviewing PRs and triaging issues.

**fasttime:** I was also mostly busy reviewing issues and PRs, and I started preparing and RFC for the `--base-path` option

**nzakas:** All right, let's talk availability the next couple of weeks.

For me, it's a bit up in the air. My mom is in the hospital so a lot depends on what happens with her. My aim will be 0.5 hours per weekday but no guarantees at this point.

**mdjermanovic:** I expect to be available 1-1.5h each day.

**fasttime:** I will be available 7-9 hours per week I think.

**nzakas:** RFC Duty:
This week - @fasttime 
Feb 23 - @mdjermanovic 
March 2  - @nzakas
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** I'm not sure if the order is right

**nzakas:** oops I did swap us

**mdjermanovic:** But I could take next week

**nzakas:** Yes if you could I'd appreciate it given I'm not sure of my availability
 * 👍 @mdjermanovic

**nzakas:** My brain is a little fried right now 😅

**mdjermanovic:** Then agreed on the duty order
 * 🙏 @nzakas

**nzakas:** Okay, we have some issues tagged for today.

**nzakas:** https://github.com/eslint/eslint/issues/20508

**nzakas:** Basically, Ajv has a new CVE released and as a result, ESLint is being flagged by security tooling.

**nzakas:** The request is to upgrade Ajv

**nzakas:** Or otherwise mitigate the security warning even though it's not exploitable in ESLint. Sigh.

**nzakas:** I started a Copilot session to see if it could figure out how to upgrade Ajv without breaking the ecosystem.

**mdjermanovic:** I think there's work in progress to backport the fix to Ajv v6: https://github.com/ajv-validator/ajv/pull/2590

**nzakas:** I'm not sure that would address the issue if it's opt-in
 * 🤷 @fasttime

**mdjermanovic:** If that would be the solution, then yes it probably wouldn't unflag security warnings

**nzakas:** If Copilot can figure it out, then I think it's worth just upgrading. If it can't, then we may be better off forking Ajv in the short-term and looking for a replacement.

**mdjermanovic:** If we are going to attempt to update to Ajv v8, it might be worth checking what were the problems with the previous attempt: https://github.com/eslint/eslint/pull/13911

**mdjermanovic:** The previous attempt was also using `ajv-draft-04` package which might be useful for the new attempt.

**nzakas:** I'm happy to let Copilot try to figure it out :0

**nzakas:** https://github.com/eslint/eslint/pull/20523

**mdjermanovic:** Okay, we can try it out when it's ready
 * 👍 @fasttime

**nzakas:** Looks like it's ready, so please take a look after the meeting.

**nzakas:** Hopefully the number of plugins we're using in the repo will make a good smoke test.

**mdjermanovic:** I can take a look but I don't think I'll be able to check everything properly for tomorrow's release

**nzakas:** That's okay, I don't think it's critical to release tomorrow.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** If possible, it would be good to release on Monday or Tuesday next week...but also okay if we don't.

**mdjermanovic:** Assuming we update Ajv to v8 in ESLint v10, what shall we do with ESLint v9.x?

**nzakas:** If we are confident enough to upgrade Ajv in ESLint v10, then it seems reasonable to backport to v9 as well?

**mdjermanovic:** Sounds good to me. We could try at least.

**nzakas:** Okay, to summarize our decision:

- We will see if Copilot can figure out how to properly upgrade Ajv to v8.
- If it can, we will release as early as next week and backport to v9.
- If it can't, we can consider either waiting for an Ajv v6 fix or forking Ajv ourselves.

**mdjermanovic:** Forking Ajv would mean we'd fix the problem in our fork?

**nzakas:** Yes

**fasttime:** I think yes, we could remove the RegExp constructor to make security scanners happy
 * 👍 @nzakas

**mdjermanovic:** That sounds good, but since there's an attempt to fix the problem in Ajv 6 directly, I'd expect it there, otherwise it could mean the fix isn't possible in Ajv 6.

**nzakas:** I'd say let's cross that bridge if we come to it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/20518

**nzakas:** There's also a new CVE out for minimatch.

**mdjermanovic:** I believe we've already updated package.json files for ESLint v10.x.
 * 👀 @nzakas

**nzakas:** It looks like the fix is being backported to the version v9 is using: https://github.com/isaacs/minimatch/issues/275#issuecomment-3929312587

**mdjermanovic:** https://github.com/eslint/eslint/pull/20519 and https://github.com/eslint/rewrite/pull/376

**mdjermanovic:** Yes, it looks like the problem will be fixed in minimatch v3 as well

**nzakas:** Okay, so then we'll just wait for minimatch v3 to be updated and then bump ESLint v9

**mdjermanovic:** Then we could update package.json for `eslint` and `@eslint/eslintrc`. But the problem would be `@eslint/config-array` as we currently don't have infrastructure to release updates for previous major versions

**nzakas:** Hmmm yeah...I think it's not too hard to set something up for that. I can take a look. Worst case we can do it manually.

**fasttime:** Yes, it would be good to have the ability to release non-latest versions.

**mdjermanovic:** Last time we did a manual publish, I remember we had complaints that it raises alerts when a package that was previously published with provenance is now published without

**nzakas:** Well, it is a "pick your poison" situation 🙂

**mdjermanovic:** Perhaps people can just upgrade in their lockfiles?

**mdjermanovic:** The new 3.x version would be compatible, and in range

**nzakas:** I don't think asking everyone to edit their lock files is a good solution.

**nzakas:** Can we use `overrides` in `eslint`'s `package.json`?

**mdjermanovic:** I don't think that works when the package is published

**nzakas:** Ah

**mdjermanovic:** Works locally

**nzakas:** Well, let me take a look at setting up a way to do it in the repo
 * 👍 @mdjermanovic, @fasttime

**fasttime:** That would be useful also in the future, if we need to patch other packages some day
 * 👍 @mdjermanovic

**mdjermanovic:** Definitely useful

**nzakas:** Yeah...tricky because it's a monorepo so we'd need a different branch for each package, but it's doable.

**nzakas:** Okay, we've agreed to upgrade v9 when the backported minimatch is ready. I'll take a look at adding infra for publishing a previous major release line of `@eslint/config-array`
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/19920

**nzakas:** > **TSC Summary:** ESLint recently had to fix a regression in the v9.x line related to TypeScript compatibility ([#20495](https://github.com/eslint/eslint/issues/20495)). To reduce the risk of similar issues during the v10.x cycle, it would be helpful to define a minimum supported TypeScript version for `eslint` and for the dependencies used in type definitions.
> 
> **TSC Question:** Should we set the minimum supported TypeScript version to 5.3, as proposed in the current issue?
> 
> If we decide not to accept this suggestion, other sensible alternatives include:
>     * TypeScript >= 5.0: The earliest version that happens to be compatible with the types in ESLint v10.0.0.
>    * TypeScript >= 5.9: TypeScript 5.9.3 was the latest version available when ESLint v10.0.0 was released. Most probably we don't want to drop compatibility in a minor release.

**fasttime:** That would be basically adding a note to the docs and adding tests for the baseline TS version, possibly also in other packages `@eslint/core`, `@eslint/plugin-kit`, etc.

**nzakas:** So we'd be saying that ESLint v10 and all of its immediate dependencies would share the same TypeScript support level (kind of like Node.js)?

**fasttime:** Well, at least the dependencies we use in the types, yes.

**nzakas:** Makes sense to me. I'm fine with v5.3 as the starting point. 👍

**mdjermanovic:** Sounds good to me

**fasttime:** I'm fine, too 👍

**nzakas:** Okay, we've agreed to set the minimum support TypeScript version fo ESLint v10 to TypeScript v5.3
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics before we discuss the release?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing else from me.

**nzakas:** Great, then let's discuss the release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks 🙏

**mdjermanovic:** Shall we release v9.x? There was a bug fix merged.
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Okay, then for v9.x, we'll have `@eslint/js` v9.39.3 and `eslint` v9.39.3 released tomorrow.

**mdjermanovic:** As for v10.x, we could also release eslint/js and eslint/rewrite packages?

**nzakas:** Sorry I have to drop off now. Thanks everyone!
 * 👍 @mdjermanovic, @fasttime

**fasttime:** what changed in `eslint/js`?

**mdjermanovic:** Ah, I meant this: https://github.com/eslint/js/pull/728

**mdjermanovic:** eslint/js monorepo packages

**fasttime:** Ah, I see. Sounds good.

**mdjermanovic:** Then, for v10.x, we'll have eslint/js monorepo packages, eslint/rewrite monorepo packages, and `eslint` v10.0.1 released tomorrow.
 * 👍 @fasttime

**mdjermanovic:** Okay, looks like we got everything for the tomorrow's release.

**fasttime:** I think so

**mdjermanovic:** Anything else you'd like to discuss before we close?

**fasttime:** Nothing else from me today.

**mdjermanovic:** Nothing else from me as well. Thanks 👋

**fasttime:** Thanks! Bye 👋
