# 08/13/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi

**kaicataldo:** Hi!

**btmills:** 👋

**nzakas:** ah, I thought I saw you

**nzakas:** I hope everyone is staying safe and healthy

**nzakas:** Looks like we've got a bunch of housekeeping to take care of today

**nzakas:** Well, we've got four out of five of us, and @mysticatea didn't have anything on the agenda today. Should we get started?
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**kaicataldo:** Quick note: we should get reactions recorded in our transcripts now
 * 👏 @btmills
 * 🎉 @nzakas, @mdjermanovic

**nzakas:** Nice work on that

**nzakas:** Okay, let's start with https://github.com/eslint/eslint/issues/13482

**nzakas:** > **TSC Summary:** This issue was used for brainstorming roadmap features going forward. It seems that the ones we can agree on doing are:
> 
> * Simple Config (est: 6 months, lead: @nzakas) eslint/rfcs#9
> * Google Season of Docs (est: 3 months, lead: @kaicataldo )
> * Parallel linting (est: TBD, lead: @mysticatea/@btmills)
> * Website redesign (est: TBD, lead: @nzakas/@kaicataldo)
> 
> I think that ESM support will come as part of simple config, so I don't think we need to specify that manually.
> 
> **TSC Question:** Given that we don't have RFCs for other ideas in this thread, can we publish the four items as our official roadmap and then add to it whenever we have an approved RFC with a team member dedicated to implementing it?
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** I suppose converting `master` to `main` in all of the repos would also be on the roadmap officially
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Okay, looks like we have decided to adopt this as the official roadmap.

**nzakas:** I took the liberty of throwing together a project: https://github.com/orgs/eslint/projects/1

**nzakas:** Right now it's private, but I'd like to make it public after I do a blog post announcement. It roughly maps out what I think our process is for taking on significant changes. Thoughts?
 * 👍 @mdjermanovic

**kaicataldo:** Sounds good to me

**btmills:** Process looks good 👍

**nzakas:** (Stuff on the roadmap project will automatically not be closed by the autoclose bot, too.)

**nzakas:** Okay, we have a roadmap! I'll take the action to put together a blog post announcement (as seems to be my weekly task now)

**btmills:** It's fun having stuff to announce on a regular basis

**nzakas:** Yeah, and I'm hoping this will also help drive more donations from non-casinos 😄
 * 😆 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Okay, next item is from @mdjermanovic , and I think we may need a bit more context:

**nzakas:** > > It would be nice to define semver policy for bug fixes in rule schemas, specifically for those fixes that can cause schema validation errors in existing configs (if the rule was misconfigured in user's config, but the schema was incorrect/incomplete and didn't catch that).
> > 
> > ref [eslint/eslint#13166](https://github.com/eslint/eslint/pull/13166)
> > 
> > Additionally, and if the decision is to treat these as semver-major changes, should we revert [eslint/eslint#13166](https://github.com/eslint/eslint/pull/13166).

**nzakas:** For reference, our current semantic versioning policy is here: https://github.com/eslint/eslint/#semantic-versioning-policy

**nzakas:** And does not explicitly mention rule schemas

**nzakas:** Though we do have "A bug fix in a rule that results in ESLint reporting more errors." under Minor release

**btmills:** The closest I see is "A bug fix in a rule that results in ESLint reporting more errors." as semver-minor, and it sounds like the disagreement is that, while it is a bug fix, schema changes aren't just "more errors" but "crashes the build"
 * 👍 @nzakas, @mdjermanovic

**nzakas:** At a minimum we should probably replace "more errors" with something that indicates that difference. I think the intent was "more linting errors".

**kaicataldo:** That makes sense to me

**btmills:** "more linting errors" is consistent with my impression as well

**mdjermanovic:** That would mean that this wasn't covered by the policy

**nzakas:** Correct

**nzakas:** But since we don't have this situation covered anywhere, we should decide now what we want that policy to be.

**btmills:** I seem to have a vague recollection that when we've talked about things like this in the past, we decided to lump it in with "more errors" and always wished we had a separate advisory configuration error message category

**kaicataldo:** I personally wasn't aware of that distinction, but it makes sense!

**kaicataldo:** I'd be for changing the wording to "more linting errors"
 * 👍 @mdjermanovic

**nzakas:** Okay, I think we are all in favor to changing the wording to "more linting errors"
 * 👍 @btmills

**kaicataldo:** Regarding the change that was released, do we want to revert that and save it for a major release?

**nzakas:** I think that's what we're trying to determine now

**nzakas:** If we say that any change that could result in ESLint crashing is semver-major, then a rule schema change would fit that category

**kaicataldo:** It actually looks like we could get away with a patch release

**kaicataldo:** there has only been one semver-patch commit since the last release

**nzakas:** Okay, let's pop the stack to deciding the policy we want first
 * 👍 @kaicataldo

**nzakas:** Then we can discuss the tactical piece for resolving the commit

**kaicataldo:** (ah, this was the release before last, wasn't it? never mind my last comment)

**mdjermanovic:** That was in v7.3.0

**nzakas:** I'll throw this out as a proposal: we add a bullet under semver-major that says "any bug fix that could cause ESLint to crash "

**mdjermanovic:** Hm, crash sounds like a bug in ESLint

**nzakas:** Hmm, yeah, probably not the right word.

**nzakas:** Maybe "could result in a config validation error"

**nzakas:** ?

**mdjermanovic:** Yes, I think it might best to be specific

**btmills:** When we make a bug fix that causes more linting errors, the recommended fix is changing your code. When we make a schema change, the fix is changing CI configuration, which is typically the kind of work expected when doing a major version upgrade. For that reason I'd agree with schema changes being semver-major as long as we don't have any options other than immediately erroring out the entire lint run

**nzakas:** @btmills so you are proposing a specific bullet point for rule schema changes?

**kaicataldo:** It sounds like we want to say changes that will cause the linter not to complete linting successfully are a breaking change

**kaicataldo:** which goes back to differentiating between linting errors and error...errors

**nzakas:** We do have "Part of the public API is removed or changed in an incompatible way." under semver-major, so we could say the schema is part of the public API

**kaicataldo:** I like that

**btmills:** Thinking out loud, but I agree with your proposal for a bullet around bug fixes that {cause linting to error, whatever the wording might be}

**btmills:** Hmm, that could work

**nzakas:** If we listed out several examples as sub-bullet points to that bullet, that could cover us

**nzakas:** So, rule schema changes, removing existing rules, changes to the Node.js API, etc.

**nzakas:** Probably removing command line flags, too

**btmills:** All of the rest are uncontroversially semver-major, and I think configuration (including rule schemas) fits in alongside them

**mdjermanovic:** Sounds good to me

**kaicataldo:** Sounds good to me as well

**nzakas:** Okay, so it sounds like we've agreed that 1) rule schema changes are semver-major changes and 2) we should update the semantic versioning policy to give some examples of what "public API" is
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Okay, the next step is to decide what to do about the change we already merged

**mdjermanovic:** And say "linting errors" in "A bug fix in a rule that results in ESLint reporting more errors."
 * 👍 @btmills

**mdjermanovic:** In line with the policy we agreed on, looks like we should revert the change

**kaicataldo:** If we had the infrastructure to do so, I would advocate for a patch release of the release line in which we merged this

**kaicataldo:** But wouldn't be against reverting it in this next release

**nzakas:** Seems like reverting is the only real choice we have?

**btmills:** Also in favor of reverting 👍 given only one person seems to have noticed the change, I don't currently feel it's severe enough that we need to figure out how to do a patch release of an old minor

**nzakas:** I put together a quick draft of an updated semantic versioning policy: https://github.com/eslint/eslint/pull/13563

**nzakas:** Okay, it sounds like we've agreed to revert the change in the next release.
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Worth putting that into the release highlights when it's published
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** All right. Let's move on to the next item:

**nzakas:** > Agenda item: Let's discuss what types of companies and organizations we want to accept donations from. For example, we probably don't want to accept donations from any of the following:
> 
> 1. Online gambling sites
> 2. Political groups
> 3. Groups related to sex work
> 4. Hate groups
> 
> It would be good to get this documented, as it might help us avoid needing to refund and block groups on Open Collective.

**nzakas:** A little context: we now have 11 online gambling-related sponsors

**nzakas:** I've been talking with OC and there isn't a way to block them right now

**nzakas:** but they are working on it

**kaicataldo:** re political groups, I think we'll need to define what "political" means given the current state of politics in the U.S.

**kaicataldo:** i.e. would we not allow a mask production company to donate?

**nzakas:** Political means the sole purpose for the group existing is to participate in politics

**nzakas:** So like, the Biden campaign would fall under that

**nzakas:** As would any PAC

**kaicataldo:** Agreed, just think we need to make that explicit in our policy

**nzakas:** That's fine, these were just bullets to start the conversation, not a formal policy 🙂

**nzakas:** So do these groups make sense? What other groups are missing?

**btmills:** We've also declined a donation from a company which doesn't fit cleanly in those categories. We could of course allow ourselves an out with "and anything else on an individual basis"
 * 👍 @kaicataldo

**nzakas:** Oh, we can decline whoever we want

**nzakas:** The list doesn't have to be exhaustive. The goal is just to be upfront about the companies we know we don't want

**nzakas:** In hopes of preventing them from donating in the first place

**btmills:** That works for me then 👍

**btmills:** (Now if we could just get the SEOs to read our policy)

**nzakas:** We do have rel="nofollow" on all of our links already

**nzakas:** That doesn't seem to have persuaded them that this isn't the best way to get SEO

**nzakas:** To circle back to my question: what other types of groups are missing from the list I proposed?

**btmills:** Since it doesn't have to be exhaustive, I'm fine calling that good enough for now

**kaicataldo:** I'm not coming up with any others right now

**mdjermanovic:** Do we want to restrict online gambling sites or any sites related to gambling

**btmills:** Wording suggestion "Political groups" -> "Political campaigns" - does that seem in the spirit of what we're aiming for and along the lines of your comment @kaicataldo?

**kaicataldo:** Defining it as  @nzakas did above makes sense to me

**nzakas:** No, that would rule out PACs
 * 👍 @kaicataldo

**btmills:** Oh right, I guess those aren't actually campaigns. @nzakas wording works

**nzakas:** @mdjermanovic yeah, I think we could say anything related to gambling that isn't legal in the United States

**nzakas:** because there's Draft Kings, for instance, which is legal and regulated

**nzakas:** Okay, I think we're getting into more specific wording that we can work through on a pull request
 * 👍 @btmills, @mdjermanovic

**nzakas:** So I'd suggest we call this agenda item resolved and I'll follow up with a pull request where we can workshop actual wording
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Okay, next: @kaicataldo anything to discuss about the release tomorrow?

**kaicataldo:** Nothing on my end! I'll get the PR to revert that commit up tonight, so would appreciate an approval or two if y'all have the time
 * 👍 @mdjermanovic

**btmills:** As an advisory, I'm going to release 2.0.0-rc.0 of the markdown plugin. Nothing for you to do @kaicataldo, and thanks for the reviews
 * 👍 @kaicataldo

**nzakas:** Sounds good.

**nzakas:** I'd like to get the Ethical Ads setup in the next couple of days, too.
 * 👍 @btmills

**nzakas:** It's almost done, I just need to fix some of the formatting

**nzakas:** It needs to be live in order to finish the setup, then we can setup an A/B test

**nzakas:** By my calculations, we should get $250/month from them based on our traffic

**btmills:** I'm really curious to see the relative value of ad revenue vs sponsorships it leads to. Thanks for building it!

**nzakas:** Sure thing

**nzakas:** All right, any other topics before we call the meeting to a close?
 * 🦗 @btmills

**kaicataldo:** Nothing from me

**mdjermanovic:** Nothing from me, too

**nzakas:** Okay, that's it for today. Thanks everyone. Stay safe and healthy

**kaicataldo:** Thanks everyone 👋

**btmills:** 👋 thanks all!

**mdjermanovic:** 👋

**btmills:** Meeting notes PR: https://github.com/eslint/tsc-meetings/pull/201
