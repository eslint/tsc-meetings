# 12/14/2023 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Apologies for the lateness, let's dig right in.

**mdjermanovic:** No problem

**nzakas:** Okay, nothing flagged for this meeting in particular, so let's jump into v9.0.0 planning

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2
 * 👍 @mdjermanovic

**nzakas:** So overall it looks like we're in good shape. I think everything has a PR in progress aside from the migration guide

**nzakas:** Any items in particular you'd like to discuss?

**mdjermanovic:** Nothing in particular, all tasks planned for alpha seems to have a good progress so far

**nzakas:** What do you think about starting to merge after this week's release?

**nzakas:** Starting to merge alpha PRs, I mean

**mdjermanovic:** Well, it seems possible that we could finish alpha for the next release

**nzakas:** That's also my thinking.

**nzakas:** It'll also be easier to do the last bits of the flat config work (renaming FlatESLint, etc.) once everything else is merged.

**mdjermanovic:** Yes, and longer we wait, more merge conflicts will appear

**nzakas:** Exactly. We've already got a ton of PRs pending, so the sooner we can start merging, the better.
 * 👍 @mdjermanovic

**nzakas:** So it sounds like we've agreed to start merging alpha PRs after we are clear of this week's patch release.
 * 👍 @mdjermanovic
 * 🎉 @nzakas, @mdjermanovic

**nzakas:** One thing that just occurred to me: we need a way to override the "upcoming version" value on the homepage to indicate the next scheduled release will be the alpha and not another minor.
 * 👍 @mdjermanovic

**nzakas:** Can you take that as an action item?

**mdjermanovic:** Yes

**nzakas:** Thanks!

**mdjermanovic:** I'm also not 100% sure if everything is ready for the docs site in regard to `next` version, but we'll have two weeks to doublechek

**nzakas:** Yeah, I was thinking about that too. I think it would be good to have both of us on hand for the first v9.0.0-alpha to make sure we can address anything that breaks quickly

**mdjermanovic:** That's another good reason to target the next release date. I'll be away 10-17 Jan. That includes the release date after the next one
 * 👍 @nzakas

**nzakas:** I'll be offline at least next Monday and Tuesday traveling but should be back by the end of the week.
 * 👍 @mdjermanovic

**nzakas:** So if we stick to our regular schedule, v9.0.0-alpha.0 will be December 29th. I'll be available for sure.

**mdjermanovic:** Me too

**nzakas:** I don't foresee any reason we can't hit that, but we can always let it slide a few days if necessary.

**mdjermanovic:** Yes, I was thinking about that too. If it slides to some day in the next week, it would be okay

**nzakas:** Yeah, it would be nice to get things right even if we're a bit delayed.
 * 👍 @mdjermanovic

**nzakas:** All right, so we'll plan on doing the first v9 release on December 29th and just see what happens. Looks like I'll have a lot of writing to do between now and then. 😂  I wonder if GitHub Copilot might be able to help. 🤔

**nzakas:** Okay, I think we are set for v9. Any other topics you'd like to discuss?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Me either. So let's talk about the release tomorrow. The last release of v8.x. 🥲

**mdjermanovic:** Yes, that one is probably going to be the last one 🙂

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**nzakas:** Looks like just `eslint` and `@eslint/js`?

**mdjermanovic:** Yes, just `eslint` and `@eslint/js`
 * 👍 @nzakas

**nzakas:** All right, thanks! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks! 👋
