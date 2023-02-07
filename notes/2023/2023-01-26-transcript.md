# 01/26/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Howdy!

**nzakas:** Looks like we are ready to go. @btmills can you take notes?

**btmills:** yessir

**nzakas:** Thanks!

**nzakas:** First item: https://github.com/eslint/rfcs/pull/99

**nzakas:** > **TSC Summary:** This RFC currently expects languages to provide their own matching engine similar to `esquery` and only JavaScript would use `esquery`.
> 
> **TSC Questions:**
> 
>     1. Should we say that languages must implement a CSS selector syntax for their selectors? This would require an `esquery`-like interface to work correctly.
> 
>     2. If yes to 1, should we try to make a generic `esquery` that could be used across all languages as part of the core experience for languages in ESLint?

**nzakas:** Just looking for some directional guidance here as I continue working on this RFC

**mdjermanovic:** We could allow language plugins to provide their own `NodeEventGenerator`, I think that would be the most generic solution.

**nzakas:** I'd prefer not to expose `NodeEventGenerator`, as I'm not sure that's how we'll do things when we rewrite the core

**nzakas:** I'd like something that will work regardless of how we structure things internally

**mdjermanovic:** `esquery` accepts custom visitor keys. Aside from a few selectors like `:function` I think it's already pretty generic and I believe it could be used with any AST that has `type` property on nodes

**btmills:** Implementing something like `esquery` isnot easy, either for language plugins or for us. It'd raise the bar for adding a language. In (1), could we change "must" to "may"? If they don't, for (2), we could start with just node names and maybe later add a super basic one for child relationships?

**btmills:** (or adapt `esquery` based on @mdjermanovic's comment)

**nzakas:** As @mdjermanovic mentioned, esquery is already pretty generic. I took a look and I think it would be easy to fork it, strip out the hardcoded JS-related things, and add some functionality to allow more options to be passed.

**nzakas:** We could definitely just start with node names....but that would leave JavaScript as an exception case. It would be nice to have things work the same way as other languages to make sure the design works.

**btmills:** I haven't looked at the internals at all, but if you all think it's feasible, that'd be an excellent out of the box experience for new languages!

**nzakas:** The guts of it is a PEGjs grammar, which is easy to tweak: https://github.com/estools/esquery/blob/master/grammar.pegjs

**nzakas:** The only other stuff we'd need to be able to configure is which property the node name is (we use `type` but not all ASTs do) and which properties might contain an identifier.

**nzakas:** I think it's a bunch of work, but not overwhelmingly so

**btmills:** In that case, I'd be inclined to require languages to provide enough information about how to get the information `esquery` requires out of the AST because of how much easier that upfront work would make writing rules against those languages

**nzakas:** Right. I think that's reasonable and would probably amount to another three properties/methods on the language definition.

**nzakas:** Just wanted to make sure that's a direction we want to go before I go digging for more details.

**mdjermanovic:** Sounds good to me, pending details 🙂

**btmills:** I like it!

**nzakas:** Okay, it looks like we've agreed that 1) we would like to offer CSS selectors for all languages out of the box and 2) it would make sense to fork `esquery` for this purpose.
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, next item:

**nzakas:** > Agenda item: Do we want to try using [release-please](https://github.com/marketplace/actions/release-please-action) on some of our repos to start moving off of Jenkins? I think the main `eslint` repo is still too complicated for this, but I think the others would work fine.

**mdjermanovic:** Sounds good to me

**btmills:** I'm automatically a fan of non-Jenkins options 🙂

**nzakas:** I've been using `release-please` on my personal projects for over a year and it's been great.

**mdjermanovic:** Does it support entering 2FA code?

**nzakas:** No

**mdjermanovic:** Release would be triggered by merging a PR?

**nzakas:** Exactly. With every merged PR it updates a release PR. When we are ready to do a release, we just merge the release PR. Then we setup an action to do `npm publish` as a result of that.

**nzakas:** Example: https://github.com/humanwhocodes/env/blob/main/.github/workflows/release-please.yml

**mdjermanovic:** Sounds good to me

**nzakas:** We'd just need to create a CI npm token and store it as a secret on the org

**nzakas:** @btmills ?

**btmills:** works for me 👍

**btmills:** follows naturally from the change to commit message structure a while back

**nzakas:** Since you two do the releases, does one of you want to volunteer to setup one repo with `release-please` to test it out?

**btmills:** sure, sounds like an interesting project 👍

**nzakas:** Thanks @btmills!

**nzakas:** Okay, we've decided to try out `release-please` on one repo and @btmills will take the action item to get that set up.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Those were the only two agenda items. Anything else anyone would like to discuss?
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay, some followups from me.

**nzakas:** If we could all pitch in to copy the `add-to-triage.yml` workflow from the `eslint` repo to the other repos, I'd appreciate it. I've setup a handful of pull requests but could use some help rolling out to all repos. This will get us back to the state where all new issues on all repos end up in the triage project.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We have a bunch of active RFCs right now, so let's make sure that we're all making time to review them.
 * 👍 @btmills, @mdjermanovic

**nzakas:** I've also opened a couple of discussions prefixed with "Feedback Wanted" where I'm asking for specific feedback from ESLint users and integrators. So, this is just an FYI because these are places to solicit feedback rather than for us to decide things, but there's some interesting info in there that's worth a read.

**nzakas:** I've also been talking with some folks about how they're hacking ESLint to do different things to get a good set of requirements for how to move forward with a rewrite.

**btmills:** It's been interesting following some of those. (And thanks for tweeting out some of them - I find them sooner that way)
 * 👍 @nzakas

**nzakas:** Yeah, I think there's a whole world of use cases out there that we've honestly been pretty ignorant of. I started ESLint with the idea that it would only ever be used on the command line and welp, I was really, really wrong.

**nzakas:** So, hoping to synthesize all of these details into a coherent future story at some point.

**btmills:** that's good, though! making something people want is hard

**nzakas:** Yeah, this has been fun to put on the old product manager hat again. Though it is a bit challenging to get people to think outside the current ESLint. Instead of, "how do I hack ESLint to make this work today," I really want to get people focused on, "if ESLint was built the right way, what would that look like?"

**nzakas:** It's the old "if Henry Ford canvassed people on whether or not he should build a motor car, they’d probably tell him what they really wanted was a faster horse." problem.

**btmills:** I think on the first rewrite discussion, people (including myself initially) looked at it as "just in Rust" or "a big refactor" and not necessarily addressing all these use cases that have come up in the last decade

**nzakas:** Others clearly read it as "we're not rewriting in TypeScript" and only cared about that. This is the problem with writing long posts -- people pull out the one or two things that excite/anger them and focus on those.

**nzakas:** In any event, we're getting some good data now, so I'm excited.
 * 🎉 @btmills, @mdjermanovic

**nzakas:** And I think we should wait until next meeting to do the contributor pool since we still have five days left in January.
 * 👍 @btmills, @mdjermanovic

**nzakas:** If there's nothing else, then we should talk about the release.

**btmills:** I'll be available over the weekend

**mdjermanovic:** thanks @btmills !
 * 👍 @nzakas

**nzakas:** I think we only have `eslint` this time?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Cool. Then with that, I think we are all set. Thanks everyone!

**btmills:** 👋 take care!

**mdjermanovic:** Thanks 👋
