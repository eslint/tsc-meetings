# 08/12/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Hey there!

**nzakas:** Milos won't be joining us today

**nzakas:** I'm typing a little slow due to a thumb injury so please bare with me

**nzakas:** bear with me? 😆

**btmills:** haha let's just blame that on the thumb

**nzakas:** 👍

**nzakas:** Are you set for taking notes?

**btmills:** yep

**nzakas:** Awesome, thanks.

**nzakas:** We do have a couple issues flagged, so we will hit those and then go over v8.0.0

**nzakas:** https://github.com/eslint/eslint/pull/14884

**nzakas:** First, I could use a review of this 🙂

**nzakas:** Second, bmish suggested adding some instructions to use eslint-plugin-eslint-plugin, and I wasn't sure if we wanted to be promoting plugins in a migration guide.

**btmills:** I'll read through tonight 👍

**btmills:** It looks like it's being suggested in a couple cases where something's changing in this release, right? So we'd be saying "hey, you'll probably want to make this change, and here's this third-party plugin rule that'll help if you'd like to use it", which is fine by me. It's basically ESLint's version of a codemod that libraries sometimes include for major releases

**nzakas:** Fair enough. I didn't have a strong opinion either way, just felt a bit odd.

**btmills:** (and I agree we don't have the bandwidth to adopt it as a first-party plugin)
 * 👍 @nzakas

**nzakas:** So we have agreed to include the suggested mentions of eslint-plugin-eslint-plugin.
 * 👍 @btmills

**nzakas:** Next: https://github.com/eslint/eslint/issues/14806

**nzakas:** > **TSC Summary:** This proposal seeks to add a check for `yield` into `no-unsafe-finally`
> 
> **TSC Question:** shall we accept this proposal?

**nzakas:** I wasn't sure this change made sense.

**nzakas:** To quote me:

**nzakas:** > I'm not sure if yield is unsafe in this situation. Unlike break, continue, return, and throw, yield doesn't actually exit the normal control flow of the function -- it just pauses and then picks up again after that. I'm not sure @hax's example is a problem, because it is the break statement that is preventing the second console.log() from firing

**nzakas:** But I'm still having trouble wrapping my brain around it

**btmills:** I feel like I need a Beautiful Mind-style diagram for this haha

**btmills:** Yeah, I agree with your quoted explanation. In these cases, `yield` inside `finally` functions like you'd expect `yield` anywhere else to function

**btmills:** Off the top of my head, I'm not imagining a use case where you'd want to `yield` inside `finally` (perhaps I want to yield some termination sentinel?), so assuming we close this, when I leave our explanation, I can suggest a no-restricted-syntax pattern that would catch `yield` inside `finally` for those who want it
 * 👍 @nzakas

**nzakas:** Okay it sounds like we are in agreement not to make this change.
 * 👍 @btmills

**nzakas:** So let's move on to v8.0.0

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** (Side note: I am very happy the project ID ended up as 8 for v8.0.0)
 * 😆 @btmills

**nzakas:** I went through and merged everything that was ready in the last week

**nzakas:** I didn't merge https://github.com/eslint/eslint/pull/14594 because it needs coordination with the website repo

**nzakas:** Oh and there were some outstanding issues

**nzakas:** just noticed

**nzakas:** I wouldn't consider this a blocker for doing a beta, though

**btmills:** I agree, not blocking

**nzakas:** Then there's the migration guide, which I think is basically ready at this point.

**nzakas:** Just need some eyes on it

**btmills:** Let's assume I approve that tonight then

**nzakas:** And I'm pretty sure I got code path analysis working: https://github.com/eslint/eslint/pull/14886

**btmills:** Nice! 👏

**nzakas:** 😅

**nzakas:** Just need another review on that

**nzakas:** It was quite the journey, and even now I feel like I only understand like 20% of what's happening.

**btmills:** The diagrams are crucial anytime I try to dive in. Looks like you've shared several on the thread, so that'll help review

**btmills:** I don't see code path analysis or rule updates as crucial for a first beta. We can continue to work on those as we go

**nzakas:** Yeah, I was just going to say the same thing.

**nzakas:** https://github.com/eslint/eslint/issues/14857

**nzakas:** We're at more than 50% of rules updated at this point, which I think is plenty for a first beta.

**btmills:** agreed

**nzakas:** I think some rules don't even need updates, we just haven't reviewed them all yet.

**btmills:** Yeah, it looks like Milos already checked off a handful

**nzakas:** Yup he's done a bunch

**nzakas:** So, how do we feel about doing a first beta tomorrow? 😄

**btmills:** I don't see any reason not to! Do you think we need to find a time when two of us can be online this weekend? First betas usually have a bit more manual work to them. I know we need to archive the v7 docs, for example, so we should have a list of those on the release issue either way

**nzakas:** I can't remember how docs work for betas

**nzakas:** I think we don't actually publish them

**btmills:** Neither can I, and I'm pretty sure I haven't done a first beta release before, so I'd have to go back and see what Ilya (probably) did

**nzakas:** https://github.com/eslint/eslint/blob/master/Makefile.js#L277

**nzakas:** So looks like we'd generate into /8.0.0/ automatically

**nzakas:** And not overwrite the current docs

**nzakas:** I don't think we need any manual intervention for docs other than the category removal stuff, which will probably not make it anyway

**nzakas:** In any event, I can be online if you'd like

**btmills:** okay so maybe it'll be easy! 🤞

**btmills:** I'm not yet sure when it'll be - sometime Saturday late afternoon US eastern time most likely - so I'll post in the team chat when I have a better idea. If you're available, great, if not I'll do my best

**nzakas:** Sounds good. Feel free to shoot me a text if you run into anything hairy, just in case I forget to check (I usually staff offline on the weekends)

**nzakas:** I'm very excited about this 🎉

**btmills:** I don't believe I have your number, can you DM it to me just in case? Hopefully not needed

**btmills:** Me too! This has been the smoothest major yet (so far, to avoid jinxing myself)

**nzakas:** Hehe

**nzakas:** Done

**btmills:** merci

**nzakas:** Okay, last thing: time to reward contributors for July!

**nzakas:** For Discord help: JackNapis, StephenWade, and kepeniukas
 * 👍 @btmills

**btmills:** brettz9, bmish, snitin315, and aladdin-add are all eligible for invoicing their time now, correct?

**nzakas:** correct

**nzakas:** Looks like we haven't had a lot of commit activity from outside the team

**btmills:** I'm looking at it as we've grown the team to include our best previously-outside contributors

**nzakas:** indeed

**btmills:** JoshuaKGoldberg for the work to finish up https://github.com/eslint/eslint/pull/14617
 * 👍 @nzakas

**nzakas:** So we can sit with those four if that's all we got. $100 each?

**btmills:** works for me

**nzakas:** All righty

**nzakas:** Thanks for reaching out to those plugins to get OC setup

**nzakas:** Another one I thought of was eslint-plugin-jsdoc, if you feel like reaching out to them

**btmills:** Sure, the first couple were so easy, let's press our luck!

**nzakas:** Hehe

**nzakas:** Anything else to discuss before we disband?

**btmills:** nope, that's all from me

**btmills:** thanks for handling everything while Milos and I were both on vacation last week

**nzakas:** 👍

**nzakas:** Hope you got a good rest

**btmills:** yeah! I'm pretty sure that's the longest I've been without writing or even looking at code in a decade

**nzakas:** Awesome!

**nzakas:** All right, I'll see you on the other side of v8.0.0!

**btmills:** take care 👋
