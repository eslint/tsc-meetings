# 03/10/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** @btmills are you set for note taking duties?

**btmills:** yep

**nzakas:** Thank you, sir

**nzakas:** So it looks like we don't have any issues or PRs tagged for today. Does anyone want to introduce any topics for discussion?

**nzakas:** Okay then, I'll just give a website update

**nzakas:** Sara has rolled off and I am just finishing up the homepage animation with Cassie. That may be merged today.

**nzakas:** I'm also working on a way to translate the marketing site easily using data files. I have a prototype working locally already and I'm pretty excited about that. 🙂

**nzakas:** Nitin is working on porting the demo over to play.eslint.org.

**nzakas:** Ideally, we would roll out the new Playground first, then the docs site, then the marketing site. That would let us peel functionality out of the current eslint.org before doing the full swapover.

**nzakas:** We can figure that out for sure once we see what kind of progress Nitin can make

**btmills:** I hadn't thought about rolling it out in reverse order of development, but it makes a lot of sense

**nzakas:** So once play.eslint.org is deployed, I'll start working on getting the new docs site incorporated into the eslint repo. That's a scenario where I would start immediately after a release once we know we don't need a patch on the following Monday. The hope is that it could be done within the ensuing two weeks and be ready for the following release.
 * 👍 @mdjermanovic

**btmills:** is that parallelizable so that we can help?

**nzakas:** Certainly. It's basically going to be a two-step process where the second step is the longest. First step: get the site setup so that it will build and deploy from the eslint repo. Second step: properly format all of the documentation.

**btmills:** Plug and chug a few minutes at a time, cool 👍

**nzakas:** Yeah. I imagine that going through and reformatting all the rules docs will be the most painful part of the process.

**nzakas:** The other pages should go fairly quickly

**nzakas:** Any other questions about the site redesign before I talk about flat config?

**nzakas:** Okay, so flat config is also making progress. As should be obvious from the various issues I opened, I keep coming up with interesting edge cases where the current `ESLint` class tests may not apply with flat config, so I'm just continuing to work through them all and figuring that out.

**nzakas:** Right now I'm working through all of the edge cases related to ignores, as we do some fun things to combine `.eslintignore` with `--ignore-pattern` and config.

**nzakas:** Only 79 failing tests left to get through! 🎉
 * 🎉 @btmills, @mdjermanovic

**nzakas:** So that's all I got. 🙂

**nzakas:** Shall we talk about the release?

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks! Is this just `eslint` this week?

**mdjermanovic:** `eslintrc` included

**nzakas:** ah ok 👍

**mdjermanovic:** We had one fix with `ignore` in `@eslint/eslintrc`
 * 👍 @nzakas

**nzakas:** Couldn't remember when that last PR got in

**nzakas:** Well, unless anyone wants to bring up anything else, we can call this meeting adjourned

**btmills:** nothing from me, take care 👋

**mdjermanovic:** nothing from me too, thanks!

**nzakas:** All right, fastest meeting ever. Stay safe everyone!
