# 08/24/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy 👋

**nzakas:** Welcome back from your travels. Are you feeling refreshed?

**mdjermanovic:** Yes, much

**mdjermanovic:** It was a long vacation

**nzakas:** It was, that's fantastic. I am glad to have you back, though. 🙂

**mdjermanovic:** Thanks!
 * 👍 @nzakas

**nzakas:** We have one issue flagged for today, which is this: 
https://github.com/eslint/eslint/issues/14575

**nzakas:** > **TSC Summary:** This accepted proposal is to allow all inline directives in line comments in addition to block comments. When we tried to implement this, the result was fairly disruptive to the ecosystem. This issue has say open for over a year without any progress.
> 
> **TSC Question:** Should we close that as "won't fix" now that we know the result when we tried to do this last?

**mdjermanovic:** As it stands, we can't implement the original RFC. We could either close the issue or ask if someone is willing to submit a new RFC that would include renaming directives.

**nzakas:** I'd be in favor of closing. At this point, I'm not sure there's a lot of value in adding yet another way to configure ESLint with comments.

**mdjermanovic:** Agreed.

**nzakas:** Okay, we've agreed to close the issue and won't be moving forward with it. ( @sam3k_ if you can please note this on the issue, close it, and remove "tsc agenda" label, we'd appreciate it)
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** I know you're just newly back, but are there any particular issues or PRs you'd like to discuss?

**mdjermanovic:** Nothing in particular for today.

**mdjermanovic:** I'm aware that a few issues are waiting for my response, just need to find time to go through the list.
 * 👍 @nzakas

**nzakas:** Okay, then I'd like to spend a little time thinking through a timeline for v9.0.0.
 * 👍 @mdjermanovic

**nzakas:** I believe we're at the point where we can start putting together our feature list.

**nzakas:** https://github.com/orgs/eslint/projects/4/views/1

**mdjermanovic:** We could go through the list now

**nzakas:** Okay, let's do it!

**nzakas:** Like we did last time, I think we should stick with "yes", "no", or "unsure" so we can get through everything, and then we can go back and discuss specifics on the "unsure" ones (either today or later if necessary)
 * 👍 @mdjermanovic

**nzakas:** And I think to make it even easier we can just do 👍, 👎, or 🤷‍♂️ on each issue as I mention it. 🙂

**nzakas:** https://github.com/eslint/eslint/issues/17446
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/14744
 * 👍 @nzakas, @mdjermanovic

**nzakas:** (Just removing some cruft from the project -- some closed issues were still in there)

**nzakas:** https://github.com/eslint/eslint/issues/14709
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15466
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15261
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I'm 👍 for that one, but we need to figure out the design

**nzakas:** Ah gotcha, so you'd like to come up with a design for v9

**mdjermanovic:** Yes. I'm in favor of the change, we just don't know yet how the change should exactly look like.

**nzakas:** Got it. So I'll mark as planned.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15820
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Just to clarify, we'd remove just one rule?

**mdjermanovic:** The one that uses `doctrine`

**mdjermanovic:** `valid-jsdoc`

**nzakas:** I definitely want to remove that one...and maybe also `require-jsdoc` too (based on https://github.com/eslint/eslint/issues/15820#issuecomment-1113878370 -- might be easier to just remove all JSDoc-related stuff) . Let's follow up on the issue?

**mdjermanovic:** Okay, added my 👍. I'm definitely in favor of removing rules when that also removes dependencies. We'll just need to update our policy: https://eslint.org/docs/latest/use/rule-deprecation
 * 👍 @nzakas

**nzakas:** https://github.com/eslint/eslint/issues/15735
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15104
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16879
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16908
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16574
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/pull/16196
 * 👍 @nzakas, @mdjermanovic

**nzakas:** This one we need a design?

**mdjermanovic:** Yes, design would be bundled with the design for https://github.com/eslint/eslint/issues/15261

**nzakas:** Ah right

**mdjermanovic:** Seems best to analyze those two changes at the same time

**nzakas:** Makes sense

**nzakas:** https://github.com/eslint/eslint/issues/16450
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Looks like the RFC for that one was merged so we should be ready to go

**mdjermanovic:** And there's already a PR

**nzakas:** Oh nice. Looks like it's not associated with the PR, so I'll add that.

**nzakas:** Man, the "link an issue" search is awful

**mdjermanovic:** Yes, since it was introduced

**mdjermanovic:** Some issues don't even appear in the list 😄

**nzakas:** And why can't I just copy-paste a URL? 🤷‍♂️

**mdjermanovic:** I think that search by issue id (number) works now

**nzakas:** Not in my browser 🙂

**mdjermanovic:** Alternatively, updating the original post with something like `fixes <link>` should work

**nzakas:** Yup, that's what I'm doing now

**nzakas:** I guess no one at GitHub ever uses that feature. 😆

**nzakas:** https://github.com/eslint/eslint/issues/15576
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I need to come up with a concrete proposal for that one

**nzakas:** So it looks like this is actually two tasks: 1) remove from "eslint:recommended" and 2) update the rule's behavior

**mdjermanovic:** I think it was something like 1) Add new options 2) Keep in "eslint:recommended" but change the defaults

**mdjermanovic:** I'll need to get back to that one

**nzakas:** Last summary from btmills:
> Whatever form it takes, we can add the option now, but we'd wait for a major release to change the option's default and remove the rule from eslint: recommended.

**mdjermanovic:** Yes, that's it

**nzakas:** So it sounds like we agreed to remove from `eslint:recommended` regardless of the new option?

**nzakas:** Here it is: https://github.com/eslint/tsc-meetings/blob/0796b599ff6056fe22ebc956ae57f8f3e3fcc0e5/notes/2022/2022-02-24.md?plain=1#L58

**mdjermanovic:** Ah, I forgot that one. Then, yes, let's remove the rule from eslint:recommended

**nzakas:** Okay, I'll rename the issue to make it clear that we're talking about more than just removing it from "eslint:recommended"
 * 👍 @mdjermanovic

**mdjermanovic:** Thanks! I'll get back at that issue as soon as possible.

**nzakas:** https://github.com/eslint/eslint/issues/15010
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I added that one only because there's one change (default value for a method param) that needs to be done before releasing v9.0.0.

**nzakas:** Sounds good

**mdjermanovic:** Otherwise, we can implement that in 8.x or any 9.x

**nzakas:** https://github.com/eslint/eslint/issues/17488
 * 👍 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17457
 * 🤷‍♂️ @mdjermanovic
 * 👍 @nzakas

**nzakas:** Yeah, I figured you'd need more time to digest that one.

**mdjermanovic:** I'll have to take a look at the `traverse` branch

**nzakas:** Bottom line on that: mixing data and state on the same object is blocking any progress there.

**mdjermanovic:** I'll try to understand the problem over the weekend

**nzakas:** No worries. It took me a week to figure out what was happening. 🙂

**mdjermanovic:** What's confusing me is that our code path analysis is generally stateful (the tree is updated during the traversal) so I'm not sure if removing only `currentSegments` would fix the problem

**nzakas:** That's true, but `currentSegments` is the only part that leaks the traversal state through into rules (at least, as best I can tell).

**nzakas:** What I want to do is have it act more like scope analysis

**mdjermanovic:** But I'm not sure that I fully understand the problem yet, so I'll take a look at the code

**mdjermanovic:** Scope analysis traverses the code by itself

**nzakas:** Right, and it creates a tree that we then reference from within rules via `getScope()`

**nzakas:** There isn't a good reason that code path analysis can't do the same thing

**mdjermanovic:** With code path analysis, I think the goal was to avoid an extra traversal, though it makes things more complicated and less predictable for rule developers

**mdjermanovic:** Since you can't know what's finalized at any moment

**nzakas:** Yeah, and I'm actually not adding an extra traversal with the `traverse` branch. `SourceCode#traverse()` is doing a traversal with code path analysis and returning that as an array of steps. We are actually already doing that in `Linter` today, which traverses with code path analysis and then flattens out that path into an array of steps.

**nzakas:** So I just moved that process from `Linter` into `SourceCode`.
 * 👍 @mdjermanovic

**nzakas:** Anyway, yeah, take your time.

**nzakas:** I've spent a great deal of your time away trying to learn how code path analysis actually works and I think I'm like 50% of the way there. 🙂

**nzakas:** I'll have a big refactor with JSDocs of `code-path-state.js` soon that should help

**mdjermanovic:** I'm sure I'm on less than 50% with code path analysis 😄

**mdjermanovic:** That part of the code was mostly managed by mysticatea

**nzakas:** Written and managed by, yes.

**mdjermanovic:** But we'll need to get to close to 100%

**nzakas:** The big takeaway I've had so far is that it's modeled like Git branches. That bit of knowledge goes a long way towards understanding things better.

**nzakas:** So there's operations like "fast forward to HEAD" that map directly

**mdjermanovic:** Didn't know that. Good hint for getting into understanding the implementation.

**nzakas:** Yeah. I'm adding a ton of JSDoc and explanation comments as I figure things out so hopefully it won't be so murky soon.

**nzakas:** Anyway, let's talk about the release.

**mdjermanovic:** You removed 3 issues from the v9.0.0 project?

**nzakas:** Yeah, I mentioned earlier. There were some already closed issue in there.

**mdjermanovic:** Do you remember which ones? I recall two being already closed, but can't remember the third one.

**nzakas:** Not off the top of my head, no

**mdjermanovic:** Okay, nevermind then

**nzakas:** Doesn't look like there's an activity feed to refer back to either

**nzakas:** Okay, release?

**mdjermanovic:** I can tomorrow
 * 🎉 @nzakas

**mdjermanovic:** Does jenkins work for you?

**nzakas:** A few packages have `release-please` PRs ready but there are only chores, so I just left them until we have an actual thing to ship.

**nzakas:** Argh, no

**nzakas:** I'll kick it

**mdjermanovic:** Thanks!

**mdjermanovic:** I think it's only `eslint` (including `@eslint/js`) this time.

**nzakas:** Yeah. There are other packages with `release-please` issues ready but they are just chores, so we can wait until we have something to actually ship

**nzakas:** Okay Jenkins lives again

**mdjermanovic:** Agreed.

**mdjermanovic:** Thanks!

**nzakas:** All right, I think that's all for today. Nice to have you back!

**mdjermanovic:** Thanks! Nice to be back

**nzakas:** Take care. And thanks @sam3k_ for the notes. 🙏
 * 👍 @sam3k_, @mdjermanovic
