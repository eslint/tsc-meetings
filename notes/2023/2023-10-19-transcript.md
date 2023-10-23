# 10/19/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Let's jump right in

**nzakas:** First agenda item: https://github.com/eslint/eslint/pull/17644

**nzakas:** > **TSC Summary:** This PR changes the default behavior of the ESLint CLI when no file arguments are passed in. In eslintrc mode, the CLI now reports an error; in flat config mode, the CLI now assumes `.` as the file argument. This may cause a problem for people trying to use the CLI as part of a [precommit check](https://github.com/eslint/eslint/issues/14308#issuecomment-1571995912). Before this change, the CLI would exit with a zero exit code when no file arguments were present, after this change, it will either error or lint every file, neither of which seems desirable.
> 
> **TSC Questions:**
> 
>     1. This now looks like a breaking change, should we add it to v9? (This was originally intended to be completed with the [flat config work](https://github.com/eslint/eslint/issues/14308#issuecomment-944829863), so it should have been included?)
> 
>     2. Do we want to provide a way to mimic the current behavior? Jest has a `--passwithnotests` CLI flag that we could mimic for this purpose.

**mdjermanovic:** First, the current behavior isn't good in my opinion, so we should definitely change it. While it may be useful for some use cases, it's dangerous otherwise.
 * 👍 @nzakas

**mdjermanovic:** It does look like a breaking change

**mdjermanovic:** We could leave eslintrc mode change for v9 and do the flat config mode change now, or leave both for v9

**mdjermanovic:** You're suggesting that we leave both modes changes for v9?

**nzakas:** That's correct.

**mdjermanovic:** Makes sense to me.

**mdjermanovic:** What will be the new behavior? Like in the PR, throw error in eslintrc mode, lint `.` in flat config mode?

**nzakas:** Yes

**mdjermanovic:** Would it make sense to have the same behavior in both modes?

**mdjermanovic:** Since it's already a breaking change

**nzakas:** I seem to recall there was a reason why we didn't do that in eslintrc mode, but can't find a reference to it now.

**mdjermanovic:** In the eslintrc mode, `eslint .` works the same as in the flat mode I believe, determines lint targets from the config

**nzakas:** the problem is that eslintrc might not have any clear lint targets, and we'd be searching for `.js` files only by default.

**mdjermanovic:** When passed a directory, eslintrc gets extensions from the `--ext` option but also from the config I believe

**mdjermanovic:** That was per this RFC: https://github.com/eslint/rfcs/pull/20

**nzakas:** Just can't find anything, but I'm pretty sure there was a reason we didn't already do it. At this point, with eslintrc on the way out, I'd say let's throw with eslintrc and have the new behavior with flat config as a bit of a carrot to get people to switch.

**mdjermanovic:** Makes sense to me
 * 👍 @nzakas

**nzakas:** So for 1, we have agreed that this should be a breaking change and go into v9
 * 👍 @mdjermanovic

**mdjermanovic:** As for the option, Jest's `--passwithnotests` still tries to run tests?

**nzakas:** It tries to find tests to run, but if it can't, then it exits with a zero code instead of an error.

**nzakas:** https://github.com/eslint/eslint/pull/17644#issuecomment-1768394580

**mdjermanovic:** I think we already have that with `--no-error-on-unmatched-pattern`

**nzakas:** Ooh, forgot about that!

**mdjermanovic:** Maybe we'd like to have an option to pass with no arguments but with no linting attempted?

**mdjermanovic:** That would retain the current behavior

**mdjermanovic:** The current behavior is to do nothing and exit with 0, linting files if they exist wouldn't be equivalent to that

**nzakas:** I think what we want is a flag that says if there are no explicit file arguments then exit with 0.

**mdjermanovic:** Without any linting attempted?

**nzakas:** Correct.

**mdjermanovic:** Alright, that would be a new option

**mdjermanovic:** For convenience for some use cases (e.g., scripts)?

**nzakas:** So basically `eslint` will normally be equivalent to `eslint .`, but we don't want that here. We want `eslint` to not attempt to lint anything but also not error.

**mdjermanovic:** Makes sense to me

**nzakas:** So maybe something like `--pass-on-no-files`?

**nzakas:** Or `--no-error-on-no-files`?

**mdjermanovic:** Since `files` might imply "no files found" (as opposed to no files passed) and the other option uses the term "patterns", maybe `--no-error-on-no-patterns`?

**nzakas:** Works for me as a starting point. I'll add that into  the issue and see what people think.

**mdjermanovic:** Actually, `no-error` might be wrong for the flat mode, as the default is to lint `.` not to throw an error

**nzakas:** Let's follow up on the issue about the naming

**mdjermanovic:** Agreed.

**nzakas:** Okay, for 2 we've agreed to add  a new flag and will workshop the name on the issue.

**mdjermanovic:** Just to clarify, a new flag in both eslintrc and flat config modes?

**nzakas:** Yes

**mdjermanovic:** Agreed.

**nzakas:** All right, let's move on to v9

**nzakas:** Regarding the branching strategy: It appears that there is no easy way to maintain a separate branch for v9, so we've decided not to pursue that.
 * 👍 @mdjermanovic

**nzakas:** Which just leaves the question of how we want to proceed. We generally have three options:

1. What we did for v7 and earlier: Decide when we want to start merging v9 features and stop all v8 features. That means we could have several months without any releases while we work through all the v9 issues.
2. What we did for v8: Keep working on v8 while also working on v9 features. We just don't merge any v9 features until we've got all the PRs lined up.
3. New: Combine 2 and 1 by defining some minimal set of v9 features we want done in order to start merging. At that point, we stop all v8 releases.

**mdjermanovic:** I actually wanted to suggest 3

**nzakas:** That seems reasonable given the number of issues we have for v9

**mdjermanovic:** Agreed.

**nzakas:** I'd suggest, at a minimum, we'd want all the flat-config related changes ready to go.
 * 👍 @mdjermanovic

**nzakas:** We can add a new field to the v9 board to track which issues need to be ready.
 * 👍 @mdjermanovic

**nzakas:** What to call that field? 🤔

**mdjermanovic:** `alpha` as the features necessary for the first alpha release

**nzakas:** Maybe "target" so we can do "alpha", "beta", "rc"?

**mdjermanovic:** Looks like we're thinking in the same direction. We could split the existing field into `alpha` and `beta`?

**nzakas:** By "existing field", you mean "status"? Effectively, we'd need a new column for "Planned-Alpha" and one for "Planned - Beta"?

**mdjermanovic:** I meant the existing column Planned

**nzakas:** Right so, "Planned - Alpha" and "Planned - Beta"?
 * 👍 @mdjermanovic

**mdjermanovic:** Yes, "Planned-Alpha" and "Planned - Beta" columns
 * 👍 @nzakas

**nzakas:** Okay, done.

**nzakas:** Let's go through the issues quickly and make they're in the right column
 * 👍 @mdjermanovic

**nzakas:** So let's do a reaction of 🅰️  for alpha and 🇧  for beta.
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17524
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** (This one already has a PR.)

**nzakas:** https://github.com/eslint/eslint/issues/17457
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17381
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17446
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15735
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** This one has a PR ready for review

**nzakas:** But not important to land in alpha

**nzakas:** https://github.com/eslint/eslint/issues/15104
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16879
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/pull/16196
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16574
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16908
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15820
 * 🅰️ @nzakas, @mdjermanovic

**mdjermanovic:** Yeah, that's end-user facing change

**nzakas:** https://github.com/eslint/eslint/issues/14744
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** Would like to get rule APIs squared away early
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/14709
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15466
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17488
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15261
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/16450
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/15576
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17520
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17540
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17579
 * 🇧 @nzakas, @mdjermanovic

**mdjermanovic:** (yet to be determined whether we want to change that in v9)
 * 👍 @nzakas

**nzakas:** https://github.com/eslint/eslint/issues/16999
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17595
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17596
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/13481
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/issues/17622
 * 🇧 @nzakas, @mdjermanovic

**nzakas:** Okay, we've now got 12 issues for alpha and 13 for beta, much more manageable

**mdjermanovic:** I see 13:14

**nzakas:** Hmmm

**mdjermanovic:** Looks like a fair split either way 🙂

**mdjermanovic:** You see 12:13?

**nzakas:** I tried reloading and I'm still at 12-13

**mdjermanovic:** Weird

**nzakas:** oh wait

**nzakas:** Looks like I somehow ended up with a label filter

**nzakas:** So there's one more: https://github.com/eslint/eslint/issues/14308
 * 🅰️ @nzakas, @mdjermanovic

**nzakas:** Okay, now we are all set. 👍
 * 👍 @mdjermanovic

**nzakas:** So once we've got those 13 issues with PRs ready, we can switch to v9 mode.
 * 👍 @mdjermanovic

**nzakas:** And if any that are listed for beta happen to be ready, we can always include those too.

**mdjermanovic:** Of course

**nzakas:** This is probably worth doing a blog post about just to set expectations around v9
 * 👍 @mdjermanovic

**nzakas:** So I'll take that as an action item, along with the blog post about formatting rule deprecations.
 * 👍 @mdjermanovic

**nzakas:** Any other topics, v9-related or otherwise?

**mdjermanovic:** Yes, the latest `object-schema` release 2.0 seems to be breaking using error templates. If we don't sort that out until tomorrow's release, what do you think about pinning `config-array` to the previous v0.11.11

**mdjermanovic:** Related comment: https://github.com/eslint/eslint/pull/17664#issuecomment-1771457180

**nzakas:** I'll take a look at it tomorrow morning.
 * 👍 @mdjermanovic

**nzakas:** Are you able to do the release tomorrow?

**mdjermanovic:** Yes

**nzakas:** And would that be around this time?

**mdjermanovic:** Maybe a bit earlier

**mdjermanovic:** about the time of this meeting's start

**nzakas:** Okay perfect, that gives me plenty of time
 * 👍 @mdjermanovic

**nzakas:** I'll have an update on that PR long before that time
 * 👍 @mdjermanovic

**nzakas:** But yeah, needed to wrap errors because some errors are immune to reseting their `message` property and throws an unrecognizable error. I'm sure there's a way to fix that.

**nzakas:** So looks like just `eslint` and `@eslint/js` tomorrow?

**mdjermanovic:** Yes

**nzakas:** All right, did I miss anything else for today?

**mdjermanovic:** I think we didn't have any other topics marked with TSC agenda

**nzakas:** Nothing officially listed.

**mdjermanovic:** And too early for the contributor pool, so I think we covered everything

**nzakas:** All right, then let's call it. Thanks, and stay safe. (Thanks @sam3k_ for the notes -- don't forget to remove the "tsc agenda" label and add an update comment on those issues)

**mdjermanovic:** Thanks 👋
