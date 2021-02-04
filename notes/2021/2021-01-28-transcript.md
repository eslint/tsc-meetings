# 01/28/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Let's give @mysticatea a couple minutes to see if he can join

**nzakas:** All right, let's get started. @btmills are you good for notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** Okay, we got a bunch of items, so let's dig in

**nzakas:** First: https://github.com/eslint/eslint/pull/14014

**nzakas:** > **TSC Summary:** This documents a new issue triage process.
> 
> **TSC Question:** Shall we adopt this process and start using it going forward?

**nzakas:** It looks like everyone left comments, and of course we can change things as we go, just looking for overall direction here.

**mdjermanovic:** Looks good to me overall. I left a couple questions today

**nzakas:** @mdjermanovic yup, just saw and responded

**btmills:** I'm good to give it a shot. I wouldn't spend time implementing any complex automations yet. Once we're settled on the process then we can automate more

**nzakas:** Yeah, that was my plan. I just opened an issue on the GitHub bot to keep track of all the places I thought automation might help.

**btmills:** Oh perfect, I'll link that in the notes

**nzakas:** Okay, we've resolved to start using this new triaging process! 🎉
 * 👍 @btmills, @mdjermanovic

**nzakas:** I'm going to make the project public and as long as there are no other questions, we can merge the PR. I'll take the action item to email to the team mailing list to make everyone aware.

**nzakas:** Next item: https://github.com/eslint/eslint/pull/14012

**nzakas:** > **TSC Summary:** `no-unused-expressions` currently doesn't report JSX expressions. This might be an unintentional regression introduced in v7.5.0, when we switched from maintaining a list of nodes that shouldn't be reported to maintaining a list of nodes that should be reported. On the other hand, the actual behavior (not reporting JSX) is in line with our policy of not assuming any semantics for JSX, per which we can't know whether or not JSX is side-effect free.
> 
> This PR aims to add an option for JSX expressions to the `no-unused-expressions` rule. Default value retains the current v7.18.0 behavior (not reporting JSX). When set, it restores pre-v7.5.0 behavior (reporting JSX).
> 
> **TSC Question:** shall we accept this PR?

**mdjermanovic:** The option looks like a good solution to me.

**btmills:** I'm also okay with an option 👍

**nzakas:** No objections from me 👍

**nzakas:** So it looks like we've resolved to accept the PR. I love easy ones. 🙂
 * 👍 @mdjermanovic
 * 😆 @btmills

**nzakas:** Next item: https://github.com/eslint/eslint/pull/14010

**nzakas:** > **TSC Summary:** This PR aims to change filename extensions of YAML config files that `eslint --init` creates. The new extension would be `.yaml`, as recommended in [yaml.org FAQ](https://yaml.org/faq.html):
> 
> > Is there an official extension for YAML files?
> 
> > Please use ".yaml" when possible.
> 
> On the other hand, `.yml` seems to be the most commonly used, the change might be surprising for users, and the new config system will anyway not support YAML.
> 
> **TSC Question:** shall we accept this change?

**nzakas:** I'm not sure why this would matter to anyone, but I don't feel strongly either way.

**btmills:** I do not care in the slightest to debate a single-character non-functional change

**btmills:** > the new config system will anyway not support YAML
Given this, should we just say we're not changing the existing config system anymore?
 * 👍 @nzakas, @mdjermanovic

**mdjermanovic:** Makes sense to me. If there is a downside, maybe better not to change what's going to be deprecated soon

**nzakas:** Okay, since no one feels strongly that we should make the change, I think it's best not to. The whole `--init` command will need to be changed with the new config system anyway, so probably best to just explain that and not make any further changes.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, looks like we have agreement on that, so let's move on.

**nzakas:** Next item: https://github.com/eslint/eslint/pull/13963

**nzakas:** > **TSC Summary:** this PR fixes a slight bug in space-infix-ops. Per our policy, this rule is frozen so we are no longer making changes to it.
> 
> **TSC Question:** Should we close this PR without merging?

**mdjermanovic:** My understanding is that stylistic rules are frozen for enhancements, but not deprecated, so we're still fixing bugs and updating all rules to account for new syntax

**nzakas:** So I think that's where there's a misunderstanding

**nzakas:** "Frozen" means no more changes for anything.

**mdjermanovic:** That's deprecated?

**btmills:** "frozen = no changes" would've been my first interpretation, but the policy is "Stylistic rules are frozen - we won't be adding any more options to stylistic rules." That first sentence says no more options but doesn't mention bug fixes

**nzakas:** Well, let's clear that up right now. 🙂

**nzakas:** What do we want "frozen" to mean?

**nzakas:** When I proposed it, my intent was "we are done making changes to these rules."

**nzakas:** I honestly think these stylistic rules are just a waste of time to maintain

**mdjermanovic:** If we're not fixing bugs and accounting for new stage 4 syntax in the future, then the rules are deprecated

**nzakas:** To me, saying they are deprecated implies we are replacing them with something else. That's my hesitation.

**btmills:** or even if not replacing them, at least discouraging their use

**btmills:** I don't use our stylistic rules, but I don't think the community would tolerate deprecating them, as nice as removing that maintenance burden would be

**mdjermanovic:** That's a lot of rules that might become unusable if we don't update them with the logic for new syntax

**nzakas:** stylistic rules 🙂

**nzakas:** Which I'm less concerned about

**btmills:** I guess I'll phrase that as a question instead of an assumption: could we deprecate/discourage using/remove stylistic rules?

**nzakas:** I just feel bad deprecating things without a recommendation for what else to do

**mdjermanovic:** all stylistic rules or just formatting ones

**nzakas:** All

**nzakas:** Anything that is a nit pick I don't think is a good use of our time to maintain

**btmills:** Is Prettier a valid alternative recommendation?

**nzakas:** I think the problem there is the lack of configurability with Prettier

**nzakas:** I've been working on something in my spare time that allows more configurability but it's not ready for prime time yet 🙂

**btmills:** Okay, so there really isn't an alternative (yet)

**nzakas:** Just to pop the stack a bit

**nzakas:** I think we have a few different considerations: 1) bug fixes (which is the case with this PR), 2) new syntax additions, and 3) new options

**nzakas:** I don't think we necessarily need to group all three together

**nzakas:** but my feeling is that it's hard to do #2 without also doing #3

**btmills:** Yet it's hard to say they're still an official endorsed built-in part of ESLint if they might not be compatible with ES versions the rest of ESLint supports

**mdjermanovic:** we already aren't doing #3, unless it is absolutely necessary for #1 or #2 (I think it never happened, though)

**btmills:** Yeah, the policy was already clear about not doing #3

**mdjermanovic:** We have bug fixes in the policy https://eslint.org/blog/2020/05/changes-to-rules-policies#what-about-bugs

**nzakas:** Well that clears that up. Glad we write things down. 🙂

**btmills:** ...I can't believe I didn't read down that far

**nzakas:** I apologize for my misunderstanding

**nzakas:** or misremembering or not reading

**btmills:** One question we haven't resolved though: new ES features

**btmills:** Seems like we ought to decide that while we're here

**nzakas:** Right

**btmills:** I think that unless or until we have a recommended alternative to the built-in stylistic rules, we should do the minimum to keep them compatible with whatever ES version the rest of ESLint supports
 * 👍 @mdjermanovic

**nzakas:** I suppose since we are willing to add new rules and new options to existing rules for new ES features, we probably need to be consistent and also do it for stylistic rules.

**nzakas:** Sounds like we are in alignment @btmills
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, so it looks like we've decided (or reconfirmed): 1) we will fix bugs in stylistic rules, 2) we will do the minimum necessary to make stylistic rules work with new ES features, and 3) we will not add new options to stylistic rules.
 * 👍 @btmills, @mdjermanovic

**nzakas:** (Also: Yay for writing things down.)

**btmills:** In that spirit, where should we write this down? Blog posts aren't typically living documents. Are this meeting's notes sufficient?

**mdjermanovic:** README on GitHub?

**nzakas:** README seems like the best option

**btmills:** Adjacent to the security and semver policies?

**mdjermanovic:** or maybe just the link to the blog post

**nzakas:** I was thinking under the Semver policy

**nzakas:** "Note about Stylistic Rule Updates" or some such thing

**btmills:** And add a note to the original blog post that the readme is the authoritative living version of the policy
 * 👍 @nzakas

**btmills:** I'll volunteer to do both of those updates

**nzakas:** Thanks!

**nzakas:** All right, next item: https://github.com/eslint/rfcs/pull/72

**nzakas:** > **TSC Summary:** this RFC proposes switching Espree to be written in ESM and published as a dual-use package with both ESM and CommonJS.
> 
> **TSC Question:** shall we accept this RFC?

**mdjermanovic:** There are some open questions

**btmills:** I think the biggest question right now is whether we write in ESM with a build step or write in CJS with an ESM wrapper

**nzakas:** The whole proposal was based on the premise that it's time to move to ESM, so I don't think the latter makes much sense to pursue.

**btmills:** I prefer the latter, and that's what the [Node.js dual-package docs recommend](https://nodejs.org/api/packages.html#packages_approach_1_use_an_es_module_wrapper)

**nzakas:** I just don't think there's any value in creating an ESM package based on CJS source code

**nzakas:** We miss out on most of the benefit

**nzakas:** (of getting to write the code in ESM and eventually move off of CJS)

**nzakas:** FWIW, all of my personal projects are written in ESM and transpiled to CJS at publish time.

**btmills:** So you're thinking two complete and independent outputs in `dist/espree.{c,m}js`

**nzakas:** Yes

**nzakas:** To me the ESM wrapper is just doing what Rollup can already do...I just don't see the point.

**mdjermanovic:** Is there an advantage with bundling modules in `dist` instead of exposing one of the source files?

**nzakas:** The bundle is faster to load because you're not doing a bunch of file I/O

**nzakas:** (with each `require` or `import`)

**nzakas:** Also ensures people can't independently load source files that they shouldn't be loading (for older Node.js versions)

**btmills:** We lose some of the authoring benefits that way though

**nzakas:** Can you explain that more?

**mdjermanovic:** We could just drop the build step in the future

**btmills:** If the esm entry point is `dist/espree.mjs`, if I'm doing `npm link` for local dev or running tests on the fly, I first have to build after making changes

**nzakas:** Oh you can have your tests not rely on the built file

**btmills:** The Node.js docs don't specify what version added `package.json` `exports` restrictions. Do either of you happen to know when those were added?

**nzakas:** See https://github.com/humanwhocodes/momoa

**nzakas:** The tests rely on the source files, not the built file.

**btmills:** Prettier re-runs the tests against the build output as the last step before publishing to verify the build

**mdjermanovic:** Feels safe to verify the final published output

**nzakas:** We can do that, too

**nzakas:** I mean, we can do whatever we want. 🙂

**nzakas:** from @LJHarb: "node v12.17+ and v13.7+ and v14+ work with all the features."

**mdjermanovic:** Should we describe testing in the RFC, or leave that for the PR?

**nzakas:** I think it's a good idea to add to the RFC so it doesn't get lost

**nzakas:** I just don't want this RFC to linger. We have someone who's excited to work on this, let's push it forward.

**btmills:** Ah thanks for that. So _most_ users will already have the `exports` restrictions

**nzakas:** Right

**btmills:** The other concern was duplicated singletons if espree gets loaded as both cjs and esm. Off the top of my head, I think that's less of an issue for us vs other packages

**nzakas:** Yeah, I don't even consider that a problem.

**nzakas:** If you're doing weird CJS/ESM mixing, that's on you.

**btmills:** Might be different for eslint itself if some plugin uses one method but the end user uses another

**btmills:** But that's a problem for later

**nzakas:** Realistically, we are the primary consumers of Espree. We don't guarantee anything for anyone else.

**btmills:** Okay, for `espree`, I think you've convinced me we can author in ESM with a build step
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, looks like we're in agreement on that.

**mdjermanovic:** on top of that, ESM bundle or not?

**nzakas:** I think you mean do we want `type: module` in `package.json`?

**btmills:** I interpreted that as `dist/espree.mjs` vs pointing to the entrypoint module

**mdjermanovic:** I meant should we produce `dist/espree.js` (ESM module) or not

**mdjermanovic:** yes

**nzakas:** Oh, gotcha

**btmills:** The performance benefits of a bundle would be reduced compared to eslint since espree has so few files

**nzakas:** I'd like to only ship `dist` in the package.

**btmills:** and not ship `lib` at all?

**nzakas:** Yup

**btmills:** I don't feel strongly either way, the tradeoff seems about even to me

**btmills:** @mdjermanovic do you have a preference?

**mdjermanovic:** I also don't have a strong opinion on this

**btmills:** Okay, then `dist/espree.{c,m}js` it is
 * 👍 @nzakas, @mdjermanovic

**nzakas:** And we also want a testing strategy outlined in the RFC?

**mdjermanovic:** I'd like that

**btmills:** yes please

**nzakas:** I think that's reasonable to request

**mdjermanovic:** There's also an open question about the ESM interface

**mdjermanovic:** Do we want to provide both named and default exports?

**mdjermanovic:** i.e. `export function parse` and `export default { parse }`

**nzakas:** I think named is all we need. We can always add a default later if we find we really need it.

**btmills:** I know this is already going to be a semver-major change, but unless you're doing weird stuff, it should be API-compatible, but for that to happen, we'd need a default export

**mdjermanovic:** I think the common practice for an API like espree's would be just named exports. An additional `export default` might be nice for compatibility, though

**nzakas:** If people are using `require()`, then there won't be a change already.

**btmills:** Yeah, we should probably change the docs to encourage `import { parse } from 'espree';`. But for now, `import espree from 'espree'; espree.parse(...);` should work before and after this change... unless we wanted to go to the former pattern and use this as an opportunity to break it when we're already doing semver-major?

**nzakas:** I don't feel strongly. If you think it's important, then let's do it.

**mdjermanovic:** I'm also neutral

**btmills:** If you all don't care about preserving `import espree from 'espree';` compatibility, then... let's just do named exports? Less public API surface to test that way

**btmills:** On the off chance it breaks some plugin I'd have no problem adding that back though

**nzakas:** Okay, so we've decided to just do named exports.

**nzakas:** @btmills can you cover all that in a comment on the RFC PR? As I said, I'd like to keep momentum going on it while we have someone interested.

**btmills:** haha yeah, I'll see if I can condense this to a summary

**nzakas:** Awesome, thanks.

**nzakas:** So I know we're passed our time, but can you folks stick around so we can figure out contributor pool payments?
 * 👍 @mdjermanovic

**btmills:** I don't have a hard stop

**nzakas:** Cool, let's go! Nominations?

**nzakas:** FYI: https://github.com/eslint/eslint/pulse/monthly

**nzakas:** Looks like brodybits had the most commits. Anyone know what they were?

**btmills:** https://github.com/eslint/eslint/pull/13987, https://github.com/eslint/eslint/pull/13986, and https://github.com/eslint/eslint/pull/13985 were three

**nzakas:** Ah thanks

**nzakas:** So some minor things here and there

**nzakas:** I'll nominate ljharb for being pretty active on issues
 * 👍 @btmills, @mdjermanovic

**btmills:** the acorn compatibility also helped the ESM discussion

**mdjermanovic:** people that help on <#717416886685401108> are also doing a lot of work

**nzakas:** luxaritas and jacknapis for <#717416886685401108>
 * 👍 @mdjermanovic

**nzakas:** anyone else I missed?

**btmills:** snitin315 had a few reviews and opened https://github.com/eslint/eslint/pull/14033
 * 👍 @nzakas, @mdjermanovic

**btmills:** brodybits also has two unmerged PRs: https://github.com/eslint/eslint/pull/13972 and https://github.com/eslint/eslint/pull/13992
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Shall we do $100 each?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, done!

**nzakas:** There was one other agenda item, but it's not important so we can wait until next time. Plus, I really need to lie down now. 🙂

**btmills:** I'm available to run the release tomorrow night

**nzakas:** Oh good catch

**mdjermanovic:** There's something that should be done for the new configuration docs: https://github.com/eslint/eslint/pull/14036

**nzakas:** I'll let you folks figure out the release, I've got to go. Thanks so much! I'll take the action item to email the contributors.

**btmills:** 👋 take care!

**mdjermanovic:** 👋 thanks!

**btmills:** @mdjermanovic I'll make sure that's merged before starting the release. Is there anything I'll need to manually configure from Netlify's control panel?

**mdjermanovic:** I think everything should work. I had small concerns that someone might run into cyclic redirects but it's probably not gona happen

**mdjermanovic:** Also, menu items could be optimized to avoid some redirections, but they should work well as is for now

**btmills:** I always feel good shipping things that "probably" wont break anything 😆

**mdjermanovic:** Can't guarantee 🙂

**btmills:** Once it's live I'll browse around briefly to see if I come across any issues
 * 👍 @mdjermanovic

**btmills:** Anything else for the release?

**mdjermanovic:** When do you plan to start the release?

**btmills:** Likely pretty late - 10 or 11pm US eastern time. If I'm lucky and find time earlier, I'll post in chat

**mdjermanovic:** I'll maybe be around

**btmills:** (for reference it's 5:21pm here right now)

**btmills:** I'll hang around chat in case you are!

**btmills:** (maybe) talk to you tomorrow 👋

**mdjermanovic:** 👋 thanks!
