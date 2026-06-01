# 10/02/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi 👋

**mdjermanovic:** Hi!

**nzakas:** Just pulling up the notes from last time

**nzakas:** Okay, doesn't look like anything to follow up on.

**nzakas:** Let's start with statuses. I've spent the last couple days looking into the eslint.org bandwidth stuff. I wrote the "What's coming in v10" post and have been working on updating the types in `eslint` to use `@eslint/core`.

**mdjermanovic:** I finished work on changes in eslint-scope and eslint regarding handling of global variables, and was reviewing PRs

**fasttime:** I was mostly busy reviewing PRs and issues

**nzakas:** Okay, let's discuss availability the next couple weeks. I'm still at 0.5-1 hours per week day.

**mdjermanovic:** I expect to work around 2 hours each day

**fasttime:** I should be available about 9 hours per week the next two weeks.

**nzakas:** RFC Duty:
This week - @nzakas 
Oct 6 - @mdjermanovic 
Oct 13 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, no issues or PRs are flagged, so let's start by discussing the bandwidth issues we've had the last few days on eslint.org.

**nzakas:** To summarize: we got an email from Netlify saying we'd already used up 50% of our bandwidth for the month, and indeed, we saw bandwidth usage jump by more than 50x starting September 25.

**nzakas:** I posted on Twitter to see if anyone could help, and someone from Netlify (Elad Rosenheim) reached out to say that it looked like we were getting a ton of requests from China directed at `https://eslint.org/feed.xml`

**nzakas:** These had suspicious user agents, specifically, Chrome 58.

**nzakas:** The other problem is that `feed.xml` was a large file (over 600kb!), so each request really added to the bandwidth.

**nzakas:** The problem was that `feed.xml` was including every blog post we ever published on eslint.org.

**nzakas:** We fixed that in https://github.com/eslint/eslint.org/pull/795 to have just the most recent ten posts.

**nzakas:** So that reduces the file size.

**nzakas:** I also added a firewall rule to block all traffic from China until we could do something more targeted. Elad recommended using an Edge function on `feed.xml` to disallow requests from China just on that file.

**nzakas:** That's this PR: https://github.com/eslint/eslint.org/pull/796

**nzakas:** Once this is merged, we can remove the firewall block to once again allow requests from China for anything besides `feed.xml`
 * 👍 @mdjermanovic

**nzakas:** We are on a donated plan from Netlify so definitely don't want to go over the bandwidth allowance. 🙂

**mdjermanovic:** We currently have ~350GB till Oct 19. That should cover our usual bandwidth
 * 👍 @nzakas

**nzakas:** Any other thoughts, questions, comments about this?

**mdjermanovic:** It would be nice to have some notification when there are spikes in bandwidth

**fasttime:** Just curious if there's a way to see which requests are causing traffic without reaching out to Netlify?

**mdjermanovic:** Not sure if there's such feature available

**nzakas:** No there isn't.
 * 👍 @fasttime

**nzakas:** Okay, next agenda item:

> Agenda item: I'm seeing more simple issue requests that are being parked in "Feedback Needed" waiting for other folks to respond (example: [eslint/eslint#20165](https://github.com/eslint/eslint/issues/20165)). This seems unnecessary when the request is fairly straight forward and unlikely to be met with concerns from other team members. I'd like to suggest that TSC members mark issues as accepted that are low-risk without moving to "Feedback Needed". We should reserve "Feedback Needed" for controversial, large, breaking, or other types of changes that involve some amount of risk.

**nzakas:** My goal is just to avoid blocking small changes while waiting for consensus. "Feedback Needed" was intended for something that really needed input to make a decision but it seems to have become a parking lot for most changes.

**fasttime:** Sounds good to me 👍

**mdjermanovic:** No objections from my side

**nzakas:** Okay, we've decided to reserve "Feedback Needed" for larger decisions. TSC members can proactively mark smaller changes they agree with as "accepted"
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any other issues before we discuss v10?

**fasttime:** Nothing from my side.

**mdjermanovic:** Nothing from my side, too

**nzakas:** Okay, then let's discuss v10:
https://github.com/orgs/eslint/projects/6

**nzakas:** I noticed there are two new issues on the board. I'd like us first to discuss if we can lock down v10 now. Can we agree that after today we will not consider any more features for v10?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Great, we've agreed that the issues for v10 will be finalized today and anything else will have to wait for v11.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** First issue:
https://github.com/eslint/eslint/issues/20171

**mdjermanovic:** I'm in favor of removing rules that were deprecated in ESLint < 8

**mdjermanovic:** But wouldn't be opposed to postponing this to v11

**nzakas:** I'd prefer to defer to v11. I'm not in a hurry to remove deprecated rules.

**fasttime:** I'm also fine with removing all deprecated rules so far in v11.

**mdjermanovic:** Okay, then v11

**nzakas:** Okay, we've decided to move this to v11.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/js/issues/697

**mdjermanovic:** I'm in favor

**fasttime:** Makes sense to me 👍

**nzakas:** 👍

**nzakas:** We've agreed to remove the `nodejsScope` from escope for v10.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Anything else v10-related that we need to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from me.

**nzakas:** I think we need to complete the changes to escope and espree before we can consider a prerelease, so it looks like we're not ready at this point. Agree?

**mdjermanovic:** Agreed, there's more work left on those

**nzakas:** Then we'll re-evaluate at the next TSC meeting.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's move on to Contributor Pool

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-10-01-contributor-pool.md

**nzakas:** Going to run this through ye olde Chat GPT...

**nzakas:** | Contributor   | PRs | Payout |
|---------------|-----|--------|
| Pixel998      | 17  | $1,350 |
| jaymarvelz    | 4   | $850   |
| thecalamiity  | 2   | $450   |
| sethamus      | 1   | $200   |
| SwetaTanwar   | 1   | $250   |
| ntnyq         | 1   | $175   |
| Amnish04      | 1   | $600   |
| TKDev7        | 1   | $600   |

**nzakas:** For sethamus, I think $100 is appropriate. It was a one-line code change plus tests.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** What about ntnyq? Are we fine with $175?

**mdjermanovic:** Maybe $50 instead?

**fasttime:** If it's okay to reward with less than $100, then okay.

**nzakas:** Our minimum is $100

**fasttime:** Then $100 I'd say.
 * 👍 @mdjermanovic

**nzakas:** Pixel998 I'd lower to $800. A lot of small PRs in the bunch.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** What about the others?

**mdjermanovic:** Looks like Chat GPT apprecieates new rules. Maybe $600 is too high for this rule? https://github.com/eslint/markdown/pull/433

**nzakas:** Maybe $300 for that?
 * 👍 @fasttime

**nzakas:** And for Amnish04? That's also one rule.

**mdjermanovic:** That's fairly more complex one, with autofixes included.
 * 👍 @fasttime

**nzakas:** Okay, so we'll keep that at $600. Are we happy with the rest?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** The rest look good to me
 * 👍 @fasttime

**nzakas:** Okay, I'll let them know.

**nzakas:** Let's talk about the release tomorrow

**fasttime:** I can do tomorrow's release.
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** It will be just `@eslint/js` and `eslint` I think.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I'd like to make sure this blog post goes out tomorrow with the release:
https://github.com/eslint/eslint.org/pull/792

**fasttime:** Good idea. I will also review it tomorrow.

**mdjermanovic:** I'll re-review it tomorrow too. I left a suggestion for one more paragraph

**nzakas:** Yeah...I'm still not sure the change to scope manager is worth mentioning in this post considering there's only one alternative scope manager we know of and they're already on the issue.

**mdjermanovic:** Okay, if typecript-eslint is already aware of the change, and we don't know any other scope managers, then it's fine to leave that out
 * 👍 @nzakas, @fasttime

**nzakas:** And with that, I think we're done. Thanks everyone! (and thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋

**fasttime:** Thanks! Bye 👋
