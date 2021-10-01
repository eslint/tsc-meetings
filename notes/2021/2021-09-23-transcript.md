# 09/23/2021 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy

**nzakas:** @btmills are you set for taking notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** It looks like we don't have any issues on the agenda, so let's jump into v8.0.0 planning

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** And it looks like all outstanding issues have already been merged! 🎉
 * 🎉 @btmills, @mdjermanovic

**nzakas:** Which means we can do a release candidate, unless anyone is aware of anything we need to address before that?

**btmills:** only things we've talked about have been doable in semver-minor releases, so let's do an RC!
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Awesome. Just for a reminder, a release candidate is a release that contains all of the planned changes for a major version. In effect, this is the official v8.0.0 - just not tagged as "latest" yet.

**mdjermanovic:** Thanks for explaining

**btmills:** We haven't been applying the "patch release pending" label for the betas. Should we do that here to treat this like a regular release in all but `dist-tag`?

**nzakas:** That seems like a good idea 👍

**mdjermanovic:** Agree

**btmills:** I'll leave a note on the release issue
 * 👍 @mdjermanovic

**nzakas:** Because this release isn't "latest", we should still wait two weeks before doing the official v8.0.0, as it will likely take some time for people to try it out (if they even bother). So we need more time to get feedback than we do with a minor release.

**btmills:** agreed

**btmills:** I can include that context in my comment
 * 👍 @nzakas

**nzakas:** Since we are talking about the release, let's talk about the release! Any volunteers?

**mdjermanovic:** I can tomorrow

**nzakas:** Thanks!

**btmills:** thankya

**nzakas:** The only difference this time is you will select "rcrelease" in Jenkins
 * 👍 @mdjermanovic

**mdjermanovic:** I have two PRs ready for review, if anyone has time that would be nice to include in the release

**btmills:** can you link them for the transcript?

**mdjermanovic:** Expected version is 8.0.0-rc.0?
 * 👍 @nzakas, @btmills

**nzakas:** Yes

**mdjermanovic:** https://github.com/eslint/eslint/pull/15093

**mdjermanovic:** https://github.com/eslint/eslint/pull/15081

**nzakas:** I'll take a look right after this

**mdjermanovic:** Thanks!

**nzakas:** Since we have some time, I'll just give a brief update on the website redesign project.

**nzakas:** As I shared in the email, Hayden completed the brand design, which includes the logo, typopgraphy, color scheme, and just overall thematic elements of the brand.

**nzakas:** One thing he pointed out, which I liked, is that people associated the red squiggly line in VS Code with ESLint, and he'd like to lean into that as part of the brand.

**nzakas:** Which is why there were a couple of examples with intentionally misspelled words with a red squiggly underneath.

**mdjermanovic:** That's great idea

**btmills:** That was a good insight. We can lean into "it's like grammar check for your code" for someone seeing ESLint for the first time

**nzakas:** Right

**nzakas:** The other thing is he's really leaning into the "free and open source" part of the brand, which is why the fonts he chose are freely available and we don't have to pay for them (which he normally does with clients)

**nzakas:** He pointed out it's a nice story to say that all of the fonts we use are freely available just like the software is
 * 👍 @mdjermanovic

**btmills:** oh, that's a nice touch too!

**nzakas:** So overall, I've been really happy with the process and what we've come up with. Any thoughts on what you've seen so far?

**btmills:** there's a huge gap between what we'd get doing this ourselves or with someone doing it pro bono and the quality of the work that sponsorships are enabling us to pay for here

**nzakas:** Definitely. And also, it feels like we found the right person for the job.

**nzakas:** It would have been hard trying to explain to a designer what ESLint is and why it's important if they didn't already know

**btmills:** For sure. It feels like he really gets the vision. Being a user already was a huge help in hindsight

**nzakas:** Yup

**nzakas:** The next step is to actually start working on components for the website. I gave him an overview of the various page types we have and the problems I see with our current design, plus things we'd like to incorporate that we don't right now.

**nzakas:** I'll keep everyone posted as he shares his work

**btmills:** thanks for all the updates

**mdjermanovic:** thanks!

**nzakas:** Sure thing

**nzakas:** Any other topics anyone wants to discuss?

**btmills:** none from me

**mdjermanovic:** none from me, too

**nzakas:** Okie, then we are done! Just a reminder to periodically go through the "Needs Triage" and "Feedback Needed" columns on the Triage board to make sure we keep things moving. I'll continue adding more stuff to the bot to help move things along.
 * 👍 @btmills, @mdjermanovic

**btmills:** take care!

**nzakas:** See you in two weeks!

**mdjermanovic:** thanks, see you
