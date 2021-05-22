# 05/20/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**nzakas:** Apologies for the late start.

**nzakas:** @btmills are you good to start?

**btmills:** yep!

**nzakas:** All right. It looks like we don't have any formal agenda items for today, so let's go through the v8.0.0 board to identify any issues and then we can open for other topics.

**nzakas:** https://github.com/eslint/eslint/projects/8

**nzakas:** It looks like we are in pretty good shape with a bunch of PRs already open

**nzakas:** I'm going to circle back to the RFC for https://github.com/eslint/eslint/issues/13654 either today or tomorrow, now that I've mostly recovered from oral surgery

**btmills:** What's your plan for allowing (or not) extending core rules in that RFC?

**nzakas:** After lying around in bed thinking about this for the past week (literally), I think the best option is to formally say we do not support extending core rules but still allow access to them in a "void your warranty" type of API situation.

**nzakas:** I'm thinking a `require("eslint/use-at-your-own-risk")` entrypoint where we can stuff anything that we find people are using but don't really want to bless as part of the public API.
 * 👍 @btmills, @mdjermanovic

**nzakas:** That also gives us an escape hatch if we ever remove something that turns out to be important to the ecosystem in a "oh god no, why god" type of way.

**btmills:** ha, I'm a fan of that name, both because it's funny and because it's not specific to rules in case we find anything else

**nzakas:** Yeah, that was the goal.

**nzakas:** Following on your suggestion about the React approach 🙂

**btmills:** And from following the RFC conversation, the developers who currently do that are totally fine with the warranty voiding and already work to reduce risk with constrained versions

**nzakas:** Exactly

**nzakas:** So I'll plan on updating the RFC for that soon.

**nzakas:** @mdjermanovic do you have a plan for https://github.com/eslint/eslint/issues/14575 and https://github.com/eslint/eslint/issues/13349 ?

**mdjermanovic:** Those two shouldn't be too big and complicated, I could work on that next week

**nzakas:** Sounds good. Let us know if you'd like someone to help with either.

**mdjermanovic:** Sure!

**mdjermanovic:** Ajv PR will be probably updated soon, we should take a look at that too, I'm not 100% sure that it won't be a breaking change

**nzakas:** Oh yeah, I need to circle back on that thread too.

**btmills:** Uh oh, was I premature in removing the breaking label?
 * 🤷‍♂️ @nzakas

**mdjermanovic:** Well, it could be a non-breaking

**mdjermanovic:** We'll see from the PR 🙂
 * 🤞 @btmills

**nzakas:** Hehe.

**nzakas:** We can keep an eye on it.

**nzakas:** If we could switch over to Espree for a bit

**nzakas:** I think the last PR we need to do the next release is this? https://github.com/eslint/espree/pull/486

**nzakas:** I just left a comment asking for a status update since there hasn't been any updates in the past two weeks. I can finish that up if mysticatea isn't able to.

**nzakas:** The other thing I'd like to get in is this: https://github.com/eslint/espree/issues/495

**btmills:** https://github.com/eslint/eslint-scope/pull/69 is also still a draft as part of class fields, but it now has updated visitor keys

**nzakas:** Oh yeah, seems that relies on the Espree change for its tests

**mdjermanovic:** Should we target releasing class fields support before v8?

**nzakas:** Good question. I think our plan before was to just release it when it was ready and not wait for v8. I'm not opposed to bundling it with v8 if everything comes together around the same time.

**btmills:** That was my thinking as well

**btmills:** On second thought, given we currently can't do fixes to v7 once we start v8 pre-releases, maybe it's best not to merge it into v7 if v8 is right around the corner

**btmills:** It would be unfortunate if we discover that it's partially broken in the final v7

**nzakas:** Fair point. Shall we agree to ship with v8?
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** There is also one change in Acorn 8 that _might_  be breaking for ESLint plugins. https://github.com/eslint/espree/pull/456#issuecomment-729299535. We agreed before that it isn't a breaking change, but still it might be more safe to

**btmills:** I think so. And it'll provide good incentive to upgrade
 * 👍 @mdjermanovic

**mdjermanovic:** .. bundle it with ESLint v8

**nzakas:** Okay, it sounds like we've agreed to hold off on upgrading Espree in ESLint until ESLint v8.0.0
 * 👍 @btmills, @mdjermanovic

**nzakas:** Just added to the v8.0.0 board

**nzakas:** If we can circle back to https://github.com/eslint/espree/issues/495, just want to make sure everyone is 👍 with moving forward with this.

**btmills:** I'm in favor. I see a couple other team members also left 👍s on the issue. I'm curious for your thoughts @mdjermanovic

**mdjermanovic:** Can I think some more about it, and leave a comment on the issue?
 * 👍 @btmills

**mdjermanovic:** I'm generally 👍, but not sure if there could be some problems

**nzakas:** Sure, can you do so by Monday? I'd just like to keep things moving.

**mdjermanovic:** Agreed, by Monday

**nzakas:** Sounds good

**nzakas:** Any other topics to discuss?

**nzakas:** (Aside from the release)

**mdjermanovic:** I have a question about https://github.com/eslint/rfcs/pull/78

**nzakas:** Oh crap, totally lost track of that.

**nzakas:** Thanks for bringing it up.

**nzakas:** (I need to update the bot to nag us about RFCs)

**nzakas:** What's your question?

**mdjermanovic:** My understanding was that we'd prefer that feature to be opt-in, but per the RFC it's by default (when `--fix` and `--report-unused-disable-directives` are enabled). Are we okay with that?

**nzakas:** Yes, that's what seems like the most logical way to enable this

**nzakas:** It follows the logic of whatever is reported can also be fixed

**nzakas:** When you use `--fix`

**mdjermanovic:** Okay, that makes sense to me.

**nzakas:** Cool, I'm going to merge the RFC since it's been over 7 days in final commenting
 * 👍 @btmills, @mdjermanovic

**nzakas:** One topic I wanted to bring up quickly: in general I think the Triage board is helping a lot, but it seems like the "Evaluating" column is where issues go to die most of the time. Do we need another column to help identify where they are? For instance, a "Feedback Needed" column if someone on the team is requesting further feedback from the team?

**mdjermanovic:** I think those two columns would be pretty much equivalent

**btmills:** How would that differ from Evaluating? Would Evaluating be "I've got this, no need to jump in unless you're interested in the topic" and "Feedback Needed" be "I've gotten as far as I can unilaterally"?

**nzakas:** Yes, exactly. It seems like "Evaluating" sometimes means "I'm working through the details with the creator" and other times it means "I want people on the team to chime in at this point"

**nzakas:** And the only way to tell the difference right now is to open each issue and read the last comment

**btmills:** That makes sense, and I think it would be a nice workflow improvement 👍

**mdjermanovic:** Makes sense to try out

**nzakas:** Cool, I'll add that to the board.

**nzakas:** Okay, last topic is the release for tomorrow. Any volunteers?

**mdjermanovic:** I can do the release tomorrow

**btmills:** thanks
 * 👍 @nzakas

**nzakas:** All right, for a meeting with no agenda items it feels like we got a lot done. 🙂
 * 😆 @btmills, @mdjermanovic

**nzakas:** Any last topics before we call it?

**btmills:** nothing from me

**mdjermanovic:** nothing from me, too

**nzakas:** Cool, thanks everyone. I'll be around more regularly going forward now. Thanks for picking up the slack while i rested.

**btmills:** Glad you're getting back into things. Take care! 👋

**mdjermanovic:** Thanks! 👋

**nzakas:** Bye!
