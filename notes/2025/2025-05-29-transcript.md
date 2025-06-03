# 05/29/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi 👋

**mdjermanovic:** Hi!

**nzakas:** Pulling up the notes from last time...

**nzakas:** Looks like we had two action items. First was to prioritize working on the `basePath` RFC, which we did. In fact, I'll merge it right now.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** The second was for me to update the description of frozen rules to mention TypeScript support, which I did here: https://github.com/eslint/eslint/pull/19736

**nzakas:** Oh, and a third was to automate posting of release announcements in <#710284269657784440> , which I also did.

**nzakas:** Let's then move on to status updates.
For me, I've been working on implementing nested rules with element selectors in CSSTree as well as fixing type errors in CSSTree. I'm continuing to work on refactoring the core.

**mdjermanovic:** I've been working on the `basePath` RFC, new `--pass-on-unpruned-suppressions` CLI option, and the `GlobalScope#implicit` bug in the core.

**fasttime:** I've been working mostly on the multithread linting prototype.

**nzakas:** RFC Duty:
This week - @mdjermanovic 
June 2 - @fasttime 
June 9 - @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's talk availability for the next two weeks: I'm expecting to be available 2.5-3 hours each weekday.

**mdjermanovic:** I'll be mostly offline the next three days. After that, I'm expecting to be available 2-2.5 hours each day.
 * 👍 @nzakas

**fasttime:** I should be available about two hours a day the next two weeks.
 * 👍 @nzakas

**nzakas:** It looks like we don't have anything flagged for discussion today. Anything anyone would like to discuss?

**fasttime:** Nothing from my side.

**mdjermanovic:** Nothing in particular from my side for today

**nzakas:** Let me look at the Triage board

**nzakas:** https://github.com/eslint/eslint/issues/19726

**nzakas:** This issue wants us to switch to use Espree with Prettier. I don't see the value.

**mdjermanovic:** Me neither, but looks like we're still waiting for response 🙂

**fasttime:** I also don't see a benefit.

**nzakas:** Yeah, I think a week is long enough to wait for something like this. I'd like to just close it and move on.

**fasttime:** Go ahead

**mdjermanovic:** Yeah, there hasn't been a response for more than a week

**nzakas:** Okay, we've agreed to close the issue as WONTFIX.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** That's the only issue/PR that jumped out to me.

**nzakas:** Unless anyone has anything else, let's talk about the release.

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**fasttime:** It will be `eslint` and `@eslint/js` only I think.
 * 👍 @nzakas, @mdjermanovic

**fasttime:** There are a few PRs awaiting a second review. Anything we'd like to get merged in particular?

**nzakas:** https://github.com/eslint/eslint/pull/19779

**fasttime:** Yes, I saw that already 🙂 Will review tomorrow.

**nzakas:** This one is important for properly supporting `languageOptions.customSyntax` in the CSS plugin: https://github.com/eslint/eslint/pull/19760

**fasttime:** Okay, I will review it tomorrow.

**nzakas:** Thanks!

**nzakas:** Okay, I believe that is all for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks! 👋
