# 08/08/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi 👋

**nzakas:** It'll just be you and me today as @mdjermanovic is on holiday.

**fasttime:** Yes.

**nzakas:** Pulling up the notes.

**nzakas:** Oops, which it looks like have not been merged.

**fasttime:** Yeah, I also noticed that earlier today.

**nzakas:** Okay, merged now
 * 👍 @fasttime

**nzakas:** Looks like there's no action items from last time to review.

**nzakas:** So let's start with statuses. I'll go first.

**nzakas:** I've been working on the Markdown language plugin (https://github.com/eslint/markdown/pull/268), the alternate config lookup RFC (https://github.com/eslint/eslint/pull/18742), the JSON language plugin (https://github.com/eslint/json/pull/15), and the plugin-kit package (https://github.com/eslint/rewrite/pull/99).
 * 👍 @fasttime

**fasttime:** From my side, I've been busy most of the time with triaging and reviewing issues. Just did some work in `eslint/rewrite` to update the TS types.
 * 👍 @nzakas

**nzakas:** Looks like we don't have any issues or PRs tagged for the meeting today.

**nzakas:** Do you have any topics to discuss?

**fasttime:** Actually two things...

**fasttime:** First, we have this RFC that hasn't received any updates for a while: https://github.com/eslint/rfcs/pull/114 - This one also: https://github.com/eslint/rfcs/pull/116

**nzakas:** Yep, I left notes on both yesterday.
 * 👍 @fasttime

**fasttime:** Is there any action we can take to make progress on those?

**nzakas:** No, they're both blocked at the moment.

**fasttime:** Okay.

**nzakas:** I suppose for https://github.com/eslint/rfcs/pull/116 we could actually just have someone else work on the RFC.

**nzakas:** But the other one we're waiting on a dependency

**fasttime:** I think it would be good to have someone else working on that RFC if possible.

**nzakas:** Are you volunteering? 😄

**fasttime:** I'm just too busy with other stuff now without @mdjermanovic, but maybe someone else will pick it up.

**nzakas:** This is the problem with RFCs: it's nice to say that someone else should pick it up, but there usually isn't someone else willing or available.

**nzakas:** The best we can really do is just leave a comment and 🤞

**fasttime:** Fine to leave a comment. If nobody volunteers, I'll pick it up.

**fasttime:** That's a change that I think could be useful.

**nzakas:** All right, I'll leave a comment and we'll see what happens.
 * 👍 @fasttime

**fasttime:** So I'd actually like to work on it, it's just a matter of finding the time.

**nzakas:** I hear that.

**nzakas:** So that was topic 1, what is topic 2?

**fasttime:** Next, just a small thing I saw today: `eslint/code-explorer` and `eslint/eslint.org` have issue templates that include the `repro:needed` tag, but that tag doesn't exist. Maybe it used to be created but that has changed at some point.

**fasttime:** https://github.com/eslint/eslint.org/labels

**nzakas:** It doesn't matter if the tag doesn't exist. They get created the first time the template is used.

**nzakas:** It's a cheap and easy way to get consistency across repos

**fasttime:** I'm not sure, this issue for example doesn't have it: https://github.com/eslint/eslint.org/issues/606

**nzakas:** Huh, that's weird.

**fasttime:** Also, there should be a `repro:yes` label for consistency (we have that in `eslint/eslint`)

**nzakas:** Yup. Do you want to take the action item to add those?

**fasttime:** Yes, I will add the labels to all repos that have issue templates.

**nzakas:** Thanks!

**fasttime:** Anything else from your side?

**nzakas:** Yes, a few things to discuss.

**nzakas:** First, Code Explorer status: I'd like to get the outstanding bugs I've found fixed before releasing. So, that will hopefully be next week.

**nzakas:** Then we can announce at least the JSON plugin along with it. It would be nice to also announce the Markdown plugin, if you have time to review that PR.

**fasttime:** I will be able to review that in the weekend.
 * 🙏 @nzakas

**nzakas:** Overall, I think the language plugins stuff is coming along nicely. We'll need to update `@types/eslint` to include it. I can try to do that but I may need your help.

**fasttime:** Sure, which repos exactly?

**nzakas:** Sorry, not sure what you're asking. I meant we need to update the type definitions to include, for example, `language` in config objects.

**fasttime:** Ah, sorry. I though you were in need for help to update `@types/eslint` in repos like `eslint/markdown`

**nzakas:** Ah gotcha. That part I can handle. 😄

**fasttime:** I will update `@eslint/core` first so it can export CommonJS type declarations.

**fasttime:** Then I will see how `@types/eslint` can be updated with our own types.

**nzakas:** Sounds good. Thanks.

**fasttime:** Ideally, users shall be able to use the JS-specific type definitions that are currently included, but also switch to the more generic types for language plugins.

**nzakas:** Yeah, I'm not sure the right way to handle that, but we can discuss offline.
 * 👍 @fasttime

**nzakas:** Next up: contributor pool. https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-07-01..2024-07-31

**fasttime:** I haven't reviewed those, what do you think? They look more-or-less similar in effort.

**nzakas:** ota-meshi took 6 days to merge; akulsr0 took over a month. So, I'd do $100 and $200, respectively?

**fasttime:** Ah okay, yes that's fair 👍

**nzakas:** I'll let them know.

**fasttime:** Thanks!

**nzakas:** Let's talk the release tomorrow.

**fasttime:** I messed up a bit the last release because I created a release for `@eslint/js@10.0.0`

**nzakas:** Oh right, we should follow up on that. We couldn't unpublish it?

**fasttime:** I can do the release tomorrow and take extra care not to mess up...

**fasttime:** I sent an email to npm support asking them help to unpublish, but they couldn't help since I sent it from my account, which is not authorized to publish eslint to npm.

**fasttime:** So I sent again the same request using the account of eslintbot, but I didn't get a reply. Probably they answered to the email address of the bot instead of my @eslint.org address I specified in the request.

**nzakas:** Okay, I'll follow up with them.

**fasttime:** Thanks 🙏  Sorry for being such a monkey...

**nzakas:** These things happen. Just want to close the loop. 🙂

**fasttime:** Alright. Is it just `@eslint/js` and `eslint/eslint` tomorrow?

**nzakas:** Looks like it

**nzakas:** Since we will be releasing TypeScript config files, I'll write up a highlight for that and post it on the release issue. It deserves more than just a bullet point in the blog post.

**nzakas:** So you can copy-paste that into the blog post after the release

**fasttime:** Good idea!

**fasttime:** I will do the release at the same time of today's meeting
 * 👍 @nzakas

**nzakas:** Okay, any last topics before we go?

**fasttime:** Nothing else from me.

**nzakas:** All right, then we are done. Thanks! (and thanks @Sam3k for the notes!)

**fasttime:** Thanks 👋 Bye!
