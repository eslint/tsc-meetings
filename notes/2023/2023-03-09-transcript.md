# 03/09/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** So we are down to two. 😦

**mdjermanovic:** 😦

**nzakas:** We have @Sam3k taking notes for us today 🙏  👍  So we can get started
 * 👍 @mdjermanovic

**nzakas:** First item: https://github.com/eslint/rfcs/pull/99

**nzakas:** > **TSC Summary:** The language plugins RFC is now complete, which gives ESLint the ability to lint other file types besides JavaScript.
> 
> **TSC Question:** Shall we move to final commenting?

**nzakas:** I saw you left a few comments @mdjermanovic, but they seem small enough that we can work through during implementation?

**mdjermanovic:** If there are no open questions from the community, I agree to move to the final commenting

**mdjermanovic:** I'll leave a few more questions about design details. This is a big feature, so it isn't reasonable to expect a perfect design upfront, we'll figure out small details during the implementation

**nzakas:** Sounds good.

**nzakas:** We decided to move the RFC to the Final Commenting phase.
 * 👍 @Sam3k, @mdjermanovic

**nzakas:** Next item:

**nzakas:** > Agenda Item: We've now implemented release-please for `generator-eslint` and `@eslint/create-config`. Shall we roll out to other repos now as well?

**mdjermanovic:** We discussed that in the last meeting. The idea is to have a few successful releases of `@eslint/create-config` and then copy & paste to other repos

**nzakas:** Ah okay, then we'll save was resolved in the previous meeting. 👍 Apologies for missing that.

**nzakas:** Next item:

**nzakas:** > Agenda item: We don't currently have a documentation-specific license, so it defaults to all rights reserved. I'd like to propose we license the documentation as [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**mdjermanovic:** I thought that the license we have in the repo covers the docs too

**nzakas:** Someone emailed me about formally licensing the docs, so wanted to bring this up.

**nzakas:** MIT is a software license and doesn't apply to non-code

**mdjermanovic:** Ah, ok. I agree

**nzakas:** So technically the documentation is all rights reserved right now

**mdjermanovic:** Where should the license be visible, in the repo or on the site?

**nzakas:** Both, we should add it to the docs README and then also in the footer of the docs site.

**mdjermanovic:** Agreed.

**nzakas:** Okay, we've agreed to license the docs under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. We will place a notice both in the docs README and in the footer of the docs site. @Sam3k can you please create an issue for that?

**nzakas:** Those were the officially listed agenda items for today. Are there any other topics you'd like to discuss?

**mdjermanovic:** Nothing in particular today.

**nzakas:** Okay, it seems that you did not do the contributor pool last meeting, correct?

**mdjermanovic:** Hm, no, looks like we forgot. When was the last one?

**mdjermanovic:** I hope we didn't miss a month

**nzakas:** We missed February, that's okay, we can do it now.

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2023-02-01+merged%3A%3C2022-03-01

**Sam3k:** Those were the officially listed agenda

**nzakas:** Francesco is now a team member, so we can skip him.

**mdjermanovic:** Then, we have 3 contributors. $100 each?

**nzakas:** Looks like Sosuke had two PRs, do we want to increase that for him?
 * 👍 @mdjermanovic

**nzakas:** Maybe $200 for him and $100 each for the others?

**mdjermanovic:** Agreed.

**nzakas:** Okay, I will let them know.

**nzakas:** All right, last: let's discuss the release.

**mdjermanovic:** I can probably tomorrow, if not tomorrow then on Saturday

**nzakas:** That works, thanks!

**nzakas:** We will have `espree` and `eslint`?

**mdjermanovic:** We'll have `espree`, `@eslint/eslintrc` (to update espree dependency), `@eslint/js` to match `eslint`, and `eslint` of course
 * 👍 @nzakas

**nzakas:** Cool. Once we release `espree` I can finalize the changes to allow for serializing configs. And that may, in fact, be the last thing needed for flat config to move on to the next phase.
 * 👍 @mdjermanovic

**nzakas:** All right, one last call for any other topics to discuss?

**mdjermanovic:** nothing in particular from me

**nzakas:** All right, thanks! Take care. (And thanks @Sam3k for the note taking.)

**mdjermanovic:** Thanks 👋
