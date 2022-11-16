# 11/03/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Howdy

**mdjermanovic:** Hi!

**nzakas:** Looks like we are ready to go. @btmills can you take notes?

**btmills:** Yessir

**nzakas:** Thanks

**nzakas:** First item: https://github.com/eslint/eslint/pull/16315

**nzakas:** > **TSC Summary:** This PR reformats our npm scripts to follow the standard we have already checked in.
> 
> **TSC Questions:**
> 
>     1. Do we want to rename the release-related scripts? We would just have to update the Jenkins job before doing the next release.
> 
>     2. Do we want to include linting in `npm test`?

**nzakas:** This comment describes that second point: https://github.com/eslint/eslint/pull/16315#issuecomment-1248750725

**mdjermanovic:** 1. Yes, that shouldn't be a problem. I'm not sure that release scripts should be under the `build:` namespace (e.g., `build:release`), but we can discuss that on the PR.
 * 👍 @nzakas

**btmills:** 1. Also yes, consistency sounds nice
2. I'd also like to separate lint and test

**mdjermanovic:** 2. I'd prefer that the well-known command `npm test` ensures that the repository is in a "good state", which includes linting. But if you both think that it shouldn't include linting, I'll agree.

**nzakas:** I think we had this discussion already around the standards and decided on separating linting and testing. At least, that's what we have documented: https://eslint.org/docs/latest/developer-guide/package-json-conventions#test

**mdjermanovic:** Okay, let's follow the standard then. I agree that we exclude linting from `npm test`
 * 👍 @nzakas

**nzakas:** Okay, it looks like we've agreed on 1 to proceed with renaming (details to be discussed on the PR) and 2 to split linting and testing.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item:

**nzakas:** > Agenda item: I’m getting concerned about the low participation rate of the team. We are getting down to the point where most of the time we only have two consistently active people (me and mdjermanovic). We are missing discussions and issues and PRs are taking longer and longer to merge. This isn’t sustainable. Let’s talk about how we can improve the situation.

**nzakas:** FWIW, this was not targeted at you @btmills . This is a larger issue with the entire team.

**nzakas:** I suppose first, does everyone agree that this is a problem?

**btmills:** Thanks for clarifying @nzakas, though I'm fully aware you all are on another tier of effort

**btmills:** So yes, absolutely agree that this is the case

**mdjermanovic:** Yes, I also think it would be better if more people were actively involved

**nzakas:** Okay, so we're all on the same page with that part.

**nzakas:** The trickier part is what to do about it? On some level, it's likely we didn't fully explain what is expected of team members when they join. In the past, people willingly just started triaging issues and pull requests, but that didn't seem to happen with the latest group. Should we make some clear request like we expect each team member to spend one hour each week responding to issues and PRs (unless they are on holiday, of course)?

**nzakas:** (One hour = 12 minutes per weekday, which seems reasonable?)

**mdjermanovic:** I think it's more that people are not always familiar with the subject of the issue/pr

**btmills:** (Sorry for the delay, trying to think here)

**nzakas:** @mdjermanovic I'm not sure I agree. There's a lot that can be done without fully understanding the topic. For instance, just verifying that a bug report is reproducible or chiming in if you support a new option to a rule.

**mdjermanovic:** That's true.

**nzakas:** And at some point, as a team member, you need to get familiar with as much of the project as possible, so even if that is the reason initially, it can't go on like that forever.

**btmills:** If I think about my own patterns, I find it's most effective if I spend an hour at a time. Sometimes it takes me 15m just to build context on the history of an issue if it's particularly hairy before I start writing a response. But to your point, I'm usually trying to get to a point where I'm confident giving the best possible feedback. Maybe 80% confidence/accuracy is the point of diminishing returns when I can get there in 5m?

**btmills:** The downside to that is iteration cycles can be slower, so if I'm giving 80% good feedback and someone responds 24hr later telling me I missed the point, that blocks progress

**nzakas:** That's a valid point. I'll counter that not all issues and pull requests require that level of concentration and computation to respond.

**nzakas:** So while that can certainly be the case when someone is proposing a major issue (like rewriting the whole project 😆 ) I don't think that's the majority of issues/PRs that we receive.
 * 😆 @btmills

**btmills:** So rather than starting at the front of the notification queue, which is often those long discussions, it's fine to skip to something that one can triage in a few minutes and save the deeper ones for someone else who has a longer block

**nzakas:** Absolutely

**nzakas:** I tend to bounce back and forth depending on my energy/concentration levels

**nzakas:** Sometimes doing the small ones helps me to build up momentum to get the big ones, too. 🙂

**nzakas:** And of course, if we ever notice that an important issue is blocked, we can flag it for the TSC meeting to get it unblocked.

**nzakas:** (I'd still like to hire a project manager, but I feel like we need to better define our processes before taking that step...nevermind figuring out how to interview for such a position.)

**btmills:** writethedocs.org worked... is there a runtheproject.org? 😆

**btmills:** More seriously, I think that framing of "even 5m helps" could help. Broadly, that's just based on my experience. What do you think of asking the rest of the team with commit access about their situations to see if there's something else that might be a blocker? (Could easily be unclear expectations like you already mentioned, but I'd be more confident if we heard that.)
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I'm down with that. I'll send out an email and allow folks to respond directly to me if they don't want to share with the rest of the team. I know one person who's just finishing up a major project and anticipates being able to help more after that and another has health issues, but hearing from more people would help.

**nzakas:** I think I'd still like to set a one hour per week goal for team member participation -- but we can approach that topic once we have more data.

**btmills:** I'm glad and not at all surprised that you already have more context. If you feel like that's a sufficient sample, maybe we already have enough data - I'll defer to your feeling there

**nzakas:** My main concern: if you look at eslint.org/team, these should be the people who are actively contributing and who you can reach out to for help

**nzakas:** I think more data will be helpful, so let's start there.

**nzakas:** I'll take the action item to send out that email and see what I get back.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, contributor pool time!

**nzakas:** We have these tagged: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2022-10-01

**btmills:** A good chunk this time!

**nzakas:** Yup. Any other significant PRs that we missed?

**nzakas:** (Note: nschonni has declined due to tax concerns, so we can skip him)

**btmills:** A quick scan looks like that's good coverage

**mdjermanovic:** I also think that's all

**nzakas:** Okay, then let's talk amounts

**nzakas:** fasttime had several, so $200?
 * 👍 @btmills, @mdjermanovic

**nzakas:** TomerAberach $100?
 * 👍 @btmills, @mdjermanovic

**nzakas:** sosukesuzuki - that looked pretty involved, so $200?
 * 👍 @btmills, @mdjermanovic

**nzakas:** hirasawayuki - $100?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I'll take the action item to let them know.

**nzakas:** Shall we talk the release?

**mdjermanovic:** I can tomorrow

**btmills:** I'm available for this one over the weekend! I won't be around for the next few, so I'm happy to take it

**mdjermanovic:** Then, it's yours 🙂

**mdjermanovic:** thanks!

**mdjermanovic:** I think it's only `eslint` package this time

**btmills:** Should I do `espree` just to update the readme on npm with https://github.com/eslint/espree/pull/557? I wouldn't need to bump `eslint`'s dependency since it's non-functional

**nzakas:** Might as well

**btmills:** Will do. `espree` and `eslint`

**mdjermanovic:** Sounds good to me

**nzakas:** All right, unless there's anything else, I think we are done!

**mdjermanovic:** Thanks! 👋

**btmills:** Nothing from me. Take care! 👋

**nzakas:** Stay safe!
