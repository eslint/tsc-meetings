# 04/21/2022 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Looks like we've got everyone, so let's get started

**nzakas:** @btmills are you good to take notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** Looks like we don't have any issues tagged for this week, but an old one was tagged from last time. (Don't forget to remove "tsc agenda" labels once an issue has been resolved.)

**nzakas:** I can give an update on the website redesign project and then we can open things up for any other issues

**btmills:** sorry about that
 * 🤗 @nzakas

**nzakas:** The playground is almost ready to launch.

**nzakas:** We just have  a couple of UI bugs to work through but those could very well be resolved within the next 24 hours.

**nzakas:** The trick with the Playground is we need to set up some automation to update the ESLint version when we do a new release.

**nzakas:** (I don't want to add another manual step to the release.)

**nzakas:** But otherwise, there's no reason we can't push the playground live next week.

**btmills:** very exciting!

**nzakas:** For the docs, as long as we can get my latest frontmatter changes in for tomorrow's release, I'll be able to start next week on getting that up and running, too. That's a case where it will be easy to get the initial site up but it will take some time to go through and update all docs to look their best in the new format. I'll be asking for help when we get to that point.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Another thing I discovered related to this: Netlify supports proxies. Why does this matter? The initial thought of having a separate docs.eslint.org domain was so we could have a completely separate site to manage independently of the marketing site. But with Netlify proxies, we can actually have eslint.org/docs transparently point to docs.eslint.org, and that seems like it would be a good idea. Thoughts?

**nzakas:** Also, the proxy approach would mean we could have es.eslint.org/docs instead of es.docs.eslint.org, so each translation's docs could be in the same place off the main site.

**mdjermanovic:** We would then have both `eslint.org/docs` and `docs.eslint.org`?

**btmills:** That sounds much nicer. Are we able to 302 those so the internal implementation isn't exposed?

**nzakas:** Yes, but docs.eslint.org wouldn't be crawlable on its own and would effectively be an internal-only domain.

**nzakas:** I believe we'd end up in a redirect loop if we did that. 😕

**nzakas:** Although. Hmmm. Let me look into that. It may be possible.

**btmills:** It'd be nice if the subdomains were effectively invisible

**mdjermanovic:** We would then keep the demo (playground) under eslint.org/... as well?

**nzakas:** It would be, but if we don't publicly show them and disallow crawling then they'll effectively be invisible.

**btmills:** I think that works then

**nzakas:** I was still thinking of doing a separate domain for the playground

**nzakas:** But I'm not married to that idea.

**nzakas:** I would want to change it to /play though

**btmills:** Seems like es.eslint.org/play would be more consistent with the other sites than es.play.eslint.org

**mdjermanovic:** So basically all the existing public URLs would  remain the same (except maybe demo/playground), we'll just use multiple repositories to manage the content under the hood
 * 👍 @nzakas, @btmills

**nzakas:** Ah, I wasn't picturing doing translations for the playground

**nzakas:** But if we might want to do that, then I agree doing /play with a proxy probably makes more sense.

**mdjermanovic:** Makes sense to me

**btmills:** Sounds like the proxy approach makes sense, TBD on the playground and whether there's any reason to prefer one approach or the other. If there's no downside to /play, I'd lean that direction for consistency (and to allow us to translate if we want to)

**nzakas:** Yeah, I'll go with /docs and /play as we roll out

**nzakas:** Everything comes full circle 🙂

**btmills:** haha yes, and in this case we're having our cake and eating it too!

**nzakas:** All because I randomly ended up on the Netlify proxy docs 🤷‍♂️

**btmills:** fortuitous!

**nzakas:** Once we get the playground and docs rolled out, then we can also launch the marketing site as it's ready to go as-is.

**mdjermanovic:** How will the new docs site generate the rules page? Will we manually update some data file? https://eslint.org/docs/rules/

**nzakas:** Yes, I was thinking we'd run a script just prior to running Eleventy, kind of like what we do with the sponsors and donation data on new.eslint.org right now.

**nzakas:** So, generate a data file and then Eleventy will use that to generate the page
 * 👍 @btmills

**mdjermanovic:** If we'll have a preprocessing script, why are we making everything else static?

**nzakas:** I'm not quite sure what you're asking, but let's take this offline. There will be plenty of time to figure out the right implementation during the transition period.

**mdjermanovic:** sure!

**nzakas:** We also launched our first translation site, es.eslint.org. We have two more with PRs right now, Chinese and Japanese, and we could have those up as soon as tomorrow.

**nzakas:** As a note, we aren't translating the blog posts, so /blog/* on any translation site redirects to the English site

**btmills:** good thought

**nzakas:** And that is all for the website redesign update. Any questions?
 * 🦗 @btmills

**nzakas:** Okay, any other topics to discuss?

**mdjermanovic:** Nothing in particular from me

**nzakas:** Shall we talk about the release then?

**mdjermanovic:** I can tomorrow

**btmills:** thanks

**nzakas:** Thanks!

**mdjermanovic:** that will be `@eslint/eslintrc` to fix a bug, and `eslint`
 * 👍 @nzakas

**mdjermanovic:** @nzakas if you have time to check if your reviews have been addressed, it would be great to include this in the release https://github.com/eslint/eslint/pull/15296

**nzakas:** I'll take a look right after this

**mdjermanovic:** Thanks!

**nzakas:** All right, if there is nothing else, then I think we are done!

**nzakas:** Thanks everyone

**mdjermanovic:** Thanks! 👋

**btmills:** take care! 👋
