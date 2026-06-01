# 05/14/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy

**nzakas:** Going to pull up the notes from last time...

**nzakas:** Looks like we didn't have anything to review from last time so let's just right into statuses.

Unfortunately, my health still prevented me from doing too much other than trying to check in on some issues and PRs.

**mdjermanovic:** I was reviewing PRs, working on file-entry-cache upgrade, and prepared v9.x EOL notices.

**fasttime:** I was mostly busy reviewing PRs this time.

**nzakas:** Availability the next two weeks: I expect my availability to remain unchanged until my health improves.

**mdjermanovic:** I expect to be able to work 1-1.5h per day

**fasttime:** I should be able to work 10-12 hours per week the next two weeks

**nzakas:** RFC Duty:
This week - @fasttime 
May 18 - @mdjermanovic 
May 25 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looks like we have one issue flagged for today.

https://github.com/eslint/code-explorer/issues/378

**nzakas:** > **TSC Summary**:
>     * Node.js 20 reached End-of-Life on April 30, 2026, but web apps such as `code-explorer` and `eslint.org` are still depending on it.
> 
> **TSC Question**:
>     * Which Node.js version would be best to update to? Should we move directly to version 24 or take it one step at a time with version 22?
>     * Also, what would be the recommended first step for this transition, especially since some parts of the setup might require setup changes on Netlify?

**mdjermanovic:** I think we should switch to Node.js 24
 * 👍 @nzakas, @fasttime

**mdjermanovic:** As for the the steps, not sure yet as some sites have local configs, but we can figure that out

**nzakas:** Okay, we've agreed to upgrade Netlify apps to Node.js 24. Technical details to be determined on a per-app basis.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We do have one `tsc waiting` PR:
https://github.com/eslint/eslint/pull/20396

**nzakas:** This was to remove dependency on the `Intl` global, but it seems that's trickier than we first thought. I'm in favor of not moving forward with this PR.

**mdjermanovic:** Seems that we all agree to keep using `Intl` and just update prerequisites

**fasttime:** Yes, just update the docs

**nzakas:** Okay, we've agreed not to move forward with this PR and instead to update the documented prerequisites for running ESLint.

Do we want to close this PR?

**mdjermanovic:** I think yes
 * 👍 @nzakas, @fasttime

**nzakas:** Okay I'll do that now.

**nzakas:** All right, any other issues or PRs anyone would like to discuss? Or topics in general?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from my side either

**nzakas:** All right, let's take a look at the contributor pool. We have a budget of $762 for the month:
https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-05-01-contributor-pool.md

**nzakas:** I've not been around enough to tell how much work these were, so I'll defer to you two for suggested amounts

**fasttime:** Shall we award all PRs the same amount? I don't see any particularly big or small PRs that would stand out

**nzakas:** We could do sethamus $500 and xbinaryx $200?
 * 👍 @fasttime

**mdjermanovic:** Sounds good to me

**nzakas:** Okay, I'll let them know.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** eslint/rewrite deps updates have been already released and integrated in eslint, so I think it would be just the `eslint` package this time.
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Okay, then just `eslint` for tomorrow

**nzakas:** All right, then I think we're all done for today. Thanks everyone (and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks 👋 bye!
