# 04/07/2022 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** Let's give @btmills a minute to join

**btmills:** 👋

**nzakas:** Howdy! Let's get started. @btmills can you take notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** First item: https://github.com/eslint/espree/issues/542

**nzakas:** > **TSC Summary:** This issue proposes exporting the internal TokenTranslator class that we use to translate Acorn tokens into Espree tokens.
> 
> **TSC Question:** Do we want to export this class?

**mdjermanovic:** It's an internal utility, so it doesn't look like something that should be a part of the public API. Even the fact that Espree uses Acorn isn't supposed to be observable from the API.

**btmills:** Feels like not part of ESLint's core API. What if we extracted it to a separate module?

**mdjermanovic:** Or they can just copy & paste the code 🙂

**nzakas:** If we were to expose it, a separate module would be the way to go, but I don't feel like it's worth the overhead.
 * 👍 @btmills

**btmills:** I'd prefer copy & paste or separate module to exporting

**btmills:** copy & paste works for me
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we've decided not to export TokenTranslator from Espree.
 * 👍 @mdjermanovic

**nzakas:** That was the only issue on the agenda. Does anyone want to discuss any other issues or PRs?

**btmills:** nothing from me today

**mdjermanovic:** I have

**mdjermanovic:** Are we all okay with merging this once it is ready https://github.com/eslint/eslint/pull/15761

**mdjermanovic:** The RFC has been approved and merged. I'm only not sure if we have a consensus to implement this change in ESLint v9.

**mdjermanovic:** (this would be the first step if we do plan this change for v9)

**btmills:** Since the RFC is merged, the only reason we wouldn't implement the change in v9 would be if it's not ready in time?

**mdjermanovic:** Probably 🙂 I'm only asking because we haven't yet formally decided what changes will be in v9

**nzakas:** Generally we queue up breaking changes for the next major version

**nzakas:** So unless there's a reason not to include it, we can assume this RFC will be in v9
 * 👍 @btmills, @mdjermanovic

**btmills:** We're only at a .13 minor, so we've probably got plenty of time to decide (wow, https://new.eslint.org/ is so handy!)
 * 😁 @nzakas

**mdjermanovic:** This is a non-breaking change, a warning for an upcoming breaking change

**nzakas:** Yup. I think it's fine to merge once approved

**mdjermanovic:** Agreed.

**btmills:** And encouraging changes that would be compatible today, so I see no reason warning people early would be a problem even if the breaking changes slip to v10 for some reason
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we have decided to merge this PR once approved.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Any other issues or PRs to discuss?

**mdjermanovic:** This one seems stalled on the question whether or not we want to use a parser in rules. https://github.com/eslint/eslint/pull/15574

**btmills:** To confirm, we either use a parser to confirm validity or cannot provide suggestions for this rule, correct?

**mdjermanovic:** If we stick with the decision that suggestions shouldn't produce parsing errors, then yes, either parser or we cannot provide suggestions for this rule

**nzakas:** I don't think it's worth jumping through hoops to provide suggestions

**nzakas:** Either it's something that can be done easily or I don't think we should do it

**btmills:** I think I agree. If this were a high-value feature I'd be more inclined

**nzakas:** Suggestions that open up philosophical debates should be a warning sign. 🙂

**mdjermanovic:** I'd agree with not providing suggestions for this rule

**nzakas:** Okay, we've decided not to provide suggestions for this rule.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Other issues or PRs?

**nzakas:** I'll take that as a "no"

**nzakas:** Website redesign update: the Playground is now officially working (https://play.eslint.org). We do have some outstanding issues to address for the code editor theme and colors in the messages being a bit washed out for those who low vision. We also need to add a way to remove rules from the configuration

**nzakas:** (I've contacted Hayden for advice on that.)

**nzakas:** So, not quite ready for prime time, but getting there.

**nzakas:** We also merged the first PR for moving the docs into the right place for the new website. I'll continue tweaking those files after the next release.

**nzakas:** And we did launch https://es.eslint.org
 * 🎉 @btmills, @mdjermanovic

**nzakas:** The Spanish-language site

**nzakas:** I'm pretty excited about that because it shows the plan for translating the site worked. 🙂

**btmills:** bravo! 👏

**nzakas:** We will need to discuss how we want to handle docs.eslint.org for translations in the future, as well.

**nzakas:** But for now, good first step!

**nzakas:** That's all I have to report on that. Shall we do contributor pool?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Usual Discord folks: Kepeniukas and JackNapis
 * 👍 @btmills, @mdjermanovic

**nzakas:** luifermoon for es.eslint.org translation
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** captbaritone for https://github.com/eslint/eslint/pull/15613
 * 👍 @nzakas, @btmills

**mdjermanovic:** Zzzen for https://github.com/eslint/eslint/pull/15635
 * 👍 @nzakas, @btmills

**mdjermanovic:** mahozad for https://github.com/eslint/eslint/pull/15671

**btmills:** Did luifermon bill for the Spanish translation?

**nzakas:** No, he just did it as a normal contribution.

**nzakas:** 🤔

**nzakas:** Do we think this is non-trivial?

**mdjermanovic:** I think it is non-trivial. It's also the work and the idea

**nzakas:** 👍

**btmills:** That makes sense 👍

**btmills:** and there was some follow-up in review

**nzakas:** For amounts, I'd like to give luifermoron $300 for the translation work

**nzakas:** Is there anyone else we want to give more than $100?

**btmills:** that sounds right

**mdjermanovic:** Agreed

**nzakas:** Okay, I'll let them know

**nzakas:** Shall we talk release?

**mdjermanovic:** I can do the release tomorrow
 * 🙏 @btmills

**nzakas:** Thanks!

**nzakas:** Is this just ESLint this time?

**mdjermanovic:** Yes, it looks it's just ESLint

**nzakas:** Great

**nzakas:** All right, unless there is anything else, we can call this a meeting

**btmills:** 👋 take care!

**nzakas:** Stay safe!

**mdjermanovic:** Thanks! 👋
