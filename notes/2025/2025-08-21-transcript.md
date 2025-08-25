# 08/21/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** It will just be us today.

**fasttime:** Yes.

**nzakas:** Just pulling up the notes from last time

**nzakas:** Okay, doesn't look like anything to follow up on.

**nzakas:** Let's talk statuses. I've been fixing some of the parsing and validation errors in CSSTree but primarily reviewing issues and PRs.

**fasttime:** I've prepared the blog post about multithread linting and have been reviewing PRs and issues.

**nzakas:** Let's review availability for the next two weeks. I'm still only going to have about an hour each week day until September, then I should have a bit more.

**fasttime:** I should be available around 12 hours per week the next two weeks.

**nzakas:** RFC Duty update:
This week - @nzakas 
August 25 - @mdjermanovic 
September 1 - @fasttime
 * 👍 @fasttime

**nzakas:** Also worth noting September 1 is a holiday in the US, so I'll be off on that day.
 * 👍 @fasttime

**nzakas:** It looks like we don't have any issues or PRs flagged for discussion. Are there any you want to discuss?

**fasttime:** Nothing in particular. There's a new issue on the v10 board, maybe discuss that?

**nzakas:** https://github.com/eslint/eslint/issues/20012
 * 👍 @fasttime

**nzakas:** This all comes down to what we decide for the Node.js versions for v10

**nzakas:** I'm 👍 for doing this assuming it makes sense with the Node.js versions

**fasttime:** Same for me 👍 I think we'll want to drop support of Node.js 18 and so it should be fine to use the Node.js API instead of chalk.

**nzakas:** It just depends on the version of v20 we decide on

**nzakas:** I'll move it into "Planned" for now
 * 👍 @fasttime

**nzakas:** We also missed this issue in contributor pool for last month:
https://github.com/eslint/markdown/pull/488

**fasttime:** Yes. Maybe let's reward it.

**nzakas:** Say $150?
 * 👍 @fasttime

**nzakas:** Okay, I'll let him know

**fasttime:** I don't have any other issues to discuss.

**nzakas:** Okay, let's discuss the release.

**fasttime:** It will be my turn again.
 * 😄 @nzakas

**nzakas:** I think we need an `eslint-config-eslint` release?

**fasttime:** Ah yes, I was hoping to get the new `preserve-caught-error` rule in, because that will be a new breaking change for `eslint-config-eslint`, but the PR isn't ready yet.

**nzakas:** We don't need to worry too much about breaking changes for `eslint-config-eslint`. Our recommendation is that people always bump major versions on shareable configs anyway.

**fasttime:** Makes sense. Shall we release `eslint-config-eslint` tomorrow before ESLint?

**nzakas:** 👍

**fasttime:** Okay. So it will be `eslint-config-eslint`, `@eslint/js` and `eslint`.
 * 👍 @nzakas

**nzakas:** And I'll re-review the concurrency blog post now and tomorrow morning so it will be ready to go after the release.

**fasttime:** Thanks! I will check back tomorrow morning, but feel free to edit it by yourself if you think it can be improved.
 * 👍 @nzakas

**nzakas:** Okay, I think that's all for today. Thanks!

**nzakas:** (And thanks @sam3k for the notes)

**fasttime:** Thanks! Bye 👋
