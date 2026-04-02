# 03/19/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Just pulling up notes from last meeting

**nzakas:** Oops, looks like we didn't merge the notes from last meeting. One minute.

**nzakas:** Looks like the only followups were related to the maintenance releases related to `minimatch`, which we did.
 * 👍 @fasttime

**nzakas:** Let's start with statuses. I've been pretty sick the past couple of weeks so mostly triaging issues and PRS. I did reach out to a lapsed sponsor to figure out what happened, as well.

**mdjermanovic:** I was away for about a week due to not feeling well. Then I was mostly reviewing PRs and triaging issues. I plan to start with preparing Ajv regression tests from this weekend.

**fasttime:** I was also mostly busy reviewing issues and PRs. Lots of them the last weeks.
 * 👍 @nzakas

**nzakas:** Let's discuss availability the next couple of weeks. For me it's going to depend on how I'm feeling. I'll target 30 minutes each weekday but can't guarantee anything at this point.

**mdjermanovic:** I hope I'll be able to work around 1.5 hours each day

**fasttime:** I should be able to work 10-12 hours per week.

**nzakas:** RFC Duty:
This week - @mdjermanovic 
March 23 - @nzakas 
March 30 - @fasttime 

(please double-check that)
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have anything flagged for today. Are there any issues, PRs, or topics anyone would like to discuss?

**mdjermanovic:** Nothing in particular from my side for today

**fasttime:** Nothing from my side either.

**nzakas:** Okay, then let's do a quick review of:

- the maintenance releases
- upcoming v9.x EOL
- tsc waiting issues

**nzakas:** I think the big question was how easy it would be to do a maintenance release from `eslint/rewrite`, and it turned out to be fairly easy.
 * 🎉 @mdjermanovic, @fasttime

**nzakas:** This is the PR in question: https://github.com/eslint/rewrite/pull/396

**nzakas:** tl;dr Is that we just had to update a few workflows to work on branches other than `main`.

**nzakas:** So in the future, we can just create a branch name like `release/config-array/v1.x` and basically everything is in place and should work. The releases that aren't on `main` automatically get an npm tag of `maintenance`.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next, upcoming v9.x EOL. The official EOL date is 2026-08-06

**nzakas:** so we should plan on putting up the banner to let people know in May?

**mdjermanovic:** Yes, three months before the EOL
 * 👍 @nzakas

**mdjermanovic:** That would be on 2026-05-06
 * 👍 @nzakas, @fasttime

**mdjermanovic:** Banners should be up on `eslint.org` and `eslint.org/docs/v9.x/`

**nzakas:** Right

**mdjermanovic:** The code is already there in repos/branches, we should just add it to `base.html`.

**mdjermanovic:** By add I mean include the component
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, let's take a quick look at the tsc waiting issues/pRs

**nzakas:** https://github.com/eslint/rewrite/issues/329

**nzakas:** > I can see how ignoring files listed in .gitignore using the same resolution rules as git would be useful. Personally, I wouldn't be opposed to adding this feature. I'm just not sure whether it belongs in @eslint/compat or in another package such as @eslint/config-helpers. Leaving this here for others to evaluate.

**nzakas:** (from @fasttime )

**fasttime:** The proposal is to generalize the code of `includeIgnoreFile` to make it resolve patterns exactly like in .gitignore files.

**fasttime:** `includeIgnoreFile` is in `@eslint/compat`, but the new utility could be in a different package, as no longer related to eslintrc only.

**nzakas:** So it resolves relative to the `.gitignore` file location instead of cwd?

**mdjermanovic:** Yes, this was never supported in eslintrc

**fasttime:** Yeah, should be relative to the `.gitignore` location.

**nzakas:** I can see that being useful. If we want to do it, I agree it should be in `@eslint/config-helpers`.
 * 👍 @mdjermanovic

**mdjermanovic:** I'm not opposed to accepting this

**mdjermanovic:** Perhaps it could use `basePath` property of config objects

**fasttime:** Then we can mark it as accepted. Probably still a bit of design needed, but that could be discussed in the PR.
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** We should just figure out API design
 * 👍 @fasttime

**nzakas:** Yeah, let's do that on the issue
 * 👍 @fasttime

**nzakas:** We've agreed to accept this proposal for adding a utility function to `@eslint/config-helpers`.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:  https://github.com/eslint/eslint/issues/20474

**nzakas:** The eternal "should we use a package-lock.json" question.

**nzakas:** I don't feel strongly either way. I know when it was brought up before people felt strongly that it was not the right approach to have a `package-lock.json` file.

**mdjermanovic:** I still don't see particular benefits

**fasttime:** If we want to keep getting the latest dependency updates with `package-lock.json`, we'll have to delete it in CI I guess.

**nzakas:** I think the primary benefit is reliably reproducible dev/CI environments. We can question whether that's important for a project like ESLint, but that seems to be the main argument in favor.

**fasttime:** Hm, so having reproducible builds would mean that we'd be no longer getting updates installed as soon as they are published?

**nzakas:** In CI and dev environments, yes

**nzakas:** We'd basically be relying on Renovate to do that.

**nzakas:** Which we kind of are now already I guess.

**mdjermanovic:** Does Renovate update transitive dependencies too when there are no updates in direct dependencies?

**fasttime:** I'm wondering then, a bug like in minimatch v10.2.3 would not surface until dependabot or renovate does the update?

**nzakas:** @mdjermanovic I'm not sure.

**nzakas:** @fasttime yes, that's always been the argument for not using a lock file. Without it, we see CI failing as the first moment and can adjust. With a lock file, we'd not see it until we merged the update PR.

**nzakas:** I asked ChatGPT to summarize the arguments for and against. Here's what it came up with:

With lockfile:
Prioritize deterministic development for maintainers.

Without lockfile:
Prioritize early detection of ecosystem breakage for users.

**nzakas:** Of course, to @fasttime's point, we could kind of thread the needle and include a lockfile but delete it in CI before install.

**nzakas:** (Although that feels kind of messy to me)

**fasttime:** I'd prefer to stay with our current setup not using lockfiles if there are no strong arguments to change that.
 * 👍 @mdjermanovic

**nzakas:** I think the arguments are the same as they've always been. If we are prioritizing early detection of ecosystem breakage, then not having a lock file is the best way to do that.

**nzakas:** It doesn't sound like anyone is arguing in favor of adding a lock file, so it seems like we've agreed not to make a change.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next: https://github.com/eslint/eslint/pull/20584

**mdjermanovic:** For reference, we have recently introduced a policy about ESM-only dependencies: https://github.com/eslint/eslint?tab=readme-ov-file#esm-dependencies

**nzakas:** The question is whether or not upgrading `eslint-plugin-unicorn` should be allowed?

**mdjermanovic:** Since eslint-config-eslint is a package primarily intended for internal use, I think it's fine that this policy doesn't apply to it.

**nzakas:** I agree.

**fasttime:** I also agree.

**mdjermanovic:** I agree too
 * 👍 @fasttime

**nzakas:** Okay, we've agreed that the ESM import rules don't apply to `eslint-config-eslint` because it's intended for own usage only and doesn't pose an ecosystem risk.

**nzakas:** Next: https://github.com/eslint/eslint/issues/20620

**nzakas:** The request is to add `eqeqeq` to `eslint:recommended`. This would be a breaking change.

**fasttime:** I'm not opposed, but maybe this should be discussed when v11 is prepared.

**mdjermanovic:** `eslint:recommended` mostly has rules that catch possible errors and disallow legacy syntax, so this rule wouldn't meet that criteria

**nzakas:** Yeah, I believe it wasn't included initially because it was considered a style preference vs. a best practice.

**nzakas:** I think there's an argument to be made that, at this point, it's considered a best practice and maybe should be added.

**mdjermanovic:** We'd also need to discuss what would be reasonable defaults for this rule to be enabled as recommended

**nzakas:** If there's general interest in exploring this, then I'd suggest we ask those questions on the issue. We have plenty of time before v11 to do so.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'd be in favor of discussing its addition

**nzakas:** Okay, we've agreed to discuss adding `eqeqeq` to `eslint:recommended` in the v11 timeframe.

**nzakas:** That's the last thing marked as "tsc waiting"

**nzakas:** Shall we talk about the release?

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @fasttime

**mdjermanovic:** That would be just `eslint` v10.x I believe

**mdjermanovic:** I don't see any deps of eslint having release PRs at the moment

**nzakas:** Maybe we also want to release `eslint/rewrite` afterwards to get `@eslint/mcp` updated?
https://github.com/eslint/rewrite/pull/399

**mdjermanovic:** Sounds good to me, I'll release `eslint/rewrite` after `eslint`
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, I think that's it for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks 👋

**fasttime:** Thanks, take care!
