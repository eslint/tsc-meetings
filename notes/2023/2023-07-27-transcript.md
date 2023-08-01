# 07/27/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Are you enjoying you trip?

**mdjermanovic:** Very much 🙂

**nzakas:** Awesome! That's what summer is for.

**nzakas:** So it looks like we don't have any issues or PRs flagged for today. Are there any topics you'd like to discuss? (Understanding that you're still traveling and probably not keeping up with everything.)

**mdjermanovic:** Hm, I think I don't have anything in particular

**mdjermanovic:** Looks like this one should be closed? https://github.com/eslint/eslint/pull/17322

**mdjermanovic:** As we all agree that the proposed checks don't belong to this rule

**nzakas:** Sounds good, we can close it.

**nzakas:** Not sure why I didn't initially but we can do it now.

**nzakas:** When you have a chunk of time for reviews, please take a look at this: https://github.com/eslint/eslint/pull/17351

**mdjermanovic:** I was planning to review that one for this release, but didn't manage to. I'm not sure if I'll be able tomorrow but will take a look as soon as possible

**nzakas:** No rush. I'd rather we take our time with big changes anyway.
 * 👍 @mdjermanovic

**mdjermanovic:** Yes, that's a big change, I wanted to allocate more time for the review.

**nzakas:** To review some other things that are going on:

**nzakas:** 1) I submitted a bunch of pull requests to start adding PRs to the triage board when they come in. We mentioned that a while back and I kind of forgot to do it. 🙂
 * 👍 @mdjermanovic

**nzakas:** 2) Because we've finished with the new  `SourceCode` methods, we're in a good spot to start v9 planning. I set up a new v9 board and team members should feel free to add issues and PRs to the "Needs Discussion" column so we can track what we'd like to get in. When you're back from your travels we can go through those and see which ones we want to include.
 * 👍 @mdjermanovic

**nzakas:** 3) We've merged PRs for all of our published packages that use `release-please` to generate provenance when they're released. That excludes the packages in the `eslint` repo because we're still using Jenkins for those and also there is zero documentation on how to generate provenance outside of GitHub Actions. 🤷
 * 👍 @mdjermanovic

**nzakas:** Let's see, we're at July 27...should we do contributor pool?

**mdjermanovic:** Sounds good to me

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-07-01..2023-08-01

**nzakas:** Wow ota-meshi was busy

**mdjermanovic:** Yes, a lot of work on the new syntax

**nzakas:** So what maybe $100 per PR, $700 total?
 * 👍 @mdjermanovic

**mdjermanovic:** Including the update in `regexpp` dependency

**nzakas:** Or maybe make it in even $1000 considering the regexpp changes too?

**nzakas:** He basically heavy lifted the entire feature into ESLint
 * 👍 @mdjermanovic

**mdjermanovic:** Actually, regexpp is under eslint-community so that can be invoiced sepearately

**mdjermanovic:** But I agree with $1000

**nzakas:** Ah good point, I'll remind him of that too.

**nzakas:** Tanujkanti4441 also had a couple of PRs..$200?
 * 👍 @mdjermanovic

**mdjermanovic:** He implemented the new syntax by himself (acorn, espree, regexpp, eslint)
 * 😅 @nzakas

**nzakas:** matwilko had three, two of which were docs change, so also $200?
 * 👍 @mdjermanovic

**nzakas:** And $100 for clshortfuse?
 * 👍 @mdjermanovic

**nzakas:** And I think that's everyone

**mdjermanovic:** I also think that's all

**nzakas:** Okay, let's talk about the release, I'll handle it tomorrow.

**mdjermanovic:** Thanks!

**nzakas:** And I think I can do a release of everything to get the provenance changes in.

**mdjermanovic:** Sounds good to me

**mdjermanovic:** Just a reminder, we usually update `@eslint/js` dependency in eslint's package.json

**nzakas:** Right. I actually followed your postings in <#688770853588172860> to make sure I did things in the same order

**mdjermanovic:** That's normally not very important, but this time we actually have a change in `@eslint/js` (a rule was removed from `eslint:all`)

**nzakas:** Ah right! I'll make a note of that.

**nzakas:** Maybe I'll also update the GitHub bot script to add that to the checklist of the release issues from now on

**mdjermanovic:** This line: https://github.com/eslint/eslint/blob/ee68d1d9630892d99ae0d8dabe2f9f8d3b1338be/package.json#L66C6-L66C16
 * 👍 @nzakas

**mdjermanovic:** The last two  PR's for the `v` flag are in solid shape. If the authors don't manage to address the reviews in time for the release, I'd be fine with merging them to complete the feature, and addressing reviews in follow-ups.
 * 👍 @nzakas

**nzakas:** Sounds good

**nzakas:** I'll hold off on releasing Espree because it's just the chore for adding PRs to the triage project. Doesn't seem worth a version bump for something that has no user-facing impact.

**mdjermanovic:** Agreed, no need to release `espree` this week
 * 👍 @nzakas

**mdjermanovic:** Oh, I forgot this. Can you also release `eslint-config-eslint`?

**mdjermanovic:** Major version

**mdjermanovic:** It doesn't need to be tomorrow, anytime.

**nzakas:** So I'll release `eslint-visitor-keys`, `eslint-scope`, `generator-eslint`, `@eslint/eslintrc`, `@eslint/create-config`, `eslint-transforms`, `eslint-plugin-markdown`, `@eslint/js`, `eslint-config-eslint`, and `eslint`.
 * 👍 @mdjermanovic

**nzakas:** And update the version numbers in `eslint`'s package.json for `eslint-visitor-keys`, `eslint-scope`, `@eslint/eslintrc`, `@eslint/create-config`, `@eslint/js`, and `eslint-config-eslint`.

**mdjermanovic:** `eslint-visitor-keys`, `eslint-scope`, `@eslint/eslintrc`,  and `@eslint/js`

**mdjermanovic:** `@eslint/create-config` is not a dependency. `eslint-config-eslint` is referenced by `file:packages/eslint-config-eslint`.

**nzakas:** Ah gotcha

**mdjermanovic:** A lot of packages to release 🙂

**nzakas:** And you usually do those in a PR that you merge yourself, correct?

**nzakas:** Thankfully it's all push-button now except for the main repo

**mdjermanovic:** Yes

**nzakas:** All right, I've got my plan and documented it in the issue so I don't forget

**mdjermanovic:** Looks good to me

**nzakas:** Okay, I think that's all we have for today. Thanks for stopping by during your travels.

**mdjermanovic:** Thanks 👋
