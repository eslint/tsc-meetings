# 05/04/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy 👋

**mdjermanovic:** Hi!

**nzakas:** Just pulling up the agenda issue

**nzakas:** It looks like we don't have any issues/PRs flagged for today. I added a couple items to the agenda issue, but before digging into those, are there any topics you'd like to discuss?

**mdjermanovic:** Just one question I added on an already merged PR, to double-check with you: https://github.com/eslint/eslint/pull/17142#issuecomment-1535164056

**nzakas:** For the notes, the question is whether the new `FlatESLint#findConfigFile()` method should throw an error. Right now it does but it's not clear that was the intention.

**nzakas:** I'm looking into the code, one sec.

**nzakas:** Yeah, so my intent for `FlatESLint#findConfigFile()` was to return `undefined` if the file wasn't found and not throw an error.

**mdjermanovic:** If it returns `undefined`, it would be the same as if `overrideConfig` was set to `true`.

**nzakas:** That would make this a bug we should fix

**nzakas:** Hmm, can you explain that case a bit more?

**mdjermanovic:** When the instance is configured to not use a config file (`overrideConfig: true` constructor option), `FlatESLint#findConfigFile()` returns `undefined`.

**nzakas:** Do you mean `overrideConfigFile: true`?

**mdjermanovic:** Yess, sorry

**nzakas:** It sounds like you're saying that is not desired?

**mdjermanovic:** So, in the case I mentioned in the comment, perhaps it should return something else so that these two cases are different

**mdjermanovic:** Not sure yet, but maybe those two cases should return different things

**nzakas:** In both cases there isn't a config file, so is there a downside to having both return `undefined`?

**mdjermanovic:** For example:
config file is not used -> return `undefined`
config file should be used, but it wasn;t found -> return something else?

**mdjermanovic:** One is a valid state, the other is error

**mdjermanovic:** Though, if the caller is aware of the options used to create the instance, perhaps it doesn't matter

**nzakas:** Yeah, I don't think it's important to make this distinction at the method level. The intent of the method is to return the config file being used. If a config file isn't going to be used, regardless of the reason, I think it makes sense to return `undefined`.

**mdjermanovic:** Okay, makes sense
 * 👍 @nzakas

**nzakas:** So we've agreed that the current behavior of `FlatESLint#findConfigFile()` is incorrect. It should not throw an error when it can't find an `eslint.config.js` file and instead should return `undefined`. Can you open an issue to track that?

**mdjermanovic:** Sure!

**nzakas:** Thanks.

**mdjermanovic:** Shall we release it as-is (the PR is already merged) if we don't manage to fix this until tomorrow

**nzakas:** I think it's safe to release as-is because we'll be removing a thrown error. I'll see if I can quickly create a patch after this, but if not, I think it's okay to go.

**mdjermanovic:** Agreed.
 * 👍 @nzakas

**nzakas:** Let's do a quick RFC check next.

**nzakas:** I think this one is ready to move to final comment, if you can take a look soon: https://github.com/eslint/rfcs/pull/104

**mdjermanovic:** I'll take a look over the weekend

**nzakas:** Thanks.

**nzakas:** For this one, do we want to move forward or no? https://github.com/eslint/rfcs/pull/102

**nzakas:** My vote is no, as I stated in my comments that I don't want to hack something in now and then realize it's the wrong thing when we do a larger redesign

**mdjermanovic:** I might be slightly in favor of the `process.env` solution, but since we don't have a consensus on it, then it seems it's time to close the RFC.

**mdjermanovic:** And it indeed seems too hacky

**nzakas:** Okay, so we've agreed to close this RFC. I'll take the action to write up the comment and close it.
 * 👍 @mdjermanovic

**nzakas:** And this one could also use another round of feedback: https://github.com/eslint/rfcs/pull/108

**nzakas:** As an FYI

**mdjermanovic:** Oh, I haven't reviewed that one yet. I'll try over the weekend
 * 👍 @nzakas

**nzakas:** Okay, items from the issue

**nzakas:** > Shall we add some additional fields to the triage board for Priority (P1-P5?) and Impact (Low-High)? This might make it easier to see where to focus our time.

**mdjermanovic:** Yes, sounds like a good idea to me

**nzakas:** Do those values seem correct? The idea is for Priority to reflect where we should spend our time when we don't know what to focus on and Impact is how big of a user-facing change it is.

**nzakas:** So something could be a P5 (we might do it one day) and be high impact, for example.

**mdjermanovic:** Yes, it's possible

**mdjermanovic:** Perhaps we could have Low-Medium-High impacts?

**nzakas:** Yeah, sorry, that was my intention of Low-High, that there would be a medium in there. 🙂

**mdjermanovic:** Sounds good to me 👍

**nzakas:** Okay, we've agreed to add those fields. I'll take the action item to add that and update our documentation for triaging.
 * 👍 @mdjermanovic

**nzakas:** Next item:

**nzakas:** > Do we want to add PRs to the triage board? If we rename the "Pull Request Opened" column to "Implementing", I think the rest of the process would work as-is.

**mdjermanovic:** I'm already adding PRs that don't address an issue so that they can go through Triaging -> Feedback needed etc. like issues

**mdjermanovic:** Did you mean only those PRs or all PRs, including those that address an issue?

**nzakas:** All PRs, to keep it simple

**mdjermanovic:** Seems redundant

**mdjermanovic:** What would be typical stages for a PR?

**nzakas:** My problem is I tend to miss PRs because I spend so much time in the Triage board. To get the PRs, I then need to switch over to Notifications. I figured if we just added all PRs to the Triage board, it would limit the page switches needed to keep track of everything.

**nzakas:** I think we use the same process as issues

**nzakas:** if there's already been discussion on a related issue, we can fast-forward the PR to Implementing

**nzakas:** I think we are kind of doing this already...when a PR is opened we always first check to see if there's a related issue

**mdjermanovic:** Ah, okay. Makes sense to have all items in one place

**mdjermanovic:** So, when a PR addresses an issue, that PR starts from the 'Implementing' stage?

**nzakas:** Correct

**nzakas:** Or rather, it will start in "Needs Triaging" and then get bumped to "Implementing"

**mdjermanovic:** (an *accepted issue)

**mdjermanovic:** Oh, yes, since the bot will add it first

**nzakas:** Right

**mdjermanovic:** Understood. Makes sense to me 👍

**nzakas:** Okay, we have agreed to add PRs to the Triage board. I'll take the action item to get that set up and update the docs too.
 * 👍 @mdjermanovic

**nzakas:** As a follow up from last time: we discussed spending 25% of our time on coding. Looking over my hours for April, I had 12.75 hours of total time and 4 hours of programming time, so it looks like I hit that 25% mark. (Significantly lower than usual due to moving.)

**nzakas:** Do you know how you did?

**mdjermanovic:** Yes, only 15% in April

**nzakas:** Close!

**mdjermanovic:** But it's an improvement from the last months

**nzakas:** I expect that was also partly my fault for not being around to help with reviewing stuff

**mdjermanovic:** I'll try to up that this month
 * 👍 @nzakas

**mdjermanovic:** No, I wasn't here for some time this month

**nzakas:** Ah okay. Well good to keep track as we move forward anyway.

**nzakas:** In other availability news, I will likely be offline most of the week of May 15 as I'm arriving in MA and not sure what chaos awaits yet.
 * 👍 @mdjermanovic

**nzakas:** Are you expecting your usual availability in May?

**mdjermanovic:** In May yes. In June as well. But I'll be less available from around mid-July to mid-August

**nzakas:** Summer holiday?

**mdjermanovic:** Yes, very long holiday 🙂

**nzakas:** Nice!

**mdjermanovic:** I don't know the exact dates yet

**nzakas:** No worries, we're still plenty of weeks away.

**nzakas:** I was looking at contributor pool but it appears we didn't have anything flagged for April?

**mdjermanovic:** I think I forgot to flag this one: https://github.com/eslint/eslint-visitor-keys/pull/47

**nzakas:** Ah nice. What are you thinking for amount?

**mdjermanovic:** $100?

**nzakas:** Sounds good to me. I'll let him know.

**nzakas:** Let's talk the release.

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**nzakas:** It looks like you're setting up release-please in a couple other repos now

**mdjermanovic:** Yes, I tried to set up those that are going to be released tomorrow 🙂

**nzakas:** Nice, I'll review those after this meeting.
 * 👍 @mdjermanovic

**mdjermanovic:** `eslint-visitor-keys`, then `espree` (depends on `eslint-visitor-keys`), then `@eslint/eslintrc` (depends on `espree`), then `eslint` end `@eslint/js`
 * 👍 @nzakas

**mdjermanovic:** Please check this one too: https://github.com/eslint/espree/pull/573

**nzakas:** ah interesting, will do

**mdjermanovic:** And these are the two new ones: https://github.com/eslint/eslint-visitor-keys/pull/48 and https://github.com/eslint/eslintrc/pull/111

**nzakas:** Yup, got those open now

**nzakas:** All right, I think that's it for today. Thanks!

**mdjermanovic:** Thanks! 👋

**nzakas:** (And thanks @Sam3k for the notes)

**Sam3k:** And thanks Sam3k 0667 for the notes
