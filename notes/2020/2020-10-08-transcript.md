# 10/08/2020 ESLint TSC Meeting Transcript

**nzakas:** hi everyone

**mysticatea:** Hello

**btmills:** 👋

**nzakas:** @mysticatea glad to have you back around!
 * 🎉 @btmills

**mdjermanovic:** Hi!

**nzakas:** Okay, looks like we're at full capacity for today (@kaicataldo) said he can't make it

**nzakas:** Just bringing up the agenda...

**nzakas:** @btmills are you good for taking notes?

**btmills:** Sure thing

**nzakas:** Thanks!

**nzakas:** Okay, first issue: https://github.com/eslint/eslint/issues/13654

**nzakas:** > **TSC Summary:** This proposal seeks to add an `exports` field to `package.json` that specifically identifies which files are part of the public API. Despite our consistently saying people should not be accessing files directly in the `eslint` package, people still are, and then complain when we make a change. For new Node.js versions, including `exports` would ensure our internal file structure isn't exposed publicly.
> 
> **TSC Question:** Shall we accept this proposal and add it to the public roadmap (for v8.0.0).
 * 👍 @nzakas, @btmills, @mdjermanovic

**mdjermanovic:** Absolutely

**mysticatea:** 👍

**mdjermanovic:** But should we make an RFC or a very early announcement? Other packages may need time to adjust and maybe ask for some additions to the public API

**nzakas:** I don't think we need to make a big deal out of it from now. We'll put it on the roadmap, and when we do a larger "Here's what's coming in v8.0.0" blog post, we can announce it there.

**mysticatea:** Ah, I have one concern about rejecting importing internal files.

**mysticatea:** In browser use

**mysticatea:** I think that browser builds use `eslint/lib/linter` to avoid depending `fs`

**nzakas:** That's fine, we can expose more than one entrypoint

**nzakas:** Since `Linter` is part of our public API already, I don't think there's any harm in exposing that file

**mysticatea:** 👍

**mdjermanovic:** I think that `@typescript-eslint/eslint-plugin` imports some rules directly to extend them

**nzakas:** @mdjermanovic that's something we want to discourage

**btmills:** The recommendation there would be copy & paste to guarantee they're at least working from a stable rule implementation?

**mdjermanovic:** Absolutely agree on that, but they might need some time to change that

**mysticatea:** Oh. `eslint-plugin-vue` also importing some each core rule to apply that to inline scripts in `<template>`

**nzakas:** Okay, I think we're getting a bit too far into the implementation discussion. We know that there are people using files in ways we don't want them to, and that's why this change is being proposed.

**nzakas:** I'd suggest we accept this proposal and anyone who is interested can start an RFC to find all the areas where people are reaching into our package.

**nzakas:** And again, this wouldn't be until v8.0.0, so there should be plenty of time to message this change.

**btmills:** Sounds good to me 👍

**mdjermanovic:** 👍

**mysticatea:** 👍

**nzakas:** Okay, we've agreed to accept this issue onto the roadmap.

**nzakas:** Next item:

**nzakas:** > Would it be possible to discuss what we want to do with eslint-canary?
> 
> Should it be archived, maintained with no roadmap, or maintained with a roadmap in mind? (Or some other option I didn't specify?)

**nzakas:** I think this has been a question for a while. I remember eslint-canary coming into existence but I think was away with health issues when it was fully developed. Does anyone have any background on eslint-canary that they can share?

**btmills:** We decided to transfer ownership in the 2017-02-16 meeting: https://github.com/eslint/tsc-meetings/blob/98218c895be3d75211f532f6414be2f22b46b2df/notes/2017/2017-02-16.md#transferring-eslint-canary-to-the-eslint-github-organization

**btmills:** And the original issue (linked in the agenda item title): https://github.com/eslint/eslint/issues/8032

**nzakas:** Did we ever end up deploying it?

**nzakas:** It looks like there is a Jenkins job for it

**btmills:** At the time, not-an-aardvark was going to be the primary maintainer

**btmills:** It's been failing nightly in Jenkins for a year: https://jenkins.eslint.org/job/eslint-canary/

**btmills:** But the team is significantly smaller now

**nzakas:** It seems like something that could be valuable, but I guess the question is: does anyone feel strongly enough about this to take it on?

**btmills:** I'm guessing we currently lack the bandwidth. So as a proposal: archive it for now (and disable the Jenkins job), but be willing to pick it back up if someone is ever interested?
 * 👍 @mysticatea, @nzakas, @mdjermanovic

**nzakas:** Okay, it looks like we've resolved to archive the project for now and delete the jenkins job until and unless someone decides to take it on later.

**nzakas:** Next item:

**nzakas:** > should we participate in Hacktoberfest formally? (ref: eslint/eslint#13743)

**nzakas:** As some background: due to a ton of spam, Hacktoberfest switched to being an opt-in program.

**nzakas:** https://github.com/eslint/eslint/discussions/13743

**nzakas:** So we shouldn't receive any more Hacktoberfest PRs unless we opt-in

**nzakas:** The question is: do we want to opt-in?

**btmills:** My impression is most of the spam has subsided and it's back to baseline levels from previous years. I'd be willing to try it but remove the label if we get more spam
 * 👍 @mysticatea

**nzakas:** Part of this would be to go through the issues and label them as "Hacktoberfest" to indicate which ones would be good projects to take on

**nzakas:** That also kind of implies being responsive to people on those issues

**nzakas:** Do we feel like we have the bandwidth for that?

**nzakas:** (Keep in mind we have three more weeks left in October.)

**btmills:** Just skimming through our accepted issues, it doesn't look like we have a ton that would be good for first-time contributors
 * 👍 @mysticatea, @nzakas, @mdjermanovic

**nzakas:** Yeah, that was my concern, too

**nzakas:** I feel like the cost-benefit ratio at this point isn't in our favor

**btmills:** All right, sounds like we're leaning toward skipping this year?
 * 👍 @mysticatea, @nzakas, @mdjermanovic

**mdjermanovic:** Looks like many of the accepted issues still need some design

**nzakas:** Okay, we've decided not to participate in Hacktoberfest this year.

**nzakas:** Next item:

**nzakas:** > Agenda item: in order to move forward with the triage team idea, it occurs to me that we need a better way of defining our process for triaging issues and pull requests. I think the easiest way to do this would be to use a GitHub project to manage the process instead of relying on labels. That way, we'd be able to more easily tell at a glance which issues and pull requests need more attention.
> 
> I tried putting together a project here: https://github.com/orgs/eslint/projects/2
> 
> The idea is that issues and pull requests from all of our projects would end up in this one board, so we wouldn't need to go into each individual project. We can also add automation to help move things between columns automatically. The high-level goal here is to have a single place to go to review all of our open issues and pull requests and to know which are in need of attention.

**nzakas:** So the basic idea would be for the triage team people to review the "Needs Triage" items as they come in, move them to "Triaging" to indicate that they are working on them. When they are properly triaged, they'd move to "Ready for Team" where we would then step in to finish the process.

**btmills:** Seems like a good way to focus the core team's time 👍

**mdjermanovic:** Looks good to me

**mysticatea:** Sounds good to me

**nzakas:** Okay, it looks we've agreed to adopt this board. I'll take the action to finish setting it up, and then I'd suggest we use it for a couple weeks to work out the process and add any automations we need to make life easier.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Oh, and I'll write up some docs on how to use it.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Looks like we are good to go on that.

**nzakas:** I just wanted to double-check that everyone got their Tidelift payment this week? (I had some trouble that I'm working with support on.)

**btmills:** Some speed bumps, but got it set up eventually 👍

**mysticatea:** I'm registering now.
 * 🎉 @nzakas, @btmills

**nzakas:** @mysticatea I told them to expect you, so hopefully it will go smoothly

**mdjermanovic:** got the payment. I also have some trouble, hope it will be sorted out

**nzakas:** Okay, looks like we're all roughly in the same boat. They've been pretty responsive to me so hopefully once we've got this first part set up the subsequent months will just happen automatically.

**nzakas:** Does anyone have any other topics to discuss before we go to the release?

**nzakas:** I'll take that as a "no" 🙂

**nzakas:** Okay, we have a release this week. Any volunteers to do that?

**mdjermanovic:** I can, but would appreciate if someone is around

**btmills:** When would you be doing it?

**nzakas:** I could help on Saturday, but not tomorrow

**mdjermanovic:** the TSC meeting time (10pm my time) is perfect for me

**mdjermanovic:** any day

**btmills:** If something comes up, I'll get Discord notifications and can hop online at that time either Friday or Saturday
 * 👍 @mdjermanovic

**mdjermanovic:** deal!

**nzakas:** Okay, shall we say tomorrow @mdjermanovic and @btmills will cover the release?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Excellent, thanks everyone.

**nzakas:** That's all for today. Stay safe and take care!

**btmills:** Thanks all! And @mysticatea nice to have you back 👋

**mdjermanovic:** 👋

**mysticatea:** Thank you 👋
