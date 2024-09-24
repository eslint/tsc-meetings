# 09/19/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi 👋

**mdjermanovic:** Hi!

**nzakas:** Looking over the notes from last time...

**nzakas:** ✅  For me, it was the blog post about the version support policy.

**nzakas:** ✅  @mdjermanovic did the work to get the next v8.x out.

**nzakas:** ✅ I added integration tests for the type definitions

**nzakas:** ✅ I opened an issue to discuss BOM handling changes in processors for v10

**nzakas:** So looks like we got everything.

**nzakas:** Let's do statuses next. I've been working on the processors refactor, the alternate config lookup PR, and adding disable directives to `@eslint/markdown`.

**mdjermanovic:** I was mostly working on our release infrastructure and v8.57.1 release

**fasttime:** I fixed the types, backported fixes to v8.x, and was busy reviewing issues and PRs.

**nzakas:** Upcoming RFC duty:
September 23 - @fasttime 
September 30 - @nzakas 
October 7 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues or PRs flagged for today. Are there any we need to discuss?

**mdjermanovic:** Nothing in particular from my side.

**fasttime:** Nothing in particular from me either

**nzakas:** I'd just like to flag https://github.com/eslint/eslint/pull/18742 as high priority. It's pretty complex and I'd like to get it merged as soon as we have it mostly working to avoid difficult conflict resolution. So if you can please check on that first each day to help me make progress, I'd appreciate it.
 * 👍 @mdjermanovic, @fasttime
 * 🙏 @nzakas

**nzakas:** I did add one agenda item to the issue, and it's a biggie:
> Agenda item: I did a check on our finances for 2024, and so far we've spent $66,000 more than we've taken in. This obviously is not sustainable. Let's discuss what we should do both short and long term.

**nzakas:** I mentioned a few months ago that we had started to spend more each month than we were bringing in and we'd need to keep an eye on that. Well, here we are. Luckily we've had enough saved up to cover that overage, but we're on track to spend $90,000 more than we've brought in this year.

**nzakas:** Part of this is because we've had more contributions, which is a good thing, but that also means we're paying more people.

**mdjermanovic:** I think the minus is closer to $50,000 as we still have funds on GitHub and thanks.dev that hasn't arrived yet, and we had one big invoice for last year's work. But it's still a lot

**nzakas:** Last year we were already over budget, but only slightly, so the year-over-year trend is still going in the wrong direction if we moved that invoice into 2023.

**mdjermanovic:** That's true

**nzakas:** So there's two things we can do here: 1) reduce spending, 2) increase income.

**nzakas:** I've still been reaching out to companies about sponsorships but it's been tough sledding. The one that seemed really excited to contribute stopped responding to my emails. I've made contact at another company that seems promising, but one company won't make up the difference.

**nzakas:** Have you two been reaching out in your network for sponsorships?

**mdjermanovic:** Yes, but with no success

**fasttime:** I noticed that some sponsorships were canceled and I know nothing about the reasons. Do you have any information?

**fasttime:** Or did they just stop responding?

**nzakas:** No. I get the same emails. They're not required or encouraged to give any reasons. Pretty sure it's just a button (cancel) and that's it.

**nzakas:** Most sponsors I don't have a direct contact with.

**fasttime:** I was thinking that we could reach back to the folks that canceled their sponsorships if we know how to contact them. Maybe ask them to answer a few questions about why they canceled.

**nzakas:** The folks that canceled already weren't donating a lot. I'm not sure it's worth the time.

**nzakas:** What might be a better approach is to do a "call for sponsorships" blog post that lays out what's going on and what we're looking for.
 * 👍 @mdjermanovic

**fasttime:** That's a good idea. Or some other kind of advertisement.

**fasttime:** Wikipedia has a super-annoying banner for that. I'm not an expert but I think asking for contributions is a good step forward.

**nzakas:** We could do an annoying banner, too. 🙂

**nzakas:** Probably good to combine that with the blog post.

**fasttime:** Hmm, we could open a discussion and ask folks what they think.

**nzakas:** Ask who what they think about what?

**fasttime:** I was thinking to ask user about how to advertise for contributions. Maybe someone will have good ideas apart from adding a banner.

**nzakas:** about *how* to advertise for contributions?

**fasttime:** sure 🙂

**fasttime:** fixed

**nzakas:** We could, but I'd have fairly low expectations that anyone would suggest anything we couldn't come up with on our own. It seems like some combination of a blog post and site banner is our best bet.

**nzakas:** And then promoting the post everywhere, of course.

**fasttime:** That makes sense. I'm not sure if a banner is the best option, that I why I was thinking to ask for feedback.

**fasttime:** But well, Wikipedia is doing that already, so it has to work.

**nzakas:** Yeah, this is my point: There's a reason why websites asking for money do banners. If you ask users if they'd like that, they'll say no. 😄

**fasttime:** Ah well, we could just open a discussion saying that we would like to start a campaign to collect funds for ESLint development.

**fasttime:** Don't need to mention that we have plans already 😄

**nzakas:** Okay, I'm not sure what it would accomplish, but if you'd like to do so, I'd say go for it.

**fasttime:** Fine, I will post a discussion and ask for feedback. Worst case it will bring nothing, but maybe we will get some new ideas.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, so I think our goal should to end up at $15,000-20,000 per month.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Right now we're at a little less than $10,000, which is fairly low for us historically.

**nzakas:** We've typically managed things so that we always have a least a year's worth of expenses in reserve, just to make sure we wouldn't run out of money quickly.

**nzakas:** At one point Open Collective let you set a target, but it looks like that feature is gone.

**nzakas:** I'll take the action item to write up the blog post.
 * 👍 @mdjermanovic

**fasttime:** Thanks!

**nzakas:** Another thing I think we should do is add a new top donation tier of $5,000 month. I don't know if we'll ever get that, but we'll definitely not get it if we don't create the tier.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** (We can always add intermediate ones of $3,000 and $4,000 later if people ask.)

**fasttime:** Like a diamond sponsor?

**nzakas:** exactly

**nzakas:** I'll take the action to set that up
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Ideally, we can take care of this shortfall problem by getting more sponsorships, but if we haven't gotten much traction by the end of the year, then we'll need to start thinking about reducing spending.

**nzakas:** (Note: It's possible we might see some income from HeroDevs in a manner similar to Tidelift, but we won't really know until after v8.x is EOL.)

**nzakas:** Any other thoughts or ideas?

**fasttime:** Nothing else at this time

**nzakas:** All right, let's talk about the release.

**mdjermanovic:** I can tomorrow
 * 👍 @fasttime
 * 🙏 @nzakas

**mdjermanovic:** That would be just `eslint` and `@eslint/js`

**nzakas:** Sounds good.

**nzakas:** All right, if that's it, we can call it a meeting. Thanks everyone! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks! 👋
