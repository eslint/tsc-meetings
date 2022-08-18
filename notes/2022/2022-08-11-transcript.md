# 08/11/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Howdy!

**btmills:** Is it still the two of us for now?

**nzakas:** Yes. @mdjermanovic is gone until the 15th

**nzakas:** With that said, can you take notes?

**btmills:** I can take notes

**nzakas:** Jinx 🙂

**nzakas:** First agenda item: https://github.com/eslint/rfcs/pull/91

**nzakas:** This RFC has been open for a while and I think it's time to push forward

**nzakas:** > @eslint/eslint-tsc please review this so we can discuss at the meeting.
> 
> **TSC Summary:** This RFC proposes an eslint-community org managed by a separate team but overseen by the TSC. This org would be a repository for important ESLint ecosystem projects and would be able to step on to maintain those projects I’d they fall out of maintenance.
> 
> **TSC Question:** Do we want to proceed with this proposal?

**btmills:** Yes, definitely! I can go leave an approval

**nzakas:** Awesome. I think there are some orphan projects out there that would benefit from getting this set up.

**nzakas:** We don't have any other items flagged for today

**nzakas:** Do you want to bring anything up?

**btmills:** How should we be going through the technical writer applications? Is that something you plan to handle, or should I (and Milos after the 15th) be involved as well?

**nzakas:** Good question - it was on my list to bring up as well.

**nzakas:** I think part of that question is what is your level of interest in the process?

**btmills:** I will not be the least bit offended if you make the decision independently, but I am willing to second chair if that would be useful

**nzakas:** Okay, I can drive it. I may ask for some input as we go along, kind of like I did with the website stuff.

**nzakas:** Procedural question: with writethedocs, is it expected that we just reach out to the applicants directly, or are we supposed to do so through the website?

**btmills:** give me 60s to log in and check
 * 👍 @nzakas

**btmills:** writethedocs provides a kanban board of sorts to help us go through each application with status and notes as metadata. The contact link is the candidate's email address, so I don't see any embedded messaging. Conclusion we _can_ use the website to run the process but do not _need_ to if we have a preferred system

**nzakas:** Ah interesting. And your login data is in 1password currently? I can see that kanban being helpful.

**btmills:** Yep, I don't see a way to invite additional accounts to the employer profile. Maybe it would link our job posting if you sign up with an eslint.org email? But if you'd like to browse, credentials are shared

**nzakas:** Cool, I'll play around and see how far I get.

**nzakas:** As far as our process - do you think it would make sense to ask anyone applying to write a guest post for the blog first?

**nzakas:** I was trying to figure out a way to see if people grokked ESLint before signing on

**btmills:** Good idea! We already have the infrastructure to compensate them reasonably for that time spent. If they have an idea for a topic, great, or ask for a tutorial on some specific subject. That would give decent signal on their ability to communicate what we want the docs to communicate

**nzakas:** Yeah, I was thinking something like asking them to write a tutorial on creating a custom rule (as an example)

**btmills:** I like it

**nzakas:** All right, I'll see who is worth spending some time on. It seems like a lot of the applicants just started technical writing in the last year, so easy to eliminate.

**btmills:** Cool. Reach out if you could use a hand, but I'll let you run with it unless and until told otherwise
 * 👍 @nzakas

**nzakas:** Okay, shall we talk the release?

**btmills:** I'm available. Sometime Saturday

**nzakas:** Thanks 👍

**btmills:** patch of `create-config`

**nzakas:** Ah cool, hadn't noticed that.

**btmills:** that's all I see

**nzakas:** We will be updating the search dropdown on the docs site to be a lot more useful. Merged that PR yesterday.

**btmills:** I saw the tweet - amazing!

**nzakas:** Oh and I did push a PR for caching in FlatESLint yesterday: https://github.com/eslint/eslint/pull/16190

**nzakas:** Once again, everyone seems afraid of it 🤣

**btmills:** Ooh, this one's much smaller!

**btmills:** I'll review before releasing and merge unless I spot something big

**btmills:** (if I don't get to it in time for you to respond)

**nzakas:** Yeah, this one is pretty easy to follow I think. Just one open question on how to handle `parser` and `processor` serialization when they are objects. Not a blocker, but would be good to sort out.

**btmills:** I'll take a look 👍

**nzakas:** Thanks!

**nzakas:** All right, I think we are done for today. Stay safe! (DM coming, btw)

**btmills:** Bye! 👋
