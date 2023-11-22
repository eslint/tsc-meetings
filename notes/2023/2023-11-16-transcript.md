# 11/16/2023 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** All right, looks like we don't have any issues or PRs flagged for today. Are there any you'd like to discuss?

**mdjermanovic:** Nothing in particular for today

**nzakas:** Okay, then I have an update on Jenkins

**nzakas:** So we were running into issues with `re2` failing to compile during the release, which is something we also dealt with on GitHub, which caused us to remove `metascraper` to do the release.

**nzakas:** In trying to update our Node.js version on the Jenkins server, it turned out we were using Debian 9 and all of the `apt-get` repositories for that version were basically noops due to how old it was, so I couldn't actually update Node.js

**nzakas:** (or anything else)

**nzakas:** As a result, I requested a new droplet with Debian 12 and spent the last couple of days setting up a new version of Jenkins and porting over our remaining four release jobs.

**nzakas:** I tested one yesterday (`eslint-release`) and it worked, so I feel fairly confident that everything is working correctly.
 * 🎉 @mdjermanovic

**mdjermanovic:** Great news.

**nzakas:** Yes. A few quirks here and there that don't matter too much, like it keeps complaining that the reverse proxy is misconfigured but everything works so 🤷‍♂️

**nzakas:** So we'll keep around the old droplet until we're sure the new one is working correctly and then we'll recycle the old one.

**mdjermanovic:** Sounds good to me.

**nzakas:** All right, let's take a look at the v9.0.0 board

**nzakas:** https://github.com/orgs/eslint/projects/4/views/2

**nzakas:** Are there any outstanding questions blocking anything in alpha?

**mdjermanovic:** I don't think there are blockers for alpha

**nzakas:** It looks like the only functionality issue that hasn't been started yet is this: https://github.com/eslint/eslint/issues/14709

**mdjermanovic:** I could take that

**nzakas:** I pinged bmish again. If there's no response, it's all yours!
 * 👍 @mdjermanovic

**nzakas:** Okay, any blockers for beta?

**mdjermanovic:** Some rule changes need design, I'll initiate that as soon as possible
 * 👍 @nzakas

**mdjermanovic:** `no-restricted-imports` and `no-inner-declarations`

**nzakas:** I think we have an open question on: https://github.com/eslint/eslint/issues/17622

**mdjermanovic:** About warnings?

**nzakas:** About what we want the behavior to be overall

**nzakas:** https://github.com/eslint/eslint/issues/17622#issuecomment-1781362753

**mdjermanovic:** I'll check that soon as well
 * 👍 @nzakas

**mdjermanovic:** At the moment, I think allowing only comma-separated values would be fine, but I'll think about that more

**mdjermanovic:** As for the warnings, that's more complicated. `exported` is a common word, so we might run into problems with warning about comments that weren't intended to be eslint directives

**nzakas:** As I mentioned in the comment, I'm guessing this is a fairly infrequently used feature of ESLint at the moment, so I don't think we should spend too much time on it. I'd also be fine with leaving it as-is.

**mdjermanovic:** That was my thinking as well, no warnings.

**nzakas:** Let's follow up on the issue
 * 👍 @mdjermanovic

**nzakas:** Okay, last chance for any other topics for today...

**mdjermanovic:** Nothing in particular from me

**nzakas:** All right, let's talk about the release. Are you available?

**mdjermanovic:** Yes, I can tomorrow

**nzakas:** Thanks! If you'll plan on doing it around this time I'll make sure to be online in case there are any problems.

**mdjermanovic:** That would be great, thanks! Yes, around this time tomorrow

**nzakas:** Great, I'll put it on my calendar.

**mdjermanovic:** Thanks!

**mdjermanovic:** As for the packages, just `@eslint/js` and `eslint` I believe
 * 👍 @sam3k_, @nzakas

**nzakas:** All right, I think that's it for today. Thanks! (And thanks @sam3k_  for the notes)

**mdjermanovic:** Thanks!
