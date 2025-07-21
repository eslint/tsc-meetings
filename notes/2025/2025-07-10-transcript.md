# 07/10/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** It'll just be you and I today as @mdjermanovic is away.

**fasttime:** Yes, nice for him 🙂

**nzakas:** Pulling up the notes from last time

**nzakas:** I was to follow up on moving more types into `@eslint/core`, and I opened that PR yesterday: 
https://github.com/eslint/rewrite/pull/237
 * 👍 @fasttime

**nzakas:** @mdjermanovic updated the `unstable_config_lookup_from_file` flag to `v10_config_lookup_from_file`.
 * 👍 @fasttime

**nzakas:** Let's do statuses. I've been working on a couple of RFCs (CSS variable tracking and rule language metadata), adding token methods to `JSONSourceCode`, and a bunch of build-related stuff (contributor pool report generation, automated baseline data).

**fasttime:** I've been working on switching performance tests to hyperfine, updating the multithread linting RFC, and reviewing issues and PRs.

**nzakas:** RFC Duty Update:
This week - @nzakas 
July 14 - @fasttime
July 21 - @mdjermanovic
 * 👍 @fasttime

**fasttime:** I don't know actually if it's @mdjermanovic's turn or mine next week

**nzakas:** Oops, good catch. It should be yours.

**nzakas:** Because I swapped with him because he's away this week.

**fasttime:** Yeah, that's fine.

**nzakas:** I flagged a couple things to talk about.

**nzakas:** First one: https://github.com/eslint/rewrite/issues/234

**nzakas:** > **TSC Summary:** This issue reports that the internal type for rule.meta.docs.recommended in ESLint is too restrictive—it is typed as `boolean | undefined`, but some plugins (notably typescript-eslint) use other values (like strings or objects) for config generation. This causes TypeScript type errors when using `defineConfig()`, even though it works at runtime.
> 
> **TSC Question:** What do we want to do here? Some options:
>     1. Omit the `recommended` field from the type definition.
>     2. Change its type to `unknown` (with a note that ESLint itself uses boolean).
>     3. Use a union type to allow any value for `recommended` in configs.

**fasttime:** 1. will require both us and typescript-eslint to extend the base rule in order to define a `meta.docs.recommended` property.

**fasttime:** 2. seems easier.

**fasttime:** From my perspective, it's fine to be lenient in `meta.docs` types since plugins may use these differently than we do.

**nzakas:** Shall we adopt option 2 then? Set to `unknown`?

**fasttime:** Sounds good.

**nzakas:** Okay, we've agreed to set the type of `meta.docs.recommended` to `unknown`.

**nzakas:** I also wanted to check in on the multithread linting PR to see what the status is. Are there other changes you're planning or is it ready for review?
https://github.com/eslint/eslint/pull/19794

**fasttime:** I have two points I would like to decide/work on before making this ready for review.

**fasttime:** One is emitting warning when `concurrency` is used inappropriately (e.g. because there aren't many files). For this, I'll need to experiment a bit.

**fasttime:** The other question is how to handle `concurrency=1`. I will post an updated description of the problem probably on the weekend and hopefully @mdjermanovic will be able to participate to the discussion.

**nzakas:** Sounds good. The results are fantastic so excited to get it out there soon. 🙂
 * 👍 @fasttime

**nzakas:** Any other issues or PRs you'd like to discuss?

**fasttime:** I noted this one for today: https://github.com/eslint/eslint/issues/18912

**fasttime:** It's been open for 9 months now without a PR.

**nzakas:** Yes, Tanuj is assigned. I'll ping him again.

**fasttime:** Thanks! I'd be interested to know how he's planning to approach that.

**nzakas:** And just a reminder to add the "tsc agenda" label to anything you want to talk about. That way it comes up in the search I do at the start of the meeting. 🙂

**fasttime:** Okay, sorry. I'll do that next time.
 * 👍 @nzakas

**nzakas:** Anything else?

**fasttime:** Nothing else from my side.

**nzakas:** Then let's do contributor pool, starring our new automated, no-AI report!
https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-07-01-contributor-pool.md
 * 🎉 @fasttime

**nzakas:** xbinaryx had another busy month. Shall we say $1200 for everything?
 * 👍 @fasttime

**nzakas:** What do you think for sethamus?

**fasttime:** does $600 sound fair? Half of the amount for xbinaryx

**nzakas:** Sounds good

**nzakas:** For TKDev7, $300?
 * 👍 @fasttime

**nzakas:** For Pixel 998, $200? Both PRs look fairly small.
 * 👍 @fasttime

**nzakas:** For SwetaTanwar I'm thinking $500. The no-missing-link-fragments rule, in particular, took a bunch of work.

**fasttime:** I see. Yes, $500 is okay.

**nzakas:** For jgoz and fisker I think $100 each?
 * 👍 @fasttime

**nzakas:** What do you think for the last two?

**fasttime:** ota-meshi did a lot of work, so I don't know. Is $300 okay?
 * 👍 @nzakas

**fasttime:** For remcohaszing maybe $200 as that PR took longer than usual to complete?
 * 👍 @nzakas

**nzakas:** I'll let them know.

**fasttime:** Thanks!

**nzakas:** Let's talk about the release

**fasttime:** I can do the release tomorrow.

**nzakas:** Thanks!

**fasttime:** I don't see anything in particular that should be merged by tomorrow.

**nzakas:** Agreed, nothing pressing in the open PRs.

**fasttime:** Alright, it will be just `@eslint/js` and `eslint`.
 * 👍 @nzakas

**nzakas:** By the way, are you aware of the GitHub action to post across the various social media platforms that I set up?

**fasttime:** Yes, I used it the last three times I did a release, it's working like a charm
 * 👍 @nzakas

**fasttime:** I usually open the social media pages to see if the posts are showing up correctly and it always worked flawlessly. The `\n` replacement also works perfectly.
 * 🎉 @nzakas

**nzakas:** Glad to hear it.

**nzakas:** Okay, I think that's all for today. Thanks!

**nzakas:** And thanks @sam3k_ for the notes.

**fasttime:** Thanks! Bye 👋
