# 02/23/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi @btmills

**btmills:** 👋

**btmills:** Just the two of us today!

**btmills:** I can take notes
 * 👍 @mdjermanovic

**mdjermanovic:** I think we have only one agenda item (+ release of course)

**mdjermanovic:** https://github.com/eslint/eslint/pull/16807

**mdjermanovic:** **TSC Summary:** This PR seeks to add a way to opt-out of the hardcoded JSDoc comment exception in `multiline-comment-style` ([full description](https://github.com/eslint/eslint/pull/16807#issuecomment-1417706498)). The `multiline-comment-style` rule is stylistic and frozen, meaning we won't make any further changes to the rule, but this pull request is fully implemented.

**TSC Questions:**

1. Should we accept this pull request?
2. Should the option be named `allowJsDoc` or `allowJSDoc`?

**mdjermanovic:** I think we could accept this as a "design bug".

**btmills:** I'd lean toward allowing the option since we currently have the hard-coded exception

**btmills:** If it were asking to add an optional exception, that would have a higher bar
 * 👍 @mdjermanovic

**mdjermanovic:** Okay, so we've agreed to accept the PR.
 * 👍 @btmills

**btmills:** Inserting an agenda item since we have plenty of time:

**btmills:** The [generator-eslint release-please PR](https://github.com/eslint/generator-eslint/pull/144) is up. Should I go ahead and add it to another repository (or a few), and if so which ones, or should we wait and try it on generator-eslint for a while first?

**mdjermanovic:** I'd try it once 🙂

**mdjermanovic:** But we'd need some commits to try it

**btmills:** Yeah, that's part of the motivation. I suggested generator-eslint first because it's low blast radius if something takes a couple attempts. But it doesn't have a level of activity that would make for a very quick test

**mdjermanovic:** What would you suggest, to also add it to a more frequent repository?

**btmills:** I think so. Do one successful release of generator-eslint to make sure it's configured correctly, then replicate the setup on something like create-config or eslintrc

**mdjermanovic:** 1 release of generator-eslint, then replicate the setup on create-config and try it out more there sounds like a good plan to me.

**btmills:** So it shall be!
 * 👍 @mdjermanovic

**mdjermanovic:** Anything else you would like to discuss before the release?

**btmills:** 🦗

**mdjermanovic:** Nothing from me, too. Then, the release 🙂

**mdjermanovic:** I can tomorrow

**btmills:** I'm available on Saturday

**btmills:** Mind if I do this one?

**mdjermanovic:** Sure, it's yours 🙂

**btmills:** thanks 🙂

**mdjermanovic:** we have `eslint` of course, then `@eslint/eslintrc` and  the new `@eslint/js`

**mdjermanovic:** In my understanding, we should release `@eslint/js` twice (v8.34.0 and v8.35.0)

**mdjermanovic:** https://github.com/eslint/eslint/pull/16844

**btmills:** Is there a PR to merge in between there to trigger the minor bump?

**mdjermanovic:** We choose it from the dropdown on release

**btmills:** Aha! I see that

**mdjermanovic:** The release script is like the one for `eslint-config-eslint`

**mdjermanovic:** After the `@eslint/js` v8.35.0 release, we should update eslint's package.json (`@eslint/js` is pinned)

**btmills:** Should I submit PRs to bump ESLints dependency on `@eslint/js` after both releases or just the final?

**btmills:** Got it, nice timing!

**mdjermanovic:** I think just the final

**mdjermanovic:** just "8.35.0"

**mdjermanovic:** I can prepare a draft to upgrade eslintrc

**btmills:** 1. Release `@eslint/eslintrc`
2. Bump the `@eslint/eslintrc` dependency
3. Minor release `@eslint/js` to 8.34.0
4. Minor release `@eslint/js` to 8.35.0
5. Bump the `@eslint/js` depencency
6. Release `eslint`
 * 👍 @mdjermanovic

**btmills:** why thank you

**mdjermanovic:** (It needs a small change in `eslint.config.js`)

**btmills:** got it

**btmills:** Separately from all those, I'll release generator-eslint whenever the release-please PR is approved. That can be off-cycle. Same with create-config later

**mdjermanovic:** Sounds good to me

**btmills:** Anything else I should know on the release front?

**mdjermanovic:** I think that's all, if I recall something else I'll leave you a note on the team channel

**btmills:** thanks!

**btmills:** in terms of availability, plenty for the next week then tapering off after that. I'll try to wrap up what I can, but I imagine plenty will hang over, and I won't drop that on the floor
 * 👍 @mdjermanovic

**mdjermanovic:** I'll be available as usual in the next two weeks
 * 👍 @btmills

**btmills:** Anything else we should cover?

**mdjermanovic:** Nothing in particular from me

**btmills:** same here

**btmills:** 👋 take care!

**mdjermanovic:** Looks like that's all for today! Thanks 👋
