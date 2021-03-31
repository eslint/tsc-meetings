# 03/25/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** I hope everyone is doing okay. It's been a month since we last met so let's dive right in. @btmills are you good for taking notes?

**btmills:** yep!

**nzakas:** Thank you, sir

**nzakas:** First item: https://github.com/eslint/eslint/issues/14023

**nzakas:** > **TSC Summary:** Node.JS 10 is EOL at the end of April and Node.JS 13 EOL is the end of June.
> 
> **TSC Question:** How do we want to handle these? Should we plan on a major release to coincide with one or both?

**nzakas:** I think overall the question here is, do we want to starting planning for v8.0.0 now?

**nzakas:** Note that the switch of Espree to ESM can't be used in ESLint until we drop Node.js 10 support.

**btmills:** We only have 4 breaking PRs open, not all of which are accepted: https://github.com/eslint/eslint/pulls?q=is%3Aopen+is%3Apr+label%3Abreaking

**mdjermanovic:** The new config system will have a breaking change of logging a deprecation warning?

**nzakas:** @mdjermanovic only in phase 4, which we are pretty far away from at the moment.

**nzakas:** Ref: https://github.com/eslint/eslint/issues/13481

**nzakas:** My biggest concern is getting the Espree ESM changes in. It seems like that and upgrading Ajv would be the two most important things to consider.

**nzakas:** And I'm all for a small major version instead of trying to jam in all kinds of things. 🙂

**mdjermanovic:** I think we agreed that the Espree ESM change is non-breaking for ESLint

**nzakas:** It can't be non-breaking if we continue to support Node.js 10

**mdjermanovic:** Why? ESLint still requires CJS

**nzakas:** The Espree ESM package won't work correctly in Node.js 10 because it uses the .cjs extension.

**mdjermanovic:** Hm, I thought it can work

**nzakas:** Based on https://github.com/eslint/espree/pull/469 it seemed that the tests were failing in Node.js 10?

**mdjermanovic:** ESM tests, but the added CJS test works

**nzakas:** Ah okay, I think I misunderstood

**mdjermanovic:** I think it works on Node 10, but we should certainly doublecheck that

**nzakas:** I just re-read the the thread on the PR, you are correct. It was the ESM tests not working but the .cjs tests worked fine.

**btmills:** Better list of breaking including issues without PRs: https://github.com/eslint/eslint/labels/breaking

**nzakas:** So in that case, I think the top two "breaking" issues would be upgrading Ajv and potentially removing the table formatter so we can drop lodash as a dependency.

**btmills:** It'd be nice to have a breaking-but-you-probably-won't-notice release for once

**nzakas:** Agreed. I'm all-in for a small major release where we don't try to cram stuff in that isn't ready. 🙂

**nzakas:** So let's start at the high-level, do we want to start planning for a major release now, with a tentative release date late May/early June?

**btmills:** I recall seeing ajv 8 is close and that PR will be updated to include both versions

**nzakas:** (We don't need to decide on anything right now, just asking if we want to start the process now or wait.)

**mdjermanovic:** We could add issues/PRs to a GitHub project to have an overview

**btmills:** Starting to collect things we want to do in a v8 project seems like a good starting point

**nzakas:** Yeah, that's what I'm thinking too

**mdjermanovic:** Looks like we already have a project https://github.com/eslint/eslint/projects/8

**nzakas:** Yeah, I set that up when we were doing v7.0.0 so we had a place to push things off when they weren't ready

**nzakas:** So shall we say that for next meeting in two weeks, everyone add any issues/PRs they'd like to see in v8.0.0 to the project?

**nzakas:** And then we can review those and figure out which we want to pursue and which we dont
 * 👍 @mdjermanovic

**btmills:** Sounds good 👍 and I'll create a v9 project so we can push things there

**mdjermanovic:** Maybe we also have some breaking RFCs

**mdjermanovic:** merged, but not implemented yet

**mdjermanovic:** (merged as a RFC)

**nzakas:** Yeah, we should add those to the board too

**nzakas:** get a good overview of what's out there

**nzakas:** Great, so it looks like we've decided to add candidate changes to the v8.0.0 project for next meeting, at which point we will review as a team and decide which we want to pursue.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, next item: https://github.com/eslint/rfcs/pull/76

**nzakas:** This RFC has finished the final commenting stage, and we just need approvals to merge it now

**nzakas:** I've already given a 👍 as I think it's fleshed-out enough to move forward

**mdjermanovic:** I'm 👍, just not sure about the proposed option's name

**btmills:** I'm partway through a final pass and should finish this evening

**nzakas:** Okay cool. If the only concern is the name, let's work on that in implementation PR.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We already agreed to investigate the website ad. I sent out that email today to ask for more information about the setup and will report back when I get the reply.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: I'd like to propose we increase everyone's pay. 🙂 The rates we had set initially back when we were making a lot less each month, and I think we're in a good position to increase what we pay people. So, I'd like to propose that we increase the TSC/Reviewer rates to $60/hour for the first 20 hours and $30/hour for the next 20 hours as well as increasing the paid contributor rate from $25/hour to $30/hour.
 * 👍 @btmills, @mdjermanovic

**btmills:** Fun! We have budget for it. Effective for March invoices?

**nzakas:** Yes

**nzakas:** Okay, it looks like we've agreed to the increases. 🎉
 * ❤️ @btmills

**nzakas:** I'll take the action item to update the team repo and send out an email letting everyone know.

**nzakas:** On a related note, we missed doing contributor pool nominations for February, so let's do both February and March today.

**nzakas:** I'd like to nominate JackNapis for both months, $200 total, and I'd also like to invite them to be a paid contributor going forward.
 * 👍 @btmills, @mdjermanovic

**nzakas:** It looks like we haven't had a lot of code contributions from outside the team in the past couple of months

**mdjermanovic:** g-plane had three PRs in February
 * 👍 @btmills

**btmills:** mreinstein for the Espree ESM work?
 * 👍 @mdjermanovic

**nzakas:** mreinstein has previous declined the offer saying he'd rather let the project keep the money

**nzakas:** Shall we do g-plane $100?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, looks like there hasn't been a lot of other contributors on Discord, so no one to add from there.

**mdjermanovic:** This was a lot of work in ESLint (and esquery to make it possible): https://github.com/eslint/eslint/pull/14072

**nzakas:** Oh yeah, that's a good one. ota-meshi. How much would you propose?

**mdjermanovic:** $200?
 * 👍 @nzakas, @btmills

**nzakas:** Sounds good. There was also a lot of good work on this issue: https://github.com/eslint/eslint/issues/14098

**nzakas:** TimvdLippe, stephenwade, and fregante. $100 each?
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** https://github.com/eslint/eslint/pull/14119

**nzakas:** Oh yeah, that's a good one, too

**nzakas:** $150?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, last call. We're at $950 of our $1000 budget, but of course we can go over for people who deserve it.

**mdjermanovic:** https://github.com/eslint/eslint/pull/14142

**nzakas:** $100?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, done

**nzakas:** All right, let's move on

**nzakas:** Next item:

**nzakas:** > I've been having trouble getting people to review my pull requests. It seems that people are checking the chat at lot less frequently, to the point where I often need to ask several times over the course of two weeks before I can get anyone to review my pull requests. I've tried to post directly in the chat when a PR is ready to let people know. I'd like to see if we can resolve this because the longer feedback loop has really slowed me down lately. Perhaps we can prioritize team members' PRs going forward? Other ideas?

**btmills:** I was planning to mention at the end that I've had a couple markdown PRs ready for review for a while as well. Seems in non-core repositories things take longer to get to. Is there a good way to get those in the review queue beyond adding them to the Triage project?

**nzakas:** They should be auto-added to the Triage project with the latest updates to the bot, so hopefully that will help.

**mdjermanovic:** I was usually prioritizing contributors' PRs so they don't lose enthusiasm

**nzakas:** Weird, well for me it looks like I wasn't watching the repo, so I wasn't even seeing the PRs come in.

**nzakas:** Could we maybe each take one day a week to prioritize team members issues/PRs?
 * 👍 @btmills, @mdjermanovic

**nzakas:** I think generally prioritizing outside contributors is a good idea, but we can't do that to the exclusion of each other, otherwise big things will never get done.

**btmills:** I'm flashing back to my operating system schedulers classes right now thinking about thread starvation and deadlock analogies 😆
 * 😆 @nzakas

**nzakas:** Okay, so let's try focusing one day a week on team needs and see how it goes from there.
 * 👍 @btmills, @mdjermanovic

**nzakas:** And if we are getting stuck, what would be the best way to alert the team? is it posting in Discord? Is it direct @-mentioning on the PR/issue?

**nzakas:** I tend to check both every day, but curious about others

**btmills:** Either way works for me so it ends up in my inbox or notifications

**mdjermanovic:** Maybe @-mentioning might work better

**nzakas:** @mdjermanovic you mean in GitHub specifically?

**mdjermanovic:** yes

**mdjermanovic:** on the issue/PR

**nzakas:** Gotcha. Happy to do that.

**nzakas:** Okay, seems like we have a plan. One day a week to focus on team needs, plus @-mention in GitHub if you get stuck.
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, last item is the release tomorrow. Any volunteers?

**mdjermanovic:** I can do tomorrow

**mdjermanovic:** Looks like jenkins is down again
 * 😫 @nzakas

**btmills:** Thanks. I'll be around in case anything comes up... like Jenkins needing to be restarted haha

**mdjermanovic:** it does already 🙂

**btmills:** @nzakas I'll give this one a shot so I know how to do it

**nzakas:** @btmills thanks. I was curious if you could figure out the problem because I have no idea at this point.

**mdjermanovic:** @btmills I'm planning to start the release somewhere around the TSC meeting time

**nzakas:** generally I just do `sudo systemctl restart jenkins`

**btmills:** I'll take a look after the meeting to see if something sticks out. Worst case I'll restart it so it's ready for tomorrow

**nzakas:** Thank you, sir

**nzakas:** All right, that's all we have for today. Thanks everyone!

**mdjermanovic:** Thanks! 👋

**btmills:** That was efficient! Take care 👋
