# 09/24/2020 ESLint TSC Meeting Transcript

**kaicataldo:** Hello 👋

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Hi everyone

**nzakas:** Let's give @mysticatea another couple minutes to see if he joins

**nzakas:** All right, let's get started

**nzakas:** I hope everyone is staying safe and healthy!

**nzakas:** Looks like this may be a quick meeting

**nzakas:** @btmills are you good for taking notes?

**btmills:** Yep

**nzakas:** Thanks!

**nzakas:** First item:

**nzakas:** > Agenda item: Let's discuss the changes we'll be making to how we manage Tidelift payments and ensure everyone is signed up.

**nzakas:** So I guess the first question: is everyone signed up?

**nzakas:** I know @kaicataldo and I already are

**mdjermanovic:** I did, but it's still under review

**btmills:** Signed up but still under review

**nzakas:** Okay, that's a good first start. I did email support to let them know your signups would be incoming. I'll follow up with them again.

**nzakas:** Once we're all set up, the total amount should be split between all of our accounts. So if @mysticatea is also signed up, we'll split it five ways, and if he hasn't yet, then it will be split four ways until he is.

**nzakas:** Any questions about Tidelift?

**nzakas:** I don't see anyone typing, so I'll take that as "no" :
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** 🙂

**nzakas:** All right, next item:

**nzakas:** > Agenda item: It's like to revisit the discussion around a community manager. My thinking has changed a bit (mostly about the title and also about how many people we'd want), and want to run my latest thinking by the team to see if we want to move forward.

**nzakas:** So yeah, we've been talking off and on about this community manager position for a while, and now I'm thinking we'd be better off creating a "triage team" with two people on it instead of having just one person.

**nzakas:** Same budget, $1000/month, just split between two people instead of one.

**nzakas:** My thinking is that we'd spread out our risk a bit doing it that way, in case one doesn't work out we won't have to start over from scratch

**nzakas:** Thoughts?

**btmills:** That would also spread out availability when one of the two is away. Makes sense to me 👍
 * 👍 @nzakas

**kaicataldo:** Sounds good to me 👍

**kaicataldo:** Would we be capping the number of hours then?

**nzakas:** @kaicataldo yes, so we'd cap to 20 hours per month at $25/hour, so $500 a piece

**kaicataldo:** What's the reasoning for having a lower hourly rate?

**kaicataldo:** (than, say, the TSC)

**nzakas:** Because they are doing just a subset of what the TSC is doing

**nzakas:** Right now we are paying @platinumazure $25/hour for providing support in Discord, as well

**kaicataldo:** I see. I'm 👍 for having two positions, but would love to continue the discussion around budget/payment

**mdjermanovic:** Those two positions are for triaging github issues only?

**nzakas:** @mdjermanovic that's the idea, yes, though I wouldn't be opposed to expanding that to providing support in Discord, too.

**nzakas:** Oh, so you might not have been on the TSC when we first had these discussions, so let me recap

**nzakas:** The original idea behind a community manager was to be the first point of contact with the ESLint team when someone reaches out by opening an issue/PR or potentially in Discord.

**nzakas:** So, they would be responsible for making sure that each issue had the appropriate information and was categorized correctly so that when a team member looks at it we don't have to do the back-and-forth of getting more information

**nzakas:** And if something was a question, they'd convert to a discussion, or if someone didn't follow a template, they'd guide them through that

**nzakas:** Basically so by the time one of us sees the issue, we already know what's going on and how to move it forward as quickly as possible

**nzakas:** That would, in theory, free us up to do the more deep-knowledge-related tasks like reviewing and writing code, and reviewing and writing RFCs.

**mdjermanovic:** Thanks for the info! Sounds good to me

**nzakas:** Okay, so it sounds like we have agreement to switch the proposal to two people instead of one.
 * 👍 @btmills, @mdjermanovic

**nzakas:** @kaicataldo what's your thinking around payment? Would be good to come out of this meeting with a firm agreement so we can move forward.

**kaicataldo:** I'm a bit uncomfortable with idea of tiers of payment, since any of this work requires some specialized knowledge, but if there's precedent for it I don't want to stand in the way

**kaicataldo:** Given the events of this week, I'm also extremely foggy today and am having trouble focusing, so I'm not in the best place to have a full-fledged discussion about this. I'll defer to the rest of the team on this 🙂

**nzakas:** For reference, we did previously agree on $25/hour for the community manager position (notes: https://github.com/eslint/tsc-meetings/blob/c6becda998a0c10a9f330f26312b13eb3506c457/notes/2020/2020-07-16.md#hiring-a-community-manager)

**kaicataldo:** Yeah, I remember

**kaicataldo:** Evolving viewpoints and all that

**kaicataldo:** I defer to the rest of the team and am happy to move on

**nzakas:** Okay, just for the record, are we agreed on paying $25/hour to members of the triage team with an initial cap of 20 hours per month?
 * 👍 @kaicataldo, @btmills, @mdjermanovic

**nzakas:** Excellent, it looks like we are agreed.

**nzakas:** Any other topics anyone would like to discuss before we talk about the release?

**nzakas:** No typing looks like that's a "no"

**nzakas:** So we have a planned release for tomorrow. @kaicataldo I'm assuming you're not up for that for good reason

**kaicataldo:** Yeah, if someone else could do it that would be great

**nzakas:** @mdjermanovic have you done a release yet?

**mdjermanovic:** not yet

**btmills:** I couldn't do it tomorrow, but I could do it Saturday

**nzakas:** I can do it either day with a preference for tomorrow.

**nzakas:** @mdjermanovic what time is it in Serbia right now?

**mdjermanovic:** 10:30 pm

**nzakas:** Okay, so you would probably want to do a release earlier than this 🙂

**mdjermanovic:** actually, this time is fine for me

**nzakas:** Oh good, do you have a preference for the day?

**nzakas:** (tomorrow or Saturday)

**mdjermanovic:** tomorrow will be fine

**nzakas:** oh, forgot I have a call at this time tomorrow. Could we do a bit earlier, say 11am my time, 8pm your time?

**mdjermanovic:** hm, could be complicated with kids not sleeping yet

**mdjermanovic:** I can on Saturday, too

**nzakas:** Okay @btmills can you cover Saturday?

**btmills:** looking at timing... would you want to do 10:30pm your time/4:30pm my time on Saturday?

**mdjermanovic:** Perfect!

**nzakas:** Excellent, so we'll have @btmills and @mdjermanovic running the release on Saturday.

**mdjermanovic:** 👍

**nzakas:** Okay, that's all we have for today. Thanks everyone. Stay safe and healthy!

**btmills:** 👋 take care of yourselves

**mdjermanovic:** 👋

**kaicataldo:** Thanks all 👋

**btmills:** Meeting notes PR: https://github.com/eslint/tsc-meetings/pull/211
