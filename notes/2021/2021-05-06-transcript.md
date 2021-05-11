# 05/06/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Looks like we are at full strength, so let's get started

**nzakas:** @btmills can you take notes?

**btmills:** yep

**nzakas:** Thank you, sir.

**nzakas:** Just as a review, and for the record, Toru is no longer on the TSC. He doesn't have much availability right now and will stay on as a reviewer. He said he's mainly interested in working on features for new syntax going forward, so we will likely see him focusing just on those types of things going forward.

**nzakas:** And one more for good measure: going forward. 🙂
 * 😆 @btmills

**nzakas:** First agenda item is to review the v8.0.0 board and see if anything is blocked or just not progressing.

**nzakas:** https://github.com/eslint/eslint/projects/8

**mdjermanovic:** https://github.com/eslint/eslint/issues/13654 needs an RFC
 * 👍 @nzakas

**nzakas:** I was planning on doing an RFC for that, but happy to let someone else if there's interest.

**nzakas:** Okay, I'll plan on doing that.

**mdjermanovic:** Same for https://github.com/eslint/eslint/issues/13888

**btmills:** `exports` may be contentious, so I'm happy to let you take it

**nzakas:** Hehe, I am not afraid of upsetting people. 🙂

**nzakas:** @mdjermanovic what's the concern around the upgrade?

**mdjermanovic:** New validations, and dropping support for the schema version we're using now

**mdjermanovic:** We can easily update everything in core rules, but plugins are concern

**mdjermanovic:** I left some comments on the PR

**mdjermanovic:** I left some comments on the PR

**nzakas:** Which PR is that?

**mdjermanovic:** https://github.com/eslint/eslint/pull/13911

**btmills:** Do we have someone working on a PR for https://github.com/eslint/rfcs/pull/34 ? I thought we did, but I'm not finding it

**mdjermanovic:** I think we had a PR for step 1 only

**btmills:** Ah, I was thinking of https://github.com/eslint/eslint/pull/12397, which I closed because it was the old approach

**mdjermanovic:** But we decided to do the step 2 only

**nzakas:** Hold on, let's focus on Ajv until we come to a conclusion

**nzakas:** So it seems like the main issue is that there could be plugin schemas that are valid now but would not be valid when we upgrade, is that correct?

**mdjermanovic:** We have an assignee on the issue (aladdin-add), maybe he'd like to make the RFC?

**mdjermanovic:** Yes, exactly

**nzakas:** And it seems like the goal of the RFC would be to 1) outline the potential issues and 2) describe a path forward that causes the least amount of pain. Correct?

**mdjermanovic:** Yes, that would be the RFC

**nzakas:** Okay, I think that makes sense. I'm going to leave a comment on the issue just making that clear because I don't think it is right now.

**mdjermanovic:** The way the PR is implemented in this iteration, I'd guess it would break a lot of plugins

**mdjermanovic:** Another thing to consider - Ajv dropped support for an old Schema version we are using (4, I think). The new version is (slightly) incompatible. The same thing could happen in the future

**nzakas:** Certainly we could decide just not to upgrade

**mdjermanovic:** That would be certainly the easiest thing to do, but the problem is - Ajv version we're using will be unmaintained after this June

**btmills:** If the RFC identifies significant issues, we can decide what to do then. I don't think I'd want to say we're not upgrading without knowing how significant the impact might be

**nzakas:** Right, so I think the decision here is let's get an RFC and see what it describes and then we can decide whether or not to move forward.
 * 👍 @mdjermanovic

**btmills:** That makes sense to me 👍

**nzakas:** Okay, so the inline directives one -- we did decide on doing part 1. It's ready to implement if we want it in v8.0.0.

**nzakas:** Is anyone interested in implementing it?

**mdjermanovic:** Part 1?

**nzakas:** Er, sorry, I meant we decided to implement just what was in the RFC without the optional middle step of warning on inline directives that don't currently work.
 * 👍 @mdjermanovic

**nzakas:** Question still remains: does anyone want to volunteer to do that?

**mdjermanovic:** I can work on that

**nzakas:** Great, thanks!

**nzakas:** Can you open an issue for that so we can track it in the board?

**mdjermanovic:** Sure!
 * 👍 @nzakas

**nzakas:** It looks like the rest of v8.0.0 already has owners, unless I'm missing something

**nzakas:** And I don't think anything else is blocked.

**btmills:** concur

**mdjermanovic:** https://github.com/eslint/eslint/issues/14023

**mdjermanovic:** It's left to decide what will be min version

**btmills:** Ah, I can do the research and comment on the issue with a specific version range proposal
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Sounds good.

**mdjermanovic:** Do we plan to use `import()` for flat-config?

**nzakas:** Yes

**mdjermanovic:** And flat-config will be functional at some point in v8.0.0?

**nzakas:** Correct

**mdjermanovic:** We should probably check what Node 12 versions support `import()`, if we want to support Node 12
 * 👍 @nzakas

**btmills:** Got it, `import()` support is a requirement, so at least 12.10.0

**mdjermanovic:** Also, some versions support it, but emit an experimental warning

**nzakas:** Okay, let's let @btmills investigate and get back to us with recommendations
 * 👍 @btmills, @mdjermanovic

**nzakas:** We've got some other stuff we need to move on to

**nzakas:** Next item:

**nzakas:** > Do we want to start converting other repos to ESM?

**nzakas:** And by this I mean, should we start opening issues for the repos other than `eslint` to start getting them all converted?

**nzakas:** Following `espree`'s example.

**mdjermanovic:** Maybe to see first how `espree` works? 🙂

**mdjermanovic:** We haven't released the first version with ESM yet

**btmills:** That's fair

**nzakas:** I was thinking we could probably convert something like `eslint-visitor-keys` pretty easily and release it fairly quickly to get a good idea of how `espree` will work.

**nzakas:** I think in terms of complexity, we're at `eslint` > `espree` > everything else, so maybe getting some of the other stuff done would help us.

**btmills:** I don't think there's a hurry to do that immediately/in parallel with `espree`, but I'd be okay if someone wanted to give it a shot

**nzakas:** Again, I'm not saying let's make it a priority. I'm saying let's open the issues and put it on the roadmap. `eslint-visitor-keys` and `eslint-scope`

**nzakas:** and `eslintrc`

**mdjermanovic:** `eslint-visitor-keys` is also a dependency of `espree`

**btmills:** All right 👍 I'll hold off on `eslint-plugin-markdown` since it's not part of the dependency tree

**nzakas:** If someone comes along and wants to take them on, great, if not, they are there for when someone wants to.

**mdjermanovic:** Is the idea to release `eslint-visitor-keys` before `espree`?

**nzakas:** (See my previous comment.)

**nzakas:** Okay, we need to move a bit faster to get through everything.

**nzakas:** Do we agree to create issues for converting these repos to ESM?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, we have agreed to create the issues. I'll take that as an action item.

**nzakas:** Next item:

**nzakas:** > Do we want to remove CLIEngine from the exported API in v8.0.0?

**nzakas:** I was thinking that if we are going to change what's exported, this is probably a good time to stop exporting CLIEngine too

**nzakas:** CLIEngine was deprecated in v7.0.0

**mdjermanovic:** This would be a part of https://github.com/eslint/eslint/issues/13654 ?

**nzakas:** That's what I'm thinking, yes

**btmills:** I'd be okay giving it a shot as part of the `exports` change, then adding it back in if there are too many integrations that still depend on it. In the latter case, we could explicitly communicate that it'll be removed in v9.0.0 to give plenty of heads up

**mdjermanovic:** We would also remove `CLIEngine` from `api.js`? https://github.com/eslint/eslint/blob/master/lib/api.js

**nzakas:** Yes

**nzakas:** It would no longer be exported in any way

**mdjermanovic:** There was an issue about something missing in the new API

**mdjermanovic:** https://github.com/eslint/eslint/issues/13454

**nzakas:** Yeah, I know there were a few issues where people were using some of the weird stuff that got added to CLIEngine and that we couldn't properly mimic in ESLint

**mdjermanovic:** In my understanding, integrations are not able to access rule metadata via the new API

**btmills:** That seems like something we'll need to support

**nzakas:** Yes, That functionality never really worked correctly in CLIEngine, so we didn't want to port it over.

**nzakas:** The fastest way to figure out what's missing is to tell people it's going away 🙂

**btmills:** haha yes, that does seem like a good way to collect any missing use cases

**nzakas:** So here's what I propose: as part of the RFC about `exports`, I'll include removal of `CLIEngine`, and we can see what the feedback is. If there are significant concerns, we can always back that part out.
 * 👍 @btmills

**mdjermanovic:** RFC for the new API says that a successor for `getRules()` will be added https://github.com/eslint/rfcs/tree/main/designs/2019-move-to-async-api, but I'm not sure if that was ever implemented

**nzakas:** It wasn't, because it's really not clear what the expected behavior or use case is.

**btmills:** Editor integrations use that to show extra information over errors in tooltips, don't they?

**mdjermanovic:** VSCode extensions is using metadata to get doc URLs, maybe for something else too

**nzakas:** Folks, we need to move on. Can we agree to my proposal?

**btmills:** 👍

**mdjermanovic:** I agree if we're sure that all planned tasks for the new API are done

**btmills:** this would be one way to find that out

**nzakas:** Yeah, I don't think we know if we have any planned tasks right now

**nzakas:** As I said, the fastest way to know if people are still relying on things only CLIEngine has it to say we're going to remove it and let them tell us what's missing.

**mdjermanovic:** Ok, makes sense 👍

**nzakas:** All right, the plan is to propose removing CLIEngine in the RFC for the exports field and see what feedback we get. If we feel we can't safely remove CLIEngine as part of the RFC, we can remove that for a later date.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item:

**nzakas:** > do we want to donate to support the debug module and lint-staged module?
 * 👍 @btmills, @mdjermanovic

**nzakas:** These both have Open Collectives and I'd like to spread some love. 🙂

**btmills:** How much are you proposing to each?

**nzakas:** We've done $100/month for Ajv, Eleventy, and Sindre

**nzakas:** So I was thinking the same amount.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Cool, we've decided to start donating to debug and lint-staged!
 * 🎉 @btmills, @mdjermanovic

**nzakas:** (I'm planning on writing a blog post explaining how we are using our sponsorship money now, so it'll be good to included these.)
 * 👍 @mdjermanovic

**nzakas:** Speaking of sponsorship money, we need to nominate folks for the contributor pool for April

**nzakas:** I'll nominate snitin315 and stephenwade
 * 👍 @btmills, @mdjermanovic

**btmills:** JounQin has been active on processor-related work
 * 👍 @nzakas, @mdjermanovic

**nzakas:** JackNapis for helping in <#717416886685401108>
 * 👍 @btmills, @mdjermanovic

**nzakas:** Anyone else we are missing?

**btmills:** bmish had a PR merged and is working on moving the `suggestion` property
 * 👍 @nzakas

**nzakas:** Do we want to give everyone $100? Or should we split things up differently?

**btmills:** that's fine by me

**mdjermanovic:** stephenwade did a lot of good work on the lodash PR

**nzakas:** Yup, he's on the list above. Are you suggesting we pay him more?

**mdjermanovic:** Yes

**nzakas:** Amount?

**mdjermanovic:** $250?
 * 👍 @nzakas, @btmills

**nzakas:** Works for me.

**nzakas:** Any other adjustments we want to make?

**mdjermanovic:** I'd be fine with $250 + 4 x $100
 * 👍 @nzakas, @btmills

**nzakas:** Sounds good. I'll contact everyone.

**nzakas:** All right, any last issues before we call this meeting?

**btmills:** Release

**btmills:** I'm available tomorrow night
 * 👍 @mdjermanovic

**nzakas:** Oh right (sorry, super tired right now).

**nzakas:** Okay, I'll leave the release in your capable hands

**mdjermanovic:** We had a fix in eslintrc API

**mdjermanovic:** It shouldn't affect ESLint itself

**btmills:** I'll leave a comment on the release issue to remind myself to release eslintrc first and bump the dependency in eslint
 * 👍 @mdjermanovic

**nzakas:** Sounds good. I need to go lie down now. Take care

**btmills:** 👋 thanks!

**mdjermanovic:** Thanks! 👋
