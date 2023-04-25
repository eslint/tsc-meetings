# 04/20/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Okay, looks like we don't have any issues or PRs flagged. Any you'd like to discuss?

**mdjermanovic:** Nothing in particular for today

**nzakas:** I'm just looking through some of my notifications to double check

**nzakas:** Everything looks good. We do have a couple RFCs to review, but otherwise nothing of concern.

**mdjermanovic:** Actually, I have one question: https://github.com/eslint/rfcs/pull/90#issuecomment-1507600776

**nzakas:** I'd say yes, that's correct.
 * 👍 @mdjermanovic

**nzakas:** Let me comment on the RFC too

**mdjermanovic:** I think there was some confusion in the RFC, we first agreed on making a breaking change in favor of consistency, but then the RFC was updated to a non-breaking change that introduces some inconsistencies

**nzakas:** Yeah, I've been having trouble keeping up. 😅

**mdjermanovic:** Yes, I got confused too, had to reread everything multiple times

**nzakas:** My overall opinion is just let's do what we think is right, implement it in `FlatESLint`, and ship it.

**mdjermanovic:** Agreed.

**mdjermanovic:** I'll leave another comment to clarify what should be updated in the RFC (basically, it should be reverted to the previous version, then updated to work on `FlatESLint` instead of `ESLint`)

**nzakas:** And that is "When warnIgnored isn't passed to lintText, lintText should use constructor's warnIgnored" correct?

**mdjermanovic:** Yes, exactly. That's the breaking change for `FlatESLint` class users.
 * 👍 @nzakas

**mdjermanovic:** That means that `warnIgnored` of `lintText` will effectively default to `true` instead of `false`

**nzakas:** Right, because the default `warnIgnored` for `FlatESLint` will be `true`

**mdjermanovic:** Yes, exactly.

**nzakas:** All right, I think we are on the same page.

**nzakas:** To wrap up for meeting notes: We have decided that the RFC should be changed so if the `warnIgnored` option of `lintText()` is not specified, it will default to the `warnIgnored` value for the `FlatESLint` instance.
 * 👍 @Sam3k, @mdjermanovic

**Sam3k:** Howdy

**mdjermanovic:** And, although it's a breaking change for `FlatESLint` class users, we can release it in a `8.x` minor version of ESLint

**nzakas:** Right

**nzakas:** Let's do a status update on: https://github.com/eslint/eslint/issues/13481

**nzakas:** I started working with the typescript-eslint folks and we ran into an issue because they use Nx, and Nx directly uses the `ESLint` class rather than the CLI, so it can't use flat config until it is updated to also use the `FlatESLint` class.

**nzakas:** https://github.com/typescript-eslint/typescript-eslint/pull/6836

**nzakas:** James is going to work on implementing that.

**mdjermanovic:** I'll check the discussion on the PR

**mdjermanovic:** I was away so I haven't started other tasks, but will start with `eslint-plugin-n` next week
 * 👍 @nzakas

**nzakas:** I haven't had the time to start on the other repos yet

**nzakas:** Okay, I don't think we have any else to discuss issue-wise.

**nzakas:** For the record, I will mostly be offline for the next week, starting tomorrow, as I'm in the process of packing up everything and moving out of California. I anticipate being back online next Friday.
 * 👍 @mdjermanovic

**nzakas:** Shall we talk about the release?

**mdjermanovic:** I can tomorrow

**mdjermanovic:** Since you already released `eslint-scope`, I think we'll have only `eslint` and `@eslint/js` for tomorrow

**nzakas:** Sounds good

**nzakas:** Last call for topics?

**mdjermanovic:** Nothing in particular from me

**nzakas:** All right, then we can wrap up for today. Thanks!

**nzakas:** (And thanks @Sam3k for the notes)

**mdjermanovic:** Thanks 👋
