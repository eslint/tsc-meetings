# 09/04/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Going to pull up the notes from last time

**nzakas:** Nothing to follow up with from last time

**nzakas:** Let's start with statuses. I've not had a lot of time lately, so mostly been focused on issue/PR triage as well as improving the parsing capabilities of `@eslint/css-tree`.

**mdjermanovic:** I was mostly reviewing PRs and triaging issues.

**fasttime:** I worked on removing legacy CLI features in v10 and I looked into improving the heuristic for `--concurrency=auto`.

**nzakas:** Let's discuss availability for the next couple of weeks. I'm looking at 0.5-1 hours each weekday at the moment.

**mdjermanovic:** I'll be able to work around 2 hours each day

**fasttime:** About 12 hours per week the next two weeks.

**nzakas:** So let's do the math, about 2.5 hours per day? 🙂

**fasttime:** More like 1.5 Mo-Fr and the rest on the weekend.
 * 👍 @nzakas

**nzakas:** RFC Duty:

This week - @fasttime 
September 8 - @nzakas 
September 15 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues or PRs flagged for today. Are there any anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from me yet.

**nzakas:** Okay, this seems like a good time to discuss plans for v10. We've got a few PRs open already. Do we want to decide when we'll branch for v10?
 * 👍 @fasttime

**mdjermanovic:** Last time, we didn't have a separate branch for v10

**mdjermanovic:** I mean, v9 🙂

**nzakas:** Sorry, to be more specific, I meant do we want to create the v9.x branch?

**mdjermanovic:** Ah, we'd stop development of v9? Meaning only critical bug fixes

**nzakas:** Well, the original question was if we want to decide on a timeline for doing that at this point or wait

**mdjermanovic:** Last time, we were working on v8 as usual, and preparing PRs for v9. Once the PRs were ready for the first prerelease, we merged them into `main` branch

**mdjermanovic:** We could prioritize work on v10 features and start with prereleases when they are ready

**nzakas:** I think there's a step missing in that description. We were still doing v8.x releases along with the v9.0.0 prereleases. I think we created the v8.x branch off of the last release and then merged the PRs for the prerelease?

**mdjermanovic:** Yes, but at that point only critical bug fixes were being ported to v8.x

**nzakas:** Right. So to reiterate my original question, do we want to decide on a timeline for doing that now, or do we want to wait? 🙂

**mdjermanovic:** We could work on planned v10 features and check the status at the next meeting to see where are we at

**nzakas:** So we'll prioritize v10 issues over the next two weeks? Everyone agree?

**mdjermanovic:** I'm in favor

**fasttime:** Makes sense to me. I think that some v10 features depend on other v10 features, so we'd have to create the PRs in order.

**nzakas:** I think that's ok.

**fasttime:** Okay 👍

**nzakas:** We've agreed to prioritize v10 issues going forward.

**nzakas:** I think this one probably needs to be determined sooner rather than later:
https://github.com/eslint/eslint/issues/19969
 * 👍 @mdjermanovic, @fasttime

**nzakas:** So let's prioritize that discussion first and go from there?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, anything else before we talk contributor pool?

**mdjermanovic:** Nothing in particular from me

**fasttime:** Nothing in particular.

**nzakas:** Okay, here's the report from August.
https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-09-01-contributor-pool.md

**nzakas:** Last time I put this through ChatGPT to give us a starting point and it worked fairly well, So let me do that now.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Here's what it came up with:

| Contributor    | PRs | Payout |
|----------------|-----|--------|
| Pixel998       | 10  | $1,150 |
| thecalamiity   | 4   | $600   |
| TKDev7         | 4   | $525   |
| SwetaTanwar    | 2   | $350   |
| kirkwaiblinger | 2   | $300   |
| Grapedge       | 1   | $250   |
| xbinaryx       | 2   | $275   |
| Nohgh          | 1   | $200   |
| juhwano        | 1   | $200   |
| jaymarvelz     | 1   | $175   |
| sethamus       | 1   | $125   |

**mdjermanovic:** Looks good to me by taking a quick look (I was mostly away during August, so not familiar with the most of these PRs)

**nzakas:** It looks pretty good to me.

**fasttime:** I guess it's okay. Shall we accept this as is?
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** I'll let them know

**nzakas:** Shall we talk about tomorrow's release?

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @fasttime

**fasttime:** We wanted to reward kkapp as well.
 * 👍 @mdjermanovic

**fasttime:** They helped on Discord.

**nzakas:** @fasttime ooh yes, thanks for reminding us.

**nzakas:** I was thinking $200?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll add them to the list to be notified.

**nzakas:** Back to the release with @mdjermanovic

**mdjermanovic:** I think it would be just `eslint` and `@eslint/js` for tomorrow's ESLint release

**nzakas:** Looks like it

**fasttime:** There's a new breaking change in `eslint-config-eslint`, but that can be released anytime I guess.
 * 👍 @mdjermanovic

**mdjermanovic:** We could wait for some time to see if there would be some more changes in `eslint-config-eslint`

**nzakas:** What's the change?

**mdjermanovic:** And yes, it's not tied to eslint releases

**mdjermanovic:** New rule `preserve-caught-error` is enabled
 * 👍 @fasttime

**nzakas:** Ah. I don't think we should hold off on releasing `eslint-config-eslint`. Every change to a shareable config is technically a breaking change, so I don't think we should worry about minimizing breaking changes for something that is only used by us.

**mdjermanovic:** Then, I can release `eslint-config-eslint` tomorrow as well
 * 👍 @nzakas, @fasttime

**mdjermanovic:** It would just need to be after `eslint` is released, because it needs the new rule

**nzakas:** Makes sense

**mdjermanovic:** And I'll update peer dep to `^9.35.0`
 * 👍 @nzakas, @fasttime

**mdjermanovic:** https://github.com/eslint/eslint/blob/main/packages/eslint-config-eslint/package.json#L78

**nzakas:** Okay, I think that's it for today. Thanks everyone (and thanks @sam3k_ for the notes).

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks! Bye 👋
