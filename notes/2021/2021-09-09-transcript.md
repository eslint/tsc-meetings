# 09/09/2021 ESLint TSC Meeting Transcript

**nzakas:** Howdy

**mdjermanovic:** Hi!

**nzakas:** Let's give @btmills a couple minutes, he did reply to the invite saying he'd be here
 * 👍 @mdjermanovic

**btmills:** 👋

**nzakas:** And there he is

**nzakas:** All right, @btmills are your notetaking skills ready to deploy?

**btmills:** indeed!

**nzakas:** Thanks!

**nzakas:** So we've got a few issues to go over

**nzakas:** I'm going to start with the v8-related stuff and work my way towards the stuff that isn't directly related

**nzakas:** First: https://github.com/eslint/eslint/issues/15017

**nzakas:** Basically, Acorn allows reserved words for ES3 identifiers but technically that's not allowed.

**nzakas:** I think @mdjermanovic and I are in agreement that we should fix this in Espree as a breaking change and then include it in ESLint v8.

**mdjermanovic:** Yes

**nzakas:** So really just want to circle you in @btmills

**btmills:** Just caught up, proposed change to use a new espree@9 in eslint@8 makes sense, and I agree the impact is likely tiny

**nzakas:** Great, so it looks like we've agreed to make this change for Espree 9 and ESLint 8.

**nzakas:** Next: https://github.com/eslint/eslint/issues/14857

**nzakas:** Reviewing rule progress

**mdjermanovic:** Remaining 3 rules have PRs, they just need reviews and I think the task is done
 * 🎉 @btmills

**nzakas:** Looks like we have four altogether, including `indent`

**mdjermanovic:** If we find more issues, we can fix that later

**mdjermanovic:** Ah, yes `indent` needs a review

**btmills:** Last time, you mentioned you wanted to do another pass looking for any rules that might not have made this list. Is that still the case?

**mdjermanovic:** It was fixed in the original PR, just needs someone familiar with the rule to verify 🙂

**nzakas:** "Someone familiar with the rule" 😆 No one wants to claim they know how it works.
 * 🤐 @btmills

**mdjermanovic:** Yes, I'm planning that

**nzakas:** It is the worst rule we have, IMHO

**btmills:** by far

**nzakas:** I'd be fine with assuming it was updated correctly and just dealing with bugs as they pop up

**mdjermanovic:** totally agree

**btmills:** that's not a terrible plan. any review by me would just be looking at the tests to see if they're reasonable

**nzakas:** Okay, let's presume `indent` is working correctly and we'll see what happens.
 * 👍 @btmills, @mdjermanovic

**nzakas:** And let's get some reviews on those other three PRs so we can get them in for this next release
 * 👍 @btmills

**nzakas:** Oh, totally forgot to put this on the agenda, but I think it's important to make a decision on: https://github.com/eslint/eslint/issues/15016

**nzakas:** Do we want to delay ESLint v8 to ensure static blocks are in?

**nzakas:** Or do we want to add that afterwards?

**mdjermanovic:** Afterwards sounds good to me

**btmills:** unless there's something that would cause a breaking change, I'd also vote for afterwards

**mdjermanovic:** We can start working on that, but it doesn't have to be a blocker for v8

**nzakas:** Agreed. We won't block v8 on static blocks.

**nzakas:** Okay, moving into the non-v8 issues now

**nzakas:** https://github.com/eslint/eslint/issues/15010

**nzakas:** > **TSC Summary:** We currently output a linter warning when a file is passed on the command line that is ignored due to an ignore file. Because it's reported as a linter warning, it counts towards the limit set by `--max-warnings`, which can in turn cause the process to exit with code 1.
> 
> **TSC Question:** Should we change this warning in some way? We could just output it to `stderr` so it doesn't count as a linter warning, but then that information will not be available to formatters.

**nzakas:** I'm thinking outputting the warning to stderr only makes sense for this because it's related to what the CLI is doing and not related to file contents.

**mdjermanovic:** If we demote it to not-even-a-warning, there will be a big difference between how we treat ignored files and ignored directories. The latter cause exit code 2

**mdjermanovic:** exit code 1, sorry

**nzakas:** Ah okay, was just digging through the code to find that

**btmills:** Could we expand `--no-error-on-unmatched-pattern` to include explicit filenames and not just glob patterns?

**nzakas:** There's already a difference, though, because ignored files do not automatically have exit code 1 now.

**mdjermanovic:** That's true, though they can cause exit code 1 so that could be a breaking change

**nzakas:** True

**nzakas:** I'm unclear on what `--no-error-on-unmatched-pattern` is supposed to be doing

**nzakas:** It just refers to globs?

**mdjermanovic:** It suppresses error if file/directory/pattern doesn't match anything OR if directory/pattern matches only ignored files

**mdjermanovic:** It only doesn't affect ignored file

**mdjermanovic:** (when a lone file is the argument)

**btmills:** I see, so it would suppress if a file doesn't exist, but not if it's explicitly ignored

**mdjermanovic:** Yes. I'd have to doublecheck what I said, but I think it's working like that

**nzakas:** It's probably not a good feature if none of us are sure how it works 🙂

**mdjermanovic:** True, a lot of small details

**nzakas:** Just from some playing around right now, our default behavior is to exit with code 2 if a file isn't found and `-no-error-on-unmatched-pattern` suppresses that

**nzakas:** file/pattern

**nzakas:** So I don't think it makes sense to expand that to cover ignored files, because they do not cause exit code 2

**mdjermanovic:** One thing to consider regarding the design of any solution we come up with is that there is already an option `warnIgnored` on `eslint.lintText()`

**mdjermanovic:** https://eslint.org/docs/developer-guide/nodejs-api#-eslintlinttextcode-options

**nzakas:** Ah interesting. So that's what includes the warning in the lint results.

**btmills:** There's also a documented workaround using `isPathIgnored()` linked from https://github.com/eslint/eslint/issues/15010#issuecomment-915610588, so I would consider the current state an inconvenience (requiring a bit more code) rather than a showstopper (no workaround)

**nzakas:** That workaround is pretty hacky, though

**btmills:** oh very

**nzakas:** And this has been brought up multiple times

**nzakas:** The easiest solution is to add a new CLI flag that just swallows the warning (set `warnIgnored` to `false` when present)

**nzakas:** `--no-warn-ignored` or something

**mdjermanovic:** Probably the most straightforward solution would be to add an option to `eslint.lintFiles()` and CLI

**btmills:** If we don't want to decide on a solution in this meeting, I'd also be fine deciding "yes, we'd like to work better with lint-staged" and leaving the implementation decision to discussion on the issue

**nzakas:** I'm fine with that

**nzakas:** If we don't want to do anything breaking, let's adjourn to the issue and discuss solutions.
 * 👍 @btmills, @mdjermanovic

**btmills:** Anything we change would result in fewer warnings/errors/non-0 exit codes, so I don't think we'll need to break anything. 👍 to adjourning to the issue (and @mdjermanovic will you mention your idea of replicating `warnIgnored` there?)

**mdjermanovic:** Sure!

**nzakas:** Okay, we've decided we'd like to provide a non-breaking solution to this problem and will continue discussing on the issue.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next (and related): https://github.com/eslint/eslint/issues/14881

**nzakas:** > **TSC Summary:** This issue proposes passing the maximum warning limit into formatters. Right now, we output max warning problems directly to `stderr`, which means formatters don't have access to this information.
> 
> **TSC Questions:**
> 
>     1. Do we want to pass information about maximum warnings into formatters?
> 
>     2. Do we want to change how ESLint outputs this warning (stop outputting, change to a linter error, or other)?

**btmills:** For 1, not knowing why a build failed is a bad experience, so I'm inclined to say we should make that information available to non-CLI formatters.

**mdjermanovic:** One possible solution (which might be overkill, though) is to allow object format of formatters, where they could set  something like `supportsTooManyWarnings: true` and then we wouldn't print the message

**nzakas:** Let's take this step by step. For 1, who votes "yes"? (for any reason)
 * ✋ @btmills, @mdjermanovic

**nzakas:** Okay, I don't feel strongly, so I'm happy to go along.

**nzakas:** Given that the answer is "yes", what data do we want to provide?

**nzakas:** It looks like stylelint provides both the maximum warning count and the actual warning count

**nzakas:** https://stylelint.io/developer-guide/formatters/

**btmills:** interesting, so rather than explicitly stating "the build failed because actual exceeded maximum", it lets formatters infer that

**nzakas:** right

**nzakas:** Looking at it from the formatter's perspective, you need those numbers to create an appropriate message

**btmills:** That seems strictly more powerful than a boolean
 * 👍 @mdjermanovic

**nzakas:** agreed

**btmills:** If we adopt that approach, it wouldn't be a regular LintMessage. Formatters would have to add new code to handle it. I'm okay with that, but it requires us to think about a migration step

**nzakas:** By the way, a completely valid way to address this is "yes" to question 1 and "no" to question 2. We can pass the data into formatters and also not change the default output.

**nzakas:** (It's already not a regular lint message.)

**btmills:** It actually wouldn't be terrible for this to be purely additive. If we continue printing to `stderr`, CLI formatters don't have to do anything, and non-CLI formatters have newly-available information

**btmills:** Unless we think CLI formatters will want to handle that message uniquely somehow, let's keep printing
 * 👍 @nzakas, @mdjermanovic

**btmills:** and if we do get a request in the future to stop printing and let them handle it, we can figure out how to let them opt in or do feature detection then
 * 👍 @nzakas, @mdjermanovic

**nzakas:** Okay, we've decided to pass the max warning count information to formatters and not change the default output. Let's reconvene on the issue to decide on the implementation details.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Last: https://github.com/eslint/website/issues/867

**nzakas:** > **TSC Summary:** This issue proposes splitting up the website into three sites:
> 
>     1. The marketing site (homepage, blog, sponsors, about) to be stored in the `website` repo.
> 
>     2. Documentation site (docs.eslint.org), to be stored in the `eslint` repo.
> 
>     3. Playground site (play.eslint.org) to be stored in a new `play.eslint.org` repo.
> 
> 
> **TSC Question:** Do we want to pursue such a change?

**nzakas:** I don't know if folks had a chance to read the whole issue, but I'll pause to give you the time.

**nzakas:** I've obviously been thinking a lot about the future of the website 🙂

**nzakas:** And I'm just looking for a "yes I like this direction" or "no I don't like this direction". There are obviously a lot of implementation details to be figured out outside of this meeting.

**mdjermanovic:** I like this direction

**btmills:** I like it too!

**nzakas:** All right, we've decided to head in this direction! 🎉

**nzakas:** I will plan on putting together an RFC for it
 * 👍 @btmills, @mdjermanovic

**nzakas:** Any other thoughts or questions related to this?

**btmills:** If I have them after a more thorough read through the proposal, I'll leave comments on the issue

**nzakas:** Sounds good

**nzakas:** And I did forward the proposal for the website redesign work to the mailing list. I'm comfortable with moving forward but wanted to make sure you both got to see what was in the proposal.

**mdjermanovic:** I read it, sounds good to me

**btmills:** What's the timeline for that? I was planning to take a look, probably tomorrow night if that's okay

**nzakas:** Hoping to get started next week. Really, it just outlines the planned deliverables and the cost, so nothing complicated.

**nzakas:** And again, the cost is in Australian dollars

**nzakas:** The overall projected cost is $17,000 AUD, which is about $12,500 USD.

**btmills:** cool, I can definitely have any thoughts back to you before next week

**nzakas:** He's also giving us a discount off his normal rate because we're not a for-profit business and he likes ESLint 🙂

**btmills:** that's kind of him!

**nzakas:** It is!

**nzakas:** Okay, let's talk the release

**mdjermanovic:** I can do the release tomorrow

**btmills:** thanks

**mdjermanovic:** Looks like we'll have eslintrc, espree, and eslint

**nzakas:** Yup

**mdjermanovic:** Just to confirm: espree 9.0.0, 8.0.0-beta.2

**nzakas:** Correct

**nzakas:** I also added some notes to the release issue on things we should mention in the release notes: https://github.com/eslint/eslint/issues/15002#issuecomment-914531486

**mdjermanovic:** I'll add the notes to the release post

**nzakas:** Thanks!

**nzakas:** Any other comments or questions about the release?
 * 🦗 @btmills

**nzakas:** If all goes well, we may be ready for a release candidate in two weeks
 * 🤞 @btmills
 * 🎉 @snitin315, @mdjermanovic

**nzakas:** All right, I think that's it for today. Thanks everyone!

**btmills:** 👋 take care!

**mdjermanovic:** 👋
