# 05/16/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy 👋

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Looks like we're all here, so let's get started. Just going to pull up last meeting's notes to review action items.

**nzakas:** Only action item was for me to set up the poll to see what people thought about how to organize the `@eslint/js` repo. I did that here: https://github.com/eslint/eslint/discussions/18428

**nzakas:** Looks like monorepo with separate packages won 73-26

**nzakas:** So, fairly decisive there.
 * 👍 @mdjermanovic

**fasttime:** It's fine

**nzakas:** At least gives us a direction to head in.

**nzakas:** As a bit of a change to how we run things, I'd like to try taking a moment for us to share what we've been working on since the last meeting. How does that sound?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll kick things off then.

**nzakas:** I spent a lot of time working on implementing the JS language object (https://github.com/eslint/eslint/pull/18448) per the RFC. This will set us up to swap in other languages soonish. 

I also worked on the compat utility and published the post for that. Then, continued seeking people out who've had bad migration experiences to see what could be done to help.

**nzakas:** @mdjermanovic want to go next?

**mdjermanovic:** I spent most of the time reviewing PRs

**mdjermanovic:** And checking whether everything will work well with the new `@eslint` packages

**nzakas:** Meaning `object-schema` and `config-array`?

**mdjermanovic:** Yes, `@eslint/object-schema` and `@eslint/config-array`. There I found out that building the Playground would fail
 * 👍 @nzakas

**mdjermanovic:** That has been fixed now

**nzakas:** @fasttime ?

**fasttime:** I've been fairly busy with my regular job, but I've tried to always keep an eye on the ESLint board.

**fasttime:** Worked on this PR: https://github.com/eslint/rewrite/pull/7

**fasttime:** I also reviewed the TypeScript config RFC: https://github.com/eslint/rfcs/pull/117

**fasttime:** And I've talked to the author of tsx to discuss some issues I observed while testing the implementation.

**fasttime:** That's almost all I've done.

**nzakas:** Thanks!

**nzakas:** I'd like to start doing this because it's not always obvious from GitHub activity what someone has been working on. 🙂
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And this leads into the first agenda item nicely:

> It seems like RFCs are not getting reviewed in a timely fashion. The most recent was open for two weeks before any TSC member commented (me). We need to be paying more attention to these. I'd like to suggest that we have a formal "RFC duty" where we rotate through each week who is responsible for caretaking RFCs.

**nzakas:** (Also open to other suggestions.)

**nzakas:** For the amount of work people are putting into these, we really shouldn't be leaving them without comment from the team for weeks.

**mdjermanovic:** The RFC duty sounds good to me

**mdjermanovic:** That of course doesn't mean that others (off-duty) should not be active on the RFCs if they have time

**nzakas:** That's correct. The idea is that this person would be the first responder to the RFC, so an initial round of comments comes in quickly.

**nzakas:** We all still need to check in on them, but at least while on RFC duty, it would be that person's responsibility to keep all of the open RFCs moving, including bugging everyone else to comment. 🙂

**mdjermanovic:** Sounds good to me

**fasttime:** I also think rotating the RFC duty is a good idea. We could try that for 4 or 6 weeks and see how it works.
 * 👍 @nzakas

**mdjermanovic:** I could take the first shift (next week)
 * 👍 @fasttime

**fasttime:** Then we could decide if we want to keep that or change the system.

**nzakas:** Yeah, we can review in another two TSC meetings and see how things are going.

**nzakas:** Week of May 20: @mdjermanovic
 * 👍 @mdjermanovic

**nzakas:** Week of May 27: @fasttime ?
 * 👍 @fasttime

**nzakas:** All right, then I'll take the week of June 3 and we can do another rotation after that.
 * 👍 @fasttime

**nzakas:** We should be sure to review the schedule each meeting to make sure we're all on the same page.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, next item:

**nzakas:** > Along the same lines, I'm finding that I need to re-ping the TSC multiple times on issues where I'm looking for feedback, sometimes over the course of multiple weeks. How can we tighten up the feedback loop?

**mdjermanovic:** There's a lot of context switching in this kind of project, and when switching between tasks, it takes a lot of energy to get back to the context to be able to provide some meaningful thinking. I usually start with tasks that feel like a high priority or look like they could be resolved quickly so that they don't pile up. But then new tasks that seem like a higher priority pop up and push the remaining ones down the waiting queue, so some end up waiting too long.

**mdjermanovic:** Perhaps we could introduce a rule for us that a ping/question must be responded to in a reasonable timeframe (3 working days?) to shift priorities a bit.

**nzakas:** I think part of the question is if those pings are being surfaced in an effective way?

**fasttime:** Sometimes I find it difficult to give a feedback immediately without reviewing the topic. This is in part why I tend to take time before providing feedback to topics I know little about.

**mdjermanovic:** You mean are people aware of the pings?

**nzakas:** Yes

**mdjermanovic:** I am
 * 👍 @nzakas

**fasttime:** I have a bookmark folder for pings, but it's entirely possible that I miss a ping sometimes.

**nzakas:** Well, let's start with this: how are you surfacing these pings? Through the Notifications page? Email? Something else?

**mdjermanovic:** Email

**fasttime:** Both email and GitHub notifications for me.

**nzakas:** I just do GitHub notifications

**nzakas:** It's not always obvious to me when something is waiting on me vs. something mentioned me at some point in the past. That's why I'm bringing this up.

**fasttime:** As I said, I don't usually forget about pings, but sometimes I don't know how to answer. But I could just reply with "I'll take a look later".

**nzakas:** Yeah, it's completely okay to want to take some time to review, but radio silence is difficult to deal with. I'd like to suggest not just "I'll take a look later" but "I need to time to review. I'll plan on responding by (some date)" so that it's less nebulous.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Noted. Works for me!

**mdjermanovic:** Agreed

**nzakas:** Okay, do we need to do anything to make these issues/PRs easier to find? A label? Add assignees?

**fasttime:** I think pings are okay.

**mdjermanovic:** We have the stale bot, perhaps we could shorten the times

**nzakas:** Issues are set at 30 days currently in the stale bot

**mdjermanovic:** Maybe we could set to 10?

**mdjermanovic:** Like with PRs

**nzakas:** We could, but we have a lot more open issues so it could also create a lot of noise

**mdjermanovic:** Then maybe a new label, like "waiting for team member's response" (or something shorter)

**nzakas:** "tsc waiting"?

**mdjermanovic:** Sounds good to me

**fasttime:** When would the label be removed?

**nzakas:** when everyone has responded?

**fasttime:** Or who should do that?

**fasttime:** So, the last to respond will remove the label?

**nzakas:** Yes
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, to summarize what we've decided: First, the person making the ping will add the "tsc waiting" label to the issue. Second, if others need some time to review first, they'll leave a comment saying so with an expected date. Last, when the last TSC member has posted their full response (not just the "I need time" comment), they'll remove the "tsc waiting" label.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, who can take the action item to create the label?

**fasttime:** I can do that.

**nzakas:** Thanks!

**nzakas:** All right, next item:

**nzakas:** > It seems like we are getting more reports of people being blocked on migrating to v9. Either they can't figure out how to migrate, or they're stuck by something in the ecosystem. What else can we do to help aid migration?

**nzakas:** As I mentioned, I think it's probably time to look at a migration tool. I'm not sure how effective it can be, but even if it gets things 80% of the way there, that seems like an improvement from the situation now.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I can take the action item to get that started.

**nzakas:** Any other ideas?

**fasttime:** I have a tool to make eslint-env comments work with flat config. Could move that to a repo in ESLint.

**fasttime:** Although eslint-env comments are probably not the biggest problem about migrating.

**nzakas:** Yeah, I'd honestly be fine with that not working for people. That's an easy fix (assuming people read the docs, which, apparently, many just don't).

**nzakas:** I'm much more concerned about the config file itself.

**fasttime:** Sure. I think a migration tool would help.

**nzakas:** It will help to a point, but there are a lot of people doing a lot of weird things with ESLint.

**nzakas:** Like today I went and submitted a PR to update the Rush Stack eslint-patch tool: https://github.com/microsoft/rushstack/pull/4719

**nzakas:** I just don't know...do we need to start tracking down plugins and tools that are lagging and submit PRs? Do we need to apply some kind of pressure?

**nzakas:** Do we need to offer bounties?

**fasttime:** Maybe we could just ask if they need help?

**fasttime:** typescript-eslint has been working on upgraing to ESLint v9 for a while, and they're still not done.

**fasttime:** Here is the issue: https://github.com/typescript-eslint/typescript-eslint/issues/8211

**fasttime:** Oh, they just closed it!
 * 😆 @nzakas

**fasttime:** Never mind I guess 😄

**fasttime:** This will help many repos migrating I think.

**nzakas:** It should.

**nzakas:** I think updating eslint-transforms will also help: https://github.com/eslint/eslint-transforms/issues/25
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Once that's done, it will hopefully be easier to help update rules for others too.

**nzakas:** So really, this is a two-sided problem: 1) from the user perspective, they want their config to work, but it sometimes won't because of 2) plugins are slow to update.

**nzakas:** Okay, it seems that we've got the plans for the migration tool and the transforms, so hopefully that will help move things along.
 * 👍 @mdjermanovic

**nzakas:** I know we're running out of time, so I'll just ask that everyone please respond to this comment some time soon: https://github.com/eslint/eslint/issues/18385#issuecomment-2115516328
 * 👍 @mdjermanovic

**nzakas:** Let's talk about the release.

**fasttime:** I can do the release tomorrow.

**mdjermanovic:** Thanks!

**nzakas:** Thanks!

**fasttime:** Will some of you guys be around in case I get stuck?

**mdjermanovic:** When do you plan to start?

**fasttime:** Today's meeting time? Or do you prefer a bit earlier?

**mdjermanovic:** Both are fine with me

**fasttime:** Then at 10 PM CEST like today?

**mdjermanovic:** Deal, I'll be online

**fasttime:** Thanks!

**nzakas:** Looks like we're ready for a `@eslint/create-config` release: https://github.com/eslint/create-config/pull/112
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Yeah, I can do that tomorrow after the ESLint release.
 * 👍 @mdjermanovic

**nzakas:** Then just `eslint` and `@eslint/js`?
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**nzakas:** All right, sounds like a plan. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks!

**fasttime:** Thanks, see you 👋
