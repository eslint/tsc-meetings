# 04/16/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** Looks like we are having trouble getting to full strength here. Feel better @mdjermanovic
 * 👍 @fasttime

**nzakas:** Let me pull up last meeting's notes

**nzakas:** Okay, looks like nothing to review.

**fasttime:** No, nothing I think.

**nzakas:** Then let's start with statuses.

I've been pretty sick so haven't done much outside of triaging issues and PRs as I've been able.

**fasttime:** I wasn't sick, but I had some unexpected setbacks, so I also haven't done much, only reviews and some maintenance PRs.

**nzakas:** Seems to be that time of year. 🙂
 * 🤷 @fasttime

**nzakas:** Let's talk availability the next couple of weeks. 

I'm trying to do 0.5 hours per weekday, pending my health stabilizing. 🤞
 * 🤞 @fasttime

**fasttime:** I should be able to work 10-12 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week: @nzakas 
April 20: @fasttime 
April 27: @mdjermanovic
 * 👍 @fasttime

**nzakas:** It looks like we don't have anything flagged for today. Is there anything you'd like to discuss?

**fasttime:** Nothing specifically from my side.

**nzakas:** Do we want to discuss this? https://github.com/eslint/eslint/pull/20716

**nzakas:** The `meta.languages` question

**nzakas:** The question is if implementing this on core rules is a breaking change.

Also, should we go ahead and update the `json`, `css`, and `markdown` plugins first.

**nzakas:** I added a comment that I do think it's a breaking change and we should be very deliberate in how we update core rules with this info.

**fasttime:** I'm also under the impression that this change in the core rules would break a few setups. I'd be in favor of updating  the language plugins first.

**nzakas:** Okay, we've decided to hold off on updating the cores rules with `meta.languages`. We'll instead work on adding this info to the language plugins to see how they work in the wild.

**fasttime:** For the core rules, we could add `meta.docs.dialects`, but with `meta.languages` it seems better to hold off.

**nzakas:** Yeah, we can do that. At least that way we'll know which rules have already been updated to support TypeScript.
 * 👍 @fasttime

**nzakas:** That's all I had. Shall we discuss the release?

**fasttime:** I can do the release tomorrow.

**nzakas:** Thanks 🙏
 * 😀 @fasttime

**fasttime:** I don't see any features since the previous release, so that would be a patch release.

**nzakas:** Sounds good. Should be an easy one.

**fasttime:** Hopefully so. Also no packages to release other than `eslint`.

**nzakas:** Looks like we have a new `config-inspector` release ready, I'll just go do that now.
 * 👍 @fasttime

**nzakas:** I think that's it for today. Thanks! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks! Bye 👋
