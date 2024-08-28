# 08/22/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Welcome back @mdjermanovic

**fasttime:** Welcome back!

**mdjermanovic:** Thanks, good to be back

**nzakas:** Just pulling up meeting notes from last time to review action items.

**nzakas:** Looks like we had one: @fasttime will add the label to repos that require it in their GitHub issue template.

**nzakas:** "repro:needed" label, that is

**fasttime:** It's done now 🙂
 * 👍 @nzakas

**nzakas:** And you managed to mark `@eslint/js` as deprecated, which was an action item for me but for some reason I couldn't log in on the CLI

**fasttime:** I logged in from a VM
 * 🤔 @nzakas

**nzakas:** Let's do status updates. I've been working on `@eslint/markdown` (which I released yesterday), the `@eslint/plugin-kit` package, continuing to work on types in `@eslint/core`, and tidying up `@eslint/json`.

**nzakas:** @fasttime ?

**fasttime:** I've been reviewing PRs and RFCs. Worked on https://github.com/eslint/rewrite/pull/59 and started working on https://github.com/eslint/rewrite/issues/64. Also had an eye on the code-explorer repo, I think it's progressing well.

**nzakas:** Yes, Code Explorer is progressing well. The biggest blocker right now is switching to Code Mirror from Monaco for the editor. Once we get that done, I'll add support for Markdown and we can get it launched.
 * 👍 @fasttime

**nzakas:** Just a reminder: the plan is to formally announce `@eslint/markdown` and `@eslint/json` along with Code Explorer in the same post.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And just to reset RFC duty:
Next week: @mdjermanovic 
9/2: @fasttime 
9/9: @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** We don't have any issues or PRs flagged for today. I did have one agenda item to discuss, but before that, any issues or PRs people want to discuss?

**fasttime:** Nothing from me this time.

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay, here's the item:

**nzakas:** > Now that we have `@eslint/json` and `@eslint/markdown`, should we start thinking about creating a `plugins.eslint.org` that we can use to host documentation for them? We've talked about this in passing before in terms of improving discoverability for plugins. I'm not sure we have the bandwidth to create something that will be generally open to all plugins at this point, but maybe we could start small and just focus on our plugins for now?

**fasttime:** Makes sense to me 👍

**mdjermanovic:** Makes sense to me too

**nzakas:** Makes sense to me too.

**nzakas:** Does anyone want to put together a proposal for how that would work? 😅

**fasttime:** I'm very unexperienced with the website infrastructure 🤦‍♂️

**nzakas:** This would be a separate website, so that doesn't matter so much.

**nzakas:** I just don't have the bandwidth right now

**fasttime:** I could create an issue and define the tasks that I think should be necessary, but I will likely need help from the eslint.org team to work on them.

**nzakas:** I think creating an issue is a good starting point. We will probably need an RFC for the level of detail this will require

**nzakas:** i.e., how do we coordinate one website across multiple repos?

**fasttime:** good question, could have been mine 😄

**nzakas:** Yup, that's what we need to figure out. 😄

**fasttime:** In that case, I will put together an RFC so we can discuss it and figure out the details.
 * 👍 @nzakas

**nzakas:** Sounds good. We should still have an issue for tracking purposes.
 * 👍 @fasttime

**nzakas:** All right, we'll say that the action item here is for @fasttime to create the tracking issue and put together an RFC.

**nzakas:** Anything else to discuss before we talk about the release?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Nothing else

**nzakas:** All right, let's talk about the release.

**nzakas:** Any volunteers?

**fasttime:** I can do it if noone else wants.

**mdjermanovic:** Thanks!

**nzakas:** I'm a bit swamped tomorrow, so thanks @fasttime

**nzakas:** Looks like just `eslint` and `@eslint/js`?

**fasttime:** Ah okay, so espree, eslint-scope, eslint-visitor-keys don't need to be released first.

**nzakas:** No, there were no changes. We just moved them into `eslint/js`.

**fasttime:** Okay then only @eslint/js and eslint.

**fasttime:** I will do the release at today's meeting time.
 * 👍 @nzakas

**nzakas:** All right, final note is that I dropped several high-priority PRs in the <#688770853588172860> chat that need review. Please look those over before anything else.
 * 👍 @sam3k_, @mdjermanovic, @fasttime

**nzakas:** And I think that's it for today. Thanks everyone! (And thanks @Sam3k for the notes)

**fasttime:** Thanks! Bye 👋

**mdjermanovic:** Thanks 👋
