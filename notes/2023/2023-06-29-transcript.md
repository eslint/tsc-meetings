# 06/29/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy! Apologies for being late.

**mdjermanovic:** No problem

**nzakas:** And happy tenth birthday to ESLint. 😄 🎉
 * 🎉 @platinumazure, @sam3k_, @bmish, @kecrily, @mdjermanovic, @fasttime

**nzakas:** (for the record)

**nzakas:** All right, looks like we don't have any issues labeled for today but I did add a couple of agenda items.

**nzakas:** > Agenda item: Let's see where we are on the integration with outside plugins/configs listed on this issue: [eslint/eslint#13481](https://github.com/eslint/eslint/issues/13481)

**nzakas:** On my end, I've opened PRs for each of the projects. None have been merged yet.

**mdjermanovic:** `eslint-plugin-n` now provides flat config exports, and the repo is using `eslint.config.js` for its own linting, so that task is done I think.
 * 🎉 @nzakas

**nzakas:** For `typescript-eslint`, `eslint-config-standard`, and `eslint-plugin-vue` the PRs are up and in different states.

**nzakas:** `typescript-eslint` needed to wait for Nx to get updated to use flat config

**mdjermanovic:** `eslint-plugin-react` also provides flat config exports. The repo is still using `.eslintrc`. Since the config extends `airbnb-base` config, I was thinking that it might make more sense to wait for the flat `airbnb-base` config before switching that repo to `eslint.config.js`. What do you think?

**nzakas:** Looking...

**mdjermanovic:** A question about `typescript-eslint` and `eslint-plugin-vue`. The PRs are switching to `eslint.config.js` for linting their repos. Will there be separate PRs for exporting plugin flat configs?

**nzakas:** Yes
 * 👍 @mdjermanovic

**nzakas:** Trying to do it in steps to catch issues early before releasing into the ecosystem. Plus, I'm not sure of the release cadences of these packages so didn't want to merge in potentially breaking changes with non-breaking ones.

**nzakas:** `eslint-config-standard` is all in one because it exports the same config that it uses

**nzakas:** For `eslint-plugin-react`, I think there is still value in converting the repo over to use `eslint.config.js` even if `airbnb-base` isn't converted yet. Mixing and matching old and new style configs is a good exercise to make sure things are working correctly.

**mdjermanovic:** Okay, I'll submit a PR there
 * 👍 @nzakas

**mdjermanovic:** Semi-relevant, VS Code eslint extension now supports `eslint.config.js` with `"eslint.experimental.useFlatConfig": true` in settings.
 * 🎉 @nzakas

**mdjermanovic:** `eslint-plugin-import` has an accepted issue for providing flat config exports: https://github.com/import-js/eslint-plugin-import/issues/2556. There seem to be problems with some rules. I'll take a look next week and possibly submit a PR.

**nzakas:** Sounds good.

**mdjermanovic:** `eslint-config-airbnb` I'm not sure what would be the better strategy: switching the main export to flat config (breaking change, it's questionable at which point that could be released) or providing an additional export for the flat config (e.g., `require("eslint-config-airbnb/config")`). I can start a discussion about that in https://github.com/airbnb/javascript/issues/2699.

**nzakas:** That sounds like a good plan. I'm guessing they'll want to do a separate export for a while at least, but good to check.

**nzakas:** Still waiting to hear back from `eslint-config-standard` about what they want to do regarding that, although, they also don't make changes frequently.

**mdjermanovic:** Yes, I'm guessing the same.

**nzakas:** I think "Switch ESLint config to load external configs/plugins without FlatCompat" is actually done now that we merged https://github.com/eslint/eslint/pull/17247

**mdjermanovic:** Yes, I think we can check off that task

**nzakas:** Done!

**nzakas:** Anything else on the flat config compatibility tasks?

**mdjermanovic:** Nothing in particular from me, I think we went through all Phase 3 tasks

**nzakas:** Yup. I think the only thing we can start doing in phase 4 is the blog post to encourage people to start switching over and explain the rollout plan.
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** At a higher level, I'd like to get phase 2 of the language plugins tasks completed before we release ESLint v9 (with flat config as the default). I'm hopeful I'll be able to do that in July.
 * 👍 @mdjermanovic

**nzakas:** All right, let's move on to the next item.

**nzakas:** > Agenda item: Let's discuss where we are with the release-please rollout.

**nzakas:** Are all repos aside from eslint/eslint now switched over?

**mdjermanovic:** The following 8 repositories have the release-please workflow set up: `eslintrc`, `espree`, `create-config`, `eslint-visitor-keys`, `generator-eslint`, `eslint-scope`, `eslint-transforms`, `eslint-plugin-markdown`.

**mdjermanovic:** (the first 5 in the list already have at least one successful release using release-please).

**nzakas:** Nice

**mdjermanovic:** For `eslint-release` it probably makes most sense to keep using itself for releases 🙂

**nzakas:** Heh yes, agreed.

**mdjermanovic:** And I think those are all repos we have that contain published packages

**nzakas:** Yup, just double-checked. Nice work.

**nzakas:** Are the corresponding Jenkins jobs deleted now?

**mdjermanovic:** Hm, no. I was thinking to keep them as a backup for now, until we eventually switch eslint/eslint and drop Jenkins entirely. What do you think?

**mdjermanovic:** (by eslint/eslint I meant rewrite)

**nzakas:** Maybe move them into the Obsolete Jobs folder so we (me) don't use them by mistake?
 * 👍 @mdjermanovic

**mdjermanovic:** Sounds like a good plan.

**nzakas:** Can you take that action item?

**mdjermanovic:** Yes.

**nzakas:** Thanks

**nzakas:** All right, anything else on the releases?

**nzakas:** (As opposed to the release :))

**mdjermanovic:** Nothing in particular from me.

**nzakas:** Okay, let's take a look at contributor pool for June

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-06-01..2023-07-01

**nzakas:** Any of these particularly large so as to give them more than $100?

**mdjermanovic:** I think ota-meshi as he also worked on the related acorn  PR

**nzakas:** Oh yeah. So $250 for that?
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** Okay, and $100 for the others. I'll take the action item to contact them.
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** Okay, now we can talk about the release. 🙂

**mdjermanovic:** I can tomorrow

**mdjermanovic:** If you agree, I'd release `espree` with the new syntax support (regex `v` flag) so that it will be easier to work on rules..

**nzakas:** Yup, makes sense to me.

**mdjermanovic:** `@eslint/eslintrc` also had an update. And of course `@eslint/js` and `eslint`.

**nzakas:** and `eslint-config-eslint`?

**mdjermanovic:** Yes, I can release `eslint-config-eslint` too.
 * 👍 @nzakas

**nzakas:** To get the flat config version out there

**mdjermanovic:** We could then update other repos to use flat config
 * 👍 @nzakas

**nzakas:** So you're going to be away July 11 - August 18, meaning you'll miss the next three TSC meetings and releases?

**mdjermanovic:** I could be able to attend meetings, I'll let you know for each

**nzakas:** Sounds good

**mdjermanovic:** As for releases, less likely

**nzakas:** Understood. That's why I wanted to see where we are so I don't mess up releases while you're away. 😄

**mdjermanovic:** I might be able to do some of the releases, but more likely that I won't

**nzakas:** I'll plan on doing them all and if you get bored on holiday and really feel like you'd like to do a release, you can always let me know
 * 👍 @mdjermanovic

**mdjermanovic:** Deal

**nzakas:** All right, I think that's it for today unless you have any other topics?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Okay, then I think we're done. Enjoy your time off. (And thanks @Sam3k for the notes)

**mdjermanovic:** Thanks 👋
