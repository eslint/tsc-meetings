# 12/15/2022 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**btmills:** hello!

**nzakas:** A wild @btmills appears!

**btmills:** successfully didn't fall off a mountain!
 * 🎉 @nzakas

**nzakas:** To celebrate, can you take notes? 😁

**btmills:** haha yep

**mdjermanovic:** thanks 🙂

**nzakas:** Thank you, sir.

**nzakas:** It looks like we don't have any issues tagged for the meeting. Any topics anyone would like to discuss?

**nzakas:** That's about as crickety as you can get.
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular

**nzakas:** Well, I'd like to ask everyone to please read the language plugins RFCs when you can.
 * 👍 @btmills, @mdjermanovic

**btmills:** as I'm jumping back into things, would you say that's near the top of the priority stack?

**nzakas:** https://github.com/eslint/rfcs/pull/99

**nzakas:** Yes
 * 👍 @btmills, @mdjermanovic

**nzakas:** Just looking through -- there are a couple of other new RFCs that would be good to get feedback on as well.

**nzakas:** https://github.com/eslint/rfcs/pull/100

**nzakas:** https://github.com/eslint/rfcs/pull/101

**btmills:** Neat! From a quick skim, those don't look too time-consuming to go through

**nzakas:** Nope. Definitely not as big as mine. 😄

**nzakas:** Any issues or PRs that are stuck and could use attention?

**mdjermanovic:** This one, I think it's stuck as we're not sure if we have a consensus on accepting this change: https://github.com/eslint/eslint/pull/16006

**nzakas:** Is that complete as-is?

**mdjermanovic:** Not sure

**mdjermanovic:** I can take a look if we agree on accepting the change.

**nzakas:** I'm neutral on this -- as I am in general on rules that enforce stylistic preference. Happy to go along with what you folks would like to do.

**mdjermanovic:** @btmills what do you think? I think it's fine to accept this, falls under "adding a new option to fix a bug"

**btmills:** yeah, rereading my original comment, that's the way I looked at it when I first reviewed

**btmills:** (and the option is only necessary because otherwise it'd be a breaking change)
 * 👍 @mdjermanovic

**nzakas:** If possible, I'd suggest we merge without requesting any other changes. It's been open for six months so there's probably not going to be  a lot of back and forth at this point.
 * 👍 @btmills, @mdjermanovic

**btmills:** I don't mind merging before making follow-up change separately if any are needed

**mdjermanovic:** Yeah, we could do that right after we close the release, if there are changes needed

**nzakas:** All right, it looks like we've decided to accept this change. I'll leave it up to you two to figure out merging.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Anything else to discuss?
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular

**nzakas:** Okay, let's talk about the release.

**mdjermanovic:** I can tomorrow

**btmills:** thank you!

**mdjermanovic:** `@eslint/eslintrc` and `eslint`

**nzakas:** What's new in eslintrc?

**mdjermanovic:** updated `globals` dependency

**btmills:** list looks correct

**nzakas:** Ah gotcha

**nzakas:** Okay, last bit of business: when do folks anticipate being offline for the holidays?

**nzakas:** I don't expect to be around much next week as I travel

**btmills:** I haven't figured that out yet, but will update the team when I do

**mdjermanovic:** I'll be mostly online

**nzakas:** Sounds good. I'll definitely be back for the next TSC meeting.

**nzakas:** If there's nothing else, then I think we are done. Glad to be back at full power!

**mdjermanovic:** Thanks! 👋

**btmills:** take care! 👋
