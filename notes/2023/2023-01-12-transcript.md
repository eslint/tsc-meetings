# 01/12/2023 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Hi all

**nzakas:** @btmills can you take notes?

**btmills:** yep

**nzakas:** Thank you, sir

**nzakas:** So it looks like no issues or PRs flagged, but I did add a couple agenda items.

**nzakas:** First item:

**nzakas:** > Now that people can report security vulnerabilities through GitHub, can we shut down our Hacker One account?

**btmills:** yes please

**mdjermanovic:** Sounds good to me.

**nzakas:** 🎉 HackerOne has just been mostly a nightmare of nothing reports, so I'm happy to get rid of it. @btmills I think you are also an admin, can you take the action of shutting down the account?

**btmills:** will do

**nzakas:** Thanks!

**nzakas:** Next item:

**nzakas:** > Should we retire the mailing list? It seems like we have much better options now (Discussions, Discord, etc.).

**nzakas:** This is the eslint@googlegroups.com list

**nzakas:** It gets very little traffic and I think I'm the only one who answers questions there

**mdjermanovic:** Agree with shutting down

**btmills:** I don't object. If someone really needs to get in contact with us and can't use GitHub or Discord, we still have the contact email address

**nzakas:** Right, and Twitter even.

**nzakas:** Okay, we have resolved to shut down the mailing list. I'll first get it removed from the websites and then shut down the group itself.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Are there any issues or PRs that are stuck that we could address in this meeting?

**nzakas:** Here's one: https://github.com/eslint/eslint/pull/16271

**nzakas:** At this point I just don't care either way, so if either of you feel strongly, let's move this along. 🙂

**mdjermanovic:** I see how the change would be useful, but the current behavior also seems useful for other reasons, so it might be best to leave it as is.

**btmills:** I agree it's annoying when everything is highlighted, but only the function name has the downside that the squiggly might be offscreen from the actual problem, so I don't feel it's clearly better

**nzakas:** Okay, so it sounds like we're in agreement to keep the current behavior.
 * 👍 @btmills, @mdjermanovic

**nzakas:** This one has also been open for a while: https://github.com/eslint/eslint-plugin-markdown/issues/208

**btmills:** Rereading this, the list of options in https://github.com/eslint/eslint-plugin-markdown/issues/208#issuecomment-1195147175 still seems accurate

**nzakas:** Do you want to respond offline or is there a decision to be made now?

**btmills:** Unless we have appetite to add processor options to core, I think the best route is forking, and Josh-Cena indicated some willingness to do that in https://github.com/eslint/eslint-plugin-markdown/issues/208#issuecomment-1195173163. So: how do you all feel about processor options?

**btmills:** I'm not thrilled about that prospect, so unless you all think it's a good idea, my inclination would be to respond offline saying forking is the way to go

**mdjermanovic:** We had an accepted RFC for processor options?

**nzakas:** https://github.com/eslint/rfcs/blob/main/designs/2019-processor-shared-settings/README.md

**btmills:** oh! okay, I suppose that changes things

**nzakas:** I don't feel particularly strongly either way, but processor options seems like a logical follow-on to parser options and language options.

**btmills:** There was a partial PR in https://github.com/eslint/eslint/pull/12068. So instead I can respond with saying if someone's willing to do the work to update the design for flat config and implement processor options in core, we can go that route
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, so we've agreed to add processor options to flat config. @btmills can you create an issue so we can track that?

**btmills:** will do

**nzakas:** Thanks!

**btmills:** to clarify here, since we already have an RFC for processor options in `.eslintrc`, we do not need a new one for flat config, correct?

**nzakas:** Correct.

**nzakas:** And we can move that issue to Ready to Implement in the Triage board too
 * 👍 @btmills, @mdjermanovic

**nzakas:** One more issue I found: https://github.com/eslint/eslint/issues/16554

**nzakas:** The core of this issue is that `/* eslint-disable some-nonexistent-rule */` is throwing an error.

**nzakas:** My question is if we should consider that a bug or not

**mdjermanovic:** Oh, I missed responding. I think we had a similar issue before

**btmills:** we talked about this previously in https://github.com/eslint/eslint/issues/14851

**nzakas:** I like your proposal in https://github.com/eslint/eslint/issues/14851#issuecomment-947517747 with @mdjermanovic's caveat

**mdjermanovic:** I don't think this is a bug, I'd expect ESLint to report invalid directives

**nzakas:** (I don't think `/*eslint foo: 0*/` should be flagged.)

**mdjermanovic:** A problem with not reporting unexisting rules is that in "normal" usage user might have a typo in the directive and be confused why the directive has no effect

**nzakas:** Fair point.

**mdjermanovic:** And it's not that uncommon to misspell rule names

**btmills:** For  `/* eslint foo: 0 */`, we should treat it as either an unknown rule or an unused directive so that it's automatically detectable, and of those two options, I feel it's closer to a disable than an unknown

**nzakas:** Well, the issue at hand doesn't deal with `/*eslint foo: 0*/`, so let's focus on the main question: is the current behavior the one we want for `/* eslint-disable-* */`? @mdjermanovic is clearly in the "yes" camp; I'm leaning "yes" but don't feel strongly.

**mdjermanovic:** ESLint generally doesn't support well inline config + linting with different configs. I think the current behavior is correct, but we could add a better support for these use cases

**mdjermanovic:** Like this: https://github.com/eslint/eslint/issues/13472

**btmills:** To be extra explicit: Currently, when someone disables an unknown rule, we report an error. I agree that is better than _not reporting_ at all. I think a _better_ behavior would be to report it as an unused directive. (Better partially because it unblocks the single-rule focus use case.)

**nzakas:** Okay, we are running tight on time here, so it seems like we agree that the current behavior is NOT a bug and is okay for the time being?

**btmills:** yes

**mdjermanovic:** I also think this isn't a bug.

**nzakas:** So we are all in agreement there. I'd say next step is to close this issue and either or both of you can open a new issue with proposals for how the behavior could be different.

**nzakas:** Agree?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, it is so!

**nzakas:** So let's talk about the release.

**btmills:** I'm available

**btmills:** (but weekend, not Friday, as usual)

**nzakas:** @mdjermanovic are the docs changes ready to go from your perspective?

**mdjermanovic:** Thanks @btmills

**mdjermanovic:** Yes, I think the two PRs are ready

**mdjermanovic:** (you still have a change request on the eslint.org one)

**nzakas:** For @btmills this PR: https://github.com/eslint/eslint/pull/16665

**nzakas:** And this PR: https://github.com/eslint/eslint.org/pull/388

**nzakas:** Go together.

**btmills:** One before, one after, got it
 * 👍 @mdjermanovic

**mdjermanovic:** One right before the release, the other right after the release

**btmills:** thanks for the heads up

**mdjermanovic:** Oh, and it would be good not to merge anything that could cause merge conflicts with https://github.com/eslint/eslint/pull/16665

**btmills:** basically if it touches docs, check that PR first
 * 👍 @nzakas, @mdjermanovic

**nzakas:** All right, thanks everyone! I need to get going. Take care

**btmills:** bye! 👋

**mdjermanovic:** Thanks! 👋
