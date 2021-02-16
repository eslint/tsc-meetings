# 02/11/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**mysticatea:** Hello

**nzakas:** Howdy

**nzakas:** Looks like we are at full strength, so let's get right into it.

**nzakas:** @btmills good for taking notes?

**btmills:** yep

**nzakas:** Awesome, thanks

**nzakas:** First item: https://github.com/eslint/eslint/issues/14026

**nzakas:** > **TSC Summary:** This proposal seeks a way to disable a plugin that has been included by a shared config. Essentially, a way to say "I want the shared config _except_ for this plugin it's including." Disabling the plugin would mean disabling all rules, unregistering processors, removing environments, etc.
> 
> **TSC Question:** Shall we accept this proposal?

**nzakas:** I'll just say straight out I'm not a fan of this proposal.

**btmills:** I'm daunted by how complex that would be to implement, and I have no idea if it'd even be possible to do without cascading breakage to other things

**nzakas:** Anyone? 🙂

**mysticatea:** We can use `plugins` and `extends` settings in `overrides`, so we can enable plugins for specific files. Hmm. If we want to implement this feature, I think we can use `plugins: ["!my-plugin"]`-like notation as similar to file patterns doing.

**nzakas:** Outside of implementation details, is it something we want to consider? Personally, I just don't think it's a common enough case to build into ESLint.

**nzakas:** And a reminder that ESLintRC is frozen now so we'd need to do this with flat config if anything.

**btmills:** If it were just `rules: { "plugin/*": "off" }` to disable only rules, I'd be less negatively inclined

**btmills:** In flat config, couldn't at least the "disable all rules" be implemented in userland?

**mysticatea:** Agreed. I'm not active for the feature of turning plugins off.

**nzakas:** @btmills you'd need to be able to get a complete list of rules that would be applied, and there isn't a way to do that currently. (Though we could always add a method to `context` to do something along those lines, I suppose.)

**nzakas:** So it seems like we don't have anyone who's in support of this. @mdjermanovic any thoughts?

**mdjermanovic:** I can see some value, but there are other ways to disable all rules, and the implementation seems very complex

**mdjermanovic:** so not in favor

**nzakas:** Okay, so it sounds like we've decided to reject this proposal. Agreed?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** All right, next item: https://github.com/eslint/rfcs/pull/42

**nzakas:** > **TSC Summary**: ESLint assumes that each rule and source file can be processed independently. `typescript-eslint` (ref [#42 (comment)](https://github.com/eslint/rfcs/pull/42#issuecomment-561296926)) and `eslint-plugin-import` (ref [#42 (comment)](https://github.com/eslint/rfcs/pull/42#issuecomment-536586884)) need to do upfront initialization work beyond the scope of a single rule and source file, specifically loading type information and tracing a module graph. Lacking a first-class API, they have inserted these initialization steps into the regular rule linting flow.
> 
> If we were to ship parallel linting without supporting this use case, the duplicated initialization could make parallel linting _slower_ than single-threaded linting with these plugins. The large number of ESLint users who also use one of these plugins would not benefit from parallel linting.
> 
> This API would need to provide the plugin with the config and list of files to be linted, and parallel linting would need a way to share the result with workers.
> 
> **TSC Question**: Are we interested in an RFC for a plugin initialization API? If so, is that functionality a prerequisite for parallel linting?

**nzakas:** So I think that the use cases of `eslint-plugin-import` and `typescript-eslint` are slightly different. For `import`, I can argue that ESLint should probably be doing some of that work in the core; for `typescript-eslint`, there's no argument for that.

**btmills:** We've been discussing this on parallel linting threads for a couple years now without much movement. I'm of the opinion that it's important to support

**nzakas:** I'm a little concerned about plugin initialization as a first-class citizen

**mysticatea:** I'm not sure if hooks for plugins block parallel linting.

**btmills:** @nzakas for `import`, by doing that in core do you mean assembling the import graph?

**nzakas:** @btmills yes. `eslint-plugin-import` is parsing everything on its own, and then we are also parsing everything. That's pretty wasteful when we could just figure out a way to pass rules information about other files we already know about.

**btmills:** @mysticatea if we ship parallel linting without this, we and/or those plugin authors would need to tell users of those plugins that they probably shouldn't enable parallel linting

**btmills:** @nzakas that's a good point... if we could provide the parsed AST for each file, that'd offload a lot of work

**nzakas:** My view on this isn't as dire as yours @btmills. My feeling is that people will try parallel linting to see if it's faster. If so, they'll keep using it; if not, they won't use it.

**mysticatea:** @nzakas in that case, the mater is that ECMAScript spec doesn't include path resolution logic. Platform/tools have own resolution logics.

**nzakas:** @mysticatea yup, and those are pretty well-defined at this point, so I don't see that as a blocker.
 * 👍 @mysticatea

**btmills:** I'd go the other way on path resolution - the various `eslint-plugin-import-resolver-*` could still live in the plugin, but instead of hitting the filesystem and parsing, they'd be able to use the pre-parsed file ASTs provided by ESLint

**btmills:** There are enough variations in resolver tweaks that I wouldn't want to support them all in core (at least node, webpack, and typescript, and there are probably others)

**nzakas:** Just to put some context around things, `typescript-eslint` is still a tiny amount of users related to ESLint as a whole: https://npm-stat.com/charts.html?package=eslint&package=typescript-eslint

**nzakas:** So while I'd like to do something useful for that, I also don't think optimizing for `typescript-eslint` should be a high priority.

**btmills:** @nzakas that's not the main package - it's `@typescript-eslint/eslint-plugin`, which is a larger percentage https://npm-stat.com/charts.html?package=eslint&package=%40typescript-eslint%2Feslint-plugin&package=eslint-plugin-import&from=2020-02-10&to=2021-02-10

**mdjermanovic:** Isn't that an old package?

**nzakas:** Oops, thanks @btmills

**btmills:** Looks like TS is ~1/2 and import is ~2/3 based purely on download count

**nzakas:** I stand corrected

**nzakas:** So let's try to move this discussion along. The question at hand is if we want to invest in a plugin initialization API. Where do people stand on that question?

**mysticatea:** Thanks. I don't think it's a blocker. The best concurrency number is different by multiple kinds of state; settings, machine spec, etc. People have to configure and measure it.

**btmills:** I think we should because these use cases are happening with or without us, and I'd rather have a first-class API

**nzakas:** It seems like, at the very least, it's worth exploring some kind of plugin initialization API. To @mysticatea's point, I don't think it's an obvious win, but if we design it, it should be with parallel linting in mind.

**mysticatea:** I think we should, but in a separated RFC.
 * 👍 @nzakas, @btmills, @mdjermanovic

**nzakas:** Okay, so it looks like we've decided we want to pursue a plugin initialization API in a separate RFC.

**nzakas:** The second question was if that RFC should block the parallel linting RFC?

**btmills:** In an ideal world, plugin initialization would exist so that TS and import could already be using it when we ship parallel linting, and all users would immediately see big wins from using both. If we end up shipping parallel linting without it and only a minority of our users can enable parallel linting, it's not the end of the world, but it'd be a bummer

**nzakas:** So you're in favor of it as a blocker. I'll agree.

**btmills:** That's certainly my preference, but I'm not going to lay down on the tracks if y'all disagree

**mysticatea:** The point of before starting exist regardless of parallel or not. So we can add initialization API anytime, I think.

**nzakas:** @mdjermanovic thoughts?

**mdjermanovic:** If most users won't see the benefits of parallel linting without the plugin initialization step, then it might be better to do it first

**nzakas:** Okay, can we agree to work on plugin initialization before finalizing parallel linting?
 * 👍 @btmills, @mdjermanovic

**btmills:** As an immediate next step, I can open an issue on eslint/eslint for a requirements gathering discussion so we can get it out of the parallel linting RFC
 * 👍 @nzakas, @mdjermanovic

**nzakas:** That sounds good

**nzakas:** @mysticatea it looks like the rest of the team has agreed, can you support this direction?

**mysticatea:** Hmm. I'm not happy, but OK.

**nzakas:** Thanks 🙂

**nzakas:** All right, so we decided to 1) pursue a plugin initialization API, 2) have that work completed before parallel linting is finalized, and 3) open an issue to gather requirements
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/10415

**nzakas:** > TSC Summary: This issue proposes to introduce something like `coveralls`, to check test coverage changes.
> 
> TSC Question: Shall we accept it?

**nzakas:** Having just fought through the test coverage monster on eslint/eslintrc, I'm just not sure how valuable this is

**nzakas:** We did have coveralls running at one point, I'm not sure what happened to it

**nzakas:** I also don't recall really using it all that much when it was enabled

**btmills:** We still report coverage information after test runs. Perhaps it's just the coveralls integration that's not working?

**nzakas:** Yes, that's right

**nzakas:** 2017 is the last update in coveralls

**mysticatea:** I have always used codecov in my projects to show coverage badge. Coverage badge is nice information for users that are considering adoption. But I'm not sure if it fits for ESLint as well.

**btmills:** Looks like coveralls got removed moving to Azure Pipelines for CI in  https://github.com/eslint/eslint/pull/11845

**nzakas:** Is it just a matter of un-ignoring `test-results.xml`?

**btmills:** I have no objections to showing a badge for the coverage report we're already gathering if it's as easy as re-connecting the right pieces

**nzakas:** We are running out of time, so let's just see what everyone thinks: do we want to enable Coveralls?

**mdjermanovic:** `typescript-eslint` is using Codecov to check PRs: https://github.com/typescript-eslint/typescript-eslint/pull/3017

**btmills:** I'm 👍 to either codecov or coveralls and will defer the details to whoever takes the initiative to set it up

**nzakas:** I'm slightly 👎 as I don't think there's much value, but I don't feel too strongly.

**nzakas:** @mysticatea @mdjermanovic what say you?

**mysticatea:** I don't have strong opinions. But I like coverage badges.

**nzakas:** Okay, we need to move things along, here. If @aladdin-add wants to take the lead on this, shall we let him do so?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**btmills:** To me the biggest benefit is when it lets me catch a PR that adds new rule functionality but misses some test cases. Beyond that, I mostly ignore it

**mdjermanovic:** It might be useful for PRs, though our reviews are more detailed than checking uncovered lines

**nzakas:** Okay, next item:

**nzakas:** > Agenda item: should we consider switching to [conventional commits](https://www.conventionalcommits.org/)? Doing so would allow us to adopt already-available tooling for releases rather than maintain our own. For example [Release-please](https://github.com/googleapis/release-please) would solve our problem around major releases. This would be a bunch of work, but could allow us to move off of Jenkins.

**nzakas:** Oops, that first link got messed up: https://www.conventionalcommits.org/en/v1.0.0/

**btmills:** I'm open to it because it'd let us get rid of a lot of custom release infrastructure, but I'd prioritize it below flat config and parallel linting because the current tools work well enough outside of prereleases blocking minor releases
 * 👍 @nzakas

**mdjermanovic:** Can the tools we'd like to use be configured to follow our commit message convention

**nzakas:** @mdjermanovic no. Most are pretty tied to conventional commits.

**nzakas:** It seems like we are the last big project who doesn't use that format, so could also help the lower the bar for new contributors (who tend to use conventional commits until our bot pesters them to change it)

**nzakas:** All I'm looking for is if we think that's a direction we'd like to head in. I'd just plan on opening an issue to gather feedback and eventually put together an RFC once flat config is done.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**btmills:** That's true, there's a whole section of our contributing docs we'd be able to replace with a link. I'm willing to learn the conventional commits style

**nzakas:** Okay, it looks like we've decided that's a direction we'd like to head in. I'll take the action item to open an issue to start the discussion.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Next:

**nzakas:** > 
> Agenda item: There are some very old issues opened on `eslint-plugin-markdown`. Do we intend to address them or should we close them?

**nzakas:** I discovered these while trying to get our issues into the Triage project 🙂

**btmills:** Sorry, I should've been more on top of those. I think at this point we can close them as "yeah, would be nice, but not enough demand to make it a high priority" because they're all edge cases around the `<!-- -->` config comments

**nzakas:** Sounds good. Can you take the action item to review and close any outstanding issues?

**btmills:** will do

**nzakas:** Thank you, sir

**nzakas:** Last item:

**nzakas:** > > Agenda item: let’s followup on the new triage process and see what changes, if any, we should make to get things going.

**nzakas:** Not sure how much people have tried it yet, but if so, I was curious about the experience.

**nzakas:** I still need to send out an email to the team about it.

**nzakas:** I've tried to go back and get some of the older issues into the project, as well

**mdjermanovic:** The process looks good to me.

**btmills:** I tried using it for a chunk of my review time this week, and it was a definite improvement over the usual full table scan. No concrete feedback so far

**nzakas:** Cool, let's just check in periodically and see what tweaks/automation are needed.

**mdjermanovic:** Is there a way to sort project columns differently?

**mdjermanovic:** so that newly added items appear first

**nzakas:** Not that I'm aware of. There's very little default automation available

**nzakas:** Maybe there's a way with the API, but I'm not sure

**nzakas:** I can look into it. At this point, I'm just happy if new items are ending up "Needs Triage" at all  🙂
 * 😆 @btmills

**nzakas:** Okay, last thing: the release for tomorrow. Any volunteers?'

**mdjermanovic:** I can tomorrow

**btmills:** I'm able to do it late if Jenkins hasn't already gone to bed

**btmills:** I'll do markdown v2.0.0 this weekend even if @mdjermanovic does the eslint release

**nzakas:** Sounds like a plan. Thanks everyone, I need to go lie down.

**mdjermanovic:** Thanks!

**btmills:** @mdjermanovic I'll put you down for the eslint release
 * 👍 @mdjermanovic

**btmills:** Thanks everyone! 👋

**mysticatea:** Thank you 👋
