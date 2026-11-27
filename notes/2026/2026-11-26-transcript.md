# 11/26/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**mdjermanovic:** @nzakas is away today, so we can start

**mdjermanovic:** Let's check action items from the previous meeting
 * 👍 @fasttime

**mdjermanovic:** Per the meeting notes, there is an action item @fasttime will Comment on the issue. And that is under https://github.com/eslint/js/issues/779

**mdjermanovic:** I think it's a mistake, the action item was related to https://github.com/eslint/eslint/issues/21448 ?

**fasttime:** Yes, that's the right issue, and I haven't checked it yet.

**mdjermanovic:** Okay, then we can leave that action item for the next meeting
 * 👍 @fasttime

**mdjermanovic:** Appointing Project Leads for ESLint Subprojects. @nzakas had action items to write up the project lead role in the documentation, which was done in https://github.com/eslint/eslint/commit/6942d2f326ec0271bf42ebf2d728e5a203b79397,  email the team to solicit volunteers, which was done, and determine how to proceed if multiple people volunteer to lead the same project.
 * 👍 @fasttime

**mdjermanovic:** As for the last item, we got responses from the team, and are discussing them

**mdjermanovic:** Retiring the Contributor Pool. @nzakas had action items to remove the report generator and write a blog post announcing the decision

**mdjermanovic:** The blog post is up: https://eslint.org/blog/2026/11/retiring-contributor-pool/
 * 👍 @fasttime

**fasttime:** The report generator was also removed: https://github.com/eslint/tsc-meetings/commit/3f97469c657f5892173de74586f8a13a1eb688f9
 * 👍 @mdjermanovic

**mdjermanovic:** Okay, looks like all tasks related to Retiring the Contributor Pool are done

**fasttime:** I think so

**mdjermanovic:** Let's move on to statuses then. I was mostly reviewing PRs and triaging issues

**fasttime:** I've also been busy with triaging issues most of the time.

**mdjermanovic:** Availability. I expect to be available 1-1.5 hours each day in the next two weeks

**fasttime:** For me, it will be still around 7 hours per week availability.

**mdjermanovic:** RFC Duty
This week:  @mdjermanovic
November 30: @nzakas 
December 7: @fasttime
 * 👍 @fasttime

**mdjermanovic:** Looks like for today we have one issue labeled with "tsc agenda" and another agenda item

**mdjermanovic:** First, the issue: https://github.com/eslint/eslint/issues/21453

**mdjermanovic:** Posted by @nzakas :

> **TSC Summary:** We currently have some mismatches between ECMAScript features and our `ecmaVersion` years, specifically with Temporal and Explicit Resource Management. My proposal is that we stop adding yearly `ecmaVersion` values and instead encourage everyone to use 3, 5, or `"latest"`.

> **TSC Question:** Should we accept my proposal?

**mdjermanovic:** I'm generally in favor of this proposal. Grouping features by spec years doesn't seem very useful. People can use `eslint-plugin-es-x` to restrict syntax, globals, and even methods on globals

**fasttime:** Then we can ask @nzakas to open an RFC to evaluate the changes. Good point on using `eslint-plugin-es-x`, as that's what users will be looking for to ensure they avoid unsupported features without a yearly `ecmaVersion`.
 * 👍 @mdjermanovic

**mdjermanovic:** Okay, we decided to proceed with the proposal, and open an RFC to evaluate the changes
 * 👍 @fasttime

**mdjermanovic:** Next item is an agenda item posted by @nzakas on the tsc meeting issue:

> Agenda item: it seems like issue triage is still fairly slow, should we consider trying the Astro triage bot on one of our repos to evaluate if it's useful? https://github.com/withastro/triagebot-action

**mdjermanovic:** I don't have a strong opinion on this. It may be useful for bug reports, but they are usually not that difficult to verify and the team still has to decide whether to accept

**fasttime:** I don't have any experience with this kind of bot. Maybe we could start testing it on a repo to see how well it works for us.

**fasttime:** Maybe a language plugin, or the `rewrite` repo?

**mdjermanovic:** Language plugins seems more active with bug reports?

**fasttime:** Probably yes, `markdown` and `css` plugins get many bug reports.

**mdjermanovic:** Okay, I'm not opposed to trying out the bot in one of the repos.

**mdjermanovic:** Perhaps `eslint/css`?
 * 👍 @fasttime

**mdjermanovic:** Then, we decided to try out the bot in the `eslint/css` repository.
 * 👍 @fasttime

**mdjermanovic:** Since @nzakas posted the proposal, I'm assuming he would like to set up the bot, but we can discuss that when he is back

**fasttime:** Sounds good.

**mdjermanovic:** We have one issue labeled with "TSC waiting": https://github.com/eslint/markdown/issues/619

**mdjermanovic:** TSC Summary: The autolink remark plugin for GFM may not set the position property (example), but rules expect it to be set (e.g. for sourceCode.getText()). This was reported upstream but was closed as a cannot fix.

TSC Question: How should we handle missing position properties (e.g. check existence in each rule, try to fix the bug in the remark plugin, ...)?

**mdjermanovic:** In a related PR, @nzakas suggested to fix the problem in `getLoc()`: https://github.com/eslint/markdown/pull/620#issuecomment-3887287168

> I agree with lumirlumir in that every rule expects every node to have a `position` property, so updating one rule to ignore nodes without a `position` property does little to address this problem.

> While I don't mind a temporary solution, I think that solution should get to attempt to calculate the actual position inside of `getLoc()`, which would then distribute that solution to all consuming rules.

**mdjermanovic:** If we want to update the AST ourselves, it might be better to add the missing `position` directly to the nodes?

**fasttime:** This should be fixed in the language I think, either in `getLoc()` or earlier when the AST is generated, not handled in the rules.

**mdjermanovic:** Since rules can use `node.position` directly. In fact, many of the rules in the language plugin do use `node.position` directly

**mdjermanovic:** Perhaps we could evaluate if this is doable in `MarkdownSourceCode#traverse()`?

**fasttime:** That would be fine. If it's not doable there, we can evaluate other alternatives such that `node.position` is always set.

**mdjermanovic:** Okay, so we decided that the preferable direction is to update the AST in the markdown language plugin, possibly in `MarkdownSourceCode#traverse()`.
 * 👍 @fasttime

**mdjermanovic:** That was the last item we had marked for today.

**mdjermanovic:** Any other topics you would like to discuss today?

**fasttime:** Nothing else from me this time.

**mdjermanovic:** Okay, let's talk about release.

**mdjermanovic:** I'm available for release tomorrow

**fasttime:** It's yours, thanks!

**mdjermanovic:** That would be `eslint` and `@eslint/config-array` (there was a perf update merged, pending release)
 * 👍 @fasttime

**mdjermanovic:** Alright, that would be all for today's meeting. Thanks 👋

**fasttime:** Thanks!
