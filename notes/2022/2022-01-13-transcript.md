# 01/13/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Hi there!

**nzakas:** It's just you and me today, so we can get started.

**btmills:** I can take notes

**nzakas:** Thank you, sir!

**nzakas:** I just pulled this to discuss: https://github.com/eslint/eslint/issues/15456

**nzakas:** Basically, a bug in Acorn caused "use strict" to put the parser into strict mode even if ecmaVersion was 3.

**nzakas:** That bug has now been fixed in Acorn.

**nzakas:** Question: do we feel that this is a breaking change for ESLint?

**btmills:** oh boy...

**nzakas:** 🙂

**nzakas:** As I think I mentioned before, I kind of feel like we get a free pass for ecmaVersion: 3 as I just don't think there are many ESLint users who need that

**btmills:** this is a bug fix that results in fewer reported errors, so strictly speaking, that would imply semver-patch

**btmills:** that would be my expectation as well

**btmills:** though there's one vocal user on the thread who's relying on the (buggy) behavior

**nzakas:** Right 🙂

**btmills:** is the workaround to lint in both ES3 _and_ ES5?

**btmills:** if there are things that were valid ES3 yet invalid ES5, that seems like it would be the approach had this not been the behavior all along

**nzakas:** Yes, that's my opinion as well.

**btmills:** actually, that's a matrix build - if you need your product to work on multiple target environments, you test against multiple target environments

**nzakas:** Exactly

**btmills:** we were effectively accidentally doing the intersection of ES3 and ES5 in one run before

**nzakas:** Yup

**btmills:** yeah, I think since ecmaVersion can be supplied via the command line, if someone wants to do a matrix lint, that's already a supported workflow

**nzakas:** Yeah I just don't see a good argument, outside of clear self-interest, to not go ahead and make the change.

**nzakas:** Okay, so it sounds like we are in agreement that we can fix this in a patch release.

**btmills:** agreed 👍

**nzakas:** Sounds good. Do you feel like breaking the news on the issue or shall I? 🙂

**btmills:** hahaha I'm not relishing it, but I can do it when I go through and finish meeting notes

**nzakas:** Hehe I know. What I usually do in similar situations is post a comment and then log off for 24 hours.

**btmills:** I'll also mention that, short of forking Acorn, there's no good way for us to preserve the existing behavior

**btmills:** good idea lol

**nzakas:** Yeah, and I don't think adding a "force strict for ES 3" option makes a lot of sense.

**btmills:** yeah that's very specific

**nzakas:** Okay, we don't have any other issues or PRs tagged. Anything you'd like to discuss?

**btmills:** nothing before we go over December contributor awards

**nzakas:** Okay. Let me give a brief website update first and then we can go right there.

**nzakas:** The marketing site is more or less done at this point, we are just working through a couple of UI issues. Namely, the way the ad is blowing out the hero area on each page. It turns out Carbon Ads aren't always the same height, which I didn't know until now, and that's causing some challenges.

**nzakas:** We just merged the dark theme which looks 🔥  and it will be the default when the OS indicates dark colors are preferred.

**btmills:** woohoo 😎

**nzakas:** Sara is getting started on the docs pages now and that should go fairly quickly because they are all more or less the same format outside of the rules index page

**nzakas:** We do have a little challenge trying to figure out how to split the site because both use the same partials/includes/etc., but worse case scenario is we can wait and split the site at a later date.

**btmills:** I'm fine waiting to figure that out
 * 👍 @nzakas

**nzakas:** All in all, I think we should be good to at least do a preview launch by the end of the month. (Keep new.eslint.org up and ask for feedback while leaving eslint.org as the main site.)

**nzakas:** Any questions?

**nzakas:** I'll take that as no :

**nzakas:** 🙂

**btmills:** just pulled up the dark site and 🔥 indeed!

**btmills:** (nope, no questions)

**nzakas:** All right, so let's do December contributors

**btmills:** Yash-Singh1 for getting https://github.com/eslint/eslint/pull/15077 merged
 * 👍 @nowifi4u, @nzakas

**nzakas:** Our Discord posse: JackNapis and Kepeniukas
 * 👍 @btmills

**btmills:** stephenwade for a big batch of website frontmatter updates https://github.com/eslint/website/pull/895
 * 👍 @nzakas

**nzakas:** Oh yes!

**nzakas:** He also helped a bit in Discord

**btmills:** doubly great

**nzakas:** Looks like a slow month overall, no big surprise there

**btmills:** nope

**nzakas:** Shall we do $100 each?

**btmills:** let's do it

**nzakas:** Okay, I'll send out the emails.

**nzakas:** We have a release scheduled for tomorrow, are you able to do that?

**btmills:** either tomorrow or Saturday, yeah

**nzakas:** Awesome, thanks!

**nzakas:** We can probably wait until next release to upgrade Acorn 😁

**btmills:** haha yeah I'm good with yet

**nzakas:** Okay, any other topics before I call it?

**btmills:** all good from me!

**nzakas:** All righty then, happy new year and on we go!

**btmills:** happy new year to you too!
