# 12/02/2021 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Hi everyone

**nzakas:** @btmills can you take notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** It looks like we don't have any agenda items. Does anyone want to introduce a topic?

**btmills:** I'm planning to finish my review of the flat config PR tonight
 * 🎉 @nzakas

**nzakas:** Great, I'd really like to get that merged so I can continue working on it.

**nzakas:** One thing I'd like to discuss: can we get PRs merged faster? While it's nice that we have a two week cycle with releases to make sure things are merged, I'm noticing that not everything that is ready ends up getting merged or else other things end up dragging on for months.

**nzakas:** For things like docs, chores, bug fixes, we've always said that one approval was enough to merge, but I'm seeing those lingering open

**nzakas:** I try to merge things that are ready when I'm reviewing PRs, and I think it's beneficial to get things merged ahead of releases to account for any potential problems, rather than waiting until the day of a release.

**nzakas:** Thoughts?

**mdjermanovic:** It's definitely better to merge PRs when there are ready instead of waiting for the release day
 * 👍 @nzakas

**nzakas:** 13/20 open PRs have been open for 30+ days, FYI

**mdjermanovic:** Though, I didn't notice that PRs that are ready are waiting too much

**btmills:** getting things merged beforehand would also save a bunch of time off the front of releases

**btmills:** I'll take partial blame - I just didn't have time to do anything, PR review included, the first half of November

**btmills:** but hopefully that's improved the last couple weeks

**nzakas:** I think an easy thing we can all do is merge simple things when ready, and if for some reason we review but don't merge a PR, leave a comment explaining why. Like for flat config, I really didn't want to merge until both of you reviewed it. It's a huge commit and I wanted as many eyes as possible on it

**nzakas:** Something as simple as, "LGTM but I'd appreciate @nzakas taking a look too before merging." I think would help

**btmills:** focusing on merging as soon as ready will help

**nzakas:** So, focus on merging as soon as ready, be clear on why if you approve and don't merge. Agreed?

**btmills:** yep

**mdjermanovic:** We have a rule of waiting 2-3 days before merging https://eslint.org/docs/maintainer-guide/pullrequests#when-to-merge-a-pull-request

**mdjermanovic:** I'm interpreting that as 2-3 days after the last change

**nzakas:** I'd say that's correct, although as noted above that sentence, there are several scenarios when PRs can be merged immediately, as well.

**nzakas:** For the benefit of the transcript:

**nzakas:** > Team members may merge a pull request immediately if it:
> 
>     Makes a small documentation change
>     Is a chore
>     Fixes a block of other work on the repository (build-related, test-related, dependency-related, etc.)
>     Is an important fix to get into a patch release

**nzakas:** And of course, you can use your best judgment in all cases

**nzakas:** I'd just prefer not to see PRs with one approval that aren't merged and then nothing happens for seven more days

**nzakas:** Of course, you can always just comment, "Leaving open for a couple more days to gather feedback."

**mdjermanovic:** Maybe we could have this rule - if PR has one approval, and no further activity after 2 days, then merge

**btmills:** and if we come along and see that comment a couple days later, feel comfortable merging?

**btmills:** yep, that

**nzakas:** Sounds good to me

**nzakas:** With the caveat that you are still allowed to review that PR before merging

**nzakas:** One approval from someone else doesn't mean you shouldn't at least look it over, but if the approval is from yourself, then go ahead and merge after two days.

**btmills:** allowed but not required in order to merge
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, so to sum this point up: we agree that if a PR has one approval and no further updates after 2 days, we can either merge it as-is or provide our own review and then decide whether to merge.
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, there we are.

**nzakas:** Next: I'd like us to try to put together a roadmap for 2022. In the past we've done this by creating a locked issue and asking everyone on the team to add their ideas for big things they'd like to accomplish on ESLint during the year. I'd like to start that process now so we can publish something after the new year. Sound good?

**btmills:** start as in discuss in the meeting today or start as in open an issue and discuss there?

**nzakas:** start as in open an issue, I don't think we'd get too far with you only have one minute to think about things 🙂

**btmills:** 👍

**mdjermanovic:** Agree

**nzakas:** Okay, I'll open that once we're done here. Just didn't want to surprise anyone when it showed up.

**nzakas:** Any other things to discuss before we go to contributor pool and the release?

**btmills:** none from me

**mdjermanovic:** none from me, too

**nzakas:** Oh, quick update on the site redesign: we are moving right along!

**nzakas:** The donate and sponsors pages are mostly done, we are just working through a few design tweaks.

**nzakas:** The blog will be next, and we'll likely need a big effort to update all of the frontmatter in our blog posts to work correctly on the new site.

**nzakas:** And then the homepage will be last as it incorporates components from the other pages.

**nzakas:** Had a good call with Sara today to go over the remaining work.

**nzakas:** Okay, next: contributor pool. I'd like to suggest for PRs, we stick to nominating people when the PRs are merged. I don't want to name any names, but we had a situation where we nominated someone before the PR was merged and then they bailed. I'd like to not repeat that.
 * 👍 @btmills, @mdjermanovic

**nzakas:** So for <#717416886685401108> we have JackNapis and Kepeniukas as usual
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** ota-meshi for the work on private-in syntax and https://github.com/eslint/eslint/pull/15268
 * 👍 @nzakas, @btmills

**mdjermanovic:** fengzilong for https://github.com/eslint/eslint/pull/15243
 * 👍 @nzakas, @btmills

**nzakas:** Was just going to say that 🙂

**mdjermanovic:** ljharb for https://github.com/eslint/espree/pull/522
 * 👍 @nzakas, @btmills

**nzakas:** ota-meshi had two PRs: https://github.com/eslint/eslint/pull/15268 and https://github.com/eslint/eslint/pull/15060

**btmills:** MichaelDeBoey for a bunch of PRs in the Markdown plugin to get it tested against ESLint v7 and 8 https://github.com/eslint/eslint-plugin-markdown/pulls?q=is%3Apr+is%3Amerged+author%3AMichaelDeBoey+
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** There was another one from ota-meshi:  https://github.com/eslint/espree/pull/521

**nzakas:** Big month for ota-meshi
 * 👍 @mdjermanovic

**nzakas:** Okay, so let's talk amounts. I'll propose ota-meshi $500, everyone else $100?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I'll take the action item to send out those emails.

**nzakas:** Shall we talk about the release?

**mdjermanovic:** I can do the release tomorrow

**mdjermanovic:** Including Espree

**btmills:** thanks

**nzakas:** Great, thanks!

**nzakas:** Okay, I think we are all set for today. Thanks everyone!

**mdjermanovic:** Thanks!

**btmills:** bye!
