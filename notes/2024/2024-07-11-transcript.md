# 07/11/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Hi everyone

**fasttime:** Hi all 👋

**nzakas:** just looking over last meeting's notes. The only action item was for @fasttime to start looking at `@types/eslint`, which is in progress.

**nzakas:** https://github.com/DefinitelyTyped/DefinitelyTyped/pull/69957

**fasttime:** Yeah, waiting for a review from a DT maintainer

**nzakas:** Next let's review what we've been working on. I'll go first

**nzakas:** I've been working on the version support page (https://github.com/eslint/eslint.org/pull/600), the alternate config loading approach (https://github.com/eslint/rfcs/pull/120), and the `@eslint/json` package.

**mdjermanovic:** I was reviewing PRs and RFCs, and fixed several bugs in eslint, eslint-scope and eslint/compat

**fasttime:** I worked on upgrading `@types/eslint`, apart from that I reviewed issues and RFCs.

**nzakas:** All right, it looks like we don't have anything tagged for today. Any topics anyone would like to bring up?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** I also have nothing in particular today

**nzakas:** Okay, just a reminder -- anytime an issue or PR is taking a while to resolve, go ahead and label it `tsc agenda` so we can discuss. Don't be shy. 🙂
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**nzakas:** The only thing I have to share is that the Code Explorer is nearing completion. Hayden showed me a demo and it's looking really good. Just a few rough edges to sand down and hopefully we'll get that pushed to GitHub next week.
 * 🎉 @mdjermanovic

**nzakas:** Ideally, I'd like to announce the release of Code Explorer with the availability of `@eslint/json`, as Code Explorer can also show JSON ASTs.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, if there's nothing else then we should discuss Contributor Pool for June

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-06-01..2024-06-30

**nzakas:** I'm not familiar with most of these. Recommendations?

**mdjermanovic:** $100 each?

**nzakas:** So that would be $200 for kirkwaiblinger?

**mdjermanovic:** Hm, the two PRs are related and one is a small change, I thought $100 per author
 * 👍 @nzakas, @fasttime

**nzakas:** I'll let them know.

**nzakas:** Let's talk the release

**fasttime:** I have time 🙂
 * 👍 @mdjermanovic
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**nzakas:** So that'd be `eslint-scope`, `@eslint/js`, and `eslint`?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** We could also release these? https://github.com/eslint/rewrite/pull/80

**nzakas:** Ooh yeah, good call.

**nzakas:** Although we could probably just do that now?

**mdjermanovic:** Yes, those are additional packages, not dependencies of eslint. We could release them all now.

**fasttime:** Sounds good

**nzakas:** Looks like we could also do `eslint-plugin-markdown`. @mdjermanovic want to handle those two?

**mdjermanovic:** Yes, I can handle those after the meeting

**fasttime:** Thanks!

**nzakas:** Thanks!

**nzakas:** All right, if there's nothing else. I think we can call it a meeting. Thanks everyone! (And thanks @sam3k for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks!
