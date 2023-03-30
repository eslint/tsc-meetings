# 03/23/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Looks like @Sam3k won't be joining live, but he'll review the transcript and put together some notes.
 * 👍 @Sam3k, @mdjermanovic

**nzakas:** We don't have anything tagged for the meeting so we can freestyle a bit. Are there any issues or PRs that are stuck that you'd like to discuss?

**mdjermanovic:** This one keeps getting stale warnings: https://github.com/eslint/eslint/pull/16196

**nzakas:** It looks like it's ready for your review?

**mdjermanovic:** I think it's important to finish the design in https://github.com/eslint/eslint/issues/15261 before considering the change in the mentioned PR

**nzakas:** Can you give a summary of what's going on here?

**mdjermanovic:** The PR aims to add an option (to the `no-restricted-imports` rule) that could possibly conflict with a solution for the accepted issue

**mdjermanovic:** I think we should first get to the design to fix the issue https://github.com/eslint/eslint/issues/15261  before considering adding new options to this rule

**nzakas:** Okay, can you take the action to summarize the current state of that issue as a comment and then to also comment on the PR about the status? These have been open long enough I think we need a reset with a clear understanding of what's going on.

**mdjermanovic:** Yes, I'll take that.
 * 👍 @nzakas

**nzakas:** Okay, we've decided to hold off on merging the PR and update the issue with a summary.
 * 👍 @mdjermanovic

**nzakas:** Any others you'd like to discuss? (I have a few)

**mdjermanovic:** Nothing else in particular from me

**nzakas:** Okay, there are a few that have been stagnant for a bit that I'd like to go through

**nzakas:** https://github.com/eslint/eslint/issues/16726

**nzakas:** This requests to add a `--shard` flag to the CLI that will limit which files are linted. Jest and Vitest have a similar flag.

**nzakas:** Are we interested in adding such a flag?

**mdjermanovic:** That would allow for parallel linting?

**nzakas:** More accurately it would allow others to more easily implement parallel linting

**mdjermanovic:** Sounds interesting, and it seems that other tools have this option. I think we could evaluate a RFC

**nzakas:** It seemed like gajus was willing to write one, so we can take it from there.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've decided to accept an RFC for `--shard` so we can determine whether or not to move forward.
 * 👍 @mdjermanovic

**nzakas:** Next: https://github.com/eslint/eslint/issues/16954

**nzakas:** I think this hurt everyone's brain because no one has triaged it. 😅

**nzakas:** It's asking to change `no-loop-func` to exempt a particular pattern

**mdjermanovic:** Ah, that would require using code path analysis

**nzakas:** I've read this over a few times and it seems like the rule is behaving correctly to me

**nzakas:** The point of the rule is to warn you that the value of variable might change between the point where the function is created inside the loop and the point where the function is called. This seems exactly to be the case here?

**mdjermanovic:** There's a `return` right after the function is created

**mdjermanovic:** So, I think the value will stay the same

**nzakas:** Ah!

**nzakas:** Totally missed that while skimming

**mdjermanovic:** In my understanding, the proposal is to not warn when the execution, after the function is created, cannot reach any point where the variable is updated

**nzakas:** Right.

**mdjermanovic:** Which, I think, definitely makes sense for this rule. The question is whether it's worth the complexity

**nzakas:** Right. I kind of feel like the effort to implement that isn't worth it.

**mdjermanovic:** Looks like we think the same 🙂

**nzakas:** We've always said that we want rules to cover the 90% case, and I think this definitely falls within the 10% case.

**nzakas:** Okay, we've decided to not accept this proposal as the complexity cost isn't worth it.
 * 👍 @mdjermanovic

**nzakas:** Next: https://github.com/eslint/eslint/issues/16921

**nzakas:** This is to implement a new rule to prefer static fields. It looks like you were 👍 and I'm 👎. To me, this is an uncommon pattern and doesn't merit the weight of a core rule, but if you feel strongly that it should be included I'll defer.

**mdjermanovic:** In my opinion, this pattern is what the class static fields are designed for

**nzakas:** Oh, I'm not debating that. It's just we already have 300 core rules and this doesn't feel important enough to warrant an addition.

**mdjermanovic:** I think the proposal makes sense. However, I'm not sure how much would the rule be able to detect what should be converted to static fields, it would have to do an extensive analysis of the code that comes after the class definition.

**mdjermanovic:** And class static fields don't fall under our policies of features added in the last 12 months, so I'll be more in favor of not accepting the proposal.

**nzakas:** Okay, in that case it seems we have agreement to not accept this proposal.
 * 👍 @mdjermanovic

**mdjermanovic:** Yes

**nzakas:** Next: https://github.com/eslint/eslint/issues/16902

**mdjermanovic:** I support the proposal

**nzakas:** This seeks to change the behavior of `no-loop-func` to not warn on IIFEs. It seems you and fasttime both are in favor, and I don't have an objection.

**nzakas:** It seems like the open question is about whether or not to add an option?

**mdjermanovic:** Ah, yes.

**mdjermanovic:** Given the purpose of this rule, I don't think an option is necessary

**nzakas:** Agreed.

**nzakas:** And to fasttime's comments, do we want to keep reporting on IIFEs inside of async and generator functions?

**mdjermanovic:** Yes, I think we should keep reporting on that, as it's a code that isn't immediately executed

**nzakas:** Okay, so it looks like we have agreed to 1) accept the proposal, 2) not add an option and instead make this change a default behavior, and 3) to continue warning in the async/generator case.
 * 👍 @mdjermanovic

**nzakas:** Last one: https://github.com/eslint/eslint/issues/13481 😄

**nzakas:** We have completed phase 2 for flat config development and the next phase is to do compatibility testing. For that, I envision working with each plugin to get their own repo converted to flat config to see what breaks.

**nzakas:** Along those lines, I could use some help.

**nzakas:** Are there any of those plugins listed in phase 3 that you're familiar with and would be willing to help with this?

**mdjermanovic:** I could take `eslint-plugin-n` (that looks like a good place to start), then `eslint-plugin-import`, `eslint-plugin-react` and `eslint-config-airbnb`

**nzakas:** That would be a great help. I'll take the rest.

**mdjermanovic:** The goal for the start is just to get their own repo to switch to `eslint.config.js`, or to update plugins/configs to export the new format of configs?

**nzakas:** Both. First to update their own repo, then to look at updating the configs they export.

**nzakas:** I'm guessing most will use their own configs, so it'll be a good dogfooding exercise.
 * 👍 @mdjermanovic

**nzakas:** All right, so we've agreed to split up the work on the compatibility testing.
 * 👍 @mdjermanovic

**nzakas:** And the only last thing to discuss is the release

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**mdjermanovic:** Seems we'll have plenty of packages to release: `eslint-visitor-keys`, `espree`, `@eslint/eslintrc` (to sync espree dependency), `@eslint/js` and `eslint`
 * 👍 @nzakas

**nzakas:** Everything went okay with the release-please releases last time?

**mdjermanovic:** Oh, we didn't release `@eslint/create-config` yet

**mdjermanovic:** Ah, you mean the last `eslint` release. We didn't switch to release-please for those packages yet, all were released from the Jenkins server

**nzakas:** Ah okay. Seems like we should maybe start using it on a package that is released a bit more frequently? I'd vote for Espree

**mdjermanovic:** I'd like to release `@eslint/create-config` once, just not sure how to trigger release-please

**nzakas:** You should be able to do it with an empty commit

**mdjermanovic:** I'll try that next week

**nzakas:** `git commit -m 'fix: Update documentation' --allow-empty`
 * 👍 @mdjermanovic

**nzakas:** Oh, I forgot: the Mastodon syncing with Twitter is now permanently broken, so if you wouldn't mind manually posting to Mastodon after the release, I'd appreciate it.

**mdjermanovic:** Sure!

**nzakas:** The credentials are in 1Password
 * 👍 @mdjermanovic

**nzakas:** You just log in at fosstodon.org
 * 👍 @mdjermanovic

**nzakas:** I'm working on a way to automate posting to Mastodon, too, just testing it on my personal projects first.

**nzakas:** Oh, and it appears the GitHub bot did deploy correctly this time so the triage label should be gone for good
 * 👍 @mdjermanovic

**nzakas:** All right, I think that's it for today. Thanks! (and thanks @Sam3k for notetaking)

**mdjermanovic:** Thanks 👋
