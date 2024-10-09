# 10/03/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Just pulling up the notes from last time.

**nzakas:** Looks like we had two action items:

**nzakas:** ✅  @nzakas to create a new $5,000 sponsorship tier.

**nzakas:** ✅ @fasttime to post a discussion asking for fundraising ideas

**nzakas:** Let's start with statuses. I finished up the alternate config lookup work, spent some time cleaning up docs and fixing bugs to announce JSON and Markdown linting and Code Explorer, and made some PRs for the v8 EOL.

**mdjermanovic:** I finished support for inline config in `@eslint/json`

**fasttime:** I've been busy with https://github.com/eslint/rewrite/pull/59 and reviewing issues and PRs. Also created the discussion to help us raise funds (https://github.com/eslint/eslint/discussions/18957) and improved on https://github.com/eslint/rfcs/pull/123, neither have received any attention 🙁

**nzakas:** It looks like we don't have anything flagged for today. Any issues or PRs anyone would like to discuss?

**fasttime:** Nothing from my side.

**mdjermanovic:** Nothing in particular from my side too

**nzakas:** Okay, then I'll introduce a few. 😄

**nzakas:** @mdjermanovic we need your comments on this:
https://github.com/eslint/eslint/discussions/18830

**mdjermanovic:** I'll try to contribute to the discussion this weekend
 * 👍 @nzakas

**nzakas:** There are a few open issues I'd like to see if we can resolve here.

**nzakas:** https://github.com/eslint/eslint/issues/18862

**nzakas:** This one requests the ability to allow certain irregular whitespace characters in `no-irregular-whitespace`.

**mdjermanovic:** Yeah, only in places where the rule can already be configured to allow all of them

**nzakas:** To me, this seems like an edge case that I don't think it makes sense to update the rule for.

**nzakas:** (Wanting to disallow all but one irregular white space character)

**mdjermanovic:** Given that we already have options to allow all in those places, I'm slightly in favor of making it configurable to allow only some

**mdjermanovic:** Though, that would be I think a stylistic addition only

**mdjermanovic:** To this rule which otherwise reports problems

**nzakas:** My last comment:
> I'd think you'd want to clearly indicate the use of `\u00A0`, and the best way to do that is to use the escape sequence. Otherwise, someone else might come along and not realize there's a special character there instead of a regular space.

**mdjermanovic:** I agree with that comment, just since there's already an option to allow _all_ it would make sense to make it configurable. Though I'm not strongly in favor

**mdjermanovic:** If no one else supports the proposal, I'd be fine with closing

**nzakas:** Just too much of an edge case for me to support 👎

**fasttime:** I'd suggest waiting to give the OP a chance to come up with a comment. It seems they haven't replied to the last comment yet. Otherwise, I'm fine with closing.

**nzakas:** I think all of the necessary info is already in the issue.

**nzakas:** Since no one feels strongly that we need to make an addition, I'd say let's close it.

**fasttime:** Fine to me.

**mdjermanovic:** Agreed.

**nzakas:** Okay, we've agreed to close the issue.

**nzakas:** Next: https://github.com/eslint/eslint/issues/18842

**nzakas:** This one asks to change `func-style` so that a TypeScript function in the form `const foo: Bar = () => {}` will not be flagged when the rule is set to `declaration`.

**nzakas:** To me, I don't think the proposal makes sense as this is still a function expression when the rule is set to enforce declarations, and if you don't want to enforce declarations, why enable the rule?

**mdjermanovic:** This would be, to my understanding, a case where the same result can't be achieved with a function declaration

**nzakas:** That's true, but I'm not sure the rule makes that guarantee.

**mdjermanovic:** I think the rule is more about enforcing the use of one over another then just disallowing one

**nzakas:** Assuming that's true, I still don't know that it's making any guarantee that you can get 100% alignment between the two forms.

**mdjermanovic:** For example, even if it's set to `declaration`, it still allows arrow functions that use `this` because the same can't be achieved with a declaration

**nzakas:** Right, because that would result in a broken runtime behavior.

**mdjermanovic:** I guess it then depends on whether we want this rule to fully support TypeScript or not

**nzakas:** I'm not sure that's the question. I think the question is what does it mean to enforce a function style?

**nzakas:** To me, this coding style isn't suitable for the `func-style` rule because the author is clearly mixing styles depending on context.

**mdjermanovic:** I'm not sure if the mixing is because of preferences, but the need to declare the function to be of a certain type

**nzakas:** Either way, it results in a file with intentionally mixed styles.

**mdjermanovic:** They said in the issue "a type annotation is required for a function (ex: Express handlers)"

**nzakas:** Right, and if that's the exception in a file, then a disable comment works well.

**mdjermanovic:** Though, I don't know if that's true, as @fasttime noted in https://github.com/eslint/eslint/issues/18842#issuecomment-2370415017

**nzakas:** As with the previous issue, I just want to be careful about adding options for edge cases. We never guarantee a rule will cover everyone's cases, we're just going for the most common 80-90% of cases.

**mdjermanovic:** If this is an edge case that only occasionally appears, I think it's fine to say - use disable comments.

**fasttime:** I think the same effect could be achieved with a function declaration where the types of the arguments and the return type match the expected types of the function type.
 * 👍 @nzakas

**mdjermanovic:** Okay, in that case adding the type would be just a personal preference, and I agree with closing the issue then.

**nzakas:** Okay, we've agreed to close the issue.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next one: https://github.com/eslint/eslint/issues/18757

**nzakas:** The question here is if we should strip "./" from the start of patterns in `files` and `ignores`. @fasttime and I are 👍

**mdjermanovic:** I'm not sure yet. That `./` seems unnecessary, and if it would add a lot of complexity to the code maybe we don't need to support it

**mdjermanovic:** Also, what about `../`? It's currently a no-op, the same as `./`.  If we would consider throwing an error for `../`, maybe we could do the same for `./`

**nzakas:** I see those as different cases.

**nzakas:** For `./`, I think we're talking `files.map(pattern => pattern.startsWith("./") ? pattern.slice(2) : pattern)`

**mdjermanovic:** Yeah, those two can have different outcomes, but could be treated the same (error)

**nzakas:** It seems like there's a consensus on the issue that the expectation is for `./src` and `src` to be treated the same.

**mdjermanovic:** I'm fine with allowing `./src` and treating it the same as `src` if that wouldn't add much complexity or performance overhead. I'd be also fine with pre-analyzing the patterns and throwing an error. Since you're both in favor of the former, I agree.

**nzakas:** Okay, we've agreed that `./src` and `src` should be treated as the same (assuming an acceptable level of complexity for the  implementation)
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, let's quickly go over RFC duty:
This week - @nzakas 
10/7 - @mdjermanovic 
10/14 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And as a bit of news: the launch of JSON and Markdown linting, plus Code Explorer, seems to be a hit. 🎉
 * 🎉 @sam3k_, @mdjermanovic, @fasttime

**nzakas:** Hopefully will help the sponsorship story as well 😄

**nzakas:** And a reminder: there are several issues flagged as "tsc waiting", please take a look.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Now let's talk about the release.

**fasttime:** I can do the release tomorrow
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** It will be just `@eslint/js` and `eslint` I think.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I added highlights for the new config lookup scheme to the release issue.
 * 👍 @fasttime

**nzakas:** oh shoot, I forgot we need to do contributor pool

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-09-01..2024-09-30

**nzakas:** kripod did a bunch of small PRs to fix rule types, so $500 for all of them?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** RobinTail went through the whole RFC process and landed the PR, so $500 too?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** and $100 for everyone else?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, I'll let them know.
 * 👍 @mdjermanovic

**fasttime:** Thanks.

**nzakas:** Okay, last thing from me: I'm taking next week off. I'll be away from Discord and GitHub completely, but I'll still be checking email if you need to reach me for anything.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** My "no code week" 😄 Looking forward to it.

**nzakas:** All right, thanks everyone!

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks, bye!

**nzakas:** (And thanks @sam3k_ for the notes)
