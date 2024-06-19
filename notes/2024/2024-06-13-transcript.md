# 06/13/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Pulling up the notes from last time

**nzakas:** Looks like we didn't have any action items to follow up on.

**nzakas:** So let's jump into what we've been working on. I'll start

**fasttime:** Should we discuss how the weekly RFC duty is going?

**nzakas:** Yes, we'll do that once we get through the other agenda items.
 * 👍 @fasttime

**nzakas:** I've been working on the config migrator, feature flags (https://github.com/eslint/eslint/pull/18516), and the refactoring around JS language (https://github.com/eslint/eslint/pull/18448), plus talking with sponsors.

**nzakas:** Also working on the config lookup RFC for https://github.com/eslint/eslint/issues/18385

**nzakas:** @mdjermanovic ?

**mdjermanovic:** I fixed several bugs in the core and enabled eslint-config-eslint in the rewrite repo. Other than that, reviewing PRs and triaging issues as usual.

**fasttime:** I worked on fixing the error messages for ignored files (https://github.com/eslint/eslint/pull/18404), then triaging issues and updating the docs. And I did the release 🙂

**nzakas:** All right, let's jump into agenda items.

**nzakas:** First item: https://github.com/eslint/eslint/issues/15560

**nzakas:** > **TSC Summary:** This issue tracks converting the `eslint` repo to ESM. This was opened in 2022, and since then, we've decided to rewrite the core (in ESM) in a separate repo.
> 
> **TSC Question:** Do we still want to pursue converting the `eslint` repo to ESM?

**nzakas:** My feeling is that this isn't worth the effort.

**mdjermanovic:** Given that we decided on doing a rewrite, in ESM, cost/benefit of converting the eslint repo to ESM dosn't seem justifiable

**mdjermanovic:** So I think it's fine to keep eslint repo being CommonJS

**fasttime:** Yeah, there's no compelling reason to switch existing code to ESM

**fasttime:** All runtimes work fine with CJS, so we can keep what we have

**nzakas:** Okay, we've decided not to convert the ESLint repo to ESM. ( @sam3k_  this issue can be closed once you've added the comment)
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Next item:

**nzakas:** > **Agenda item:** Let's review our sponsorships and spending. This past month, we spent $6,000 more than we brought in. While we're okay for now thanks to our reserves, we should keep an eye on spending going forward and still be seeking new sponsors.

**nzakas:** As I noted, I think it's important to flag this. This is the first time in ESLint's history where we have consistently spent more than we brought in for several months in a row.

**nzakas:** And this month was a big one.

**nzakas:** I'm constantly reaching out to people at different companies looking for sponsorships, but it's a very slow process. I'd like to ask you two to reach out into your networks, as well.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** So that's it. Just wanted it on the record so if we need to start making some changes on spending in the future, it's not a huge surprise. With our current reserves of $211,000, we could continue at roughly our current spending rate for about 18 months without any new sponsorships...I just don't want to let it get to that point.

**nzakas:** Okay, let's talk about RFC duty. From my perspective it seems to be going well. What are your thoughts?

**fasttime:** I think it's good to have it

**mdjermanovic:** Very positive

**fasttime:** keep it

**fasttime:** But there's still not much going on in the RFCs

**fasttime:** Like most of them are either stuck or the author is no longer replying to comments, etc.

**nzakas:** The author no longer replying to comments is fairly common due to how long some of these RFCs are open. That's okay, they usually come back around once it's clear that there's a path forward.

**nzakas:** Or else someone else can pick it up.

**nzakas:** (Authors no longer responding was part of the reason for RFC duty. Faster feedback loops keep people engaged.)

**fasttime:** Exactly, I was wondering if we should ask folks to pick up old RFCs that haven't been updated for a while

**fasttime:** It looks like there would be volunteers

**fasttime:** On some of them at least

**nzakas:** We can definitely do that. I usually ask the author one last time and just say if they don't want to complete it, we can have someone else pick it up.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, we've resolved to keep RFC duty in place. Upcoming schedule:

This week: @mdjermanovic 
June 17: @fasttime 
June 24: @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, any other topics (outside of contributor pool and the release)?

**fasttime:** Nothing else from my side

**mdjermanovic:** Nothing else from my side too

**nzakas:** Then let's do contributor pool:

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-05-01..2024-05-31+

**fasttime:** Should we also reward the RFC about TypeScript config support or is it better to wait until the implementation is ready? https://github.com/eslint/rfcs/pull/117

**nzakas:** We generally wait until the feature has been merged and then award for the RFC + implementation.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Should we just do $100 for each?

**mdjermanovic:** Sounds good to me.

**nzakas:** All right, I'll let them know.
 * 👍 @fasttime

**nzakas:** Let's talk about the release

**mdjermanovic:** I can tomorrow
 * 👍 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** Since we've already released eslint/rewrite packages, tomorrow would be just `eslint` and `@eslint/js`

**nzakas:** Sounds good. It's so nice in `eslint/rewrite` to just merge a PR and have everything released. 🙂 Some day that will be everything.
 * 👍 @mdjermanovic
 * 😀 @fasttime

**nzakas:** Okay, anything else before we adjourn?

**mdjermanovic:** Nothing in particular from me

**fasttime:** Nothing from my side

**nzakas:** All right, thanks everyone! (and thanks @sam3k_ for the notes)

**fasttime:** Thanks! Take care 👋

**mdjermanovic:** Thanks! 👋
