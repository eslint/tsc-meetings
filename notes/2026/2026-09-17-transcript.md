# 09/17/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** Let's give @mdjermanovic another couple minutes before getting started

**fasttime:** I think it will be just the two of us today

**nzakas:** okay then, let's get started. I'll take a look at the notes.

**nzakas:** Looks like the only action item to followup on was me creating missing meeting notes, which is done.
 * 👍 @fasttime

**nzakas:** Let's start with status updates.

I spent most of the time working on the TSC meeting note and followup workflow and updating the new JS/TS parser prototype and RFC.

**fasttime:** I was mostly busy triaging and reviewing issues/PRs/RFCs. I also worked on a couple of chore maintenance issues.

**nzakas:** Availability for the next two weeks. For me, I'll still be in the 1-5 hours each week range depending on how I'm feeling.

**fasttime:** I should be available about 7 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week @fasttime 
September 21 - @mdjermanovic 
September 28 -  @nzakas

**fasttime:** This week @fasttime 
September 21 - @mdjermanovic 
September 28 -  @Nicholas C. Zakas

**fasttime:** Ah no wait

**nzakas:** Looks like we're in agreement now

**fasttime:** Yes, that's it 🙂
 * 👍 @nzakas

**nzakas:** It looks like we don't have anything flagged for the meeting. Any topics you'd like to discuss? (I have a couple I just thought of).

**fasttime:** Nothing in particular from me

**nzakas:** Okay, then I'll go through mine.

**nzakas:** First item: Now that I've discovered that Twitter posts with links cost 20 cents vs. 1.5 cents for posts without links, I'd like to go through and remove posting release announcements to Twitter on our minor packages. (Think `@eslint/css-tree`, `@eslint/config-inspector`, etc.).

**nzakas:** It was fine to show how productive we are when it didn't cost anything. At 20 cents per post, I just don't think the cost is worth it.

**fasttime:** That's fine I think as those are minor packages.

**nzakas:** We'll keep it for the plugins for sure. Those are the most important ones.

**fasttime:** Yes, makes sense

**nzakas:** Okay, we've decided to remove Twitter posting from the minor packages. I'll take that as an action item.
 * 👍 @fasttime

**nzakas:** Next item: I have prototypes for the bash and Docker plugins. How do we want to proceed with those? Do we want to open public repos and just push the code? Do a full PR review for the (large) initial commit? Something else?

**fasttime:** That's great I think. We can make them public repos if there's nothing confidential and ask the team to review the code.

**nzakas:** Review in a PR?

**fasttime:** Maybe yes, as that's the way we usually work.

**nzakas:** Yeah, it'll just be a big PR. Maybe I'll see if I can split them up somehow.

**fasttime:** Sounds good.

**nzakas:** Okay, we've agreed to open new repos for the bash and docker plugins. I'll take the action items to set those up and get PRs pushed.
 * 👍 @fasttime

**nzakas:** Speaking of PRs, I could use a review on this: https://github.com/eslint/rewrite/pull/498

**nzakas:** Updated PR.

**fasttime:** Yes, sorry. I'll review it in the weekend. It's been on my todo list for a while.
 * 🙏 @nzakas

**nzakas:** That's all I have. Anything else to discuss before we talk the release?

**fasttime:** Nothing special from me.

**nzakas:** All right, let's talk about tomorrow's release. Are you available?

**fasttime:** Yes, I can do the release tomorrow.

**nzakas:** Thanks!

**fasttime:** Only `eslint` to release this time.
 * 👍 @nzakas

**nzakas:** All right, that's it for today. Thanks!

**fasttime:** Thanks! Bye 👋
