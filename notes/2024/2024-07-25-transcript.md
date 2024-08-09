# 07/25/2024 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**mdjermanovic:** Hi!

**fasttime:** Hi!

**nzakas:** Let me pull up notes from last meeting

**nzakas:** Looks like we didn't have any action items to follow up on.

**nzakas:** So let's do statuses. I'll start. I've been working on `@eslint/json`, `@eslint/markdown`, the new config loading RFC, and started work on the core rewrite RFC (but that will take a while).

**mdjermanovic:** I finished `eslint-plugin-react` support for ESLint v9, and was mostly reviewing PRs.
 * 🎉 @nzakas, @ricecracker2234

**fasttime:** I finished updating `@types/eslint` to v9 and I've been also mostly busy reviewing issues and PRs.
 * 🎉 @nzakas, @mdjermanovic

**nzakas:** It seems like v9 support is starting to settle down a bit now, which is a good thing.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** Looks like we don't have any issues or PRs flagged, but I did want to mention that this PR has been looking for another review for three weeks: https://github.com/eslint/eslintrc/pull/166

**nzakas:** So please take a look when you can.
 * 👍 @mdjermanovic, @fasttime

**nzakas:** The Code Inspector code has been pushed to GitHub and we have a dev version running. There are definitely some rough edges still to sand down. Do either of you want to take lead on getting it ready for release?

**nzakas:** (I just can't take anything else on at this point.)

**mdjermanovic:** I'll be mostly offline from 1 to 20 August

**fasttime:** Then I'll take the code inspector.

**mdjermanovic:** Thanks!

**fasttime:** Probably I'll need some help because I'm not 100% familiar with the website code.

**nzakas:** @fasttime you also have https://github.com/eslint/rewrite/issues/64 on your todo list

**nzakas:** It's completely separate from the website

**nzakas:** And the good news is that no one is familiar with it because it's so new 🙂

**fasttime:** Yeah, I have a lots of todos, hopefully I'll find the time in the next weeks.
 * 👍 @nzakas

**nzakas:** I'd say prioritize the Code Inspector work over the migrate-config work
 * 👍 @fasttime

**fasttime:** I was actually hoping that someone else would take the issue about migrating config files, but it doesn't look like.

**nzakas:** So was I 🙂

**nzakas:** Unfortunately, if it's not one of us three, I just don't think it will get done.
 * 👍 @fasttime

**nzakas:** Alas, that's what it means to be on the TSC: We get stuck with the hard, boring work. 😄
 * 🤦‍♂️ @fasttime

**mdjermanovic:** Did we ask on the team channel if anyone would like to take the task?

**fasttime:** Yeah, we did.

**nzakas:** the migrate-config task?

**mdjermanovic:** Yes, that one

**nzakas:** Yes, I asked on 6/27
 * 👍 @mdjermanovic

**nzakas:** Okay, since we don't have anything else flagged, I'd like to see if we can resolve the last question @mdjermanovic asked on https://github.com/eslint/rfcs/pull/120:

> with that setup, `eslint .` should not traverse into `subir`. But, with the same setup, I'm still not sure if `eslint subdir`, and especially `eslint subdir/foo.js` should result in files being ignored (as in the FAQ of this RFC document).

**nzakas:** I think the distinction you're making is between explicitly passing the directory/file vs. having it match a pattern, correct?

**mdjermanovic:** Mostly, but it could be with patterns too

**mdjermanovic:** eslintrc, I believe, starts looking for config files from the pattern "root"

**mdjermanovic:** (that's part of the pattern that represents a literal path, what `glob-parent` returns)

**fasttime:** So, the root is not the current directory, but depends on the pattern?

**mdjermanovic:** Yes

**nzakas:** Let me code up a quick example

**mdjermanovic:** I think ignoring files/directories is the only open question, everything else is pretty clear, so my suggestion is to leave that part of the design for discussing on the implementation

**fasttime:** Fine to me 👍

**nzakas:** So in eslintrc, the file is ignored in all cases: https://stackblitz.com/edit/stackblitz-starters-eeskfp?file=.eslintrc.json

**nzakas:** I think it makes sense that the same filepath should have the same result regardless of how it's arrived at

**fasttime:** In eslintrc, the root directory is indicated explicitly in the config file, similarly, for `.gitignore` the root is the directory that contains the `.git` subdirectory, but in the current config system we don't have that information.

**mdjermanovic:** There is no root `.eslintrc.json` in the stackblitz?

**nzakas:** I'm not sure why we're discussing root at all.

**nzakas:** If we agree that `eslint .` should ignore `subdir`, then that means we need to honor `./eslint.config.js`. And if we honor it, then it seems like we should honor it 100% of the time.

**fasttime:** I just thought that having a root directory would make the results predictable, regardless of what the cwd is, or what the patterns look like.

**mdjermanovic:** That's different from eslintrc, there might be a good reason why eslintrc was working the other way.

**nzakas:** What do you mean it's different that eslintrc? The Stackblitz I just shared shows that it's working the same?

**mdjermanovic:** I don't see two `.eslintrc` config files in the link you sent

**nzakas:** Hmmm

**nzakas:** Huh weird

**nzakas:** i see it on my screen, but when I reload, it's gone

**fasttime:** I agree. Just not sure where the lookup for the top `eslint.config.js` would have to start, but we can defer it to the implementation, as suggested.

**nzakas:** Okay, I have no idea why StackBlitz is refusing to save that file.

**nzakas:** I don't want to defer to implementation because I can't move forward without an answer to this question.

**fasttime:** I usually hit Ctrl+S to save all files

**nzakas:** Yeah, I've already tried saving multiple ways and the file just won't save

**nzakas:** But the bottom line is that in eslintrc, you always get the same result regardless of how you pass the file path on the command line, and I think flat config should do the same.

**nzakas:** So if `eslint .` ignores `subdir` then so should `eslint subdir` and `eslint subdir/foo.js`.

**nzakas:** If `eslint .` does not ignore `subdir` then the same should go for `eslint subdir` and `eslint subdir/foo.js`.

**nzakas:** I don't think mixing and matching makes any sense

**fasttime:** In that case, maybe we'll need a way to mark the root directory, like in eslintrc.

**nzakas:** No we don't. We just need to decide between those two options.

**mdjermanovic:** Here's a stakblitz example: https://stackblitz.com/edit/stackblitz-starters-wjz9em?file=.eslintrc.json,package.json,subdir%2F.eslintrc.json

**mdjermanovic:** (I fixed it now)

**mdjermanovic:** `eslint .` doesn't go into `subdir` because of the ignorePattern in the cwd config file, but `eslint subdir` and `eslint subdir/file.js` do lint the file

**nzakas:** Right, because the lookup behavior is different. It's not a direct map to the new config loader.

**nzakas:** In eslintrc, the lookup always starts from the file, but that's not true with this RFC.

**nzakas:** So in eslintrc, `root: true` cuts off the lookup. In this RFC, the lookup first starts from the directory.

**mdjermanovic:** Okay, we could make it different (as proposed in the RFC) and see the feedback during the experimental phase, since it will be behind a feature flag

**nzakas:** Just to be clear, by as proposed in the RFC, you mean that the subdirectory is always ignored regardless of how it's passed?

**mdjermanovic:** Yes, except I believe when you run ESLint from that subdirectory

**mdjermanovic:** In that case, it won't go up to look for more config files?

**nzakas:** Hmmm, that is true. 🤔

**fasttime:** I think we should ignore `subdir` when someone runs `eslint .`, but without a root directory, I don't see how we can enforce the same behavior regardless of the current directory where eslint is run from.

**nzakas:** It's really not about a root directory at all. It's about how far up the directory ancestry we are searching for config files.

**nzakas:** Unless we want to keep searching, we won't get the same behavior.

**nzakas:** Of course, option 1 doesn't have this problem. 🙂

**mdjermanovic:** Option 1 is problematic for performance reasons

**mdjermanovic:** `eslint .` would need to check all the subtree

**nzakas:** What do you mean by check all the subtree?

**mdjermanovic:** Traverse all subdirectories to see if there's a config file in there

**fasttime:** With option 2, we could search all the way up the directory tree for the last (uppermost) `eslint.config.js` that is found. Would that be an option?

**nzakas:** Ugh no, That's eslintrc all over again

**nzakas:** Okay, we're coming up on time, so let's table this for now. I'll do some more thinking and update the RFC. I can't make progress until we come to a decision on this behavior so let's just work more there.
 * 👍 @mdjermanovic, @fasttime

**mdjermanovic:** Okay, we can have that as the top priority in the coming days

**fasttime:** I'm on RFC duty next week anyways 🙂

**nzakas:** Was just going to post RFC duty:

Next week: @fasttime 
8/5: @nzakas 
8/12: @mdjermanovic (you'll be back by then?)

**mdjermanovic:** Nope, would anyone like to switch shifts? 🙂

**mdjermanovic:** I could take two in a row when I'm back

**nzakas:** When will you be back?

**mdjermanovic:** on 21st August

**nzakas:** Okay so you'll miss two shifts, so we should just rotate between @fasttime and I until you're back

**mdjermanovic:** Thanks!

**fasttime:** I'll be available, so I could take the shift on 8/12

**nzakas:** Next week: @fasttime 
8/5: @nzakas 
8/12: @fasttime 
8/19: @nzakas
 * 👍 @mdjermanovic, @fasttime

**nzakas:** All right, let's talk the release then we can get out of here. 🙂

**fasttime:** If nobody else wants, I could do the release tomorrow.
 * 🙏 @nzakas, @mdjermanovic

**mdjermanovic:** Thanks!

**nzakas:** Looks like just `eslint` and `@eslint/js`?
 * 👍 @mdjermanovic, @fasttime

**nzakas:** I really miss having the release-please PR to see what will be released. 🙂

**nzakas:** Someday
 * 👍 @fasttime

**nzakas:** And @mdjermanovic you're offline starting August 1?

**mdjermanovic:** Mostly offline, yes

**nzakas:** Well, enjoy!

**mdjermanovic:** Thanks!

**nzakas:** All right, that's all for today. Thanks everyone! (And thanks @sam3k_ for the notes)

**mdjermanovic:** Thanks everyone 👋

**fasttime:** Thanks!
