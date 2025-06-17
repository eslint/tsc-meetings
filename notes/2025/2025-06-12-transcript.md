# 06/12/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** Pulling up the notes from last meeting

**nzakas:** Okay, doesn't look like we had any action items to follow up on

**nzakas:** Let's start with statuses. I've continued working on fixing CSSTree types, added support for math functions to CSSTree, and added support for nested element selector rules in CSSTree.

**mdjermanovic:** I've been working mostly on `@eslint/config-array`: I fixed two bugs, and still working on the `basePath` feature. It should be ready for review early next week.
 * 👍 @nzakas, @fasttime

**fasttime:** I've been reviewing issues and PRs and I continued working on the multithread linting prototype.

**nzakas:** RFC Duty schedule:
This week - @nzakas 
June 16 - @mdjermanovic 
June 23 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And let's just check availability. I'll be around 2.5-3 hours eacy weekday.

**mdjermanovic:** I expect to be available around 2 hours each day

**fasttime:** I'm not sure yet, but I should be available at least 7-9 hours per week.

**nzakas:** Okay, I flagged one issue for today: 
https://github.com/eslint/eslint/issues/19834

**nzakas:** > **TSC Summary:** The issue is requesting an enhancement to the no-duplicate-imports rule to better support TypeScript syntax. The current rule flags an error when TypeScript type imports are used alongside regular imports from the same module. Currently, the rule reports an error when a file includes both a value import and a type import from the same module.
> 
> **TSC Question:** Do we want to add the proposed option `allowSeparateTypeImports` that would allow separate import statements for types from the same module without triggering the "duplicate imports" rule error?

**mdjermanovic:** Generally makes sense to me. Just not sure how to treat imports such as `import { type foo } from "bar";` (type-only?) and mixed ones like `import { type foo, bar } from "baz";`

**mdjermanovic:** If there's a mixed one, then probably any other should be considered duplicate.

**fasttime:** Yeah, today TypeScript allows mixed imports of types and values, but in older versions (4.5 I think) this was not possible, so that option was necessary.

**nzakas:** I think we are looking to distinguish between `import` and `import type`, specifically. If people are using `import { type foo }`, then I don't think the new option would cover that.

**mdjermanovic:** Okay, we could say that we are in favor of adding this option, and discuss these details on the issue before the implementation?

**fasttime:** Fine to me 👍

**nzakas:** For clarity: which details are you referring to?

**mdjermanovic:** Details about how mixed imports of types and values should be treated.

**mdjermanovic:** And imports that don't use `import type` syntax but `import { type ..., type... }`

**nzakas:** I think maybe our wires are a bit crossed. The proposal for `allowSeparateTypeImports` is just to allow `import` and `import type` for the same module. It doesn't affect anything else, nor do I think it should.

**mdjermanovic:** Maybe it will indeed be that simple, I'd just like to clarify what happens with mentioned examples.

**nzakas:** In the example you gave, it's the same behavior as there is today regardless of the new option's setting.

**nzakas:** Becaus they're both `import`, they're considered a duplicate and a violation is reported

**mdjermanovic:** So that it's clear why are, for example, `import { foo } from "mod"` and `import { type bar } from "mod"` reported as duplicates, whereas `import { foo } from "mod"` and `import type { bar } from "mod"` are not.

**nzakas:** It's a preference to use `import type {bar}` instead of `import { type bar }`. If people enable the option, they're saying they do not want the latter.

**mdjermanovic:** Okay, then makes sense to treat only `import type` as type import.
 * 👍 @nzakas

**nzakas:** We've resolved to accept the proposal for the `allowSeparateTypeImports` option to allow `import type` alongside `import` from the same module.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** That's the only issue I have flagged. Any other issues or PRs that need discussion?

**fasttime:** Nothing from my side.

**mdjermanovic:** Maybe we could discuss questions raised here now: https://github.com/eslint/eslint/pull/19843#discussion_r2142999877

**mdjermanovic:** Now it looks to me like a breaking-ish change because `RuleEntry` will no longer make all `Options` optional in rule config entries

**nzakas:** Hmm, yeah, that's a problem.

**fasttime:** I didn't even know that rules can have mandatory options.

**mdjermanovic:** In theory, a rule can always require specifying some options, although I'm not sure if such rules exist (in the core certainly not)

**nzakas:** This is the new definition for `RuleConfig`: 
https://github.com/eslint/rewrite/blob/37e3e14499c1d42c0c420dfbabac3a10a9a82925/packages/core/src/types.ts#L680-L682

**nzakas:** Which doesn't match `RuleEntry`

**nzakas:** I think the larger question is if all rules options should be optional or not?

**mdjermanovic:** Yeah, that allows for configs such as `["error"]`, but not for configs such as `["error", "always"]` if the rule has > 1 options elements

**mdjermanovic:** That would probably makes the most sense, but we're not enforcing it currently.

**nzakas:** For clarity: it would make sense that all rules options are optional?

**mdjermanovic:** I think yes. But we don't know if that's the case with all plugin/custom rules that exist.

**nzakas:** Based on the current `RuleEntry` type, I don't think there's a way to make any rule options required?

**mdjermanovic:** I think it isn't by using that type, but that's beyond my knowlege of TypeScript

**fasttime:** Yes, currently all rule options would be typed as optional.

**nzakas:** I suppose in theory, `defaultOptions` means no rule options need to be required.

**mdjermanovic:** But I believe (would need to doublecheck) it is possible to enforce mandatory options in rule schemas, by specifying a full JSON schema with minItems > 0

**nzakas:** 🤔

**fasttime:** Maybe we could check that?

**nzakas:** Does someone want to take the action item to investigate and report back?

**mdjermanovic:** I can check that
 * 👍 @fasttime

**mdjermanovic:** And report on this thread: https://github.com/eslint/eslint/pull/19843#discussion_r2142999877
 * 👍 @nzakas

**nzakas:** I'll set both PRs to be a draft until we can resolve this.
 * 👍 @mdjermanovic

**fasttime:** Sounds good.

**nzakas:** Okay, anything else?

**mdjermanovic:** Nothing else from my side for today

**fasttime:** I also have nothing.

**nzakas:** Okay, let's do contributor pool for May

**nzakas:** https://github.com/issues?q=org%3Aeslint%20label%3A%22contributor%20pool%22%20merged%3A2025-05-01..2025-05-31

**nzakas:** There's A LOT
 * 🎉 @mdjermanovic

**nzakas:** I'm going to quickly drop this into AI to summarize since the GitHub search won't let me narrow down by authors (I reported this as a bug to GitHub)

**nzakas:** Damn, apparently this page is dynamically rendered so AI can't scrape them. ☹️ :

**fasttime:** Yes, you must be logged in to see it.

**nzakas:** Going to try copy-pasting

**nzakas:** Sethamus: 7 PRs

**nzakas:** thecalamity: 5 PRs

**nzakas:** Pixel998: 4 PRs

**nzakas:** SwetaTanwar: 2 PRs

**nzakas:** Everyone else has one.

**nzakas:** (I'll make a script to do this from now on)

**nzakas:** I'll let you guys suggest amounts for a change of pace. 🙂

**mdjermanovic:** I think Pixel998 had 4 PRs (there's also page 2)

**nzakas:** Oops yes. Missed that

**mdjermanovic:** Those 4PRs are 3 new rules in `@eslint/markdown` and a lot of work on blog post updated date

**mdjermanovic:** Maybe $800 ($200 each) ?
 * 👍 @nzakas, @fasttime

**mdjermanovic:** I'm not sure what happend, but there's only one page now

**nzakas:** I removed a couple PRs that were from lumirlumir
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** sethamus I think 6 PRs are $100 each. Not sure about this one: https://github.com/eslint/eslint/pull/19697

**fasttime:** Other sethamus' PRs are 2-5 files changed. This one has 7.

**nzakas:** This one also took a while and a lot of feedback was incorporated.

**fasttime:** Maybe $1000 for everything?
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** thecalamity I think 5 x $100 for 5 PRs, and $200 for a new rule, total $600

**fasttime:** thecalamity has one new rule, the other PRs are smaller.

**mdjermanovic:** Sorry, they have 6 PRs in total, so that would be $700

**mdjermanovic:** So, $700 for thecalamiity ?
 * 👍 @nzakas, @fasttime

**mdjermanovic:** SwetaTanwar I think $200 for the report issue button, and $100 for the other PR, so $300 in total?
 * 👍 @nzakas, @fasttime

**mdjermanovic:** xbinaryx $100 for the bot update
 * 👍 @nzakas, @fasttime

**mdjermanovic:** azat-io  $100 for a bug fix

**fasttime:** For jtbandes also at least $200 for the new rule?
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Yes, I made a mistake.

**fasttime:** So $100 for azat-io and $200 for jtbandes?
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** jokeyrhyme $100 for a bug fix.
 * 👍 @nzakas, @fasttime

**mdjermanovic:** yeonjuan I'm not sure: https://github.com/eslint/code-explorer/pull/99

**fasttime:** Maybe $200? It took only two days but it's a big PR.
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I think that's all?

**nzakas:** Looks like it.

**fasttime:** Yes.

**nzakas:** If we're going to get this many contributors, we really need some automation around this process. 😄 Good problem to have.

**nzakas:** I'll take the action to let them know.
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**mdjermanovic:** If it would be at least possible to sort by authors, but it doesn't seem that option is supported

**nzakas:** Yeah, I think I'll just write a script to do it. Easy enough to call the GitHub API.

**nzakas:** Let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 👍 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** @fasttime if you have time, there are two PRs needing a second review

**mdjermanovic:** https://github.com/eslint/eslint/pull/19845

**mdjermanovic:** https://github.com/eslint/eslint/pull/19832

**fasttime:** Yes, I will take a look tomorrow morning.

**mdjermanovic:** Thanks!

**mdjermanovic:** That would be just `@eslint/js` and `eslint` I think.
 * 👍 @nzakas, @fasttime

**mdjermanovic:** I don't see any other PRs that are near to ready to merge

**nzakas:** Nope. Lots of drafts.

**mdjermanovic:** Okay, I think that's all regarding the tomorrow's release

**fasttime:** I don't have anything else to discuss.

**nzakas:** Okay, then I think that's it for today.

**nzakas:** Thanks everyone (and thanks @sam3k) for the notes

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Take care 👋
