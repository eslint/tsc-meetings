# 11/19/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** Looks like we need one more before we can get started

**nzakas:** I'm guessing that will be @btmills 🙂

**btmills:** 👋

**nzakas:** And there he is!

**nzakas:** Okay, we've reached quorum, so let's proceed.

**nzakas:** First item:

**nzakas:** https://github.com/eslint/eslint/issues/13803

**nzakas:** > **TSC Summary:** This proposal seeks to allow a way to save custom configs to be selected as part of `--init`. This would involve a way to specify which configs to include and then display them when `--init` is used. This would require an RFC before implementation.
> 
> **TSC Question:** Shall we accept this proposal?

**mdjermanovic:** Sounds like managing some kind of database of configs

**nzakas:** I'm 👎 to this proposal. I feel like it's a bit more complex that we intended `--init` to be

**mdjermanovic:** I'm also 👎

**btmills:** Yeah, I'm trying to think of a way this wouldn't be too complex. I don't see a way we could do better than "extend this config" which isn't any harder than running `--init` and then adding an `extends` entry to the eslintrc with a text editor afterward

**btmills:** So also 👎

**mdjermanovic:** Looks like a lot of work that would just replace a simple copy & paste

**nzakas:** Okay, it looks like we've decided to rejected this proposal.

**nzakas:** Next item is another `--init` one: https://github.com/eslint/eslint/issues/13645

**nzakas:** > **TSC Summary:** This proposal seeks to add a question to `--init` asking if dependencies should be installed with npm or yarn.
> 
> **TSC Question:** Shall we accept this proposal?

**mdjermanovic:** 👍

**mdjermanovic:** We could add a question like `Which package manager does your project use?`. Default is always `npm`

**btmills:** Since we last considered yarn, it's become much more popular. So I'm also 👍

**nzakas:** I don't have any strong feelings to this one, so I'll 👍

**btmills:** Slight concern that people might want to then include a whole host of others, but we could decide on a case by case basis if another reaches significant usage

**btmills:** For now though that's just npm and yarn

**nzakas:** Yeah, also a concern of mine, but we can always just say no. 🙂

**nzakas:** Okay, we've decided to accept the proposal to add a question to `--init` allowing people to specify to use Yarn to install dependencies

**nzakas:** @mdjermanovic did you have more thoughts before we move on? (Looked like you were typing)

**mdjermanovic:** Wanted just to clarify that the question won't assume anything, just always set `npm` as default
 * 👍 @nzakas, @btmills

**btmills:** Yes, asking vs trying to guess intelligently dramatically simplifies implementation

**nzakas:** Yes, we are all in agreement that the thing we want is to ask a question to determine which package manager should be used to install dependencies. No auto-detect.

**nzakas:** Okay, next item: https://github.com/eslint/eslint/issues/13752

**nzakas:** > **TSC Summary:** This proposal seeks to add three checks into `no-constant-condition`:
> 
>     1. Consider short circuiting operations (`||` , `&&`) to be conditions
> 
>     2. Consider any comparison binary expression (`==`, `!==`) to be a “condition”. This would warn: `myTestFunc({} == false)`
> 
>     3. Consider null conditions, not just boolean conditions ( `{} ?? foo, !foo == null`)
> 
> 
> There is consensus that proposals 2 and 3 do not belong in `no-constant-condition`. @nzakas proposes that all three proposals be included in a new `no-constant-binary-operand` rule.
> 
> **TSC Question:** Shall we accept this as a new rule proposal for `no-constant-binary-operand`?

**btmills:** 👍

**mdjermanovic:** I'm not sure that `no-constant-binary-operand` describes checks like `!foo === a + b` well.

**mdjermanovic:** Operands are not constant, the whole expression is

**nzakas:** Maybe operand isn't the right term to use?

**nzakas:** Maybe `no-constant-binary-expression` is a better name?

**mdjermanovic:** That wouldn't describe `{} || foo`

**mdjermanovic:** sorry, `{} && foo`

**nzakas:** that would always be equal to `foo` though, so the expression is constant

**nzakas:** unless I'm missing something?

**mdjermanovic:** Hm, makes sense

**btmills:** I've been trying and can't come up with something clearly better. An operand is constant in the context of one leg of the expression... I could go with either suggestion. Or just say rule accepted as `no-constant-binary-operand` with an option to change the name if somebody comes up with something clearly better before it's merged

**btmills:** "is constant" as in "will always evaluate the same way"
 * 👍 @nzakas

**nzakas:** With @mdjermanovic's examples, I'm more inclined towards `no-constant-binary-expression`

**mdjermanovic:** I'm more in favor of `expression`, too

**btmills:** That works too 👍 I don't feel strongly about `-operand`

**nzakas:** Okay, we've decided to accept the proposal for a new `no-constant-binary-expression` rule.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/13776

**nzakas:** > **TSC Summary:** This proposal seeks to have `no-constant-condition` follow the value of identifiers and consider that value as part of it's evaluation. This would allow us to capture more errors when identifiers are assigned a value once and then used in a condition. Optionally, it might make sense to build this into `eslint-scope` to allow other rules to use the same functionality.
> 
> **TSC Question:** Shall we accept this proposal?

**mdjermanovic:** There are probably some details to discuss on the issue, but generally 👍

**btmills:** 👍

**nzakas:** Yeah, I like the idea, pending some discussion around implementation details.

**nzakas:** So shall we say we accept this proposal pending an RFC?

**mdjermanovic:** needs RFC?

**nzakas:** Yes, that 🙂

**mdjermanovic:** agreed

**nzakas:** accepted + needs RFC

**btmills:** Yeah, it'd be nice to see examples of what we're choosing to follow or not follow

**btmills:** 👍 accept + needs RFC

**btmills:** (that'll also answer your `eslint-scope` question)

**nzakas:** Okay, we've decided to accept the proposal and will require an RFC before implementation.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item:

**nzakas:** > Agenda item: I'd like to propose we extend the TSC $50/hour up to 20 hours each month to reviewers. I think that this would incentivize people to continue working towards reviewer status and would also allow for TSC members to revert back to reviewer status without giving up the ability to be paid for their contributions.

**mdjermanovic:** Sounds good to me

**btmills:** 👍 we have the budget headroom now

**nzakas:** Yeah (thanks Automattic and Google Chrome 🎉)
 * 🎉 @btmills, @mdjermanovic

**btmills:** Maybe worth a collective "thanks, here's what we're doing with it" blog post?
 * 👍 @mdjermanovic

**nzakas:** Definitely, I'd just like to have a couple more things to announce, too.

**nzakas:** Also, I'm still working on getting quotes from both of them.

**nzakas:** I'd like to figure out a way to pay committers, as well, I just don't think the on-your-honor, per-hour approach is a good model for people we don't know that well yet.

**btmills:** 1. My follow-up question was going to be whether they'd finally gotten back to you with quotes 2. Yeah, long term I'd love to expand once we figure out a working system. So definitely same page 👍

**nzakas:** A random idea I just thought up: what if we set aside $500/month, and at the end of each month we review contributions from committers and new contributors, and just award some portion of that to the people who made the biggest contributions?

**nzakas:** Where "biggest" could mean any of: quantity, importance of feature, impact of work, etc.?

**mdjermanovic:** Sounds interesting

**btmills:** I like the sound of that! I have no problem with the definition being vague and up to our interpretation initially

**nzakas:** Yeah, I envision it's just the TSC looking over things and saying "yup, that person did a great job"
 * 👍 @btmills, @mdjermanovic

**nzakas:** Maybe we can figure out some metrics in the future but to start, I think having us decide is the fastest way to get started
 * 👍 @mdjermanovic

**btmills:** agreed

**nzakas:** Okay, we've agreed to set up a fund to pay contributors at the end of each month based on their contributions. The TSC will decide who gets what portion of the $500 each month.
 * 👍 @btmills, @mdjermanovic

**nzakas:** I'll take the action item to file the budget issue

**nzakas:** Does anyone want to bring up any other issues before we move on to talk about the release?

**btmills:** 🦗
 * 🤣 @nzakas

**mdjermanovic:** nothing from me

**nzakas:** Okay, so we have a release scheduled for this week. Any volunteers? 🙂 I'm unavailable tomorrow.

**mdjermanovic:** I can do the release

**btmills:** thanks @mdjermanovic

**mdjermanovic:** Would appreciate a review on https://github.com/eslint/eslint/pull/13845 so it could go into release, if it looks good
 * 👍 @btmills

**nzakas:** Sure thing, I'll take a look right after this.

**btmills:** When do you plan to run the release? I'll make time

**mdjermanovic:** Something like the TSC meeting time
 * 👍 @btmills

**mdjermanovic:** tomorrow

**mdjermanovic:** Could be later as well if you'd like

**btmills:** nope, that'll be plenty of time

**btmills:** and I should be around tomorrow seeing notifications if something comes up

**mdjermanovic:** thanks!

**nzakas:** Thanks to both of you for covering the releases.

**nzakas:** Okay, I think we are done for today. Everyone stay safe and healthy!

**btmills:** 👋 likewise!

**mdjermanovic:** 👋
