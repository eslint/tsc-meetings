# 06/30/2022 ESLint TSC Meeting Transcript

**nzakas:** Howdy

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** @btmills are you set for taking notes?

**btmills:** yep

**nzakas:** Thank you, sir

**nzakas:** Let's jump right in

**nzakas:** > Agenda item: should team members also get $300 per tutorial or case study? I think we should treat all non-critical blog posts (not releases, sponsorships, financials, announcements, etc.) this way regardless of who writes them.

**mdjermanovic:** I agree

**btmills:** works for me

**nzakas:** Okay, we have agreed that we will pay everyone $300 for tutorial and case studies on the blog even if they are on the team.

**nzakas:** Next:

**nzakas:** > Agenda item: should we move the playground into the eslint.org repo? The original plan was for it to be on a separate domain, but since we changed that, I don’t know that it makes sense to have a separate repo. The current repo just has an Eleventy wrapper that embeds the React app. We could eliminate duplication of things like the header by moving it into the eslint.org repo. Plus, this would allow us to easily produce translated versions of the playground.

**mdjermanovic:** One less repo to sync the same things sounds good to me

**btmills:** that makes sense

**nzakas:** Okay, we have agreed to move the playground into the eslint.org repo. @btmills can you open an issue on the playground repo for this when you post your notes?

**btmills:** will do 👍
 * 🙏 @nzakas

**nzakas:** Next item:

**nzakas:** > Agenda item: should we set up a new website team? We have a bunch of folks who are contributing just to the website, so not necessarily appropriate to be committers, but perhaps a new team at the same level of pay would make sense?

**btmills:** would be great to give them room to work on it 👍
 * 👍 @mdjermanovic

**nzakas:** Sounds good. So we have agreed to set up a new team for website-focused folks. I'll take the action item to set that up.

**nzakas:** Next item:

**nzakas:** > Agenda item: Now that we have the new website up (and I have more time to deal with stuff), I'd like to revisit hiring some folks for various positions:
> 
>     1. Project manager - I'd like to see if we can hire someone who could help us stay on top of issues and PRs. They would be responsible for triaging everything, and then also following up when issues/PRs haven't received attention and are just sitting around.
> 
>     2. Editor-in-chief - I'd also like to think about hiring someone to help attract, edit, and schedule guest blog posts. Now that we have a new beautiful blog, it would be great to have someone working on it on an ongoing basis.
> 
>     3. Tech writer - this would be a one-time thing, like we did for the website. I'd like to hire a tech writer to rewrite our documentation from scratch. The docs haven't changed all that much since the first release, and I think having fresh eyes and a new perspective (and organization!) could really help improve the website experience.

**nzakas:** (We can obviously tackle these one at a time.)

**btmills:** Starting from the top?

**nzakas:** Sure!

**mdjermanovic:** The project manager would triage the issues/PRs or ping people to triage staled ones?

**nzakas:** Both

**nzakas:** The idea is that the project manager would keep issues and PRs moving through the process

**nzakas:** Right now things get stuck, mostly in "evaluating" and "feedback needed"

**nzakas:** I try to go through periodically and ping folks but it's definitely low on the priority list. I want someone to stay on top of things.

**nzakas:** And aside from @mdjermanovic and I, folks really aren't helping triage issues all that much, so we could use help at the front end of the funnel too.

**btmills:** Would be great to have someone share some of that load. I know the core team (less so me) does a lot of that. It's something I really don't enjoy at all and when I do it it's out of obligation

**nzakas:** I don't think anyone really enjoys it. As I like to say, no one works on open source dreaming of all the issues they'll get to triage.

**btmills:** Fair haha. That'll make it hard to hire for

**btmills:** (not to say we shouldn't try)

**nzakas:** I think there may be some folks who feel like they can't contribute via code but who may see this as an easier on-ramp to contributing.

**btmills:** Ooh pitching it that way might work

**mdjermanovic:** Makes sense to me

**nzakas:** Okay, so we'll mark down "Yes" for project manager. How to go about finding and hiring people is a whole other topic for a different time. 🙂

**nzakas:** Editor-in-chief?

**btmills:** 👍
 * 👍 @mdjermanovic

**nzakas:** Okay, we will attempt to hire an editor-in-chief

**nzakas:** Tech writer? Unlike the other two, this would be a project-based person rather than an ongoing role.
 * 👍 @mdjermanovic

**btmills:** We've been talking about it for years, and now we have the shiny new website for it 👍

**nzakas:** Cool, we've decided to hire a tech writer. 🙂 I think this one will be easier (?) to find.

**btmills:** It's a more standard position

**nzakas:** I'm kind of budgeting $50,000 in my mind for this project with the caveat that I have no idea how much tech writing projects actually cost.

**btmills:** Seems plausible. If it came in around there I wouldn't object. 2x probably worth talking about again

**nzakas:** Does it seem reasonable to set up a Google form to have interested people apply? Trying to think of a way that seems more professional than "comment on this issue," though not opposed to that either.

**btmills:** Worth a shot? No idea if we'd get enough volume, but that's an easy way to start. How did you find all the excellent folks who worked on the new site?

**nzakas:** Luck 🙂

**btmills:** Aha, so it's simple then!

**nzakas:** I do know some folks who do technical writing that I can reach out to first to see if they have any leads
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll reach out and see how far I can get.

**nzakas:** Those are the only agenda items we had. Does anyone want to discuss anything else?

**mdjermanovic:** Nothing in particular from me

**btmills:** nothing from me either

**btmills:** I am available for the release though!
 * 👍 @mdjermanovic

**btmills:** If I have time, that'll include a major of the markdown plugin dropping old Node engines. That can go out whenever if not.
 * 👍 @nzakas, @mdjermanovic

**btmills:** Also `@eslint/create-config`
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Sounds good.

**nzakas:** Let's do a quick debrief on the website redesign launch.

**nzakas:** I think overall it went pretty smoothly

**nzakas:** There are obviously still a few things that need to be addressed but overall I'm pretty happy with how things went.
 * 🎉 @mdjermanovic

**nzakas:** I'm still tweaking the Algolia search. Because it's based on the DOM structure, things changed and it's still a little bit weird.

**nzakas:** We got a lot of positive feedback online, too.

**btmills:** Great job quarterbacking all of that over the last several months 👏

**nzakas:** Thank you!

**nzakas:** Definitely the biggest project I've had to manage in a long time.

**nzakas:** And now that we have the donate page up and running, I feel like I can start reaching out to potential sponsors again and just send them that page.
 * 👍 @mdjermanovic

**nzakas:** I plan on switching focus back to the new config system finally.

**nzakas:** Okay, it's contributor pool time.

**nzakas:** Website folks: amareshsm, harish-sethuraman, DeepshikaS
 * 👍 @btmills, @mdjermanovic

**btmills:** amareshsm also helped with a bunch of CI stuff on other repositories
 * 👍 @nzakas, @mdjermanovic

**nzakas:** alexbassy for https://github.com/eslint/eslint/pull/15868
 * 👍 @btmills, @mdjermanovic

**nzakas:** kepeniukas for discord help
 * 👍 @btmills, @mdjermanovic

**nzakas:** Looks like kind of a light month for contributions. Maybe people are outside. 🙂
 * 🌞 @btmills

**nzakas:** Shall we call it?

**btmills:** $100 for each?

**nzakas:** For amareshsm and harish-sethuraman I think $200. They've done a lot this month.
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll let everyone know.

**nzakas:** Any last topics before we end the meeting?
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular

**nzakas:** Just from me: Still struggling healthwise so I may be around less than my usual until things settle down for me. Will still do my best to at least help with triaging.

**btmills:** Thanks for the heads up. Take care

**nzakas:** Thanks.

**nzakas:** Have a good day/evening everyone

**mdjermanovic:** Thanks 👋

**btmills:** 👋 bye!
