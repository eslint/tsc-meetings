# 06/02/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** 👋

**nzakas:** @btmills can you take notes?

**btmills:** yep

**nzakas:** Thank you, sir

**nzakas:** We actually have some stuff tagged this week, so this is exciting 🙂

**nzakas:** First item: https://github.com/eslint/eslint-plugin-markdown/pull/203

**nzakas:** > **TSC summary**: `eslint-plugin-markdown` currently tests against [ESLint 6+ and Node 8+](https://github.com/eslint/eslint-plugin-markdown/blob/87c2b536fd80b15e134766d92b90048ae45cbe1f/.github/workflows/ci.yml#L32-L33). This pull request would drop support for end-of-life versions of Node.js. Normally, we drop support for EOL engines as part of regular major releases. However, we have no other breaking changes queued up for this package.
> 
> **TSC question**: Should we do a semver-major release just to drop support for EOL Node.js versions?

**nzakas:** Have we ever EOLed Node.js versions for the plugin before?

**btmills:** Yes, as part of the v2.0.0 release to support the then-new ESLint processor API: https://github.com/eslint/eslint-plugin-markdown/pull/137

**nzakas:** Then I'd say let's go ahead and drop the old Node.js versions. I can't imagine it being a problem.

**nzakas:** Plus would be nice to know which ES features we can use going forward

**btmills:** The PR currently only drops 8 and 10, but 12 is also EOL as of a month ago, so should I ask the author to remove 12 as well, or is that too soon?

**nzakas:** Maybe just bump up to 12.22 to match ESLint?

**btmills:** Works for me 👍

**mdjermanovic:** 👍

**nzakas:** Okay, we have decided to drop Node.js 8 and 10 and update to 12.22 for the markdown plugin.

**nzakas:** Next item: https://github.com/eslint/create-config/pull/31

**nzakas:** > TSC summary: Airbnb config enables some core rules that don't work well with TypeScript code. Those rules should be either replaced with [extension rules](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules), or disabled in favor of builtin tsc checks.
> 
> Question: do we want to remove Airbnb from the list of style guides when the answer to `"Does your project use TypeScript"` was Yes.

**mdjermanovic:** Since the Airbnb config does not support Typescript, I'd say yes
 * 👍 @nzakas, @btmills

**mdjermanovic:** If they  ever publish a config that supports TS, we can restore Airbnb in the list then
 * 👍 @nzakas, @btmills

**nzakas:** Sounds good.

**nzakas:** We have agreed to remove the Airbnb config from the list of options in `--init` when the project uses TypeScript.
 * 👍 @mdjermanovic

**nzakas:** Next:

**nzakas:** > Agenda Item: For the new docs site, I'd like to propose we change from `/docs/` to `/docs/latest/` for the most recent version of the documentation. This will allow us to more easily support multiple different documentation versions (like `/docs/v7.x/` and `/docs/head/`).
 * 👍 @btmills, @mdjermanovic

**btmills:** Will `/docs/` redirect to `/docs/latest/`?

**nzakas:** Yes

**nzakas:** Specifically, `docs/user-guide/`, etc. would redirect to `docs/latest/user-guide`

**mdjermanovic:** Hopefully, search engines will figure out that the version in `/docs/latest/` is the actual version that should appear in search results

**nzakas:** We can configure that with a robots.txt file

**mdjermanovic:** To noindex all other?

**nzakas:** Yup

**mdjermanovic:** Makes sense to me

**nzakas:** Great! So we have decided to move latest docs to `docs/latest`.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Any other topics anyone would like to introduce?

**mdjermanovic:** Nothing in particular

**nzakas:** Okay, then let's move on to contributor pool for May

**nzakas:** amareshsm for all of the contributions to the new website and playground
 * 👍 @btmills, @mdjermanovic

**nzakas:** https://github.com/eslint/new.eslint.org/pulls?q=is%3Apr+author%3Aamareshsm+is%3Aclosed

**nzakas:** harish-sethuraman for the same
 * 👍 @btmills, @mdjermanovic

**nzakas:** darahak for the French translation of the site
 * 👍 @btmills, @mdjermanovic

**nzakas:** Discord folks: JackNapis and Kepeniukas
 * 👍 @btmills, @mdjermanovic

**nzakas:** Seems like nschonni has done a fair bit of cleanup work: https://github.com/eslint/eslint/pulls?q=is%3Apr+is%3Aclosed+author%3Anschonni
 * 👍 @btmills, @mdjermanovic

**nzakas:** coderaiser for https://github.com/eslint/eslint/pull/15850?
 * 👍 @btmills, @mdjermanovic

**btmills:** that's all I'm seeing

**nzakas:** I missed Brack0 for French translation too
 * 👍 @btmills, @mdjermanovic

**nzakas:** So I'm thinking $300 for darahak, $200 for amareshsm, $100 for others?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll let everyone know. 🎉

**nzakas:** Let's talk the release tomorrow

**mdjermanovic:** I can tomorrow

**btmills:** thanks

**mdjermanovic:** We don't have many (if any) user-facing changes merged, so if someone can review my PRs that would be great

**mdjermanovic:** Two PRs, https://github.com/eslint/eslint/pull/15953 and https://github.com/eslint/eslint/pull/15951

**btmills:** I may have some time to look at those tomorrow morning

**mdjermanovic:** Thanks!

**nzakas:** I'll take a look too

**mdjermanovic:** Thanks!

**nzakas:** Any other topics before we call it a meeting?

**mdjermanovic:** Nothing from me

**btmills:** 🦗

**nzakas:** All right, thanks everyone. Have a nice weekend!

**btmills:** You too! 👋

**mdjermanovic:** Thanks! You too 👋
