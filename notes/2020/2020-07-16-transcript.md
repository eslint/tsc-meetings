# 07/16/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone!

**mdjermanovic:** Hi

**nzakas:** Welcome Milos! 🎉

**mdjermanovic:** Thanks! Glad to be here

**btmills:** 👋

**nzakas:** We generally give people about 5 minutes before we start

**nzakas:** Just to go over how we run these meetings: we have a moderator (usually me) who goes through the issues with "tsc agenda" and any additional agenda items posted on the meeting issue

**nzakas:** At the end we can cover anything people want to bring up that wasn't on the agenda

**nzakas:** We also have a notetaker (usually @btmills ) taking notes to summarize the discussion

**nzakas:** then we post the notes and the chat transcript to the `tsc-meetings` repo for easy reference later

**mdjermanovic:** Thanks for the overview!

**nzakas:** Sure thing.

**nzakas:** We're going to need to get you up to speed on various things as we go, so feel free to ask questions at any point

**nzakas:** And we need three people attending to reach quorum for any meeting, otherwise we cancel

**mdjermanovic:** 👍

**kaicataldo:** Hi all 👋

**nzakas:** Welcome @kaicataldo!

**nzakas:** All right, let's get started

**nzakas:** @btmills are you good to take notes?

**btmills:** Yep 👍

**kaicataldo:** One quick point - when we're voting, can we send messages with 👍 instead of reactions?

**kaicataldo:** Just to make sure it gets in the transcript

**btmills:** Ah yes, thank you 👍

**nzakas:** Just to clarify, you mean type 👍 instead of reacting on what someone wrote?

**kaicataldo:** That's right!

**nzakas:** 👍

**btmills:** The transcripts don't (yet) reflect reactions to individual messages

**nzakas:** Gotcha, makes sense

**kaicataldo:** Thanks!

**nzakas:** Okay, first item:

**nzakas:** https://github.com/eslint/eslint/issues/13299

**nzakas:** > **TSC Summary:** The proposal here is to add a new option to `no-void` that will allow the form `() => void foo;`, which currently emits a warning. Our policy says [we have frozen stylistic rules](https://eslint.org/blog/2020/05/changes-to-rules-policies#what-are-the-changes) and there are other ways to accomplish the same thing (creating a custom rule, using `no-restricted-syntax`, etc.).
> 
> **TSC Question:** Should we accept this proposal?

**btmills:** Given @mdjermanovic's [`no-restricted-syntax`](https://github.com/eslint/eslint/issues/13299#issuecomment-656335560) equivalent, I think we can safely close without even preventing people from getting this behavior themselves if they want.

**mdjermanovic:** I think this rule being in the `Best Practices` category makes confusion. If it's really best practice to disallow `void` in any context (aside from implicit arrow return) then the option would make sense.

**nzakas:** I think this rule was copied over from JSCS

**nzakas:** So we probably stuck it in Best Practices as some sort of compat decision

**kaicataldo:** Agreed with @mdjermanovic about the category not making sense. And given that this can be achieved with `no-restricted-syntax`, I don't think we should accept this.

**mdjermanovic:** Maybe we should also change its category to Stylistic Issues

**btmills:** Agreed, given all the debate calling it a Best Practice seems a stretch, so I'd also be in favor of changing it to Stylistic

**kaicataldo:** I think it's worth opening an issue for that, but agreed 👍

**nzakas:** Okay, it sounds like there's a consensus that we don't want to accept this new option and we do want to change the category to Stylistic Issues. Agreed?

**kaicataldo:** 👍

**btmills:** 👍

**mdjermanovic:** 👍

**nzakas:** Awesome. @mdjermanovic will you take the follow up to open a new issue for the category change?

**mdjermanovic:** Yes

**nzakas:** Thanks!

**nzakas:** Procedural note: the notetaker (@btmills) goes through and updates each issue we discuss with the results of the discussion

**mdjermanovic:** 👍

**btmills:** And that's not a hard rule - if you're already involved in a discussion and get to it before I do, much appreciated - but I'll update anything that hasn't been once I'm done with the notes

**nzakas:** Next item:

**nzakas:** > Now that eslint/rfcs#9 has been merged, I'd like to suggest we close https://github.com/eslint/rfcs/pull/5, https://github.com/eslint/rfcs/pull/14, https://github.com/eslint/rfcs/pull/21, and https://github.com/eslint/rfcs/pull/54. These all have to do with changing how configuration works, and given that we're heading in a new direction, it seems that we should be able to close these.

**nzakas:** This is kind of a followup to our discussion last week about how to deal with RFCs that are aimed at solving the same problem

**btmills:** 👍

**kaicataldo:** It's unfortunate @mysticatea isn't here to vote on this, but agreed 👍

**mdjermanovic:** 👍

**nzakas:** Looks like @mysticatea just signed on

**nzakas:** @mysticatea if you're around, we are deciding on closing the remaining open config-related RFCs now that the simple config RFC has been merged.

**nzakas:** We do have four votes to close the remaining open RFCs, so if you'd like to chime in, we are ready 🙂

**mysticatea:** I'm sorry for late. :+1: for closing in favor of new direction.

**btmills:** 👋 glad you could join!

**nzakas:** Okay, thanks! It looks like we have reached consensus on closing the remaining open config-related RFCs.

**nzakas:** @btmills are you up for doing that as part of the post-meeting actions?

**btmills:** Will do 👍

**nzakas:** Thanks!

**nzakas:** Next item:

**nzakas:** > There are several RFCs for parallel linting: https://github.com/eslint/rfcs/pull/4, https://github.com/eslint/rfcs/pull/11, and https://github.com/eslint/rfcs/pull/42. None of these take into account the new configuration system or the `ESLint` class. As https://github.com/eslint/rfcs/pull/42 is the most recent, we could decide to leave that open and close the others, or close all three depending on @mysticatea's interest in updating his RFC.

**nzakas:** Based on the roadmap discussions, I'm going to assume @mysticatea would prefer to continue working on the latest RFC.

**btmills:** 👍 to closing the first two, and defer to @mysticatea who can choose whether to close and start fresh or continue working on the existing RFC

**kaicataldo:** 👍

**nzakas:** 👍

**mdjermanovic:** 👍

**nzakas:** @mysticatea do you have a preference for how to proceed?

**mysticatea:** Actually, my prototype (https://github.com/eslint/eslint/tree/very-rough-worker-threads-poc/lib/eslint) is around ESLint class.

**nzakas:** Oh cool. Then maybe the next step would be to update the RFC to reflect what the prototype does?

**mysticatea:** Yes.

**nzakas:** Okay, sounds like a plan. So we will close the other two in favor of the new one and @mysticatea will update the RFC to take into account the prototype. Agreed?

**mysticatea:** 👍

**btmills:** 👍

**kaicataldo:** 👍

**mdjermanovic:** 👍

**nzakas:** Excellent

**nzakas:** I have a couple of other items I'd like to discuss, but before getting to that, does anyone else have anything they'd like to discuss?

**btmills:** Shall we get the release issue out of the way since we know we need to cover that?

**nzakas:** Sure, we can do that

**btmills:** At some point, I'd suggest that you shadow one of us on a release @mdjermanovic so you see how the process works, whenever's convenient

**kaicataldo:** I'm available to run the release. Related to this, one thing I'd like to get on the same page about is https://github.com/eslint/eslint/pull/13416. What further work needs to be done before we can land this?

**mdjermanovic:** I believe it's ready, but @mysticatea should confirm

**mysticatea:** The remaining step is, releasing espree and updating package.json.

**kaicataldo:** Okay, great. In that case, I can commit to reviewing that tonight and doing that work as part of the release.

**nzakas:** Awesome, thanks @mysticatea and @kaicataldo . In the future, can we try to do smaller pull requests? The more files touched, the harder it is to merge.

**nzakas:** In the past we've typically done batches of 10-20 rules per PR to give us some breathing room.

**mysticatea:** I will try..

**nzakas:** That's all we can ask 🙂

**nzakas:** Okay, any other items anyone wants to discuss?

**mdjermanovic:** There is an open question in https://github.com/eslint/eslint/issues/13349 - should be break legacy-format rules (those that export a function)

**mdjermanovic:** If that was suggested, I'm not sure

**nzakas:** My last comment was that we should update `RuleTester` to throw for legacy-format rules but not actually throw during linting so as not to break any current behavior

**nzakas:** And then do the breaking of legacy rules in a major release

**mdjermanovic:** Yes, but the end result will be the same - disallowing rules that follow the old spec

**nzakas:** Correct

**nzakas:** It's just the timing that changes

**nzakas:** So we're giving the plugin owners as a heads up that things will be changing while not affecting the end users

**mdjermanovic:** I'm fine with that, just wanted to make sure that was the intention 👍

**nzakas:** Yup, you got it

**nzakas:** Okay, I've got a couple of hopefully quick issues

**nzakas:** We discussed in the chat last week about potentially hiring a community manager who's primary job would be to triage issues and pull requests, and to help answer questions in Discord and maybe on Twitter. The idea is to pay someone $25/hour up to 10 hours each week (minimum of 3). Since we are chronically behind in responding to issues, this seems like a way to give us some breathing room. A couple people said they were in favor, but wanted to bring it up here to get everyone's opinion.

**kaicataldo:** I think it's worth trying out 👍

**btmills:** I'm in favor 👍

**mdjermanovic:** sounds good to me 👍

**mysticatea:** 👍

**nzakas:** Okay cool. So the tricky part is we'd need to get a signed agreement to do that, but ESLint isn't a legal entity, so we can't do that ourselves. I have a meeting next week with Open JS Foundation to discuss our options. As I mentioned in the chat, the worst case scenario is that I can do it under my LLC, though I think it would be better for everyone if it was under the Foundation. I'll let you know what happens.

**kaicataldo:** Thanks for taking the lead on that

**nzakas:** Sure thing. I'd like to get us out of being chronically behind on dealing with issues. 🙂

**nzakas:** The other thing I wanted to discuss:

**nzakas:** We already have a `team` repo. I'd like to start using that to document how we operate, different procedures, etc.

**nzakas:** As well as keeping track of tasks that don't belong to other repos

**nzakas:** For instance, if you want to request to create a new repo under the org, you could open an issue for that.

**nzakas:** And we could have an issue template for on-boarding new TSC members, reviewers, and committers

**nzakas:** I don't care if it remains private or we make it public, I'm much more interested in capturing tasks and information that are right now just free-floating

**nzakas:** Like the issue with Jenkins and the npm token has happened more than once, it would be nice to capture that in case it happens again when I'm not around

**kaicataldo:** Just having a decision registry of some sort (which we could get through GitHub issues) would be helpful

**kaicataldo:** I'm supportive of this idea 👍

**kaicataldo:** I forgot that this repo existed 😆

**btmills:** I like it. Do you imagine it taking the place of some of the discussions that currently occur on the mailing list (e.g. nominating new team members), or will those stay as-is?

**nzakas:** I think nominations will still be mailing list material due to the sensitive nature of those discussions

**nzakas:** But other stuff we could migrate off of the mailing list for sure

**btmills:** 👍 sounds good

**mysticatea:** Sounds good to me. 👍

**mdjermanovic:** 👍

**nzakas:** Okay, so it sounds like we're ready to give this `team` repo a try. I'll endeavor to get it setup with some of what I think are the initial things we need soon.

**nzakas:** We are out of time, so unless anyone has one last thing to discuss, we can all go back to avoiding coronavirus 😕

**btmills:** Nothing else from me. Thanks all! 👋

**kaicataldo:** Nothing from me! Stay safe, all ❤️

**mdjermanovic:** Thanks! 👋

**mysticatea:** Thank you! 👋

**nzakas:** Bye!

**btmills:** Meeting notes PR: https://github.com/eslint/tsc-meetings/pull/194
