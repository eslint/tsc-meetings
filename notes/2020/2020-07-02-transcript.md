# 07/02/2020 ESLint TSC Meeting Transcript

**kaicataldo:** Hi all 👋

**btmills:** 👋

**nzakas:** Apologies for my lateness

**nzakas:** Got hung up in a conversation with my neighbor 🙂 It's so rare to have human interaction these days

**kaicataldo:** Yeah, we need to take it where we can get it

**kaicataldo:** Do we want to wait another minute or two to see if @mysticatea will make it before starting?

**nzakas:** yeah, let's give him a couple of minutes

**nzakas:** Looks like we don't have any issues to discuss, but maybe we should discuss the rolling back of the rule-config cloning?

**btmills:** Good idea, will be helpful to make sure we're all on the same page

**nzakas:** Well, let's get started with that. I'll give a summary of what led up to this most recent issue and then we can go from there.

**nzakas:** For the last release, we pretty quickly had an issue filed that `eslint-config-airbnb` was breaking because they were using `Infinity` in one of their rule configs.

**nzakas:** We were surprised that `Infinity` was even allowed with our validation, and further investigation revealed that there was a bug in Ajv that was allowing `Infinity` wherever an integer was specified in a schema.

**nzakas:** We asked about changing `eslint-config-airbnb` so that it would use `Number.MAX_SAFE_INTEGER` instead, but was told that it would be hard to get that change out quickly.

**nzakas:** Given that the special value was in an isolated location, where most likely end users of the config wouldn't be explicitly using `Infinity` (if anything, they might override it to a finite integer), we decided to carve out an exception in the cloning algorithm that would replace `Infinity` with `Number.MAX_SAFE_INTEGER` to unbreak `eslint-config-airbnb` while keeping the cloning to fix the other bug.

**nzakas:** At the time we did that, there were no further reports of the cloning breaking any other configs.

**nzakas:** Which brings us to this week and this issue: https://github.com/eslint/eslint/issues/13447

**nzakas:** Here, a rule is explicitly requesting a regular expression be passed in as part of its config. This should technically be disallowed in ESLint, since there is no way to produce the same result in either JSON or YAML, but it turns out we weren't enforcing that restriction.

**nzakas:** Unlike `eslint-config-airbnb`, where the special value was isolated, in this case the special value most likely exists in end users' configs so its impact is larger and basically impossible to get everyone to fix their configs vs. us just reverting the change.

**nzakas:** So that's my understanding of where we are. Does anyone want to add anything?

**btmills:** We've had semver-minor changes merged since the 7.3.1 patch release, so we don't currently have the infrastructure to do a 7.3.2, and tomorrow's release will be 7.4.0

**nzakas:** Right

**kaicataldo:** Nothing to add from me

**nzakas:** Okay, so are we all comfortable with reverting the change and releasing in v7.4.0? (just to be explicit)

**nzakas:** Okay, glad we're all on the same page. 🙂

**nzakas:** So next, I had a bunch of topics around the RFC process

**btmills:** Before moving on, I had a couple questions about what we want to do _after_ reverting for tomorrow's release

**nzakas:** Okay, let's cover those

**btmills:** First, do we want to warn users somehow when they use non-serializable values in their configs?

**btmills:** So far we know that non-serializable values can cause issues in caching and `--print-config`.

**nzakas:** My concern about warning users is, as in the most recent case, they might not be able to fix it.

**nzakas:** Because they're relying on a rule telling them to use a regex, for example

**kaicataldo:** I also think we need to consider the simple config addition in all this

**kaicataldo:** Do we want to try to get to a place where we're enforcing serializable configs? And if so, will that carry over to simple configs?

**btmills:** @nzakas that makes sense - sounds like we'd need an alternative further upstream first

**nzakas:** At least for the foreseeable future, I envision simple config enforcing that rule configs must be serializable. We need that in order to ensure rules can be used both in simple config and in eslintrc files.

**nzakas:** It seems like we should be able to do something in `RuleTester` to help plugin authors be aware if they are allowing non-serializable values in their configs.

**kaicataldo:** In that case it sounds like you're advocating for implementing this restriction for both config file systems in a future major release

**kaicataldo:** Which makes sense to me

**nzakas:** Yes, that's correct.

**btmills:** I'm also on board with that. Not a fan of either alternative

**nzakas:** To circle back to @btmills' original question: is there anything we want to do for tomorrow's release other than revert the cloning?

**kaicataldo:** Do we want to commit to that? I do think it's worth explaining in our highlights section of tomorrow's release what our general plan is

**kaicataldo:** Or at least acknowledge why this was reverted

**nzakas:** @kaicataldo I think so. It seems like an explanation of what happened and future plans is in order to make sure people are aware that this restriction is coming in the future.

**kaicataldo:** Sounds good to me

**kaicataldo:** So, for an action item, sounds like it would be good to get that written up and approved by at least one other person before merging it tomorrow

**btmills:** Me as well. And in the process that answered my second question, which was going to be "in a future major, do we want to add a restriction"

**btmills:** So that's all from me on this, thanks for the digression 👍

**nzakas:** Okay, @kaicataldo since you'll be doing the release, do you feel comfortable doing that writeup?

**btmills:** I'll also be distilling this discussion for the meeting notes, so I can write that with the intent that it's copy-pastable to tomorrow's release

**kaicataldo:** Thanks @btmills!

**nzakas:** Okay, and I'll be around tomorrow if/when you want someone to review (or @btmills can feel free to review as well)

**nzakas:** Just to review: we've decided that we will re-introduce that rule configs must be serializable in a future major release. Simple config will also enforce this restriction so long as we need to continue support eslintrc config files. After that point, we can revisit the restriction.

**nzakas:** Great, so now let's move on to the RFC process pieces

**nzakas:** There are some parts of the process that I think could be tightened up, so that's where these points are coming from.

**nzakas:** First:

**nzakas:** > **Should people open an issue first?** Right now we both have people opening issues unaware that they'll need an RFC, and people who just open RFCs directly. It seems like it would useful to have a single entrypoint to the RFC process. I'd like to suggest that we start the RFC process by asking people to open an issue and gather initial feedback. Assuming the feedback goes well, then they would progress to the RFC writing phase. This has the added benefit of giving us an issue to submit a PR against.

**kaicataldo:** I support this. In general, I think it's more respectful of people's time as well, since the barrier for entry for writing up an issue is lower.

**btmills:** I agree. Seems like it could save some unnecessary work if a proposal wouldn't go anywhere

**nzakas:** Okay, it sounds like we've agreed that the RFC process should begin with an issue being filed to gather feedback, and if there is a general agreement to move on, then we would move to producing an RFC.

**nzakas:** Excellent, I'll take the action item of updating the RFC README for this and any other changes we agree on.

**nzakas:** Second point:

**nzakas:** > **Competing RFCs** I'd like to suggest that if there are two or more RFCs aiming to solve the same problem, that those RFCs should be considered together and a direction decided on that approves one and declines the others. I don't want to end up in another situation like with simple config, where I wrote an RFC and then several other competing RFCs were written and approved before we had decided on which direction to go (a new config system vs. incremental changes).

**btmills:** If we'd had this rule in place at the time you wrote your simple config RFC, how for example might that have changed the discussion on the other RFCs? Would we e.g. have declined to implement them in favor of only doing the simple config RFC?

**nzakas:** I think it would have been a larger discussion around incremental change vs. doing something new

**nzakas:** What actually happened was that a bunch of incremental changes were made that actually makes simple config harder to implement

**nzakas:** (because we want to maintain backwards compatibility)

**nzakas:** We had a similar issue with the processors update, but were able to resolve that by merging the two RFCs.

**nzakas:** And we also have several parallel linting RFCs

**btmills:** So we at least wouldn't do something that would preclude/make more difficult another RFC without an explicit decision on the other RFC

**nzakas:** Correct

**btmills:** Got it. I'm in favor then 👍

**kaicataldo:** Makes sense to me 👍

**nzakas:** Okay, we've resolved that RFCs aiming to solve the same problem should be considered together to choose the approach we want.

**nzakas:** (Again, I'll update the README)

**nzakas:** > **Time limit for decisions** I'd also like to suggest that after 120 days, the TSC must decide whether to move forward with an RFC or not. Once again, simple config being an example of the process gone wrong. I don't think we should expect people to continue to defend and respond to comments for an entire year. If someone has put in the time to produce an RFC, we certainly should be able to figure out if it's a direction we want to head in (even with some further feedback and modifications) or not.

**nzakas:** And 120 days is a somewhat arbitrary suggestion, just felt like around 90 or 120 days would make sense so we could review everything once per quarter

**btmills:** So this decision would be either "not gonna happen" or "directionally if not necessarily specifically correct and we can iron out the specifics in the implementation PR"?

**kaicataldo:** 120 days honestly feels like a long time to me. In general, I do think we should figure out how to lessen the turnaround time for RFCs

**nzakas:** @btmills yes

**nzakas:** @kaicataldo I'm open to a shorter timeframe. I just wanted to make sure it was something we could commit to.

**nzakas:** Like 30 days seems too short, especially if people are only looking at RFCs once per week (which is the story I have for the current state)

**nzakas:** I know Ember, for instance, reviews RFCs once per quarter

**kaicataldo:** I think it's fine to pick a number and adjust in the future

**kaicataldo:** It doesn't feel to me like our project is complex enough to warrant such a long process

**btmills:** In that case I'm in favor, and I'll suggest (and would be willing to write, if you wish), a related documentation update to clarify that an RFC does not need to be a complete specification to be merged, just reach consensus on direction

**nzakas:** @kaicataldo oh I agree, that's why I want to set a time limit 🙂

**kaicataldo:** (Yeah, expressing my agreement 🙂 )

**nzakas:** Do you have a thought about the right length of time as the limit?

**btmills:** How about 90 days then? Once per quarter, and even assuming 1wk latency on each end plus 1wk work on feedback, that's enough time for 4 cycles

**kaicataldo:** 90 days seems like a good place to start

**nzakas:** Sounds good to me

**kaicataldo:** And just to be clear, this would be from the time the RFC is created, not the prerequisite issue we discussed earlier, correct?

**nzakas:** Correct

**nzakas:** So it sounds like we've agreed that we need to make a "go vs. no-go" decision on RFCs within 90 days of the RFC being created. RFCs don't need to have all of the details worked out, but they do need to represent the general direction of the proposal clear enough for the TSC to make a decision.

**nzakas:** Excellent, last point:

**nzakas:** > **Prototype pull requests** We have a range of what people are doing with respect to prototyping their RFCs and sending pull requests, so I'd like to decide what we want the rule to be. My preference would be to not have people send pull requests with their prototypes because it creates noise in an already noisy area of the repo. Instead, I'd rather see the prototype branch (or fork) referenced directly in the RFC if one is available. That way, those who are interested can try the prototype and we don't mix in prototypes with active development in the pull request list.

**kaicataldo:** 👍

**btmills:** Yes, for all the reasons stated 👍

**nzakas:** Excellent, so we have agreed to have prototypes in the RFCs but not have pull requests sent to the main repo.

**nzakas:** I know we're out of time, but does anyone want to discuss anything else before adjourning?

**btmills:** @kaicataldo you've got tomorrow's release?

**kaicataldo:** Yup!

**btmills:** That's all from me

**kaicataldo:** Same here

**nzakas:** Awesome, me too

**nzakas:** Thanks everyone, talk soon

**btmills:** 👋 stay safe!

**nzakas:** (And I'll work on updating the README for RFCs)

**kaicataldo:** Thanks 👋

**btmills:** Notes PR: https://github.com/eslint/tsc-meetings/pull/185
