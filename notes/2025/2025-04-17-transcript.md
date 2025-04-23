# 04/17/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Just pulling up last meeting's notes

**nzakas:** Okay, doesn't look like we had any followups.

**nzakas:** Let's start with statuses. I've been working on CSSTree, adding types to the CSS plugin, and the MCP server.

**mdjermanovic:** I was mostly reviewing PRs

**fasttime:** I've been reviewing PRs and working on the multithread linting RFC.

**nzakas:** Okay, what's everyone's availability in the next couple of weeks? I'm still likely looking at about an hour each week day for at least another week.

**mdjermanovic:** I expect to be available 1.5-2 hours every day

**fasttime:** I expect to be working 10-12 hours a week.

**nzakas:** And RFC duty:
This week - @mdjermanovic
April 21 - @fasttime 
April 28 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Please double check that 😄

**nzakas:** It looks like we don't have any issues flagged for today. Are there any topics anyone would like to discuss?

**fasttime:** Nothing from my side.

**mdjermanovic:** Maybe this one. Any concerns about turning suggestions into autofixes? https://github.com/eslint/eslint/issues/19608

**nzakas:** Given that we couldn't find any rationalization for why it was a suggestion instead of an autofix, I'm okay with switching to an autofix.

**fasttime:** I'm fine with switching to autofixes. We could probably do the same thing in other rules like `no-object-constructor`.

**mdjermanovic:** Okay then, I'll mark it as accepted
 * 👍 @nzakas, @fasttime

**nzakas:** Any others?

**mdjermanovic:** There's another issue for which we have an ongoing PR and are already reviewing it but haven't officially accepted it yet: https://github.com/eslint/eslint/issues/19581

**mdjermanovic:** The proposal is to add a new rule

**nzakas:** The issue is marked as accepted?

**mdjermanovic:** Oh yes, it does, I didn't notice it. Please disregard then

**nzakas:** As for the name, I think `no-unassigned-vars` is fine.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Sounds good to me

**nzakas:** Any others?

**mdjermanovic:** Nothing else in particular from my side

**nzakas:** @fasttime ?

**fasttime:** No, I don't have any issues to discuss for today.

**nzakas:** Let's talk a bit about our process. I'm still finding that my PRs seem to be getting lost without reviews for weeks. Two examples:
https://github.com/eslint/rewrite/pull/172
https://github.com/eslint/eslint/pull/19592

**nzakas:** We talked a couple meetings ago about prioritizing each other's PRs. That doesn't seem to be happening. What can we do to tighten the feedback loop?

**mdjermanovic:** Yeah, those are relatively big ones. I couldn't find enough continuous amount of time to focus on reviewing them.

**mdjermanovic:** I could start reviewing the migrate-config one this weekend

**mdjermanovic:** For the MCP server, I'm not familiar with the subject so I'll need to do some learning first.

**fasttime:** The MCP PR has received a suggestion.

**fasttime:** Or rather, the respective issue.

**nzakas:** The issue received an idea for an enhancement, yes. I don't think it's necessary for the first version. I think it's more important to get something out and let people give us feedback than to wait for the perfect implementation.

**nzakas:** I also don't want other linters to beat us to getting an MCP server out.

**fasttime:** I could review the MCP PR this weekend I guess.

**nzakas:** Could I ask you to look at it before the release? 😄 Otherwise it's another two weeks.

**fasttime:** Tomorrow, I'm afraid I won't do it.

**nzakas:** 😢

**nzakas:** If you both can please prioritize these two PRs, I'd appreciate it.

**nzakas:** And I'd still like to know how we can avoid this going forward. I appreciate needing a chunk of time to review larger PRs, I just don't think putting it off for two weeks is an acceptable approach if we want to be able to ship things.

**mdjermanovic:** I'll like to learn about the subject and review the PR, but I don't think I'll be able to do it properly tomorrow

**fasttime:** For me, I'm not familiar with the topic, so I'd also have to find the time to learn one thing or two.

**fasttime:** But I think the documentation online is helpful, from what I saw.

**nzakas:** MCP is just another spin on REST, but specific to LLMs. resources are like GET requests, tools are like POST requests. That's about 70% of what you need to know: https://modelcontextprotocol.io/introduction
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And this specifically for servers: https://modelcontextprotocol.io/quickstart/server
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'd still like to talk process so larger PRs don't sit like these did. Any ideas?

**mdjermanovic:** Nothing in particular than what we said (but didn't follow the past two weeks)  - to prioritize reviewing

**nzakas:** Can we maybe agree to set one day aside each week to just focus on each other's PRs?
 * 👍 @mdjermanovic

**fasttime:** The one thing I could imagine is focusing more on reviewing PRs, but that's already around 50% of what I'm doing.

**fasttime:** Which day would it be?

**nzakas:** I don't think we need to coordinate, it can be up to each of us. Just an agreement that one each week we'll focus on our PRs.

**mdjermanovic:** Sounds good to me

**fasttime:** Sounds good to me, too.

**nzakas:** Okay, we've agreed to dedicate one day a week to reviewing each other's PRs. We'll see how it goes. Thanks!
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** `eslint` and `@eslint/js` as usual

**mdjermanovic:** eslint/rewrite packages? https://github.com/eslint/rewrite/pull/179

**nzakas:** That's the type updates. The other updates are bogus dev dependency stuff. I think I'd like to see if we can split out the `@eslint/core` release from the rest

**fasttime:** I believe the only interesting change since last version is https://github.com/eslint/rewrite/pull/178, but since that's not used in any repos yet, we could also delay the release.

**mdjermanovic:** Okay, then we'll postpone that
 * 👍 @fasttime

**mdjermanovic:** All three of the language plugins (`@eslint/json`, `@eslint/markdown`, `@eslint/css`) have pending releases. I could release them after the meeting if there are no objections
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's it for today. Thanks everyone ( and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye 👋
