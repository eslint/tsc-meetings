# 01/25/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Pulling everyting up...

**nzakas:** (A bit under the weather today so a little slower than usual.)

**nzakas:** We have one issue flagged for the meeting and another I forgot to flag before now, so I'll just add that in 🙂

**nzakas:** https://github.com/eslint/eslint/issues/17974

**nzakas:** **TSC Summary:** This issue seeks to change the default value of `caughtErrors` on `no-unused-vars` to `"all"`. It's currently `"none"`.

**nzakas:** **TSC Question:** Do we want to change this option's default value?

**mdjermanovic:** Yeah, my concern was that this would be, I believe, the first time that the recommended config can't work as-is for everyone

**nzakas:** I guess that depends on what you mean by "work"?

**nzakas:** To me, there's no harm in pointing out that an error object was never used regardless of the ES version.

**mdjermanovic:** Users whose codebases target EcmaScript < 2019 would need to change the options

**nzakas:** Only if they didn't want the warning.

**mdjermanovic:** Yeah, but the warning doesn't imply possible error in older ES

**mdjermanovic:** As the catch variable must be declared

**nzakas:** That's true, but we're in 2024 now. The chances that someone is using, say, ES2018 is pretty slim. I think our targets are basically `"latest"`, ES5, and ES3, and I'd be willing to bet that the last two are now a vanishingly small percentage of users.

**mdjermanovic:** Okay, from that point of view it may make sense to change the defaults

**mdjermanovic:** Also, some users might prefer to use `caughtErrorsIgnorePattern` and that way explicitly mark those as unused (e.g., `_error`)
 * 👍 @nzakas

**mdjermanovic:** Okay, I don't have a very strong opinion on this. Since you and other team members are in favor of this change, I agree 👍
 * 👍 @nzakas

**nzakas:** Okay, we've agreed to change the default of `caughtErrors` to `"all"`.

**mdjermanovic:** Yes, and that will be a breaking change we can add to the `beta` column

**nzakas:** Just did it. 👍

**nzakas:** Next item:

**nzakas:** https://github.com/eslint/eslint/issues/17966

**nzakas:** > **TSC Summary:** We've made several bug fixes to flat config in the v9 branch that aren't in the v8 branch, which makes it difficult for plugins to support both v8 and v9 at the same time. This issue requests backporting those changes into v8 and then doing one last release in v8. At the moment, we don't have a way to release from any branch other than `main`, and we generate other artifacts (docs, release notes, blog posts) that all assume on branch.
> 
> **TSC Question:** Do we want to backport flat config fixes into v8? If so, how can we go about this in the least disruptive way possible?

**nzakas:** I'll give you some time to catch up on this as I added a bunch of details as to what it would take to do a backport release.

**mdjermanovic:** I'm not opposed to backporting. Technically, seems doable. A downside is that we won't have all the history on the `main` branch anymore

**mdjermanovic:** I _think_ that `eslint-release` might need to be updated. In particular, it seems that some calculations assume that all version tags point to the commits on the current branch.

**nzakas:** Ah good point, for generating the changelog.

**mdjermanovic:** Changing the command that lists tags from `git tag` to `git tag --merged` might do the work.

**mdjermanovic:** I can take a look and test it locally

**mdjermanovic:** Also for calculating the next version, I believe

**nzakas:** would that mess up the changelog for prereleases?

**mdjermanovic:** I think not, but that would need to be tested too 🙂

**nzakas:** (if the most recent release is an 8.x release rather than a 9.0.0-alpha release)

**mdjermanovic:** We'd retrieve the tags in a way that eslint-release thinks that a 9.0.0-alpha release is the latest

**nzakas:** ```
--merged [<commit>]

    Only list tags whose commits are reachable from the specified commit (HEAD if not specified).
```

**nzakas:** For the record 🙂

**nzakas:** Do you want to take the action item to investigate that?

**mdjermanovic:** Yes, I'll take that

**nzakas:** Thanks!

**mdjermanovic:** As for Jenkins, a hardcoded `git checkout v8.x` in the script could do the work 🙂

**nzakas:** Right. I was thinking we could add a dropdown selection for `main` or `v8.x` and then do a `git checkout` against that value, making it easy to add other branches if necessary.

**mdjermanovic:** We could do that as well

**nzakas:** To pop the stack for a moment: are we in favor of doing a backport release to get the flat config changes into the v8.x line?
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we've decided to do a backport release for the flat config changes.

**nzakas:** Pending technical investigation.
 * 👍 @mdjermanovic

**nzakas:** Do we want to talk about whether to publish to `latest` or something else? Or shall we wait for you to investigate things a bit further?

**mdjermanovic:** That would be a `8.57.0` version?

**nzakas:** Yes

**mdjermanovic:** It will be in `^8` ranges anyway, so `latest` probably makes the most sense

**nzakas:** Based on how that data is fed into stuff, it seems like if we do that before the final v9.0.0 release, everything should work as-is. If we end up doing it after a v9.0.0 release, that could cause issues.

**mdjermanovic:** Users with, for example, `"eslint": "^8.56.0"`  will get the new version anyway

**nzakas:** I'm concerned about people doing `npm install eslint`

**mdjermanovic:** Yes, we'd probably need more updates in our release tools if we would do this after the final 9.0.0

**nzakas:** So shall we target doing the v8.x release prior to the final v9.0.0 release, for our sanity?

**mdjermanovic:** Yes, prior to the final v9.0.0
 * 👍 @nzakas

**nzakas:** Okay, we have decided that the backport v8.x release will happen prior to the final v9.0.0 release.

**mdjermanovic:** And we've agreed on the `latest` tag?

**nzakas:** Yes, we've agreed to publish to the `latest` tag.
 * 👍 @mdjermanovic

**mdjermanovic:** Howe shall we name the branch, `v8.x` literally?

**nzakas:** Yes, that's what I had in mind. We'll also end up using that for the v8.x docs.

**mdjermanovic:** Makes sense to me

**nzakas:** So we'll have `/docs/v8.x/` available after v9.0.0 is released.
 * 👍 @mdjermanovic

**nzakas:** Speaking of v9.0.0, let's take a look at the board:
https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** It looks like we are just waiting on a couple of issues for beta

**nzakas:** https://github.com/eslint/eslint/issues/15104

**mdjermanovic:** We'll add this one too? https://github.com/eslint/eslint/issues/17974

**nzakas:** Could have sworn I just added that...

**nzakas:** oh, accidentally did it on the backport issue instead. 🤦‍♂️

**mdjermanovic:** Well, we could keep the backport issue too 🙂

**mdjermanovic:** Since it is indeed planned for before v9

**nzakas:** It's not blocking for the beta, though

**mdjermanovic:** True

**mdjermanovic:** What about this one, it also seems like a breaking change: https://github.com/eslint/eslint/issues/18016

**nzakas:** Do we typically consider incremental changes to `RuleTester` as breaking?

**mdjermanovic:** Typically yes

**mdjermanovic:** I think all new checks have been added in major versions

**nzakas:** Okay, I'll add it in.

**mdjermanovic:** While at that issue, can we safely assume that any `{{ ... }}` found in messages were intended to be placeholders

**mdjermanovic:** As that's what this check targets, `{{ ... }}` in messages as an indicator of forgotten data

**nzakas:** It seems likely that those are a mistake.

**nzakas:** Trying to look through the code to see how we hydrate those fields

**mdjermanovic:** That would be somewhere in report-translator I believe

**mdjermanovic:** https://github.com/eslint/eslint/blob/main/lib/linter/interpolate.js

**nzakas:** Yep.

**nzakas:** So based on that comment, it looks like we do allow unmatched `{{ }}` patterns

**nzakas:** Let's move this back onto the issue to hash out.
 * 👍 @mdjermanovic

**mdjermanovic:** Yes, that doesn't produce a runtime error

**nzakas:** Not heartbreaking to decide not to do it

**nzakas:** So then what we have remaining for beta:

**nzakas:** https://github.com/eslint/eslint/issues/17974

**nzakas:** https://github.com/eslint/eslint/issues/15104

**nzakas:** https://github.com/eslint/eslint/issues/17579

**nzakas:** That last one, code path analysis, I'd say if that's the last one we have to do and we're stuck, it's okay to hold it over for v10.0.0. No sense in holding up the train for what is probably an edge case that might take a while to figure out.

**nzakas:** I already threw in the towel -- just melted my brain too much.

**mdjermanovic:** I agree to leave that for v10.0.0 if we can't come up with a solution in time
 * 👍 @nzakas

**mdjermanovic:** The RuleTester PR is in progress, I left some comments

**nzakas:** Hmm, looks like it's not linked to the issue.

**nzakas:** This one? https://github.com/eslint/eslint/pull/17654

**mdjermanovic:** Yes. It wasn't linked probably because a part with checking for duplicate tests was extracted into a separate PR, so this one wasn't "closing" the issue at the time

**mdjermanovic:** We can link it now

**nzakas:** Done

**mdjermanovic:** Yup, it had just `refs #15104`, which was correct at the time

**nzakas:** Okay, then it looks like we're in pretty good shape, and maybe could even do the beta in another couple of weeks.

**mdjermanovic:** Yes, seems doable to have first beta in two weeks
 * 🎉 @nzakas

**nzakas:** Anything else to discuss before we talk about the release?

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay, then let's talk about the release.

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**mdjermanovic:** It would be `espree` v10.0.0, and `@eslint/js` and `eslint` v9.0.0-alpha.2
 * 👍 @nzakas

**nzakas:** Sounds good. Everything went fine last time, aside from me forgetting to update `@eslint/js`, so should be straight forward.
 * 👍 @sam3k_, @mdjermanovic

**nzakas:** All right, that's it for today. Thanks! (And thanks @sam3k_ for the notes.)

**mdjermanovic:** Thanks! 👋
