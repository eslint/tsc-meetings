# 11/04/2021 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Glad to have everyone back this week. @btmills are you good for notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** We've got one official agenda item and then some others I want to bring up

**nzakas:** First: https://github.com/eslint/eslint-cli/issues/17

**nzakas:** This one doesn't have a summary and questions, but basically do we want to continue to support the eslint-cli package?

**nzakas:** My vote is no, I never really understood the value and I'd be happy to shut it down.

**btmills:** the alternative being `npx`, which wasn't available at the time

**btmills:** I agree with archiving it in favor of `npx`

**mdjermanovic:** I agree too, `eslint-cli` seems unnecessary now

**nzakas:** Okay, we've agreed to archive `eslint-cli`! @btmills would you mind taking care of that?

**btmills:** will do 👍

**nzakas:** Thanks

**nzakas:** There are a few other issues floating around that I'd like to hit quickly. We also have a giant list in "Feedback Needed", so we can't get to all of those today, but I have a few I'd just like to get moving.

**nzakas:** https://github.com/eslint/eslint/issues/15256

**nzakas:** Basically, the issue here is if a custom parser passes ecmaVersion: latest in parserOptions, it isn't normalized and "latest" is passed to eslint-scope, which doesn't support it.

**nzakas:** eslint-scope only cares if ecmaVersion is greater than 5, so we don't really need a formal version for any other reason

**nzakas:** https://github.com/eslint/eslint-scope/blob/82a7e6d9de8f4fca48e99779e9573dd46adbc18c/lib/scope-manager.js#L244

**mdjermanovic:** Since `eslint-scope` is aware of ecmaVersion, maybe it could support "latest" directly

**nzakas:** I don't like that approach because we can't know all possible values a custom parser might set for ecmaVersion

**mdjermanovic:** We don't know that in eslint/eslint either

**btmills:** can we define what values a custom parser is allowed to set to include 5, 6, ..., `latest`?

**nzakas:** This is very simple: if ecmaVersion is a number, then use it, otherwise default to 6.

**btmills:** seems like that logic belongs in `eslint-scope` rather than adding some custom code for `eslint-scope` into an only-somewhat-related part of `eslint`

**nzakas:** See, I'd expect eslint-scope to throw an error if it got a value that it didn't understand

**mdjermanovic:** Where would this logic be, in `eslint-scope` or in `eslint`?

**nzakas:** I'm suggesting it go in eslint

**btmills:** why do you prefer putting it in eslint?

**nzakas:** Because the relationship here is not between the end user and eslint-scope, it's between eslint and eslint-scope. We already do normalization of stuff coming in from config already, so we can decide how an unknown value should be passed to eslint-scope. As already mentioned, if eslint-scope received an unknown value, I'd expect it to throw an error.

**nzakas:** If we only ever want to support "latest", then yes, we can do that in eslint-scope, but that won't help us if some other custom parser decides to do something like ecmaVersion: "edge" later on.

**nzakas:** Whereas, ESLint can easily say in the case of custom parsers, we know that ecmaVersion might not be able to be passed directly to eslint-scope.

**btmills:** seeing this as a compatibility layer in eslint's config handling, I'd be okay putting it there

**mdjermanovic:** Good argument, I agree

**nzakas:** Okay, we've agreed to normalize ecmaVersion before passing to eslint-scope for custom parsers.
 * 👍 @btmills, @mdjermanovic

**btmills:** seems you've convinced us 🙂

**nzakas:** I'd like to think we convinced each other 🙂 I convinced you that it makes sense, and you convinced me that I'm not wrong.
 * 😆 @btmills

**nzakas:** Next: https://github.com/eslint/eslint/pull/13392

**nzakas:** This PR has been open for over a year. It adds a `cwd` property accessible to formatters.

**nzakas:** This is from an approved RFC

**btmills:** Since it's part of a merged RFC, we can move it to accepted, and just need someone to finish it up?

**nzakas:** That's what I wanted to double-check. That's what I'd like to do.

**mdjermanovic:** Looks like we lost that because it wasn't relabeled to accepted

**btmills:** 👍 I can pick it up if someone else doesn't get to it first
 * 👍 @mdjermanovic

**nzakas:** Great, we've agreed to mark as accepted and move forward with it.

**nzakas:** This one came in recently: https://github.com/eslint/eslint/issues/15240

**nzakas:** Per @mdjermanovic this actually is two issues in one

**nzakas:** Homoglyphs and bidirectional characters

**mdjermanovic:** Yes, it looks like that those two problems require different solutions

**nzakas:** A question to start: don't our existing rules already protect against accidentally referencing homoglyphs? Things like no-undef seems like it would provide a measure of protection.

**btmills:** as I understand it, the problem occurs if someone is able to insert a second visually-identical function and call that one instead

**btmills:** in which case no-undef would not protect the developer

**nzakas:** In which case, no-unused-vars?

**btmills:** if the original function was only referenced once, sure, but not if the attacker only changes 1 of n calls

**nzakas:** Ah gotcha

**nzakas:** A followup question, which is high-level: do we feel that rules like this belong in the core or, ideally, in a security plugin?

**btmills:** in an ideal world, a security plugin

**mdjermanovic:** Ideally, in a security plugin

**nzakas:** Okay, that's my feeling as well.

**nzakas:** Along the lines, I've reached out to eslint-plugin-security to see if I can take ownership. I'm assuming we don't want to take that on as a team, but if I can at least get it moving again, there would be a good landing spot for rules like this going forward.

**btmills:** that sounds like a good start. would love for a security-focused team to take that on because I certainly don't feel confident in my own ability to keep on top of that

**btmills:** (security-focused team either inside a tech company large enough to have one or a security vendor as an OSS contribution)

**nzakas:** Yeah, me neither. I'm picturing myself more as a curator/caretaker than anything else. Feeds the animals, make sure they don't die.

**nzakas:** Okay, so given that none of us really want this in the core, I'd say we table it for now and see if we can devise what a solution might look like on the issue, and I'll see how far I get with eslint-plugin-security.
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, we've made it so!

**nzakas:** Those were my top concerns. Any other issues/PRs people would like to bring up now?

**btmills:** Since the underlying issue (https://github.com/eslint/eslint/issues/14800) came up in a previous meeting, the RFC to fix it (https://github.com/eslint/rfcs/pull/31) is updated and ready for review. Don't need to discuss here, just FYI
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** I'm planning to start with work on class static blocks. We used to introduce new syntax in one (big) PR. Would we like to proceed that way, or with smaller PRs

**nzakas:** I think one PR for new syntax and anything that it breaks, then another for any nice-to-add features related to it.

**btmills:** if you're confident that the early stages are sufficiently well understood and won't need significant changes when you get to implementing later steps, I'd say go for it in as small PRs as you think would be efficient

**mdjermanovic:** I'd personally prefer smaller PRs. It's easier to review, and it's going faster

**nzakas:** No objections here. The smaller the better. Where we got into trouble in the past was when adding new syntax we tried to also update every rule in the same PR. That doesn't seem like an efficient way to do things.

**btmills:** agreed

**mdjermanovic:** Yes, that was moving very slow

**nzakas:** Okay, go forth with small PRs 🙂

**nzakas:** A couple of updates on my end

**mdjermanovic:** 👍

**nzakas:** 1. Sara has started working on the new site. I have a call with her on Tuesday to go over things.

**nzakas:** I've also setup a couple of repos for her to work in: one for the marketing site and one for the docs site. These are intended to be temporary before we move the files into their final resting places.

**nzakas:** But I will setup DNS once we have something building so we can at least see things in real life before deploying for real

**nzakas:** (pauses for questions)

**btmills:** that all sounds good

**nzakas:** 2. Flat config - basically, I have `Linter` updated and working. I'm just going through and porting all existing tests to work with flat config at this point. This has been a good exercise because doing so has uncovered two bugs thusfar. It's just long and boring, but I'll get through it. 🙂
 * 🎉 @mdjermanovic
 * 👏 @btmills

**nzakas:** I'm planning on posting an issue to gather feedback on how languageOptions are normalized for custom parsers, because I'm not sure what I have now actually makes sense, but otherwise...using flat config feels sooooooooo much nicer than eslintrc
 * 👍 @mdjermanovic

**btmills:** really looking forward to having it live 🙂

**nzakas:** Me too!

**nzakas:** Okay, contributor pool time!

**btmills:** Gautam-Arora24 for implementing `prefer-object-has-own`
 * 👍 @mdjermanovic

**nzakas:** We have our usual Discord helpers: JackNapis and kepeniukas
 * 👍 @btmills, @mdjermanovic

**btmills:** TimvdLippe for finishing up `no-unused-private-class-members`
 * 👍 @mdjermanovic

**mdjermanovic:** I'd like to nominate Yash-Singh1 for https://github.com/eslint/eslint/pull/15077. The issue isn't really accepted yet, but we asked for a proof of concept and there has been a lot of work on it.
 * 👍 @nzakas, @btmills

**nzakas:** TimvdLippe isn't able to accept due to his country's rules 😦

**nzakas:** (Yash is in middle school?!?!)

**mdjermanovic:** Maybe, I don't know 🙂

**btmills:** wow, way to go Yash!

**nzakas:** thomasgilmore95 for his work on the blog
 * 👍 @btmills, @mdjermanovic

**nzakas:** If that's all, how do we want to split up the money? I'm thinking $100/each with the exception of $200 for Gautum
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I'll let them know

**nzakas:** Release tomorrow?

**mdjermanovic:** I can do the release

**btmills:** I'd be able to do it later on Saturday

**btmills:** thanks @mdjermanovic

**mdjermanovic:** We currently have only docs and chores merged. I'm not sure if other PRs are ready to merge, so if anyone has time to review 2 of mine, it would be nice

**nzakas:** I'll do so later today

**mdjermanovic:** https://github.com/eslint/eslint/pull/15238 and https://github.com/eslint/eslint/pull/15134
 * 👍 @nzakas, @btmills

**mdjermanovic:** thanks @nzakas!

**nzakas:** All right, it looks like that's it. Thanks everyone!

**mdjermanovic:** Thanks!

**btmills:** 👋 take care!
