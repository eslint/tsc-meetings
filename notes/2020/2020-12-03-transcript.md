# 12/03/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone!

**mysticatea:** Hello.

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Looks like we have everyone, so let's get started

**nzakas:** @btmills are you good for taking notes?

**btmills:** yep

**nzakas:** Awesome, thanks

**nzakas:** Just a reminder that anyone can add agenda items, it doesn't have to always be me. 🙂 If an issue isn't getting resolved, please feel free to flag it so we can get it resolved.

**nzakas:** First item

**nzakas:** > Agenda item: We have several open issues on Espree that would be breaking changes:
> 
>     1. [eslint/espree#457](https://github.com/eslint/espree/issues/457)
> 
>     2. [eslint/espree#349](https://github.com/eslint/espree/issues/349) - not originally marked as breaking, but maybe should be?
> 
>     3. [eslint/espree#456](https://github.com/eslint/espree/pull/456)
> 
> 
> Let's figure out which of these we would like to move forward with and whether or not we want to bundle them all together into a single major release.

**mdjermanovic:** As for espree#349, I agree that it should be treated as a breaking change.
 * 👍 @nzakas

**mdjermanovic:** Should we fix `TemplateElement` nodes, too?

**nzakas:** I think so
 * 👍 @mdjermanovic

**nzakas:** For the record, that fix would go along with #349, which is where `start` and `end` properties don't match the `range` values.

**nzakas:** I see a lot of typing...

**nzakas:** The suspense is building....

**mysticatea:** Note: about #349, `node.start` and `node.end` were introduced accidentally when espree used acorn. To avoid breaking changes for custom parsers, ESLint rules don't use those. ESLint's rule tester checks rules to not use `node.start` and `node.end`.
 * 👍 @mdjermanovic

**nzakas:** @mysticatea yeah, unfortunately custom rules sometimes use those properties

**nzakas:** (which has been a theme of late - custom rules and plugins doing weird things we didn't anticipate)

**nzakas:** So let's break this down, are we all in agreement that #349 is a breaking change?

**mysticatea:** That was the reason I proposed this RFC: https://github.com/eslint/rfcs/tree/master/designs/2019-rule-tester-improvements#1-disallowing-nodestart-and-nodeend

**mdjermanovic:** Breaking change for `espree`, but not for `ESLint` which will upgrade `espree` in a minor version?
 * 👍 @nzakas

**btmills:** 👍 to the start/end bug fix on `Program` and `TemplateElement`, and yeah, breaking just to be safe, and maybe say "hey, while you're at it, maybe use supported loc info instead". Breaking for `espree` just in case, minor `ESLint`

**mysticatea:** The `node.range`'s change is a breaking change.

**mdjermanovic:** Meaning that some custom rules may be broken, but they got warning from `RuleTester` in ESLint v7

**nzakas:** Yeah, so it sounds like we've agreed that #349 is a breaking change for Espree, and ESLint will upgrade in a minor version. Agreed?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**mdjermanovic:** @mysticatea I think there's no `node.range` change proposed

**btmills:** The change would update so  `node.start === range[0]` and `node.end === range[1]`, yes?
 * 👍 @nzakas, @mdjermanovic

**mysticatea:** Ah, OK. So it's a minor for ESLint, but major for espree. I agreed.

**nzakas:** Okay, so let's focus on this one next: https://github.com/eslint/espree/issues/457

**nzakas:** First question: do we want to convert the Espree codebase to ESM and then publish a package that has both ESM and CommonJS?

**btmills:** I have no objections. We'll probably want to be an ES module eventually, so doing an intermediate step with a dual package now makes more sense than a hard cutover in the future.

**nzakas:** @btmills that's my feeling as well.

**mysticatea:** There is ES modules version of underlying packages (e.g. acorn)?

**nzakas:** And given that we have a contributor who's excited to work on this, I'd say let's give them a chance to drive it.
 * 👍 @mysticatea, @btmills

**nzakas:** @mysticatea I'm not sure, but Node interop means we can use CommonJS modules from ESM

**mdjermanovic:** I think we should specify what dual package means. The use case with importing directly from a web page (from the original issue) usually means producing a bundle with dependencies.

**nzakas:** @mdjermanovic that's true, but I don't think that means *we* need to produce that bundle

**btmills:** As I understand it, anyone who wants to use ESM would need to be on Node 12.17+, but CJS will still work on all supported versions

**nzakas:** and `import foo from "commonjs-package"` works just like `const foo = require("commonjs-package")`

**nzakas:** yay Node interop

**nzakas:** My main concern is ensuring that people using Node.js can consume Espree either via CommonJS or ESM. Browser use case is a bit of a batteries-not-included situation.
 * 👍 @btmills, @mdjermanovic

**nzakas:** (for which they can also use skypack.dev)

**mdjermanovic:** so the main use case is doing `import ... from 'espree'` from Node

**mysticatea:** I don't oppose it. But `import espree from "espree"` works just like `const espree = require("espree")`?

**nzakas:** @mysticatea yes

**nzakas:** So it sounds like we are in favor of producing a dual package for CommonJS and ESM that targets Node.js. Agreed?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Okay, it is so!

**nzakas:** Next question: do we want an RFC to dig through the issues more closely?

**nzakas:** I can go either way on this, so curious what others think

**mdjermanovic:** That would be great

**btmills:** I'd appreciate RFC, and hopefully this can be the test case for other packages following the same pattern in the future

**mdjermanovic:** A concern is time. If we want to bundle this for a next `espree` major  than we are at acorn v7 until everything is done

**nzakas:** Right, that's my only concern.

**nzakas:** Since the RFC needs to be open for 30 days minimum

**nzakas:** Can we live with Acorn v7 for 30 days?

**nzakas:** (well, 28 days)

**mdjermanovic:** + work on the PR

**nzakas:** So let's say six weeks

**mysticatea:** https://github.com/tc39/agendas/blob/master/2021/01.md Stage 4 topics have not been added yet.

**nzakas:** I don't think there's an urgent need to upgrade Acorn, so I'm okay with waiting so we can get all three changes in together.
 * 👍 @mysticatea, @btmills

**btmills:** I'm not aware of anything in v8 that we urgently need

**mdjermanovic:** Aside from proposals there's one change, not sure when will be merged in the spec https://github.com/tc39/ecma262/pull/2154

**mdjermanovic:** But six weeks seems fine

**nzakas:** So it sounds like we've agreed that 1) we want an RFC for this dual-package change and 2) we want to wait to get all three breaking changes released together. Agreed?
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Excellent, and so it shall be!

**nzakas:** Next agenda item

**nzakas:** > Agenda item: let's review community contributions for November to determine who should receive the community contributions stipends.
> 
> https://github.com/eslint/eslint/pulse/monthly
> https://github.com/eslint/espree/pulse/monthly
> https://github.com/eslint/eslintrc/pulse/monthly
> https://github.com/eslint/website/pulse/monthly

**nzakas:** So I haven't figured out a good way to track activity across the github org. I'll need to dig into that a bit to make this easier.

**nzakas:** But since it's the end of the month, we need to figure out who (if any) of our contributors will be awarded part of the contributor pool of $500

**nzakas:** Remember, this is open to anyone who isn't on the TSC and isn't a reviewer (because we can already be paid $50/hour)

**nzakas:** I'd like to nominate Siddhant for helping out in <#717416886685401108> so much.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** Seemed to be a pretty slow month commit-wise

**mdjermanovic:** We have a new rule PR from yeonjuan, it's done or almost done. https://github.com/eslint/eslint/pull/13859

**nzakas:** He is a reviewer

**mdjermanovic:** Oh, I wasn't aware, still listed as a committer

**nzakas:** Oh? Hmm, maybe I'm wrong

**nzakas:** I am wrong. Definitely a committer.

**btmills:** yeonjuan was also active in a few issues

**nzakas:** So yeah, I'd say yeojuan for sure. 19 commits in the past month makes him the leader by far

**nzakas:** Anyone else active on issues?

**nzakas:** (I know, it's been a slow month for a bunch of reasons.)

**btmills:** ljharb has jumped in on several

**btmills:** anikethsaha was in a few and has a PR up
 * 👍 @mdjermanovic

**nzakas:** Okay, so here's how I'd rank them, let me know what you think: yeonjuan, anikethsaha, siddhant, ljharb.
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** All right, looks like we agree on that piece.

**nzakas:** Here's how I'd suggest we divvy up the $500:

- yeonjuan $250
- anikethsaha $100
- siddhant $100
- ljharb $50
 * 👍 @mysticatea, @btmills, @mdjermanovic

**nzakas:** (Realizing now we probably need a way to do this process more efficiently in the future, but we can figure that out.)

**nzakas:** Okay, that is finalized. I can take the action item to contact them and let them know.

**nzakas:** Last thing I wanted to bring up is please be sure to keep an eye on https://github.com/eslint/eslint/pull/13837. This has been a long-term project and we're almost at the finish line. Thanks to everyone who has commented already, let's make sure to keep responding so we can wrap things up.

**nzakas:** Any other topics before we talk about the release?

**nzakas:** Okay, let's talk about the release

**nzakas:** Any volunteers?

**btmills:** I'm available

**mdjermanovic:** Shell we release `@eslint/eslintrc` too, there's one bug fix merged today

**nzakas:** Yeah, I was just going to mention that.

**btmills:** 👍 I'll note that on the release issue

**nzakas:** We can probably merge this too: https://github.com/eslint/eslintrc/pull/18
 * 👍 @btmills

**nzakas:** Okay, so @btmills you'll cover this release?

**btmills:** Sometime tomorrow evening

**nzakas:** We may also want to release Espree. Looks like we upgraded acorn-jsx to fix an issue

**btmills:** Okay, I'll release`@eslint/eslintrc` and `espree`, bump both versions in `eslint`'s `package.json`, and release `eslint`
 * 👍 @mysticatea, @nzakas, @mdjermanovic

**nzakas:** Sounds good, thanks for handling that.

**nzakas:** Okay, I believe that's a wrap for today. Thanks everyone. Stay safe and healthy!

**btmills:** 👋

**mysticatea:** Thank you 👋

**mdjermanovic:** 👋
