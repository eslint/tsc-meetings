# 05/02/2024 ESLint TSC Meeting Transcript

**fasttime:** Hi!

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Sorry for the delay, computer was misbehaving

**fasttime:** No problem

**nzakas:** All right, looks like we don't have anything labeled for today.

**nzakas:** Any topics anyone would like to discuss?

**fasttime:** I've started reviewing old open issues (some abandoned) and RFCs but I don't think I understand enough to decide what to do with them.

**fasttime:** Any suggestions what to do?

**fasttime:** Or should I just leave them as they are?

**nzakas:** For RFCs, the goal is to determine if the proposal seems directionally correct and appropriate to include in ESLint. So if you think the proposal makes sense and is technically feasible, you can approve it.

**nzakas:** Once we've all approved, then we merge it and it's ready to go.

**nzakas:** Is there any RFC in particular you're thinking of?

**fasttime:** https://github.com/eslint/rfcs/pull/114

**fasttime:** I'm not sure if the author is still working on it

**nzakas:** In that case, the best thing to do is to add a comment and at-mention the author and ask if they're still working on it.

**fasttime:** Same for https://github.com/eslint/rfcs/pull/116, or for this PR: https://github.com/eslint/eslint/pull/17876

**nzakas:** For that RFC, I'd do the same.

**fasttime:** Yeah, I can try to notify the author and see if they reply

**nzakas:** Generally, RFCs require a lot of prodding to get over the finish line.
 * 👍 @fasttime

**nzakas:** The PR is a different story. I just emailed Eli to see what's going on and he's still working on it. They want to sponsor ESLint and want to land that PR as part of the announcement.

**fasttime:** So, is it appropriate to notify the author and just leave the issue open if they don't reply? We have more examples on our board.

**fasttime:** I'm just afraid that those issues get silently forgotten.

**nzakas:** Yes. On any given week I leave multiple "are you still working on this?" comments on issues and PRs.

**nzakas:** And those are also good things to add the "tsc Label" to with a summary and question to get resolved in the next meeting.

**nzakas:** (if there's been no progress in a while)

**fasttime:** Okay, thanks. This answers my question for the issues.

**fasttime:** and RFCs can take longer anyway.
 * 👍 @nzakas

**nzakas:** Okay, other topics?

**fasttime:** Nothing else from my side

**mdjermanovic:** Nothing in particular from my side. Seems the biggest problem with v9 at the moment is plugins compatibility. Good idea to provide `@eslint/compat`.
 * 👍 @nzakas

**mdjermanovic:** And monorepos, for which I don't have a good idea yet.

**nzakas:** All right, then let's chat about the `rewrite` repo for a moment.

**nzakas:** The intent with that is to start pulling in pieces that will be used both in the current version of ESLint and in a rewritten core. That's why I've started with `object-schema`, `config-array`, and now `compat`.

**nzakas:** And one of my goals for that repo is that everything is typed-checked by tsc even though it's written in JavaScript.

**nzakas:** (Also means the packages export type definitions directly.)

**nzakas:** I already found some bugs in `config-array` during this effort, so I think it'll help a lot
 * 👍 @mdjermanovic, @fasttime

**nzakas:** As I'm going through and continuing the refactors for the languages plugins, I'm noticing there are some fairly isolated pieces of functionality that we should be able to reuse in a rewritten core. I'm noting them as I go and will add issues when they're ready to discuss.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And, for fun, we can publish all of these to JSR in additional to npm. 🙂 Not sure that matters, but they have a "no squatting" rule for scope names so I don't want to run afoul of that.
 * 👍 @mdjermanovic

**nzakas:** Because `rewrite` is monorepo, it will also hopefully help us identify problems and think through solutions for other monorepos. So far it's been fine, but I wonder at what number of packages we'll start to see problems.
 * 👍 @mdjermanovic

**nzakas:** But the overall idea is to be able to work on the rewrite and the current version of ESLint in parallel as we try things out.

**fasttime:** DefinitelyTyped has a few more 😀

**nzakas:** Just a few

**fasttime:** Yeah, and they have a lot of internal tooling that doesn't make it easier to work with ESLint

**nzakas:** So that's the `rewrite` repo in a nutshell. Once we get far enough along, it'll be time to look at what a rewritten core should be, so there will be an RFC around that.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** The other thing I'd like to discuss is if we have a direction in mind for the `@eslint/js` package. As mentioned in the Google doc, there are two ways to go with this:

1. Create a monorepo and move things like Espree, eslint-scope, etc. into it as separate packages.
2. Create a regular repo where `@eslint/js` is the only package and it exports the parser via `@eslint/js/parser`, `eslint-visitor-keys` as `@eslint/js/visitor-keys`, etc.

**mdjermanovic:** 2. probably makes more sense given the direction of language plugins, though some of those packages are used for non-eslint purposes as well

**mdjermanovic:** For example, I believe `webpack` is using `eslint-scope`

**nzakas:** Yes. This wouldn't preclude folks from using just the individual bits they want. They'd all still be individually exported from separate entrypoints.

**mdjermanovic:** That's true, though there will be a bigger package to download

**mdjermanovic:** Especially when we include rules in it (I recall that was the plan?)

**nzakas:** Yup

**fasttime:** Will there be a shorthand setting in the config to configure a language plugin? For example, a processor, a parser and a set of rules all in one setting? If so, 2. would probably make more sense.

**nzakas:** I'd say that's what something like what `eslint.configs.recommended` would do.

**nzakas:** One way or another `@eslint/js` needs to have access to all these things. In the monorepo case, it will need dependencies on the other packages; in the standard case, they'd just be included.
 * 👍 @fasttime

**nzakas:** I'm slightly in favor of option 2 because I think it's a nicer experience to have everything in one package.

**mdjermanovic:** For us, it's definitely easier to have one package. No issues with synchronizing things.

**nzakas:** But both options make sense.

**nzakas:** And option 2 is tree-shakeable for anyone who does want to use the included utilities

**nzakas:** We could post a poll in a Discussion and see what people think?
 * 👍 @mdjermanovic

**mdjermanovic:** Sounds good to me.

**nzakas:** All right, I'll take the action item to set up that Discussion
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics before we move on to the Contributor Pool?

**mdjermanovic:** Nothing in particular from my side.

**fasttime:** Nothing from me

**nzakas:** Okay, here's the list: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-04-01..2024-04-30

**nzakas:** Looks like DMartens was busy. $750?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** For webpro, @mdjermanovic what do you think?

**mdjermanovic:** $100?
 * 👍 @nzakas, @fasttime

**nzakas:** kirkwaiblinger : $100?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** eMerzh: $100?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Pearce-Ropion, this one took six months, so $250?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, I'll let them know.

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 👍 @fasttime

**nzakas:** Thanks!

**mdjermanovic:** That would be, I think only `eslint` and `@eslint/js` for tomorrow.

**mdjermanovic:** And `eslint-plugin-markdown` v5, which I think I could release after the meeting
 * 👍 @fasttime

**nzakas:** https://github.com/pulls?q=org%3Aeslint+is%3Apr+label%3A%22autorelease%3A+pending%22

**nzakas:** Ah, reminds me: you had the action item to look at getting release-please configured so we don't have so many "false positive" releases.

**mdjermanovic:** Yeah, I still have a task to propose a better solution. I'll open an issue next week
 * 👍 @nzakas

**nzakas:** Okay, I think that's it for today. Thanks everyone!

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Take care
