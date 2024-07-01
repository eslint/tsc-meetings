# 06/27/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy! 👋

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Just pulling up last meeting's notes

**nzakas:** Looks like we didn't have any action items to follow up on

**nzakas:** So let's do statuses to start. I've been working on the new config loading scheme (https://github.com/eslint/rfcs/pull/120), the JSON plugin (https://github.com/eslint/json/pull/1), and creating the `@eslint/core` package.

**mdjermanovic:** Similar to the previous period, I fixed several bugs in the core and was reviewing PRs

**fasttime:** I've done just some work on https://github.com/eslint/rewrite/pull/59 and taking care of the RFCs, plus some discussions

**nzakas:** And RFC duty for the record:

This week - @nzakas
July 1 - @mdjermanovic 
July 8 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have anything on the agenda for today. Are there any topics anyone would like to discuss?

**fasttime:** Nothing special from my side

**mdjermanovic:** Nothing in particular. Nice to see the first language plugin up
 * 👍 @sam3k_, @nzakas, @fasttime

**nzakas:** Yeah, I'm pretty excited. 😄 It doesn't do much right now, but I think even having syntax checking is a big step.

**mdjermanovic:** It's great as a proof of concept for the start

**nzakas:** I'm somewhat shocked that VS Code seemed to just work with ESLint for JSON files.

**mdjermanovic:** It "just works" with the `@eslint/json`?

**nzakas:** 
 * 👀 @fasttime
 * 🎉 @sam3k_, @mdjermanovic

**mdjermanovic:** Awesome

**mdjermanovic:** I recall that, with eslintrc, vscode-eslint had some complex logic to figure out which files are lint targets for ESLint. Now with flat config, it's easy because we return true/false.

**nzakas:** I'll take it. I anticipate there will be some file types that won't just work, but we can dig into that as we come across them.

**nzakas:** I've got a couple of other topics now that I think about it.

**nzakas:** First: https://github.com/eslint/rewrite/issues/64

**nzakas:** Anyone want to take a look at this? I'm a bit burned out on config migration work at the moment.

**mdjermanovic:** That's pretty complex, I don't think I could be able to work on that while on travel

**fasttime:** I'll be busy with upgrading @types/eslint, I could do that afterwards
 * 👍 @nzakas, @mdjermanovic

**fasttime:** But I wouldn't mind if we ask in the teams channel, maybe someone will be ready to do that job

**nzakas:** We can definitely ask there too.

**nzakas:** And actually, `@types/eslint` was the second topic I had in mind.

**nzakas:** First, I'll state my bias: I'm pretty annoyed that that package was created without consulting us in any way and then people expect our APIs to conform to what's in that package. 🤬 Some collaboration would have be nice, but here we are, and people are depending on it. So the question is: what to do about it going forward?

**nzakas:** In my mind, here's what I'd like to see.

**nzakas:** 1) The core rewrite will produce its own types in `@eslint/core`, probably with a very different API from what we have now. To that extent, I think it makes sense to build out our types as we rewrite different pieces (and I'll put together an RFC with a proposal as soon as we get past the big things I'm working on now).

**nzakas:** 2) In the interim, I think it would be good if `@types/eslint` could pull in type definitions from `@eslint/core` that make sense, so we're starting to converge type definitions. For instance, things like `Position`, `SourceLocation`, `RuleSeverity`, `Language`, etc. so we can start taking on ownership of those types ourselves.

**nzakas:** 3) I don't think it makes sense to try to completely take over maintenance of `@types/eslint`, as I don't like the idea of being beholden to DefinitelyTyped to get changes out.

**nzakas:** Anyway, that's what I'm thinking right now. What do you think?

**fasttime:** Makes all sense to me. As for 2) I will try to see how it works. `@types/eslint` already has dependencies on `@types/estree` and `@types/json-schema`, so it should be possible to use `@eslint/core` as well
 * 👍 @nzakas, @mdjermanovic

**nzakas:** All right, the decision is that we'll abide by these three points. I'll write up a decision document to stick in the rewrite repo about this.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics before we talk about the release?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Nothing from my side, too

**nzakas:** All right, let's talk about the release. I'm going to be mostly offline all day tomorrow, so I won't be able to help out.

**mdjermanovic:** I can tomorrow
 * 👍 @fasttime

**mdjermanovic:** `eslint` and `@eslint/js`
 * 👍 @fasttime

**mdjermanovic:** @nzakas This is ready for re-review: https://github.com/eslint/eslint/pull/18628
 * 👍 @nzakas

**nzakas:** All right, I think that's it for today. Thanks everyone! (And thanks @Sam3k for the notes)

**fasttime:** Thanks 👋

**mdjermanovic:** Thanks! 👋
