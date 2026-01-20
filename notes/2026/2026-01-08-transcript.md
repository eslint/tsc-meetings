# 01/08/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Happy new year!

**mdjermanovic:** Happy new year!

**fasttime:** Happy new year! 👋

**nzakas:** It's been a month since we've had a meeting so there's a lot to get through.

**nzakas:** Just double-checking the meeting notes from December 11

**nzakas:** @fasttime I believe you disabled the Netlify edge function, correct?

**fasttime:** Actually I just created the issue, but it's been disabled, yes.

**nzakas:** Ok great

**nzakas:** I know we're all just getting back, but let's start with statuses anyway.

I've been focused mostly on putting together the "2025 year in review" blog post, gathering all the data.

I've also been looking over the budget, contacting potential and possible sponsors, and generally trying to get a handle on our finances.

And I've been spending some time getting `@eslint/css` to play better with `tailwind-csstree` and vice-versa.

**mdjermanovic:** I wasn't feeling well and I'm still not at my best. I was mostly reviewing PRs and triaging issues.
 * ❤️ @nzakas, @fasttime

**fasttime:** I worked mostly on adding built-in types to ESLint Scope, worked on reviews and I reached out to typescript-eslint with an issue about ESLint v10 compatibility.

**nzakas:** Is that the `LegacyESLint` thing?

**fasttime:** Yeah, exactly. I also have a fix ready now.
 * 🎉 @nzakas, @mdjermanovic

**nzakas:** All right, let's talk availability for the next two weeks. I'm still mostly at 0.5-1 hour per weekday, though trying to carve out a couple straight hours on each Friday to make some coding progress.

**mdjermanovic:** I think I'll be able to work 1-1.5h per day

**fasttime:** I expect being available 7-9 hours per week the next weeks

**nzakas:** Okay, next is RFC Duty. We got a bit messed up with the holidays and people being away, so I'll propose we restart with this schedule:

Jan 12- @nzakas 
Jan 19 - @mdjermanovic 
Jan 26 - @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Great, let's jump into the agenda.

**nzakas:** We'll go through agenda items first then talk v10 and then do contributor pool for December.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** > Agenda item: We lost another sponsor this past month, let's discuss what changes (if any) we want to make to our spending. Some proposals to reduce costs:
>     1. Set 40 as the maximum number of hours any contributor can invoice for (saves roughly $6500/month based on prior three months)
>     2. Set 5 as the maximum number of hours any contributor can invoice for eslint-community work. We don't have a lot of this but it would be good to set this as proportional to the amount of donations received.
>     3. Reduce sponsorships of other projects from $150/month to $100/month (saves $375/month) -- right now, we are spending 13% of monthly income here.

**mdjermanovic:** All options sound reasonable to me

**nzakas:** Context: We lost another sponsor and we're now down to $8916/month. Meanwhile our recent spending has been significantly higher:

- September 2025: $17,354.40
- October 2025: $26,036.13
- November 2025: $18,764.56

**mdjermanovic:** I think sponsorships of other projects was initially at $100/month and then we've increased it at some point when we used to have more sponsorships to us

**nzakas:** That's correct

**nzakas:** That was in our "we have more money than we're spending" days.

**mdjermanovic:** I agree that we apply all of 1., 2., and 3.

**fasttime:** Does it make sense to implement all three options?

**nzakas:** I think we need to cut where we can, and I prefer to do it all at once vs. having a slow trickle periodically. Rip off the bandaid and (hopefully) be done with it.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And to be clear: the goal isn't necessarily to get us below what we're bringing in. We still have a reserve that we can use. The goal is to make that reserve last two years.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed to the discussed cuts. I'll take the action to inform the team. I'll also take the action to set up a page on the website that explains all of this. It will be good to be able to refer people to official documentation.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** All right, let's dig into the issues and PRs

**fasttime:** Curious to to see how this will unfold in the next months

**nzakas:** Yeah, it's possible people will contribute less. Although initially we had a hard limit on what people could invoice for and a lot of people still worked on the project past that limit. So, time will tell.
 * 👍 @fasttime

**nzakas:** First item:
https://github.com/eslint/eslint/pull/20411

**nzakas:** > **TSC Summary:** This issue proposes migrating from `find-up` v5 to the latest version, `find-up` v8, which is ESM-only now. The team hasn't reached a definitive consensus on this change.
> 
> **TSC Question:** Due to the updated Node.js version support range in ESLint v10, we can now use `require(ESM)` by default. The question is: what scope does this new feature apply to — only our internal packages, or can external packages use it as well?

**mdjermanovic:** That's a good question. Technically, it's safe to use it only with dependencies we have control over.

**mdjermanovic:** (including transitive dependencies)

**nzakas:** Can you explain that a bit more? I'm not sure I follow

**mdjermanovic:** Because the dependency we are using with `require(ESM)` could add a top-level `await` and that would break us

**nzakas:** Ah I see. I think that's true in general, but not sure that would be a concern for this package.

**mdjermanovic:** It's generally unlikely to happen, but it still could, and that would be a non-breaking change for the dependency

**nzakas:** I don't feel strongly about it either way. Happy to close as WONTFIX if you're not comfortable with it.

**mdjermanovic:** I think the question was  general, for any dependency.

**fasttime:** I think the question is more about the general approach than the issue in particular.

**mdjermanovic:** So we could decide on our general approach: do we want to avoid the risk, or perhaps it's overly cautious to account for this (probably unlikely) possibility

**fasttime:** For the general approach, I'd be in favor of being cautious.

**nzakas:** Shall we say we don't want to rely on `require(esm)` for external dependencies?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, we've agreed that we won't use external dependencies where `require(esm)` is necessary to avoid the unlikely but still possible scenario where a package silently adds a top-level await that breaks ESLint in the wild. 

It seems like that should be documented on the README for clarity?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Sounds good to me.

**nzakas:** Does anyone want to take that as an action item?

**mdjermanovic:** I can
 * 👍 @fasttime

**nzakas:** Thanks!

**nzakas:** Next item:
https://github.com/eslint/eslint/issues/20355

**nzakas:** > **TSC Summary:** This issue proposes adding checkboxes to issue and PR templates to better indicate if and how a contribution was AI generated. There is currently no definitive consensus from the team about this change.
> 
> **TSC Question:** Should this proposal be accepted?

**mdjermanovic:** I'm in favor

**mdjermanovic:** And I agree with comments on the issue that the wording should not be such as that it sounds it's actually encouraged to use AI for issues

**fasttime:** I'm also in favor generally, the details could be discussed in a PR.
 * 👍 @mdjermanovic

**nzakas:** Okay, we've agreed to accept this and discuss further details on the issue/PR.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next: https://github.com/eslint/eslint/issues/20294

**nzakas:** > **TSC Summary:** This issue proposes adding a new rule that warns when deprecated rules scheduled for removal are used. The author suggests warning when the following configuration appears in a configuration file:
> 
> rules: {
>     semi: ['error', 'always', { 'omitLastInOneLineBlock': true }], // Warning here
> }
> 
> **TSC Question:** Should this proposal be accepted?

**fasttime:** I'm 👎 on this as a core rule

**mdjermanovic:** That info is already available to formatters and API consumers, so one could make a custom formatter that's outputs the requested output

**nzakas:** Maybe 👎? 😄

**fasttime:** Thanks, fixed!

**mdjermanovic:** The only thing a formatter couldn't do is to alter the exit code, but I doubt it would be desirable to fail linting if there are deprecated rules.

**nzakas:** I'm 👎 to creating a rule for this. I do think it's worth exploring whether some other feature should be added to ESLint to make it easier to know when deprecated rules are in use.

**mdjermanovic:** I'm definitely not in favor of this as a core _rule_. I'm also slightly not in favor of this as a new core feature because this info is already available to formatters/API so the desired output can already be achieved with existing features.

**nzakas:** Creating a custom formatter is a good workaround and I think there's still a larger question of what would it look like to have something built into the core.

**fasttime:** It looks like the author themself was actually looking for a way to know when some deprecated features (not just rules) are used, and that would be useful, but not as a core rule.

**mdjermanovic:** That would be, I think, a CLI-only feature

**mdjermanovic:** Because API already provides this info

**nzakas:** That could be. For now, let's say that we're not going to add a core rule for this but we can continue the conversation?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Yes, definitely not * rule *

**nzakas:** Next: https://github.com/eslint/eslint/issues/20212

**nzakas:** > **TSC Summary:** A proposal to simplify maintenance by transitioning specific ESLint packages from dual ESM/CJS formats to ESM-only.
> 
> **TSC Question:** Does the TSC approve this change in principle? Since the required Node version already supports `require(ESM)`, is it necessary to consider it a breaking change?

**fasttime:** That makes the most sense for plugins.

**mdjermanovic:** I think it's safe to switch language plugins to ESM-only

**mdjermanovic:** As for dependencies of ESLint, maybe only those that don't have dependencies we don't control

**fasttime:** For `@eslint/js` it would be a breaking change, we could do it in v11 if we switch `@eslint/js` to a full language-plugin.

**nzakas:** `@eslint/markdown` is already ESM-only

**nzakas:** I'm 👍 to changing `@eslint/json` and `@eslint/css` to ESM-only.
 * 👍 @mdjermanovic, @fasttime

**fasttime:** For `@eslint/rewrite`, I'm not sure. Some packages in it are already ESM only.

**nzakas:** I think any new packages should be ESM-only as well
 * 👍 @fasttime

**nzakas:** The ones in `rewrite` are mostly both ESM and CJS.

**mdjermanovic:** I agree, but given the resolution we had on `require(esm)`, that shouldn't apply to packages intended to be dependencies of ESLint if they have dependencies we don't control

**mdjermanovic:** At least while ESLint itself is still CJS

**nzakas:** I think we need to be pragmatic about the approach. Realistically, is there a reason that a parser package will add top-level `await`?

**fasttime:** This is already accepted for `@eslint/json`: https://github.com/eslint/json/issues/196

**mdjermanovic:** Feels very unlikely

**nzakas:** In the interest of time, shall we say we'll move forward with the JSON and CSS plugins and we'll defer decisions on other packages for now?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, next:
https://github.com/eslint/json/pull/136

**nzakas:** > **TSC Summary**: The blocker for this PR is deciding how to handle comments in JSONC/JSON5 files when auto-fixing sorting. There is currently no definitive team consensus on this change.
> 
> **TSC Question**: Which option should we choose from the following, and what common design convention was used when implementing auto-fix in JavaScript rules such as [`sort-vars`](https://eslint.org/docs/latest/rules/sort-vars) or [`sort-imports`](https://eslint.org/docs/latest/rules/sort-imports)?
>     1. Keep current behavior - Accept that comments become misleading after sorting
>     2. Don't autofix when comments are present - Safe but limits usefulness
>     3. Swap members with their attached comments - Preserves documentation but complex to implement

**mdjermanovic:** Regarding the common design convention, I don't think we have such fixable rules in the core

**nzakas:** No we don't

**mdjermanovic:** So there are no conventions 🙂 I think most of the rules that might break comments just don't autofix when there are comments in the range

**fasttime:** That would be option 2.

**mdjermanovic:** Yes, that's the safest and also easiest to implement. Although, it does limit usefulness

**nzakas:** Yup, just verified. Comments are disregarded. So option 2 it is?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** But generally it's difficult and error-prone to figure out where comments belong to

**nzakas:** One second: `sort-vars` actually does autofix when comments are present and just doesn't move the comments.

**nzakas:** Would it be better to align with that?

**mdjermanovic:** Ah, I misread that as sort-keys

**mdjermanovic:** Well, I don't think it would be desired outcome to leave comments where they were

**nzakas:** `sort-keys` in core does not autofix

**nzakas:** `sort-vars` does

**nzakas:** so we already have an inconsistency

**nzakas:** So I guess the question is which rule do we want `json/sort-keys` to be consistent with? 😆

**nzakas:** I'm still fine with option 2 -- just want to make sure we're clear on what we're agreeing to

**mdjermanovic:** I think option 1 ( Accept that comments become misleading after sorting) would be considered a bug by users

**mdjermanovic:** And I'm not sure if option 3 is feasible, so I'm mostly in favor of 2.

**fasttime:** It's a bit questionable whether leaving comments in place while sorting vars is a good idea, so I'd be still in favor of option 2.

**nzakas:** Okay, then option 2 it is.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Quick time check: It's now top of the hour and we have yet to discuss v10 and contributor pool. Shall we hold off on the remaining "tsc agenda" issues and PRs until next meeting and pivot to v10?
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Sounds good to me, I don't see anything critical for today in remaining issues

**nzakas:** Okay, let's pivot because I'm running out of time. 🙂

**nzakas:** https://github.com/orgs/eslint/projects/6

**nzakas:** It looks like we've got everything merged for an RC?

**mdjermanovic:** Except the `eslint-scope` types change, if it's considered a breaking change?

**nzakas:** Is this one a blocker?
https://github.com/eslint/js/issues/708

**fasttime:** I don't think so, but it could break compatibility with 3rd party plugins

**fasttime:** And it needs a 2nd review

**nzakas:** By third party plugins, do you mean typescript-eslint because they have a custom scope implementation?

**fasttime:** Yes, or plugins that depend on `@types/eslint-scope` like html-eslint, because built-in types override `@types` types by default.

**fasttime:** Actually I'm not sure if html-eslint has a dependency on `@types/eslint-scope`, but it uses its types because it's a TypeScript repo.

**nzakas:** Okay, I need to wrap up. Do we need to wait for this to be released before we do an RC?

**nzakas:** (I have five minutes left before I need to go)

**fasttime:** I'd say it's not a blocker.

**nzakas:** That's my feeling as well. I generally don't regard type changes the same as functional changes.

**nzakas:** We can always do a second RC for sanity sake with these changes.
 * 👍 @mdjermanovic

**fasttime:** Sounds good.

**nzakas:** Okay, we've decided to move forward with the first RC tomorrow.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any volunteers? 🙂

**fasttime:** I can do it if noone else is available.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**nzakas:** Sorry, I need to run. If you want to do contributor pool without me, please feel free. Otherwise, we can do it offline.

**mdjermanovic:** We could do it offline
 * 👍 @fasttime

**fasttime:** Thanks 👋  Take care

**nzakas:** Thanks!

**mdjermanovic:** As for the release, I think we'll only have the `eslint` package?

**fasttime:** 'm seeing a lot of packages tagged with autorelease, but not sure what needs a release: https://github.com/pulls?q=org%3Aeslint+is%3Apr+label%3A%22autorelease%3A+pending%22

**mdjermanovic:** Ah, we had some bug fixes in `@eslint/core`

**mdjermanovic:** Then, we could release eslint/rewrite too?

**fasttime:** Maybe we should update `@eslint/core` and `@eslint/plugin-kit`

**fasttime:** I can release `eslint/rewrite` tomorrow before the ESLint release

**mdjermanovic:** Sounds good to me

**mdjermanovic:** `espree` had types added, but we could release it along with `eslint-scope` when it's ready
 * 👍 @fasttime

**mdjermanovic:** i.e., not tomorrow

**fasttime:** Okay. Is there anything in particular that needs to be regarded when doing an RC release?

**mdjermanovic:** Since we've come to the RC stage, maybe we should release `@eslint/js` too?

**fasttime:** Yes, makes sense. That would be version `10.0.0-rc.0` I guess, like ESLint.
 * 👍 @mdjermanovic

**mdjermanovic:** Then, when releasing `@eslint/js`, `RELEASE_TYPE` should be `rc`
 * 👍 @fasttime

**fasttime:** Okay. I'm alone at home tomorrow, so if you prefer I can schedule the release to a time of the day when you are available.

**mdjermanovic:** I won't be available after 6pm CET

**mdjermanovic:** If you can start earlier, e.g., at 4pm?

**fasttime:** Okay, 4pm CET.

**mdjermanovic:** Great, i'll be online at 4pm CET

**fasttime:** Thanks! I still hope to manage this on my own 😄

**mdjermanovic:** There's nothing particular for an RC, just both release_types should be `rc` and branches `main`

**fasttime:** Alright

**fasttime:** Is there anything else we should discuss?

**mdjermanovic:** Nothing from my side for today

**fasttime:** Same for me. Then let's call it a meeting. Thanks!

**mdjermanovic:** Thanks! 👋  see you tomorrow

**fasttime:** And thanks @sam3k_ for the notes
