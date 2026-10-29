# 10/29/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi! 👋

**nzakas:** All right, we're at full strength. The meeting notes generator failed again 😠 so I'm just scrolling up to see what we need to follow up on.

**nzakas:** @mdjermanovic to remove the Tidelift links. That looks complete?

**mdjermanovic:** Yes, it's complete
 * 👍 @fasttime

**nzakas:** and @mdjermanovic to open an issue to discuss stage 4 syntax?

**mdjermanovic:** Here's the issue: https://github.com/eslint/eslint/issues/21453
 * 🙏 @nzakas, @fasttime

**nzakas:** I believe those were the only two action items?

**mdjermanovic:** I think yes

**nzakas:** All right, then let's start with statuses.

 I continued to work on the TypeScript parser RFC, the ConfigArray performance PR, and the `@eslint/shell` plugin.

**mdjermanovic:** I was mostly reviewing PRs and triaging issues. Also removed Tidelift links

**fasttime:** I had some personal issues, so I haven't done much. I reviewed some issues and PRs.

**nzakas:** Let's talk availability for the next two weeks: I should be at 3-5 hours per week. After that I anticipate being around more.

**mdjermanovic:** I expect to be available 1-1.5h daily

**fasttime:** I should be available 7 hours per week or so.

**nzakas:** RFC Duty:
This week - @fasttime 
Nov 2 - @mdjermanovic
Nov 9 - @Nicholas C. Zakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We've got one issue flagged and a couple other agenda items.

**nzakas:** First item: https://github.com/eslint/eslint/issues/21223

**nzakas:** > 21\. So the gap described here is real and it is not what [#17609](https://github.com/eslint/eslint/issues/17609) / the v9.23.0 circular-fix warning covered. This is a core behavior change and would be a semver-minor release. Per our issue process, that needs a TSC decision before it can be accepted.
>          **TSC Summary:**
>          Autofix stops after 10 passes. If pass 10 still changes the file and fixable problems remain, ESLint stays silent. Circular fixes already warn. Fixable-error counts show that problems remain, and only a stats run can hint that the pass limit was the reason. The request is to report that limit explicitly.
>          [@DMartens](https://github.com/DMartens) prefers a formatter hint over a new warning. There are no team +1s, and [#21288](https://github.com/eslint/eslint/pull/21288) was closed until this issue is accepted.
>          **TSC Question:**
>          should ESLint report when autofix hits the 10-pass limit with fixable problems still left? If yes, should that be a warning, a formatter message, or both?

**mdjermanovic:** Formatter message, I believe, refers to updating the default stylish formatter. Otherwise, this info is already available to formatters as the presence of remaining fixable messages

**nzakas:** It seems like emitting a warning would be consistent with the circular fixes approach and ensure the warning is visible regardless of the formatter.

**mdjermanovic:** I don't have a strong opinion between emitting a warning and leaving this as is. If you are in favor of emitting a warning, I'd agree

**fasttime:** I also don't feel strongly. The warning would have to be emitted once per file, right?

**nzakas:** Correct.

**mdjermanovic:** Yeah, it seems to. With filename in the message
 * 👍 @fasttime

**nzakas:** To take a step back: do we want to show something to the user for this case? It's rare enough that a warning seems useful but I don't feel strongly.

**mdjermanovic:** I'm still neutral. Since it seems that no one feels strongly about this change, perhaps we should leave it as-is 🙂
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, we've agreed not to accept the proposal.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:

> Agenda item: We added automerge of minor devDependencies updates to the `eslint/code-explorer` repo as an experiment. It looks like it's gone well.
>         Shall we expand to all repos? Shall we expand to regular dependencies as well?

**nzakas:** I'm just getting tired of being flooded with these PRs. 🙂

**nzakas:** For context, we are automerging devDependency updates so long as they are minor version bumps and CI passes.

**mdjermanovic:** I think it's okay to automerge both dev and regular deps in most repos. I'm only not sure about the eslint.org repo, since we don't have tests there, and all merges are live right away

**nzakas:** Good point.

**fasttime:** Maybe we can exclude eslint.org then?
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I'd exclude both dev and regular deps from that repo
 * 👍 @nzakas, @fasttime

**mdjermanovic:** since dev deps include build tools

**nzakas:** Okay, we've agreed to enable to automerging of Renovate updates on all repos except eslint.org. Does anyone want to take that as an action item?

**fasttime:** I can take a look.

**nzakas:** Thanks!

**mdjermanovic:** Thanks!

**nzakas:** Next item:
> Agenda item: The shell plugin is basically done. Shall we ship it?

**nzakas:** Unless anyone still wants to review the unmerged PRs, I think it's in shippable shape.

**mdjermanovic:** Sounds good to me

**fasttime:** I believe the last rebases undid some changes like the header comments for sections in files. That's just stylistic, but if the plugin is ready, I'd be fine with shipping.

**nzakas:** What I'd like to do is merge all the current PRs and then I can circle back on the stylistic stuff.

The help I need: If one or both of you could approve each PR, I can then merge them all as a stack. There is no admin override to do this, sadly.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed to ship `@eslint/shell`. I'll take that as an action item.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** A couple followups to that include adding to Code Explorer and writing an intro blog post.

**nzakas:** It looks like there are a couple of TSC waiting issues

**nzakas:** https://github.com/eslint/create-config/pull/273

**mdjermanovic:** The question seems to be whether this should be a breaking change

**nzakas:** This swaps out `eslint-plugin-react` in favor of `@eslint-react/eslint-plugin` in `create-config`.

**nzakas:** Yes, that's the question. I think it's a semver-minor bump. There's no backward compatibility issue here.

**mdjermanovic:** Agreed, I also think just `feat` is fine

**fasttime:** Sounds good to ship this as a `feat`.

**nzakas:** We've agreed that this PR is a semver-minor bump (`feat`) rather than semver-patch (`fix`).

**mdjermanovic:** I can do the second review of the PR this weekend
 * 🙏 @nzakas, @fasttime

**nzakas:** Next item: https://github.com/eslint/rewrite/issues/527

**mdjermanovic:** levn, which we use for config comment parsing, recognizes regexes but doesn't recognize those with flags

**nzakas:** The issue points out that ConfigCommentParser parses regular expressions into strings and asks that we make a change to support regexes.

**nzakas:** Actually, that's over-simplifying -- the problem is with modern regex flags only.

**mdjermanovic:** Ah, I missed that

**nzakas:** For older regex flags (`gimy`) it properly recognizes and returns regular expression objects.

**nzakas:** So the question is what do we want to do about it? Submit a PR or fork levn?

**mdjermanovic:** We've never been supportive of regex options. They are also a problem for caching (which is the next tsc waiting item). I'd be in favor of discouraging them in the docs.

**mdjermanovic:** Rule options and settings are supposed to be just JSON-like data

**nzakas:** Agreed. Regular expression literals falling through are a bug rather than a feature.

**nzakas:** Maybe the correct approach here is rather to not make any changes now and plan on a breaking change to remove regex support entirely?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** (Although I seem to recall some popular plugins perhaps relying on this behavior, so we likely need to do some research first.)

**mdjermanovic:** Yeah, the support was accidental

**mdjermanovic:** I think we had a breakage because of that a couple of years ago

**mdjermanovic:** That would definitely be a breaking change

**mdjermanovic:** https://github.com/eslint/eslint/issues/13447

**nzakas:** Okay, so maybe we put this into a issue for v11 tracking and we can do some research to determine feasibilty?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed not to make any changes right now. We will open an issue to discuss potentially removing support for regex option values for v11. Does anyone want to take that action item?

**mdjermanovic:** I'll open an issue
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** What shall we do with https://github.com/eslint/rewrite/issues/527, close it?

**mdjermanovic:** Or keep it open until we decide on removing support for regex option values

**nzakas:** Yes, let's close it
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item: https://github.com/eslint/eslint/issues/21438

**nzakas:** Summary: With `--cache`, changing a regular expression inside a rule's options leaves the cache valid, so stale results are reused. The reproduction uses a local rule configured with `/foo/` and then changed to `/bar/`. The author says changing the severity does invalidate the cache, and expects the same output as a run without `--cache`.

**mdjermanovic:** That would fall under removing support for regex option values. Without regex options, there would be no problems like this with caching

**fasttime:** I guess the issue occurs not only with regexps but with any non-serializable values.

**mdjermanovic:** Yes, any value that silently disappears during the serialization would cause the same problem

**nzakas:** It seems like the suggestion just to update the docs?

**fasttime:** Do we want to support things like callbacks or bigints in rule options? If not we could include them as well.

**mdjermanovic:** Yes, updating the docs to discourage regexes (or announce removal of support) would be the first step

**fasttime:** I would update the docs to discourage use of non-serializable values while still in v10.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I think we should make it explicit that non-serializable values cannot be cached and cause other unpredictable behavior. That they happen to work is a bug, not a feature.

**mdjermanovic:** We could discuss on the issue I'll open for regexes whether we want to expand it to disallowing any non-serializable rule options
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, we've agreed to update the docs to discourage the use of non-serializable values in rule configs. Does anyone want to take that as an action item?

**mdjermanovic:** I can
 * 🙏 @nzakas, @fasttime

**nzakas:** Okay, that's all that was flagged, any other topics to discuss before we talk about the release?

**fasttime:** Nothing from my side.

**mdjermanovic:** On 2026-11-06, it will be 3 months after the v9.x line EOL (9 months after v10.0.0 release). I'll prepare a PR to remove the EOL notice from the eslint.org website.
 * 👍 @nzakas, @fasttime
 * 🙏 @nzakas

**mdjermanovic:** Nothing else from my side too.

**nzakas:** Okay, then let's discuss the release.

**mdjermanovic:** I can do the release tomorrow

**fasttime:** Thanks!

**nzakas:** Thanks!

**mdjermanovic:** That would be just `eslint` I believe
 * 👍 @nzakas, @fasttime

**nzakas:** All right, that's all for today. Thanks everyone!

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks!
