# 01/14/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mysticatea:** Hello.

**mdjermanovic:** Hi!

**nzakas:** Hi everyone

**nzakas:** I hope you've all had  a good start to the new year.

**nzakas:** Since we're at full strength, let's get started

**nzakas:** @btmills are you good for taking notes?
 * 👍 @btmills

**nzakas:** Awesome. So it looks like we don't have any issues or PRs flagged for this meeting already, so I'll dig into the agenda items on the meeting issue to start.

**nzakas:** > I'd like to review the TSC/reviewer payment structure we have and see what people think now that we've been paying people for just about a year. I'm mostly interested in the limits: does the 20 hour per month limit still make sense? Does $50/hour still make sense? Is there anything we want to tweak at this point?

**nzakas:** I've personally never come close to the hour limit, so definitely interested to hear what others think about that.

**mdjermanovic:** I'd be fine with a higher limit, I usually spend more like 35-40h

**btmills:** I think I need to start looking at it more like a limit than a target 😆

**nzakas:** For context: the 20-hour limit was put in place to discourage people from working a full-time job and then putting in an additional 40 hours per week. We don't want to incentivize burnout.

**nzakas:** And the $50/hour amount was based on what Webpack was paying at the time.

**mysticatea:** Unfortunately, I didn't have enough time to work, so I have no opinion. I must get time near future...

**nzakas:** (Also seems to be the going rate for frontend contract work)

**btmills:** I've found I'm regularly able to get to 20/mo without issue, and that's even taking a week or two off around the holidays, just by shifting a bit to the week before or after

**btmills:** I don't think I have capacity for 35-40 like @mdjermanovic, but that doesn't mean I'm opposed to raising it if we want to do that (then I'll really have to stop looking at it like a target haha)

**nzakas:** Based on @mdjermanovic, it seems like the hour limit isn't acting as a preventative against working too much. 🙂

**btmills:** Do you happen to know if that's still what webpack does? I googled but didn't find anything in the first few results since 2018

**nzakas:** That I don't know the answer to. I can reach out and ask. I do know that $50/hour is roughly the going rate for contract frontend work out in the world, though.

**nzakas:** So here's where I am currently

**nzakas:** (on this matter)

**btmills:** Just curious, no need to reach out

**nzakas:** I feel like the hour limit is a good thing to have, even if it is just as a reminder that you're going over and above what's expected.

**nzakas:** That said, I feel uncomfortable that @mdjermanovic is basically doubling that amount and not getting paid for it.

**nzakas:** So I read about something Gumroad does for this situation, and was wondering if maybe it would work for us.

**nzakas:** Which is basically, keep the $50/hour and 20 hours/month limit, and then every hour over 20 can be billed at $25/hour. So if you choose to go over the limit, you at least are compensated for it, but the lower amount is an indicator that maybe you should also consider resting for a bit. 🙂

**btmills:** Ooh interesting. I'd be down to try that, though I'm mostly curious what @mdjermanovic thinks as the person who would be most impacted

**mdjermanovic:** Sounds good to me 🙂

**mysticatea:** Sounds good!

**nzakas:** Okay, sounds like we are generally agreeable to that approach. Do we want to put a hard upper limit past 20 hours? Like no more than 40? Or are we comfortable without having a limit at this point and just seeing what happens?

**btmills:** That would simplify calculating the reserve we've been keeping in the budget

**nzakas:** @mdjermanovic since you're doing the most work, does an upper cap of 40 hours per month make sense to you?

**mdjermanovic:** Well, I could maybe work more some months, but having a limit simplifies the calculations for the reserve

**nzakas:** Here's what I'll suggest: let's start with a cap of 40 hours per month and we can revisit in a few months to see if it still makes sense
 * 👍 @mysticatea, @btmills, @mdjermanovic

**btmills:** For the notes, will you be updating the team repo @nzakas?

**nzakas:** Okay, it looks like we've decided to pay $25/hour for hours 21-40 that people work and then revisit this in a few months once we have some data on how it's working out.

**nzakas:** @btmills  yes
 * 👍 @btmills

**btmills:** (Side note: I'm glad to know all that output was taking you more than 20 hours @mdjermanovic because I was starting to look at how much I was getting done in comparison and think I'm slow 🐢)
 * 👍 @nzakas

**nzakas:** And a reminder: be sure to file your invoices each month. 🙂

**nzakas:** Okay, next item

**nzakas:** > What parts of our process are slowing/breaking down right now? It seems that everyone isn't around as much as previously, so it might be a good time to talk about how that's affecting the project.

**nzakas:** This includes me, my health hasn't been great the past six weeks or so, and I've not been able to do as much.

**nzakas:** Hoping that will change soon, but wanted to see where we are hurting right now and where we could use some more focus

**btmills:** It feels like this is a return to about where we were before Kai went half time. Latency increased across the board, and issues/PRs past the first page tend not to get any activity

**nzakas:** Yeah, that's been my experience as well

**nzakas:** It seems like the logjam is at the front of the funnel? (When issues and PRs are open) vs. the end of the funnel (PRs getting merged)?

**nzakas:** I know I had planned to get our new project board up and running and I've fallen behind on that. I think I'll focus on that before cycling back to the flat config work.

**btmills:** I agree with that about the beginning of the funnel. The release cycle acts as a forcing function at the end of the funnel. For example, I probably spend as much time reviewing PRs Thursday and Friday of release week as I do the other 12 days, but at least it's happening regularly.

**nzakas:** There's also the idea of the triage team that I wanted to get going in conjunction with the project board. So seems like a good time to spend some cycles focusing on those two things to get us unstuck?

**btmills:** I was just typing a message about the triage team idea 👍

**btmills:** I see a couple of our committers frequently handling the first few steps on incoming issues (and @mdjermanovic of course) - maybe start with them?

**nzakas:** Yeah, I think we can offer it to them as the starting point, and then maybe expand out based on how that goes

**btmills:** Yeah, right now we've just been giving them contributor awards, but formalizing that hourly seems okay since we're already more familiar with them than arbitrary contributors

**btmills:** (hourly based on the triage team structure that we've discussed previously)

**nzakas:** True, maybe we can start others out as contributor awards and then "promote" them to hourly if they do a good job

**nzakas:** @mdjermanovic as the one spending the most time in issues, what do you think?

**mdjermanovic:** Sounds good to me

**btmills:** That's a promising heuristic

**nzakas:** @mysticatea thoughts?

**mysticatea:** 👍

**mdjermanovic:** I usually can find time for issues, but some issues require more opinions

**btmills:** For those, the project board would help

**nzakas:** Agreed.

**nzakas:** Okay, I'll make the project board my top priority to get going.

**nzakas:** And then I'll follow up with a proposal for how to get the triage team going.

**btmills:** 👍

**mdjermanovic:** 👍

**nzakas:** I think the project board I can do fairly quickly, it's really just documenting how to use it that will take the most time

**nzakas:** All right, let's move on to the next item:

**nzakas:** > let’s talk about why we don’t use lock files in the repos and whether it makes sense.

**nzakas:** As far as I can tell, we are pretty unique in the fact that we aren't using a lock file. I think I wasn't around when this decision was made, so just curious if there's a reason why we don't?

**mdjermanovic:** `package-lock.json` or `npm-shrinkwrap.json`?

**nzakas:** package-lock.json

**btmills:** My understanding has been that lock files are useful for deployed applications, but for tools and libraries lock files are less useful and even ignored

**mdjermanovic:** It can help with development environment, but we won't be getting notices about possible problems with dependencies early

**mdjermanovic:** Since it doesn't affect what the end users will get installed

**mysticatea:** That was for CI. CI should not lock versions because `npm install eslint` doesn't lock versions. But... currently `npm ci` command that install deps without locking versions exists.

**mysticatea:** So we can use the lock file.

**nzakas:** My big concern is that when we do a release without a lock file, we don't know what people are running with 100% certainty, so it's harder to track down problems.

**btmills:** So we _could_ use a lock file if we wanted to as long as we used `npm ci` for testing. But if that's the case, I'm not sure I see a benefit to the lock file in development

**nzakas:** (This is the only project I work on that doesn't use lock files, fwiw)

**mdjermanovic:** `package-lock.json` doesn't have effect on published packages

**btmills:** We don't know that anyway. As far as I understand it, if I'm an end user running `npm install eslint` or `yarn add eslint`, they'll ignore eslint's transitive lock file and just use eslint's `package.json` versions

**mysticatea:** `npm install eslint` command doesn't see `package-lock.json` of eslint.

**nzakas:** Ah ok. I'm confusing it with `npm-shrinkwrap.json` I think.

**nzakas:** So if I'm understanding this correctly, the main advantage of `package-lock.json` is that development environments are consistent?

**mdjermanovic:** yes

**mdjermanovic:** and for apps

**nzakas:** Apps because they tend not to be published?

**mdjermanovic:** yes

**nzakas:** Got it 👍

**mdjermanovic:** so the deployed version can be same as the tested version

**nzakas:** Okay, so then is it helpful for us to include `package-lock.json`?

**btmills:** Yeah, if I'm deploying an app, it's nice to know that dependencies are consistent between environments and deployments. But for us, the disadvantage to a lockfile is our development environments would be consistent but `rm -rf node_modules; npm install` wouldn't get a new dependency version that our users are seeing due to a bug in a new semver-compatible version

**nzakas:** Ah, I see

**nzakas:** That makes sense

**btmills:** So we could end up with a bug that users see, reproduces in CI, but we'd have to update the lockfile locally to see it

**nzakas:** What do people think about adding that as a FAQ to the README? Seems like good info to have published somewhere

**btmills:** I'm sure someone's written a blog post we could reference explaining these use cases in more detail

**btmills:** Maybe https://www.twilio.com/blog/lockfiles-nodejs ?
 * 👍 @nzakas

**nzakas:** @btmills since you explained it very well above, and found the link, would you mind taking the action item to add that to the README?

**btmills:** Will do 👍

**nzakas:** Thank you, sir

**nzakas:** Next item:

**nzakas:** > Agenda item: I've been attending monthly TC39 tools outreach discussions for about a year now. The time commitment is about 2 hours between pre-reading discussion topics, the meeting itself, and sending out notes to our team.
> 
>     * Should we continue having a team member attend?
> 
>     * Would anyone else like to do some? (Not saying I don't want to - it's interesting - just making sure I'm not excluding someone who else who's interested.)
> 
>     * Is the notes format sufficient? Can I improve anything?

**nzakas:** (this is from @btmills)

**nzakas:** My answers: Yes, I think it's important to be there. I'd like to go at some point, myself, but I just don't have the extra energy. I thoroughly enjoy reading your notes. 🙂
 * ❤️ @btmills

**mdjermanovic:** The notes are great

**nzakas:** @btmills how do you feel about attending? Do you see it as beneficial?

**btmills:** Beneficial for me personally yes - I learn a lot, and there are some really smart people on those calls. Beneficial for the project depends on the topic - the last couple have been focused on bundle formats that don't have much relevance to ESLint, but the rest of the meetings have usually had 1-3 topics that could affect ESLint (most recently, inline `module` blocks, for example), and where having someone on the call who can explain what's easy and what's architecturally difficult for us can help inform designs
 * 👍 @nzakas

**nzakas:** So it sounds like it's worthwhile to continue going, and also that we don't have any other takers for attending at this time (as I said, I'd like to at some point in the future, just can't right now).

**btmills:** All right, I will continue going, and if anyone else wants to attend, feel free! We can add anyone to the invite so it's at least on your calendar if you'd like

**btmills:** Let me know if you want the invite and I'll make sure you're added

**nzakas:** Cool, thanks! (I'm on the invite already)

**btmills:** thought so

**nzakas:** Okay, last item is the release tomorrow

**nzakas:** Any volunteers? 🙂

**mdjermanovic:** I can do the release

**btmills:** I'm available tomorrow night

**btmills:** Go for it @mdjermanovic. I'll review PRs this evening if I can find time

**nzakas:** I just checked Jenkins and it's still up, so hopefully that won't be a problem this time. (Fingers crossed I fixed the permissions error.)

**nzakas:** Which reminds me: if y'all can add public keys to GitHub, I can pull from there and add you to the Jenkins server.

**btmills:** Will do, and I'll include that in the notes 👍

**nzakas:** Thanks!

**nzakas:** Okay, I think that's it for today.

**nzakas:** Take care everyone, and happy new year

**btmills:** 👋 thanks!

**mysticatea:** Thank you 👋

**mdjermanovic:** Thanks! 👋
