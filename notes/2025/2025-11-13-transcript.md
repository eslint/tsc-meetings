# 11/13/2025 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Let me pull up last meeting's notes

**nzakas:** Looks like no action items to follow up on. So let's start with statuses.

I've been working on the "remove eslintrc" PR and other misc v10 tasks.

**mdjermanovic:** I was focused on preparing the first v10 prerelease

**fasttime:** I was mostly busy with reviews and I prepared a PR to update `@types/eslint-scope` to v9.

**nzakas:** Next, let's talk availability the next two weeks. I'll mostly be 0.5-1 hours per weekday except for November 27-28, during which I'll be offline.

**mdjermanovic:** I expect to be available around 2 hours each day

**fasttime:** I should be available 7-9 hours per week

**nzakas:** RFC Duty:
This week - @nzakas 
Nov 17 - @mdjermanovic 
Nov 24 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've got a bunch of agenda items. Let's start with the non-v10 ones and then we'll move on to the v10 ones.

**nzakas:** > Agenda item: Let's review recent sponsorship and spending data. Right now, we are receiving $10,737.04 in recurring monthly sponsorships. For the month of October, we paid out nearly $22,000 just for maintenance and development (we haven't yet done Contributor Pool for October). While we have the reserves to cover this, we need to watch this closely going forward as spending over $10,000 more per month than we're bringing in isn't sustainable.

**nzakas:** So our reserve balance right now is $156,432.03, but I believe there are still a couple of expenses left to be paid.

**nzakas:** If this spending rate continues, that gives us a little over a year before we run through the reserves.

**mdjermanovic:** We are currently at around -$40,000 for this year (counting thanks.dev amount we haven't transferred yet)

**nzakas:** Which is roughly on pace with the nearly -$60,000 we had last year.

**nzakas:** My first question: At what reserve level do we feel like we need to make changes to our spending?

**mdjermanovic:** Yeah, we might be better than last year but still tens of thousands below

**fasttime:** The earlier the better I'd say, but not sure what action would be most appropriate.

**nzakas:** I don't mind spending down some reserve, it doesn't do us any good sitting there, but there will reach a point where we can't keep doing that.

**nzakas:** So I'd propose once the reserve hits $120,000 that we institute some changes.
 * 👍 @mdjermanovic

**nzakas:** We don't need to decide on those changes right now, but some obvious ideas include:

1. Lowering per-hour rates
2. Capping the amount any one contributor can be paid in a month

**mdjermanovic:** Sounds good to me. We were aiming to have a two-years reserve, and the trend is that we are at about -$60,000 per year, which makes $120,000 being a two-years reserve

**nzakas:** That is true so long as 1) we don't lose any more sponsorships and 2) we don't continue spending $12,000 per month over income.

**fasttime:** So, we will postpone the question to when we hit $120,000 reserve?
 * 👍 @nzakas, @mdjermanovic

**nzakas:** I do think we need to be more public about asking for sponsorships going forward, probably with a blog post right after we release the 2025 year in review.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we'll revisit this topic when reserves hit $120,000.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/rewrite/issues/310

**nzakas:** https://github.com/eslint/rewrite/issues/310#issuecomment-3517530512

**nzakas:** Do we want to change the type of `data` for fixes and suggestions from `unknown` to `string|number|boolean|bigint`?

**fasttime:** I'm not sure if that's necessary. I can imagine rules passing arrays or Date objects as placeholder values. Maybe also null or undefined.

**nzakas:** The problem with things like arrays, objects, dates, etc., is that the output may not be what people expect. We could definitely include null and undefined in the type, though.

**nzakas:** I don't have a strong opinion on this.

**fasttime:** I also don't feel strong about this.

**mdjermanovic:** I wouldn't mind requiring just a `string` as that's how the value will be used

**fasttime:** Do you mean, enforcing in code, not only in the types, that values are string?

**nzakas:** We already have a lot of rules passing numbers, though, and I don't see a good reason to force people to cast as a string.

**mdjermanovic:** I'm not sure if we actually have core tests with non-string values, it might be just working by chance

**nzakas:** I explained in the linked comment. 🙂 We're using `.replace()` with a function and returning the raw value from `data`. `.replace()` coerces those values to string.

**nzakas:** So primitive values always work as expected

**mdjermanovic:** Yeah, I know it works, not sure if it was actually meant to work or works by chance since we are interpolating data that way

**nzakas:** Either way, it is the way it works now and I think we want to codify that behavior as best we can.

**nzakas:** So to me, specifying the type as the union of primitive types makes sense.

**nzakas:** Otherwise I think forcing people to cast everything to strings even though the functionality hasn't changed is just an exercise with no discernable value.

**mdjermanovic:** Then I think primitive types is a good compromise. Passing objects should be rare

**nzakas:** Okay, so `string|number|boolean|bigint|null|undefined`?

**fasttime:** Works for me.

**mdjermanovic:** Works for me too

**nzakas:** All right, we've agreed to change the type for both fix and suggestions `data` to `string|number|boolean|bigint|null|undefined`
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** I think we should also add unit tests in eslint/eslint to make sure it works if we change the interpolation algorithm

**nzakas:** We're not planning on changing the algorithm, just the typing.

**mdjermanovic:** I know but we should ensure that the typing holds

**mdjermanovic:** For future changes

**nzakas:** So are you saying we should add the tests now?

**mdjermanovic:** Yes, to ensure passing `string|number|boolean|bigint|null|undefined` values will work as expected, if there are already no such tests

**nzakas:** Okay, I read your comment as "if we ever change the interpolation algorithm then we should change the tests," but you mean, "we should add tests now to protect this behavior so if we ever change the interpolation algorithm we'll catch it."

**nzakas:** Yes, let's add tests for the current behavior. 👍👍
 * 👍 @mdjermanovic

**mdjermanovic:** Yes, to catch possible regressions

**fasttime:** That would be adding tests in `eslint` and updating the types in the rewrite repo.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, next item:
https://github.com/eslint/eslint/pull/20105

**nzakas:** @fasttime this is you: https://github.com/eslint/eslint/pull/20105#discussion_r2352281406

**fasttime:** So, RuleTester has some undocumented static methods: `setDefaultConfig`, `getDefaultConfig` and `resetDefaultConfig`.

**fasttime:** These are all well-tested but it's not clear to me if those were ever used.

**fasttime:** The question is whether we want to make those methods public by adding types and documentation (as they stand now, they are of no use).

**nzakas:** setDefaultConfig usage: https://sourcegraph.com/search?q=context:global+repo:.*eslint.*plugin.*+setDefaultConfig&patternType=keyword&sm=0
 * 👍 @fasttime

**nzakas:** I think we should add types and docs.

**fasttime:** Sounds good 👍

**mdjermanovic:** Looks like these methods are used, so sounds good to me to add types and docs

**nzakas:** Okay, we've agreed to add types and docs for these methods.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:
https://github.com/eslint/eslint/pull/19563

**nzakas:** This one has been open for a long time. @fasttime :
https://github.com/eslint/eslint/pull/19563#issuecomment-3308792275

**fasttime:** Okay, let me try to resume the problem

**fasttime:** The `@typescript-eslint/no-redeclare` rule is controversial. On one hand, it reports problems that TypeScript already catches; on the other, it flags types and values sharing the same name, which some developers consider unnecessary.

**fasttime:** We want to decide how to update the `no-redeclare` rule to support TypeScript syntax. We have some options here:

**fasttime:** 1. Report types and values with identical names, as `@typescript-eslint/no-redeclare` does, but without the bulk of options of the original rule (which are mostly used to report cases already covered by TypeScript).

**fasttime:** 2. This was suggested by Kirk Waiblinger: adding an option to indicate whether values and types with the same name should be reported in cases where TypeScript allows them (e.g. function and interface).

**fasttime:** 3. Diverge from the original rule and make our rule as permissive as possible.

**fasttime:** I think 2. is a good compromise, but yes, that PR has been open for quite a while, I'd be happy to see this settled in any direction.

**nzakas:** Option 2 seems like a pragmatic choice to me

**mdjermanovic:** I'm not if types and values sharing the same name qualifies as redeclaration. The fact that `@typescript-eslint/plugin` has this check in their extension rule doesn't necessarily mean it belongs in this rule

**mdjermanovic:** To me this check feels like a different rule

**mdjermanovic:** As the type and the value declaration are not declaring the same thing, so it isn't quite a redeclaration?

**fasttime:** That sounds like option 3., not reporting name conflicts across values and types.

**fasttime:** I'm fine with either solution at this point.

**nzakas:** I'm fine with option 3.

**mdjermanovic:** I'm also fine with option 3.

**nzakas:** Okay, we've agreed to go with option 3.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I think that's the last of the non-v10 issues?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, next item:

> Agenda item: Starting with ESLint v10.0.0-alpha.0, `@eslint/js` is no longer a direct dependency of `eslint`. Previously, we always released `@eslint/js` alongside `eslint` to keep their versions in sync. This seems no longer necessary now. Should we continue releasing `@eslint/js` together with `eslint`, even when there are no changes?

**nzakas:** I think the synchronization only becomes an issue when rules are added to ensure the `recommended` and `all` configs stay in sync.

**nzakas:** So it seems like we don't need to keep the version numbers in sync going forward.

**mdjermanovic:** So, for example, if we add a new rule in ESLint v10.5.0, and update the `all` config, which version of `@eslint/js` would we release, v10.1.0?

**nzakas:** Yes

**mdjermanovic:** Then, we should probably add a peerDependency to eslint?

**mdjermanovic:** As `@eslint/js` v10.1.0 won't work with ESLint < 10.5.0

**mdjermanovic:** Or maybe bump the major version of `@eslint/js`, as adding new rules to a config is typically a breaking change

**fasttime:** Makes sense I think. Eventually, when `@eslin/js` becomes a self-contained language plugin we'd want to release it independently.

**nzakas:** Yes, that's the goal

**nzakas:** Okay, it's getting late, let's try to move things along.

**nzakas:** Do we agree that `@eslint/js` will only be released when there are changes and to add a peer dependency on ESLint?

**fasttime:** Sounds good to me.

**mdjermanovic:** Sounds good to me too.

**nzakas:** Okay, it is so!

**nzakas:** Next: https://github.com/eslint/js/issues/708

**fasttime:** I just wanted to make sure we get this on the v10 board.

**fasttime:** I opened a PR in DefinitelyTyped, don't know when it will be merged. In the mid-term, it would be good to add built-in types to `eslint-scope`.

**nzakas:** Is there any reason not to just add types to `eslint-scope` and not deal with DefinitelyTyped?

**fasttime:** Makes sense, yes. I could work on a PR next week.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we've agreed to add types to the `eslint-scope` package.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next: https://github.com/eslint/eslint/pull/20125

**nzakas:** > **TSC Summary**: This PR aims to disallow specifying `"errors"` and `"output"` properties on `valid` test case objects. The original issue, which has been accepted for ESLint v10.0.0, does not mention the `"output"` property and we didn't discuss it.
> 
> **TSC Question**: Do we want to include disallowing the `"output"` property on valid test case objects in ESLint v10.0.0?

**nzakas:** Makes sense to me 👍

**mdjermanovic:** I'm in favor, as it's similar to `errors`: a property that makes sense on `invalid` test objects only. We just haven't discussed it yet.

**mdjermanovic:** Makes sense to me too

**fasttime:** I'm also in favor.

**nzakas:** Okay, we've agreed to also disallow `output` in valid test cases.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, that's everything on the agenda. Are there other things to discuss related to v10?

**mdjermanovic:** I think there are only 3 things left for alpha.0:

1. Check if the Node.js upgrade on Jenkins is correct.

**mdjermanovic:** 2. Update and merge this as it was announced for alpha.0: https://github.com/eslint/eslint/pull/20086

**mdjermanovic:** 3. Release eslint/rewrite packages and update deps to them in `eslint`

**mdjermanovic:** (3. depends on 2.)

**nzakas:** I'll get Node.js working on Jenkins and update that PR tomorrow morning
 * 👍 @mdjermanovic

**mdjermanovic:** Oh, and if you can check this: https://github.com/eslint/eslint/pull/20315
 * 👍 @nzakas

**mdjermanovic:** Alright, then I think we'll be good for v10.0.0-alpha.0 tomorrow
 * 🎉 @fasttime

**mdjermanovic:** I can do the release tomorrow
 * 🙏 @nzakas, @fasttime

**fasttime:** We should release eslint/rewrite timely so if any integration tests start breaking we can deactivate them.
 * 👍 @mdjermanovic

**mdjermanovic:** I can release eslint/rewrite and update deps in eslint/eslint right after `https://github.com/eslint/eslint/pull/20086` is merged

**nzakas:** I think Jenkins should be set now

**mdjermanovic:** Looks like, `node -v` is working for me now
 * 🎉 @nzakas

**nzakas:** We'll also need to update this page: https://eslint.org/version-support/

**mdjermanovic:** To add v10.x now?

**nzakas:** And update v9.x

**nzakas:** v10.x -> Current
v9.x -> Maintenance
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Commerical Support would be Tidelift for both

**mdjermanovic:** I can prepare a PR tomorrow
 * 👍 @fasttime

**mdjermanovic:** That should be merged after the release?

**nzakas:** Yes

**nzakas:** I'm sorry, I need to get going. For the record, we still need to do the contributor pool. We have $1071 funds for October:
https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-11-01-contributor-pool.md
 * 👍 @mdjermanovic, @fasttime

**nzakas:** If you want to do it without me, please feel free, otherwise we can review next meeting.

**mdjermanovic:** Let's leave it for the next meeting
 * 👍 @fasttime

**fasttime:** Yes, it's late today.

**nzakas:** Just a reminder: I won't be at the next meeting due to US Thanksgiving holiday.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, thanks everyone ! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks! Bye 👋
