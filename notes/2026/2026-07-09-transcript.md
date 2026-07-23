# 07/09/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Pulling up the notes from last meeting...

**nzakas:** Only follow up from last time was @mdjermanovic updating the semver policy, which I believe is complete.

**mdjermanovic:** Yes, it's complete
 * 👍 @fasttime

**nzakas:** Okay then let's jump into statuses.

I was focused mostly on sponsorship outreach, so thankfully we got Shopify returning and a new sponsorship from CodeRabbit.

Otherwise, still dealing with health stuff so have had limited time.

**mdjermanovic:** I was working on file-entry-cache upgrade, fixed a problem with v9.x-dev CI, and was reviewing PRs and triaging issues.

**fasttime:** I was mostly busy with reviewing issues and PRs.

**nzakas:** Let's talk availability the next couple of weeks:

I expect my availability to remain unchanged, so in the range of 0.5-1.5 hours per week.

**mdjermanovic:** I'll be offline next 3 days. Then I expect to work 1-1.5h daily, but will be offline some days.

**fasttime:** I should be able to work about 10 hours next week, and a bit less, maybe 7 hours the week after.

**nzakas:** RFC Duty:
This week - @nzakas 
July 13 - @fasttime 
July 20 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We have several issues flagged and a couple of agenda items, plus we have contributor pool to talk about.

**nzakas:** First item:
https://github.com/eslint/eslint/issues/21060

**nzakas:** @fasttime you added the tag but didn't add a summary or question, can you fill us in?

**fasttime:** There an issue requesting that we backport a fix that war released in v10.x. It also has a pull request already.

**nzakas:** So....why are we discussing it?

**fasttime:** If we merge the fix, we'll likely want to do a v9.x patch release.

**fasttime:** I'd be fine with that, just wanted to make sure we are aligned.

**nzakas:** So the question is whether or not we want to do a v9.x release to incorporate this change?

**fasttime:** Yes.

**nzakas:** Given that we already fixed it in the v10.x line, I think it makes sense to backport it.

**mdjermanovic:** I agree

**fasttime:** Sounds good. I can review and merge the PR after the meeting.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've agreed to accept this issue and port to v9.x line.
 * 👍 @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/20590

**nzakas:** **TSC Summary**: This issue is seeking consensus on exporting common glob patterns for certain languages, such as `**/*.{mjs,cjs,js,jsx,mts,cts,ts,tsx}` for JavaScript.

**TSC Question**: There is currently no definitive consensus on the design of the glob patterns, where to place them, or how to treat them across the language plugins. Should we seek consensus on this approach, or do we need an RFC for this issue?

**mdjermanovic:** I think we discussed this in a previous meeting?

**nzakas:** Yeah it does look familiar...

**nzakas:** It looks like the issue was never updated with the results of that meeting. Let me look back at the ntoes.

**nzakas:** Oh that's the meeting Sam missed

**mdjermanovic:** Here it is in the transcript: https://github.com/eslint/tsc-meetings/blob/f23b3e1d991200dc8091b4e8c294abf058f5f43c/notes/2026/2026-06-11-transcript.md?plain=1#L127-L142
 * 👍 @nzakas

**nzakas:** Okay I'll just add the note now

**nzakas:** Next: https://github.com/eslint/eslint/issues/20430

**nzakas:** **TSC Summary**: This issue is seeking consensus on publishing an official Docker image for ESLint. However, there has been no definitive consensus for about 6 months.

**TSC Question**: Should we publish an official Docker image for ESLint and proceed through the RFC process currently ongoing at https://github.com/eslint/rfcs/pull/140?

**nzakas:** I'm 👎. I don't see any value in doing this.

**mdjermanovic:** I think the same, and I agree with the discussion about plugins

**fasttime:** I'm also not in favor. It looks like a lot of maintenance work for plugins we don't maintain.

**nzakas:** Okay, we've agreed not to accept this issue.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay the backport issue was also added as an agenda item on the meeting issue, which we already covered.

**nzakas:** I'll review Alex's blog post and schedule it for publication, which is the other item on the issue.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics to discuss before we shift to contributor pool?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** I have nothing else for today.

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-07-01-contributor-pool.md

**mdjermanovic:** navi2-dil's PRs (and the account I believe) have been deleted

**nzakas:** Yup

**fasttime:** Two of the contributors have been removed including their issues and PRs.

**nzakas:** pierluigilenoci is the other one who has disappeared

...strange month
 * 🤷 @fasttime

**nzakas:** A lot of these are really small.

**nzakas:** The ci PRs I'm not sure would qualify

**fasttime:** Yes, both CI PRs were small.

**nzakas:** Maybe $150 for kirkwaiblinger and $100 for sethamus?
 * 👍 @mdjermanovic

**mdjermanovic:** Sounds good to me

**fasttime:** Sounds good.

**nzakas:** ok, I'll let them know

**nzakas:** let's talk about the release

**fasttime:** Thanks!

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**fasttime:** I will do also a maintenance release of v9.x.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Looks like that's all?

**fasttime:** Looks so.

**mdjermanovic:** I think the same. Thanks 👋

**nzakas:** Okay, then that's our meeting. Thanks everyone! (and thanks @sam3k_ for the notes)

**fasttime:** Thanks! Take care 👋
