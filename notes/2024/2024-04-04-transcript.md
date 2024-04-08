# 04/04/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just gathering up everything...

**nzakas:** Reviewing action items from last time

**nzakas:** First, there were some outstanding questions on https://github.com/eslint/create-config/issues/51 that needed addressing. (Action item to everyone.) The PR is merged so looks like that was completed.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Second, @mdjermanovic was going to take over updating the Playground for flat config: https://github.com/eslint/eslint.org/issues/507
 * 👍 @fasttime

**nzakas:** Also merged, so that was completed.
 * 👍 @mdjermanovic

**nzakas:** 🎉

**nzakas:** All right, there's a bunch of issues flagged for today, so I'll just go through those before we talk about v9

**nzakas:** First item: https://github.com/eslint/eslint/issues/18255

**nzakas:** > **TSC Summary:** This issue seeks to add a `--inspect-config` CLI option that will launch the config inspector (similar to `--init` does with `@eslint/create-config`).
> 
> **TSC Question:** Shall we accept this proposal?

**mdjermanovic:** Sounds good to me

**fasttime:** Makes sense I think

**nzakas:** Okay, we've agreed to accept this proposal. I'll take the action item to work on the PR.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item is from eslint-plugin-markdown: https://github.com/eslint/eslint-plugin-markdown/issues/245

**nzakas:** > **TSC Summary:** This change seeks to use recognizable filename extensions for common code block types like `node`, `javascript`, `ecmascript` to `.js`, `markdown` to `.md`, and `typescript` to `.ts`. Currently, the plugin would use the code block type as the filename extension, so `javascript` becomes `0.javascript`, which is a bit confusing.
> 
> **TSC Question:** This represents a breaking change, do we want to accept this and publish a new major version?

**mdjermanovic:** Sounds reasonable to me, but there was already the same request and we didn't seem to be in favor at the time: https://github.com/eslint/eslint-plugin-markdown/issues/176

**fasttime:** I don't feel strongly about this change

**fasttime:** If it's a breaking change, it would be nice to have a flag to keep the current behavior

**mdjermanovic:** I think there's no way to configure processors at the moment?

**nzakas:** We don't currently support processor options, so there's no way to have a flag for this behavior.

**nzakas:** I'm in favor of this change, as I think it is what most users would expect.

**mdjermanovic:** Yeah, seems unlikely that anyone would want different linting for `javascript` vs `js`

**nzakas:** There is also a proposal for allowing users to assign filenames directly to inline code blocks: https://github.com/eslint/eslint-plugin-markdown/pull/230
 * 👍 @fasttime

**mdjermanovic:** Or to ignore one but not the other

**mdjermanovic:** On the other hand, maybe someone would want different linting for `node` vs `js`

**nzakas:** That seems like an edge case. The syntax is the same, so we're really just talking about maybe sourceType or globals differences?

**mdjermanovic:** Yes, but that still might have been important for someone. Also, global return.

**nzakas:** What if we leave `node` out of this proposal. Are you in favor of the rest?

**fasttime:** I'm fine either way

**mdjermanovic:** I think I am, the rest sound quite reasonable

**nzakas:** Okay, then I move that we accept this proposal except we don't want to make a change for `node` at this time.

**mdjermanovic:** My opinion is neutral. If you're in favor of this change, I agree.

**nzakas:** Yes, I'm in favor. So we will accept without making changes for `node`.
 * 👍 @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/17881

**nzakas:** > **TSC Summary:** This issue requests to formalize the ability of ESLint rules to make changes to files other than the file currently being linted. This can happen when a plugin is managing a separate file, such as `eslint-plugin-expect-type`, which generates type information and stores it in a snapshot file.
> 
> **TSC Question:** Is this something we want to explore?

**mdjermanovic:** I think this is the same as https://github.com/eslint/eslint/issues/16143

**mdjermanovic:** We were in favor at the time, but then in the RFC it turned out that vscode-eslint extension can't support this https://github.com/eslint/rfcs/pull/93#issuecomment-1266454318

**nzakas:** I don't think these are the same request, though.

**nzakas:** The newer one is more asking for a way for ESLint to handle writing to other files, specifically. The notification of when a fix is applied seems secondary to just formally being able to say "I want to update this other file and ESLint should help me do it."

**nzakas:** In either case, I don't see a way to technically accomplish this.

**fasttime:** Notifying a rule that a fix has been applied should be easier than getting into the business of applying fixes to extra files.

**fasttime:** The new proposal looks like a lot of new logic to maintain for a limited use case, while calling a callback when a fix is applied is more generic.

**mdjermanovic:** I don't think the request was for ESLint to help with writing to other files

**mdjermanovic:** But just to notify the rule that it's okay to do that

**nzakas:** That's not at all how I read this last comment: https://github.com/eslint/eslint/issues/17881#issuecomment-1883593657

**nzakas:** > > dangerous use case -- one of the implicit guarantees of ESLint is that rules won't have side effects
> 
> Agreed. I think in my mind the danger of being able to write to separate files is worth it in these cases. But maybe there are ways to make a relatively safer way for rules to do this?
>     * Limiting this option to `suggestions`, not fixes?
>     * Add a new `meta` property like `meta.allowSuggestingFileChanges` _(but with a better name)_?
>     * Having these out-of-file changes go through `fixer` methods that limit the allowed actions in some way?

**mdjermanovic:** Ah, so that would be something like generating a fix with a `filename` in it?

**nzakas:** Right

**mdjermanovic:** Okay, that sounds interesting.

**nzakas:** Just to put it out there: I'm not in favor of this for all the reasons I listed on the issue. If you two would like some time to review it, we can revisit it next meeting.

**mdjermanovic:** We could follow up on the issue

**nzakas:** Sounds good.

**fasttime:** If it's about ESLint applying changes to extraneous files, I don't think it's worth the effort at this time, but we can revisit it later

**nzakas:** Please add that as a comment on the issue, then we can follow-on when @mdjermanovic has had time to review.
 * 👍 @fasttime

**nzakas:** So for this item, we've decided to table the discussion. Action item is for @mdjermanovic to review and add his comments. We will then see if we can drive the issue to resolution through the comments.

**mdjermanovic:** Yeah, it looks like I misread the latest version of the request

**nzakas:** It went through a few iterations, so it was easy to get lost.

**nzakas:** Next item: https://github.com/eslint/eslint/issues/17681

**nzakas:** > **TSC Summary:** This issue seeks to deprecate two additional rules, `multiline-comment-style` and `line-comment-position`, and allow `@stylistic` to take over maintenance in the plugin.
> 
> **TSC Question:** Shall we do so?

**mdjermanovic:** I agree

**fasttime:** I also agree

**nzakas:** Me too

**nzakas:** Okay, we've decided to deprecate these two rules and coordinate with `@stylistic` to incorporate and maintain them going forward.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's hop over to the v9 board:

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** Where it looks like we are ready for v9.0.0! 🎉

**fasttime:** wow!

**nzakas:** Everything on the board has been merged.

**nzakas:** I would like to get this one in: https://github.com/eslint/eslint/issues/18255

**nzakas:** I should be able to get that PR ready after this meeting.

**fasttime:** I could review it tomorrow if it's still not merged
 * 👍 @nzakas

**nzakas:** So shall we jump into talking about the release?

**mdjermanovic:** I can tomorrow
 * 👍 @fasttime

**nzakas:** I can be around to help

**mdjermanovic:** I was just typing that 🙂

**mdjermanovic:** Thanks!

**nzakas:** Since there will be a lot of moving parts

**mdjermanovic:** Yeah, this is the first time we're doing prerelease -> release with the new infrastructure
 * 🤞 @nzakas

**mdjermanovic:** Packages to release: `@eslint/create-config`, `@eslint/js`, `eslint`
 * 👍 @nzakas

**nzakas:** For @fasttime's benefit: when we do a major release changelog/blog post, we treat it as if it's the first release after the last major release. So, this will include all of the changes since the end of the v8.x branch.
 * 👍 @fasttime

**nzakas:** That way people don't have to jump through all the blog posts to see everything that's changed from v8.x

**fasttime:** Okay, that makes sense

**mdjermanovic:** This also needs to be merged, so if anyone has time to review it: https://github.com/eslint/eslint/pull/18265

**nzakas:** Yup, I'll take a look once we finish here

**mdjermanovic:** I'll prepare a PR for `eslint.org` to redirect `docs/next/*` to `docs/latest/*`
 * 👍 @nzakas

**nzakas:** The other thing we should do (and haven't before), is submit to GitHub Release Radar: https://github.com/github/release-radar

**mdjermanovic:** That should be done tomorrow as well?

**nzakas:** Yes

**mdjermanovic:** Would you like to submit the issue there?

**nzakas:** Yes, I'll handle that. I'm going to add to the checklist so we don't forget.
 * 👍 @mdjermanovic

**mdjermanovic:** Thanks!

**nzakas:** I can also handle updating the blog post

**mdjermanovic:** You'd like to prepare the blog post?

**mdjermanovic:** That would be awesome, thanks 🙂
 * 👍 @nzakas

**nzakas:** I'll let you handle getting the website stuff synced 😅

**mdjermanovic:** No problem, a big blog post would be the toughest part for me 🙂

**nzakas:** Any other special steps we should note for tomorrow?

**mdjermanovic:** I don't see anything at the moment, but will revisit and test everything tomorrow before the release

**nzakas:** Sounds good. Around meeting time?

**mdjermanovic:** Yes, around meeting time

**nzakas:** I'll be here 👍

**mdjermanovic:** Thanks!

**nzakas:** Anything else release-related before talking about contributor pool?

**mdjermanovic:** Nothing in particular at the moment, if something pops up tomorrow I'll let you know
 * 👍 @nzakas

**fasttime:** Nothing from my end

**nzakas:** All right, contributor pool for March: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-03-01..2024-03-31+

**nzakas:** We had some really meaty ones this month.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** mnkiefer finished up yet another months-long PR, so I'd like to give her $1,500
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**nzakas:** webpro also took two months to get Knip integrated so maybe $750?
 * 👍 @sam3k_, @mdjermanovic

**fasttime:** 👍

**mdjermanovic:** Very useful tool

**fasttime:** I hope he'll be available to do maintenance if we need it
 * 🤞 @nzakas, @mdjermanovic

**nzakas:** ota-meshi also spent a couple of months working through the squiggles in the docs, so $750 as well?
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**mdjermanovic:** That's a great addition to the docs site
 * 👍 @nzakas, @fasttime

**nzakas:** The other two look roughly the same? $200 each?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, I'll let them know. Great month for external contributors. 🎉
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And I think that's it for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks, take care!
