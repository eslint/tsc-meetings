# 01/27/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Hi all!

**nzakas:** I hope everyone is staying safe and healthy, let's jump right in. @btmills are you good for notes?

**btmills:** yep!

**nzakas:** Thanks!

**nzakas:** The only thing on the agenda is to go over the roadmap issue.

**nzakas:** https://github.com/eslint/eslint/issues/15383

**nzakas:** The point of this issue was to highlight what big ideas people had for ESLint going forward that weren't already tracked somewhere else

**nzakas:** With the ultimate goal of publishing things to our public roadmap so everyone can know what to expect

**nzakas:** So...aside from me there weren't a ton of other "big ideas" 🙂

**nzakas:** So let's go over those here and see what we think, and then we can add others if anyone forgot to add them.

**btmills:** the one I'm most interested in, parallel linting, is already tracked with a long discussion. but it's still a ways off, and a few of the ideas on the issue help to move us in that direction
 * 👍 @nzakas

**nzakas:** I'm going to list each of the "big ideas" one by one. Add a thumbs up or thumbs down to indicate your support, and we can discuss questions along the way. The goal here is just to see if there's general support for a direction, not to discuss implementation details.

**nzakas:** 1. Switch the ESLint repo to ESM
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** 2. Allow async parsers
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** (We can talk about prioritization and assignments at the end, btw)

**nzakas:** 3. Allow async rules
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** 4. Enable typechecking (via `tsc` and JSDoc comments) in our repos, and expose types from our npm packages.
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** 5. Allow easier linting of non-JS languages (CSS, Markdown, etc.)
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** 6. Create an <eslint-editor> web component (like the editor on the demo, just portable)
 * 👍 @nzakas, @btmills, @mdjermanovic

**btmills:** for the web component, would the goal be to have a self-contained implementation for our demo, or are there other consumers we'd be trying to support as well?

**nzakas:** The top-level goal is to allow us to embed the demo into rules documentation pages so people can try out different settings live. But if we're going through the trouble to do that, we might as well just publish it as its own thing.

**btmills:** oh, cool!

**btmills:** slight concern about scope creep, so I'd want to define what's not a goal, but definitely 👍 to enabling that

**nzakas:** Yeah -- my idea was basically that it's just the editor without any chrome or controls. The only built-in stuff would be the squiggles under linting errors and possibly tooltips. Everything else would have to come from the surrounding page (the editor would expose JS APIs to tweak config)

**nzakas:** Does anyone want to propose anything else? (Outside of parallel linting, which everyone already wants.)

**nzakas:** I'll take that as a no 🙂

**nzakas:** So here's my take on prioritization, let me know what you think:

**nzakas:** 1. Allow async parsers
2. Enable typechecking (via tsc and JSDoc comments) in our repos, and expose types from our npm packages.
3. Switch the ESLint repo to ESM
4. Create an <eslint-editor> web component (like the editor on the demo, just portable)
5. Allow easier linting of non-JS languages (CSS, Markdown, etc.)
6. Allow async rules

**mdjermanovic:** Sounds good to me

**nzakas:** Oops sorry, meant to put Allow async rules last

**nzakas:** There we go

**mdjermanovic:** By async rules, we mean async `create()` ?

**btmills:** ordering makes sense

**btmills:** Having migrated codebases to types in the past, I imagine that step will outlast some of the others as a gradual migration, but it's also one where we ought to be able to get community help

**nzakas:** @mdjermanovic I think we need to look at async all the way down, including the visitor methods.

**nzakas:** But that's best discussed in an RFC 🙂

**nzakas:** As we are agreed on prioritization, I'd like to discuss who wants to handle what. Assuming everyone can only handle one big task for 2022 is probably safest, so what is everyone's most interesting task?

**nzakas:** For me it's async parsing

**mdjermanovic:** async parsing as well

**btmills:** not async parsing for me 🙂
 * ☺️ @nzakas

**btmills:** non-js langs has been on my todo list for a while, and I suspect we're closer than we think we are, but tsc is higher on the priority stack, and it's one that we (or in this case I) could put in motion and then solicit help from the community

**nzakas:** So we'll give tsc to @btmills

**nzakas:** @mdjermanovic you can take async parsing. I've still got to finish up the website and flat config, and I think async parsing is a high enough priority that it would be good to get that started ASAP so we can experiment with things like using the Deno JS parser.
 * 👍 @mdjermanovic

**nzakas:** Would anyone object if I focused on the web component when I'm done with the website and flat config? I know it's a lower priority, but after going through all this config stuff, jumping right into another migration isn't very appealing to me. 🙂 (Plus, I think we may be able to get some help from the team on that one.)
 * 👍 @mdjermanovic

**btmills:** no objections here, and it'll be a really cool follow-up to the website that you've already been working on

**nzakas:** Okay, then we are set!

**nzakas:** @btmills can you take the action item to ensure that each of those tasks has an issue and that they're marked on the roadmap project? (I think a few actually have issues already opened - I'm pretty sure async parsing does, at least.)

**btmills:** will do

**nzakas:** Thank you, sir

**nzakas:** Website update time!

**nzakas:** The marketing website is basically finished at this point, minus the animation on the homepage. I'm meeting with Sara next week to go over that and then we should be able to do a public beta and flip the repo public to gather feedback. I still need to setup scripts to pull in the sponsorship data live, but even without that, we should be able to get some good feedback.

**nzakas:** She's working on the docs site now and it's also close to completion (much simpler than the marketing site). It's going to be more about how we integrate it into the main repo than anything else. I'll be setting up docs.eslint.org to preview it next week.

**nzakas:** The big task there is integrating the Algolia search, but we have a decent plan for that.

**nzakas:** And now I have direct contacts at Algolia if we get stuck anywhere

**nzakas:** The demo/playground will be last

**nzakas:** I'd like to get us switched over to the new marketing site, at least, by the start of March.

**nzakas:** Questions on any of that?

**btmills:** that all sounds great
 * 👍 @nzakas

**nzakas:** Yeah, I'm happy with how it's turning out. We've hit a few scheduling snags because Lebanon is a bit of a mess and the holidays, but I think we'll have everything wrapped up by end of March.

**nzakas:** Okay, we need to reward contributors for January

**nzakas:** We have the usual folks in Discord: JackNapis and Kepeniukas
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** Yiwei-Ding for https://github.com/eslint/eslint/pull/15459. It isn't merged yet, but looks finished

**nzakas:** Last time we agreed to wait until PRs are merged

**mdjermanovic:** Okay, we'll leave that one for the next month then.

**mdjermanovic:** gfyoung for https://github.com/eslint/eslint/pull/15439
 * 👍 @nzakas, @btmills

**btmills:** captbaritone did a good bit of work on the bug report and fix for https://github.com/eslint/eslint/pull/15486
 * 👍 @nzakas, @mdjermanovic

**nzakas:** olgashi for https://github.com/eslint/eslint/pull/15522
 * 👍 @btmills, @mdjermanovic

**nzakas:** Not the most prestigious job, but a huge help

**mdjermanovic:** JoshuaKGoldberg for https://github.com/eslint/eslint/pull/15514

**btmills:** fasttime with the report and fix on https://github.com/eslint/eslint/pull/15520
 * 👍 @nzakas, @mdjermanovic

**nzakas:** He has turned this down previously, otherwise, I'd agree

**nzakas:** That seems like a good list. Everyone should get at least $100. Is there anyone who should receive more?

**mdjermanovic:** gfyoung for $200. Their work included work on the `ignore` package to make it (again) compatible with ESLint
 * 👍 @nzakas, @btmills

**btmills:** @mdjermanovic for the notes, are you also 👍 for the Discord contributors?

**mdjermanovic:** Oh, sorry. Yes, of course.

**nzakas:** Okay, I'll contact everyone to let them know.

**nzakas:** Let's talk about the release tomorrow

**mdjermanovic:** I can do the release tomorrow

**btmills:** thanks

**nzakas:** Can you check those Espree PRs before doing the release? I know one we're waiting for the CLA, but would be good to get the PRs in if they're ready.

**mdjermanovic:** One is still a work in progress, the other is waiting for CLA. If they sign tomorrow, I'll release Espree

**nzakas:** The WIP is basically done, just need to add `tsc` to the build step

**mdjermanovic:** Okay, if it gets finished I'll include it in the release

**nzakas:** Thanks!

**nzakas:** Any other topics before we wrap up?

**nzakas:** All right, let's call it. Thanks everyone!

**mdjermanovic:** Thanks!

**btmills:** 👋 take care!
