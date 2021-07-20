# 07/15/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy

**nzakas:** @btmills are you set for taking notes?

**btmills:** yep

**nzakas:** Great, thanks

**nzakas:** We do have some issues to go through, so we'll do those and then look at v8.0.0

**nzakas:** https://github.com/eslint/eslint/issues/14800

**nzakas:** > **TSC Summary:** This issue requests to add a physicalFilename option to RuleTester to help with testing code blocks. There is already an RFC for enabling processors in RuleTester ([eslint/rfcs#31](https://github.com/eslint/rfcs/pull/31)) that may be more appropriate.
> 
> **TSC Question:** How do we want to proceed here?

**mdjermanovic:** I'd vote for enabling processors in RuleTester

**btmills:** I saw the discussion in the RFC about enabling processors being more of an integration than a unit test, but it seems worth doing

**btmills:** and better than hacking some other solution into `RuleTester`

**mdjermanovic:** `physicalFilename` option in RuleTester would mean that Linter has to support it specifically for RuleTester

**btmills:** yeah, that just feels gross

**mdjermanovic:** All existing RuleTester options translate to Linter API options

**nzakas:** While the implementation details are important to understand, I don't think that should necessarily be the deciding factor.

**nzakas:** My only concern with implementing processors in RuleTester is that it feels like a lot of work to pass a string into a test.

**nzakas:** And that maybe if we thought of it not as "Linter can't do that" but rather, "what could we add to RuleTester to enable this?" there could be a different solution.

**btmills:** It's more than just a string at that point though - it's a whole environment that includes `physicalFilename`. Most of the time, tests don't care about the environment, but in this case they do. I see this choice as between giving a way to mimic the environment or create it for real (the RFC route)

**mdjermanovic:** There is also another use case for processors in RuleTester, described in the RFC, so enabling processors would cover both

**nzakas:** Okay, if you both feel strongly about it, I'll go along. I don't care too much, I just want to make sure we aren't making decisions based on currently available APIs when we are free to change those.

**nzakas:** Do either of you want to pick up the RFC?

**btmills:** I can

**nzakas:** Thanks @btmills!

**nzakas:** So it looks like we've decided to pursue implementing processors in RuleTester for this one.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/team/issues/27

**nzakas:** > 
> 
> **TSC summary**: Above, I’ve identified several of the most widely-used ecosystem projects that accept sponsorships or that have maintainers who accept sponsorships.
> 
> **TSC question**: Which of these projects and maintainers, if any, do we want to sponsor, and how do we want to allocate our $500/mo budget among them?

**btmills:** I also included links to download charts if you want an approximate comparison point for usage

**nzakas:** - [typescript-eslint](https://opencollective.com/typescript-eslint) ([chart](https://npm-stat.com/charts.html?package=eslint&package=%40typescript-eslint%2Feslint-plugin&from=2020-06-25&to=2021-06-25)) is on Open Collective.
- [ljharb](https://github.com/sponsors/ljharb) ([chart](https://npm-stat.com/charts.html?package=eslint&package=eslint-plugin-import&package=eslint-plugin-react&package=eslint-config-airbnb&from=2020-06-25&to=2021-06-25)) maintains many plugins, including [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import), [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react), and [`eslint-config-airbnb`](https://github.com/airbnb/javascript).
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) ([chart](https://npm-stat.com/charts.html?package=eslint&package=eslint-plugin-prettier&from=2020-06-25&to=2021-06-25)) would be covered under the [Prettier](https://opencollective.com/prettier) Open Collective.
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) ([chart](https://npm-stat.com/charts.html?package=eslint&package=eslint-plugin-jsx-a11y&from=2020-06-25&to=2021-06-25)) does not have a project sponsorship program, but the maintainer, [jessebeach](https://github.com/sponsors/jessebeach), does.
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) ([chart](https://npm-stat.com/charts.html?package=eslint&package=eslint-plugin-jest&from=2020-06-25&to=2021-06-25)) does not have a project sponsorship program, but one of the maintainers, [G-Rath](https://github.com/sponsors/G-Rath), does.

**nzakas:** Ooh that came out uglier than I thought it would

**nzakas:** At the moment, we can only donate through Open Collective.

**nzakas:** So that is a limiting factor.

**nzakas:** GitHub Sponsors would require a separate credit card to charge to; we can't use our donations to donate to someone else.

**btmills:** Ah, that constrains things quite a bit

**nzakas:** Yeah. Just a quirk with how GitHub Sponsors is structured vs. Open Collective.

**btmills:** (Is an Open Collective virtual card attached to GitHub Sponsors an option?)

**nzakas:** I honestly have no idea

**nzakas:** If you'd like to investigate that and come back with a recommendation, we can table this discussion until then.

**nzakas:** Oh, you know...OC cards have a really low limit

**btmills:** I'll see what I can find before the next meeting

**nzakas:** Yeah, virtual cards have a limit of $300/month

**nzakas:** Personally, I think I'd prefer to stick to OC

**btmills:** Depending on how we split it up, that might be enough for GitHub Sponsors at 60% of the budget assuming it works at all

**btmills:** Okay, that leaves us typescript-eslint and eslint-plugin-prettier as options

**nzakas:** I'm 👍 for typescript-eslint

**nzakas:** Prettier is a tougher sell for me

**btmills:** So am I 👍 that was the original impetus for this anyway

**mdjermanovic:** typescript-eslint definitely 👍

**nzakas:** I have a hard time considering Prettier to be part of the ESLint ecosystem

**btmills:** I'm also less inclined for the larger prettier project because the eslint integration is more tangential, but I wanted to include it to be thorough

**nzakas:** Then let's start with $100 for typescript-eslint and we can circle back for others at a later point in time?

**btmills:** Sure. I'd also be willing to reach out to some subset of the other plugins to see if they might set up an OC at some point in the future, but I'd only do that if we intended to be an initial sponsor for them

**nzakas:** I think eslint-plugin-import would be high on my list.
 * 👍 @btmills, @mdjermanovic

**nzakas:** eslint-plugin-jsx-ally too
 * 👍 @btmills, @mdjermanovic

**btmills:** what are your thoughts on eslint-plugin-react?
 * 👍 @mdjermanovic

**nzakas:** I kind of feel like the React ecosystem should be sponsoring it 🙂

**nzakas:** But I'm not necessarily opposed if you both want to go that route.

**btmills:** I could also go either way

**nzakas:** I just don't want to end up in a situation where now we feel like we need to support eslint-plugin-vue, eslint-plugin-svelte, etc.

**btmills:** yeah, if I were to be 👍, it'd be because of how widely used it is, but that could get awkward

**btmills:** So I can reach out to eslint-plugin-import and eslint-plugin-jsx-a11y maintainers and see if they'd set up an OC and keep it there for now
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, I'll set up the typescript-eslint donation
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint-scope/pull/71

**nzakas:** > **TSC Summary:** This PR switches eslint-scope to be an ESM package. We had originally planned on removing access to APIs under `lib/`, but that will break `@babel/eslint-parser`.
> 
> **TSC Question:** How shall we proceed?
> 
> So I think we have to decide how to move forward, which I see as one of:
> 
>     1. "Bless" these APIs and just export them directly from this package.
> 
>     2. Create a `use-at-your-own-risk` entrypoint like we did for ESLint that exports the things we don't want to officially support.
> 
>     3. Keep all of the current APIs available at the current locations.

**nzakas:** After thinking about this for a couple days, I'm in favor of option 1.

**btmills:** Do you have a sense for the compatibility burden we'd be taking on? Are there changes we'll want to make that would become difficult?

**btmills:** It looks like it's just `extend`ing standard visitors, but removing those would likely be breaking changes already

**nzakas:** Basically, we're talking about exposing `Referencer`, `Visitor`, `Scope`, and `Definition`. I don't see a big downside to that.

**nzakas:** These APIs have never really changed, so I don't think we have the same concerns as people accessing undocumented APIs in ESLint

**btmills:** They're also already documented https://eslint.org/docs/developer-guide/scope-manager-interface

**btmills:** So I'm not seeing a downside either

**mdjermanovic:** If those APIs have never really changed, then it isn't likely they will, so it makes sense to export them

**nzakas:** And most of the APIs on `ScopeManager` return an instance of one of those classes anyway, so they could always just use `.constructor` to get to the constructors anyway.

**nzakas:** All right, it sounds like we are in agreement that we will bless the APIs `@babel/eslint-parser` is using and export them from the package.
 * 👍 @btmills, @mdjermanovic

**btmills:** Do we want to take this opportunity to remove the deprecated portions that are mentioned in the documentation?

**nzakas:** I'd prefer not to in this PR.

**nzakas:** It's already pretty big

**mdjermanovic:** Maybe for the next major, since it's indirectly a breaking change for ESLint rules that might be using them?
 * 👍 @nzakas, @btmills

**mdjermanovic:** (custom rules)

**nzakas:** Okay, we've decided not to remove deprecated APIs in this release of eslint-scope.

**nzakas:** Let's go through the v8.0.0 tasks

**nzakas:** I know we were waiting on `eslint-scope` for the final two syntax additions.

**nzakas:** Otherwise...

**nzakas:** https://github.com/eslint/eslint/pull/14617

**mdjermanovic:** That was updated yesterday, I'll take a look soon. I'd expect it to be done or nearly done

**btmills:** That's my sense as well, I just need to finish looking through the tests

**nzakas:** Awesome.

**nzakas:** https://github.com/eslint/eslint/pull/14656

**nzakas:** It looks like this one might be ready

**mdjermanovic:** Looks ready to me

**btmills:** yes

**nzakas:** Excllent

**nzakas:** Next: https://github.com/eslint/eslint/pull/14769

**btmills:** Ready as well

**nzakas:** I think this is ready too, I just left one suggestion.

**nzakas:** I think it's safe to mark as ready
 * 👍 @btmills

**mdjermanovic:** Suggestion accepted and commited

**nzakas:** All right. It looks like we're in great shape!

**btmills:** For syntax changes, the big ESLint PR is https://github.com/eslint/eslint/pull/14591

**nzakas:** Once we get the `eslint-scope` changes merged and released, we should be able to finish up the remaining syntax-related issues

**nzakas:** I'll plan on focusing on that next week so maybe, just maybe, we can do a prerelease in two weeks
 * 🤞 @btmills, @mdjermanovic

**nzakas:** Any other concerns around v8.0.0?

**mdjermanovic:** Not from me

**btmills:** none here

**nzakas:** Awesome. Pretty excited about how this has been going so far. 🙂

**btmills:** much smoother than in the past
 * 👍 @nzakas

**nzakas:** As a bit of housekeeping, I did send out an invite for this meeting to our eslint.org email addresses.
 * 👍 @btmills

**nzakas:** So you can add that to your calendar by accepting, and if you can't make it, just decline so we know. Everyone is able to modify the event so we can add people as necessary.

**nzakas:** Also, I sent this out: https://docs.google.com/spreadsheets/d/1PuhTxOcbVJS22xCGK1ZnTEqAAXkWZYicYoGnjVlbHB4/edit?usp=sharing

**nzakas:** A budget!

**nzakas:** An honest to goodness real budget!
 * 🎉 @btmills

**nzakas:** Good news is that even with our increased spending, we are still spending less than we are bringing in. And, we also have a $200,000+ balance at this point so even if donations fluctuate, we should be able to maintain this for the foreseeable future.

**nzakas:** And more good news: the switch to Carbon Ads has resulted in doubling of our website ad revenue.

**nzakas:** So we're now at about $1,200/month, which is like having a whole extra gold sponsor.
 * 🎉 @mdjermanovic

**btmills:** Very exciting across the board!

**btmills:** Should we do an update post (or series of individual posts) about our funding/how we're using it/what it's enabling?

**nzakas:** Yes, that's in my todo list. 🙂

**btmills:** haha I wasn't explicitly volunteering you, but I know that was a greater probability outcome than signing up myself

**nzakas:** Oh I've been planning on it for a while, just with my oral surgery and then vaccine, I haven't had the extra energy to put towards it

**nzakas:** But yes, my plan is to talk about how we'd changed our pay structure, how we are supporting other projects, and even share this budget (readonly, of course), so people can see we are being responsible.

**btmills:** that sounds great

**nzakas:** All right, anything else anyone wants to address before we call it?

**btmills:** I believe I'm up for the release? Don't know yet whether it'll be tomorrow night or Saturday

**nzakas:** Oh right, duh. 🙂

**nzakas:** Whatever works for you.

**mdjermanovic:** `@eslint/eslintrc` had a bug fix

**btmills:** thanks for the heads up

**nzakas:** All right, thanks everyone! @mdjermanovic enjoy your holiday

**btmills:** made a note to release and bump that first

**mdjermanovic:** Thanks! 🙂

**btmills:** 👋 enjoy, and take care!
