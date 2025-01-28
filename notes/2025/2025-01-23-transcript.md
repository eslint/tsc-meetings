# 01/23/2025 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone! Apologies for being late. Another meeting ran over.

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Just pulling up last meeting's notes

**nzakas:** Action items from last time:

**nzakas:** I was to work on the GitHub bot and get it back up and running. That's completed.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** @fasttime to investigate moving to Cypress. Do you want to share an update on that?

**fasttime:** I'm not done with that yet. Haven't managed to set up the GitHub Actions job, sorry.

**nzakas:** Okay, can you prioritize that? I'd like to get the browser testing useful again as soon as we can.

**fasttime:** Yes, I'll work on that this weekend.
 * 👍 @nzakas

**nzakas:** Okay, let's do statuses next.

I worked on getting the GitHub bot working again, the `extends` RFC, the year in review post, and the CSS plugin.

**mdjermanovic:** I was mostly reviewing PRs, then reviewing financial data, and prepared a PR for additional checks of rule examples.

**fasttime:** I've been mostly busy triaging and reviewing stuff, did some work on language plugin types and extended the multithread linting RFC. Also worked on the browser tests.

**nzakas:** RFC Duty update:
This week - @fasttime 
Jan 27 - @nzakas 
Feb 3 -  @mdjermanovic
 * 👍 @fasttime

**mdjermanovic:** I think this was my week

**nzakas:** Oops yes, off-by-one error 😅

**fasttime:** oh yes

**nzakas:** RFC Duty update:
This week - @mdjermanovic 
Jan 27 - @fasttime 
Feb 3 -  @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** That's why we review it each meeting 😄

**nzakas:** I flagged some issues to discuss and added one other agenda item.

**nzakas:** First item: https://github.com/eslint/eslint/issues/19337

**nzakas:** > **TSC Summary:** This issue proposes that we change inactive flags to emit warnings instead of errors in these situations:
> 
>     * An unstable flag becomes inactive because the feature is now enabled by default.
>     * A stable flag becomes inactive because the feature is now enabled by default.
>     * A flag moves from unstable to stable. The unstable flag should work just like the stable flag except that it emits a warning.

> If an unstable flag is removed because the functionality is abandoned, then it throws an error.
> 
> **TSC Questions:**
>     1. Should we accept this proposal?
>     2. Should inactive flags ever be removed?

**mdjermanovic:** 1. I'm in favor 👍

**mdjermanovic:** 2. I think we should be removing inactive flags in major versions
 * 👍 @nzakas

**fasttime:** I also think it's good idea to raise warning when a flag becomes inactive

**fasttime:** when a functionality is abandoned in a minor release, then yes it makes sense to throw an error, though it would be better to remove the functionality in a major release and remove the flag

**nzakas:** I think what we're all saying is that flags should only ever be removed in a major release, even if the functionality is abandoned prior to that.
 * 👍 @fasttime

**mdjermanovic:** If abandoned = removed, then I think it's better to throw an error

**mdjermanovic:** To fail the build in predicted rather than unpredicted way

**nzakas:** To rephrase: Let's say we have  a new feature `unstable_feature`. We decide that we don't like this feature and won't include it in ESLint. We don't have a major release upcoming. Do we make the flag inactive and produce a warning or do we remove the flag and throw an error?

**mdjermanovic:** Because flag not working anymore means that ESLint doesn't behave the way user expects.

**mdjermanovic:** I'd vote for removing the flag and throwing an error
 * 👍 @fasttime

**mdjermanovic:** And removing the feature from the code, for maintenance reasons

**nzakas:** That works for me.

**nzakas:** To summarize what we've decided:
1. We will accept the proposal as described in the issue.
2. Inactive flags will be removed each major release.
3. Abandoned features that will not land in ESLint should be removed (functionality and flag) in the next minor release.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I also think we should describe these details on https://eslint.org/docs/latest/flags/ when the new functionality is implemented.
 * 👍 @mdjermanovic

**fasttime:** makes sense

**nzakas:** Do either of you want to volunteer to implement this?

**mdjermanovic:** I can

**fasttime:** thanks!

**nzakas:** Thanks!

**nzakas:** Next item: https://github.com/eslint/eslint/issues/19173

**nzakas:** > **TSC Summary:** This issue proposes starting to make ESLint core rules TypeScript-aware in order to eliminate duplication with typescript-eslint.
> 
> **TSC Question:** Do we want to accept this proposal?

**fasttime:** I'd be in favor for rules that don't require type awareness.

**mdjermanovic:** I agree, assuming it's Typescript syntax-aware (not type info)

**nzakas:** Yes, TypeScript syntax-aware, not type-aware.

**nzakas:** I'm also in favor. We've agreed to accept this proposal. I imagine that there will be a bit of coordination with typescript-eslint to move forward on this.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Some rules already check for TypeScript nodes in AST

**mdjermanovic:** Yeah, I believe those are only nodes specified in ESTree extensions

**mdjermanovic:** https://github.com/estree/estree/blob/master/extensions/type-annotations.md

**nzakas:** Right, they don't fail when there's a `typeAnnotation` or `returnType` present, but we don't actually look at TypeScript-specific nodes in rules.

**mdjermanovic:** Actually, properties of nodes.

**nzakas:** Yup

**nzakas:** We can follow up on the issue to figure out next steps.

**nzakas:** Next item:

> Agenda item: Let's talk about Ajv. We're on an old version that is still working, but we've been getting complaints about deprecation warnings on Node.js v22. The last time we tried to upgrade it broke existing rules. Do we want to create our own fork so we can make any changes we want? Do we want to investigate switching to a different package?

**nzakas:** For some context: it's actually Node.js itself that's emitting this warning, not npm, so people are seeing it whenever they run ESLint on Node.js v22.

**mdjermanovic:** Hm, I didn't notice that Node.js emits warnings of this kind

**fasttime:** Is that Node.js or npm?

**nzakas:** It's Node.js

**nzakas:** It happens when people *run* ESLint

**fasttime:** oh okay, I'm not getting that with Node.js 23

**nzakas:** Basically, `ajv` is using `node:punycode` so Node.js emits a warning.

**nzakas:** https://nodejs.org/api/punycode.html#punycode_punycode

**nzakas:** https://github.com/mathiasbynens/punycode.js?tab=readme-ov-file#installation

**mdjermanovic:** Ah, well, given that " In a future major version of Node.js this module will be removed." that seems like a problem we must address

**nzakas:** Right.

**fasttime:** Yes, we should look into that.

**nzakas:** So to restate the question: What do we want to do? Fork our Ajv version? Try to upgrade again? Look for an alternative?

**fasttime:** Forking seems the easiest solution.

**mdjermanovic:** We could look for another package, but given that JSON Schema draft-04 is pretty old it's likely that that package will eventually drop support for it at some point, like Ajv did

**mdjermanovic:** So between looking for an alternative vs forking Ajv, I think forking Ajv would be a better solution

**nzakas:** I think at some point it would be nice to upgrade to a more modern package, once we've figured out the ecosystem impact, but in the meantime the easiest course of action does seem to be to fork the package.

**nzakas:** Anyone want to volunteer for that? 😄

**fasttime:** I'll do that.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**mdjermanovic:** That would be Ajv v6 line I believe
 * 👍 @fasttime

**nzakas:** Yes

**nzakas:** Okay, we've agreed to fork Ajv v6.x for our own use. @fasttime will lead that effort. Let us know what help you need as you go along.
 * 👍 @fasttime

**nzakas:** That's the last item on the agenda. Any other topics anyone would like to discuss?

**fasttime:** Nothing in particular from my side.

**mdjermanovic:** Nothing in particular from my side as well

**nzakas:** Okay, let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 🙏 @fasttime

**mdjermanovic:** That would be just `eslint` and `@eslint/js` this time, I think.

**fasttime:** We should also release @eslint/markdown, though that could be done separately
 * 👍 @nzakas, @mdjermanovic

**fasttime:** Somebody asked already for a patch

**mdjermanovic:** I can after the meeting

**mdjermanovic:** @eslint/json also?

**fasttime:** Sounds good to me.
 * 👍 @mdjermanovic

**nzakas:** I was hoping to get https://github.com/eslint/json/pull/66 in too

**nzakas:** I think it's ready to go

**mdjermanovic:** Ah, ok. Then `@eslint/json` release will wait for that.

**fasttime:** Yeah, I think it's ready. Was hoping for Josh to review, but since he said previously he won't be able to review every point, maybe we can just merge it.

**fasttime:** Maybe I can ping him again?

**nzakas:** Worth giving it another shot. If we don't hear from him by next week then maybe we just merge it?

**mdjermanovic:** Then, we could release `@eslint/json` today without it, and then another version next week?

**nzakas:** Works for me.
 * 👍 @mdjermanovic

**fasttime:** Works for me, too.

**nzakas:** All right, that's it for today. Thanks everyone (and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks!

**fasttime:** Thanks! Bye 👋
