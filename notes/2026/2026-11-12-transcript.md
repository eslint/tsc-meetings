# 11/12/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just pulling up notes from last time

**nzakas:** So we decided to enable automerge on Renovate dependencies and @fasttime was to look into that.

**fasttime:** That's in progress currently.
 * 👍 @nzakas, @mdjermanovic

**fasttime:** This is the tracking issue: https://github.com/eslint/eslint/issues/21497

**nzakas:** I was going to prepare and release `@eslint/shell`. That was completed.

**nzakas:** @mdjermanovic was going to review the eslint-plugin-react PR. I see that's tagged with "tsc waiting".

**mdjermanovic:** Yes, there's an open question

**nzakas:** @mdjermanovic to open an issue discussing how to handle regex in configs for v11

**mdjermanovic:** Here's the issue: https://github.com/eslint/eslint/issues/21529
 * 👍 @nzakas, @fasttime

**nzakas:** @mdjermanovic to update docs to discourage use of non-serializable values in configs

**mdjermanovic:** That was done by a contributor. I reviewed and merged the PR: https://github.com/eslint/eslint/pull/21487
 * 👍 @nzakas, @fasttime

**nzakas:** @mdjermanovic to remove the v9.x EOL notice from the website

**mdjermanovic:** That is also done, and merged on the exact date
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, looks like those are all the action items from last meeting.

**nzakas:** So let's move on to statuses.

I worked primarily on `@eslint/shell` (setting up publishing, blog post, updating  `@eslint/create-config` and code inspector) and started work on `@eslint/docker`.

**mdjermanovic:** I was mostly reviewing PRs, there was a plenty of PRs submitted in eslint/eslint

**fasttime:** I prepared PRs to enable Renovate dependency automerge, made a fix in the tsc-meeting transcript generator, and other than that I worked on reviewing issues and PRs.

**nzakas:** All right, let's talk availability for the next two weeks. I expect to be available 7-10 hours each week. I'll be offline November 26 and 27.

**mdjermanovic:** I expect to be available 1-1.5 hours daily

**fasttime:** I should be still available 7 hours per week.

**nzakas:** RFC Duty
This week: @nzakas 
November 16: @fasttime 
November 23: @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we have some items flagged with "tsc waiting" and a couple agenda items on the meeting issue. I'll start with "tsc waiting".

**nzakas:** (I have a new AI automation to pull these so that's why the language might seem different.)

**nzakas:** First item: https://github.com/eslint/eslint/issues/21448

**nzakas:** **Summary:** This AI-assisted PR fixes #21441, where cached lint results could be reused after `--no-inline-config` or `--quiet` changed between runs. It adds `allowInlineConfig` and whether the built-in `--quiet` rule filter is active to cache validity, keeps `--quiet --max-warnings` compatible with normal cached results, and adds tests and CLI docs. The author later limited the change so custom API `ruleFilter` caching is unchanged, after maintainers questioned an earlier version that disabled caching for custom filters as a possibly breaking change in a minor release.

**nzakas:** **Inferred ask (inference, not source text):** `tsc waiting` was added on 2026-11-10 by mdjermanovic, right after his comment: "I'm not sure if we should make this kind of change in a semver-minor version. @eslint/eslint-tsc thoughts?" The TSC is being asked whether making custom `ruleFilter` functions stop reusing cached results is acceptable in a semver-minor release. fasttime replied that this looks like a breaking change and suggested forbidding `cache: true` with a custom `ruleFilter` instead of silently ignoring the cache. The author then changed the PR to leave custom `ruleFilter` behavior unchanged. It is unclear whether the TSC still needs to decide anything.

**nzakas:** So the question is semver-minor or semver-major?

**mdjermanovic:** I didn't check the latest versions of this PR, but if the mentioned behavior was reverted then the question no longer applies

**mdjermanovic:** And we can, of course, discuss whether the behavior that was proposed should be treated as a breaking change

**mdjermanovic:** The behavior was to effectively ignore cache when a custom `ruleFilter` function is passed through the API

**mdjermanovic:** Which makes sense, but still looks like a possibly unwanted behavior

**fasttime:** The author reverted the change that disabled caching with custom `ruleFilter` functions after my comment.

**nzakas:** Okay, so is there anything we need to decide here?

**mdjermanovic:** Doesn't look like to me (meant to say that it seems there's nothing to decide from the TSC at the moment)

**nzakas:** @fasttime ?

**fasttime:** I think the question no longer applies to the PR, we could discuss in a follow-up if it makes sense to change the current behavior (in a breaking change)

**nzakas:** In a followup on the issue?

**nzakas:** Or do you want to discuss now?

**fasttime:** Better in a follow-up on the issue I'd say.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've agreed there's no decision to be made on this. We'll follow up on the issue to further discuss if we want to change the current behavior.

**nzakas:** Next item: https://github.com/eslint/js/issues/779

**fasttime:** Yes, I will comment on the issue.

**nzakas:** **Summary:** This change request asks to remove `ExperimentalRestProperty` and `ExperimentalSpreadProperty` from `eslint-visitor-keys`, since they have been deprecated or removed for many years. The reporter says it should be safe and is willing to submit a PR. DMartens agrees to start a deprecation process, but notes that some plugins, mostly ES5-specific ones, still use these node types, and asks for a TSC member's opinion.

**mdjermanovic:** If we accept this, it might be safest to bundle the change with the next major version of eslint

**mdjermanovic:** i.e. to add this to v11 planning

**nzakas:** I'm not sure why we'd ever remove them.

**nzakas:** It's not like this takes up a lot of space. The issue just says that they're not used so should be safe to remove, not a bug, not a concern.

**mdjermanovic:** That's true

**nzakas:** If the rationale is "we're tidying up," I don't think that's a good reason to possibly affect compatibility with existing parsers.

**fasttime:** We could write in the docs that those node types are deprecated.

**nzakas:** Who would the docs be targeted at though?

**fasttime:** If it's not there yet.

**fasttime:** The docs of eslint-visitor-keys, so the only target audience would be rule developers.

**nzakas:** I don't even think it's worth the time to do that

**nzakas:** This is pretty deep in ESLint's logic, I don't think anyone will need to know this information.

**nzakas:** I'd say let's just close the issue. This is mostly just noise.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed not to move forward and to close this issue.

**nzakas:** Next item: https://github.com/eslint/create-config/issues/273

**nzakas:** **Summary:** This PR fixes #248 by making generated React configs use `@eslint-react/eslint-plugin` (`recommended` for JavaScript, `recommended-typescript` for TypeScript) instead of `eslint-plugin-react`, which was not updated for ESLint 10. It also adds `typescript@~6.0.3` when TypeScript or React is used. It follows an earlier TSC decision to recommend `@eslint-react`, and the author notes the new plugin is not fully equivalent and asks whether to add a documentation note. It was briefly drafted over Node 20.19 support, which was resolved when the plugin added that support in v5.26.0.

**nzakas:** **Inferred ask (inference):** The label was added on 2026-10-16 by lumirlumir, right after his comment asking for TSC opinions on whether this change is a fix, a feat, or a breaking change. A TSC resolution comment from nzakas on 2026-10-29 says the TSC agreed it ships as a semver-minor `feat`. The label was added again on 2026-11-05 by mdjermanovic, and no comment immediately precedes that event or mentions the TSC after the resolution. What the TSC is being asked to resolve now cannot be determined from the available content.

**mdjermanovic:** The question is related to this thread: https://github.com/eslint/create-config/pull/273#discussion_r4436599983

**nzakas:** Can you summarize what your question is? I can't quite tell

**fasttime:** So it's about including a version range to the `typescript` dependency or not?

**mdjermanovic:** The PR proposes unconditionally installing `typescript@~6.0.3` along with `@typescript-eslint` or `@eslint-react/eslint-plugin` because `typescript` is a peer dependency of those packages

**mdjermanovic:** To me it seems maybe too intrusive to enforce that specific range and possibly overwrite user's range

**mdjermanovic:** Since most package managers to my knowledge now automatically install peer deps when missing, I'd rather remove this

**nzakas:** I agree. I don't think it makes sense to hardcode it.

**fasttime:** I mean, we could print a warning if an incompatible version of `typescript`, or if Yarn 1 is found.

**mdjermanovic:** I believe Yarn 1 already prints a warning when a peer dependency is missing

**nzakas:** I think the chances of someone choosing TypeScript in a project that doesn't already have TypeScript installed is pretty small.

**fasttime:** Then it's fine not to install the dependency.

**nzakas:** Okay, we've agreed to not hardcode `typescript` as a dependency
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:

Agenda item: I'd like to propose that we appoint project leads for some of the subprojects under ESLint. We have a lot of packages to maintain and keep track of, and sometimes packages fall through the cracks. We already do this for one project, config-inspector, so we would be following along that path. The idea is to give the project leads the power to decide when to accept issues, merge PRs, and publish releases, so that these things can be taken off of the TSC's plate. We'd need to determine who the right candidates for each project would be.

**mdjermanovic:** Project leads would be existing team members?

**nzakas:** yes

**mdjermanovic:** Makes sense to me

**fasttime:** It would be nice to have some minimum requirements, e.g. which versions of Node.js are supported, so those don't drift apart.

**nzakas:** Agreed. The idea would be that the TSC is still setting global standards for things but the day-to-day operations move to the project leads.

**fasttime:** Makes sense.

**nzakas:** Okay, we've agreed to start appointing project leads for subprojects. I'll take the action items to write up the role in our docs and also email the team to solicit volunteers. If more than one person wants to be a project lead for a single project, we'll need to decide how to proceed from there.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next:

Agenda item: Should we retire the contributor pool? The original goal of the contributor pool was to encourage and reward contributions. We already decided that we do not want to award AI-generated PRs, but now we're running into problems where the person claims AI wasn't used but it actually was, and we've been spending time trying to figure out whether or not the PR deserves an award. I think given the new AI-driven open source world we live in, the contributor pool is no longer going to do what we wanted it to do and is instead giving us more work to evaluate PRs. I think it may be time to retire the contributor pool.

**mdjermanovic:** I agree

**fasttime:** Yes, we should retire contributor pool at some point.

**nzakas:** I want to retire it today 🙂
 * 👍 @mdjermanovic

**fasttime:** I'm sure that will disappoint some contributors, but okay.

**nzakas:** It disappoints me too, but this was never a job or a guarantee, it was always at our discretion as long as it was serving its purpose.
 * 💯 @fasttime

**nzakas:** Okay, we've agreed to retire the contributor pool. I'll take the action item to remove the report generator and write up a blog post announcing the decision.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics to discuss before talk about the release?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from me today

**nzakas:** All right, then let's discuss tomorrow's release.

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**nzakas:** I'd like to see if we can get this in: https://github.com/eslint/rewrite/pull/498

**fasttime:** There's also a new pending release of `config-array`, I can release that after the meeting.

**nzakas:** Id suggest waiting to see if we can merge that first

**fasttime:** Ah, sure.

**fasttime:** Sorry, didn't read the previous comment. Yes, I can review the PR tomorrow.

**mdjermanovic:** I'll try to finish my review too
 * 🙏 @nzakas

**nzakas:** So it will be `eslint` and `@eslint/config-array`?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, I believe that's all for today. Thanks everyone!

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks! Bye!
