# 10/15/2026 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Was looking for notes but looks like we don't have any...

**fasttime:** Yes, the CI job failed.

**fasttime:** https://github.com/eslint/tsc-meetings/actions/runs/36933871509

**nzakas:** Weird, then why did it show green in the list?

**nzakas:** Going to re-run now

**nzakas:** I'll let that run and then we can review followups when it's complete

**nzakas:** In the meantime, let's start with statuses.

I was mostly working the TypeScript parser RFC and the `@eslint/shell` plugin.

**mdjermanovic:** I was reviewing PRs and RFCs and triaging issues

**fasttime:** I've been also mostly busy triaging and reviewing issues/PRs

**nzakas:** Okay let's talk availability for the next couple of weeks. I'm still a bit up in the air, so anywhere between 15 hours each week.

**mdjermanovic:** I expect to be available 1-1.5h daily

**fasttime:** I should be available 7 hours per week the next couple of weeks.

**fasttime:** The CI job failed again: https://github.com/eslint/tsc-meetings/actions/runs/36933871509/job/116645470737#step:17:18

**fasttime:** ERROR: Valid lowercase SHA256 pin is required for linux-amd64

**nzakas:** Jeez. Let me ping my contact at GitHub
 * 👍 @fasttime

**fasttime:** Perhaps we need to recompile the workflow with the latest compiler version. But that's just a guess.

**nzakas:** RFC Duty:
Oct 12 - @mdjermanovic
Oct 19 - @Nicholas C. Zakas 
Oct 26 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I can give it a try afterwards...would be nice if the error said that. 🙂

**nzakas:** Okay, I had some followups from last time.

**nzakas:** I flipped `eslint/shell` public and updated it

**nzakas:** I forgot about updating the PR template regarding AI contributions, I'll make a note to do that

**nzakas:** I think that was it?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we have one issue flagged for today:
https://github.com/eslint/eslint/issues/21242

**nzakas:** > **TSC Summary**: ESLint’s Tidelift link redirects to a generic SonarSource page. The suggested alternative targets maintainers, while a generic support link was also proposed. Tidelift’s commercial support availability remains unclear, and no resolution has been agreed upon.
> **TSC Question**: Should we replace the Tidelift links, and with which URL, or remove the references?

**mdjermanovic:** Those links have been broken for a long time

**nzakas:** They have been. As far as I could get with Tidelift, they are basically not in operation anymore, or at the very least, not actually selling "maintenance and support."

**nzakas:** So I think at this point we can probably just remove the links altogether.

**mdjermanovic:** Hm, if that's not against Tidelift terms and conditions for us

**mdjermanovic:** That page the links end up on does mention Tidelift, just not specifically ESLint

**fasttime:** Makes sense to remove the links I think. We have those links in other repos as well.

**nzakas:** I honestly don't think anyone is monitoring links at this point.

**nzakas:** I'm kind of surprised we're still receiving payments at all

**mdjermanovic:** Probably, but I recall links were in T & C, and we are still receiving compensations

**nzakas:** This is what I received from support: 

> There is no longer a requirement (and hasn't been for years) to link to a specific page for maintainers with Tidelift.

**mdjermanovic:** Ah, well if that's the case then seems fine to remove them

**mdjermanovic:** Worst case, they'll probably notice us

**nzakas:** I don't think anyone is paying attention. 🙂

**mdjermanovic:** We have links in repos

**mdjermanovic:** I believe those originate from the funding config https://github.com/eslint/.github/blob/master/FUNDING.yml

**mdjermanovic:** Then here: https://eslint.org/version-support/
 * 👍 @fasttime

**mdjermanovic:** And in the eslint/eslint's README

**mdjermanovic:** And here: https://eslint.org/docs/latest/maintain/overview

**mdjermanovic:** Shall we remove all of those?

**nzakas:** Yes
 * 👍 @fasttime

**nzakas:** They're more confusing than anything else now

**mdjermanovic:** I can take that action item
 * 🙏 @nzakas

**fasttime:** Thanks!

**nzakas:** Okay, we've agreed to remove the Tidelift links.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other topics anyone would like to discuss?

**fasttime:** Nothing from my side.

**mdjermanovic:** Nothing in particular for today. There is one TSC waiting PR but it's not urgent (in sense that I don't think we'll take any immediate actions) https://github.com/eslint/eslint/pull/21350

**nzakas:** Can you summarize?

**mdjermanovic:** For the first time, we have a mismatch between our ecmaVersion and the spec year. Actually, two mismatches

**mdjermanovic:** Our `ecmaVersion: 2026` enables features that are going to be in the 2027 spec

**mdjermanovic:** So, I'm not sure how we should proceed with that

**nzakas:** For the record, which features?

**mdjermanovic:** Explicit Resource Management (syntax and globals) and Temporal (just global)

**nzakas:** So those are currently in 2026 but are technically in 2027?

**mdjermanovic:** For us, they are in 2026, but they're not in the finalized official 2026 spec. They are expected to be in the 2027 spec

**mdjermanovic:** In Estree, Explicit Resource Management syntax is also in its 2026 spec. Acorn supports it with `ecmaVersion: 2026`

**nzakas:** Interesting. This is part of why I'd like to get away from granular version-gating...these are the details that just don't matter all that much.

My vote is to leave them in 2026. It's more of a clerical error than a functional one, and I can't imagine anyone using 2026 and expecting to be warned about either the syntax or `Temporal`.

**fasttime:** I think moving those feats to 2027 would be a breaking change at this point, so I'd be in favor of leaving things as they are.

**mdjermanovic:** I agree

**mdjermanovic:** Then, there is a question about our processes of accepting new language features. Currently, we are accepting features when it's announced they have advanced to stage 4, but that doesn't guarantee they'll end up being included in the upcoming yearly spec

**mdjermanovic:** As was the case with these two

**nzakas:** 🤔

**mdjermanovic:** But it's not just just a question for us. Also for Estree, Acorn etc.

**nzakas:** I'd suggest we open an issue to have that conversation
 * 👍 @mdjermanovic

**fasttime:** Acorn has a policy of implementing new features at stage 4: https://github.com/acornjs/acorn/blob/master/acorn/README.md#interface

**nzakas:** And also don't think we have to necessarily match what ESTree and Acorn do.

**mdjermanovic:** I'll open an issue
 * 👍 @fasttime

**nzakas:** Thanks!

**nzakas:** As an update: I recompiled the workflow with the latest `gh aw` and it successfully created the PR even though it generated the same warnings.
 * 😁 @fasttime

**nzakas:** Okay, anything else before we discuss the release?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Still nothing else from my side either

**nzakas:** Okay, any volunteers for tomorrow's release?

**mdjermanovic:** I can do the release tomorow

**nzakas:** Thanks!

**fasttime:** Thanks!

**mdjermanovic:** That would be just `eslint` I believe
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, thanks everyone!

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks!
