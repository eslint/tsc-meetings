# 04/08/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** All right, let's get started. @btmills are you good for taking notes?
 * 👍 @btmills

**nzakas:** Thanks

**nzakas:** Huh. Looks like we didn't automatically get a new issue for today's meeting.

**nzakas:** Another bot mystery to look into
 * 🤖 @btmills

**nzakas:** I'll add that to the list

**nzakas:** First item: https://github.com/eslint/eslint/issues/11815

**nzakas:** > TSC Summary: This proposal proposes to make the `--report-unused-disable-directives` warnings fixable(runing `eslint ---fix`).
> 
> TSC Question: Shall we accept this proposal? Is a RFC required?

**mdjermanovic:** Sounds interesting. I think it would need an RFC

**nzakas:** Oh I agree, we'd want an RFC for it.

**nzakas:** I'm a little uneasy with having something other than a rule do autofixing, but it does seem useful.

**btmills:** It would be handy to have for sure

**mdjermanovic:** We can ask for an RFC, and then decide whether or not it will be accepted based on the RFC?

**nzakas:** I'd rather see if we can accept the idea and then debate the implementation

**nzakas:** If we like the idea overall and just have questions about the implementation, then I think we can accept it.

**btmills:** If we ask someone to put in the effort for an RFC, I'd want to know we'd accept it unless there are show-stopping implementation issues

**nzakas:** So let's talk about the idea. Are people generally for it right now?

**btmills:** I'm in favor 👍

**nzakas:** The idea being "there should be a way to autofix unused disable directives"

**mdjermanovic:** It could be a new option?

**nzakas:** I think there's a lot of room for debate about exactly how it should be implemented, but the idea seems solid.

**btmills:** yeah, or maybe a unique fix type, but we can figure that out on the RFC

**mdjermanovic:** I support "there should be a way to autofix unused disable directives" 👍
 * 👍 @nzakas, @btmills

**nzakas:** Okay, it looks like we've agreed that we want a way to autofix unused disable directives and we also want an RFC proposing how that should work.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We should make sure to mention on the issue that there are many ways it could be implemented and we aren't sure tacking on to `--fix` is the right approach.
 * 👍 @mdjermanovic

**nzakas:** @btmills can you leave that in your note?

**btmills:** will do

**nzakas:** Thank you, sir

**nzakas:** Okay, next item: https://github.com/eslint/espree/pull/469

**nzakas:** Is this ready?

**mdjermanovic:** I'll try to review over the weekend

**mdjermanovic:** An open question is - do we want to run all tests on the `.cjs` bundle?

**btmills:** I'll also take a look

**nzakas:** I'm okay with not running all the tests on .cjs to start.

**btmills:** I'm fine omitting them unless/until we discover inconsistencies

**nzakas:** I just don't want to have this take longer than it already has. We can always work on adding/updating tests later if an issue pops up.
 * 👍 @mdjermanovic

**nzakas:** So it looks like the resolution here is that you'll both review it soon and we can go from there.
 * 👍 @btmills

**mdjermanovic:** There is also a technical issue with our release process https://github.com/eslint/espree/pull/469#discussion_r586366016

**nzakas:** Can't we handle that by using a `pretest` script in the `package.json` file?

**mdjermanovic:** Probably

**mdjermanovic:** Do we want t include that in the PR, or update it later?

**nzakas:** Let's update it later, that way anyone can work on it

**nzakas:** Can you spin off that comment into a separate issue so we don't lose track of it?

**mdjermanovic:** Okay, I'll open an issue so that we don't forget it

**nzakas:** Same wavelength 🙂

**nzakas:** Just to sum up: we are going to review the PR for merging this weekend. We won''t require .cjs tests for this PR and will consider adding them later if necessary. We will take a look at the release process for Espree to ensure it will work in one way or another.
 * 👍 @btmills, @mdjermanovic

**mdjermanovic:** We should also update API docs

**mdjermanovic:** with the new ESM api

**nzakas:** Ah yes, let's open another issue for that.
 * 👍 @mdjermanovic

**nzakas:** So the next thing is to take a look at what we want to do for v8.0.0. Before starting, I'd like us to set some ground rules so we can avoid some of the pain of past major releases.

**nzakas:** First, do we all agree that the only candidates for v8.0.0 are represented on the board right now? If yes, we can proceed. If no, then I think we should hold off until we can say yes. I'd like to avoid trying to "sneak things in" as the release is in progress.

**btmills:** I added everything I thought we should consider

**mdjermanovic:** Me too

**nzakas:** Okay, so it sounds like we're in agreement that the only thing we will consider for v8.0.0 are on the board right now.
 * 👍 @btmills, @mdjermanovic

**nzakas:** We already have some stuff that's accepted, so we don't need to review those. I'll just go through the stuff in "Needs Discussion." In order to keep this moving to get through them all, I'd suggest for each we just start with everyone saying if they are in favor of including, in favor pending implementation discussion, or not in favor. (Not in favor means we move it to v9.0.0 and consider it again then; no issues will be closed. )
 * 👍 @btmills

**nzakas:** Sound good?
 * 👍 @mdjermanovic

**nzakas:** All right, here we go

**nzakas:** https://github.com/eslint/eslint/issues/10272

**mdjermanovic:** Not in favor. `CLIEngine` is deprecated, and the new `ESLint` class has some validations, including the one from the issue (extra fields)

**btmills:** Not in favor for the same reasons

**nzakas:** Not in favor. It looks like this one should probably be closed at this point?
 * 👍 @btmills, @mdjermanovic

**btmills:** I'll close it when I leave the note

**nzakas:** Thanks @btmills

**nzakas:** Next: https://github.com/eslint/eslint/issues/10203

**mdjermanovic:** I'd be in favor of this, but given that the reactions on the issue are 50-50, it's probably better to leave it as is

**btmills:** Not in favor for v8, but leave open in case @mysticatea wants to pick it back up

**nzakas:** Also not in favor.

**nzakas:** It looks like we bumped this from v7.0.0 to v8.0.0, do we want to bump it again?

**mdjermanovic:** I'd be fine with closing, given the opinions on the issue

**btmills:** oh, we bumped it from v6 too. Okay, yeah, not gonna happen. I'll close unless there are any objections
 * 👍 @nzakas

**nzakas:** Closing seems like the right choice here

**nzakas:** Next: https://github.com/eslint/eslint/issues/11903

**nzakas:** Not in favor.

**btmills:** Also not in favor. This was bumped from v7 with no activity since then, so close as well?
 * 👍 @nzakas

**mdjermanovic:** Not in favor of including `no-use-before-define` with its current defaults. In favor of exploring a way to have TDZ errors in `eslint:recommended`

**btmills:** @mdjermanovic do you want me to leave this open so you can pick it up, or will you do that in a new issue?

**mdjermanovic:** Given that there was no activity on the issue for almost two years, I'd be also fine with closing.

**mdjermanovic:** I'd vote for closing and leaving a comment to open a new issue with a concrete proposal
 * 👍 @nzakas

**btmills:** Will do

**nzakas:** Next: https://github.com/eslint/eslint/issues/14023

**btmills:** In favor

**mdjermanovic:** In favor

**nzakas:** In favor

**nzakas:** Next: https://github.com/eslint/eslint/issues/11989

**nzakas:** In favor pending implementation details

**mdjermanovic:** Is that a breaking change?

**nzakas:** It could be depending on the implementation

**nzakas:** If we go with my proposal, it would be breaking

**btmills:** Only one of the three options (replacing `/` with `#`) would be breaking, so not necessarily

**nzakas:** I'm obviously biased, but I think my proposal is best 🙂

**btmills:** It does eliminate the confusion with a single-character code change

**mdjermanovic:** In favor pending details

**btmills:** In favor assuming we go with `#`, otherwise we can do it in a minor release
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Next: https://github.com/eslint/eslint/issues/14277

**nzakas:** In favor, obviously 🙂

**btmills:** In favor

**mdjermanovic:** In favor

**nzakas:** Next: https://github.com/eslint/eslint/issues/13888

**nzakas:** I know this will be updated to version 8 soon

**mdjermanovic:** In favor, given that the version we're using is maintained only till the end of June

**nzakas:** In favor

**btmills:** In favor

**nzakas:** Next: https://github.com/eslint/eslint/issues/14087

**nzakas:** So I think this doesn't apply anymore if we remove that formatter?
 * 👍 @mdjermanovic

**mdjermanovic:** That can be closed now that we've accepted to remove `codeframe`

**nzakas:** Excellent

**btmills:** That was easy

**nzakas:** Next: https://github.com/eslint/eslint/issues/13654

**btmills:** In favor

**nzakas:** In favor

**mdjermanovic:** That needs an RFC that will probably require a lot of time

**mdjermanovic:** I'm in favor if it will not block the release date

**nzakas:** Yes it will

**nzakas:** Maybe we can enlist an interested party from the community to work on the RFC
 * 👍 @mdjermanovic
 * 🤞 @btmills

**nzakas:** Next: https://github.com/eslint/eslint/pull/12397

**btmills:** The RFC has three approvals from team alumni and is in final commenting, so there isn't a timing issue. In favor

**nzakas:** In favor

**mdjermanovic:** In favor

**nzakas:** Given that, do we want to accept the RFC?

**btmills:** Someone from the existing team will need to review and approve before merging

**nzakas:** Done 🙂

**btmills:** haha that works

**nzakas:** Really, RFCs in final commenting with any team approvals should probably be merged.

**mdjermanovic:** I'm not sure if the current version of the RFC document is in line with the discussion

**nzakas:** Is there something specific that jumps out to you? It looks like the PR implements what is described in the RFC.

**mdjermanovic:** Is the idea to allow all directives in both types of comments, or just to produce warnings?

**nzakas:** Ah good point

**btmills:** Given our discussion last time, seems we don't have to make a decision today https://github.com/eslint/rfcs/pull/34#issuecomment-586018720

**nzakas:** Okay, in the interest of time, let's everyone go review the RFC. Please keep in mind that this is way past the final commenting period, so I think we should lean towards accepting the whole RFC.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next: https://github.com/eslint/eslint/issues/13398

**nzakas:** This is the important detail, IMHO: https://github.com/eslint/eslint/issues/13398#issuecomment-734946030

**nzakas:** I'm not sure that needs to be done in a major release but it certainly can be.

**mdjermanovic:** Does the proposal include removing the `category` fields from core rules?

**nzakas:** Not as stated

**mdjermanovic:** Either way, I'm in favor

**nzakas:** We could add that if want, and that would definitely be a breaking change.

**nzakas:** I'm in favor

**btmills:** Also in favor either way

**nzakas:** It would probably make sense to remove the category so people know not to rely on it
 * 👍 @mdjermanovic

**btmills:** I'll note that

**nzakas:** All right, we are done!

**nzakas:** Only last thing is the release for tomorrow. Volunteers?

**mdjermanovic:** I can do the relase tomorrow

**btmills:** Thanks

**nzakas:** Great.

**mdjermanovic:** Jenkins is currently up 🙂
 * 🎉 @nzakas, @btmills

**nzakas:** All right, thanks everyone!

**mdjermanovic:** Thanks! 👋

**btmills:** In case it trips between now and then, I should be online around the time you typically do releases tomorrow

**btmills:** 👋 take care!

**mdjermanovic:** That would be great, thanks!
