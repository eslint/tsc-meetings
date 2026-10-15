# 10/01/2026 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Howdy!

**nzakas:** Looks like we're back at full strength! 🎉
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Pulling up last meeting's AI-generated notes 😁

**nzakas:** Action items:
1. Me to remove Twitter posting from minor packages - I think I got most of them but will double-check.
2. Me to set up repos for the Bash and Docker plugins. I set up the Bash one and figured I'd wait to get that settled before setting up the Docker one so I could learn from the first one.

**nzakas:** @fasttime to review https://github.com/eslint/rewrite/pull/498, which done. Waiting for @mdjermanovic now.

**mdjermanovic:** Sorry for not reviewing earlier. I'll be mostly away tomorrow but can review it this weekend
 * 👍 @nzakas

**nzakas:** Let's begin with statuses.

I've mostly been working on the TypeScript parser RFC and the Bash plugin.

**mdjermanovic:** I was mostly triaging issues and reviewing PRs

**fasttime:** I've been mostly reviewing issues and PRs, and fixed a couple of hiccups in CI

**nzakas:** Availability for the next couple of weeks.

For me, likely in the 1-3 hours per week range.

**fasttime:** I should still be available about 7 hours per week.

**mdjermanovic:** I'll be mostly away tomorrow and on Wednesday, October 14th, due to eye exams. Other than those two days, I should be available 1-1.5h daily

**nzakas:** RFC Duty:
This week - @nzakas 
Oct 5 - @fasttime 
Oct 12 - @mdjermanovic
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues or PRs flagged.

The one agenda item I added was to discuss how to proceed with the Bash plugin. The repo is set up as private and I split all the work into different PRs that have been code reviewed by AI but no one else. 🙂

**mdjermanovic:** Sorry for the delay. I can start reviewing this weekend.
 * 🙏 @nzakas

**nzakas:** I'd still like to discuss the overall strategy for it. I'm not sure there's any harm in flipping the repo public, so doing that might bring more eyes to the PRs too.

I feel like after a sanity check, it may just be better to publish 0.1.0, announce its availability, and gather feedback from early users rather than trying to get everything 100% before releasing.

**mdjermanovic:** What would be included in 0.1.0, core and all already prepared rules or only a couple of rules?

**fasttime:** Sounds good to me. I find it tiresome to review AI-generated code. Mostly I don't find any bugs, but many small things that could be improved.

**nzakas:** @mdjermanovic everything in the repo now. It's meant to be equivalent to ShellCheck.
 * 👍 @mdjermanovic

**nzakas:** @fasttime I agree. I also feel like CodeRabbit is an excellent code reviewer.
 * 😁 @fasttime

**nzakas:** I also feel pretty confident in the rules thanks to `RuleTester`

**mdjermanovic:** So, the idea is to do just quick reviews, and get the feedback and then possibly fix edge cases after the feedback?

**nzakas:** That's what I'm thinking, yes. Or any ergonomic or compatibility issues people discover when they try to use it.

**mdjermanovic:** Makes sense to me

**nzakas:** I don't know that we have any repos with `.sh` files, but I have a bunch of personal ones that do, so i intend on installing it to dogfood the plugin too.

**nzakas:** @fasttime thoughts?

**fasttime:** Just noting that someone created a plugin to lint .sh files already `eslint-sh`: https://www.npmjs.com/package/eslint-sh

**nzakas:** https://www.npmjs.com/package/@eslint-sh/eslint-plugin

**fasttime:** As for the new repo, I agree it's a good idea to make it public. I could try to run it on my `.sh` files (not many) to catch edge cases.

**nzakas:** So it sounds like we've agreed:

1. To flip the repo public
2. To do a quick review of existing PRs
3. Release 0.1.0 to get feedback
 * 👍 @mdjermanovic, @fasttime

**fasttime:** Yes, they're from the same author.

**nzakas:** Not on GitHub 🤷‍♂️

**nzakas:** Okay, any other topics before we discuss the contributor pool?

**fasttime:** Nothing in particular.

**mdjermanovic:** Nothing in particular for today.

**nzakas:** https://github.com/eslint/tsc-meetings/blob/main/notes/2026/2026-10-01-contributor-pool.md

**nzakas:** electrohyun came out of nowhere and had a productive month!
 * 🎉 @mdjermanovic

**nzakas:** Some of these are AI-generated

**mdjermanovic:** I think they're saying AI was used only for grammar of PR comments

**fasttime:** He said in a comment he only uses AI to improve his writing, so I'm not sure. I think it's fine to reward the contribution in this case?

**nzakas:** each PR they say something slightly different: "used AI for understanding" is a common theme

**nzakas:** I think it's okay to award these and I also think we need to update the AI disclosure in the template based on this feedback. It seems that the two checkboxes are really not clear enough. I'll take that as an action item.
 * 👍 @fasttime

**mdjermanovic:** Yeah, AI help for understanding code & PR comments language seems okay
 * 👍 @nzakas, @fasttime, @thedraco0007_26327

**nzakas:** overall looks like the PRs are on the smaller side. Maybe $250 for electrohyun and $150 each for sethamus and xbinaryx?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'll let them know.

**nzakas:** Okay, let's talk about the release.

**fasttime:** I can do the release tomorrow.
 * 🙏 @nzakas

**mdjermanovic:** Thanks!

**fasttime:** That will be only `eslint` I think. v10.12.0.
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, I think that is it for today. Thanks everyone!

**fasttime:** Thanks! Take care 👋

**mdjermanovic:** Thanks! 👋
