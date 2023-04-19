# 04/06/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Sad to have only two of us. 😦

**nzakas:** It looks like we don't have any issues flagged. Are there any issues or PRs you'd like to discuss?

**mdjermanovic:** Nothing in particular on eslint/eslint. There's one PR I'd like to merge before trying out release-please on create-config so when you have time to take a look: https://github.com/eslint/create-config/pulls
 * 👍 @nzakas

**mdjermanovic:** Wrong link, here's the PR: https://github.com/eslint/create-config/pull/56

**nzakas:** I'll check that right after the meeting

**mdjermanovic:** As for release-please, what do you think about removing restrictions on tags for which release-please creates the release PR?

**nzakas:** I don't have strong feelings about it either way. I'd say feel free to modify it however you'd like.

**mdjermanovic:** By default, it's only `feat`, `fix` and `deps`. We're using `chore` for the deps. Also, I think `perf` should be releasable unit, etc.

**nzakas:** Do you want to do `docs` as well?

**mdjermanovic:** Yes, we sometimes release a package just to update `README`

**mdjermanovic:** I think it might be best to just remove the restrictions since we're in control of when the PR will be merged and the release actually published

**nzakas:** So any commit will result in a release PR being generated?

**mdjermanovic:** Yes, if it makes sense to you

**nzakas:** I think there are some that might not make sense, like `ci`, `test`, or `build`

**nzakas:** But right now we publish those as part of the changelog anyway, right?

**mdjermanovic:** Yes

**nzakas:** Then no harm in just adding all commits. I suppose we can always add exceptions later if we find it annoying.

**mdjermanovic:** Okay, I'll submit a PR to remove the restrictions on tags once I figure out what's the option for that

**nzakas:** Sounds good. To summarize for meeting notes: We've decided to configure `release-please` so that all commits will trigger the creation of a release pull request. The action item is for @mdjermanovic to submit a pull request modifying this behavior.
 * 👍 @mdjermanovic

**nzakas:** Any other topics you'd like to discuss? (I have a few, but easier to take turns)

**mdjermanovic:** Nothing else in particular from me.

**nzakas:** Okay, let me go through mine (hopefully I can remember them...I thought of most last night before bed)

**nzakas:** Now that flat config is feature complete, do we want to announce that and encourage people to start transitioning their configs?

**mdjermanovic:** Sounds good to me!
 * 👍 @nzakas

**nzakas:** Excellent. We've decided to announce flat config as feature complete. The action item is for me to write a blog post announcing it.
 * 👍 @mdjermanovic

**nzakas:** Next:

**nzakas:** Because we are down to you and me on the TSC and primary contributors to ESLint, I think we may need to adjust how we are spending time. In particular, I think you and I need to be spending more time on writing code and less time on other stuff. Especially now that we have Samuel and Joel helping with triage and support, it seems like a good time for us to step back a bit from that and try to make more progress on a roadmap. What do you think?

**mdjermanovic:** Sounds good to me.

**nzakas:** That may mean that some issues/discussions take longer to triage until Joel and Samuel get to them, and I think that's okay to keep our plates a little clearer.

**mdjermanovic:** Last few months I was mostly spending time on reviews. Haven't contributed much code.

**nzakas:** I find if I don't purposely set aside time to code then it doesn't get done. On those days I just don't open my notifications tab.

**nzakas:** Would it help to set some kind of metric? Like if we say we want to spend at least 25% of our time on code?

**mdjermanovic:** Sounds like a good strategy, and I'd really like to get back to coding more 🙂
 * 👍 @nzakas

**nzakas:** Coding is definitely the funnest part 🙂

**mdjermanovic:** Definitely

**nzakas:** All right, so we've agreed to spend more time coding and targeting at least 25% of our time for that purpose. We can always check on our invoices next month to see how we did.
 * 👍 @mdjermanovic

**nzakas:** And I'll continue to break down the larger tasks we discuss into checklists to hopefully make it easier for us to pick off smaller pieces that are easier to finish off
 * 👍 @mdjermanovic

**nzakas:** Okay, next item:

**nzakas:** Do we want to add a requirement on bug reports for a minimal reproduction case with either a 1) playground link, 2) stackblitz link, or 3) GitHub repo?

**nzakas:** I've seen this on other projects and it seems like it could further reduce time to evaluate and close these issues.

**mdjermanovic:** Sounds good to me.

**mdjermanovic:** For issues related to rules, playground links are really easy to create

**nzakas:** Definitely.

**nzakas:** Okay, we've agreed to add a field to require a repro link in bug reports. I'll take the action item to update the template.
 * 👍 @mdjermanovic

**nzakas:** Those are the items I had to discuss.

**nzakas:** So we should look at contributor pool for March

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2023-03-01+merged%3A%3C2022-04-01

**mdjermanovic:** By your comment at the end of https://github.com/eslint/eslint/pull/16807, it looks like this one was included in the previous contributor pool?

**nzakas:** Oh yeah, I think we might have added that one late

**nzakas:** Are the other two $100?
 * 👍 @mdjermanovic

**mdjermanovic:** Ah, I see what might have caused this last time, the end date in your queries has year `2022`

**nzakas:** 🤦

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2023-03-01+merged%3A%3C2023-04-01+

**nzakas:** That doesn't look right either

**mdjermanovic:** Yes, this one has too many 🙂

**mdjermanovic:** Perhaps `merged` cannot be used multiple times in the same query?

**nzakas:** Here we go: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-03-01..2023-03-31+

**nzakas:** 😅

**mdjermanovic:** This one looks good 👍

**nzakas:** Okay, I know Josh has declined previously, so that will leave just one person to contact. I'll do that.
 * 👍 @mdjermanovic

**nzakas:** Shall we talk about the release?

**nzakas:** which will hopefully be smoother this week than last

**mdjermanovic:** I can do the release tomorrow, but if a patch release is necessary I'm not sure if I'll be available on Monday

**nzakas:** No problem. I can handle any patch release on Monday.

**mdjermanovic:** Thanks!

**nzakas:** You're away for the next week or so, correct?

**mdjermanovic:** Yes, from Sunday till the other Tuesday (April 8-19)

**nzakas:** Nice. Enjoy!

**mdjermanovic:** Actually April 9-18

**mdjermanovic:** Thanks!

**nzakas:** For the record, I'll be offline the week of April 24 for the first part of my move.
 * 👍 @mdjermanovic

**nzakas:** All right, that's a wrap for today. Thanks!

**mdjermanovic:** Thanks 👋

**nzakas:** 👋

**nzakas:** (And thanks @Sam3k for taking notes 🙏 )
