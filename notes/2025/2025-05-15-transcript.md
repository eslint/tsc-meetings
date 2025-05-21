# 05/15/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi there!

**nzakas:** Just looking up notes from last time

**nzakas:** Looks like we didn't have any action items other than following up open RFCs, which we did.

**nzakas:** Let's start with statuses. I've been continuing to refactor the core,  bug fixing in CSSTree, and externalizing the MCP server.

**mdjermanovic:** I was reviewing a lot of PRs.

**fasttime:** I have fixed some issues with the types and started working on a prototype for multithread linting.

**nzakas:** Speaking of RFCs, here's the upcoming RFC duty schedule:
This week - @fasttime 
May 19 - @nzakas 
May 26 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's talk availability for the next couple of weeks. I expect to have 3 hours each day, outside of May 26, which is a holiday in the US.

**mdjermanovic:** I expect to have around 2 hours each day.

**fasttime:** I also expect to be available 2 hours a day the next two weeks

**nzakas:** Great, let's dig in. I flagged a few things to discuss.

**nzakas:** First is the `basePath` RFC: https://github.com/eslint/rfcs/pull/131

**nzakas:** > Because this issue of `basePath` in `extends` is the only thing left to resolve, let's go back to @mdjermanovic's original suggestion:
> 
> > to avoid confusion in expectations, defineConfig() should throw an error if it encounters basePath in extended configs?
> 
> I'm okay with this, as it allows us the opportunity to think through this use case further and make changes down the line if necessary. I think it's important to get this change out relatively soon so we can start v10 planning.

**mdjermanovic:** I'm in favor of my original suggestion. Combining configs with base paths seems complicated. Throwing an error allows us to think through this further and eventually support this.

**mdjermanovic:** As adding a behavior for something that used to throw an error is generally considered a non-breaking change.
 * 👍 @nzakas

**fasttime:** I'm in favor of throwing an error instead of combining `basePath`s for a start. I'd like to read the RFC once again before approving.

**mdjermanovic:** I need to update the RFC with details about `defineConfig()` anyway

**nzakas:** Okay, we've agreed to throw an error when there's `basePath` in `extends`. Can we also agree to prioritize updating and approving this RFC?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Great, looking forward to getting the v10 train moving. 😄

**nzakas:** Next item: https://github.com/eslint/eslint/issues/19719

**nzakas:** > The [`func-style`](https://eslint.org/docs/latest/rules/func-style) rule is currently frozen, meaning we aren't making any further changes to it and we'd need the [@eslint/eslint-tsc](https://github.com/orgs/eslint/teams/eslint-tsc) to override that. I believe the intent here is to make `func-style` TypeScript-aware, which seems like it goes along with our ongoing work to make ESLint as a whole more TypeScript-aware. As a result, I'm 👍 to overriding the frozen status of this rule for this particular purpose.

**mdjermanovic:** If the question is does making core rules TypeScript-aware override frozen status, I'd say yes when a rule is buggy in TS code or doesn't seem to support certain aspect of TS syntax well.

**mdjermanovic:** I think that's in line with our policies about frozen rules. That is that we fix bugs and support new syntax. TypeScript syntax is kind of "new" since we recently decided to support it.
 * 👍 @nzakas

**mdjermanovic:** As for this particular request, isn't it the same as this one, which we didn't accept? https://github.com/eslint/eslint/issues/18842

**nzakas:** Yes. We declined to implement at that time because we had not yet decided how to handle TypeScript-specific syntax in core rules.

**mdjermanovic:** Okay, I'm in favor of this change, and adding this behavior behind an option as suggested seems like a good compromise

**nzakas:** @fasttime already 👍ed on the issue, but just want to double check

**nzakas:** (for the record)

**fasttime:** Sounds good to me. Let's do it.

**nzakas:** Okay, we've agreed to implement this change behind a new option. We've also agreed that updating a frozen rule to support TypeScript syntax makes sense.

I'll take the action to update the description of frozen rules to make that explicit.
 * 👍 @mdjermanovic

**fasttime:** Thanks! That's a good idea. So the team will know how to handle such requests next time.

**nzakas:** Next item:
> Do we want to post release messages in the Discord <#710284269657784440> channel? We can automate that along with releasing to social media.

**nzakas:** Release messages for things like `@eslint/css`, etc.

**mdjermanovic:** I'm in favor

**fasttime:** I'm also in favor.

**nzakas:** Okay, we've agreed to automatically post release messages to <#710284269657784440>. I'll take the action to set that up.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Those are all I had flagged for today. Any other topics anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side.

**fasttime:** Nothing from my side.

**nzakas:** All right, then let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** That would be only `eslint` and `@eslint/js` this time, I believe.
 * 👍 @nzakas, @fasttime

**nzakas:** All right, if there's nothing else, then I think we're done. Thanks everyone (and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks! 👋
