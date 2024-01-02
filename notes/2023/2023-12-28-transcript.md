# 12/28/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy 👋

**mdjermanovic:** Hi!

**nzakas:** As expected, looks like we don't have any individual issues or PRs flagged for the meeting, so let's jump right into v9
 * 👍 @mdjermanovic

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** Overall looks like we are in good shape.

**nzakas:** I did add https://github.com/eslint/eslint/issues/17820 to the board because it would be nice to get in for the alpha.

**mdjermanovic:** Yes, most of the task for alpha are done

**nzakas:** I'm working on the remaining flat config tasks today

**mdjermanovic:** What are the remaining tasks for flat config for alpha?

**nzakas:** which is basically swapping `FlatESLint` and `ESLint`, and moving `FlatRuleTester` to be `RuleTester`.

**nzakas:** And then we need to update the migration guide with everything that's been merged

**mdjermanovic:** To rename files?

**nzakas:** files and classes, yes

**mdjermanovic:** Ah, ok. But if we don't manage to finish that, we could still release alpha because those are only internal things?

**mdjermanovic:** Except for maybe that class names might appear in error stacks

**nzakas:** Right, that's why I'd like to get those in for alpha.
 * 👍 @mdjermanovic

**nzakas:** I'd also like to see if we can merge https://github.com/eslint/eslint/pull/17885/. If not, then I think we should at least remove `no-inner-declarations` from `eslint:recommended` for alpha

**mdjermanovic:** Yes, I was thinking the same. If it's not ready to merge, we can extract removing the rule from `eslint:recommended` into a separate PR

**mdjermanovic:** I'll check tomorrow if the PR seems ready, if not then I'll prepare a small PR to just remove the rule from `eslint:recommended`
 * 👍 @nzakas

**nzakas:** For notes clarity, on https://github.com/eslint/eslint/pull/17885/ we have agreed that: 1) we'd like to merge for alpha if ready, but if not 2) we will create a separate PR to remove `no-inner-declarations` from `eslint:recommended` for alpha.
 * 👍 @mdjermanovic

**mdjermanovic:** As for the flat config tasks, do we also need new API docs for alpha.0? https://eslint.org/docs/latest/integrate/integration-tutorial

**mdjermanovic:** Sorry, I meant this one: https://eslint.org/docs/latest/integrate/nodejs-api

**mdjermanovic:** But now when looking at the tutorial, it needs to be updated too 🙂

**nzakas:** Hehe yes, they both need to be updated. I was going to attempt to do that with the filename/classes renaming.
 * 👍 @mdjermanovic

**nzakas:** We do have some ancillary dangling things that we need to update, but I think it's okay to not have ready for alpha.0: 1) Updating `@eslint/create-config` and 2) updating the playground

**nzakas:** We do have https://github.com/eslint/create-config/issues/51 for the first one

**mdjermanovic:** Yes, we didn't use to have playground/demo for prereleases

**nzakas:** I think it's safe to switch the playground over to generate a `eslint.config.js` file as that will work for both v8 and v9

**mdjermanovic:** Hm, yes, maybe we could consider switching the playground to flat config during prereleases

**nzakas:** Makes sense to me. Can you open an issue for that?

**mdjermanovic:** Yes

**nzakas:** Thanks

**mdjermanovic:** What do you think about the timing for alpha.0, can we do it tomorrow?

**nzakas:** I think so, as long as I can finish the filename/class renaming before then.
 * 👍 @mdjermanovic

**nzakas:** I have the `ESLint`/`FlatESLint` stuff mostly done, so we're in good shape. I'll be able to put in an hour tomorrow morning, too.

**mdjermanovic:** So, maybe we could schedule the release time tomorrow, then see if we're ready, and if we're ready then do the release

**nzakas:** That sounds good. I was assuming you'd want to start roughly around the start time of this meeting?

**mdjermanovic:** Yes, that's a perfect time for me

**nzakas:** Okay, I'll be here. 👍
 * 👍 @mdjermanovic

**nzakas:** We should do a final review of the migration guide before starting the release to see if we missed anything.
 * 👍 @mdjermanovic

**nzakas:** For notes clarity: We will plan on starting the release at 4pm EST on December 29th. At that time, we'll review the migration guide and any open PRs necessary for alpha to make a go/no-go decision.

**mdjermanovic:** The biggest change is, of course, switching to the flat config format, but we already have a migration guide for that so we could just link to that guide from the main v9 migration guide document https://eslint.org/docs/latest/use/configure/migration-guide

**nzakas:** Yeah, for both flat config and plugins, we already have migration guides that we can point people to.

**nzakas:** Tangentially related, is it important to get that `eslint-scope` change merged for alpha.0?

**nzakas:** https://github.com/eslint/eslint-scope/issues/59

**mdjermanovic:** I think not

**mdjermanovic:** But we could aim to get that change in the next release (alpha.1 , or if the next release happens to be beta, then beta.0)

**nzakas:** Sounds good. I would like to get it in before the final v9.0.0 release

**mdjermanovic:** That's for ESLint, but since the `eslint-scope` is a separate package that can be and is used outside ESLint, for that package itself is better to release the change in x.0.0

**mdjermanovic:** Yes, we should aim to finish that change in `eslint-scope `before the final eslint v9.0.0 release, ideally as soon as possible
 * 👍 @nzakas

**nzakas:** Okay, any other things to discuss for tomorrow (or otherwise)?

**mdjermanovic:** Nothing in particular. The tasks related to the release infrastructure are done I believe, so that should be good for tomorrow

**nzakas:** Well this will be a fun experiment. 🙂

**nzakas:** First major release with the new docs site

**mdjermanovic:** Hopefully nothing will break, there have been really a lot of changes since the last major release

**nzakas:** That's just part of the fun.

**nzakas:** I think we should hold off on contributor pool considering all the PRs we might be merging tomorrow

**mdjermanovic:** Agreed

**mdjermanovic:** Though I'll be away 10-17 January. That includes the next meeting date (and unfortunately the next release date)

**nzakas:** We can always do that out-of-band before you leave
 * 👍 @mdjermanovic

**mdjermanovic:** Yes, agreed

**nzakas:** Okay, if there's nothing else, I'll get back to coding.

**mdjermanovic:** Thanks! 👋

**nzakas:** See you tomorrow!

**mdjermanovic:** See you!
