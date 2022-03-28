# 03/24/2022 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Howdy!

**nzakas:** Looks like we are at full strength and ready to go. @btmills can you take notes?

**btmills:** Yessir

**nzakas:** Thanks!

**nzakas:** So it looks like we don't have any issues flagged. As a reminder, feel free to flag any issue or PR that has been sitting unresolved for a while. No reason to let things linger when we come across them.

**nzakas:** Does anyone want to introduce any topics to discuss?

**nzakas:** I'll take that as a "no", so I'll bring up some

**btmills:** Since we have time, https://github.com/eslint/rfcs/pull/85 looks to be good to merge!
 * 👍 @nzakas, @mdjermanovic

**btmills:** I'll go ahead and do that unless there are any objections

**btmills:** done

**nzakas:** Website redesign update!

**nzakas:** I extracted all the text out of new.eslint.org so that it can be translated and we have our first translation (Spanish) PR submitted. Hoping to get es.eslint.org up and running by end of next week as the first test case.

**nzakas:** Nitin is making good progress on the playground. If he keeps this up, we should be able to launch that next week, too.

**nzakas:** I'm going to turn my attention to the docs site starting next week. I'll make a few small changes in the main eslint repo to lay the groundwork while making sure everything will still go to the current site until the official switchover.

**nzakas:** Questions?

**nzakas:** 🦗

**mdjermanovic:** Not from me 🙂

**btmills:** Should we be expecting the parallelizable rule docs changes after 8.13.0 or 8.14.0 then?

**btmills:** (tomorrow will be 8.12.0)

**nzakas:** Yes, starting in 8.13.0 will be the first release with these changes

**nzakas:** Really it will just be moving things around a bit and starting to add frontmatter to the files
 * 👍 @btmills

**nzakas:** Such that the content files will work both in the current site and the new one

**nzakas:** (Also - how happy am I that the new site has current and next versions listed on the homepage? 😁)
 * 🎉 @mdjermanovic

**nzakas:** Other update: flat config

**btmills:** _very_ cool

**nzakas:** So this is clearly a lot of work and it's been slow going as I slog through all of the edge cases.

**nzakas:** One thing I did to help make things simpler: I disabled array and function configs. We can look at adding them later, but in the immediate-term it just made life easier to know I was dealing with objects all the time.

**nzakas:** I've been plowing through strange ignore pattern cases, and ran into a blocker on a dependency: https://github.com/mrmlnc/fast-glob/issues/356

**nzakas:** I don't think this should block a developer preview, as I don't think this use case is very common, but something to be aware of.

**mdjermanovic:** Those are minimatch globs or .gitignore patterns?

**nzakas:** minimatch

**nzakas:** With flat config, everything ends up as minimatch patterns, which makes it a little easier to reason about

**mdjermanovic:** Ok, I'm not too familiar with negated minimatch globs. That would be a wrong unignore with .gitignore patterns

**nzakas:** I'm pretty sure this is correct. Long story short: eslint.isPathIgnored() is implemented entirely within flat config and returns the expected value in this case. However, I use globby (which depends on fast-glob) to evaluate command-line globbing patterns, and that's where I see the bug.

**nzakas:** I pass the ignore patterns into globby, which gets passed into fast-glob.

**nzakas:** In any event, I'll keep plowing forward to get as much done as I can and just xit the tests that won't pass until we get this figured out.

**mdjermanovic:** If those were .gitignore patterns, I believe it should be `ignore: ["**/lib/**", "!**/lib/rules/", ""!**/lib/rules/**""]`

**mdjermanovic:** But we can take a look at how everything works when the first version of flat config is ready 🙂

**nzakas:** Yeah, there's going to be a bunch of weird edge cases, I'm sure. It'll probably be easier to figure out when we have something to play with.

**nzakas:** Once I get through this, I need to attack caching, and then it should be ready to merge for a v1

**mdjermanovic:** Caching seems tricky. We'll hash the config file itself?

**mdjermanovic:** (the file content of the config file)

**mdjermanovic:** To determine whether the config has changed

**nzakas:** My initial plan is to JSONify with a couple of replacements. It turns out that aside from plugins, everything else will serialize with some minor tweaks.
 * 👍 @mdjermanovic

**btmills:** and the replacements are functionally no different than today where changes inside of plugins don't bust the cache, correct? so no loss there

**nzakas:** Correct

**nzakas:** Okay, lets' talk about the release

**btmills:** I can do it tomorrow

**mdjermanovic:** Thanks @btmills
 * 👍 @nzakas

**btmills:** Anything aside from `eslint` that we know of already?

**mdjermanovic:** I think it's only `eslint` this time
 * 👍 @btmills

**nzakas:** Cool, unless there's anything else, I think we're done!

**btmills:** 🦗

**mdjermanovic:** Thanks! 👋

**btmills:** take care! 👋

**nzakas:** Thanks everyone. Stay safe
