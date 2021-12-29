# 12/16/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Apologies for being late. Backblaze was running on another computer that I forgot about and it saturated my network. Took me a minute to figure out what was happening.

**btmills:** haha network saturation is always weird

**nzakas:** I'm not sure if Backblaze is actually backing up my files but it definitely stresses my network regularly.

**nzakas:** Anyway...

**nzakas:** Welcome! Before getting started, I just wanted to ask what days people are planning on being offline for the holidays?

**nzakas:** I'll be offline all next week (week of December 20)

**mdjermanovic:** I don't have anything planned

**btmills:** no planned offline blocks

**nzakas:** Okay then 🙂 Just me

**nzakas:** I also wanted to say thanks to you both for a productive year on ESLint. I know we've run into a few speedbumps here and there, but I really feel like we made a lot of fantastic progress since the start of the year. I'm really proud of what we've accomplished and grateful to you both for your dedication.
 * ❤️ @btmills, @mdjermanovic

**btmills:** it's always fun to look back and see what the team accomplished, well done all 👏
 * 👍 @nzakas

**nzakas:** And with all that said, we have one PR flagged for the agenda today, so we'll dig into that and then open up for other issues. I'll also give a website update.

**nzakas:** https://github.com/eslint/eslint/pull/15279

**nzakas:** > **TSC Summary:** This PR seeks to add suggestions to no-misleading-character-class, specifically adding the “u” flag if it would result in a valid regular expression. Both nzakas and btmills have approved the PR, mdjermanovic has concerns about the side effects of the suggestions. We do allow side effects in suggestions in core rules.
> 
> **TSC Question:** Do we want to change our expectations around suggestions? (https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions) Can we merge this?

**nzakas:** I just saw @mdjermanovic left another comment from the last time I saw it

**nzakas:** https://github.com/eslint/eslint/pull/15279#issuecomment-996014948

**mdjermanovic:** I think we have different views on side effects. For example, `no-useless-escape` suggests fixing `/\a/` to `/\\a/`. That's a change in behavior that affects all places where the regular expression is used, but I don't consider it being a side effect. By side effects, I mean changes that are not related to the reported problem. Adding the `u` flag makes changes that are not only related to reported misleading character classes.

**nzakas:** Okay, I think that's a helpful place to start -- we have a semantics issue to dig into.

**btmills:** I appreciate that nuance, and it's not something I had considered when I first approved the PR

**nzakas:** Are we agreed that suggestions may change the behavior of the affected code in general? (Leave +1 if yes)
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay good, I think we're all aligned there. So I think the nuance then is how large of a change in behavior is acceptable?

**nzakas:** I'm guessing we all agree that changes narrowly focused to the problem are okay?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Like changing `==` to `===` clearly changes the behavior but is localized to that change.

**nzakas:** (As an example for the record)

**mdjermanovic:** Yes. The change propagates to other code that is using the expression, but that's like a "direct effect"

**mdjermanovic:** Unlike the `u` flag that has side effects. That said, the `u` flag is probably the best suggestion to fix the problem. I'd only like to add a note in the suggestion message.

**btmills:** To confirm my understanding, your concern is that adding the `u` flag also affects parts of the regular expression outside of the particular character class, and you want to make sure developers are aware of that indirect effect before applying the suggestion. Do I have that right?

**mdjermanovic:** Exactly

**nzakas:** My concern is that the line between "behavior change" and "side effect" can't be properly explained to our users, and if we start putting in extra explanatory text in one place, then we need to do it in all places to eliminate the ambiguity.

**mdjermanovic:** We currently don't have other places, such suggestions should be generally rare

**nzakas:** Do you mean we don't have other places where suggestions have side effects?

**mdjermanovic:** By my definition of side effects, no 🙂

**btmills:** "indirect" effects as we've been calling them, however vaguely that's defined

**mdjermanovic:** We have suggestions that do change behavior, but in a direct way that only relates to the reported problem

**nzakas:** Right, and this is my point: it took us like two weeks to finally get into the nuance here. I just don't think this distinction is something that end users will understand.

**nzakas:** Nevermind any plugin rules that might have suggestions, which we can't control at all.

**nzakas:** I think it may be better to train our users to understand that suggestions are, in fact, somewhat dangerous and they should double-check their code when using them.

**nzakas:** (For the record, we currently have four core rules with suggestions.)

**btmills:** One design principle I like is "trust that your users are smart too". It feels like this might be a scenario where that applies. As long as we're clear on our messaging that suggestions are used when something might be an improvement, but we can't be totally sure it's the right change, then we can trust developers to consider the impact of the change or look up docs on the flag if they don't already know
 * 👍 @nzakas

**mdjermanovic:** Okay, that is an approach we could take.

**nzakas:** Just to be super clear on this point: I think @mdjermanovic has shined a light on an area of ambiguity in ESLint that may adversely affect our users. My goal is to find a solution that scales going forward so that we are teaching our users appropriately and don't need to re-solve this same problem later.

**nzakas:** So given all of that, I think I have a potential solution.

**nzakas:** At the top of each rule page with a suggestion, we have a lightbulb and the text "Some problems reported by this rule are manually fixable by editor suggestions."

**nzakas:** What if we change that so that it says "Some problems reported by this rule may be fixable by editor suggestions. (Warning)" and link "Warning" to a page that describes the potential pitfalls?

**nzakas:** As an example page: https://eslint.org/docs/rules/no-unsafe-negation

**mdjermanovic:** Yes, that sounds great.

**btmills:** I think docs and our messaging around suggestions will work!

**nzakas:** Cool! It sounds like we've agreed to update how we mention suggestions in our rule pages. @btmills would you mind opening an issue for that on the website repo?
 * 👍 @mdjermanovic

**btmills:** will do 👍

**nzakas:** To pop the stack a bit, are we okay with merging the PR as-is, or would we prefer providing some alternate suggestions that are more narrowly focused as well?

**mdjermanovic:** I'd be fine with merging the `u` flag suggestion and thinking about other suggestions later. There is another thing that might have to be fixed before merging - cases when `u` flag causes syntax errors.
 * 👍 @nzakas, @btmills

**nzakas:** Sounds good. I agree, we should not be introducing invalid regexs under any circumstances

**btmills:** I agree we should avoid syntax errors

**nzakas:** Okay, we've agreed that the current suggestions in the PR are fine, but we want to ensure no invalid syntax can be created before merging.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Anything else on this topic before we move on?

**mdjermanovic:** Nothing from me

**nzakas:** Cool, so let me give a website update

**nzakas:** Things are moving along fairly quickly. Now that the blog images are done, Sara is almost done with the blog section of the new site and it looks fantastic with the images in place.

**nzakas:** We are going to need to go through an update all of our blog post front matter to make everything work, though. I opened an issue for that:

**nzakas:** https://github.com/eslint/website/issues/894

**nzakas:** It's not the most exciting work in the world, but I figure if we can split it up and maybe everyone take one year of posts at a time, we can get through it fairly quickly.
 * 👍 @mdjermanovic

**btmills:** sign me up 👍

**nzakas:** I'll also tweet it out to see if we can get any help

**nzakas:** The donate and sponsors pages are done at this point

**nzakas:** She's working on getting syntax highlighting into the blog posts

**nzakas:** There's a little bit of work left on the branding page

**nzakas:** The team page is finished. If you want to go and add a Twitter username, website, and description to your GitHub profile, we will pull those to fill in on the team page.
 * 👍 @btmills

**nzakas:** Example: https://deploy-preview-38--new-eslint.netlify.app/team/

**nzakas:** The major pieces that are left are the language picker, the dark/light theme switcher, and the animation on the homepage.

**nzakas:** I think after that we'll be in good enough shape to share publicly and start collecting feedback.

**nzakas:** And then she will get started on the docs site

**nzakas:** At least in the short term, she's going to build the docs site in the same repo in order to reuse the same components. We will split it up at the end once everything is stabilized. I'm also thinking through how to better reuse the component library across the marketing and docs site.

**nzakas:** So that's where we're at. I'm pretty happy with the progress and how things are coming along. Any questions?

**btmills:** none from me. very exciting!

**nzakas:** Oh, and for fun, I had the illustrator give me a couple of clean copies of the rocketship and truck so we can make t-shirts from them. 🙂 I just love those images so much.
 * 💯 @btmills

**nzakas:** And in case you missed it, RedHat donated $3000 to ESLint.

**nzakas:** From what I gather, it was either related to my podcast interview or related to the log4j crisis, but in either case, a nice surprise.

**nzakas:** If you can retweet the tweet I shared in the team chat to promote this some more, I'd appreciate it.
 * 👍 @btmills, @mdjermanovic

**nzakas:** In other news, in January I'm going to try to put together an "annual report" showing the money we took in and how it was spent, kind of like companies do. I'm spending so much time in spreadsheets due to my real estate business that I think I can come up with something nice to show everyone.
 * 👍 @mdjermanovic

**btmills:** nice side benefit. I'll look forward to that. Need any help with it?

**nzakas:** I will let you know once I get into the data 🙂

**nzakas:** That's all I have to share. Any other topics anyone would like to cover before we talk about the release?

**btmills:** none from me

**mdjermanovic:** none from me, too

**nzakas:** Okay, then release time!

**mdjermanovic:** I can do the release tomorrow
 * 👍 @btmills

**nzakas:** Thanks!

**nzakas:** I don't think we have any packages to release other than `eslint`

**mdjermanovic:** Yes, it looks like only eslint this time

**nzakas:** I did just do the first release of `@eslint/create-config`, as an FYI, so that feature should be ready to move forward, but definitely for the release after tomorrow.

**mdjermanovic:** Yes, there's one problem that should be fixed

**nzakas:** Cool. I'll be glad to get that extracted soon.

**nzakas:** That's all we have for today. Thanks everyone!

**mdjermanovic:** Thanks!

**btmills:** 👋 take care!
