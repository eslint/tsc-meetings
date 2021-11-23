# 11/18/2021 ESLint TSC Meeting Transcript

**Hoeyrup:** security-plugin maintenance

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** Let's give @btmills a couple minutes to join
 * 👍 @mdjermanovic

**nzakas:** I'll wait two more minutes then we can start. Don't want to waste too much time

**nzakas:** All right, let's get started

**nzakas:** @mdjermanovic are you up for taking notes for this meeting?

**mdjermanovic:** Sure!

**nzakas:** Thanks!

**btmills:** Sorry! Here now

**nzakas:** Oh, there he is

**nzakas:** @btmills would you like to reclaim your note-taking role?

**btmills:** Dibs 🙂

**nzakas:** Awesome. @mdjermanovic you're off the hook

**mdjermanovic:** thanks! 🙂

**nzakas:** All right, let's jump right in

**nzakas:** First item: https://github.com/eslint/eslint/issues/15327

**nzakas:** > > **TSC Summary:*** In v8.0, we changed the behavior of ecmaVersion:3 to forbid reserved words. IE 6 actually allows some (or all) reserved words to be used. This request is to provide a looser ES3 variant for such purposes.
> > 
> > **TSC Question:** How do we want to address this?

**mdjermanovic:** We can support only what Acorn supports, and I believe there's no option for the list of allowed reserved words

**mdjermanovic:** There's only an option to allow all

**btmills:** In principle I’m okay with basically an IE6 mode if it’s technically feasible

**nzakas:** @mdjermanovic my request to ljharb was really just to confirm if this was an all or none situation -- I think that's the case but I'm not sure.

**nzakas:** The challenge here is he is basically asking for a way to revert to our ES3 behavior prior to ESLint 8

**nzakas:** In effect, we had what he wants and we changed it.

**nzakas:** For reference: https://github.com/eslint/eslint/issues/15017

**mdjermanovic:** Wouldn't reverting that be a breaking change now?

**nzakas:** Yes

**nzakas:** But I think there's a larger question of whether we made the right decision when we made the change

**nzakas:** It seemed like the right decision at the time, and I do think there's value in having a strict ES3 parser that matches the spec vs. whatever IE6 is doing.

**nzakas:** I really don't want to add an "allowReserved" option that then needs to play with all other versions too

**mdjermanovic:** We can restrict the option to ES3 only

**nzakas:** I suppose so...just...yuck

**btmills:** Yeah… but my only other idea would be including it as part of the version, but ecmaVersion: ie6 would be yucky too

**nzakas:** We do throw an error if someone does sourceType:module with ecmaVersion:5, so I suppose it's not unprecedented to forbid an option

**btmills:** Fair point. It should also be forbiddable in the JSON schema so we might not need additional runtime code for it

**nzakas:** We'd need Espree to implement the constraint, though, which is outside of the JSON schema

**mdjermanovic:** I think the check only in Espree would be okay
 * 👍 @nzakas, @btmills

**nzakas:** Okay, so it sounds like what we're agreeing to do is add an "allowReserved" option in Espree that is valid only for ecmaVersion: 3
 * 👍 @btmills, @mdjermanovic

**nzakas:** Great

**nzakas:** Next item:

**nzakas:** > Agenda Item: I'd like to discuss setting up an eslint-community organization on GitHub to provide a place for high-value ESLint ecosystem projects to live. With `eslint-plugin-security` going dark, this seems to highlight the need to have a place where important packages can exist such that if they ever go dark, they can be easily revived. The idea is to make this organization a place where project owners can apply to be part of. When they join, they agree to some basic standards (like 2FA, having a code of conduct, etc.) but otherwise run their projects as they would like. (Obviously details need to be more fleshed out, but let's discuss if we want to head in this direction.)

**btmills:** There’s already precedent for this in webpack-community, so 👍
 * 👍 @mdjermanovic

**nzakas:** Yeah, this is a pretty common pattern, there's also nuxt-community.

**nzakas:** Okay, I'll take the action item to write up a larger proposal for how all of this will work. Maybe as an RFC?
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** RFC sounds good to me

**nzakas:** Okay, I'll multiplex that with the config work

**nzakas:** Speaking of config work

**nzakas:** > Agenda item: I’ve had several PRs waiting for reviews in the past 7 days and they’ve received zero comments. What can we do to get each other’s PRs more attention? It’s hard to make progress when the feedback loop is this long. It also seems like folks aren’t checking Discord that often so my asks for reviews in there don’t seem to have any effect.

**nzakas:** I think in general this falls under a category of processes breaking down, for whatever reason

**mdjermanovic:** Sorry about that. I wanted to finish up new syntax for this release, I'll focus on reviewing from tomorrow.

**btmills:** For me, I haven’t done any ESLint stuff in the last two weeks, but prior to that, I’d been prioritizing the feedback needed column on the triage board. That also helped me because it could be done in smaller chunks

**btmills:** I’m able to dedicate larger chunks of time in the coming weekend and especially holidays

**nzakas:** I appreciate that, and I'd like to see if we can just set up some expectations for ourselves around how to prioritize and when we'll be checking in.

**nzakas:** For instance, should we say team pull requests should take priority over everything else when we have a free 30 minutes?

**btmills:** Works for me. <=30 issues, >=30 PRs

**nzakas:** (I'm honestly not sure how healthy people manage their time at this point, so let me know what makes sense.)

**btmills:** Hahaha umm don’t look at me

**btmills:** I just stay up too late

**mdjermanovic:** We already agreed on taking at least 1day/week to review team pull requests, but seemingly forgot that

**btmills:** (But that also means maintaining context for longer PRs is harder)

**nzakas:** @mdjermanovic indeed, I remembered that but couldn't remember how far back we had agreed to it.

**nzakas:** So do we want to stick to the one day per week for reviewing team requests? Or is there another way to better organize?

**nzakas:** What I do: I separate coding time from reviewing time.

**mdjermanovic:** That sounds good to me. (minimum) 1 day
 * 👍 @nzakas

**nzakas:** So if I have an hour I'll code, and if I have 30 minutes or less I go look at PRs and issues.

**nzakas:** We also said previously that if we got stuck to use Discord to ping folks. Is everyone checking Discord regularly?

**nzakas:** I generally check one per day Monday through Friday (not on the weekends)

**btmills:** Definitely, Discord helps me at least

**mdjermanovic:** Yes

**nzakas:** Okay, so it sounds like that's still a good way to check in. Can we agree that if someone asks for a review we will at least respond, even if it's just to say "I won't have time in the next two days but I'll look after that"?
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** That's fair

**nzakas:** Sounds good. Any other suggestions people have for smoothing things out?

**nzakas:** I'd add, just for the sake of completeness: if you're going to be taking any time off for any upcoming holidays (which you should totally do), just post in Discord so we know why you're not around.

**btmills:** I’m planning to spend more time during the holidays, but will definitely post if I’ll be taking some time offline

**nzakas:** All right, I think we've covered all the formal agenda items. Just a quick update on the site redesign: Sara submitted her first pull request, so we should have something live to look at next week.
 * 🎉 @mdjermanovic

**btmills:** Awesome!

**nzakas:** I'll set up new.eslint.org to point there so it's easy to look at and share

**nzakas:** I'm meeting with her on Tuesday to go over the current state of things

**nzakas:** The images for the blog posts are delayed a bit because the designer had a death in the family, but that should be completed early in December.

**btmills:** Sounds like it won’t be a blocker then

**nzakas:** My plan is to wait until both the marketing site and docs site are complete before making any formal switch. It'll be easier to manage that then trying to roll out each piece individually.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Oh definitely not a blocker, we have placeholder images for the blog posts right now.

**nzakas:** We will need to go back and add categories to old blog posts and probably clean up some tags, but otherwise I think our content should basically slide right into the new site

**nzakas:** In other news: Flat config now works in Linter. Once we can get the sourceType: commonjs changes merged into Espree and eslint-scope, I think we'll be in good shape to do a developer preview. Then I can move on to the ESLint class
 * 🎉 @btmills, @mdjermanovic

**nzakas:** In the meantime, we will need to watch out for changes to Linter. We'll need to make sure all changes are tested both with eslintrc and flat config while we are supporting both.

**nzakas:** And those are my updates. Anything anyone else would like to share?

**nzakas:** (no update on eslint-plugin-security, btw. Still waiting to hear back.)
 * 👍 @btmills

**nzakas:** Okay, if we don't have any other issues, I think we can call this meeting complete.

**nzakas:** Oh, @btmills you're planning on doing the release this week?

**btmills:** Yep!

**btmills:** Just ESLint, or any other packages?

**nzakas:** I think just ESLint this week

**btmills:** I’ll likely do it Saturday night

**mdjermanovic:** There are 8 PRs (rules) about new syntax left for review

**nzakas:** I think I reviewed them all at this point, but I'll double check

**mdjermanovic:** We could release Espree as well, to include https://github.com/eslint/espree/pull/518 and https://github.com/eslint/espree/pull/521

**nzakas:** If we could get this in, as well, that would be awesome: https://github.com/eslint/espree/pull/520

**mdjermanovic:** These are PR for review: https://github.com/eslint/eslint/pulls?q=is%3Apr+is%3Aopen+author%3Amdjermanovic+label%3A%22new+syntax%22+review%3Arequired

**btmills:** I’ll review what I can and release those packages if necessary
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, thanks everyone. I need to run to an appointment

**mdjermanovic:** Thanks!

**btmills:** Bye!
