# 10/07/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Hi there!

**nzakas:** It's going to be just you and I today, so if you can take notes I can drive.

**btmills:** works for me

**nzakas:** Cool!

**nzakas:** So let's start with v8. It seems like we didn't have any significant feedback after the RC, so I think we are ready for the final release.

**nzakas:** The one last thing I'd like to resolve, though, is this: https://github.com/eslint/eslint/issues/15036

**btmills:** exciting!

**nzakas:** I think the path of least resistance is just to unfreeze the API. I'm not super happy about that, but seems like the right decision in the short term.

**nzakas:** I did put together a PR for that: https://github.com/eslint/eslintrc/pull/56

**btmills:** I wouldn't want to do this for the new config system, but since it's temporary, I can live with it

**nzakas:** Totally 100% agree

**btmills:** and I'm relieved we have totally supported first class way to do this in the new system

**nzakas:** we *will* have 🙂

**btmills:** ("this" being load transitive plugins)

**btmills:** haha yes, key word there

**nzakas:** The `FlatESLint` approach has been working great so far. Very happy with the progress. It just feels so much lighter than the current way of doing things.

**btmills:** Good to hear!

**btmills:** and thanks for taking the extra time to clarify that plan this week

**nzakas:** Sure thing. I slightly fear I may need to do the same thing with `Linter`, but I'll see once I get closer to that part of the code.

**btmills:** eh, even if we do, my feelings are similar: it's temporary for a migration, and it makes deleting the old way later easier

**nzakas:** The current config system is impressively parasitic 🙂

**nzakas:** Okay so, are you available to do a release in the next couple of days?

**btmills:** yes, I can do it!

**btmills:** I'm not quite sure what my plans look like yet, so I'll post on the issue in advance when I have a better idea when I'll be doing it

**btmills:** the plan will be to release `@eslint/eslintrc` with that change and upgrade it in `eslint` first

**nzakas:** Sounds good 👍

**nzakas:** Thanks for handling that

**btmills:** Since the last release was an RC, I'll only look for semver-patch changes to merge before the release
 * 👍 @nzakas

**nzakas:** Just a reminder to make sure the highlights section of the blog post takes into account everything since the first beta.

**btmills:** and after it's out, I can go ahead and remove the `--force` from `npm install` in the couple places we had to add it, though there's no rush and that can happen at any time if there's a time crunch
 * 👍 @nzakas

**nzakas:** since and including the first beta, that is

**btmills:** good call out, I'll double check that

**btmills:** anything else I should keep in mind?

**nzakas:** I think that's it

**btmills:** I'll of course check the issue and team chat beforehand in case anyone thinks of anything between now and then

**nzakas:** Sounds good

**nzakas:** Do you want to talk about the site redesign work at all?

**btmills:** You've been doing a good job keeping us updated on the process. Is there anything you need from us right now?

**nzakas:** Nope, just wanted to answer any questions that might have popped up. Overall I'm just super happy with the direction and the results.

**btmills:** me too, it's coming along very nicely

**nzakas:** We're now in the home stretch where I'm going into Figma and leaving comments about things that are missing or that I forgot. We have a plan to create illustrations for our common blog post types (release notes, sponsorship announcements, etc.) that I think will really help the blog feel more alive and interesting.

**btmills:** that's going to be very nice

**btmills:** illustrations are way outside my skill set

**nzakas:** We should wrap up the design phase by the end of next week, I believe, and Sara is ready to start with implementation too.

**btmills:** wow, nice job sequencing those

**nzakas:** Haha yes, me too.

**nzakas:** I wish I could say it was planned, but it was lucky that she was available 🙂

**btmills:** _something about the intersection of preparation and opportunity_
 * 💯 @nzakas

**nzakas:** In any event, I think we should be able to get the marketing site portion live by December and the docs section probably after the holidays.

**nzakas:** The playground will be interesting. Sara will do up the markup and CSS for that, but we'll either need to implement it ourselves or hire someone to do that, as she doesn't do apps.

**btmills:** Is the playground planned to be the last step? Depending on how we decide to go about that, they may want to do the whole thing themselves rather than hydrate existing markup and styling

**nzakas:** That's the plan right now. I think getting the markup and CSS figured out ahead of time will make the implementation a lot easier because we'll have a design system to work within rather than asking someone to duplicate some of the existing work.

**nzakas:** Take markup, stick into components, sprinkle JavaScript dust on it.

**btmills:** lol I'm enjoying the idea of JS dust ✨

**nzakas:** hehe

**btmills:** thanks for the updates, and great work so far

**nzakas:** Sure thing. It's been a lot of fun to work on.

**nzakas:** Oh, I just thought of something for v8: we were going to change up the rules page to drop categories: https://github.com/eslint/website/pull/848

**btmills:** Oh! Good call. So once I've done the v8 release, _then_ I can merge that PR in the website repository. Is that correct?

**nzakas:** Correct

**nzakas:** https://github.com/eslint/website/pull/848#issuecomment-874163497

**btmills:** got it

**btmills:** this'll be fun

**nzakas:** Easiest major release yet?

**btmills:** I'm not saying a word to jinx anything until it's actually out 🤞

**nzakas:** Ha. Fair

**nzakas:** Okay, let's look at contributor pool folks for September.

**nzakas:** So JackNapis and kepeniukas for Discord help (as usual)
 * 👍 @btmills

**nzakas:** archmoj for https://github.com/eslint/eslint/pull/14860 (that took a while)
 * 👍 @btmills

**btmills:** TimvdLippe for https://github.com/eslint/eslint/pull/14895

**nzakas:** AriPerkkio for https://github.com/eslint/eslint/pull/15053
 * 👍 @btmills

**nzakas:** Tim, unfortunately, can't accept in his country 😦

**btmills:** in that case I extend my appreciation

**nzakas:** for sure

**nzakas:** thomasgilmore95 for https://github.com/eslint/website/pull/869
 * 👍 @btmills

**nzakas:** and https://github.com/eslint/website/pull/871 (in progress)

**nzakas:** I'm going to throw platinumazure on the list. He can technically invoice us but never does, so I'd like to just give him a reminder. 🙂

**btmills:** ha! works for me

**nzakas:** Does $100 for each make sense?

**btmills:** Is JoshuaKGoldberg eligible to invoice? If not, https://github.com/eslint/eslint/pull/15000

**btmills:** $100 works

**nzakas:** He has declined to accept payment 🙂

**btmills:** wow, I'm 2 for 2

**nzakas:** Talent

**btmills:** or something haha

**nzakas:** Okay, I'll email them all to let them know.

**btmills:** thankya

**nzakas:** If you have some time, could you run through the issues in the Feedback Needed column and leave your thoughts? A few of those have been stuck for a while.

**nzakas:** (not right now, just whenever)

**nzakas:** We may be without Milos for a bit, so just want to try to keep things moving.

**btmills:** will do!

**nzakas:** Thanks!

**nzakas:** Anything else before we adjourn?

**btmills:** nope

**btmills:** take care 👋

**nzakas:** All right, then we'll wrap up. Good catching up

**nzakas:** You too!
