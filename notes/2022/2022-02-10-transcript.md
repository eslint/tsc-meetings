# 02/10/2022 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**nzakas:** Greetings!

**btmills:** 👋

**nzakas:** And we are at full strength 🎉

**nzakas:** @btmills are you good for taking notes?

**btmills:** yep

**nzakas:** Thanks!

**nzakas:** So it looks like we don't have any issues or PRs flagged. I have a bunch of stuff to bring up, but does anyone want to discuss anything first?
 * 🦗 @btmills

**nzakas:** ...I'll take that as a no

**nzakas:** First: I'm going to flip the new.eslint.org repo public after the meeting. We don't yet have the homepage animation (should have that next week) and the sponsors list isn't being updated, but otherwise I think we are in good enough shape to start gathering feedback and share publicly.
 * 🎉 @btmills, @mdjermanovic

**nzakas:** I've been working on pulling data at build time rather than using separate jobs on Jenkins, so we will always end up with up-to-date data every time we build.

**nzakas:** The sponsors data is the last part of that, which I'll finish next week.

**nzakas:** Second: we have two open RFCs that I've already approved. I'd like to see us move these into final commenting soon:
https://github.com/eslint/rfcs/pull/85
https://github.com/eslint/rfcs/pull/84

**nzakas:** So if you have time in the next week, please review
 * 👍 @btmills, @mdjermanovic

**nzakas:** And there was a new comment on this issue: https://github.com/eslint/eslint/issues/14198

**nzakas:** It looks like there may be another use case for specifying arbitrary meta data along with linting errors

**btmills:** Awesome, that'll really help inform the design

**btmills:** I have that on my todo list before I dive into tsc
 * 👍 @nzakas

**nzakas:** Cool, I was looking for your feedback there 🙂

**btmills:** I was originally thinking it might be related to https://github.com/eslint/eslint/issues/14745, but it seems like they're separate use cases with separate solutions

**nzakas:** Yeah, seems like a different problem space

**nzakas:** With only a small intersection

**nzakas:** Also, I just realized that "tsc" in your previous comment meant TypeScript Compiler and not Technical Steering Committee 😆

**btmills:** Whoops, sorry! Yes. In the future I shall use `tsc` or TypeScript/TS
 * 👍 @nzakas

**nzakas:** Last: @bartlomieju is looking to see if there's a way for ESLint to use SWC (the Rust JavaScript parser that Deno uses): https://rustdoc.swc.rs/swc_estree_compat/

**nzakas:** There may be a way to do it using NAPI, but there is a wasm version as well. The wasm version would require async parsing to work, though.

**mdjermanovic:** I plan to make a working prototype and then start RFC for async parse()
 * 🎉 @brettz9, @nzakas

**nzakas:** I think it would be amazing to get SWC working one way or another. Start to dip our toes into better performance.

**nzakas:** I had to pause working on flat config while I've been finishing up the new website, but will pick that back up next week.

**nzakas:** Those are all the topics I had to discuss. Shall we discuss the release?

**mdjermanovic:** I can do the release tomorrow

**nzakas:** Thanks!

**btmills:** thanks

**mdjermanovic:** That will be a lot of packages

**nzakas:** I was just going to say, there's at least eslintrc and eslint

**mdjermanovic:** `espree`, `eslint-scope`, `eslintrc`, `eslint`, maybe `eslint-visitor-keys`

**nzakas:** oh wow

**mdjermanovic:** `espree` had a fix in `Syntax` export. `eslint-scope` had a fix for ES3 `"use strict"`

**nzakas:** Ah right, forgot about those.

**nzakas:** Awesome, anything else before we close out the meeting?

**btmills:** nothing from me

**mdjermanovic:** Nothing from me, too

**nzakas:** Okay, thanks everyone for the fastest meeting ever 🎉

**btmills:** woohoo! 👋

**nzakas:** I'll send out a tweet and email once the new website repo is live

**nzakas:** take care and stay safe

**mdjermanovic:** Thanks!
