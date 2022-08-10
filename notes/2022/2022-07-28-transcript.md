# 07/28/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** howdy

**nzakas:** It's still just the two of us today, can you take notes?

**btmills:** yessir

**nzakas:** Thank you

**nzakas:** Looks like we have nothing on the agenda. Anything you'd like to discuss?

**btmills:** Following up from last week, I put together a draft technical writer post. Unless you've already had a chance to look through it and have something you want to talk about here, we can discuss that on the doc

**btmills:** That's it!

**nzakas:** Yeah, I was just going through and making a few edits before we started here. Overall looks great, there were just a few tweaks I wanted to make.

**btmills:** Perfect, I'm glad you have feedback

**nzakas:** One of the things I recently came to realize is that we really have three audiences for the docs: users, contributors (those who work directly in the ESLint repos), and developers (those who write custom rules, plugins, etc.)

**nzakas:** So I was just editing to make that point mostly. Anyway, Ill finish that up soon and then I think we will be good to post it.

**btmills:** Good point! I only thought about users and developers, but we should definitely include contributors

**nzakas:** Okay, I can give some updates.

**nzakas:** First, we now have a website team! 🎉 amaresh and harish agreed to join, and I also added kecrily, who wants to work on the Chinese docs specifically.
 * 🎉 @btmills

**nzakas:** I'll work on getting them added to the website too

**nzakas:** I also set up a support team, of which platinumazure is currently the only member (making the unofficial official).
 * 👍 @platinumazure, @btmills

**nzakas:** And probably the biggest news is that I opened a PR for FlatESLint:
https://github.com/eslint/eslint/pull/16149

**nzakas:** Clearly not too exciting because no one has reviewed it 😭

**btmills:** I'd say it's very exciting! Just daunting haha. But better to get it in sooner than later because it would only become more daunting on both sides

**nzakas:** It may seem daunting, but it's actually much simpler than what we have now

**nzakas:** No more jumping back and forth between `ESLint` and `CLIEngine` to figure out what's going on, it's all just in `FlatESLint`.

**btmills:** And the mental model is so much simpler that it might be possible to keep the whole implementation in mind at one time after getting up that curve once

**nzakas:** Yes! The only real weirdness is around ignores. That's partly historical because there's a mix of `.eslintignore` and config-based ignores, and also due to some special behavior in flat config that differs from eslintrc. I actually just found a bug in that behavior that I'll need to fix, but shouldn't prevent this PR from being merged since it's still experimental.

**btmills:** Oh neat. Once it's in, I'm excited to try translating some of my work config to see a real-world use case

**nzakas:** And I'll be interested for feedback.

**nzakas:** It really struck me how much easier it is to use when writing the docs

**btmills:** I'm glad you suggested getting this in early so we can start getting that feedback

**nzakas:** Like everything could fit on one page and I didn't struggle to explain things 😄

**btmills:** that's amazing

**nzakas:** Since we have no other agenda items, shall we do contributor pool?

**nzakas:** amaresh and harish for all their website work (they'll start invoicing in August)
 * 👍 @btmills

**nzakas:** brandongregoryscott for https://github.com/eslint/eslint/pull/16059
 * 👍 @btmills

**btmills:** lachlanhunt for https://github.com/eslint/eslint/pull/16090/files
 * 👍 @nzakas

**nzakas:** JounQuin for https://github.com/eslint/eslint/pull/16105
 * 👍 @btmills

**nzakas:** Rodzman for https://github.com/eslint/eslint.org/pull/251
 * 👍 @btmills

**nzakas:** kepeniukas said he's not able to receive funds, so we will just thank him in the notes
 * 👍 @btmills

**btmills:** that's all I see

**nzakas:** For Rodzman I'd do $300 for the translation, amaresh and harish $200 each, everyone else $100?

**btmills:** that sounds good 👍

**nzakas:** All right, I'll let them know

**nzakas:** Are you able to do the release this week?

**btmills:** Yes. Timing may be unusual - perhaps as late as Sunday - but I can do it before Monday for sure. I'll still give 2 days for patch candidates

**nzakas:** Sounds good to me.

**nzakas:** Especially if it gives FlatESLint a chance to make it 😄

**btmills:** how many reviews would you like on that before it goes in?

**btmills:** looks like a patch for `espree`, followed by a bump in `eslint`

**nzakas:** Ideally two, but I feel pretty confident that the tests are covering the most important cases so I'd be fine with one, as well. We don't need to announce it's availability immediately.

**nzakas:** There will be bugs, but it'll be easier to fix them as one-offs than trying to get everything right in this PR

**nzakas:** So if you take a look and you feel pretty confident, I'd say go ahead and merge it. If not, we can wait.

**nzakas:** The benefits of the `use-at-your-own-risk` entrypoint 🙂

**btmills:** Agreed. I'll see what I can do Saturday. For the highlights, I might say please only use it to provide us feedback and definitely don't use it in production

**nzakas:** That sounds good. You can point to the new docs and note that there will be a followup post with more details soon.

**nzakas:** I do plan on doing a multi-part series explaining why we are doing a new config system, the advantages, and how to use it

**btmills:** that'll be cool 🙂 once it's production ready, would also be nice to grab some case studies of popular open source projects or companies who are willing to share
 * 👍 @nzakas

**nzakas:** Okay, I think that's a wrap for today!

**nzakas:** Take care, stay safe

**btmills:** bye! 👋
