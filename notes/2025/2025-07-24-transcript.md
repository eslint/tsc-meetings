# 07/24/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Grabbing the notes from last meeting

**nzakas:** Okay, nothing to follow up on.

**nzakas:** Let's start with statuses. I was off last week and have mostly been trying to catch up with notifications this week.

**mdjermanovic:** I was switching some tests from eslintrc to flat config mode, in preparation for v10. Also reviewing PRs and RFCs.

**fasttime:** I was mostly busy with triaging and reviews, and worked on some maintenance PRs.

**nzakas:** Let's talk availability over the next couple of weeks. I expect to be around at about 2 hours each week day.

**mdjermanovic:** I expect to work around 1-1.5 hours each day until August 2. Then, I'll be mostly offline Aug 3 - Aug 21

**fasttime:** I should be available about 9 hours per week

**nzakas:** @mdjermanovic August 2 is next Saturday, so you're around next week and then not again until August 22.

**mdjermanovic:** Yes
 * 👍 @nzakas

**nzakas:** Okay, so we need to figure out RFC duty for the next month. @mdjermanovic was this week.

**mdjermanovic:** I could take the next week too
 * 🙏 @nzakas

**nzakas:** So that would look like:
This week: @mdjermanovic 
July 28: @mdjermanovic 
August 4: @nzakas 
August 11: @fasttime
 * 👍 @mdjermanovic

**fasttime:** Works for me 👍

**mdjermanovic:** Works for me too

**nzakas:** Sounds good

**nzakas:** Okay, let's go into the agenda.

**nzakas:** First up: https://github.com/eslint/eslint/issues/19118

**nzakas:** > **TSC Summary:** Users reported that ESLint's flat config does not match files outside the current working directory, causing issues in monorepo and build tool setups. The discussion led to a proposal for a `--base-path` CLI option, allowing users to explicitly set the root directory for file matching. This approach was seen as a flexible, non-breaking solution that avoids confusing changes to glob pattern semantics.
> 
> **TSC Question:** Shall we move forward with this solution?

**mdjermanovic:** I'm in favor

**fasttime:** I'm also in favor

**nzakas:** Okay, we've agreed to move forward with the proposed `--base-path` option. We'll mark this issue as accepted and "Waiting for RFC"
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I'd also like to talk about the parallel linting PR. @fasttime what is the status on getting that ready for review?

**fasttime:** Should be ready next week
 * 🎉 @michael.faith, @nzakas, @mdjermanovic

**nzakas:** Can you prioritize working on that so we can take advantage of @mdjermanovic's last week to get his review?

**fasttime:** Sure, I'm planning to implement the last todo on the weekend, so hopefully Monday or Tuedsay it should be ready.
 * 🎉 @mdjermanovic
 * 👍 @nzakas

**nzakas:** Okay, any other issues or PRs to discuss before we talk about v10?

**mdjermanovic:** Nothing in particular from me for today

**fasttime:** Nothing in particular from my end

**nzakas:** Here's the v10 board:  https://github.com/orgs/eslint/projects/6'

**nzakas:** First question: is there anything anyone has been thinking about for v10 that isn't already represented on the board?

**mdjermanovic:** Maybe this one: https://github.com/eslint/js/issues/665

**fasttime:** I was hoping to see async parsers and rules.

**nzakas:** We can't do that without the core rewrite, and that won't happen until after v10.
 * 👍 @fasttime

**mdjermanovic:** Also not sure if making the `v10_config_lookup_from_file` default behavior is included in any of the issues we have in the v10 project.
 * 🤔 @nzakas

**fasttime:** Oh, and extracting core rules to `@eslint/js` is also planned for v10

**nzakas:** Good catch, we should probably open an issue to flip all `v10_` flags to "on"
 * 👍 @mdjermanovic

**nzakas:** I don't recall discussing that for v10. Is there an issue somewhere?

**nzakas:** (We've definitely discussed it "in the future",)

**mdjermanovic:** I think it's included in https://github.com/eslint/eslint/issues/19013

**nzakas:** Ah ok, and that's already on the board.

**fasttime:** Thanks, yes, I remembered the title was not directly related.

**nzakas:** I'll propose we defer that. The amount of infrastructure work alone would probably end up pushing that into next year, and I'd prefer not to wait that long for v10.

**mdjermanovic:** I was also thinking we could postpone that

**fasttime:** This one should be also deferred if we want to be ready in the next few months: https://github.com/eslint/eslint/issues/17579
 * 👍 @nzakas, @mdjermanovic

**fasttime:** I haven't been following up on that because of other topics

**nzakas:** Let me create a new v11 board to move these to
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, moved those.

**nzakas:** And added https://github.com/eslint/js/issues/665 to the v10 board
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay and here's the issue for `v10_` flags: https://github.com/eslint/eslint/issues/19967
 * 👍 @mdjermanovic

**nzakas:** Looks like we only have one...which surprises me for some reason. 🤷‍♂️

**nzakas:** Do we want to go through each of the issues on the board and give it a 👍 or 👎?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Finish Language plugins cleanup:
https://github.com/eslint/eslint/issues/16999
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Remove `globalReturn`:
https://github.com/eslint/js/issues/525
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Finish Flat Config/Remove eslintrc:
https://github.com/eslint/eslint/issues/13481
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Stop using lodash packages:
https://github.com/eslint/eslint/issues/18160
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Update minimatch:
https://github.com/eslint/rewrite/issues/66
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** no-invalid-regexp option fix:
https://github.com/eslint/eslint/issues/18755
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** fixer methods throw errors for non-string arguments:
https://github.com/eslint/eslint/issues/18807
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Make RuleTester stricter:
https://github.com/eslint/eslint/issues/18960
 * 👍 @nzakas, @mdjermanovic, @fasttime

**mdjermanovic:** That one has several proposals. I think we have a consensus only on the first point.

**nzakas:** That's okay. The question is do we want to plan on doing this for v10? If yes, we can work on the details.

**mdjermanovic:** Okay, gave 👍

**nzakas:** Don't pass BOM to preprocess method:
https://github.com/eslint/eslint/issues/18891
 * 👍 @mdjermanovic, @fasttime
 * 👎 @nzakas

**nzakas:** I know I filed this, but I'd like to push it to v11. I feel like there might be some yucky edge cases to dig into.

**mdjermanovic:** Sounds good to me

**fasttime:** Okay

**nzakas:** Remove message.nodeType/testErrorCase.type:
https://github.com/eslint/eslint/issues/19029
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Update no-shadow-restricted-names to report globalThis by default:
https://github.com/eslint/eslint/issues/19673
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Remove support for jiti < 2.2.0:
https://github.com/eslint/eslint/issues/19765
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Change `Program` range to cover full file:
https://github.com/eslint/js/issues/648
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Add back `name` to recommended configs:
https://github.com/eslint/eslint/issues/19864
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Update `eslint:recommended`:
https://github.com/eslint/eslint/issues/19966
 * 👍 @nzakas, @mdjermanovic, @fasttime

**nzakas:** Okay, that is it!

**mdjermanovic:** We'll also have an issue for dropping support for old versions of Node.js

**nzakas:** Ooh good catch. Let me make that right now.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** https://github.com/eslint/eslint/issues/19969

**nzakas:** Added to the board.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, NOW I think we have it?

**mdjermanovic:** I think that's all

**fasttime:** I think so

**nzakas:** All right, we'll operate on the assumption that we've just defined v10 unless anything else pressing comes up. Hopefully the scope will be a lot easier to manage than v9.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** That's a good transition to talking about the release tomorrow. 😄

**nzakas:** I'll take that silence as no one is available. I can do it.

**mdjermanovic:** Thanks!

**fasttime:** Thanks!

**nzakas:** I think that's just `eslint` and `@eslint/js`?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Any PRs anyone is looking to get in?

**mdjermanovic:** This one has two approvals but few open questions: https://github.com/eslint/eslint/pull/19877

**nzakas:** Thanks, still digging through notifications. I'll reply to those.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Nothing else looks definitely ready to me.

**nzakas:** Yeah, I don't see anything else. I'll re-review before the release just to double-check.

**nzakas:** Okay, that's all for today. Thanks everyone! (And thanks @sam3k_ 3k for the notes)

**fasttime:** Thanks!

**mdjermanovic:** Thanks 👋
