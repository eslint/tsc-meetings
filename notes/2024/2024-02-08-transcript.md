# 02/08/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Apologies for the delay, my prior meeting ran over.

**mdjermanovic:** No problem

**nzakas:** Looks like we don't have anything flagged for the meeting specifically, so let's jump into v9 planning
 * 👍 @mdjermanovic

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** It looks like we have two planned outstanding issues for beta right now:

**nzakas:** First one is https://github.com/eslint/eslint/issues/17579

**mdjermanovic:** If we are going to release a beta tomorrow, seems like that one will be left for some future major

**nzakas:** I think that's part of the decision here: do we want to wait another two weeks for this one to maybe be complete? (Note: another option is not to block beta.0 for this but merge it into a later beta if it gets completed)

**mdjermanovic:** That one is very complex, I wouldn't expect that we come up with a solution in two weeks.

**mdjermanovic:** However, in regard to beta, I'm not sure if another feature is a blocker for switching from alpha to beta: https://github.com/eslint/eslint/issues/18075

**nzakas:** Let's wrap up on #17579 before switching to that issue?

**mdjermanovic:** Yup, just wanted to note this since we were talking about beta

**nzakas:** So I think we are both in agreement that #17579 should not block beta.0?
 * 👍 @mdjermanovic

**mdjermanovic:** As for #17579, I don't think it should block beta

**nzakas:** Okay, we've decided that #17579 should not block beta.0.

**nzakas:** Do we want to add another "target" value in the v9 board for beta.1 to help track the stragglers?
 * 👍 @mdjermanovic

**nzakas:** Okay, I'll add that in and assign #17579 to it

**mdjermanovic:** It might be good to also add another column for infrastructure things that need to be done before v9.0.0

**mdjermanovic:** Like https://github.com/eslint/eslint/issues/17943

**nzakas:** Do we need another column or can we just create a target of "final"?

**mdjermanovic:** final sounds good to me

**nzakas:** Oh that one I wanted done ASAP 🙂

**nzakas:** Once we have the final release, it won't matter because "NEXT" will be gone.

**mdjermanovic:** Note: the issue I linked refers to NEXT, but I think it's more about a long-term solution we'll need to be ready when we release v9.0.0

**mdjermanovic:** Or maybe we could open another issue

**nzakas:** Yeah, I think you're talking about something else. For #17943, I just don't want to show "NEXT" in the dropdown, I want the actual version number.
 * 👍 @mdjermanovic

**mdjermanovic:** My understanding was that we'll figure out a solution that would cover both, but seems better to open another issue

**nzakas:** Can you take the action to open a separate issue? We can always use the same PR to close both if it turns out to be a common solution.
 * 👍 @mdjermanovic

**mdjermanovic:** Yes

**nzakas:** Okay, back to the board, where I've now added the issues we've mentioned.

**nzakas:** The other one we have slated for beta.0 is https://github.com/eslint/eslint/issues/18016

**mdjermanovic:** I think that one is nearly done, though there are merge conflicts.

**nzakas:** It looks like the merge conflict is just in the migration guide, so shouldn't be a big deal.

**mdjermanovic:** Yeah, I'd expect it to be ready for tomorrow

**mdjermanovic:** Though there were some recent changes I'd like to check

**mdjermanovic:** If it turns out tomorrow that it isn't ready, we could move it to beta.1 as well?

**nzakas:** Yeah, I don't think it's a big enough deal to block beta.0 given all the other changes that landed.

**mdjermanovic:** Okay, so it looks like we'll have beta.0 tomorrow
 * 🎉 @.rec0il, @nzakas

**nzakas:** Circling back to this: https://github.com/eslint/eslint/issues/18075

**nzakas:** It looks like we have an approved design from dbaeumer

**mdjermanovic:** Yeah, I'm not sure if there is a use case for the scenario where `loadESLint` determines on its own which version should be returned, because the APIs are different and the consumer should already know which version will be used, but since the design has been approved and it doesn't hurt to have this extra feature, it's fine with me

**nzakas:** I think there likely is a use case - the same one `shouldUseFlatConfig()` was created for. We're just wrapping that check under the hood for convenience.

**mdjermanovic:** Yeah, but the consumer should know which version is returned, because the constructor options are different

**nzakas:** Fair point, though I do wonder how many people use enough options for it to matter.

**mdjermanovic:** The only use case where it wouldn't matter is when the consumer is using only a subset of options and features that are exactly the same in both classes

**nzakas:** So we want to change it to be a strict boolean then?

**mdjermanovic:** Though, as you said, most things are the same in both classes

**mdjermanovic:** Well, I think yes, but not sure now since the design is approved 🙂

**nzakas:** We could also add a `configType` static property to each class indicating the type of config being used, that would also solve the compat question.

**mdjermanovic:** That also makes sense

**nzakas:** Preference?

**mdjermanovic:** Well, a way to automatically calculate which version should be used + additional info on which one was returned (e.g., a static property) sounds good to me

**mdjermanovic:** So, the approved API + static properties
 * 👍 @nzakas

**nzakas:** This would also need to be backported to v8.x.

**mdjermanovic:** The API also has `cwd` option. I'm guessing that means that `useFlatConfig` will also have this option?

**nzakas:** Sorry, I'm not following

**mdjermanovic:** The approved interface for `loadESLint()` has option `cwd`. That `cwd` would be passed to `shouldUseFlatConfig()`?

**mdjermanovic:** To start searching for `eslint.config.js` from that `cwd` (default `process.cwd()`)?

**nzakas:** Yes, that's correct.
 * 👍 @mdjermanovic

**mdjermanovic:** Sounds good to me

**nzakas:** Okay, I'll take the action item to put together a PR. I know one is already open, but given these changes I feel like it's better to start fresh.
 * 👍 @mdjermanovic

**nzakas:** I'll try to get this done for tomorrow, but I think it's fine if it slips to beta.1
 * 👍 @mdjermanovic

**mdjermanovic:** About the backport, shall we plan it for the release date after tomorrow's one (i.e., along with beta.1)

**mdjermanovic:** To be precise, for February 23rd

**nzakas:** Assuming we have everything merged into the `v8.x` branch. 👍
 * 👍 @mdjermanovic

**mdjermanovic:** Sounds good to me

**nzakas:** Last issue we'll need to address before the final release (that we know of):
https://github.com/eslint/eslint/issues/18087

**nzakas:** Still early there, but I don't think we can do a final v9 until we've solved this problem.

**mdjermanovic:** We'll try to figure out the solution, though this looks like something ESLint was not previously intended to support

**nzakas:** It definitely was not, but `eslint-plugin-import` is one of the most depended on packages on npm, so I think we need to figure something out.
 * 👍 @mdjermanovic

**nzakas:** #22 according to https://socket.dev/blog/2023-npm-retrospective

**nzakas:** I definitely don't want to rush the solution, but feel like we need to get something to keep this plugin working with flat config.

**mdjermanovic:** I don't have a particular idea at the moment, but will follow up on the issue

**nzakas:** I'm still trying to wrap my mind around what it's doing 🙂

**mdjermanovic:** My understanding is that there's a rule that needs to know the list of all files that are (or could be)  linted in the project

**nzakas:** Let's follow up on the issue.
 * 👍 @mdjermanovic

**mdjermanovic:** So that it could check if the exports the currently linted file is exporting are used anywhere

**nzakas:** All right, any other topics for v9?

**mdjermanovic:** I prepared a PR in eslint-visitor-keys https://github.com/eslint/eslint-visitor-keys/pull/63

**nzakas:** I'll take a look after this

**mdjermanovic:** Thanks

**nzakas:** Okay, quick contributor pool: https://socket.dev/blog/2023-npm-retrospective

**nzakas:** Oops, copied the wrong link

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-01-01..2024-01-31+

**nzakas:** Looks like a lot of work on both. $200 each?
 * 👍 @mdjermanovic

**nzakas:** I'll let them know.

**nzakas:** Let's talk the release.

**mdjermanovic:** I can tomorrow

**mdjermanovic:** That will be eslint 9.0.0-beta.0
 * 🎉 @nzakas

**mdjermanovic:** If the eslint-visitor-keys PR gets merged, I'd also release `eslint-visitor-keys`, `espree` (to update `eslint-visitor-keys` dependency) and `@eslint/eslintrc` (to update `espree` dependency)

**nzakas:** Sounds good

**nzakas:** I'd also like to get this in: https://github.com/eslint/eslint/pull/18090
 * 👍 @mdjermanovic

**nzakas:** coupled with this: https://github.com/eslint/eslint.org/pull/522
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** Okay, anything else before we call it?

**mdjermanovic:** Nothing in particular for today

**nzakas:** All right, then that's it for today. Thanks! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks 👋
