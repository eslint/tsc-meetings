# 06/17/2021 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Howdy

**nzakas:** Sorry I got a bit held up. I hope everyone is doing well

**nzakas:** @btmills are you set for taking notes?

**btmills:** yep!

**nzakas:** Thank you, sir

**nzakas:** Looks like we don't have any issues labeled, so our two big topics will be v8.0.0 and budgeting.

**nzakas:** Let's go to the board! https://github.com/eslint/eslint/projects/8

**nzakas:** It looks like all of our planned items now have pull requests 🎉
 * 🎉 @btmills

**mdjermanovic:** Top-level await doesn't have a PR in eslint/eslint repo, though it's quite possible that there's not much that should be done there, if anything.

**nzakas:** For reference: https://github.com/eslint/eslint/issues/14632

**nzakas:** Yeah, I think we are probably looking at just getting that when we upgrade Espree

**mdjermanovic:** Most likely, I'm not sure if some rules need to be updated

**nzakas:** I don't think so. Global `await` produces the same AST as non-global `await`, so I think everything should just work.

**nzakas:** Here is the Espree PR, which I think is ready for merging: https://github.com/eslint/espree/pull/505

**nzakas:** Oh, one more note to add to the README, but otherwise should be good to go.

**btmills:** I'm skimming `await`-related rules and haven't come across anything that assumes `await` is inside a function yet

**mdjermanovic:** We had an update before, for third-party parsers https://github.com/eslint/eslint/commit/fed20bb039cf9f53adfcf93e467f418c5e958f45#diff-ea8ca5c447c33e8f7b3ccec25182af972fa4fc2675408af7c881db7eafa8f9f5

**nzakas:** Ah, so that should probably cover us here

**btmills:** Aha, I just saw those lines in `require-await` and was impressed at how prescient the original author was for anticipating global awaits haha

**nzakas:** 😆

**btmills:** Yeah, we've probably already gotten all the rule updates thanks to Babel/TS already supporting it

**btmills:** I'm satisfied until proven otherwise
 * 👍 @nzakas

**nzakas:** Any flags on any of the other issues in v8.0.0?

**mdjermanovic:** Shall we add a column between "Pull Request Opened" and "Done", to put there those that seem finished

**btmills:** Something to indicate which ones are ready to merge would be helpful

**nzakas:** Maybe "Ready for Merge" instead?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Added

**mdjermanovic:** yes, "Done" is for merged

**nzakas:** Let's go through each and see where we are
 * 👍 @mdjermanovic

**nzakas:** https://github.com/eslint/eslint/pull/14706

**nzakas:** One approval so far

**btmills:** I'll review that

**nzakas:** Okay, I'll leave that in place for now. @btmills if you approve, you can move it over.

**btmills:** will do

**nzakas:** https://github.com/eslint/eslint/issues/14632

**nzakas:** For top-level await, as already mentioned, we don't really have a PR for that because that will come when Espree is updated to v8.0.0

**mdjermanovic:** That would be, then, this PR: https://github.com/eslint/espree/pull/505

**btmills:** I see you just made the final doc change in the espree PR, so we're ready to review that

**nzakas:** @mdjermanovic that's the Espree PR to get the final bits into Espree, then we'll need to do an ESLint PR to upgrade Espree

**mdjermanovic:** Ah, yes

**nzakas:** So we can merge that, do another beta of Espree to sanity check everything, then we can probably do a full release next week assuming no surprises.

**nzakas:** There's a fix to the comma-dangle rule that I'm not sure we need if we upgrade Ajv: https://github.com/eslint/eslint/pull/14030

**nzakas:** @mdjermanovic curious your thoughts

**mdjermanovic:** Yes, we still need that. The PR is good, I'll approve it and leave a note to fix the commit message on merging

**nzakas:** I'll leave an approval too

**nzakas:** This one updates eslint:recommended: https://github.com/eslint/eslint/pull/14691

**nzakas:** That looks ready
 * 👍 @btmills, @mdjermanovic

**nzakas:** Removing formatters from the core: https://github.com/eslint/eslint/pull/14316

**nzakas:** Also looks ready
 * 👍 @btmills, @mdjermanovic

**nzakas:** Remove meta.docs.category from rules: https://github.com/eslint/eslint/pull/14594

**nzakas:** Looks like we need some eyes on that.

**mdjermanovic:** I can take a look next week

**btmills:** so will I

**nzakas:** Great

**nzakas:** Updating Node.js support: https://github.com/eslint/eslint/pull/14592

**nzakas:** Looks ready
 * 👍 @btmills, @mdjermanovic

**nzakas:** Meta.hasSuggestions: https://github.com/eslint/eslint/pull/14573

**nzakas:** Looks ready
 * 👍 @btmills, @mdjermanovic

**nzakas:** Support new class features: https://github.com/eslint/eslint/pull/14591

**nzakas:** This looks like a flag. No updates from Toru in over a month.

**mdjermanovic:** I can start with reviewing that next week. It's quite a big one

**nzakas:** Yeah, a lot of rule updates in there.

**nzakas:** Okay @mdjermanovic take a look and let us know what help is necessary to get that over the finish line.
 * 👍 @mdjermanovic

**btmills:** The eslint-scope PR looks to be just waiting on the final espree release, so that's one todo that will be resolved quickly https://github.com/eslint/eslint-scope/pull/69
 * 👍 @nzakas

**nzakas:** Require meta.fixable: https://github.com/eslint/eslint/pull/14634

**nzakas:** Looks ready
 * 👍 @btmills, @mdjermanovic

**nzakas:** Autofix unused disable directives: https://github.com/eslint/eslint/pull/14617

**mdjermanovic:** That needs some corrections, the author is working on it
 * 👍 @nzakas

**nzakas:** Allow directives in line comments: https://github.com/eslint/eslint/pull/14656

**mdjermanovic:** That's almost done, it will be finished probably very soon
 * 👍 @btmills

**nzakas:** Awesome

**nzakas:** Upgrade Ajv: https://github.com/eslint/eslint/pull/13911

**nzakas:** Looks close?

**mdjermanovic:** Waiting for the new version of `ajv-draft-04`

**mdjermanovic:** And some small corrections

**btmills:** Are there any remaining open questions there, or are we just waiting for implementation to be ready?

**mdjermanovic:** And some testing once it is done

**mdjermanovic:** Not at the moment

**nzakas:** Thanks for all of your work on that @mdjermanovic, it's a beast

**mdjermanovic:** Oh, I'm trying to locate possible problems. It's difficult without knowing all Ajv internals

**btmills:** Sounds like Ajv and class fields might be our constraints right now. Thanks for keeping them moving
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Support regexp matching indices: https://github.com/eslint/eslint/pull/14653

**nzakas:** This is blocked on Espree too

**mdjermanovic:** I'll take a look next week. That one should be fine

**mdjermanovic:** I don't expect problems with that

**btmills:** Should be a quick review once espree is out

**nzakas:** Okay, looks like we are in good shape

**nzakas:** Any other concerns anyone wants to bring up?

**mdjermanovic:** Yes, the new ecmaVersion default in espree v8 could cause some problems

**mdjermanovic:** https://github.com/eslint/eslint/pull/14710

**nzakas:** Okay, then let's just revert that change in Espree. I thought it was going to be fairly painless, but since it's not, I don't think it's critical to keep in.

**mdjermanovic:** I agree with that

**btmills:** Are we able to keep support for "latest" while preserving the ES5 default?

**nzakas:** Yes

**btmills:** sounds good 👍

**mdjermanovic:** Support for "latest" in espree or eslint?

**btmills:** ideally, both

**nzakas:** Yeah, we can support both.

**nzakas:** In Espree it's just a change on this line: https://github.com/eslint/espree/blob/d017d38fc3a113a0a816aa9d21a60ea1850dbb4a/lib/options.js#L45

**mdjermanovic:** There are the same problems when "latest" is used in RuleTester

**mdjermanovic:** Actually, that might be easier to fix

**nzakas:** if there is no change to the default, can't you just use `espree.latestEcmaVersion` in place of "latest"?

**btmills:** `RuleTester` tests really shouldn't be using `"latest"`, should they? I'd think rule unit tests should want to fix a version. Using `"latest"` would be more of an integration test, which we have elsewhere

**nzakas:** Let's pick this up back on the PR once Espree is updated
 * 👍 @btmills

**mdjermanovic:** Shall we revert this for now https://github.com/eslint/eslint/commit/831f6b30270a37800e61e6c668bfa71a39064d2e

**btmills:** As in merge this PR? https://github.com/eslint/eslint/pull/14711

**mdjermanovic:** Yes, and rethink a little before the next release

**nzakas:** Fine by me

**btmills:** 👍 from me

**mdjermanovic:** 👍

**nzakas:** Let me get the change into Espree, and then we can regroup and use the beta to see if it's still difficult to support "latest" in ESLint.
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** sounds good to me

**nzakas:** All right, any other issues for v8.0.0?

**btmills:** none from me

**mdjermanovic:** None that I'm aware of

**nzakas:** Great. So the next thing was just to talk a bit about how to make use of our sponsorship money. We've been pretty conservative in how we've spent it so far to make sure that we won't run out anytime soon, but as we bring on more sponsors, we should start making use of the money lest people think we don't really need it. 🙂

**nzakas:** So I'm just going to blast through some ideas, and just leave a 👍 or 👎 if you have an opinion, or else otherwise ask whatever questions you may have.

**nzakas:** (These are all listed on the agenda, but I thought this would be easier.)

**nzakas:** * Eliminate limits on payments: so TSC/Reviewers would be flat $60/hour without hour limits and no decrease in hourly rate for extra hours worked; commiters $30/hour also with no limits.
 * 👍 @snitin315, @btmills, @mdjermanovic

**btmills:** (are we open for discussion on these?)

**nzakas:** Of course

**btmills:** Previously, you had concerns about one person working too many hours for a couple reasons. Do you still have those concerns?

**nzakas:** I do, but at the same time, we've already seen that decreasing the pay doesn't actually dissuade anyone from working, and in this model we have an easy way to scale up if someone (me?) wants to start working a more regular amount of hours vs. needing to negotiate a separate arrangement.

**nzakas:** Of course, I still don't want to encourage people who are already working 40 hours a week to add on another 10-20 for ESLint, but since that's more of a theoretical problem than an actual one, my thoughts have evolved.

**btmills:** Makes sense. We can continue to monitor that, but no objections for now 👍

**nzakas:** Oh, and kind of implicit in this is allowing committers to bill for their hours on their own, which we haven't previously been doing.
 * 👍 @btmills, @mdjermanovic

**btmills:** I'm fine trusting unless or until someone abuses it

**nzakas:** Me too

**nzakas:** Okay, next

**nzakas:** Increase monthly contributor pool budget to $1000 (from $500).
 * 👍 @btmills, @mdjermanovic

**nzakas:** We have kind of already been doing this by not limiting ourselves to $500, so seems logical to just make it formal.

**btmills:** It seems to generate an outsized amount of enthusiasm and goodwill, so it's well spent

**nzakas:** Oh for sure

**nzakas:** Next

**nzakas:** Purchase a Google Workspace account to give the team access to emails at eslint.org, Google Docs, spreadsheets, mailing lists, etc.
 * 👍 @btmills, @mdjermanovic

**nzakas:** (OpenCollective now lets you create virtual credit cards against your account, so we can do stuff that needs automatic billing easily.)

**btmills:** Neat! It'd be nice to centralize those and own our own mailing lists

**nzakas:** And we could btmills@eslint.org, help@eslint.org...and use an actual spreadsheet for our budget 🤣

**mdjermanovic:** How much does it cost per month?

**btmills:** You mean Markdown tables aren't as convenient? 😆

**nzakas:** $6/user per month

**mdjermanovic:** sounds good

**nzakas:** So if we want to do each TSC member that's $18, and if we ever get up to full strength again, just $30
 * 👍 @mdjermanovic

**nzakas:** All right, I'll look into getting that set up.

**btmills:** We'll save much that just in hourly time saved every time you have to update the budget table in Markdown
 * 😂 @nzakas, @mdjermanovic

**nzakas:** Next

**nzakas:** Find other projects to sponsor.

**mdjermanovic:** Dependencies?

**nzakas:** yes

**nzakas:** This one is a bit more nebulous. I've tried finding as many projects as I can to sponsor. I even asked Acorn specifically if they'd open up an OC fund so we could sponsor them and they said no.

**nzakas:** So I'm not sure we actually have other dependencies to sponsor at this point

**btmills:** I'm fine approving a budget item even if it sits unused until dependencies open up sponsorships

**nzakas:** Right now we have $500 approved per month, which we are using all of. Do we want to expand to $1000 so it's there when we need it?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll update the issue accordingly.

**nzakas:** Is everyone okay with time? I know we're going a bit over
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay cool

**nzakas:** Next

**nzakas:** Start sponsoring ecosystem projects (plugins, parsers, etc.)

**nzakas:** @btmills brought up the idea of, for instance, sponsoring typescript-eslint
 * 👍 @btmills, @mdjermanovic

**nzakas:** I think this is actually two questions: 1) do we want to sponsor ecosystem projects and 2) should it come out of the same budget as dependencies or be separate?

**btmills:** There are a handful of plugins that are so commonly used alongside ESLint, and whose contributors diligently notice and fix issues first. I could see this improving the whole ecosystem.

**btmills:** For example, we don't intend to support yourFrameworkHere ourselves, but having support for using ESLint with yourFrameworkHere improves ESLint's ecosystem indirectly

**nzakas:** I'm okay with it. Shall we start with $500/month and see what happens?
 * 👍 @btmills, @mdjermanovic

**nzakas:** @btmills can you create the budget item request in the team repo for that?
 * 👍 @btmills

**nzakas:** Okay, I'm actually too tired to keep going. We can defer the other ideas until next time or else take it offline.

**nzakas:** FOr the release, I think @mdjermanovic said he's not available tomorrow?

**mdjermanovic:** Yes, I'm away this weekend

**btmills:** I can do it. Time TBD

**nzakas:** Awesome, thanks @btmills

**mdjermanovic:** thanks @btmills !

**nzakas:** I'll check in tomorrow to see if you need another set of eyes on anything

**nzakas:** Otherwise, I'll wait for the reviews on the Espree PRs and I'll do a beta release once they are approved.

**nzakas:** All right, I need to go lie down. Thanks everyone

**btmills:** 👋 take care

**mdjermanovic:** Thanks! 👋
