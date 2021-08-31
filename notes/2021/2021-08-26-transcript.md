# 08/26/2021 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Hey there, looks like everyone is back from vacation

**btmills:** yep! I can take notes today

**nzakas:** Awesome, thanks

**nzakas:** Looks like some of the labels from last time didn't get cleaned up. Let me check what's going on here.

**btmills:** sorry, I probably missed that

**nzakas:** No worries, I got you

**nzakas:** Okay, so no issues labeled for today, let's jump right into v8

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** It looks like code path analysis for class fields is basically done: https://github.com/eslint/eslint/pull/14886

**nzakas:** I'll just merge @mdjermanovic's couple of suggestions.

**mdjermanovic:** Yes, it looks good

**nzakas:** By the way, thanks for taking the time to spell things out for me on this and other PRs. I've had a lot of brain fog the past couple of weeks so it's been harder to figure things out. I appreciate the patience.

**mdjermanovic:** Ah, those were the difficult ones

**nzakas:** Looks like we are making good progress on rule updates: https://github.com/eslint/eslint/issues/14857

**nzakas:** Seven rules left to update and about half of those already have PRs

**mdjermanovic:** Only a handful left, but I'd like to go once again through all rules to check if something needs to account for the new class fields scope and new code path analysis

**nzakas:** Fair enough

**nzakas:** @btmills any thoughts on the rules at this point?

**btmills:** First of all thanks y'all for cranking through those while I've been time constrained
 * 👍 @nzakas

**btmills:** I'm not opposed to one more check once we think we're done, but I don't think it's a big deal if we find out about a few more and update them in 8.1 or 8.2

**nzakas:** Agree

**mdjermanovic:** Agreed

**nzakas:** All right, so we did have a couple of unanticipated issues pop up with the beta

**nzakas:** First: https://github.com/eslint/eslint/issues/14960

**mdjermanovic:** 👍 for reverting, seems that the breaking impact outweighs benefits

**nzakas:** This is related to using line comments for directives in addition to block comments, which has caused a bunch of pain from old comments that are now magically directives when they were not previously.

**nzakas:** I'm also 👍 for reverting

**btmills:** yeah, I agree it's not worth it. 👍 to reverting

**nzakas:** Okay, we've decided to revert the change allowing line comment directives. We can revisit later if we want to, but I wouldn't be heartbroken if we just decided to leave it out.
 * 👍 @btmills, @mdjermanovic

**nzakas:** I also somehow missed that for the migration guide

**mdjermanovic:** The PR to revert is ready if anyone wants to take another look https://github.com/eslint/eslint/pull/14973

**nzakas:** I'll take a look after this

**nzakas:** Second: https://github.com/eslint/eslint/issues/14936

**nzakas:** It turns out people were using `SourceCodeFixer` to do some custom rule testing, so removing it from the public API broke them

**mdjermanovic:** I'm not sure if it should be a blocker for v8.0.0. Use case from the original issue (fisker's) uses `SourceCodeFixer` just to apply a suggestion

**mdjermanovic:** The other use case (lydell's), I'm not sure if it will be broken in v8.0.0 at all

**mdjermanovic:** (aside from the problem with `jest`, but that seems like a separate issue)

**nzakas:** Agree on both cases. I think the second case was really just a +1 to the request for custom assertions.

**nzakas:** I also think there's a bit of a language barrier here, as I've had a lot of trouble figuring out what the original request is doing and what would solve the problem.

**mdjermanovic:** Single fix is fairly simple, I left a question if that would work for them https://github.com/eslint/eslint/issues/14936#issuecomment-905377189

**mdjermanovic:** In my understanding, this is the only line where they're using `SourceCodeFixer`, and that could be replaced with a one-liner https://github.com/sindresorhus/eslint-plugin-unicorn/blob/d51a197067b1d09e72de0ff6388ff8a09ebd3742/test/utils/snapshot-rule-tester.mjs#L187

**nzakas:** Right.

**nzakas:** Okay, if it can be fixed by the user, we can just push it off to address later.

**mdjermanovic:** Applying a single fix isn't only internal logic, we have documented what should be done with the fix https://eslint.org/docs/developer-guide/nodejs-api#-editinfo-type

**nzakas:** Nice!

**mdjermanovic:** I was thinking the same, if they confirm that this solution works for them we could evaluate supporting snapshot testing later

**nzakas:** Sounds like a good plan to me

**btmills:** That makes sense to me. How do editor integrations apply suggestions? Do they re-implement the same logic that is documented there?

**mdjermanovic:** I believe yes, I couldn't find any use of SourceCodeFixer in vscode-eslint

**btmills:** The existence of a VSCode beta for v8 implies they weren't also using `SourceCodeFixer`

**mdjermanovic:** That doesn't mean that other integrations aren't using it, though 🙂 but we don't know that

**btmills:** I could see at some point exporting an API for editor integrations or snapshot testers to apply a suggestion that just wraps that algorithm, but I don't see a need to do it now

**nzakas:** They could be using `output` directly, since suggestions are applied one at a time

**mdjermanovic:** Applying _multiple_ fixes would be a different thing, we would probably want to export SourceCodeFixer in that case

**nzakas:** Okay, it seems like we're all in agreement that this isn't something to address in v8
 * 👍 @btmills

**btmills:** If `ESLint.outputFixes()` had a version that returned a string, they could use that

**nzakas:** So let's table this for now and we can revisit. Probably good to get an RFC if we want to go any further.

**mdjermanovic:** Ok, I'll ask fisker on the issue if the proposed solution works for them

**nzakas:** Sounds good

**nzakas:** Anything else related to v8 anyone would like to discuss?

**mdjermanovic:** I left a question about one rule that's in the list to update with class fields, but we can discuss that on the issue

**nzakas:** That's on the overall rule issue?

**mdjermanovic:** yes, https://github.com/eslint/eslint/issues/14857#issuecomment-906344741

**nzakas:** Got it, I'll take a look after this.
 * 👍 @mdjermanovic

**mdjermanovic:** thanks!

**nzakas:** Okay, nominations for contributor pool?

**nzakas:** ota-meshi updated the VS Code ESLint plugin, so even though that's not part of the ESLint project, I think it's a significant positive impact on the community as a whole.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We also have a trio of helpers in <#717416886685401108>: JackNapis, stephenwade, and kepeniukas.
 * 👍 @btmills, @mdjermanovic

**nzakas:** It looks like we haven't had a lot of outside contributions in the past month

**btmills:** I'm still looking at it as we brought in our most frequent contributors as committers

**nzakas:** Right

**mdjermanovic:** We had a PR for a new rule https://github.com/eslint/eslint/pull/14895

**mdjermanovic:** The rule hasn't been accepted yet though, so maybe for next month

**nzakas:** Oh yeah, if we can approve the rule (nudge @btmills) that would be a good one

**btmills:** accepted!
 * 👍 @mdjermanovic

**nzakas:** That's timvdlippe (for the record)
 * 👍 @btmills, @mdjermanovic

**nzakas:** I'm thinking $300 for ota-meshi and $100 for everyone else?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll send out the emails.

**nzakas:** We have another beta release tomorrow!

**mdjermanovic:** I can

**btmills:** thanks!

**mdjermanovic:** To clarify, that will be another beta, not rc?

**nzakas:** Correct. We do betas until all anticipated features are merged. At that point we switch to release candidates.

**mdjermanovic:** Thanks for the explanation!

**mdjermanovic:** Is there anything that should be updated in the Jenkins script?

**mdjermanovic:** like `npm install --force`

**nzakas:** I think @btmills fixed that piece already?

**btmills:** For the first beta, all I had to do was make sure I selected "betarelease" when kicking it off

**mdjermanovic:** It's Node 16 on Jenkins now?

**nzakas:** Yes

**mdjermanovic:** Would there be the same problem we had on CI

**btmills:** Ah, is that a change since the first beta?

**nzakas:** Nope, it's been that way since before the beta

**mdjermanovic:** Yes, but on the first beta release, it was still 7.32.0 in package.json

**mdjermanovic:** (before doing npm install)

**btmills:** oh... I only updated GitHub Actions CI that was failing, but you're right, we'll need to update the release script too

**mdjermanovic:** Only after updating package.json our CI started failing

**nzakas:** So would that be an update to `eslint-release` then?

**btmills:** Either `--force` or `--legacy-peer-deps` should work. I used the latter for GitHub Actions

**mdjermanovic:** I'm not sure. Maybe only here https://jenkins.eslint.org/job/Releases/job/eslint%20Release/configure

**nzakas:** Ah yup, that would be the spot. Easy enough

**nzakas:** `eslint-release` kicks in on the step after that

**btmills:** glad we don't have to patch `eslint-release` for this

**btmills:** Update on ecosystem contributions: After the last TSC meeting, I reached out to the eslint-plugin-jsdoc team, but they're not interested in joining Open Collective
 * 😕 @nzakas

**mdjermanovic:** There's `--force` in `ci.yml`?

**btmills:** you're right, I misremembered

**nzakas:** So with adding `--force`, the release should go as usual. Just be sure to select "betarelease" from the dropdown
 * 👍 @mdjermanovic

**mdjermanovic:** I just aded `--force` to the script

**nzakas:** Okay, anything else we need to cover?

**mdjermanovic:** Not that I'm aware of

**btmills:** nothing from me

**nzakas:** All right, let's call it. Thanks everyone!

**mdjermanovic:** Thanks!

**btmills:** 👋 take care!
