# 12/12/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**fasttime:** Only the two of us today.

**nzakas:** Yup. I wasn't here last time so let me pull up the notes to see if there was anything to follow up on.

**nzakas:** Doesn't look like we had any action items to follow up on, so let's start with statuses.

**nzakas:** I've been working on the JSON plugin, the CSS plugin, and the `extends` RFC.

**fasttime:** Okay, I was less active than expected this week, but I made good progress on my RFC for multithread linting. I should be able to post a draft this weekend. Other than that, just the usual work triaging and reviewing issue.

**nzakas:** As the first agenda item, let's talk about our holiday schedule.

**nzakas:** I plan on being off December 17 -29.

**fasttime:** I'll be off 24-26 December because of several events

**nzakas:** As discussed offline, our plan is to skip the TSC meeting on December 26. Do we want to skip the release on December 27?

**fasttime:** I think it's better if we aren't going to have a meeting before.

**nzakas:** I agree. We'll skip the December 27 release and resume on January 10 following the TSC meeeting on January 9
 * 👍 @fasttime

**nzakas:** I added a couple of agenda items to today's issue to discuss.

**nzakas:** First item: When do we want to mark `eslint.config.ts` as stable?

**nzakas:** It seems like everything has gone pretty smoothly.

**fasttime:** We didn't have any complaints about TS config files, so it seems safe to mark that feature as stable.

**nzakas:** I agree. I think it's fine to mark as stable. Can you take the action item to open an issue for that? I bet Arya will jump on doing that.

**fasttime:** Sure, I'll open a PR.

**nzakas:** That would be to move the flag to inactive and enable TypeScript config files by default.
 * 👍 @fasttime

**nzakas:** Second item is along the same lines: When should we mark the alternate config lookup algorithm as stable?

**nzakas:** (In this case we'd create a new flag starting with `v10_` and move the old flag to inactive.)

**fasttime:** I think we still have an issue with alternate config lookup.

**nzakas:** An issue as in a GitHub issue or an issue as in a problem?

**fasttime:** in GitHub, I'm searching

**fasttime:** https://github.com/eslint/eslint/issues/18948

**nzakas:** Ah yes, looks like @mdjermanovic might have forgot about that one. I agree, we shouldn't mark as stable until this is fixed.
 * 👍 @fasttime

**nzakas:** Any other issues or PRs you'd like to discuss?

**fasttime:** Hm, I'm not sure what to do with this issue: https://github.com/eslint/eslint/issues/19173. It seems there isn't much interest on our end to look into this problem of typescript-eslint?

**nzakas:** Not really. We've told them for years that this is not a supported use case and they're on their own if they decide to wrap rules. As I mentioned in my comment, I'm more than willing to give core rules knowledge of TypeScript syntax to eliminate the need for some of the typescript-eslint rules that just wrap core rules with knowledge of TS syntax, but that's about as far as I'd want to go regarding this issue.

**fasttime:** Makes sense. Shall we close that issue or leave it open for tracking until we decide to add support for TS syntax to our rules?

**nzakas:** I think the latter. That way, we can track the effort back to this original request and when it's closed we can know it's done for good. 😄

**fasttime:** Sounds good. Agreed 👍

**nzakas:** Any others?

**fasttime:** Nothing else from my side.

**nzakas:** Me either.

**nzakas:** So RFC duty will get a bit messed up while I'm away.
This week: @mdjermanovic 
December 16: @fasttime
 * 👍 @fasttime

**nzakas:** I'll leave it up to you two to decide what else to do in my absence.

**fasttime:** Fine for me. I will reach out to @mdjermanovic to check his availability.
 * 👍 @nzakas

**nzakas:** Let's do contributor pool for November:

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-11-01..2024-11-30

**fasttime:** Maybe $100 each?
 * 👍 @nzakas

**nzakas:** I'll let them know.

**fasttime:** Thanks!

**nzakas:** Okay, let's talk the release. Are you available tomorrow?

**fasttime:** Yes, I can do the release tomorrow.

**nzakas:** Thanks!

**fasttime:** It will be only `@eslint/js` and `eslint` I think.

**nzakas:** Yes, I think so.
 * 👍 @fasttime

**nzakas:** Okay, looks like that's it for today. Thanks! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks! Take care 👋

**nzakas:** And happy holidays all. See you next year. 😄
 * 🤩 @fasttime
