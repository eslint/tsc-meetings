# 06/25/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Hmm, are we missing the transcript from last meeting?

**mdjermanovic:** Yes, we don't have notes and the transcript yet

**nzakas:** Ah ok, no notes = no transcript. Right. I'll follow up with @sam3k_

**nzakas:** Then I'll close the old issue.

**nzakas:** Okay all set

**nzakas:** I don't recall having anything to follow up on, so I think we can start with statuses.

For me, still dealing with a lot of health issues so still haven't been able to contribute much aside from a few triages here and there.

**mdjermanovic:** I was mostly reviewing PRs and triaging issues. Also fixed a few bugs in core rules.

**fasttime:** I've been mostly focusing on the `--base-path` RFC and the implementation prototypes.

**nzakas:** Let's talk availability.

I expect my availability to be unchanged, maybe 1.5 hours per week if I'm able.

**mdjermanovic:** I expect to be available 1-1.5h each day. I won't be available on Friday July 10th

**fasttime:** I should be availabe about 10 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week - @nzakas 
June 22 - @fasttime 
June 29 - @mdjermanovic

**fasttime:** This week is June 22

**nzakas:** 🤦‍♂️

**mdjermanovic:** Yeah, the days are correct, but it's shifted by one week

**nzakas:** RFC Duty:
This week - @fasttime 
June 29 - @mdjermanovic 
July 6 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** 😅

**nzakas:** I don't see any issues or PRs flagged for the agenda. We have a couple of issues flagged as "tsc waiting"

**nzakas:** https://github.com/eslint/eslint/issues/20839

**nzakas:** This one proposes setting up Google's OSS fuzzer for ESLint.

**mdjermanovic:** I'm in favor of trying it out, but I'd still keep our fuzzer too, as our fuzzer is more focused on rules

**nzakas:** I think it seems like a good idea too

**fasttime:** I'm also in favor of trying out how it works.

**nzakas:** Okay, we've agreed to accept this issue.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next "tsc waiting" is a PR:
https://github.com/eslint/eslint/pull/20965

**nzakas:** > Okay, here's how it currently works in ESLint:
>     1. If, for example, files `foo?.js`, `foo1.js`, and `foo2.js` all exist, running `eslint "foo?.js"` will match only `foo?.js`, because we always check first if an exact match exists, regardless of whether the passed argument is glob-like.
>     2. If `foo1.js` and `foo2.js` exist, but `foo?.js` does not, `eslint "foo?.js"` will not match anything, and therefore result in `NoFilesFoundError: No files matching 'foo?.js' were found.` error. This is because `is-glob` returns `false` for `"foo?.js"`.
>     3. However, in the previous case, `eslint "foo?.js*"` matches `foo1.js` and `foo2.js`, because `is-glob` returns `true` due to the added `*`, and then `minimatch` inteprets `?` as matching any single character.
> This behavior seems inconsistent, because `?` is treated as a wildcard in case 3. but not in case 2.
> With the changes from this PR, case 2. would match `foo1.js` and `foo2.js`. Cases 1. and 3. would remain the same. I think this is a bug fix we should implement, but would like more opinions from @eslint/eslint-tsc.

**mdjermanovic:** Yeah, I wanted to doublecheck with you shall we treat this as a semver-patch (or perhaps semver-minor) bug fix

**mdjermanovic:** Currently globs like `foo?.js` or `f?o.js` don't work.

**fasttime:** Could this cause new files to be enumerated?

**mdjermanovic:** Yes

**nzakas:** It seems like this bug has been around for a long time

**mdjermanovic:** Most likely, I _think_ it exists in eslintrc mode in older versions too

**fasttime:** It sounds like the fix could break something, so not sure if it could be a breaking change.

**nzakas:** I'm okay with semver-patch because I think people expect it to work the way it does in this PR, but it doesn't.

**mdjermanovic:** It definitely can break builds if newly enumerated files have lint errors. But I think it's kind of a breakage in a good way

**mdjermanovic:** If anyone is using these patterns, they are most likely already getting a "no files found" error

**nzakas:** Okay according to our SemVer policy, it should be semver-minor:

> Minor release (might break your lint build)
>    * A bug fix in a rule that results in ESLint reporting more linting errors.

**mdjermanovic:** An edge case is if someone is using this to target exact match, i.e. a file that has a `?` character in its path

**nzakas:** I'd almost characterize this as "bug fix in a rule" because it can result in more lint errors

**mdjermanovic:** But that's seems like an extreme edge case. For them, the pattern would still enumerate the same files, but maybe some more

**mdjermanovic:** Yes, I'd vote for treating this as a semver-minor bug fix.

**fasttime:** I don't feel strongly. semver-minor is fine I guess.

**nzakas:** Okay, we've agreed to treat this as semver-minor.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Do we also want to update our SemVer policy to say that *any* bug fix that might result in more lint errors should be semver-minor? (not just changes to rules?)

**mdjermanovic:** Sounds good to me. We could give this (enumerating more files as the result of a bug fix) as an example
 * 👍 @nzakas

**nzakas:** Can you take that as an action item?

**mdjermanovic:** Yes, I'll take it

**nzakas:** Thanks!

**fasttime:** Sounds good.

**nzakas:** Okay, that's all we have for flagged issues/PRs. Anything else anyone wants to discuss?

**fasttime:** Nothing in particular.

**mdjermanovic:** Nothing in particular for today

**nzakas:** Okay then let's discuss the release

**fasttime:** I can do the release tomorrow.

**nzakas:** Thanks!

**mdjermanovic:** Thanks!

**fasttime:** Nothing besides `eslint/eslint` it seems.

**mdjermanovic:** I think the same

**nzakas:** 👍

**nzakas:** Okay I think that's it for today. Thanks everyone (and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks 👋
