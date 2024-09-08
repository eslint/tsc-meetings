# 09/05/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**nzakas:** I saw @fasttime and then he disappeared...

**fasttime:** Hi!

**nzakas:** We'll give him a couple minutes

**nzakas:** There he is!

**fasttime:** Sorry, my internet connection don't know what was going on 😄

**nzakas:** No worries

**nzakas:** Just looking over the notes from last time. It looks like we didn't have any action items to follow up on, so we'll move right into statuses.

**nzakas:** I've been working on the new config resolution behavior, extracting the processor logic from the core, Code Explorer, plugin kit, and add types everywhere.

**mdjermanovic:** I was mostly reviewing PRs and RFCs. I also updated eslint core to support disable directives in languages that don't provide `comment.value` and started work on updates to our relase infrastructure to support releasing updates to previous major versions.

**fasttime:** I've been also mostly busy triaging and reviewing PRs and RFCs. I've also prepared an RFC to add the plugins website: https://github.com/eslint/rfcs/pull/123

**nzakas:** Is that ready for review? It's currently marked as a draft.

**fasttime:** I would like to submit it for review now, not because it's "ready" but because actually I need feedback to move on

**nzakas:** Okay, go ahead and mark it ready for review, and leave comments on the PR to indicate where you'd like feedback.

**fasttime:** Done. Most interesting are the "Open Questions"

**nzakas:** Yeah, there's a lot of those. 😄

**fasttime:** Yeah, I'm still a bit unsure about the whole settings

**nzakas:** I think it would be helpful if you included your best guess at an answer for each so we can have something to discuss. Open-ended open questions are difficult to work on.

**fasttime:** Makes sense. I will add some hints at how some things are being done in other projects (e.g. in eslint.org) and will indicate some alternatives
 * 👍 @nzakas

**nzakas:** Speaking of RFCs, upcoming RFC duty schedule:
September 9: @nzakas 
September 16: @mdjermanovic 
September: 23: @fasttime
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I did flag a few issues to discuss today.

**nzakas:** First: https://github.com/eslint/eslint-release/pull/62

**nzakas:** This is really so we can discuss doing a last v8.x release.

**mdjermanovic:** I'll open a separate issue to discuss changes we'd like to include in the release
 * 👍 @nzakas

**nzakas:** Our formal EOL is 2024-10-05, so we do have a bit of a time constraint if we want to stick to that announced date. I'm going to do a blog post next week announcing it and the formal version support policy that we posted. HeroDevs will coordinate a blog post on their end as well.

**nzakas:** @mdjermanovic how close do you think this PR is?

**mdjermanovic:** I think both that PR and a PR to update `Makefile.js` in eslint/eslint will be ready by Monday
 * 👍 @nzakas, @fasttime
 * 🎉 @nzakas

**mdjermanovic:** Then I'll submit a PR to port the latter one to `v8.x-dev`

**nzakas:** We should probably put documentation on how to do a backport release somewhere, as well.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** And then continue with preparing the branch for the release (porting commits)

**mdjermanovic:** The idea is to just select a new `maintenance` option as RELEASE_TYPE on Jenkins

**mdjermanovic:** I'll prepare some docs as well

**nzakas:** (Speaking of...looks like Jenkins is down. I'll kick the server.)

**mdjermanovic:** https://jenkins2.eslint.org/ ?

**nzakas:** oops, it filled in a port for some reason, nevermind. 😄

**nzakas:** Okay, sounds good.

**mdjermanovic:** Do we want to release it on our usual release schedule or earlier?

**nzakas:** I'd like to do it earlier because people are still complaining about the `name` issue in configs. That seems to be a pain point worth resolving quickly.

**mdjermanovic:** I'd like to do it earlier as well in case something goes wrong with the updates

**mdjermanovic:** E.g. the same week but on Monday or Tuesday

**mdjermanovic:** That would be around the 16th Sep

**nzakas:** Is there a reason we shouldn't do it next week?

**mdjermanovic:** If we finish everything next week, we could do it next week as well

**nzakas:** Okay, let's say that we'll do it once we're confident that the infrastructure is ready?

**mdjermanovic:** Yes, and when we update the branch with commits we'd like to include
 * 👍 @nzakas

**nzakas:** @fasttime thoughts?

**fasttime:** Sounds good. I was thinking if there's anything else in particular we would like to backport. I could help maybe.
 * 👍 @nzakas

**mdjermanovic:** I'll open a v8.57.1 issue for discussion

**fasttime:** Thanks!

**nzakas:** Okay, we have our action item for this. Any other thoughts before we move on?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Nothing from me either

**nzakas:** Okay, next item: https://github.com/eslint/eslint/pull/18854

**nzakas:** This is the PR where I copied the type definitions from `@types/eslint` into the repo.

**nzakas:** Mostly I just want to see if we can get this into the release tomorrow because the sooner we can get people off `@types/eslint`, the better.

**nzakas:** So wanted to bring it up here in case there were any questions I could answer.

**fasttime:** Did you just copy-paste the DT types or are there also any changes?

**nzakas:** Pure copy-paste. Wanted to start from the same baseline.
 * 👍 @fasttime

**nzakas:** Well, I did add the appropriate license information to each file, but otherwise copy-paste.

**fasttime:** And also I think it would be safer to test this PR on a few projects to see if they're still compiling as usual.

**fasttime:** Unfortunately, I won't have much time tomorrow to check this. Maybe Josh will do or someone else.

**nzakas:** I can see what I can do. I did copy over the test from `@types/eslint` in this PR and added another CI test for it. I'll see if I can maybe add an integration test with another package or two.

**fasttime:** That would be good. To be honest, I don't have much experience with a change like this, so in the best case it could go flawlessly

**nzakas:** Well this is what I figure: the best case it just works, the worst case people still use `@types/eslint` until we fix it.

**fasttime:** Ahh... that's the problem I think. When you add built-in types to a project, TypeScript will stop looking for the types in `@types/*`, this could be changed in the config I think, but I'm not sure how.

**nzakas:** Okay, my action item is to add some integration tests for the types.

**nzakas:** Any other thoughts on this?

**fasttime:** Okay 🤞 Let's hope for the best!

**nzakas:** Next item: https://github.com/eslint/eslint/pull/18818

**nzakas:** I've been working on extracting the processor logic into its own class and came across a problematic scenario: processors are currently passed the raw text from a file, including the BOM, into their `preprocess()` function...but it's easy to forget to check for the presence of the BOM and this seems like a footgun for developers. (Our own Markdown processor doesn't even check for it.)

**nzakas:** So it seems like a good idea to not pass the raw text, but rather, the text with the BOM removed.

**nzakas:** But there is also a use case where processors return the entire file as one block, in which case we want to preserve the BOM.

**mdjermanovic:** The safest option is to keep passing BOM to processors. Otherwise, assuming that BOM is irrelevant for processors, problematic use case is that one (when processor is made with intent to lint the whole file + code blocks)

**nzakas:** My suggestion is that we strip the BOM from the text passed to `preprocess()` and add a new, third argument, `bom` which indicates if a BOM was present in the original source.

**nzakas:** I understand that reasoning, I just think that represents an extreme edge case that I'm not sure it makes sense to optimize for.

**mdjermanovic:** There are processors that are doing that, and if we lint a file that has BOM as if it doesn't it could be a breaking change

**nzakas:** Can you share an example?

**mdjermanovic:** `eslint-plugin-mdx`: https://github.com/eslint/eslint/issues/14745#issuecomment-869349450

**nzakas:** Oh, I meant a case where a processor cares that there's a BOM.

**mdjermanovic:** I doubt there are any

**nzakas:** So what we're talking about is optimizing for a case where both a) a processor wants to lint the entire file in addition to blocks and b) wants `unicode-bom` to work on that block?

**mdjermanovic:** Yes, but that's not optimizing, that's keeping the current behavior, i.e., not breaking builds

**nzakas:** Not breaking builds but leaving processors with some undiscovered bugs, yes.

**mdjermanovic:** What we could maybe do is to check if the block's text is equal to the original text without BOM

**mdjermanovic:** And in that case lint the original text (with BOM)

**nzakas:** Again, I think that's an optimization for an edge case, and comparing longs blocks of strings has a perf hit.

**nzakas:** I'll just revert to passing the text with the BOM for now and I'll open an issue to discuss changing it in v10.
 * 👍 @mdjermanovic

**fasttime:** I recall having a processor that is checking for a BOM: https://github.com/origin-1/eslint-plugin-eslint-env/blob/main/test/processor.js#L557-L571. But maybe most other processors don't...

**nzakas:** Ultimately I think there's a better solution than processors for this use case of wanting to lint the entire file plus the blocks: https://github.com/eslint/rfcs/pull/105

**nzakas:** But haven't had time to circle back to that.

**nzakas:** Anyway, we're running short on time, so let's move on.

**nzakas:** Next item:

**nzakas:** > Do we want to create official language plugins for YAML and CSS? These, along with Markdown and JSON, were the top-four most requested languages to support when I asked on Twitter/Mastodon.

**nzakas:** Similar to JSON and Markdown, it seems like the ecosystem is spotted with existing plugins that don't quite work the way people expect for YAML and CSS. My thinking is that the ecosystem would benefit from a stable core for these languages to build upon.

**mdjermanovic:** Sounds good to me

**fasttime:** I'm in favor 👍

**nzakas:** Okay, we've agreed to make official language plugins for YAML and CSS. For CSS I think we can use Postcss as the parser. Need to investigate a bit more for YAML.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, contributor pool time!

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A2024-08-01..2024-08-31

**nzakas:** For aryaemami59, I'd like to recommend $1,500. He put a ton of work over many months into the RFC and the implementation.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** For zhangenming, $200? It was a small change but ended up taking several months.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** And $100 for reduckted?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Okay, I'll let them know.

**nzakas:** Let's talk about the release

**fasttime:** Guess it will be my turn again
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks! I'll take the next one and v8.x for sure
 * 👍 @nzakas, @fasttime

**fasttime:** Fine, thanks! I wouldn't be confident doing the maintenance release

**fasttime:** Only `@eslint/js` and `eslint/eslint` I think
 * 👍 @nzakas, @mdjermanovic

**fasttime:** Okay, I will start the release at the same time of today's meeting
 * 👍 @mdjermanovic

**nzakas:** Sounds good.

**nzakas:** Anything else to discuss before we end?

**mdjermanovic:** Nothing in particular from my side

**fasttime:** Nothing from my end

**nzakas:** All right, thanks everyone! (And thanks @sam3k_ for the notes)

**fasttime:** Thanks, bye!

**mdjermanovic:** Thanks! 👋
