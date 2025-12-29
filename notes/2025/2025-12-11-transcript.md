# 12/11/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** It's just us today. Feel better @mdjermanovic.
 * 👍 @fasttime

**nzakas:** Let me pull up the meeting notes

**nzakas:** Doesn't look like any followups.

**nzakas:** Let's start with statuses. I've mostly been reviewing PRs, investigated the Discord transcript issue, and tried reaching out to some lapsed sponsors to see if I could get them back.

**fasttime:** I've been working on reviews, updated the `eslint-scope` types PR, and worked on a PR to update the Linter types for `verify` and `verifyAndFix`.

**nzakas:** Next: statuses for the next couple of weeks.

I'm going to be away December 15-29, so I'll be off for the next two weeks.

**fasttime:** I should be available probably 12h next week. I will be less available until new year and unavailable on December 24, 25, and 26.

**nzakas:** Just to make it a bit clearer: You're saying the week of December 15 you have 12 hours, and then mostly unavailable from December 21-January 1?

**fasttime:** Not entirely unavailable, just less than usual. Probably still 1 hour every day except on Dec. 24-26.
 * 👍 @nzakas

**nzakas:** Given that our next TSC meeting would fall on December 25, I think it makes sense to just cancel it from now and say we'll resume on January 8. Same for releases, we can do one tomorrow and then hold off until January 9. What do you think?

**fasttime:** Makes sense 👍

**nzakas:** To summarize...
Next TSC meeting will be January 8
Next release after tomorrow will be January 9
 * 👍 @fasttime

**nzakas:** Then for RFC duty we should probably just reset at that time.

**fasttime:** I will available for the RFC duty as usual next week.

**nzakas:** Thanks!

**nzakas:** Okay, it looks like we don't have anything flagged for today's meeting, so let's jump into v10.

**nzakas:** https://github.com/orgs/eslint/projects/6

**nzakas:** It looks like we are ready for beta?

**fasttime:** I'm not sure about the status of this one: https://github.com/eslint/eslint/issues/19936

**nzakas:** One topic at a time. 🙂 That's not a blocker for beta, correct?

**fasttime:** Ah, sorry. I thought we'd like to have all v10 issues ready for beta. If not, then yes, we are ready.

**nzakas:** No, not all issues. Just the things we announced here:
https://eslint.org/blog/2025/10/whats-coming-in-eslint-10.0.0/#significant-changes-in-v10.0.0-beta
 * 👍 @fasttime

**nzakas:** Okay, then tomorrow's release will be 10.0.0-beta.0
 * 🎉 @fasttime

**nzakas:** Now, let's talk about this:
https://github.com/eslint/eslint/issues/19936

**fasttime:** It has a PR open but that will not include all changes proposed in the issue.

**nzakas:** Seems like we need @mdjermanovic to make a determination about this, as he's been working on it the most.

**fasttime:** Then maybe we should postpone the discussion to the next TSC meeting?

**nzakas:** Yes, I think that's a good idea.

**nzakas:** How about this one? https://github.com/eslint/js/issues/708

**fasttime:** It's ready I think, but still pending review(s).

**nzakas:** Okay. I also think it's fine to hold off and include in the release after this one as it's not blocking anything.

**fasttime:** Okay, then we'll have no new breaking changes in tomorrow's release.
 * 🎉 @nzakas

**nzakas:** Anything else we need to discuss before discussing the release?

**fasttime:** Shall we talk about the Netlify edge functions?

**nzakas:** Oh  yes, good call

**nzakas:** I think we should disable it at this point.
 * 👍 @fasttime

**nzakas:** I'm guessing the surge in traffic is over, the file is a lot smaller now so we should be okay bandwidth-wise should it happen again.

**fasttime:** Sounds good. Do you want to do it, or shall I create an issue?

**nzakas:** I'm not going to have enough time before I leave. Please open an issue.
 * 👍 @fasttime

**nzakas:** All right, let's talk about the release tomorrow.

**fasttime:** I can do tomorrow's release around today's meeting time.

**nzakas:** Thanks!

**fasttime:** We have changes in the v9.x-dev branch. Shall we also make a maintenance release?

**nzakas:** That seems like a good idea

**nzakas:** And we'll need to generate a new token for Jenkins

**nzakas:** You have access to do that, correct?

**fasttime:** Okay, I can do the maintenance after the regular release.

**fasttime:** Yes. That will be generating a new token and copying it to the Jenkins credentials, right?

**nzakas:** Yup

**fasttime:** Okay, I'll do that.
 * 👍 @nzakas

**fasttime:** Will you be around tomorrow in case anything unexpected happens?

**nzakas:** Yes

**fasttime:** Thanks!

**nzakas:** I'll plan on being online around meeting time

**fasttime:** Perfect, that's when I'm planning to start.

**nzakas:** Okay, anything else to discuss before we end the meeting?

**fasttime:** Nothing else from my side.

**nzakas:** All right, then that's all for 2025! 🎉 Happy holidays and we'll see you next year. (Thanks @sam3k_ for the notes.)

**fasttime:** Thanks! Bye 👋
