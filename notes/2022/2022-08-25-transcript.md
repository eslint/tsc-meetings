# 08/25/2022 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone!

**mdjermanovic:** Hi!

**nzakas:** @mdjermanovic welcome back. Did you have a nice break?

**mdjermanovic:** Thanks! Very nice 🙂

**btmills:** 👋

**btmills:** Glad to hear it was nice!

**nzakas:** We are happy to have you back. 🙂

**nzakas:** And glad to be back at full strength for the meeting, so let's get started.

**nzakas:** @btmills are you good for taking notes?'

**btmills:** yep!

**nzakas:** Thanks

**nzakas:** Looks like we don't have any issues flagged, so I'll dive into the other items.

**nzakas:** > Agenda item: To set up the eslint-community repo, I think it would be nice to get a custom logo and blog graphic (for updates) designed. Can we allocate budget for this?

**btmills:** Makes sense. Back to same artist who did the other graphics?

**nzakas:** Yup

**nzakas:** I'm hoping this will be quick and cheap since I'm just picturing an alteration of the current ESLint logo. 🙂

**mdjermanovic:** 👍

**nzakas:** Okay, we have decided to hire out for a custom logo for the eslint community organization. I'll reach out to the folks to get the ball rolling.

**nzakas:** Next item:

**nzakas:** > Agenda item: Shall we pay $300 to tech writers who applied for the position via guest blog post even if we don’t end up publishing the post?

**btmills:** I'd say yes
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Me too. I just realized I didn't make this clear when we first discussed so wanted to be sure we were on the same page.

**nzakas:** Okay, so we've agreed that we will pay $300 to the tech writer applicants even if we don't publish their blog post.

**nzakas:** Those are the only official agenda items we had, but I also wanted to mention that I added a "contributor pool" label so we can keep track of contributor pool candidates during the month. So when you notice a PR that is worthy of contributor pool, just label it and we'll have an easier time finding these candidates when we do the review. 🙂
 * 👍 @mdjermanovic

**btmills:** Good idea!

**nzakas:** An update on the tech writing hiring process: I invited four candidates to submit blog posts. Two already have, two more are coming next week. One in particular I'm hopeful will be good.
 * 🎉 @mdjermanovic

**btmills:** Excellent! Would you like any help reviewing those?

**nzakas:** Yes, please. 🙂

**nzakas:** This has been an important part of the evaluation, everything from can they follow directions to how they respond to feedback, to whether they understand ESLint enough to write coherently about it.

**nzakas:** So feel free to jump onto any guest post PRs and leave your feedback, or shoot me an email or hop into Discord if you'd like to share any feedback privately.

**btmills:** Will do!

**nzakas:** It has been an illuminating experience so far
 * 😆 @btmills

**nzakas:** And a flat config update: I've got it wired into the CLI and pushed up a PR, but @mdjermanovic pointed out I left `--ext` in when it should have been removed, so I'm going through to remove that option now. May be ready for this week's release, but if not, definitely next release.
 * 🎉 @kepeniukas, @btmills, @mdjermanovic

**mdjermanovic:** There are also some tests failing on Windows

**nzakas:** Yeah -- I have no idea what that's about, I can't get it to reproduce locally. Good news is I think they may be related to `--ext`, so removing that might solve the problem. I won't know until I push the next update.

**nzakas:** Speaking of releases, we have a release this week. Any volunteers?

**mdjermanovic:** I can tomorrow

**btmills:** Again, glad to have you back 🙂
 * 😂 @nzakas

**btmills:** `espree` and `create-config` as well
 * 👍 @nzakas

**mdjermanovic:** Thanks for taking over all releases while I was away

**mdjermanovic:** And `eslintrc` just to update the espree dependency
 * 👍 @btmills

**btmills:** Thankfully it aligned with less-busy weekends so I had time!

**mdjermanovic:** `create-config` had only a chore?

**btmills:** you're right - it removed a devdep and tests, so shouldn't make a difference to the published package

**btmills:** nvm on doing a release for `create-config` then

**mdjermanovic:** Okay, then I'll skip it this time. Btw. I think we can generally do `create-config` releases unrelated to main releases, whenever there's something user-facing merged
 * 👍 @nzakas

**btmills:** True. That and the markdown plugin can be entirely independent. Those releases only take a couple minutes so can be done after merging anything worthwhile
 * 👍 @mdjermanovic

**nzakas:** All right, I think that's all for today unless anyone has any other topics to discuss?

**mdjermanovic:** Nothing in particular from me

**btmills:** contributor pool? or wait until next time since we have 7d left

**nzakas:** I was thinking we'd do it next time. One whole week is a lot of time left.

**btmills:** sounds good 👍

**mdjermanovic:** Agreed

**nzakas:** All right, thanks everyone! Have a good couple of weeks.

**btmills:** Take care!

**mdjermanovic:** Thanks! 👋
