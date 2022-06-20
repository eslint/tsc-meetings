# 06/16/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi @btmills !

**btmills:** Looks like it's just us today! I can take notes per usual. Are you interested in moderating?

**mdjermanovic:** Sure!

**mdjermanovic:** Switching to the new website

**mdjermanovic:** In my understanding, @nzakas would like to do that right after we finish with this week's release (on Monday)

**btmills:** Quoting @nzakas for the notes:
> I’d like to launch the new website next week. So eslint.org becomes archive.eslint.org and then new.eslint.org becomes eslint.org. I’d plan on doing that after any patch release to give us two weeks to work out any issues.

**btmills:** No objections here!

**mdjermanovic:** It's very close. I'm aware of a few things still missing, for example the formatters page

**mdjermanovic:** I could open an issue with a list of things that should be done, so we could discuss the timing on the issue

**btmills:** Append them to this issue? https://github.com/eslint/new.eslint.org/issues/117

**mdjermanovic:** Yes, I can add to that list

**btmills:** Are there any things that still need to be done that you think might push back the timeline?

**mdjermanovic:** Depends on how important we think some missing things are

**mdjermanovic:** For example, we should probably have the formatters page on the new site. https://eslint.org/docs/user-guide/formatters/

**btmills:** Makes sense, and we currently generate that file automatically, so we may have to do some plumbing. I don't want to do any further digging here, so sounds like leaving anything on that issue would be the way to go
 * 👍 @mdjermanovic

**mdjermanovic:** I'll update the issue right after the meeting

**mdjermanovic:** We have another agenda item on the meeting issue https://github.com/eslint/tsc-meetings/issues/353#issuecomment-1154599196

**mdjermanovic:** Agenda item: Given that Eleventy is sponsored full-time by Netlify, it seems that we should cancel our sponsorship and redistribute those funds to other projects that aren't as well-funded. Candidates include:

Mocha
Chai
Sinon
Rollup

**btmills:** In descending order of Open Collective's estimated annual budget: Mocha ~$32K, Rollup ~$9K, sinon ~$7K, Chai ~$2K

**btmills:** actually, let's start here: I'm 👍 to reallocating our Eleventy contribution to other project(s)
 * 👍 @mdjermanovic

**mdjermanovic:** Agreed

**btmills:** Cool. We previously contributed $150/mo to Eleventy (and other dependencies)

**mdjermanovic:** I'd propose Mocha and/or Rollup

**btmills:** How do we want to decide which one? Any opinions? Ideas include: current budget, how active work is, how crucial it is to eslint

**mdjermanovic:** My proposal was based on which of those projects are most crucial to eslint development

**btmills:** that makes most sense to me as well

**btmills:** Which one of those two do you think would be harder to swap out if it stopped working? I'd argue Mocha

**mdjermanovic:** If we want to choose only one, then we could factor in the budget. In particular, Rollup seems less funded than Mocha

**mdjermanovic:** From that point of view, I agree with Mocha

**btmills:** Since there's such a big dropoff from Mocha to Rollup, maybe go with Rollup instead?
 * 👍 @mdjermanovic

**mdjermanovic:** It seems we agree to redistribute funds to Rollup
 * 👍 @btmills

**mdjermanovic:** I don't see any other issues labeled with "tsc agenda", is there anything else you would like to discuss?

**btmills:** nothing from me

**mdjermanovic:** nothing from me, too

**mdjermanovic:** Then, we have a release tomorrow

**btmills:** Doing a release this weekend would be tough for me. Are you available?

**mdjermanovic:** Yes 🙂

**btmills:** whew

**mdjermanovic:** I'll do the release tomorrow
 * 👍 @btmills

**mdjermanovic:** It will be only `eslint` package
 * 👍 @btmills

**mdjermanovic:** Okay, I think that's all for this meeting 🙂

**btmills:** 👋 take care!

**mdjermanovic:** Thanks! 👋
