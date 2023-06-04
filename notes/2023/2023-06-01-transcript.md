# 06/01/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** I'm just getting settled into my new place so hopefully should be back to full speed relatively soon here. 🙂
 * 👍 @Sam3k, @mdjermanovic

**nzakas:** So let's jump in. I added one agenda item.

**nzakas:** https://github.com/eslint/eslint/issues/17225

**nzakas:** > **TSC Summary:** This issue outlines the steps needed to fix our documentation license issue.
> 
> **TSC Question:** What is the plan for making these changes? Should it be done before, with, or after the release?

**mdjermanovic:** Given the amount of work, I think we should start after the release

**nzakas:** That's what I was thinking, as well, though it means we can't merge any documentation for this release.

**mdjermanovic:** And right after the release so that we have around 2 weeks to finish before the next one

**mdjermanovic:** It seems so, some PRs would have to wait for the next release

**nzakas:** Which I think is fine to clear this mess up

**mdjermanovic:** Agreed

**nzakas:** So right after the release would mean Monday assuming no patch release?

**mdjermanovic:** Yes, right after we close the release issue we could merge the two revert PRs and start getting back the docs changes
 * 👍 @nzakas

**mdjermanovic:** on Monday

**nzakas:** Okay, we've agreed to hold off on making these changes until after the release. We'll merge those first thing once the release issue is closed.
 * 👍 @mdjermanovic

**nzakas:** Some other things I think we need to discuss

**nzakas:** https://github.com/eslint/eslint/pull/17181

**nzakas:** You're saying that the published version didn't contain the fix?

**mdjermanovic:** Yes, I believe the published config-array v0.11.9 is not okay, I'll doublecheck but it looks the same as v0.11.7

**nzakas:** Hmmm

**mdjermanovic:** (I was comparing the built and published `apijs` file)

**nzakas:** Ah crap, I see what happened.

**mdjermanovic:** Worst case, if we don't fix that until tomorrow, I can pin to v0.11.8

**nzakas:** I'll push a new version once we're done here.

**mdjermanovic:** About that

**nzakas:** By "about that" i assume you mean this? https://github.com/eslint/eslint/issues/17213

**mdjermanovic:** I think the new version shouldn't include https://github.com/humanwhocodes/config-array/commit/0163f313dbfe50d283042141dbad5958f9d5d2ad until we figure out the solution for https://github.com/eslint/eslint/issues/17213

**nzakas:** Yeah, I'm going to back that out first

**mdjermanovic:** Yes, I was just slow looking for the commit and the issue 🙂

**nzakas:** Since we have that issue up now, let's make that an offical agenda item and dive in a bit.

**nzakas:** To summarize: `foo/` ignores a directory in a config object without `files`, but doesn't ignore files in the `foo` directory if `files` is present.

**mdjermanovic:** Logically, when checking whether `path/to/file` is ignored, we should check if either of `path/`, `path/to/` or `path/to/file` is ignored by matching the patterns

**mdjermanovic:** At the first glance, that doesn't seem overly complex to implement, unless the concern is performance

**mdjermanovic:** If the performance is a concern, then there should be some caching, and in that case it is much more complex

**nzakas:** Well, it tries to smart about what it checks when.

**nzakas:** So first it checks all of the globally ignored directories and bails out if any of those are true.

**nzakas:** https://github.com/humanwhocodes/config-array/blob/main/src/config-array.js#L713

**nzakas:** Only if it passes that does it then go on to check the specific ignores related to files.

**nzakas:** https://github.com/humanwhocodes/config-array/blob/main/src/config-array.js#L724

**mdjermanovic:** Global ignores and ignores per config object could work the same, and use the same code, if not for caching

**nzakas:** Er, sorry, that should have been: https://github.com/humanwhocodes/config-array/blob/main/src/config-array.js#L748

**nzakas:** They *could* work the same, I'm just concerned about the tradeoffs here. One way or another it's a significant refactoring that could have a performance impact. The way we check directories is actually to crawl back up the file path and check every level. That's an acceptable tradeoff for global ignores because the results can be cached and reused for every config object.

**mdjermanovic:** Yes, if we want a better performance, for non-global ignores we would have to cache ignored directories per config object

**nzakas:** Right, and to me this feels like too much complexity when we can just say "use ** in `ignores` with `files`" and be done with it.

**nzakas:** There's already a way to get the desired behavior, so this doesn't seem worth all of the extra work.

**mdjermanovic:** Each config object with ignores  (`{ files: ..., ignores: ..., rules: ... }`) would need to have its own cache of ignored directories

**mdjermanovic:** I'm not in favor of changing the original patterns, that looks confusing

**mdjermanovic:** I would be in favor of saying that non-global ignores can match only files, but without modifying patterns (appending `**` to `foo/`)

**nzakas:** So a documentation update?

**mdjermanovic:** Yes, I think it's a good solution

**nzakas:** It sounds like we've agreed to not make any code changes and instead update the documentation to explicitly mention that non-global ignores can only match files and so patterns like `foo/` will not ignore anything.

**mdjermanovic:** Yes, `foo/` in a non-global ignores does nothing 🙂 I think thats fine
 * 👍 @nzakas

**nzakas:** Okay, it is so decided! 🎉

**nzakas:** I'll revert my last commit to config-array
 * 👍 @mdjermanovic

**nzakas:** Are there any other issues/PRs that have been stuck waiting for me that you'd like to bring up?

**mdjermanovic:** Nothing urgent I think

**mdjermanovic:** Some PRs are waiting for your approval, but those include docs changes so they have to wait for the next release anyways

**nzakas:** Yup, still making my way through everything. Finished RFCs today, will get through more PRs tomorrow.

**nzakas:** Okay, then let's look at contributor pool for May

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-05-01..2023-06-01

**mdjermanovic:** This one too: https://github.com/eslint/eslint.org/pull/441

**nzakas:** Added

**nzakas:** $100 each?

**mdjermanovic:** Agreed

**nzakas:** I'll let them know
 * 👍 @mdjermanovic

**nzakas:** I think the only thing left to discuss is the release?

**mdjermanovic:** I can tomorrow

**mdjermanovic:** That would be only `eslint` (and of course `@eslint/js`) this time I believe

**nzakas:** Sounds good.

**nzakas:** All right, if that's all, I think we can call it a meeting. Thanks! (And thanks @Sam3k for the notes)

**mdjermanovic:** Thanks! 👋
