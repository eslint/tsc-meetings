# 05/05/2022 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Let's give @btmills a minute to join. Do you want to talk about that Espree PR in this meeting?

**mdjermanovic:** Yes, that would be nice

**nzakas:** Okay. Feel free to add "tsc agenda" to items in the future. 🙂 Just makes it easier to keep track.
 * 👍 @mdjermanovic

**mdjermanovic:** Here are the PRs: https://github.com/eslint/espree/pull/530

**nzakas:** Just labeled it for easier access

**mdjermanovic:** The other one: https://github.com/eslint/espree/pull/544

**nzakas:** Labeled!

**nzakas:** So these are both addressing the same issue, which is adding types into the Espree repo, and we want to decide how to move forward with both, correct?

**mdjermanovic:** Exactly, they both aim to provide builtin TypeScript declarations in the `espree` package

**mdjermanovic:** And they're both doing that by generating type declarations from JSDoc

**nzakas:** Got it

**mdjermanovic:** The newer one additionally enables type checking in our espree source code

**mdjermanovic:** The first one doesn't aim to enable type checking in our source code, and is therefore simpler

**nzakas:** Hey @btmills 👋

**btmills:** Sorry! Totally lost track of time

**nzakas:** No worries, can you take notes? 🙂

**btmills:** least I can do haha

**nzakas:** Thanks!

**nzakas:** We are talking about these PRs:

**nzakas:** https://github.com/eslint/espree/pull/530

**nzakas:** https://github.com/eslint/espree/pull/544

**mdjermanovic:** We could merge `#530` when finished, publish a version with types, and then continue the work on `#544` (which additionally enables type checking) on top of the changes from `#530`

**nzakas:** Are the changes compatible?

**nzakas:** For instance, are we using the same type names and definitions in both?

**btmills:** There will be a transition period as we add and refine types. Assuming we merge the simpler one without type checking first, we might even have some incompatibilities (or at least be lying to the type checker in our type definitions). So as long as we say that type definitions are unstable until announced otherwise, that gives us freedom to iterate, which allows for smaller changes

**mdjermanovic:** I'm not sure, I think not 100% compatible, but when we publish the first version we should keep the types and therefore sync `#544` with `#530`

**mdjermanovic:** We definitely shouldn't publish types and then change them in an incompatible way right after

**btmills:** This would argue for enabling type checking first, getting that finalized, and only then publishing

**nzakas:** I'm not sure it makes sense to merge #530 as-is. It seems like that would just create a ton of merge conflicts with #544 that doesn't seem fair to impose on brettz9

**mdjermanovic:** As-is not, it's not finished

**nzakas:** Still, I don't see the benefit of having a type-syncing task on top of it

**nzakas:** It seems like if #544 is working, that would be the one to merge and just close #530

**mdjermanovic:** There are actually not many benefits of trying to merge both, it would be simpler to continue with just `#544`

**btmills:** There's a doc on a semver approach for types at https://www.semver-ts.org/. If we would like to be immediately following that from the first time we publish types, publishing should be the last step

**btmills:** (That doc is of course one option. We could define our own.)

**nzakas:** It looks like #530 hasn't been updated in three weeks. Given that brettz9 is actively working on #544, it seems best to stick with that one. I don't mind paying srijan-paul for the work on #530 regardless.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, we've decided to close #530 and continue work on #544. Plus, we will pay srijan-paul from the contributor pool for the work on #530.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Any other issues (or PRs) anyone would like to discuss?
 * 🦗 @btmills

**nzakas:** Okay, then a quick update on the site redesign.

**nzakas:** We now have multiple translated sites up: https://es.eslint.org, https://ja.eslint.org, https://hi.eslint.org, and https://new.cn.eslint.org.
 * 🚀 @btmills, @mdjermanovic

**nzakas:** I'm working on getting the playground working from /play. I could have sworn I fixed that last week but it appears broken, so apparently not.

**nzakas:** We merged the docs site into the main eslint repo.

**nzakas:** I'm going to continue working on the docs site so maybe we can start using it in two weeks 🤞

**nzakas:** I have no idea how the versions dropdown is going to work yet, but we can always hide that until we figure it out. 🙂
 * 👍 @btmills, @mdjermanovic

**nzakas:** Then we will need to transition cn.eslint.org over to the new format too, and help them get set up with the new docs site.

**btmills:** there's prior art in a few open source projects

**nzakas:** Yeah, it's usually not pretty. A lot of projects just keep all the old docs in the same repo, but I don't think that's a good way to go. I have ideas. For later.

**nzakas:** Contributor pool time!

**mdjermanovic:** captbaritone for a new rule https://github.com/eslint/eslint/pull/15296
 * 👍 @nzakas, @btmills

**nzakas:** kecrily for helping translate the Chinese site: https://github.com/eslint/new.eslint.org/pull/195
 * 👍 @btmills, @mdjermanovic

**btmills:** for the notes, we already mentioned srijan-paul
 * 👍 @nzakas, @mdjermanovic

**nzakas:** harish-sethuramn continued helping clean up the new site: https://github.com/eslint/new.eslint.org/pulls?q=is%3Apr+author%3Aharish-sethuraman
 * 👍 @btmills, @mdjermanovic

**btmills:** robertotcestari for https://github.com/eslint/eslint/pull/15818
 * 👍 @nzakas, @mdjermanovic

**nzakas:** AlixFachin, ota-meshi, Kiikurage, 38elements, himorishige for helping translate the Japanese site: https://github.com/eslint/new.eslint.org/pull/193
 * 👍 @btmills, @mdjermanovic

**nzakas:** rajendraarora16 for helping translate the Hindi site: https://github.com/eslint/new.eslint.org/pull/199
 * 👍 @btmills, @mdjermanovic

**btmills:** harish-sethuraman for https://github.com/eslint/create-config/pull/27
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Oh yeah, we've got him listed for website help too

**nzakas:** JackNapis for Discord help
 * 👍 @btmills, @mdjermanovic

**nzakas:** FWIW, I don't mind going over our $1000 allotment given the number of folks we have for April
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I think that's all for April. Lots of great contributions.

**nzakas:** Let's talk the release

**mdjermanovic:** I can do the release tomorrow

**btmills:** thankya

**mdjermanovic:** That will be `espree`, `@eslint/eslintrc` (it has dependency on espree) and `eslint`
 * 👍 @nzakas, @btmills

**nzakas:** Anything else to cover before we call it a meeting?

**mdjermanovic:** Nothing in particular from me

**btmills:** to clarify, are we doing $100 for all nominated contributors?

**nzakas:** Doh, right

**nzakas:** So here's what I'm thinking: $300 for AlixFachin, $200 ota-meshi, $200 captbaritone, $150 srijan-paul, $100 everyone else?

**mdjermanovic:** I'd propose $300 for captbaritone, it was a big PR

**nzakas:** Fair enough

**btmills:** sounds reasonable to me

**mdjermanovic:** And I agree with other amounts

**nzakas:** All right, I'll let them know.

**nzakas:** Oh, one last thing: please make sure you're watching the new.eslint.org and play.eslint.org repos. I notice my PRs there doesn't get any attention, so I'm assuming because they're new people aren't watching them. 🙂
 * 👍 @mdjermanovic
 * ✅ @btmills

**nzakas:** Thanks everyone, have a good weekend!

**mdjermanovic:** Thanks!

**btmills:** take care! 👋
