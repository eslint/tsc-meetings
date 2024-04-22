# 04/18/2024 ESLint TSC Meeting Transcript

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** It'll just be you and me today

**fasttime:** Yes, well, let's get started

**nzakas:** Looking through and it doesn't look like we have anything tagged. Are you aware of the "tsc agenda" label, btw?

**fasttime:** Ah, yes

**fasttime:** I neved used that though

**nzakas:** For the transcript: https://eslint.org/docs/latest/maintain/manage-issues#when-to-send-to-tsc

**nzakas:** We check for those each meeting. You can feel free to add any issue or PR that seems like it's not making progress.
 * 👍 @fasttime

**nzakas:** Or is it at a decision point, too.

**fasttime:** Sounds good. Probably we could use that tag more often.

**nzakas:** Yes we could. 🙂

**nzakas:** But since we don't have anything flagged, is there anything you'd like to discuss?

**fasttime:** Nothing in particular today, but I would prepare something for the next TSC meeting.

**fasttime:** We have a lot of issues with no progress or feedback for months, so I think we could discuss them in a meeting, but it's not urgent.

**nzakas:** Yeah, it's good to keep an eye on those. Some are blocked, but there are some we just lose track of. I'll just say please be sure you're also reviewing the open RFCs: https://github.com/eslint/rfcs/pulls

**nzakas:** The four most recent, in particular.

**nzakas:** The other two we are kind of blocked on.

**fasttime:** Okay, I'll review them next week.
 * 👍 @nzakas

**fasttime:** Thanks for the reminder.

**nzakas:** I don't have anything pressing either. Still waiting for @mdjermanovic to comment on the Google Doc. I'm going to proceed under the assumption that we'd like to fork object-schema and config-array, and put those in a new rewrite monorepo to get us started. Then we can follow up with other functionality and figure out where to go from there.

**fasttime:** So, we will still be using the current repos for the ESLint v9 dependencies, but have a fork in a different repo for the rewrite?

**nzakas:** The idea would be to swap out the dependencies for the rewrite ones and then slowly moved functionality that will be common between v9 and the rewrite into the rewrite repo.

**nzakas:** So ultimately v9 and the rewrite will end up with some of the same dependencies, making it easier to upgrade both.

**fasttime:** Sounds good 👍

**nzakas:** All right, the only thing left to discuss is the release tomorrow.

**fasttime:** I have time

**nzakas:** Do you feel up to doing it on your own? I can be available around this time tomorrow.

**fasttime:** Yes, I can do it on my own if you are around.

**fasttime:** At the time of this meeting.

**nzakas:** Okay, I'll let you drive and just be around to answer any questions that might come up.

**fasttime:** Yeah, this will my first release all by myself.
 * 🎉 @sam3k_, @nzakas

**nzakas:** Big step!
 * 😀 @fasttime

**nzakas:** Okay, if there's nothing else, I think we can call this meeting to a close.

**fasttime:** Just for the records: it will be just @eslint/js and eslint this time?

**nzakas:** Let me check.

**nzakas:** Yes, that's it.
 * 👍 @fasttime

**fasttime:** Fine!

**fasttime:** Okay, then let's call it a meeting.

**nzakas:** All right, see you tomorrow.

**fasttime:** See you!

**nzakas:** (Thanks @sam3k_ for the notes -- few as they may be today.)
 * 👍 @sam3k_, @fasttime
