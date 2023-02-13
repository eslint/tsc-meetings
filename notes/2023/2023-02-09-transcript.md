# 02/09/2023 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** Looks like we are all here -- @btmills can I ask you to take notes?

**btmills:** you bet!

**nzakas:** Thank you, sir

**nzakas:** Just to start with some personal stuff: 1) I'm in the process of moving cross-country, so my availability may be up and down, 2) I'm expecting a call related to my new place in the next hour so I may need to leave quickly, 3) I won't be available for the next TSC meeting.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Phew!

**nzakas:** Okay, we've got a bunch of stuff on the agenda, so let's see how we do getting through them all

**nzakas:** First item: https://github.com/eslint/eslint/issues/16875

**nzakas:** > **TSC Summary:** We haven't yet implemented caching for object parsers or processors. To do this, we need a way to identify these objects uniquely. The proposal is to ask parsers to implement some identifying properties, such as:
> 
> ```js
> parser = {
>    meta: {
>        name: "foo",
>        version: "1.1.1",
>    }
> };
> ```
> 
> **TSC Question:** How do we want to identify object parsers and processors for caching?

**mdjermanovic:** That seems like the only possible solution

**mdjermanovic:** As for the content of `meta`, it could be anything that is JSON-serializable?

**btmills:** Is the proposal specific about `name` and `version` as the cache key, or are we using all of the (arbitrary) contents of `meta`? I ask because I could see a world where people might do some magic to do runtime customization of a parser before passing it in options (beyond what's in `languageOptions`)

**nzakas:** My idea is just to use `name@version` as the cache key

**nzakas:** I just wanted to segment that data off so it doesn't blend in with any other properties they might have

**mdjermanovic:** Sounds good to me

**btmills:** That seems reasonable. If someone wants to do runtime customization, they could probably add some suffix to the name or version still

**nzakas:** Yeah, they can decide how to populate those fields, just as long as they're present.
 * 👍 @btmills

**nzakas:** Okay, so it looks like we've decided to support the proposal.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item:

**nzakas:** https://github.com/eslint/eslint/issues/16828

**nzakas:** > **TSC Summary:** This proposal asks for a `defaultConfigFile` option to the API (`ESLint`/`FlatESLint`) that would allow an API user to specify a default config file to use if none is found through the normal lookup.
> 
> **TSC Question:** Do we want to accept this proposal?

**mdjermanovic:** Looks like a use case with globally installed ESLint, which we generally don't support. That said, I wouldn't mind adding this option.

**nzakas:** And to clarify: this would have no effect on the CLI. This would just be an API option.

**btmills:** Remember home directory configs? 😆 I think `defaultConfigFile` as an API option makes sense

**nzakas:** Yup, everything old is new again. 🙂

**nzakas:** Okay, we've agreed to accept this proposal. Do we want an RFC for it?

**mdjermanovic:** Yes, I think this needs an RFC

**btmills:** Agreed

**nzakas:** Sounds good. 👍

**nzakas:** Next item:

**nzakas:** https://github.com/eslint/eslint/issues/15726

**nzakas:** > **TSC Summary:** This issue proposes setting up Renovate on ESLint repos. Renovate prefers to pin all dependencies and send pull requests to update each dependency individually. It can be a bit noisy, but it would ensure that we are regularly updating dependencies, which is something we don't do very well right now.
> 
> **TSC Agenda:** Should we enable Renovate on the org?

**mdjermanovic:** Is it necessary to pin dependencies? I believe that isn't a common practice for libraries

**nzakas:** It's not necessary but I think it's worth considering.

**btmills:** I'm on board for regularly updating, but agree with @mdjermanovic that pinning is less common in our case

**mdjermanovic:** Renovate also advises against it: https://docs.renovatebot.com/dependency-pinning/#ranges-for-libraries

**nzakas:** Okay, I don't feel strongly either way.

**nzakas:** It sounds like we've agreed to enable Renovate and not pin dependencies
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** Aside from that, I agree with enabling Renovate

**nzakas:** Do either one of you want to take lead on getting that set up?

**btmills:** I can do that after release-please

**nzakas:** Awesome, thank you

**nzakas:** Next item:

**nzakas:** https://github.com/eslint/eslint/issues/16820

**nzakas:** > **TSC Summary:** This issue proposes that we bundle part or all of our JavaScript files upon publishing of each version. Doing so would 1) speed up startup time by reducing file system access and 2) make it easier to create a Rust CLI wrapper around ESLint. My suggestion is to bundle `api.js` without external dependencies and publish that during the release while also adding a process to bundle the entire CLI, including external dependencies, into one file to ease the Rust CLI development.
> 
> **TSC Question:** Do we want to accept this proposal?

**btmills:** To make sure I understand correctly, this would save us ~16ms on startup?

**nzakas:** (Sorry, phone call came in, just catching up again,)

**btmills:** In principle, doing the lazy-loading at runtime when we could make it static seems reasonable. There have been cases where jumping in to `node_modules` and editing and setting breakpoints live was handy, but that's definitely a minority use case - usually when I was working on ESLint internals already

**mdjermanovic:** `cli.js` would use the bundled `api.js`?

**nzakas:** As a staring point, yes.

**nzakas:** To me, this is something we can implement incrementally to see what works best, but the starting point would be to bundle `api.js` and let `cli.js` require it.

**nzakas:** That would let us eliminate the lazy loading, which would in turn help with the Rust CLI project.

**btmills:** Sounds to me like it has more benefits than drawbacks

**nzakas:** I think the main drawback is a bit more complexity at release time, but plenty of tools bundle at build time, so it's definitely a tolerable amount of complexity.

**btmills:** And lots of prior art
 * 👍 @nzakas

**nzakas:** @mdjermanovic?

**mdjermanovic:** Sounds good to me to try out

**nzakas:** Okay, we've agreed to accept this proposal. I think Bartek might be up for implementing this, so I'll ping him.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We've got three more items, and I don't know if we can squeeze them all in. I think we can probably handle contributor pool outside of this meeting to save some time.

**nzakas:** > Let's discuss https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-3/ and what are the immediate next steps. There is already a [PR](https://github.com/estools/esquery/pull/134) implementing the changes mentioned, so this might be a good time to discuss formally forking esquery and incorporating those changes.

**nzakas:** I guess first: has everyone read this post? If not, we can defer discussion.

**btmills:** Read it ✋

**mdjermanovic:** I can open an issue to discuss the suggestions and define tasks

**mdjermanovic:** Read it too.

**btmills:** This is the second time forking esquery has come up in as many meetings, so sounds like that's going to be necessary
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Let's continue on the issue that @mdjermanovic will open.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Save us some time today.

**nzakas:** Next:

**nzakas:** > Agenda item: With regards to the rewrite, it might be helpful to put together a survey to gather more information from ESLint users. Especially as it seems fewer and fewer people are using Espree as their parser and there are a lot of questions over ESM vs. CJS, it might be good to get some actual data to make decisions.

**nzakas:** Basically, just looks for a 👍 or 👎 to this idea right now. I can put together a doc with suggested questions if we think this is a good idea.

**nzakas:** The intent would be to share primarily on Twitter.

**btmills:** 👍 that would have broader reach than a discussion or issue thread

**mdjermanovic:** 👍

**nzakas:** Okay, we've agreed to put together a survey. I'll take the action item to put together a draft and share it with everyone.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Last one:

**nzakas:** > We're once again in a situation where issues and PRs are piling up. Let's talk about how things are working right now and where the holdups are. It might also be time to regularly estimate how much time we have to give to ESLint over each two week period so we know when coverage will be tight.

**nzakas:** Realizing this is a bit of a meaty one, but it just seems like our processes have been breaking down.

**mdjermanovic:** I was less active in January because I was moving into a new apartment. Naively, I didn't predict it will take so much time and energy, so missed letting you know.

**nzakas:** My primary concern is that we may miss out on attracting new contributors due to longer-than-usual response times.

**nzakas:** Ah, that makes sense. Yes, I anticipate my move will likely cause periodic disruptions in my availability as well.

**nzakas:** That's why I'd like to try just discussing upcoming availability at each meeting so we are checking in with each other a bit more regularly.
 * 👍 @btmills, @mdjermanovic

**btmills:** I only got back to my baseline in the last couple weeks post-wedding, and even that hasn't included much triage for a while outside of following up on meeting notes and doing releases

**nzakas:** Okay, it looks like we're all in agreement to check in at each meeting on availability.
 * 👍 @btmills, @mdjermanovic

**nzakas:** The other thing I'd like to suggest is maybe we prioritize things like this:

1. RFC reviews
2. PR reviews
3. Issue triage
4. Discussion reviews

**btmills:** 5. Implementation?

**nzakas:** 🤣 Who needs that?
 * 😅 @btmills, @mdjermanovic

**nzakas:** So maybe:

**nzakas:** 1. RFC reviews
2. PR reviews
3. Implementation
4. Issue triage
5. Discussion reviews
 * 👍 @mdjermanovic

**nzakas:** With Joel and Samuel chipping in on 4 and 5, this seems achievable to me

**btmills:** I can work with that, and very excited to have them on board

**nzakas:** Oh, which reminds me: Focus on the "Ready for Dev Team" column rather than "Needs Triage" column now. We will let Joel and Samuel handle the front of the funnel.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, any other thoughts on this before we move on?

**nzakas:** Quickly, contributor pool: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2023-01-01+merged%3A%3C2022-02-01+

**nzakas:** This seems like $100 a piece and we're done?
 * 👍 @btmills, @mdjermanovic

**nzakas:** Okay, I'll let them know.

**nzakas:** Last: let's talk the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**btmills:** thanks!

**nzakas:** Are we just doing `eslint`?

**mdjermanovic:** I believe so

**btmills:** just skimmed, didn't see anything else

**nzakas:** Sounds good.

**nzakas:** One last note: I split out virtual files from the languages RFC into a new one, so whenever you can review, I'd appreciate it (if you haven't already -- haven't checked yet today): https://github.com/eslint/rfcs/pull/105
 * 👍 @btmills, @mdjermanovic

**nzakas:** And with that, we actually finished everything in the agenda! 🎉
 * 🎉 @btmills, @mdjermanovic

**btmills:** Since we have 2m, I need a project to use with `release-please` first. `generator-eslint` seems appropriately non-core. Any objections with starting there?
 * 👍 @mdjermanovic

**btmills:** (I'm prototyping on a test repository first)

**mdjermanovic:** Starting with `generator-eslint` sounds good to me

**btmills:** I'll move forward with that then! In case nzakas needed to run, I'll check back before moving forward though in case of objections

**btmills:** Anything else you need to cover before we adjourn?

**mdjermanovic:** Nothing in particular from me.

**btmills:** All right. Take care! 👋

**mdjermanovic:** 👋

**Sam3k:** Oh which reminds me Focus on the Ready
