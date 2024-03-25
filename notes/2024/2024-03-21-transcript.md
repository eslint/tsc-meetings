# 03/21/2024 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Looks like everyone is here, so let's get started.

**nzakas:** I'll start by going over action items from last time to refresh all of our memories.

**nzakas:** 1) Adding more columns to the triage board and notifying everyone. That was my action item. I did add the columns but didn't have time to send the email. I'll plan on doing that next week.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** 2) Moving AST traversal into Source. Also an action item for me to continue working on that, and I believe it's now ready for final review.

**mdjermanovic:** Changes in the core LGTM. I'm not 100% sure about the three rules. Given that this will be a prerelease, I think we can merge it so that rule authors can update their rules. I could verify the three rules next week and submit PRs if there's anything that should be updated.

**nzakas:** Let's hold that discussion until we talk about the v9 status
 * 👍 @mdjermanovic

**nzakas:** 3) Modify the repos to dismiss stale reviews. That was @mdjermanovic's action item, and I believe I saw a note in <#688770853588172860> that was completed?

**mdjermanovic:** Yes, that one is done.
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, those were the action items from last time, so we're in pretty good shape.

**nzakas:** We don't have any issues or PRs tagged for the meeting, or any agenda items on the meeting issue, so we can jump right into v9 planning.

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** So it looks like we're basically where we were a couple weeks ago.

**nzakas:** Let's start with the AST traversal PR: https://github.com/eslint/eslint/pull/18167

**nzakas:** from @mdjermanovic earlier:
> Changes in the core LGTM. I'm not 100% sure about the three rules. Given that this will be a prerelease, I think we can merge it so that rule authors can update their rules. I could verify the three rules next week and submit PRs if there's anything that should be updated.

**nzakas:** That sounds good to me. 2/3 of the rules were pretty straightforward changes, it's really `constructor-super` that I think needs some deeper analysis.

**fasttime:** I could also have a look at the rules when the rest of the core related changes is merged.
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I've already checked changes in the core, so I'll merge the PR after the meeting
 * 👍 @nzakas

**nzakas:** Okay, so we've agreed to merge the changes and revisit any rule updates afterwards.
 * 👍 @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/17579

**nzakas:** @fasttime where are we with this one?

**fasttime:** Not much progress on this from my side, I have tried doing some changes but I don't expect to get this finished for the next couple of weeks. I'd suggest we remove it from the v9 board and I'll keep looking into ways to fix this.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, let's move this to v10 so we have time to dig in.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next: https://github.com/orgs/eslint/projects/4/views/2?pane=issue&itemId=54193976

**nzakas:** There is a PR with a bunch of outstanding feedback, so hopefully this is close?

**fasttime:** I've been reviewing this the last days and I think it looks good now. There are just of couple of questions I'm not 100% sure about because I couldn't find any related discussions.

**nzakas:** Feel free to at-mention anyone you need to get those answered. I'd like to get this merged soon.

**fasttime:** See here: https://github.com/eslint/create-config/pull/81#issuecomment-2013224501

**nzakas:** I can take a look offline, but I'm not very familiar with how this works so not sure of the answers personally.

**fasttime:** Thanks, anyway this should be good to go soon.

**nzakas:** Sounds good.

**nzakas:** Last one: https://github.com/eslint/eslint.org/issues/507

**nzakas:** Not sure if @snitin315 is away but there hasn't been an update in three weeks.

**mdjermanovic:** There are a few things to address. Looks like Nitin will be away for some time so I could take over the PR to finish if he can't at the moment.
 * 👍 @fasttime

**nzakas:** Sounds like a good plan. It looks like we're close?

**mdjermanovic:** Yes, shouldn't take much time

**nzakas:** Okay, we'll have @mdjermanovic drive that one to completion. Thanks!
 * 👍 @mdjermanovic

**nzakas:** Given this state, do we want to do rc.0 for this week's release? I think the core will be feature complete as the outstanding issues are `@eslint/create-config` and the playground.

**mdjermanovic:** Yeah, I think we could bump to a rc as notice that `eslint` is feature-complete
 * 🎉 @nzakas

**fasttime:** Sounds good

**nzakas:** Great, we've agreed that this week's release will be the first release candidate 🎉
 * 👍 @mdjermanovic

**nzakas:** While we're on the subject, let's talk about the release.

**mdjermanovic:** I can tomorrow. I could also be here to help if @fasttime would like to try. 🙂
 * 👀 @nzakas

**fasttime:** Yeah, I was about to say that. I could try to do a release but would like someone with more experience to be around in case I get stuck.

**mdjermanovic:** Of course

**nzakas:** Sounds like a plan.

**mdjermanovic:** I'm available tomorrow from today's meeting time (9pm CET)

**fasttime:** That's fine 👍

**fasttime:** So we can start with the release by that time tomorrow.
 * 👍 @mdjermanovic

**mdjermanovic:** Deal

**nzakas:** As a heads up, we might have some other packages to release: https://github.com/issues?q=org%3Aeslint+label%3A%22autorelease%3A+pending%22+

**mdjermanovic:** There are no user-facing changes in `eslint-visitor-keys`, so I think that one isn't necessary to release

**mdjermanovic:** `eslint-scope` had a refactor in the production code, so it might be good to release it to check if everything is okay
 * 👍 @fasttime

**mdjermanovic:** `generator-eslint` and `eslint-transforms` nothing user-facing I believe, so we can skip them

**nzakas:** We may want to revisit our release-please setup to avoid generating releases if commits don't affect users.

**mdjermanovic:** And I'm not sure about `create-config`

**nzakas:** I think we hold off on create-config until the flat config changes are merged
 * 👍 @mdjermanovic

**mdjermanovic:** That's a bit complicated, we should probably revisit commit tags

**nzakas:** Do you want to take it as action item to propose an update to how we do this?

**mdjermanovic:** We're using some tags for changes that affect users and changes that don't affect users

**mdjermanovic:** Yes, I could take that task
 * 👍 @nzakas

**nzakas:** Thanks, that would be helpful. Maybe just put together an issue and we can comment on it.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** So, for tomorrow we'll have `eslint-scope`, `@eslint/js` and `eslint`?

**fasttime:** I'd say yes, create-config can wait...

**mdjermanovic:** Agreed
 * 👍 @fasttime

**mdjermanovic:** Have we done contributor pool for February?

**nzakas:** I was just going over the notes and wondering the same thing. Indeed, we did not.

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-02-01..2024-02-29+

**mdjermanovic:** Seems we forgot that in the last meeting

**nzakas:** We were overly excited about @fasttime joining 🙂
 * 👍 @mdjermanovic
 * 😄 @sam3k_, @fasttime

**fasttime:** Thanks, hopefully nobody will regret that decision!

**nzakas:** Not so far!

**nzakas:** So looks like DMartens was busy in February. Maybe $600 for the three PRs?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** StyleShit had two for `use-isnan`. $250?
 * 👍 @mdjermanovic

**nzakas:** MichielPeter -- this one was open for a year and half!

**mdjermanovic:** Yeah, it was blocked at the time

**nzakas:** I feel like we should give a bit more for sticking with it.
 * 👍 @mdjermanovic

**fasttime:** Looks like a lot of work

**nzakas:** Does $500 seem like enough? @mdjermanovic you reviewed this one, so appreciate your insights on this.

**mdjermanovic:** $500 sounds good to me

**nzakas:** All right, I'll take the action item to let them know.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Last thing on my end: I should be mostly back to a regular schedule next week now that my dad is out of the hospital.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Anything else anyone would like to discuss?

**mdjermanovic:** Nothing in particular for today

**fasttime:** Nothing from my end

**nzakas:** All right, let's call it a meeting. Thanks everyone!

**fasttime:** Thanks, take care!

**mdjermanovic:** Thanks! 👋
