# 09/03/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**mdjermanovic:** Hi!

**nzakas:** Pulling up notes from last time

**nzakas:** No notes, let me quickly scan the transcript

**mdjermanovic:** I think we have only the transcript

**nzakas:** (I sound like an AI!)
 * 😁 @fasttime

**nzakas:** It looks like @mdjermanovic had an action item to document deprecating previous major version packages

**fasttime:** I did that.

**mdjermanovic:** I think it was @fasttime's action item,  and it has been finished

**nzakas:** Oops yes, misread the transcript

**mdjermanovic:** https://github.com/eslint/eslint/commit/ad74a8dada2aaa17bfd0b8cc7b4119ff7a8ac04b

**nzakas:** I had action items to deprecate v9.x packages and announce on social media. I did both.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I also mentioned putting together an RFC for the new JS/TS parser, which I did.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'll take an action item to create notes for last meeting.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's start with statuses not already mentioned. 🙂

I worked on the JS/TS parser RFC, did a couple of releases, and started getting OpenAI wired into our release process now that GitHub Models is retired.

**mdjermanovic:** I finished file-entry-cache upgrade (pending one approval) and was reviewing PRs and triaging issues as usual

**fasttime:** I've been mostly busy reviewing PRs and triaging issues. Besides that I fixed a bug with debug calls in the main repo.

**nzakas:** All right, let's talk availability for the next couple of weeks.

I'm still a bit up in the air. I was feeling a bit better but now feeling worse again, so could be anywhere from 1-5 hours each week.

**fasttime:** For me, it will be around 7 hours per week as usual.

**mdjermanovic:** I'll probably be able to work 1-1.5h daily

**nzakas:** RFC Duty:
This week - @mdjermanovic 
Sept 7 - @nzakas 
Sept 14 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We've got a couple of things on the agenda for today

**nzakas:** > Agenda item: We have a couple of popular plugins that are refusing to update for v10: [jsx-eslint/eslint-plugin-jsx-a11y#1075](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1075) [jsx-eslint/eslint-plugin-react#3956](https://github.com/jsx-eslint/eslint-plugin-react/issues/3956)
> 
> This causes a lot of confusion and frustration, and the author seems unwilling to do anything to resolve it.
> 
> Should we fork these plugins into eslint-community so we can update them ourselves?

**mdjermanovic:** Hmm, yeah, it's already 7 months past the first v10.x release, that seems too much

**mdjermanovic:** Aren't there already some alternatives for these plugins?

**mdjermanovic:** Like https://www.npmjs.com/package/@eslint-react/eslint-plugin

**nzakas:** Ah good call.

**nzakas:** Is there one for JSX-a11y too?

**nzakas:** Doesn't look like it.

**mdjermanovic:** I see `eslint-plugin-jsx-a11y-x` mentioned on the issue

**mdjermanovic:** That would be this package, I'm guessing: https://www.npmjs.com/package/eslint-plugin-jsx-a11y-x

**fasttime:** I guess so. It has only 64k downloads per week though

**nzakas:** It's also only four months old and the README still hasn't been updated for `defineConfig()`

**nzakas:** It has some of the rules from the original but not all

**nzakas:** Also hasn't been touched since the last release. Because it already exists, perhaps the best path here is to ask if they'd like to donate it to eslint-community, rather than starting a new one from scratch?

**mdjermanovic:** It supports ESLint v10, per its package.json

**mdjermanovic:** Sounds good to me

**fasttime:** I'm fine with that, too. Who should ask them?

**nzakas:** It sounds like we've agreed to:
- Recommend `@eslint-react/eslint-plugin` as a replacement for `eslint-plugin-react`
- Reach out to `eslint-plugin-jsx-a11y-x` to see if they want to donate to eslint-community

**nzakas:** We can ask the community team folks
 * 👍 @michaeldeboey, @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/21113

**nzakas:** This was added to the agenda by a contributor

**nzakas:** ```js
/* eslint array-callback-return: "error" */
const grouped = Object.groupBy(inventory, ({ type }) => {
    if (type === "fruit") {
        return "fruit";
    }
    // forgot to return
});
```

**nzakas:** The question is whether this pattern belongs in the `array-callback-return` rule or if there should be a new rule

**mdjermanovic:** `Object.groupBy()` and `Map.groupBy()` are ECMAScript 2024 features, so it makes sense to support them

**nzakas:** This isn't related to arrays at all, so definitely doesn't belong in `array-callback-return`

**mdjermanovic:** Yeah. The easiest way would be to update `array-callback-return` but these are not array methods

**mdjermanovic:** Though they take an array as the argument, so that might be a justification

**nzakas:** Do we want to create a rule that specifically targets `Object.groupBy` and `Map.groupBy`? Or do we want something a bit broader so we have room to add to the rule if necessary?

**fasttime:** I think they can also take a generic iterable.
 * 👍 @mdjermanovic

**nzakas:** The first argument can be an iterable, yes

**mdjermanovic:** If we are in favor of adding a rule for these checks, then I'd vote for something a bit broader so we could bundle new methods into it in the future
 * 👍 @nzakas

**nzakas:** I agree. I think a new rule that targets these methods and also has room to grow would be a good approach.

**mdjermanovic:** Would we leave array methods to `array-callback-return` or move everything into the new rule

**nzakas:** So like a generic `callback-return` rule?

**fasttime:** Would that also encompass callbacks of other built-in methods, like those of Promise objects?

**mdjermanovic:** I believe we had rule named `callback-return` in the core at some point, so reusing the same name might be confusing
 * 👍 @fasttime

**mdjermanovic:** https://archive.eslint.org/docs/rules/callback-return

**mdjermanovic:** But I'm in favor of making a generic rule

**mdjermanovic:** Just maybe with a different name

**nzakas:** Okay yeah, it seems like we're in agreement. Let's circle back on the issue for naming.

**mdjermanovic:** We could discuss this on the issue too
 * 👍 @fasttime

**nzakas:** We've agreed:
1. `Object.groupBy` and `Map.groupBy` do not belong in `array-callback-return`
2. We should create a new rule that covers both array callbacks and these new methods
3. We'll discuss further on the issue about the name of the new rule and what else it should cover
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, those are the only two agenda items we had. Anything else anyone would like to discuss before do contributor pool?

**mdjermanovic:** Nothing in particular for today on my side

**fasttime:** Nothing from me, either.

**nzakas:** All right then let's get the contributor pool up

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-09-01-contributor-pool.md

**nzakas:** Budget is $882.60 for last month

**fasttime:** No really big PR as it seems.

**nzakas:** This one seems too small to consider: https://github.com/eslint/eslint/pull/21251
 * 👍 @fasttime

**mdjermanovic:** Yeah, that's a small one. I labeled it because they caught a regression in a recent release and provided a fix quickly

**nzakas:** Ah gotcha. Then let's keep it in. That's important.

**fasttime:** I also always add the label to non-trivial contributions, I think that's fine, since we review those PRs before deciding a reward.
 * 👍 @mdjermanovic

**nzakas:** Shall we do $100 each and $200 for Sethamus?

**mdjermanovic:** Sounds good to me

**fasttime:** Okay 👍

**nzakas:** All right, I'll take the action item to let them know.

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** I've already released `eslint/rewrite` packages today, so it would be just `eslint` package for tomorrow's release, I think
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's it for today. Thanks everyone!

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye 👋
