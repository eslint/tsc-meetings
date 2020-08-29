# 08/27/2020 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mysticatea:** Hello

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** @kaicataldo said he would be joining, so let's wait five minutes to get started

**nzakas:** I hope everyone is staying safe and healthy, wherever you are located

**kaicataldo:** Hey everyone, I’m here 👋🏼
 * 👋 @nzakas, @mdjermanovic

**nzakas:** All right, let's get started. @btmills are you going to take notes?
 * 👍 @btmills

**nzakas:** Looks like we don't have a lot to discuss so this may be quick.

**nzakas:** > Agenda item: can we start using pull request drafts instead of the “do not merge” label? I think it better indicates the status of the PR and prevents accidental merging.

**nzakas:** As a little background, it seems like sometimes when people are working on pull requests that aren't ready for review, we end up with a "do not merge" label on them.

**nzakas:** It seems like pull request drafts would be a better option

**kaicataldo:** Sounds good to me!

**mysticatea:** 👍 from me.

**btmills:** Same here. Draft pull requests have been working well at work

**mdjermanovic:** Sometimes they're ready for review, but shouldn't be merged as is. For example, `package.json` shold be updated

**nzakas:** @mdjermanovic I think we'd still want to use a draft in that case. I'm not sure it makes much sense to review something that can't be merged without further changes.

**mdjermanovic:** That was usually the case with new syntax PRs that were waiting for `espree` release

**kaicataldo:** The current situation of having multiple PRs that rely on upgrading Espree is a good example of what @mdjermanovic is talking about. But I think this is an edge case and a comment in the PR is sufficient.

**btmills:** There's also the case of breaking changes that are done but waiting for us to start a new major version, but I think leaving those as drafts is fine as well (and the presence of the read `breaking` label serves as additional warning against merging)
 * 👍 @nzakas, @kaicataldo

**mdjermanovic:** @kaicataldo you mean comment that the draft should be reviewed?

**nzakas:** My goal here is that draft PRs don't need to be reviewed until converted into formal PRs

**kaicataldo:** @mdjermanovic Right

**nzakas:** We have limited time available to do reviews so I don't want to have to review the same PR twice if not necessary

**kaicataldo:** In that case, maybe it makes sense to have a feature branch for something like a new syntax upgrade

**mdjermanovic:** If we are always going to release `espree` before updating the core, then it's okay.

**kaicataldo:** I've love to avoid having 2,000 line PRs every time we need to add in a new syntax feature

**nzakas:** I think we are getting a bit into the weeds here

**nzakas:** Can we just say that if a PR isn't ready to be merged we'll submit it as a draft from now on and we'll see what problems it causes on the edges?
 * 👍 @btmills, @mdjermanovic

**nzakas:** We can always adapt, but I don't think we will know if it helps or hurts certain situations until we get into them

**kaicataldo:** Using the draft feature sounds good to me 👍

**kaicataldo:** Might as well use the feature that's intended to solve this problem

**nzakas:** Okay, it looks like we've agreed to use the pull request draft feature going forward for PRs that aren't yet ready to be merged.

**nzakas:** Next item:

**nzakas:** > Agenda item: as part of our donations to other projects, I’d like to suggest we start a monthly donation of $100 to Eleventy and Sindre Sorhus (we use several of his modules).
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** As background, we have set aside $500/month to donate to our dependencies. We are already supporting Ajv for $100/month.

**mysticatea:** 👍

**nzakas:** Okay, we've decided to donate $100/month to Eleventy and $100/month to Sindre.

**nzakas:** I'll take the action item to get that set up on Open Collective

**nzakas:** Those are actually the only two agenda items we have aside from discussing the release. Does anyone want to discuss anything else?

**nzakas:** @kaicataldo do you want to talk about Ublock Origin?

**kaicataldo:** Sure!

**kaicataldo:** I noticed the other day that the logos of sponsors wasn't showing up on our home page, and thought that maybe the website had broken

**kaicataldo:** Looking into it a bit, I realized that the assets were being blocked by uBlock Origin

**kaicataldo:** I haven't looked into how we can fix those for users who use adblockers (I know uBlock Origin has a lot of users), but it seems like we should figure that out if we can

**kaicataldo:** Since I don't think they should be categorized as ads

**kaicataldo:** For reference, the sponsor assets aren't blocked by uBlock Origin on my personal site (https://kaicataldo.com/sponsors)

**nzakas:** Agreed. I use two other ad blockers that don't block those, so not sure what their deal is.

**nzakas:** But uBlock Origin is open source, so we can file an issue: https://github.com/uBlockOrigin/uAssets
 * 👍 @mysticatea, @kaicataldo

**nzakas:** @kaicataldo do you want to take that as a followup?

**kaicataldo:** Sure thing
 * 👍 @mysticatea, @nzakas

**nzakas:** Thanks!

**btmills:** Looks like it's seeing the `.sponsor-link` class. Using a different string makes it reappear
 * 😆 @kaicataldo
 * 🤦‍♂️ @nzakas

**btmills:** Should we try changing the class name first?

**nzakas:** I don't think so

**nzakas:** That seems like a very weak signal to rely on

**kaicataldo:** `.sponsor-lynk`? 🙂
 * 😆 @btmills

**nzakas:** I'd rather see if they'll change it, especially since that seems to be a recent change.

**kaicataldo:** I'll make an issue
 * 👍 @nzakas

**nzakas:** A couple of other website related things to update everyone on:

**nzakas:** 1) I'm working with Open Collective to see what we can do about these online casinos. OC is working on the ability to block donations from specific users, just not sure when that will be available. If it's too far out, we may want to consider just keeping a list of IDs we want to ban and filter them out as part of the website generation.

**nzakas:** 2) So far the ads on the site are bringing in between $7-10 each day. We are doing a 50/50 split with a similar treatment asking people to donate to ESLint. It seems we've received 2-3 one-time donations during the same period.

**nzakas:** So about $48 in donations during the same time period, plus one $350 donation from a company.

**nzakas:** Company ones are harder to tie to the ads-sponsorships on the site but can't rule it out

**btmills:** Does Open Collective give us attribution information? For example, if someone starts a recurring donation, could we tell if they came from the website?

**nzakas:** @btmills no

**nzakas:** I can only go by the time period. We do tend to get 1-3 one-time donations each week in general.

**nzakas:** but can't discern where they came from

**btmills:** I'd propose we define a time frame after which we look at how the two performed. Unless we see one-time donations exceeding the ad revenue or recurring donations on a trajectory to surpass ad revenue if given more time, we switch to fully ads

**nzakas:** Yeah, I was thinking one month is probably enough time?

**nzakas:** The ads started on August 17

**btmills:** I was going to suggest another month as well 👍 not scientific at all, but seems reasonable
 * 👍 @kaicataldo

**btmills:** Call it the TSC meeting in 4 weeks?
 * 👍 @mysticatea, @nzakas, @kaicataldo, @mdjermanovic

**nzakas:** @kaicataldo @mysticatea ?

**nzakas:** All right, there we have it. We'll decide in four weeks at the TSC meeting.

**nzakas:** Shall we discuss the release? @kaicataldo are you set on that?

**kaicataldo:** Yeah, just need to review the new syntax PRs

**kaicataldo:** If others haven't done so yet, would love it if y'all could also take a look
 * 👍 @mysticatea, @nzakas, @btmills, @mdjermanovic

**kaicataldo:** Other than that, we should be good to go

**nzakas:** Just a reminder that once the release is done, you'll need to send a pull request from `master` to `no-ads` to ensure everyone is getting the same content during the split test
 * 👍 @kaicataldo

**nzakas:** (in the website repo)

**kaicataldo:** Ah, good reminder!

**nzakas:** Anything else to discuss before we end?

**nzakas:** Okay, I'll take silence as a "no". Thanks everyone!

**nzakas:** I may still be less around while we're fighting wildfires out here but will do my best to make some progress

**btmills:** 👋 stay healthy everyone

**mdjermanovic:** 👋

**mysticatea:** Thank you 👋

**kaicataldo:** Stay safe, everyone 👋

**btmills:** Meeting notes PR: https://github.com/eslint/tsc-meetings/pull/205
