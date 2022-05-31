# 05/19/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** Looks like we are at full strength, so let's get started

**nzakas:** @btmills are you good to take notes?

**btmills:** yep

**nzakas:** thanks!

**nzakas:** Looks like we don't have any issues labeled for today. Is there anything anyone wants to bring up?

**nzakas:** I'll take that as a no 🙂

**nzakas:** Then I'll go through the website redesign project as it stands

**nzakas:** Right now we are proxying from /docs and /play to the separate sites. After a bit of hacking at it, it all seems to be working pretty well right now.
 * 🎉 @btmills, @mdjermanovic

**nzakas:** I announced the new playground on Twitter yesterday and flipped that repo public, and we've been getting some good feedback.

**nzakas:** I'm continuing to iterate on the docs site. I spent a bunch of time switching from the async fetch-on-build metadata for further reading links to use a data file that is automatically generated on precommit.

**nzakas:** Which is this PR: https://github.com/eslint/eslint/pull/15890

**nzakas:** That will speed up build times and also let us tweak the info for any links that don't quite work correctly.
 * 👍 @mdjermanovic

**nzakas:** For the nonsecure resources, I changed the logos to use protocol-relative URLs to get around the mixed content type errors.
 * 👍 @btmills

**nzakas:** And I'm setting up a workflow that will publish the docs site only on releases and not on every merge: https://github.com/eslint/eslint/pull/15894

**nzakas:** I noticed that the docs site UI isn't actually the latest from Sara...I must have copied from an older commit, so I still need to update that.

**nzakas:** Next up: I need to get the main site Google Analytics and Carbon Ad onto the docs site instead of its own codes.

**nzakas:** And there is going to be continuing cleanup along the lines of the further reading links and related rules stuff, where we'll need to update all the docs to use the new format for things, but I don't see that as a blocker.

**nzakas:** Overall, my hope is that we will be able to flip the switch on the new site for the release two weeks from tomorrow.
 * 🎉 @btmills, @mdjermanovic

**nzakas:** We also now have four translation sites: http://es.eslint.org, http://hi.eslint.org, https://ja.eslint.org, and https://new.cn.eslint.org.

**nzakas:** And there's a pull request for French already open

**btmills:** once we have a handful of those live for a while, it'll be really cool to see how much traffic those bring in as a proxy for additional people we weren't able to reach before

**nzakas:** For sure. I've added both of you to the google analytics account (eslint.org domain) so you can check any time.
 * 🚀 @btmills

**nzakas:** That's about it for the updates there. Any questions?

**mdjermanovic:** Rule docs are missing some sections from the current site, namely Version and Resources. Are we planning to add them or drop?

**nzakas:** Add them, for sure

**nzakas:** I want to add those into the frontmatter, too

**mdjermanovic:** And info about recommended/fixable/suggestions is missing too

**nzakas:** Yep! I'm making my way through all that stuff.

**nzakas:** This is some of the long tail of tweaks and things I'll need some help adding to the rules docs
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, one last chance to bring up any other topics.
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay. Just a reminder that I'm planning on mostly being offline next week while my parents are visiting. I may pop on here and there but generally will be off.
 * 👍 @btmills

**nzakas:** Let's talk about the release tomorrow. Any volunteers?

**mdjermanovic:** I can

**btmills:** thanks @mdjermanovic

**nzakas:** Thanks!

**btmills:** as a general rule, if anything ever comes up and you're unable to do it on Friday, I'm _usually_ available to do it Saturday
 * 👍 @mdjermanovic

**mdjermanovic:** That will be `@eslint/eslintrc` and `eslint`
 * 👍 @nzakas, @btmills

**nzakas:** Hopefully the new docs site workflow will deploy along with the release. You'll be able to tell because new.eslint.org/docs will show the new version number.

**mdjermanovic:** I have two PRs ready for review if anyone has time before the release

**nzakas:** I'll be sure to check them out

**mdjermanovic:** Thanks!

**mdjermanovic:** I'll certainly merge this before the release

**nzakas:** If that is all, then we can call this meeting closed. Thanks everyone

**mdjermanovic:** Thanks! 👋

**btmills:** 👋 take care (and enjoy a week mostly offline, @nzakas)!

**nzakas:** Thanks!
