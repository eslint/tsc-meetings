# 08/06/2026 ESLint TSC Meeting Transcript

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Just going to pull up last meeting's notes...

**nzakas:** Okay looks like there's nothing to follow up on

**nzakas:** Let's start with statuses. Mostly unchanged for me. I did find some time to triage some issues.

**fasttime:** I've been mostly busy with triaging issues and reviewing PRs.

**nzakas:** And let's update availability for the next couple of weeks.

I'm still at roughly 0.5-1.5 hours each week. Although I'm going to see if I can get creative with Claude to be a bit more productive.

**fasttime:** I expect to  be available about 7 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week - @fasttime 
August 10 - @mdjermanovic 
August 1 7 - @nzakas
 * 👍 @fasttime

**nzakas:** Looks like we've got a few issues flagged for today, so let's jump right in before hitting the contributor pool.

**nzakas:** First item: https://github.com/eslint/markdown/issues/683

**nzakas:** > **TSC Summary**: This issue proposes adding a `no-emphasis-as-heading` rule to report standalone bold or italic text used in place of Markdown headings. Similar rules exist in `markdownlint` and `remark-lint`, and the rule would improve document structure and accessibility.
> 
> **TSC Question**: Should we accept this proposal and add the rule to `@eslint/markdown`, or leave this pattern unreported?

**nzakas:** Given that this rule already exists in other Markdown linters, I'm 👍

**fasttime:** I'm also fine with having the rule 👍

**nzakas:** We've agreed to accept this issue.

**nzakas:** Next item: https://github.com/eslint/create-config/issues/257

**nzakas:** > **TSC Summary**: This issue proposes adding `"exports": {}` to `@eslint/create-config` in v3 to prevent consumers from importing undocumented internal modules. Since the package is intended only as a CLI and does not expose a public API, this would formalize that boundary, but it would be a breaking change for users currently relying on subpath imports.
> 
> **TSC Question**: Should we accept this breaking change for `create-config` v3 and block all subpath imports by adding `"exports": {}`, or should we leave internal modules accessible as they are today?

**nzakas:** I'm 👍

**fasttime:** I'm also okay 👍

**nzakas:** Okay, we've agreed to accept this issue.

**nzakas:** Next item: https://github.com/eslint/eslint/issues/20736

**nzakas:** > **TSC Summary**: This issue is seeking consensus on removing redundant array literals in `defineConfig()` examples, but there isn’t definitive consensus yet.
> 
> **TSC Question**: Should we accept it, or if not, is it better to keep the current existing patterns?

**nzakas:** I have a slight preference for leaving the docs as-is (that's why I wrote them that way) but I don't feel strongly.

**fasttime:** I also don't feel strongly. It seems the main motivation is to align our docs with `tseslint.config` usage.

**nzakas:** Since we don't feel strongly about changing it, I'd propose we leave it as-is considering it's primarily a preference and doesn't really affect user experience.
 * 👍 @fasttime

**nzakas:** Okay, we've agreed not to accept this change.

**nzakas:** next item: https://github.com/eslint/eslint/issues/20730

**nzakas:** > **TSC Summary**: This issue proposes ignoring files marked with attributes such as `linguist-generated` in `.gitattributes`. The discussion so far suggests that this should not be default ESLint behavior, but there is support for providing a helper similar to `includeIgnoreFile()`.
> 
> **TSC Question**: Should ESLint provide an official helper for ignoring files based on attributes specified in `.gitattributes`, or should this remain a userland concern?

**nzakas:** I'm 👍 to providing a helper and would welcome an RFC

**fasttime:** Sounds good 👍

**nzakas:** We've agreed to accept this issue pending an RFC

**nzakas:** Okay, that's everything flagged for today. Any other issues or PRs you'd like to discuss?

**fasttime:** @mdjermanovic prepared two PRs concerning v9 EOL that should be merged today.

**fasttime:** I'm just not sure if there are any other TODOs, such as informing HeroDevs or Tidelift.

**nzakas:** Nothing formal. They don't really step in unless there's a request.

**fasttime:** That's fine. I will merge the PRs after the meeting.
 * 👍 @nzakas

**fasttime:** Nothing else to discuss from my side.

**nzakas:** Okay, let's talk contributor pool

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-08-01-contributor-pool.md

**fasttime:** Maybe $100 for the two minor contributors and $500 for sethamus?
 * 👍 @nzakas

**nzakas:** Budget is $883 this month (for the record)
 * 👍 @fasttime

**nzakas:** I'll let them know

**fasttime:** Thanks!

**nzakas:** Let's discuss the release. Are you available?

**fasttime:** Yes, I'll do the release tomorrow.

**nzakas:** Thanks!

**fasttime:** Only `eslint/eslint`, and maybe just a patch release.
 * 👍 @nzakas

**nzakas:** Okay, I think that's all for today. Thanks!

**fasttime:** Thanks! Bye 👋
