# 07/14/2022 ESLint TSC Meeting Transcript

**nzakas:** Hello!

**btmills:** Hi!

**nzakas:** There he is!

**nzakas:** Just the two of us today

**nzakas:** Can you take notes? I think this will probably be pretty short

**btmills:** yep

**nzakas:** Thank you, sir.

**nzakas:** So for the record @mdjermanovic is away for the next four weeks.

**nzakas:** Related, I'm not going to be able to keep up with all the issues and PRs on my own during that time, so any additional help would be appreciated.

**btmills:** I'll allocate more time to the triage board 👍
 * 🙏 @nzakas

**nzakas:** Looks like we have two official agenda items

**nzakas:** First:

**nzakas:** > Agenda item: [eslint/rfcs#91](https://github.com/eslint/rfcs/pull/91) needs finalization. One of the open items is if we should pay the maintainers of eslint-community as members of the team (like committers). Let’s decide on that.

**nzakas:** So I'm of the mind that if the eslint-community GitHub organization is going to be overseen in some way by the TSC, then I think we should pay the maintainers from our funds.

**btmills:** Part of the reason for having that organization in the first place is providing continuity for those widely-depended-upon packages, so I agree it's consistent with what our sponsors intend for their donations to support

**nzakas:** Yup. So we have agreed that we will pay the maintainers of eslint-community at the same level as committers.

**nzakas:** Basically, it will be a special subteam kind of like the website team.
 * 👍 @MichaelDeBoey, @btmills

**nzakas:** All right, second item:

**nzakas:** > > Agenda item: I’d like to propose a new approach to flat config development. I’d like to commit an incomplete version of FlatESLint (no caching, some glob-related bugs) soon to avoid getting too far behind main. That would allow us to get some early feedback from people. I’d focus on documenting flat config, writing up some introductory blog posts, and then circling back to finish the implementation.

**btmills:** I'm a fan of incremental changes 👍

**btmills:** Would we explicitly state it is in beta and not subject to semver constraints of the main package?

**btmills:** or I guess alpha since it wouldn't be feature-complete yet

**nzakas:** Yes. So FlatESLint won't be tied into the CLI at all, it will just be available via the API in the `use-at-your-own-risk` entrypoint.

**btmills:** cool 👍

**nzakas:** I'm sorry it took so long, but between the mountain of upfront work it took to get the thing running and then the website redesign, it's been an uphill battle.

**btmills:** no apology needed - you've had a lot of other stuff taking precedence

**nzakas:** Okay, so we have agreed to this new approach to getting FlatESLint out. I am hopeful it'll be ready to check in within the next two weeks. 🎉

**btmills:** that'd be exciting!

**nzakas:** Really, I can't believe how much nicer it feels to use flat config. My brain hurts a lot less than with eslintrc.

**btmills:** I've spent 5% as much time with it as I have with eslintrc and already find myself missing it in production code haha
 * 👍 @nzakas

**nzakas:** Oh, I actually have a followup on hiring a technical writer.

**nzakas:** I reached out to my contact and he suggested looking for someone via writethedocs.org

**btmills:** Ooh I hadn't seen that before!

**nzakas:** Me either

**btmills:** They have a lightly-populated [job board](https://jobs.writethedocs.org/)

**nzakas:** Yes, that is one option. The more expensive post also includes a link in their newsletter.

**nzakas:** Seems like that $250 might be well worth it to get in front of these eyes?

**nzakas:** https://jobs.writethedocs.org/pricing/

**btmills:** agreed 👍 that could easily hit breakeven vs time spent manually reaching out to people

**nzakas:** And of course if we tweet about it, maybe people searching via Twitter for writethedocs will retweet it too and increase the reach

**nzakas:** Okay, I'll read through some of the existing job posts and come up with a draft job post to send around.

**btmills:** cool! feel free to ping me early if you feel like you're getting stuck - I've been doing a lot of hiring lately

**nzakas:** If you'd like to volunteer to write it instead, I won't be offended 🙂

**btmills:** whoops haha, sure I can do that

**nzakas:** 😄

**nzakas:** Thanks!

**nzakas:** Speaking of things you can do, shall we talk about the release?

**btmills:** yes I can do that too 🙂

**btmills:** (at least that one I saw coming)

**nzakas:** Great, thank you. It seems like it went more or less smoothly last time?

**nzakas:** With the new docs site, I mean

**btmills:** the package got out just fine, just some friction building the site to get the blog out - I'll respond to your feedback on https://github.com/eslint/eslint.org/pull/253 this evening so that can hopefully go in before the release and potentially protect us from similar issues going forward

**nzakas:** Sounds good.

**nzakas:** The other thing we can do with this setup, now that I think of it, is mark the autogenerated blog post with `draft: true` in the frontmatter. That will prevent it from rendering. You'd just remove that after editing the post.

**nzakas:** We didn't have that capability in the old site.

**btmills:** ooh yeah! I'll put up a PR updating the template tonight if you don't get to it first

**nzakas:** Sounds good. I'll probably jump over and do that once we finish here.
 * 👍 @btmills

**nzakas:** @bmish is also requesting a release of generator-eslint: https://github.com/eslint/generator-eslint/issues/137

**btmills:** will do 👍 anything else?

**nzakas:** I think it's safe to just go ahead and do a major release. I don't think this type of tool needs to worry too much about breaking changes.

**nzakas:** I believe that is it

**btmills:** cool 👍 I spent time on the website two weeks ago and didn't get to the markdown plugin major, so I'll do that this time 🤞

**nzakas:** Sounds good. And once we get the release out and the new docs published, I'll contact the website folks to invite them to the team. I just wanted to be able to point them to the live docs as a description of what the team does before inviting anyone.

**btmills:** sounds good

**nzakas:** All right, anything else we need to discuss?

**btmills:** nothing from me

**nzakas:** Nothing from me, either. So we can call it a meeting. Thanks!

**btmills:** take care! 👋

**nzakas:** You too!
