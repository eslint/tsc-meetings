# 10/17/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just looking over the notes from last time and it doesn't look like we have any action items to follow up on .

**nzakas:** So let's do statuses. I didn't do too much on account of being offline. A bit of work on `@eslint/json` to allow trailing commas in JSONC and otherwise I'm just trying to get caught up on notifications.

**mdjermanovic:** I was working on `Language#defaultLanguageOptions`, fixed the `markdown/no-missing-label-refs` rule, and updated repos to use prerendered sponsors.

**fasttime:** I've done the release, worked on removing jiti v1.21 and fixing Windows path handling in `config-array`, and did some minor fixes. Also triged and reviewed issues and PRs.

**nzakas:** And just a quick update of RFC duty:
This week: @fasttime 
10/21: @nzakas 
10/28: @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, it looks like we don't have anything tagged for this meeting. Any topics anyone would like to discuss?

**mdjermanovic:** I have one

**mdjermanovic:** Any objections or concerns about merging this? https://github.com/eslint/eslint/pull/19011

**fasttime:** No concerns from my side.

**nzakas:** No objections

**mdjermanovic:** Okay, then I'm going to merge it
 * 👍 @nzakas, @fasttime

**nzakas:** Just looking through some open issues...

**nzakas:** This one has been "tsc waiting" for a bit: https://github.com/eslint/js/issues/623

**nzakas:** This asks to expose the Acorn plugin from Espree. While I'm not in favor of exposing it via the `espree` package, I'm starting to think it could be beneficial to expose it through another package.

**nzakas:** Basically, as a toolkit for people who want to customize Acorn and still have it usable through ESLint.

**nzakas:** I ran into this experimenting with a TypeScript Acorn plugin, where I ended up needing to re-implement a lot of the fixes that Espree does to the AST.

**mdjermanovic:** So, that would also be useful for us if we decide to make a TypeScript parser?

**nzakas:** Yes. Or if someone else does.

**mdjermanovic:** I'm generally in favor. I'll look into details posted on the issue over the weekend

**nzakas:** Sounds good.

**fasttime:** I'm also in favor, but still not sure what needs to be done. If @mdjermanovic wants to take a look that would be great.

**nzakas:** Great, we'll follow up on the issue.

**nzakas:** Just to check in on this issue: https://github.com/eslint/eslint/issues/18621

**nzakas:** I believe everything is complete and we can close this?

**nzakas:** (The last step was deprecating old packages.)

**mdjermanovic:** Yes, I also believe all tasks are done

**fasttime:** Sounds good to close

**nzakas:** Great, closed!
 * 👍 @mdjermanovic

**nzakas:** Any other topics to discuss?

**fasttime:** Nothing from my side

**mdjermanovic:** Nothing in particular from my side for today

**nzakas:** And it looks like the v8 EOL stuff was all completed too. Will be interested to see if HeroDevs gets any business from that.

**nzakas:** Let's talk about the release.

**fasttime:** I can do the release tomorrow

**mdjermanovic:** Thanks!

**nzakas:** Thanks!

**fasttime:** Shall we release also `@eslint/core` and update the dependency in eslint?
 * 👍 @nzakas

**mdjermanovic:** If https://github.com/eslint/eslint/pull/19003 gets merged for tomorrow's release, I think yes.

**mdjermanovic:** I'm only not sure if we want to release packages that only had dev deps update: https://github.com/eslint/rewrite/pull/124

**mdjermanovic:** I don't know why release-please works that way. Didn't find an option to change that behavior

**nzakas:** That is strange. 🤔 It probably figures that you always want to keep the published versions of all packages in a monorepo in sync.

**mdjermanovic:** Yeah, it seems useful to update dev deps. I just wouldn't expect bumping and releasing versions because of it

**nzakas:** Agreed. Unfortunately, it doesn't seem like we have a choice. I think the only way out of it would be to update `release-please-config.json` to have separate PRs for each package.

**mdjermanovic:** Seems like it treats devDependecies the same as dependencies

**mdjermanovic:** Temporarily for this release, or always?

**nzakas:** Well, anytime we want to not publish one package because of a dev dep upgrade. So if that's always the case, then we'd need it in there permanently (unless release-please makes a change).

**nzakas:** I'm generally not a fan of having separate PRs for each package as I think most of the time we want to publish multiple at once, but I'm not completely against it.

**mdjermanovic:** I'm also not very much in favor. It's usually quite useful to release all at once and automatically update dependencies

**nzakas:** May be worth opening an issue on release-please? Won't help for this week, but maybe something can be done.

**fasttime:** So shall we release all packages? Or update the release-please config temporarily to only release `@eslint/core`?

**mdjermanovic:** I think it would be good if we find an option to temporarily make it release just `@eslint/core` and then switch it back

**mdjermanovic:** Or just release all packages 🙂

**nzakas:** I'd say just release all the packages. It'll create some Twitter noise but jumping through hoops for this doesn't seem like a good use of time.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Agreed. I'll release `eslint/rewrite` if the PR is merged by tomorrow.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, I'll review the PR after this meeting.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**mdjermanovic:** Thanks!

**nzakas:** Does anyone want to file an issue with release-please?

**mdjermanovic:** I'll file an issue

**nzakas:** Thanks!

**fasttime:** Thanks!

**nzakas:** Okay, I think that's all for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks everybody, bye!
