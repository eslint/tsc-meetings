# 12/01/2022 ESLint TSC Meeting Transcript

**nzakas:** 👋

**mdjermanovic:** Hi!

**nzakas:** It'll just be you and me today. Can you take notes?

**mdjermanovic:** Sure!

**nzakas:** Thank you

**nzakas:** So it looks like we don't have anything tagged for today. Is there anything you'd like to discuss?

**mdjermanovic:** Nothing in particular today

**nzakas:** No issues or PRs that are stalled waiting for feedback? (To be specific)

**mdjermanovic:** I'll take a look

**mdjermanovic:** Perhaps this one https://github.com/eslint/eslint/issues/16492

**mdjermanovic:** I don't think we'd like to make any changes there, but would still appreciate more feedback

**nzakas:** Ooph, what a mess.

**mdjermanovic:** That's a formatter modifying results to affect exit code

**nzakas:** So am I understanding this correctly that previously we were counting warnings after the formatter executed but now we are doing so before the formatter is executed?

**mdjermanovic:** Yes, exactly

**mdjermanovic:** We now need to count warnings before the formatter to pass some extra data that is calculated from warnings
 * 👍 @nzakas

**nzakas:** Yeah, then unfortunately, I don't think there is any change to be made here. We obviously can't have that data available for formatters if the formatters are run before its calculated, and I don't think we want a generic preprocessing of results to be added to support this use case.
 * 👍 @mdjermanovic

**nzakas:** The longer a project exists, the more you learn about all the weird stuff people are doing with it. 😅

**mdjermanovic:** Yeah, this is really something formatters are not supposed to do

**mdjermanovic:** I'll close the issue with the explanation, and there's a workaround with `process.exit()` in the formatter.

**mdjermanovic:** Which also isn't what formatters are supposed to do, though 🙂

**nzakas:** Hehe, agreed. I do think at some point I'd like to revisit a discussion around custom severities...possibly as part of the rewrite discussion.
 * 👍 @mdjermanovic

**nzakas:** Some misc updates

**nzakas:** 1. I updated the permissions of the website-team on the main ESLint repo so they can merge stuff in the `docs` directory. Basically, we setup a CODEOWNERS file that gives website-team approval power over `docs` and then set the repo such that every PR needs at least one approval from a code owner.

**nzakas:** So basically, if they approve something in `docs` they can also merge it, but they can't approve something elsewhere to merge.
 * 👍 @mdjermanovic

**mdjermanovic:** A question, since I don't know much about the codeowners feature: does this affect committing to `main` directly? In particular, will the release work 🙂

**nzakas:** AFAIK code owners applies to PRs only

**mdjermanovic:** Okay, that's what I thought by reading the docs, but wanted to doublecheck with you to avoid surprises on the release 🙂

**nzakas:** Yes, good question!

**nzakas:** 2. Ben is making good progress on the docs. I'm glad to get some sunlight on the docs through the process as some of those pages haven't been touched in a very long time. Excited to start getting into the user guide soon.
 * 👍 @mdjermanovic

**mdjermanovic:** I'll also take a look at the RFC over the weekend

**nzakas:** Awesome, thanks.

**nzakas:** Oh, we should probably discuss this:

**nzakas:** https://github.com/eslint/eslint/issues/16580

**nzakas:** I just really don't want to start adding optional filenames again. It turned into such a mess with eslintrc and I'd prefer not to do that again.

**nzakas:** I feel like this is a temporary issue, anyway, as I don't think people will be writing CommonJS for too much longer.

**mdjermanovic:** My opinion is slightly towards accepting the issue

**mdjermanovic:** Allows for more flexibility

**nzakas:** Yes, I don't want to allow flexibility. 🙂

**mdjermanovic:** This is, for example, a valid argument: https://github.com/eslint/eslint/issues/16580#issuecomment-1332790594

**mdjermanovic:** This one too: https://github.com/eslint/eslint/issues/16580#issuecomment-1332817365. Though, if we allow async functions in configs, that would be addressed.

**nzakas:** I just don't find those arguments very compelling.

**nzakas:** I understand people would *prefer* a different filename right now, but that's also how we ended up with four different eslintrc filenames, and I'd argue that was a bad decision.

**mdjermanovic:** I you feel strongly against, and there will be nothing that cannot be done with CJS config files, I'll agree.

**nzakas:** Yeah, I feel like this is the same as the strict mode argument in ES6: modules are automatically strict mode rather than requiring "use strict" because in the future (now?) modules are all anyone would write and "use strict" would be a vestigial syntax.

**nzakas:** I'm making the same argument here: CommonJS is going away. I don't want to make changes to support CommonJS when no one will be writing it in another five years.
 * 👍 @mdjermanovic

**mdjermanovic:** Regarding the last comment on the issue, will we enable functions (incl. async functions) in configs? I think that would solve the problem mentioned in that comment.

**mdjermanovic:** So that a CJS config could `import()` an ESM module in an async function.

**mdjermanovic:** As far as I know, functions are currently disabled due to some technical problems?

**nzakas:** There aren't any technical problems, but I feel like there is a usability problem.

**nzakas:** I think I explained in an issue somewhere that right now when configs are objects or arrays we can pretty easily mutate them into whatever form we need. If we start allowing functions, then it gets a lot harder to do so.

**nzakas:** If you want to open a separate issue around that, let's continue discussing there.
 * 👍 @mdjermanovic

**nzakas:** I'm just still skeptical that we need to bend over backwards to support CommonJS

**nzakas:** To review: We've agreed not to support .cjs and .mjs config files at this point. We will follow up with an issue around async functions to see we should enable that.
 * 👍 @mdjermanovic

**mdjermanovic:** Agreed.

**nzakas:** (One other thing: async functions wouldn't work at all in the current `Linter`, so another consideration.)

**mdjermanovic:** Yes, when Linter is used directly

**nzakas:** Any other things to discuss before we move on to Contributor Pool?

**mdjermanovic:** Nothing in particular.

**nzakas:** All right, here we go:

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2022-11-01

**nzakas:** Looks like sosukesuzuki had quite the month

**mdjermanovic:** sosukesuzuki had 3, including 2 new rules

**nzakas:** Shall we do $500 for that?
 * 👍 @mdjermanovic

**nzakas:** Joshua has previously declined payment

**mdjermanovic:** Then, we have trosos, fasttime and chenxsan remaining.

**mdjermanovic:** $100 each?

**nzakas:** Sounds good to me.

**nzakas:** I will let them know.

**nzakas:** Are you able to do the release tomorrow?

**mdjermanovic:** Yes, I am.

**mdjermanovic:** I think it's only `eslint` package this week.

**nzakas:** I think you're correct

**nzakas:** Okay, I believe that is all for today. Stay safe!

**mdjermanovic:** Thanks! 👋
