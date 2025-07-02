# 06/26/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Just going to pull up the notes from last meeting

**nzakas:** We had a couple of followups. @mdjermanovic to investigate the rule options behavior. This was related to https://github.com/eslint/eslint/pull/19843. That was completed. I now need to update that PR.

**nzakas:** And for me, I was going to investigate automating the contributor pool report, which I just opened a PR for: https://github.com/eslint/tsc-meetings/pull/593
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's do statuses next. For me,  I spent most of my time on CSS variable tracking, refactoring the core reporting into a new `FileReport` class, and adding token methods to `JSONSourceCode`.

**mdjermanovic:** I was working on the `basePath` feature

**fasttime:** I've been busy with the multithread linting prototype and different reviews, 50/50.

**nzakas:** Let's talk availability over the next couple of weeks. I'll be around 2.5-3 hours each weekday except for Friday July 4, which is a holiday in the US.

**mdjermanovic:** I'm expecting to be available 2 hours each day until (including) July 6th. Then I'll be mostly offline July 7-11

**fasttime:** I should be available 7-9 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week - @fasttime 
June 30 - @nzakas
 * 👍 @fasttime

**nzakas:** Should we rotate back to @fasttime for July 7 given that @mdjermanovic is off?

**mdjermanovic:** Yes, I'll be away that exact week. Maybe I could switch with someone (take the next week, or the one after)?

**fasttime:** I can take the July 7 week

**mdjermanovic:** Alright, then I'could take the week after

**nzakas:** If I swap with @mdjermanovic then @fasttime gets your usual break in between

**mdjermanovic:** That's also fine with me

**nzakas:** So June 30 would be @mdjermanovic and July 7 would be me.

**mdjermanovic:** Works for me

**fasttime:** Okay, let's do that

**nzakas:** Okay, updated RFC duty:
This week - @fasttime 
June 30 - @mdjermanovic 
July 7- @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I just had one PR I flagged for today:
https://github.com/eslint/rewrite/pull/231

**nzakas:** Basically the same change as the one we made for `@eslint/compat`. Do we want to move forward with this?

**fasttime:** `@eslint/compat` already had a peer dependency on ESLint, we just relaxed the version range to allow installing that package alongside ESLint 8

**fasttime:** I think that for `config-helpers`, the request is about adding a peer dependency, and that should be on ESLint "^9.10.0`" because of the types?

**nzakas:** Ah, I misunderstood

**nzakas:** `@eslint/config-helpers` is also supposed to work with ESLint v8

**fasttime:** Unless we want to allow installing `config-helpers` with ESLint 8, then it would be the same I think.

**nzakas:** https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/#support-for-older-eslint-versions

**nzakas:** We called out using it in v8 in the blog post

**nzakas:** Of course, the types won't be correct for v8

**fasttime:** Then maybe we could check what minimum ESLint v8 version is supported?

**mdjermanovic:** ESLint v8 users could still use the older version of config-helpers?

**nzakas:** They'd then get the same error mentioned in the PR, that types from `eslint` can't be found.

**nzakas:** We can just say "oh well" and live with it, of course. 🙂

**mdjermanovic:** Well, we can't add types back to v8, so in the sense of types, config-helpers is indeed incompatible with eslint v8?

**nzakas:** Only if you're using TypeScript to validate your config file.

**nzakas:** Functionally it works fine

**mdjermanovic:** Yes, that's what I meant.

**nzakas:** Primary issue is the `Linter.Config` type, which was eslintrc in v8 and flat in v9

**fasttime:** I also think types are not necessary.  The only effect of the optional peer dependency will be automatically installing a matching version of ESLint if none is present.

**nzakas:** So would we want to set it at `^9`?

**fasttime:** Maybe yes if it's optional.

**mdjermanovic:** Optional means that it isn't required, but if one is present then it must match the range?

**fasttime:** I'm not sure. Would have to check that. npm changed things a couple of times.

**nzakas:** I think what we want to avoid is someone getting a warning when they install `@eslint/config-helpers` alongside `eslint@^8`, correct?

**fasttime:** I think yes

**mdjermanovic:** I also think yes, as said it works fine functionally

**nzakas:** This seems to be another argument for moving those types into `@eslint/core` to eliminate the direct dependency on `eslint` and therefore avoid this problem.

**nzakas:** I could have sworn there was an open issue about this..

**fasttime:** Yes, many packages have separate types.

**nzakas:** https://github.com/eslint/rewrite/issues/226

**nzakas:** It seems like finishing up this work is actually the solution to the problem.
 * 👍 @mdjermanovic

**fasttime:** I don't recall an issue about moving all ESLint types to the core. Maybe we can create one?

**nzakas:** (see above)

**nzakas:** And not all ESLint types, just the core ones (essentially `Config`, and all necessary types to implement it)
 * 👍 @mdjermanovic

**fasttime:** Makes sense, still it's not very clear from the issue description.

**nzakas:** Yeah, the issue started as being about `@eslint/config-helpers` and the conversation flowed into creating a separate package for types and then to using `@eslint/core` for this purpose.

**nzakas:** So to wrap up this discussion, it sounds like we've agreed:

1. Not to accept the PR
2. Move forward with moving types into `@eslint/core` to solve this problem
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll prioritize working on this in the next couple of weeks.

**nzakas:** Any other issues or PRs anyone would like to discuss?

**mdjermanovic:** Yes, the question raised here about the flags: https://github.com/eslint/eslint/pull/19879#pullrequestreview-2963194460

**mdjermanovic:** Do we want to update the flag along with the last known bug fix, or wait till the next version after the bug fix is released

**nzakas:** I'm not sure if this is really a bug fix vs. a feature.

**mdjermanovic:** It's a feature that also fixes a bug 🙂

**nzakas:** True 🙂

**nzakas:** To me, the decision of whether to flip from unstable to v10 is if we believe this is now feature complete.

**mdjermanovic:** I was thinking that we'd like to wait to wait one version to see if everything is stable

**nzakas:** What does stable mean to you?

**mdjermanovic:** Feature complete & no bugs

**nzakas:** Okay, see stable to me means feature complete but there may be bugs. 🙂

**mdjermanovic:** Ah, okay, from that point of view we could update the flag
 * 👍 @fasttime

**nzakas:** I don't feel strongly either way, just want to make sure we're speaking the same language.

**mdjermanovic:** @fasttime what do you think? Update the flag in the PR or in a subsequent release?

**nzakas:** If we want to wait a release to ensure there aren't any bugs, I'm fine with that.

**fasttime:** I'd say update the flag with the PR because there's no guarantee that there will be no bugs, but I'm also fine either way

**mdjermanovic:** Alright, I'll update the PR to update the flag
 * 👍 @nzakas, @fasttime

**nzakas:** We've decided to update `unstable_config_lookup_from_file` to `v10_config_lookup_from_file`.
 * 👍 @mdjermanovic

**nzakas:** That means when @mdjermanovic is back, we can start discussing v10. 🎉
 * 🎉 @michael.faith, @mdjermanovic, @fasttime

**nzakas:** Okay, any other issues or PRs to discuss?

**mdjermanovic:** There shouldn't be `unstable` after `v10_`?

**nzakas:** 🤦‍♂️

**nzakas:** My fingers got away from me 🙂

**mdjermanovic:** Alright, `v10_config_lookup_from_file`
 * 👍 @fasttime

**fasttime:** I don't have any other issues to discuss at this time

**mdjermanovic:** I also don't have any other issues for today

**nzakas:** Okay, let's talk about the release.

**fasttime:** I can do the release tomorrow
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** It will be only `eslint` and `@eslint/js` I think
 * 👍 @nzakas, @mdjermanovic

**fasttime:** Any PRs we would like to get merged? I don't see any.

**nzakas:** Just the basePath one, I think

**fasttime:** Oh, will it be ready tomorrow?

**mdjermanovic:** I'll try to update it with the flag change in time, so if it gets two approvals, then it would be nice to include it.
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's all for today. Thanks everyone (and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks 👋
