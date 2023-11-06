# 11/02/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** It looks like we don't have any issues flagged for the meeting, but I did want to bring this up: https://github.com/eslint/eslint/issues/17669

**mdjermanovic:** Yeah, that's confusing

**nzakas:** **TSC Summary:** This issue points out that we are handling `basePath` in a confusing way. The underlying implementation uses `path.relative()`, which treats `""` as equal to `process.cwd()`, so even though `ConfigArray` is supposed to have no knowledge of the filesystem, it implicitly does through this mechanism.

**nzakas:** The intent was for `basePath: ""` to basically match everything, but that isn't the case.

**mdjermanovic:** I was contemplating that last few days and I don't have a strong opinion yet

**nzakas:** I have a couple of ideas I wanted to run by you.

**nzakas:** If you have an immediate opinion, great, if not, I can post on the issue and we can go from there.
 * 👍 @mdjermanovic

**nzakas:** I think there are actually two problems with the current implementation.

**nzakas:** First, `basePath` is always set to `""` inside of `Linter`. I think, ideally, if `cwd` is passed as an argument to create `Linter`, then it should be used as `basePath` as well. That would at least get us consistent behavior between `cwd` and `basePath`.

**mdjermanovic:** That's only if `Linter` is not passed a FlatConfigArray instance but a plain object/array? Otherwise, `basePath` is already set in the instance.

**nzakas:** Correct.

**nzakas:** From an API consumer's point of view, they are always passing an array because `FlatConfigArray` is not exposed publicly

**mdjermanovic:** That makes sense, but `basePath` doesn't have to be the same as `cwd`, so maybe we need another option (`basePath`) in addition to `cwd`?
 * 🤔 @nzakas

**nzakas:** I'm hesitant to let that implementation detail leak out of the `Linter` class.

**mdjermanovic:** That's just to be entirely correct in the API, though it's unlikely that a use case that needs to use Linter directly would need those two to be different

**nzakas:** Right, that's what I'm thinking. If a vanilla array is passed in so we need to manually create the `FlatConfigArray`, it seems likely that `cwd === basePath` is the expected behavior.

**mdjermanovic:** Actually, the default behavior of `FlatESLint` is to use `cwd` as `basePath` when there's no config file (`overrideConfig` is used), so we could start with defaulting `basePath` to `cwd` (as we already have the `cwd` option) and later add another option (`basePath`) if there's a request
 * 👍 @nzakas

**mdjermanovic:** This would mimic `FlatESLint`'s behavior in `Linter`

**nzakas:** That makes sense to me.

**mdjermanovic:** So it would be kind of logically consistent

**nzakas:** "kind of logically consistent" seems like a reasonable, achievable goal to me 🙂

**mdjermanovic:** Yes, good enough 🙂

**mdjermanovic:** So, the problem in the original issue would be solved by the consumer passing an absolute path `cwd` (likely `/`) to the `Linter` constructor?

**nzakas:** I believe so.

**mdjermanovic:** And we wouldn't make any changes in the `config-array` package?

**nzakas:** Well, that brings me to the second problem, which is interpreting `""` as `process.cwd()`. This also seems undesirable to me.

**nzakas:** The only way I can think to solve this 100% is to create our own `path.relative()` that omits that behavior.

**mdjermanovic:** That's still confusing to me. `config-array` is to my understanding built to operate on absolute paths, so from that perspective defaulting to an absolute path makes sense

**mdjermanovic:** It works with relative paths too, but under the hood they are treated as absolute paths

**nzakas:** The intent was to work with relative paths. Working with absolute paths is an implementation detail because it's just way easier.

**nzakas:** In any case, it seems like `/` would be a much better default than `process.cwd()`

**mdjermanovic:** The confusing part to me is when it's constructed with a relative base path (either empty, or a non-empty non-absolute path), but passed in absolute file paths to get config. Defaulting to an absolute path (whether it's `cwd` or root) seems understable

**nzakas:** Okay, let's continue this discussion on the issue.
 * 👍 @mdjermanovic

**nzakas:** It seems like at a minimum we've agreed to pass `cwd` as the default value for `basePath` in `Linter`. That will solve the immediate problem and gives us time to think through whether or not we need a change in `ConfigArray`.

**mdjermanovic:** Yes, agreed on that.

**nzakas:** Excellent, and we can continue on that second part on the issue.
 * 👍 @mdjermanovic

**nzakas:** So let's switch gears to v9.0.0

**nzakas:** I made a table view that I think makes life  a bit easier: https://github.com/orgs/eslint/projects/4/views/2
 * 👍 @mdjermanovic

**nzakas:** I went through and assigned people who had opened PRs for various issues. Right now we only have two issues without assignees. Do you want to take those?

**mdjermanovic:** Yes, I can take all unassigned issues

**mdjermanovic:** There are 7 in the table?

**mdjermanovic:** Ah, 2 in alpha

**nzakas:** Yes, sorry, 2 in alpha.

**nzakas:** There are also 3 in beta (just went through and double-checked)

**mdjermanovic:** Yes, I see 2 in alpha and 3 in beta, not sure how I saw 7

**mdjermanovic:** I can take all 5
 * 👍 @nzakas

**nzakas:** I just assigned two of those issues when I found the associated PRs
 * 👍 @mdjermanovic

**nzakas:** And I realized we don't have a tracking issue for the migration guide, so I'll add that and assign it to myself.
 * 👍 @mdjermanovic

**nzakas:** Okay, went through and updated the assignees
 * 👍 @mdjermanovic

**nzakas:** And I just added a third view, "My Issues", which will show you just your issue (and show me just my issues), to make it easier to focus.
 * 👍 @mdjermanovic

**nzakas:** I do enjoy Projects now that I've learned a bit about them 🙂

**nzakas:** It looks like we're in pretty good shape for alpha -- only six tasks that don't have a PR yet
 * 👍 @mdjermanovic

**nzakas:** Actually, just added one more task for myself, which is writing the "What's coming in v9.0.0" blog post that I started yesterday
 * 👍 @mdjermanovic

**nzakas:** Any issues that we need to discuss?

**mdjermanovic:** Nothing in particular from me

**nzakas:** To take offline, I'd like to finalize what we want to name the new CLI flag on this issue: https://github.com/eslint/eslint/issues/14308

**mdjermanovic:** I'll contemplate that over the weekend

**nzakas:** Thanks

**nzakas:** Let's do contributor pool for October

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2023-10-01..2023-10-31

**nzakas:** I think we included that second one last time?
 * 👍 @mdjermanovic

**mdjermanovic:** The `--no-warn-ignored` PR overlaps with the previous contributor pool

**nzakas:** (Note for @Sam3k - can you please start adding notes on contributor pool so we can more easily go back and check on previous ones? Thanks!)

**nzakas:** For yonran - $100?
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** All right, I'll let them know.

**nzakas:** Let's talk about the release.

**mdjermanovic:** I'm away from Tuesday. I can do the release tomorrow and follow up until Monday, but if the work extends beyond Monday (i.e., a patch release is needed, which rarely happens) I won't be able to help.

**nzakas:** Not a problem, I'll be around.

**mdjermanovic:** Thanks! Then, I'll do the release tomorrow

**nzakas:** And you'll be back on the 13th?

**mdjermanovic:** Let me check

**mdjermanovic:** I'm back from Sunday 12th
 * 👍 @nzakas

**nzakas:** Enjoy your trip!

**mdjermanovic:** Do we want to release `@eslint/eslintrc` to update README on npm?

**mdjermanovic:** Thanks!

**nzakas:** That seems like a good idea.

**mdjermanovic:** Okay, then `@eslint/eslintrc`, `@eslint/js` and `eslint` for this week.
 * 👍 @nzakas

**mdjermanovic:** A question about the PR that deprecates formatting rules - it's still marked as draft. I believe you'd like to update something related to https://github.com/eslint/eslint/pull/17696#issuecomment-1789090807 ?

**nzakas:** Oops yes, I updated it. Marking as ready for review.

**nzakas:** I followed the same convention we used for other rules we deprecated and recommended `eslint-plugin-n` as a replacement.
 * 👍 @mdjermanovic

**mdjermanovic:** Okay, I'll check that PR first thing in the morning as we already announced that change for this version 🙂

**nzakas:** Heheh yes, that's why I was furiously working on it this week.

**mdjermanovic:** Looked good to me at first glance, I'll probably merge it tomorrow morning, just to double-check once again.
 * 👍 @sam3k_, @nzakas

**nzakas:** Anything else before we end the meeting?

**mdjermanovic:** Nothing in particular from me for today

**nzakas:** Me either. Getting excited about v9.0.0! Talk again soon. (Thanks @sam3k_ for the notes!)

**mdjermanovic:** Thanks! 👋
