# 03/05/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi 👋

**nzakas:** Looks like it'll just be us today.

**nzakas:** Let me pull up the notes from last time.

**fasttime:** Yes, get better soon @mdjermanovic
 * ❤️ @nzakas

**nzakas:** The only followup from last time was me setting up a way to publish previous version in `eslint/rewrite`, which I did. https://github.com/eslint/rewrite/pull/393

**nzakas:** We should also talk a bit about this during this meeting.
 * 👍 @fasttime

**nzakas:** Let's start with statuses. That's the one specific thing I was working on aside from reviewing issues and PRs.

**fasttime:** I worked on the RFC for the `--base-path` option, apart from that also just reviewing issues and PRs

**nzakas:** Availability for the next two weeks: I should be back to normal hours of 0.5-1 hour each weekday now that I'm back home and no one's in the hospital. 😅

**fasttime:** I should be available 7-9 hours per week the next couple of weeks

**nzakas:** RFC Duty:
This week - @nzakas 
March 9 - @fasttime 
March 16 - @mdjermanovic
 * 👍 @fasttime

**nzakas:** We don't have anything flagged, so let's discuss updating `@eslint/config-array`.

**nzakas:** (Previously posted PR)

**nzakas:** Looking over the notes, there was concern that we can't release previous major versions...but we're still at 0.23.2, so I'm feeling a bit lost.

**fasttime:** It looks like ESLint v9.39.3 was using config-array v0.21.1: https://github.com/eslint/eslint/blob/v9.39.3/package.json#L111

**fasttime:** So if we want to patch it, we should release v0.21.2 I guess.

**fasttime:** The only change from v0.21.1 would be the minimatch update.

**nzakas:** Ah and because it's a zero major version it doesn't automatically pick up minor increments. Got it.

**fasttime:** Yes 🙂

**nzakas:** We should really bump to v1.x soon. 🙂
 * 👍 @fasttime

**fasttime:** But patch updates should be picked automatically. Nevertheless we could release a patch for ESLint v9 as well.

**nzakas:** Okay, so in v0.23.0 we switched from minimatch 3.x to 10.x.

**nzakas:** I wonder if ESLint v9 will still work with v0.23.x?

**fasttime:** I don't know, haven't tested that

**nzakas:** Although, we'd end up downloading two versions of minimatch in that case because ESLint itself also relies on it.

**nzakas:** And adding a new version could introduce some incompatibilities, so probably best not to do that.

**nzakas:** So we'd want `@eslint/config-array@0.21.2` with the upgraded minimatch.

**fasttime:** Yeah, we wanted to just patch minimatch because of the security vulnerability.

**nzakas:** Right.

**nzakas:** Okay, I can try doing that and if it works then we can do a patch release of ESLint v9.x tomorrow.

**fasttime:** Thanks!
 * 👍 @nzakas

**fasttime:** So we'd need a PR for config-array maintenance and one for ESLint v9, plus merging the PR to create maintenance releases.

**fasttime:** I'm not sure about `@eslint/eslintrc`

**nzakas:** right

**nzakas:** wrt to keeping branches -- I'd say we keep the branch around until v9.x is EOL, just in case we need another patch.
 * 👍 @fasttime

**fasttime:** Sounds good.

**nzakas:** Do you want to approve it and then I can merge it?
 * 👍 @fasttime

**fasttime:** `@eslint/eslintrc` for v9 still uses a version of minimatch that is flagged by security scanners: https://github.com/eslint/eslintrc/blob/v3.3.1/package.json#L78

**fasttime:** But we could just bump the `@eslint/eslintrc` dependency in ESLint v9 to the latest version I think.
 * 👍 @nzakas

**fasttime:** Yes, I will do after the meeting.
 * 👍 @nzakas

**nzakas:** Okay, anything else to discuss?

**fasttime:** Nothing in particular from my side

**nzakas:** Okay then let's talk contributor pool:
https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-03-01-contributor-pool.md

**nzakas:** I'm thinking:
sethamus $200, the others $100 each
 * 👍 @fasttime

**fasttime:** I was to suggest the same 😄

**nzakas:** Then we are agreed! I'll let them know.

**nzakas:** Now let's discuss the release tomorrow.

**fasttime:** I can do it

**nzakas:** Thanks!

**fasttime:** Many packages to release this time

**fasttime:** `eslint`, `eslint-config-eslint`, `@eslint/eslintrc`, plus the maintenance releases of `eslint` and `@eslint/config-array`

**nzakas:** Yup

**nzakas:** Exciting day! 😁

**fasttime:** Oh `eslint/js` too. I'll double-check check tomorrow to make sure we don't miss something

**fasttime:** Okay, I'm planning to do the release around the time of today's meeting. Do you think you can have the PRs ready by that time?

**nzakas:** The only one I was planning on was the `@eslint/config-array` patch release. Which others are you referring to?

**fasttime:** Ah, okay. Then I will prepare the PRs in ESLint targeting the v9.x-dev branch with the updated dependencies.
 * 🙏 @nzakas

**nzakas:** I figured since there will be multiple updates it's best to keep it all in one place

**fasttime:** Yes, that makes sense 🙂

**nzakas:** Okay, I think that's all for today. Thanks (and thanks @sam3k_ for the notes)!

**fasttime:** Thanks! 👋
