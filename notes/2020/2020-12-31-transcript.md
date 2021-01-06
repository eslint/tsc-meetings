# 12/31/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone!

**mdjermanovic:** Hi!

**nzakas:** Happy new year's eve @mdjermanovic  and @btmills . Happy new year to @mysticatea

**mdjermanovic:** Happy new year 🎉

**nzakas:** We'll just wait a few minutes for @btmills and @mysticatea

**mdjermanovic:** sure

**nzakas:** @mdjermanovic anything you'd like to add to the agenda while we're waiting? I noticed you posted a few links in the chat over the past week

**btmills:** 👋

**nzakas:** Hey @btmills!

**btmills:** Happy new year (eve)!

**mdjermanovic:** Hm, I think that was all resolved
 * 👍 @nzakas

**nzakas:** Okay, let's give @mysticatea a couple more minutes to see if he'll join us.

**mdjermanovic:** ah, maybe this - can this be a semver-minor change https://github.com/eslint/eslint/pull/13946

**nzakas:** Okay let's start with that. Can you give us a summary?

**nzakas:** (@btmills - assuming you're good to take notes?)

**btmills:** Yep 👍

**mdjermanovic:** That's a PR to add things like `if (a ||= true)` as errors for the `no-constant-condition` rule

**mdjermanovic:** The rule already reports code such as `if (a = a || true);`, but not `if (a || (a = true));`

**nzakas:** Okay, so you're looking to add in other types of assignments in addition to the vanilla `=`?

**mdjermanovic:** I think the change is valid, question is minor or major version

**mdjermanovic:** Yes, `||=` and `&&=`

**btmills:** Was my understanding correct that we're also not looking at `|=` and the other shorthand assignment operators currently?

**mdjermanovic:** Yes

**mdjermanovic:** My idea was that `||=` and `&&=` are more of a selection than an operation like `|=`

**btmills:** Agreed valid change 👍 trying to decide whether it'd be surprising to users as semver-minor

**nzakas:** I'm not sure I understand why we are treating assignment operators differently. Shouldn't it be all or none?

**nzakas:** Which is to say, if we think we eventually want to also flag `|=` it seems better to add that with the other new checks than to introduce two potentially breaking changes in a row

**nzakas:** If not breaking, then disruptive

**mdjermanovic:** The direct `=` evaluates to RHS. Other assignments would require some logic about operators. The logic for `||=` and `&&=` is similar to `=`, `||`, and `&&`, which the rule already has

**nzakas:** Okay, gotcha

**nzakas:** So I guess the question here is if this should be semver-minor or semver-major? (I don't think anyone is arguing for semver-patch)

**mdjermanovic:** i.e. the rule already covers many operators that evaluate to one of their operands

**mdjermanovic:** `|=` is different, it's about some specifics for the `|` operation

**btmills:** So we could justify adding `||=` and `&&=` as semver-minor additions for new language features while still not adding any operator-specific logic like would be required for `|=`

**nzakas:** According to our policy, to be semver-minor, "A bug fix in a rule that results in ESLint reporting more linting errors."

**nzakas:** If this isn't a bug fix, then I think we're looking at semver-major

**mdjermanovic:** Yup, this isn't technically a bug fix

**nzakas:** Our semver-major definition: "A new option to an existing rule that results in ESLint reporting more linting errors by default."

**mdjermanovic:** I think we do sometimes add new errors for new language features, but yes, per our semver-policy this would be major

**btmills:** We're 100% safe doing it a semver-major. If we wanted to include it before v8, we could maybe use the precedent of new language features

**nzakas:** I guess the larger question is if we want to be able to add checks for new language features in a semver-minor. If we do, then we should update our semantic versioning policy so we don't need to keep answering this question.

**mdjermanovic:** I think we could be able for rules classifed as "problem" (possible error)

**nzakas:** I can see an argument either way, I'd just like us to decide so we know what to do from now on. 🙂

**mdjermanovic:** For example, logical assignment operators also add to `complexity`, but that looks more like a semver-major change

**nzakas:** @mdjermanovic I'm not sure I see the distinction there.

**btmills:** Good point. Initially adding the feature would be a semver-minor enhancement, but we haven't decided about updating rules to warn about new features. The against including new feature warnings in semver-minor would be people already using them via third-party parsers

**btmills:** Initially adding parser support for the feature*

**btmills:** and scope tracking etc

**mdjermanovic:** `no-constant-condition` catches errors in the code, `complexity` is a preference

**nzakas:** @mdjermanovic yeah, I understand they are different categories, but I'm not sure I can see a reason why we should treat the categories differently.

**mdjermanovic:** I'd guess users would like to see errors in their code caused by the use of a new syntax

**mdjermanovic:** but maybe not new errors for stylistic rules in a minor version

**nzakas:** I'd rather treat all rules the same. The more complex we make our policies, the harder it will be to follow and make sense of them.

**nzakas:** Okay, we've been discussing this for about 20 minutes, let's take a vote of where we all currently stand.

**nzakas:** Who is in favor of adding new language features into rules in semver-minor?

**mdjermanovic:** the question is about new checks that produce more errors?

**nzakas:** Yes

**mdjermanovic:** I'm not in favor of doing that for _all_ rules

**btmills:** I'd lean toward semver-major

**btmills:** which is a bit annoying and will probably lead to more frequent major releases because the only other option is a temporary opt-in flag

**nzakas:** Yeah, that's the downside of semver-major. We typically only do one per year, but waiting that long to implement these changes isn't practical.

**nzakas:** I'm leaning towards semver-minor, myself, as I think early adopters probably expect some friction.

**btmills:** that's true... if you're using pre-stage 4 features, you've kind of already opted into that

**nzakas:** I just really don't have much sympathy for people who use unfinished language features and expect everything to just work. 🙂

**btmills:** all right, I'm convinced - stage 3 is an opt-in

**nzakas:** Okay, so it sounds like we are circling around semver-minor. I'm still of the mind that we should do this for all rules, as I can't think of a good reason to treat different categories of rules differently. It looks like @mdjermanovic would prefer to treat them differently. @btmills where do you stand on that?

**btmills:** I agree with you that the complexity of a different policy for different rules would be complex to keep track of and for users to understand

**btmills:** How long until something is no longer a "new language feature"?

**nzakas:** I'd stick with our one-year standard for that

**nzakas:** Which we're already using for determining when to accept new rules

**btmills:** That works for me

**mdjermanovic:** Agreed

**nzakas:** Okay, so I think we've decided to allow changes to any category of rule for new language features inside a semver-minor release. @mdjermanovic just want to make sure you're willing to support this?

**mdjermanovic:** Yes

**nzakas:** Okay, great. @btmills?

**btmills:** 👍

**nzakas:** Okay, done! Thanks for bringing this up @mdjermanovic . That was meatier than I expected.

**nzakas:** I'll take the action item to update the semantic version policy

**btmills:** thankya

**nzakas:** Does anyone have any other issues/PRs to discuss before we dig into top contributors for the month?

**mdjermanovic:** I don't

**btmills:** none here

**nzakas:** Okay, let's take a look at who the top contributors have been for the past month

**nzakas:** https://github.com/eslint/eslint/pulse/monthly

**nzakas:** Also, you can nominate anyone for anything 🙂

**btmills:** yeonjuan and anikethsaha have been active the last month
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Also mreinstein for all of the Espree work and RFC
 * 👍 @btmills, @mdjermanovic

**btmills:** Is Aladdin-ADD eligible for this pool as a reviewer, or is that our hourly rate?

**nzakas:** That is hourly rate

**nzakas:** I've also noticed luxaritas helping out in <#717416886685401108>
 * 👍 @btmills, @mdjermanovic

**nzakas:** Also JackNapis has been active in <#717416886685401108>
 * 👍 @btmills, @mdjermanovic

**nzakas:** (I need to find a way to automate this!)
 * 👍 @mdjermanovic

**nzakas:** Anyone else that's been active, either in issues or anywhere else?

**nzakas:** Looks like Siddhant was also quite active in <#717416886685401108> prior to the holidays
 * 👍 @mdjermanovic

**mdjermanovic:** Siddhant in <#717416886685401108>
 * 👍 @nzakas

**btmills:** was also coming back here to suggest Siddhant, so 👍 haha

**nzakas:** Okay, we've got six nominees: yeonjuan, anikethsaha, mreinsten, Luxaritas, JackNapis, and Siddhant.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We've technically got $500 to split among six, but I'd be fine with giving everyone $100. Thoughts?
 * 👍 @mdjermanovic

**btmills:** no objections

**nzakas:** Okay, we've decided to give each of these folks $100 for their contributions in December. 🎉
 * 👍 @btmills

**nzakas:** I'll take the action item to let them know

**nzakas:** Shall we discuss the release for this week?

**nzakas:** I'm actually available tomorrow if no one else is interested 🙂

**btmills:** I'll be watching football tomorrow but could do it Sunday

**nzakas:** @btmills college?

**btmills:** Yep! Ohio State has the night game

**nzakas:** Nice. Good luck.
 * 🤞 @btmills

**nzakas:** Okay, I'll plan on doing the release unless @mdjermanovic is super interested in doing it

**mdjermanovic:** I can do the release, or be around

**nzakas:** I'd be happy to let you do it. 🙂 Releases are not my favorite thing to deal with.

**mdjermanovic:** Sure, I can tomorrow

**nzakas:** Thanks!

**nzakas:** Okay, that's all for today. Thanks everyone!

**nzakas:** Happy new year and stay safe

**mdjermanovic:** There are some not yet approved small PR's of mine if someone has time

**nzakas:** @mdjermanovic I'll take a look after I rest a bit

**btmills:** I'll take a look if I have time

**mdjermanovic:** sure, no problem if they wait for the next release

**btmills:** Thanks all! Happy new year 🎉

**mdjermanovic:** 👋 Happy new year 🎉
