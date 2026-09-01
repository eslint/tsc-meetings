# 08/20/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Back to full strength 💪
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looks like we didn't have anything to follow up on from last time, so let's just into statuses.

I've been working on a new JS/TS parser (via Claude) and otherwise issue and PR triage.

**mdjermanovic:** I was only reviewing PRs and triaging issues past two weeks

**fasttime:** I was also busy with triaging and reviews most of the time.

**nzakas:** Availability the next couple of weeks.

For me, roughly 5 hours per week.

**mdjermanovic:** I expect to be available 2h per day next two weeks

**fasttime:** I expect to remain available about 7 hours per week the next weeks

**nzakas:** RFC Duty:
This week - @nzakas 
August 24 - @fasttime 
August 31 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We've got a couple of things on the agenda for today.

First item: https://github.com/eslint/eslint/issues/21209

> **TSC Summary:** This issue proposes deprecating npm packages of `eslint` v9.x that are end-of-life as of today.
> 
> **TSC Questions:**
>     * Should npm packages of ESLint v9.x be deprecated?
>     * If so, should we introduce a policy of deprecating npm packages once a major release line reaches end-of-life, and note it in the [Manage Releases](https://github.com/eslint/eslint/blob/main/docs/src/maintain/manage-releases.md) documentation?

**mdjermanovic:** We already did the same with ESLint v0.x-v8.x, so it makes sense

**nzakas:** I thought we had this documented somewhere already?

**fasttime:** We last deprecated old packages when we release v9, but we didn't have an item on the agenda for doing this with later major releases.

**mdjermanovic:** I think not yet

**nzakas:** We should definitely do that then.
 * 👍 @fasttime

**nzakas:** Who wants to take that as an action item?

**fasttime:** I can do that.
 * 🙏 @mdjermanovic

**nzakas:** Thanks!

**nzakas:** We should also announce this via social media channels. I'll take that.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Shall we mark v9.x deprecated as part of the release tomorrow?

**nzakas:** Or do it now?

**mdjermanovic:** I think it isn't related to the release, so we can do it now
 * 👍 @nzakas, @fasttime

**nzakas:** I can do that along with the social media post
 * 👍 @mdjermanovic

**fasttime:** Okay for me

**nzakas:** Okay, on to the next item:

> Agenda item: With a free Claude Max account, it opens up the possibility of taking some "big swings" on ESLint that I wouldn't have had the time to do otherwise. I'd like to get alignment on these:
> 
>     * **New parser** - A brand new parser that supports both JavaScript and TypeScript.
>     * **New evaluation tools** - If we want to do a new parser then the next step is to also create new versions of eslint-scope and code path analysis.
>     * **Bash plugin** - one of the top requested plugins on Twitter when I asked
>     * **Docker plugin** - Just something I really want 🙂
>     * **Async core** - has been on my todo list for a while

> Any other ideas for big swings?

**nzakas:** These are the things I'm interested in digging into with Claude, along with performance (couple of PRs already). I just want to make sure we all agree that these are things we want and are worth pursuing.

**mdjermanovic:** Async core was planned to be part of the complete rewrite of ESLint?

**nzakas:** Yes

**mdjermanovic:** So, that task is going to be part of the rewrite?

**nzakas:** Yes, I'd consider this as part of the rewrite work, not separate from it. I've had a very rough plan sitting on my computer for a while now that I just haven't had the time to push forward.
 * 👍 @mdjermanovic

**nzakas:** jeez, didn't realize I first posted about it two years ago 😅

**fasttime:** Sounds good for me, just I don't think I remeber the details of the discussion, yeah, that was a while ago... so that will include async parsers and async rules, right?

**nzakas:** Oh jeez, four years ago: https://github.com/eslint/eslint/discussions/16557
 * 👍 @fasttime

**nzakas:** TypeScript support two years ago: https://github.com/eslint/eslint/discussions/18830

**nzakas:** In any event, I feel like with Claude I can finally make progress on all of these. In just over two weeks I now have a half-decent parser that can handle JavaScript and TypeScript that's around 60% faster than Espree.

**nzakas:** Tweaking the API a bit but I anticipate I'll have an RFC some time next week
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I also have an equivalent of eslint-scope that can handle both JavaScript and TypeScript. 😁

**nzakas:** Okay, it sounds like we've agreed we want to move forward with these, so I will.

Anything else that's been on anyone's personal todo list that would benefit from AI intervention?

**mdjermanovic:** Nothing specific at the moment, but I'll let you know if anything comes up.

**fasttime:** We have an open PR to generate rule types from rule schemas: https://github.com/eslint/eslint/pull/20061

**fasttime:** I was thinking to improve on that approach with AI.

**nzakas:** Looks like that just stalled on review?

**fasttime:** Yeah, I will review it soon and see what can be done. It seems like something where AI could help a lot, because we would be able to compare the results with what we already have, so the risk of accidentally breaking something should be low.
 * 👍 @nzakas

**nzakas:** Any other topics?

**fasttime:** Will the async core also revamp code path analysis? Otherwise, maybe that could be another topic.

**nzakas:** I'm doing that as part of the parser/scope work
 * 👍 @fasttime

**nzakas:** so parser/scope/control flow all go together in one package
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay let's talk the release tomorrow

**mdjermanovic:** I can do the release tomorrow

**fasttime:** Thanks!

**mdjermanovic:** That would be just the `eslint` package, I believe
 * 👍 @nzakas

**fasttime:** It seems so.

**nzakas:** I think that's all for today. Thanks everyone!

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks! Bye!
