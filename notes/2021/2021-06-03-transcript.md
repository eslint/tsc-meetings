# 06/03/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** Let's give @btmills a few minutes to see if he'll join
 * 👍 @mdjermanovic

**btmills:** 👋

**nzakas:** Hey, there he is

**nzakas:** @btmills are you set for taking notes?

**btmills:** yep!

**nzakas:** Thank you, sir

**nzakas:** So it looks like we don't have any agenda items as far as issues go, so what I have on our plate is to 1) review v8.0.0, 2) decide on contributor payments for May, and 3) plan the release. Anything else people would like to discuss?

**btmills:** nothing else from me

**mdjermanovic:** nothing else from me, too

**nzakas:** Okay, well last time we had nothing to talk about we took the full hour, so who knows? 🙂

**nzakas:** To start, v8.0.0: https://github.com/eslint/eslint/projects/8

**mdjermanovic:** Ajv looks to me like a breaking change at the end, we should probably add it to the project

**nzakas:** I think there's a larger question of if we want to do the upgrade if it's going to be a breaking change?

**nzakas:** Do you have a sense for what will break? I'm just very nervous about breaking the ecosystem.

**mdjermanovic:** Some validations are more strict, and they cannot be turned off. We could add try-catch, though

**nzakas:** Are they more strict in that they are catching actual errors that weren't caught before?

**mdjermanovic:** Yes, errors in defined schemas

**mdjermanovic:** Like this one https://github.com/eslint/eslint/pull/13911#issuecomment-741926204

**btmills:** In that case, the issue in the schema was preventing it from providing the protection it was supposed to? That's a case that I'd lean toward improving

**nzakas:** Yeah, I'm definitely in favor of catching actual errors.

**mdjermanovic:** There is also another set of validations that can be turned off for end users, but not for plugin authors (if we want to keep `strictDefaults: true` validation, which is now bundled with a few other validations into the new option `strictSchema: true`)

**mdjermanovic:** There were basically two issues: 1. dropping schema v4 2. more validations

**nzakas:** Based on the PR, it looks like changes to rule schemas basically fall into:
1. Add type: object or type: array where they didn't exist previously
2. Remove additionalItems: false

**mdjermanovic:** dropping schema 4 should be resolved with the new package

**mdjermanovic:** Yes, that will be most common changes

**nzakas:** Okay, that all seems reasonable enough. Worst case we can also add/remove those items from within ESLint. We should be sure to check against some popular plugins when we do the first prerelease

**nzakas:** I'm 👍 for adding to v8.0.0

**mdjermanovic:** But, end users shouldn't notice that, only plugin authors will when `RuleTester` starts reporting errors

**btmills:** I agree. Plugin authors likely appreciate finding out that their schemas weren't actually working

**mdjermanovic:** I recall checking a few plugins a couple of months ago, and they all had at least some errors

**nzakas:** I'm sure.

**nzakas:** Okay, all in favor of including the Ajv upgrade in v8.0.0?
 * 👍 @btmills, @mdjermanovic

**nzakas:** It looks like we've agreed to add the Ajv upgrade to v8.0.0

**nzakas:** Hehe, it looks like it was already there

**btmills:** (I just added it)

**nzakas:** Ah, quick trigger. Nice job

**nzakas:** @mdjermanovic anything you need to discuss on any of the issues you are working on for v8.0.0?

**mdjermanovic:** I don't see any other possible problems at this moment

**btmills:** For the `exports` change, is the RFC ready for final commenting? The plan appears to have reluctant approval

**nzakas:** Let me pull it up real quick. Haven't been able to keep up with things given the craziness this past week.

**nzakas:** Yeah, it seems like the `use-at-your-own-risk` approach settled down a lot of the angst over the change.

**btmills:** Since that's the last thing that doesn't have an open PR, should the June 18th release be the first v8 alpha?
 * 👍 @mdjermanovic

**nzakas:** Before we can plan on an alpha, I'd really like to 1) freeze the feature set for v8.0.0 and 2) merge all breaking changes.

**nzakas:** And we also need to do a "what's coming in v8.0.0 blog post" as we discussed before.

**nzakas:** So are we comfortable freezing the feature set for v8.0.0 right now?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, so the features on the v8.0.0 board are the final ones. I'll work on drafting the blog post next.

**nzakas:** For the second part, let's see where we are at with the PRs at the next meeting. If we feel like we can merge them all, then I'm all for doing a prerelease. If not, we can hold off until they are ready. I just really want the first prerelease to have all of the breaking changes so we can get some good feedback -- doing just a handful doesn't give us a good holistic picture.

**mdjermanovic:** So basically we want to have all breaking PRs approved?

**nzakas:** That's what I'd like, yes

**mdjermanovic:** Makes sense to me

**btmills:** That should dramatically shorten the cycle compared to previous releases

**nzakas:** That's the goal 🙂

**btmills:** In that case, we should be able to skip straight to beta
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Related: I'm not 100% sure, but this seems ready? https://github.com/eslint/espree/pull/486

**btmills:** Looks like the 3 todos from the opening description have been resolved

**nzakas:** Well, if everyone can take a look, I'd like to get a beta of Espree released sometime next week to start trying it out.
 * 👍 @btmills, @mdjermanovic

**nzakas:** And if everyone could take another quick look at this: https://github.com/eslint/espree/pull/499

**nzakas:** Those are the last two breaking changes for Espree

**nzakas:** And it looks like, besides the `exports` RFC, everything else has a PR opened so 🎉

**mdjermanovic:** There are some concerns raised in https://github.com/eslint/eslint/pull/14622 regarding the new espree's  default `ecmaVersion`

**nzakas:** I think the change is overcomplicating the matter. The bottom line is that we can manually provide `ecmaVersion: 5` when `ecmaVersion` is missing to maintain the same behavior in ESLint.

**nzakas:** I need to look into the code a bit more, but I don't think there's a significant issue there.

**mdjermanovic:** There is a problem with configurations that have explicitly `"parser": "espree"`

**nzakas:** What's the problem?

**btmills:** The goal is to add support for `latest` while preserving the existing behavior everywhere else, correct? By my reading, `{}` and `{ parser: "espree" }` configs currently behave the same, but with this, one would use `latest`

**mdjermanovic:** It's described in the discussion on the PR

**mdjermanovic:** (something's wrong with the GitHub at the moment, I can't get the link to the discussion)

**btmills:** (@mdjermanovic do I have that straight?)

**mdjermanovic:** The new `ecmaVersion: "latest"` value should be okay when we release new `espree` (I think), the problem is with the new default value when `ecmaVersion` isn't specified

**nzakas:** I guess I'm having trouble seeing the problem

**nzakas:** right now, a missing ecmaVersion means 5

**nzakas:** for both `{}` and `{parser:espree}`, correct?

**mdjermanovic:** The problem is basically are we able to figure out does the user use `espree` or not

**nzakas:** Okay, let's take this back to the PR to follow up. We're getting short on time and I don't have a lot of energy to spare
 * 👍 @btmills, @mdjermanovic

**nzakas:** Random: @mdjermanovic both @btmills and I have approved this RFC: https://github.com/eslint/rfcs/pull/79. I'd like to get this merged, so can you take a look?

**mdjermanovic:** I'll take a look over the weekend for sure

**nzakas:** Thanks

**nzakas:** All right, nominations for paying contributors?

**nzakas:** JackNapis for sure
 * 👍 @btmills, @mdjermanovic

**btmills:** snitin315
 * 👍 @nzakas, @mdjermanovic

**nzakas:** 5 commits!

**nzakas:** stephenwade for the lodash stuff?
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** lexholden for https://github.com/eslint/eslint/pull/14580
 * 👍 @nzakas, @btmills

**mdjermanovic:** boutahlilsoufiane for https://github.com/eslint/eslint/pull/14238
 * 👍 @nzakas, @btmills

**nzakas:** Nice, a lot of angst around that 🙂

**mdjermanovic:** Yes, that was a long-awaited feature

**nzakas:** Those are some great contributions for sure

**nzakas:** My suggestion: $200 for snitin315 and stephenwade, $100 each for the rest?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, it is so!

**nzakas:** So the release for tomorrow, any takers?

**mdjermanovic:** I can tomorrow

**btmills:** Thanks!

**nzakas:** (Looks like jenkins is still up!)

**mdjermanovic:** (I won't be available for the next one)

**btmills:** Ooh that's a record!

**btmills:** I'll likely be able to do the next one

**nzakas:** All right, thanks everyone. Excited to get back to focusing on v8.0.0

**mdjermanovic:** Shall we release `eslintrc`, too?
 * 👍 @btmills

**mdjermanovic:** https://github.com/eslint/eslintrc/pull/32

**nzakas:** Yes, that's a good idea.

**mdjermanovic:** That would be a patch release for `eslintrc`, I think

**nzakas:** yes

**mdjermanovic:** okay, I'll release both `eslintrc` and `eslint`

**btmills:** 👋 take care

**mdjermanovic:** thanks! 👋

**nzakas:** Bye bye
