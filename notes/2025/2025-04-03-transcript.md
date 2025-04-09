# 04/03/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy! Just need a minute. Running from another meeting.

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Okay, here we go.

**nzakas:** Pulling up the notes from last meeting

**nzakas:** Only action item was for me to start the CSSTree fork, which I did. I also reached out to the maintainer of CSSTree to discuss potentially working together.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Let's do statuses next. I updated `defineConfig()` to look for `flat/` configs, updated `@eslint/create-config` to use `defineConfig()`, and did a bunch of work around types for the CSS and JSON plugins.

**mdjermanovic:** I have been working on the `basePath` RFC

**fasttime:** I've been mostly busy reviewing PRs and working on types.

**nzakas:** RFC Duty schedule:
This week - @mdjermanovic 
March 10 - @fasttime 
March 17 - @nzakas

**mdjermanovic:** This week was @fasttime ?
 * 👍 @fasttime

**nzakas:** Hmm, according to the notes:

**nzakas:** > 
>     This week (Feb 17) - @fasttime
>     Feb 24 - @nzakas
>     Mar 3 - @mdjermanovic

**nzakas:** Oh shoot, wrong notes 🤦‍♂️

**mdjermanovic:** Those are maybe old notes, this is from the last:
March 17 - @nzakas
Mar 24 - @mdjermanovic
Mar 31 - @fasttime

**nzakas:** Yes, thanks.

**nzakas:** Okay, so next up would be:
This week - @fasttime 
April 7 - @nzakas 
April 14 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, let's discuss availability. For the next couple of weeks I'll only have one hour each weekday.

**mdjermanovic:** I'll probably still be at around 70-80% of my usual availability

**nzakas:** @mdjermanovic what's that roughly in hours?

**mdjermanovic:** around 1.5 hours per day
 * 👍 @nzakas

**fasttime:** For me 7-9 hours per week this and next week, will have a little more time by the end of the month.
 * 👍 @nzakas

**nzakas:** Okay, it looks like we don't have any issues or PRs tagged for today. Any topics anyone would like to discuss?

**fasttime:** Nothing from my side in particular.

**mdjermanovic:** Nothing in particular for today

**nzakas:** One thing I want to bring up: @fasttime there are some new comments on the concurrent linting RFC. Do you think you can take a look?

**fasttime:** Yes, I'll have a look during the weekend.
 * 👍 @nzakas

**nzakas:** Otherwise just a couple of reminders:

1. Please be sure to check in on Discord each day at least once.
2. Please check for issues where eslint-tsc has been mentioned
 * 👍 @mdjermanovic

**nzakas:** and 3. Please be sure you're moving issues/PRs through the triage board columns 😄
 * 👍 @mdjermanovic

**fasttime:** Thanks 🤦‍♂️

**nzakas:** Let's do Contributor Pool

**nzakas:** Ooh, new UI on this page: https://github.com/issues?q=org%3Aeslint%20label%3A%22contributor%20pool%22%20merged%3A2025-03-01..2025-03-31%20

**nzakas:** We had a lot of submissions last month.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** rviscomi also had several code contributions in `@eslint/css` but looks like neither was labeled: https://github.com/issues?q=org%3Aeslint+author%3Arviscomi+merged%3A2025-03-01..2025-03-31

**nzakas:** Yes, he let me know that he doesn't wish to participate.

**mdjermanovic:** Ah, okay then. didn't know

**nzakas:** Let's start with the big one: bulk suppressions from softius. I'd suggest $2,000 for all the RFC and implementation work.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Pixel998 had a few PRs. The biggest being the switch to Cypress. @fasttime you're more familiar with that work. What's your recommendation?

**fasttime:** That PR took two attempts, not counting my unsuccessful ones, so maybe at least $200?

**mdjermanovic:** And maybe another $100 for the `./` patterns work, so $300 in total?

**fasttime:** Yeah, the other PRs seem related

**fasttime:** Then maybe $300 is okay?

**nzakas:** Okay, $300 it is.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** xbinaryx had four PRs

**nzakas:** All four website-related stuff. So $400?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** mrmckeb had two smalls PRs, so $150?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** fisker - $100?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** ryo-manba - $100?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** sethamus - $100?
 * 👍 @mdjermanovic

**nzakas:** azat-io implemented an entire rule, so $300?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I think that's everyone?

**mdjermanovic:** Yes, I also think the list is complete
 * 👍 @nzakas

**nzakas:** Okay, let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**nzakas:** We'll have the suppressions blog post to publish too. I added a note on the release issue.
 * 👍 @mdjermanovic

**mdjermanovic:** That would be only `eslint` and `@eslint/js` this time I believe
 * 👍 @nzakas, @fasttime

**nzakas:** Okay, if there's nothing else, I think we can call it a meeting. Thanks everyone (and thanks @sam3k_ for the notes).

**mdjermanovic:** Thanks!

**fasttime:** Thanks! Bye 👋
