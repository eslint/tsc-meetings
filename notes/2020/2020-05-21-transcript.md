# 5/21/2020 ESLint TSC Meeting Transcript

**kaicataldo:** Hello 👋

**nzakas:** Hi there! Welcome to our Discord channel for TSC meetings!

**btmills:** 👋 smells like fresh paint in here!

**nzakas:** Hehe

**nzakas:** Looks like @mysticatea can't join us, so we're ready to get started.

**nzakas:** @btmills can you take notes?

**kaicataldo:** If not, I can

**btmills:** Sure!

**nzakas:** Thanks!

**nzakas:** So just a bit of housekeeping before we start: please be sure to remove the "tsc agenda" labels on issues.

**nzakas:** When a release is complete, the label should be removed.

**nzakas:** And after we've posted the TSC decision, the label should be removed.

**kaicataldo:** 👍

**nzakas:** Just a bit less work for me to figure out what we should actually be discussing. 🙂

**nzakas:** Okay, so we've got two topics and the release to discuss

**nzakas:** First item:

**nzakas:** > >I'd like to talk a bit about our current sponsorship picture and some opportunities to make a little bit more money for the project. Specific topics include:
> >
> > * State of current sponsorships
> > * Tidelift
> > * Ads on eslint.org
> > * Merchandise

**nzakas:** This is mostly me talking and being open to questions 🙂

**kaicataldo:** Sounds good

**nzakas:** Right now we're bringing in around $8600 in monthly donations. We've had a bunch of one-off donations, as well, but it's hard to count on those as being anything but lucky.

**nzakas:** Of that $8600, we pay @kaicataldo $5000, then we have a reserve of $1000 each for me, @btilford, and @mysticatea for TSC contributions. That's $8000 accounted for.

**nzakas:** Then the new $500 fund for supporting our dependencies, which brings us to $8500.

**nzakas:** So in theory we could be saving $100 each month. 🙂

**nzakas:** But in actuality we're not spending the max for TSC contributions or OSS dependencies, so we're saving more.

**nzakas:** Facebook dropped off as a sponsor due to needing to renew their Open Collective fund but should be back.

**nzakas:** So hopefully that will be another $1000 per month.

**nzakas:** One of our top donors is Airbnb, which just laid off 1900 people, so we should be prepared for that amount to disappear. I haven't seen any indication that it will, but it seems that if a company is looking to dramatically cut costs, it's possible OSS donations will be cut.

**nzakas:** Right now we have around $76,000 in the bank.

**nzakas:** I want to make sure we stay above $60,000 so we have enough to at least cover @kaicataldo's salary for the next year.

**nzakas:** And then there's a bit leftover for TSC contributions and other things.

**nzakas:** I am working on three potential sponsors right now (to be nameless in this discussion so as not to put undue pressure on them in a public forum). One seems very likely, the other two not so much.

**nzakas:** The bottom line is that we're pretty tight to our budget right now, which would rule out things like hiring another part-time developer.

**nzakas:** It's probably going to be difficult to fundraise until the pandemic is behind us, but if you know anyone at a company who you might be able to convince, no harm in reaching out. 🙂

**nzakas:** I think ideally we still want to get to $20,000/month to be sustainable in the long-term with more than one paid maintainer, but even getting to $15,000 would be huge.

**nzakas:** Questions?

**kaicataldo:** None from me

**btmills:** None from me either. Definitely on board with the $60,000 low water mark since job security is actually a factor there

**nzakas:** Cool, so next

**nzakas:** @btmills did you see the email re: Tidelift?

**btmills:** Yes I did. Have we heard anything back yet from other teams about their experiences?

**kaicataldo:** Oh, did I not reply all?

**btmills:** I got a small update, but it sounded kind of ambiguous so I wasn't sure if there was more

**kaicataldo:** I can double check and forward it to you, but the gist is that I'm no longer concerned

**kaicataldo:** And it wasn't clear to me why the other project in question had decided to move away from the platform

**btmills:** Okay cool. When I looked at their site, the requirements seemed decently aligned (we're already running a license check, for example), and the only one potentially concerning was dependency updates. It wasn't clear to me whether that was "don't use deps with vulnerabilities, but otherwise if it ain't broke don't fix it" or if they try to push projects to keep dependencies evergreen

**nzakas:** My take was the former.

**kaicataldo:** Same

**btmills:** In that case I have no issues 👍

**nzakas:** Okay cool.

**nzakas:** So Kai and I will be the administrators of the account. The plan is to have the funds deposited directly to Kai (currently around $2000/month), and he will subtract that amount from the invoice he submits to Open Collective each month.

**nzakas:** So there should be a line item on the invoice that is, for example, "Tidelift payment" and -2000 (or whatever the amount is).

**nzakas:** So functionally it will be like getting an extra $2000/month into Open Collective

**kaicataldo:** Sounds good to me.

**nzakas:** Okay cool. So let's say we've resolved to work with Tidelift.

**nzakas:** Next, other ways to make some money

**nzakas:** I reached out to Jory about t-shirts and stuff. She said they are still working out those details and will get back to me. As I've mentioned before, I don't feel like swag will be a big money maker for us, but every little bit helps.

**nzakas:** The other thing: we could put at ad on eslint.org.

**nzakas:** Back in the day, I did have an ad on there. It brought in around $100/month.

**nzakas:** The JS Foundation made me take it down, but the Open JS Foundation has no problem with having an ad there.

**btmills:** Was it through an ad network or did you place it with a relevant client manually like people sometimes do with blog sponsors?

**kaicataldo:** I'm personally a bit concerned about ads on the site, but would definitely be up for hearing any proposals.

**nzakas:** It was through Carbon Ads

**nzakas:** The only two ad networks I'd consider are Carbon Ads and CodeFund

**nzakas:** They are both ethical advertisers that target tech content

**btmills:** Okay cool, both of those would at least be somewhat relevant to the audience. I wouldn't object to the idea if y'all were enthusiastic about it, but I think it's likely to have low ROI

**nzakas:** My feeling is every bit helps. Individual donors tend to give just $5/month, so adding $100/month is like having 20 new donors

**nzakas:** And they'll both put the money right into Open Collective for us

**btmills:** Fair... I'm trying to remember the old design. Was the ad in a sidebar?

**nzakas:** It floated in the upper-right of each page before we had a sidebar on the blog posts

**btmills:** If this were a work meeting, I would suggest A/B testing an ad vs a blurb linking to our Open Collective page requesting donation or sponsorship haha

**nzakas:** That's not a bad idea

**nzakas:** We can do split testing with Netlify

**btmills:** In that case, I'm down to try it

**nzakas:** Okay, I'll investigate.

**kaicataldo:** Trying out the A/B test sounds good to me

**nzakas:** All right, we've resolved to look into an ad and doing an A/B test for donating to Open Collective. I'll take that as an action item.

**nzakas:** Next:

**nzakas:** > Item: I’d like to discuss cutting down on the amount of changes we do related to rules. This is the majority of our work and it’s unsustainable at the current rate. Specifically I suggest:
> 
> 1. No new rules unless they are related to new syntax. (New syntax meaning the syntax is stage 4 within the last 12 months.) This is the only way a new rule has enough value to validate the maintenance cost. 
> 2. No new rules that just disallow a syntax. The no-restricted-syntax rule should be used instead. 
> 2. No further changes to stylistic rules. We can’t keep implementing everyone’s strange preferences.
> 3. New options in existing rules must be implemented by the community. They can request, we can approve, but we won’t be implementing.

**nzakas:** I guess Discord doesn't render numeric lists without duplicates 🙂

**btmills:** Switched from 1-based to 0-based indexing halfway through

**kaicataldo:** > No further changes to stylistic rules. We can’t keep implementing everyone’s strange preferences.

My only caveat here is that we should still implement bug fixes. I think that was your intention, but just want to be clear.

**btmills:** No objections here. I was hoping the whole category of 2b changes would die down with people using Prettier, but it seems opinions are endlessly varied! (Re tweets by both of you earlier this week, yeah, agreed haha)

**kaicataldo:** Other than that clarification, I support this policy.

**nzakas:** @kaicataldo I think for non-stylistic rules, yes, we should still do bug fixes.

**nzakas:** But I'm not sure if it's worth tracking down bug fixes on stylistic rules.

**nzakas:** Like how many more times do we need to fix the indent rule even though it will never do everything people want it to do?

**kaicataldo:** I hear you. It takes a lot of resources to stay on top of that. I do think indent is particularly challenging in this regard, though

**nzakas:** In the short-term, I'm fine with saying let's fix bugs in all rules. I'd just like to keep an eye out for stylistic rules in particular.

**kaicataldo:** Sounds good. I'm all for setting a high standard for what constitutes a bug or not

**kaicataldo:** Though I understand that leaving some things up for interpretation is challenging, from a team policy perspective

**btmills:** As a possible middle ground, are we perhaps willing to review bug fixes to stylistic rules if someone else implements them?

**kaicataldo:** But I do think there are legitimate cases where a rule is clearly not behaving as the author intended and that those should be fixed (as long as we are maintaining them)

**nzakas:** @btmills I don't think we need a middle ground right now. I'm fine with saying we'll still do bug fixes on all rules.

**btmills:** All right. I agree the bar should be high - rearranging comments weirdly might not clear it, for example

**kaicataldo:** Maybe we can revisit this again if bug fixes in style rules are proving to be too much? Check in in a month or two?

**kaicataldo:** Agreed, if it can be argued that the "bug" is really enforcing an opinion, I think it probably shouldn't be fixed

**nzakas:** Sounds good

**nzakas:** Okay, we've resolved to follow the suggestions for rule changes going forward.

**nzakas:** I'll take an action item to send an email out to everyone explaining this.

**nzakas:** Last thing: who wants to do a release tomorrow? 🙂

**kaicataldo:** ✋

**btmills:** I'm available as well

**kaicataldo:** I'm happy to be the designated release person for the foreseeable future

**kaicataldo:** If there's a week I can't do it or feel like it's too much, I'll let everyone know

**kaicataldo:** Happy to have company though too 🙂

**nzakas:** Sounds good to me, thanks

**btmills:** Thanks, that makes it easy

**nzakas:** All right, I'm about to collapse so I need to go. @kaicataldo can you generate the transcript for this meeting?

**kaicataldo:** Sure thing!

**kaicataldo:** Did we decide where we're keeping those?

**nzakas:** I think just alongside the meeting notes

**kaicataldo:** Sounds good

**nzakas:** Maybe just name it 2020-05-21-transcript.md or some such thing?

**btmills:** I have a meeting right after this, so it'll be a bit longer than usual for the notes

**kaicataldo:** Would you be against including it in our regular meeting notes documents?

**kaicataldo:** Summary at the top, full transcript at the bottom

**nzakas:** I think that will make it harder to automate

**nzakas:** And harder to have @btmills do notes and someone else do the transcript

**kaicataldo:** That's fair. Will include it in a separate document.

**btmills:** I wonder if I could then do in-page anchors... Project for another time, then? We can always go back and smoosh them together if we come up with a combined process

**kaicataldo:** Yeah, sounds good

**kaicataldo:** Thanks, everyone!

**kaicataldo:** Stay safe out there

**btmills:** 👋 take care of yourselves

**nzakas:** Thanks everyone, stay safe and healthy!

**btmills:** Meeting notes PR: https://github.com/eslint/tsc-meetings/pull/179
