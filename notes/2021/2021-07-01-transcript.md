# 07/01/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** We will give @btmills five minutes
 * 👍 @mdjermanovic

**btmills:** 👋

**nzakas:** Welcome!

**nzakas:** All right, we are ready to go. @btmills are you good for taking notes?

**btmills:** yep

**nzakas:** Thank you, sir.

**nzakas:** So it looks like we don't have any issues tagged for today, so we can go through the v8.0.0 status, a couple of agenda items on the TSC meeting issue, the release, and contributor pool for June.

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** I did the Espree release so v8.0.0 is ready and can unblock other items
 * 👍 @mdjermanovic
 * 🎉 @btmills

**nzakas:** I think this one just needs the Espree update at this point: https://github.com/eslint/eslint/issues/14632
 * 👍 @btmills, @mdjermanovic

**nzakas:** This one needs both the Espree update and the eslint-scope update:

**nzakas:** https://github.com/eslint/eslint/issues/14343

**btmills:** I see that @mdjermanovic has approved the eslint-scope PR. I'm mid-review on the latest iteration

**mdjermanovic:** Do we plan to release eslint-scope update in a minor or major version of eslint-scope

**mdjermanovic:** The class fields update

**nzakas:** https://github.com/eslint/eslint-scope/pull/69

**nzakas:** For reference

**nzakas:** I was thinking we'd do it in a major release so we could incorporate the switch to ESM, but no objections if everyone wants to do it in a minor release.

**mdjermanovic:** I'd suggest bundling with the ESM PR for major. `babel-eslint` uses `eslint-scope` and the scope for class initializers looks like a significant change
 * 👍 @nzakas

**btmills:** works for me

**nzakas:** And it looks like the PR is ready now?

**mdjermanovic:** The Class fields PR? Looks good to me

**nzakas:** Awesome.

**btmills:** I haven't finished a review of today's changes, but I'm fine trusting @mdjermanovic's approval

**nzakas:** No hurry. If you want to take the time to review it before we merge, go right ahead.

**btmills:** I'll do that tonight then
 * 👍 @nzakas

**nzakas:** Since the ESM PR for eslint-scope will have to rebase on top of these changes, we probably can't release it until at least next week.

**mdjermanovic:** Shall we do beta or right to the final major release?

**mdjermanovic:** (eslint-scope)

**nzakas:** I'd go right to the major release. We typically don't do prereleases for anything other than ESLint itself. We just did it for Espree this time due to the switch to ESM.

**btmills:** By the same reasoning, should we at least do an rc for eslint-scope?

**nzakas:** I don't think so. With Espree, we just didn't know how the ESM setup would work (or if it would). I feel like we proved the approach with Espree so I don't see much value in going through it for eslint-scope.

**btmills:** all right, final it is

**mdjermanovic:** 👍

**nzakas:** All right, let's go though the other issues that aren't quite ready yet and see where we are.

**nzakas:** https://github.com/eslint/eslint/issues/13398

**nzakas:** PR: https://github.com/eslint/eslint/pull/14594

**nzakas:** This one actually looks ready at this point
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** Looks good to me. The website PR just needs to undo the `rules.yml` change (that was for the preview only)
 * 👍 @nzakas

**nzakas:** https://github.com/eslint/eslint/issues/11815

**nzakas:** PR: https://github.com/eslint/eslint/pull/14617

**mdjermanovic:** That was recently updated, I'll take a look

**nzakas:** Sounds good

**nzakas:** https://github.com/eslint/eslint/issues/14575

**nzakas:** PR: https://github.com/eslint/eslint/pull/14656

**mdjermanovic:** That looks good to me, just needs a small documentation update

**nzakas:** Cool. I'll take a look soon too

**nzakas:** https://github.com/eslint/eslint/issues/13888

**nzakas:** PR: https://github.com/eslint/eslint/pull/13911

**mdjermanovic:** The PR needs some significant but small changes, like a couple of lines. That shouldn't be a problem. The problem is the new package having Ajv as a peer dep

**mdjermanovic:** https://github.com/eslint/eslint/pull/13911#issuecomment-853220115

**nzakas:** I just want to ask this again: is it really worth all of this work to replace something that was mostly working already?

**mdjermanovic:** Hard to tell. The new validations are good, but that wouldn't be the main reason. The maintenance of the old package is concerning

**mdjermanovic:** *old version

**nzakas:** In what way?

**mdjermanovic:** That the Ajv version we're using is no longer maintained

**mdjermanovic:** Ajv 6

**nzakas:** Oh I understand that. But why does that matter?

**mdjermanovic:** It could matter only if some problems occur. But, it's stable

**nzakas:** Yeah, that's what I'm getting at. 🙂 We used it for years without any issues, and I was skeptical of upgrading with breaking changes because of that.

**mdjermanovic:** I wouldn't mind staying on Ajv 6

**btmills:** It feels like we might be increasing the risk of introducing problems by changing the version

**nzakas:** I mean, if it seems like we are getting some benefit, then that's fine. It just seems like we are spending a lot of time on this just to be on the most recent version

**nzakas:** And risking breaking existing rules in the process.

**mdjermanovic:** I think the benefit of the new validations doesn't justify risking breaking rules

**mdjermanovic:** I certainly don't insist on upgrading, if we have more concerns about that than about using Ajv 6, perfectly fine to stay on Ajv 6

**btmills:** One additional concern is that the maintainer has already put in a lot of work for this, including creating an entirely new compat package

**mdjermanovic:** Well, yes 🙂

**nzakas:** Well, the additional package was created due to compatibility problems with the official package. 🙂

**nzakas:** My opinion: this upgrade has turned into a mess, and unless we are going to get some clear value from continuing, I think it's time to abort.
 * 👍 @btmills

**mdjermanovic:** I agree

**btmills:** I can't make a strong argument that we should continue

**nzakas:** Okay, it looks like we've agree to stay on Ajv 6. Do we want to reschedule this for consideration in ESLint v.9.0.0 or do we want to drop it?

**btmills:** I'd say reconsider if we run into an issue with the current version, but don't schedule it for a specific release
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we've decided to abort the Ajv upgrade unless we run into an issue with Ajv 6, at which point we can revisit.
 * 👍 @btmills, @mdjermanovic

**btmills:** @mdjermanovic I normally update issues after the meeting, but since you've been working closely, will you update that one?

**mdjermanovic:** Sure!
 * ❤️ @btmills

**nzakas:** Oh good, for once I don't have to be the bad guy. 🙂

**btmills:** if you're feeling left out, we can probably find something 😆

**nzakas:** Last one: https://github.com/eslint/eslint/issues/14640

**nzakas:** PR: https://github.com/eslint/eslint/pull/14653

**mdjermanovic:** That looks good

**nzakas:** Looks like it depends on a couple other PRs before the tests will pass?

**mdjermanovic:** The failing tests are unrelated. Once we fix that on master, we could close-reopen PR to re-run checks

**nzakas:** Okay, so can we move that to "Ready to Merge"?

**mdjermanovic:** Yes

**nzakas:** Great. Looks like we aren't too far off from v8.0.0.

**nzakas:** Any other concerns before we move on?

**mdjermanovic:** Not from me

**btmills:** none here

**nzakas:** All righty, we will move on.

**nzakas:** Leftover from last week, here were some budget item ideas I'll throw out for thoughts:

**nzakas:** 1. Website redesign
2. Pay people to write blog posts
3. Have a t-shirt design contest

**nzakas:** Website redesign - I've wanted to do this for a long time. Kai and I started a while ago but then the designer disappeared.

**nzakas:** The others are self-explanatory I think 🙂

**btmills:** Having a budget lets us use an agency and avoid the disappearing problem (well, usually)

**nzakas:** Exactly

**btmills:** I think that's well worth pursuing. We're not at a stage yet to know what we'd be approving, but in the abstract, I'm positively inclined to allocating budget to rebuilding the site

**nzakas:** My high-level thinking is: do an information architecture audit, get a recommendation for how to better organize the docs, then move on to visual design.

**btmills:** That sequencing makes sense. Do you have anybody in mind, or is step 0 finding someone who's done a good job on similar projects?

**nzakas:** I don't, but I have an idea of some people to ask.

**nzakas:** Overall, I'd expect an effort like this to cost around $20,000, and I think it would be well worth it.

**btmills:** That's similar to what I had in my head

**btmills:** Are you able to run point on it, or would you want one of us to second chair?

**nzakas:** Yeah, I can run it. I'll probably wait until after v8.0.0 is out the door to avoid splitting my time too much.

**nzakas:** But I can definitely start asking around for leads

**btmills:** Certainly. Maybe finish up flat config too? That'll change a good chunk of how we present things, and it really clears your plate

**nzakas:** Yeah, I think I can do that in parallel since that is primarily online and the website stuff will be primarily offline to start.

**nzakas:** Lots of phone calls I'd imagine

**btmills:** Sounds good to me

**nzakas:** @mdjermanovic ?

**mdjermanovic:** Sounds good to me

**nzakas:** All right, we've decided to allocate $20,000 for website redesign. I'll create the budget item and get started as I'm able.
 * 👍 @btmills, @mdjermanovic

**nzakas:** For the others, I'd love to start getting more activity on the blog, which is why I think paying people to write ESLint-focused blog posts makes sense. Most sites offer between $250-350 per contributor post, so I was thinking $300 would make it enticing for contributors. Thoughts?

**nzakas:** (Note; We would finally need to add an author field to the blog posts, but I think that's been a long-time coming anyway.)

**btmills:** To help me wrap my head around the idea, what sort of posts do you think would be good fits for this?

**nzakas:** I'm thinking topics ranging from "What is an AST?" to "How we built our ESLint plugin" to discussions around best practices and maybe even notes from the TC39 meetings 🙂

**mdjermanovic:** Sounds good

**btmills:** Lots of options then. I like it

**nzakas:** Yeah. And any of us could write them, too, it's just we usually don't have the time.

**nzakas:** Okay, to move things along, do we agree to offer to pay people to write posts on the blog?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Agreed. I'll take the action item of writing up how that will work and setting up the budget item.

**nzakas:** And the last one is kind of quirky: what do you think of a t-shirt design contest? Just seemed like maybe something fun to do. $500 to the winner plus the design is made into a real t-shirt. Maybe $150 for two runners-up.
 * 👍 @mdjermanovic

**nzakas:** We actually do have a shop at https://eslint.threadless.com, in case you were unaware

**nzakas:** It's tied to our OC account automatically

**btmills:** Sounds like fun!

**nzakas:** Okay, looks like we have decided to do a tshirt contest. 🙂 Once again, I'll follow up with budget item and rules recommendations.

**nzakas:** I realize we are running short on time, can everyone hang around for a few more minutes?

**mdjermanovic:** sure

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** Next item:

**nzakas:** > do we want to continue to support generator-eslint? It hasn’t been updated in a while and there are a bunch of open PRs.

**btmills:** I'd say archive the repository

**nzakas:** So bmish found it and fell in love with it, so opened up like 8 PRs against it.

**nzakas:** https://github.com/eslint/generator-eslint/pulls

**btmills:** Oh wow. Well, does he want to maintain it?

**nzakas:** He seems interested in doing so. I'm willing to give him a shot since he seems pretty enthusiastic about it.

**btmills:** Even better

**nzakas:** I just wanted to make sure we were in agreement before starting to review and merge those PRs.

**nzakas:** Yeoman is mostly a dead platform at this point, so I do envision us creating something new at some point, but probably not in the immediate future.

**btmills:** Yeah, been a long time since I saw anyone use it

**btmills:** But if we have someone who wants to take on generator-eslint, I'm happy to give them a commit bit

**nzakas:** I figured let's merge these PRs, do a release, and then see where things stand.
 * 👍 @mdjermanovic

**btmills:** works for me

**nzakas:** All right, we have decided to continue supporting generator-eslint so long as bmish is willing to commit time to it.

**nzakas:** Last topic: contributor pool for June!

**nzakas:** snitin315 (last month before committer pay kicks in for July)
 * 👍 @btmills, @mdjermanovic

**nzakas:** bmish
 * 👍 @btmills, @mdjermanovic

**nzakas:** jacknapis for Discord again
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** brettz9 for the 3 ESM PRs
 * 👍 @nzakas, @btmills

**mdjermanovic:** ota-meshi for https://github.com/eslint/eslint/pull/14653 including the work on regexpp
 * 👍 @nzakas, @btmills

**mdjermanovic:** JoshuaKGoldberg https://github.com/eslint/eslint/pull/14617
 * 👍 @nzakas, @btmills

**mdjermanovic:** A-Katopodis https://github.com/eslint/eslint/pull/14730
 * 👍 @nzakas, @btmills

**nzakas:** That seems like a good group

**nzakas:** So let's set the market here. It seems like brettz9 probably did the most work, so would we say $400?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, how does this look?

**nzakas:** brettz9 - $400
snitin315 - $200
ota-meshi - $200
bmish - $100
jacknapis - $100
JoshuaKGoldberg - $100
A-Katopodis - $100
 * 👍 @btmills, @mdjermanovic

**nzakas:** I realize that's over budget by $200 but a lot of people did great work in June.

**mdjermanovic:** Looks good to me

**btmills:** For a month like this, I'm excited to go over budget in that category

**nzakas:** All right, I'll let them all know.

**nzakas:** Last topic: the release tomorrow. Any volunteers?

**mdjermanovic:** I'd like to do the release tomorrow
 * 👍 @nzakas, @btmills

**btmills:** I could do it sometime Saturday

**mdjermanovic:** I'll probably won't be available for the next three ones

**btmills:** thanks for the heads up

**nzakas:** All right, thanks everyone! Time for me to rest.

**mdjermanovic:** Thanks!

**btmills:** 👋 thanks!
