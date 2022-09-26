# 09/22/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** It looks like we are at full strength. @btmills can you take notes?

**btmills:** yep!

**nzakas:** Thank you, sir.

**nzakas:** It looks like we don't have anything tagged for today. I can give some updates on various thing, but before I do, are there any topics anyone wants to bring up?

**mdjermanovic:** Nothing in particular from me

**btmills:** Nothing here

**nzakas:** Okay then, some misc updates

**nzakas:** First, eslint-community is getting up and running. @MichaelDeBoey has been handling that. I've been setting up the npm bot for that repo so packages can use that to publish. That way, if a package goes out of maintenance, we are still able to publish new versions.

**nzakas:** I'm working with Hayden on getting a logo done for eslint-community.

**nzakas:** actually, I can share where we're at so far, one sec

**nzakas:** Currently I like the lettering of the last two best and I'm about even with all the possible logos.

**nzakas:** Any strong opinions?

**btmills:** Ooh!

**btmills:** Agreed with you on lettering of the last two. I like that it emphasizes this is part of ESLint

**mdjermanovic:** All are great. I'd choose the last one

**nzakas:** I've asked Hayden to do some mockups with the lettering from the last two combined with the three logo variations so we can compare apples-to-apples

**btmills:** Of the logos, for something from scratch I most like the third visually, but I think 1/4 (they look the same, just different sizes) do the best job of conveying multiple packages within ESLint's hexagon

**nzakas:** Yeah, those are my favorites, too. I like 1 because it looks like it could be part of the same family as the ESLint logo, while I like 3 because it feels more impactful while still hinting at the ESLint relationship.

**nzakas:** Although sitting back from the screen 1 looks like it has a jagged border due to the circle on the outside and the hexagon on the inside.

**nzakas:** Anyway, once we get the next round of mockups I'll send around for another look.

**nzakas:** For the documentation project, we have our lead, which is Ben Perlmutter. You've all reviewed and liked the proposal. 🙂 I'm going to set up a time with him next week for a kickoff meeting.

**btmills:** very exciting!

**nzakas:** I'm pretty optimistic about this based on my discussions with him and the proposal. I think he has a good sense of what is needed and where gaps currently exist.

**nzakas:** He also has some experience working with translation services which could prove very helpful.

**btmills:** oh interesting, are you thinking about that for additional translations of the marketing site, or for docs as well?

**nzakas:** Both but thinking more about the docs. I don't think the approach we're taking with the Chinese docs is going to scale after very long. Translating everything by hand, especially if docs are changing every two weeks with releases, doesn't seem like a good long-term solution.

**nzakas:** The marketing site can probably keep going the way that it is because the text doesn't change very frequently and the amount of text is reasonable for one human being.

**btmills:** that makes sense

**nzakas:** Let's talk about flat config a bit next -- I think this rollout has actually gone pretty well. The types of bugs we are getting seem to be on the edges rather than core compatibility problems, which is a bit of a relief. And thanks @mdjermanovic for your thorough testing. It's pretty clear that existing tests weren't testing all of the eslintrc behavior accurately.

**nzakas:** Do you folks have other thoughts you'd like to share?

**mdjermanovic:** About the flat config?

**nzakas:** Yes

**mdjermanovic:** globby's (actually fast-glob's) `ignore` seems problematic for multiple reasons. I'm not sure if it's actually used to optimize the search (e.g., by not traversing ignored directories) or is just filtering out results. Maybe we could consider not passing `ignore` and just let FlatConfig to filter the results

**nzakas:** it's used to optimize the search. If we don't include it, then it will end up traversing into `node_modules`.

**nzakas:** If not for `node_modules` we could do a search and then filter, but `node_modules` just kills any search.

**nzakas:** As far as I can tell the only real issue is that negated patterns don't work in ignores, but I think I have a workaround for that.

**mdjermanovic:** I was experimenting with creating directories with disallowed access deep inside directories that should be ignored, and globby was crashing trying to read them

**nzakas:** Okay, let's pull this back out to an issue to discuss.
 * 👍 @MichaelDeBoey, @btmills, @mdjermanovic

**nzakas:** Maybe there's a better utility out there that we can switch to. My primary goal was that I didn't want us to own another custom globbing utility like `FileEnumerator`. This is a solved problem, so let's look for an existing solution.

**nzakas:** Any thoughts on how the flat config rollout has gone?

**btmills:** Agreed on the smoothness. I think that justifies a lot of the decisions you made along the way. Curious how much adoption it's getting in prerelease state and how confident we should be feeling

**nzakas:** There are certainly a fair number of discussions and issues being opened, so I think we are probably getting early adopters right now.
 * 👍 @mdjermanovic

**nzakas:** I especially like this one: https://github.com/eslint/eslint/issues/16302

**nzakas:** Really some good data on a fairly large configuration that wasn't performing up to snuff

**nzakas:** ...until the very last comment. 😁

**btmills:** Improvements that big are so fun, bravo 👏

**nzakas:** I kind of feel like we are an archaeology team at this point, exploring the depths of eslintrc to discover its secrets.

**btmills:** Sure seems that way! What an ironic time to know more about eslintrc than at any point in the past

**nzakas:** Well, that is part of why we needed a new config system. We just didn't understand everything eslintrc was doing.

**nzakas:** Any other thoughts on flat config before we talk about the release?

**nzakas:** Okay then, let's talk about the release!

**btmills:** I'd be available Sunday if @mdjermanovic hasn't already done it

**mdjermanovic:** I could tomorrow

**mdjermanovic:** This time it should be just `eslint`
 * 👍 @nzakas, @btmills

**btmills:** thanks @mdjermanovic!

**nzakas:** Okay, I think that is all for today. Thanks everyone!

**btmills:** 👋 take care!

**mdjermanovic:** Thanks!
