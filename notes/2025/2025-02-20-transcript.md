# 02/20/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Looking over last meeting's action items and doesn't look like there were any

**nzakas:** So let's start with statuses. I've been working on the CSS plugin, the `defineConfig()` helper, and various publishing improvements in `eslint/rewrite`.

**nzakas:** Oh, and added JSX support to eslint-scope

**mdjermanovic:** I was mostly reviewing PRs.

**fasttime:** I was also mostly reviewing PRs and worked on the fix for the retry utility

**nzakas:** RFC Duty:
This week - @fasttime 
Feb 24 - @nzakas 
Mar 3 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, let's dig right in.

**nzakas:** First item: https://github.com/eslint/eslint/issues/19173

**nzakas:** > **TSC Summary:** In this issue, we agreed to start making some core rules TypeScript syntax-aware.
> 
> **TSC Question:** Should we add something into the rule `meta` to reflect this? If so, what should it be? And should we take into account that rules may be aware of other languages and/or types as well?

**mdjermanovic:** What would be the new field used for?

**nzakas:** I was thinking we could display a TypeScript logo on the rule page to indicate that it's TypeScript-aware

**nzakas:** Kind of like npm does when the package has types

**mdjermanovic:** I'm not sure if it would be very useful, many core rules already just work with TypeScript syntax

**mdjermanovic:** Although they're not checking anything TS-specific

**nzakas:** Right, that's the difference here.

**nzakas:** I think this could also be useful for maintenance purposes, knowing which rules we've specifically updated for TypeScript and which we haven't.

**mdjermanovic:** Yeah, but what are the benefits of knowing that rule checks TS-specific syntax for end users?

**mdjermanovic:** Ah, if it's only for us then it makes sense, though it might be better to put it in meta.docs then.

**nzakas:** I think for end-users, being able to say "you don't have to use a typescript-eslint rule for this" may be beneficial.

**mdjermanovic:** Yeah, but we should then add the same field to all rules that work well with ts code

**nzakas:** Although, the logo on the rule docs might ultimately be more useful for us to be able to quickly verify if the rule should be working with TypeScript-specific syntax.

**nzakas:** I know I frequently look up rule docs when an issue mentions one to check if it's frozen, deprecated, etc.

**nzakas:** I think adding to `meta.docs` is the correct location regardless

**mdjermanovic:** What I'm trying to say is that for users it's more important whether the rule can be used with TS code than whether it specifically checks TS AST

**nzakas:** I agree

**mdjermanovic:** And that's I believe already maintained in typescript-eslint

**nzakas:** "that" being which core rules work with TypeScript and which don't?

**mdjermanovic:** Yes, rules that don't work have replacements

**nzakas:** Right.

**nzakas:** So it sounds like we're generally in favor of adding something into `meta.docs`?

**mdjermanovic:** I'm in favor for maintenance purpose, but I'm not sure if we should display it in the rule docs

**mdjermanovic:** Unless we mark all rules that work well with TS (i.e., those that don't have replacements in typescript-eslint)

**nzakas:** We can take that as a separate decision later. No need to bundle the adding of meta data with displaying it.

**mdjermanovic:** Okay, I agree with adding a new field to `meta.docs`

**fasttime:** Sounds good to add a new internal field to `meta.docs`

**nzakas:** I was thinking maybe we should add two new fields so that it works with all languages.

**nzakas:** Maybe `meta.docs.language = "javascript"` and `meta.docs.dialects = ["javascript", "typescript"]`

**nzakas:** (or some such thing)

**nzakas:** So then the Markdown rules would be `meta.docs.language = "markdown"` and `meta.docs.dialects = ["commonmark", "gfm", "mdx"]`, as an example.

**fasttime:** Could `meta.docs.language` be used to check if someone is using a rule with the wrong parser?

**nzakas:** Potentially, but I think that would require the parser to declare its language as well.

**fasttime:** I mean, if the parser would also provide a `language` field that matches the rule's

**nzakas:** Although i think it would be on the `Language` object rather than the parser

**fasttime:** Yeah, exactly. When I saw the comment on GitHub this was first thought, because sometimes users mix up things in their config when they try to lint multiple languages.

**nzakas:** Yeah, we could potentially then just disable any rules that where `language` doesn't match, but then that should be `meta.language` rather than `meta.docs.language` because it affects functionality.

**mdjermanovic:** Yes, if it would be used to change runtime behavior then it should be directly in `meta` rather than `meta.docs`
 * 👍 @fasttime

**nzakas:** And what about `dialects`?

**nzakas:** because that's really where we get the TypeScript info

**fasttime:** No objections from my side.

**mdjermanovic:** Yeah, both should be at the same level

**nzakas:** Okay, it looks like we've agreed to add `meta.language` and `meta.dialects`, starting with rules that are TypeScript-enabled. We can revisit discussions around how to use that data at a later time.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:

**nzakas:** > Agenda item: While CSSTree is an excellent parser, it appears to be maintained by just one person and the turnaround time on fixes is very long. Should we fork CSSTree and use that for `@eslint/css` by default? The intention is to continue to push on CSSTree to implement the changes we need by submitting PRs back upstream. Ideally, most of these changes would be transparent to rules and when they're not, hopefully we can get some feedback on proposed API changes.

**fasttime:** Sounds good to me.

**mdjermanovic:** Sounds good to me too

**nzakas:** Okay, we've decided to create a fork of CSSTree (`@eslint/css-tree`). I'll work on getting that set up some time in the next week.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** That's all the agenda items. Is there anything else anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Nothing from me, too.

**nzakas:** Okay, then let's talk about the release

**fasttime:** I can do it.

**nzakas:** Thanks!

**mdjermanovic:** Thanks!

**nzakas:** There are a couple of types-related changes I'd like to get in, if possible

**nzakas:** https://github.com/eslint/rewrite/pull/155
https://github.com/eslint/eslintrc/pull/179

**nzakas:** I'll be working on those after this meeting

**fasttime:** Thanks, I left some comments on both.
 * 👍 @nzakas

**nzakas:** If we can publish a new `@eslint/core`, then I'll also update `@eslint/json` before releasing the next version

**fasttime:** Then maybe we could release `@eslint/core` earlier?

**nzakas:** Yes. I think once that PR is merged we can just release it. Then it'll be ready for the other releases

**fasttime:** Fine 👍

**nzakas:** Is this one close? https://github.com/eslint/eslint/pull/19238

**mdjermanovic:** Very close, I'll check tomorrow
 * 👍 @nzakas, @fasttime

**mdjermanovic:** If it isn't ready for tomorrow's release, we should merge it as soon as possible after we close the release due to the number of files and possible merge conflicts
 * 👍 @fasttime

**nzakas:** Agreed

**nzakas:** Okay, I think that's all we have for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Take care 👋
