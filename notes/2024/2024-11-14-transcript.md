# 11/14/2024 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**fasttime:** Hi 👋

**nzakas:** Howdy!

**nzakas:** Looking over last meeting's notes

**nzakas:** Only thing it looks like wasn't accounted for was comparing v9.12 to v9.14 to see what the performance is like. It looks like we neglected to assign that to anyone in particular. Did anyone take a look at that?

**mdjermanovic:** Nope, but we got a response on the original issue that the performance is about the same

**nzakas:** Sounds like a win to me. 👍
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** (about the same as before v9.12)

**nzakas:** RFC Duty schedule
This week: @nzakas 
November 18: @mdjermanovic 
November 25: @fasttime 
December 2: @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** It looks like we don't have any issues or PRs flagged for today. Are there any that need discussing?

**fasttime:** Nothing in particular from my side.

**mdjermanovic:** Nothing in particular from my side

**nzakas:** One I'd like to discuss: https://github.com/eslint/eslint/issues/3565

**nzakas:** @fasttime mentioned you had a fork of ESLint that does parallel linting. Would you like to create an RFC to add that into the core?

**nzakas:** Ref: https://github.com/eslint/eslint/issues/3565#issuecomment-2406715452

**fasttime:** Definitely! I can prepare a PR and we can clarify the details there. Or I should I prepare an RFC first?

**nzakas:** RFC first 👍
 * 👍 @mdjermanovic

**fasttime:** Agreed 👍

**nzakas:** Especially as we seem to keep getting people telling us they're linting repos of 10,000+ files. If we want them to also use ESLint for JSON, Markdown, etc., that number will go up so improving performance is becoming more important.

**nzakas:** Oh, I totally forgot status updates. 😅  Didn't sleep well last night.

**nzakas:** I've been working on the CSS plugin primarily, with a bit of followup work on the JSON plugin, and just started an `extends` RFC.

**fasttime:** Don't tell me about sleeping (father here)...
 * 😄 @nzakas

**mdjermanovic:** I was mostly reviewing PRs. Also updated `@eslint/compat` to support legacy `schema` properties.

**fasttime:** I was mostly busy with triaging issues and reviewing RFCs. Also finished the fix on ignoring files on a different drive on Windows

**nzakas:** I was just looking through issues to see anything else jumps out at me. Just a reminder, if you're having trouble getting resolution on an issue, go ahead and label it with 'tsc agenda' so we can over it in this meeting.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I don't see anything pressing at the moment, so shall we talk about the release?

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas

**fasttime:** Thanks!

**mdjermanovic:** That would be `@eslint/eslintrc`, `@eslint/js` and `eslint`

**nzakas:** This will get the `defaultOptions` changes in?

**mdjermanovic:** Yes
 * 🎉 @nzakas

**nzakas:** And the `@eslint/plugin-kit` upgrade too?

**fasttime:** There's still a comment to address though

**mdjermanovic:** Yes, here's the PR: https://github.com/eslint/eslint/pull/19130
 * 👍 @fasttime

**mdjermanovic:** Which comment?

**nzakas:** Do you mean changing the eslintrc version?

**fasttime:** Ah sorry, I confused it.

**mdjermanovic:** Maybe I didn't close some, but I believe all suggestions have been resolved

**fasttime:** Yes, we can merge that tomorrow.

**nzakas:** Just this one is left: https://github.com/eslint/eslint/pull/17656#discussion_r1820984884

**nzakas:** Which clearly can't happen until `@eslint/eslintrc` is released

**mdjermanovic:** Ah, yes, that needs to wait for the `@eslint/eslintrc` release

**nzakas:** And we'll need to publish the security advisory with the release, as well.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Would probably be helpful to mention in the blog post, too. Maybe not as a "highlight" per se, but an important notice at the top of the post?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, anything else release-related to discuss?

**fasttime:** Any PRs we would like to get merged before tomorrow?

**mdjermanovic:** The one that updates `@eslint/plugin-kit`

**fasttime:** In ESLint we have https://github.com/eslint/eslint/pull/19104 and https://github.com/eslint/eslint/pull/19131, which I think it would be best to release together
 * 👍 @nzakas

**fasttime:** Yes, also that one

**nzakas:** Just pushed the missing commit.

**nzakas:** Yeah, I'd like to get those in, too.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** This one might be ready: https://github.com/eslint/eslint/pull/19050

**mdjermanovic:** We can release that separately from `eslint`
 * 👍 @fasttime

**nzakas:** Good call

**fasttime:** I can review that tomorrow but it would be better to release it separately I think
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Anything else?

**fasttime:** Nothing else from me

**mdjermanovic:** Nothing from me too

**nzakas:** Okay, one last thing from me: November 28 is the Thanksgiving holiday in the US, so I'll be off the 28th and the 29th, meaning I'll miss the next TSC meeting.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And that's it for today. Thanks everyone (and thanks @sam3k_ for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks 👋
