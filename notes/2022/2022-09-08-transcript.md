# 09/08/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**nzakas:** Howdy

**nzakas:** Looks like it'll just be the two of us. Can you take notes?

**btmills:** sure can!

**nzakas:** Thanks!

**nzakas:** First item:

**nzakas:** https://github.com/eslint/eslint/issues/16265

**nzakas:** > **TSC Summary:** Flat config was originally designed to include dot files by default when using glob patterns on the command line. The current behavior is that it doesn’t include dot files.
> 
> **TSC Question:** Should we keep the current behavior? Shell expansion for terminals typically does not include dot files, so we are only able to change for quotes globs passed to ESLint, so would it be too confusing to have a different behavior between the two?

**btmills:** Matching both `.eslintrc` and existing shell expansion patterns seems to be what the user would expect. Skimming the thread to see if there are counterpoints to that...

**btmills:** Looks like the reason to include dot files would be that the RFC had it that way?

**btmills:** If that's the case, I think consistency with history and shells argues in favor of deviating from the RFC

**nzakas:** I agree. I was going back through and trying to figure out why I added that and I couldn't find the reasoning. I think it was meant as a simplification measure but that's all I got.

**btmills:** Then at the risk of moving aside Chesterton's Fence, excluding dotfiles from globs seems to be the way to go
 * 👍 @nzakas

**nzakas:** We have agreed to leave glob patterns *not* matching dot files for flat config.
 * 👍 @btmills

**nzakas:** When you go through an update the issue, note that there's a PR already opened that should be closed.

**btmills:** Will do 👍

**nzakas:** Next item would be better if Milos was here, but might as well get the ball rolling:

**nzakas:** > Agenda item: Can we agree to check in on Discord at least once per day during the week? It seems like my messages mostly go unresponded to for several days recently, which makes it difficult to make progress on some things.

**btmills:** I can do almost every day, certainly. I wish Discord would send mobile notifications for at least a subset of channels, but it says it doesn't support that

**nzakas:** Ah interesting. See, I just have a set time each day when I check all "the socials" because I don't want notifications interrupting my day.

**btmills:** Looks like there's an open feature request https://support.discord.com/hc/en-us/community/posts/360042890232-Push-notifications-for-large-servers-on-channel-by-channel-bases-
 * 👍 @nzakas

**nzakas:** Well, whatever you can do in the meantime would be appreciated. Hopefully that will get implemented at some point.

**btmills:** Now that I know that's why I'm not getting notifications, I can proactively check Discord 👍

**nzakas:** Excellent, thanks.

**nzakas:** Next we need to do contributor pool for August

**nzakas:** Thanks to the handy new "contributor pool" label, I can share this:

**btmills:** hooray for labels!

**nzakas:** https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2022-08-01+merged%3A%3C2022-09-01+

**nzakas:** So $300 for stefankolb, as that is what we usually do for translations
 * 👍 @btmills

**nzakas:** $200 for lachlanhunt? That PR looked a bit involved

**btmills:** That makes sense

**nzakas:** And $100 for the others?

**btmills:** yep!

**nzakas:** Okay, I'll let them all know. That was much easier. 🙂

**btmills:** indeed!

**nzakas:** A couple of updates:

**nzakas:** First, I'm working with Hayden on the logo for eslint-community. I set up the eslint-community org and MichaelDeBoey is set up as an admin to get things started. We'll plan on doing an announcement once we have the logo done and the first project or two in the org.

**btmills:** Great!

**nzakas:** At some point I'll reach out for thoughts on the final logo. We are working through several concepts right now that I like, but at some point we will need to cut down to one.

**btmills:** happy to have an opinion, but I'm sure it will be wonderful

**nzakas:** Second, I've narrowed down the tech writers to two finalists. I'm working on setting up calls with each of them to get a better sense of who they are and what their ideas are for the project.

**nzakas:** So hopefully we will have the person selected within the next two weeks and be able to get started.

**nzakas:** I'm also hoping that one or both of them might be interested in being the blog editor-in-chief, but we'll see how that goes.

**btmills:** I'm planning to take a look at those two blog posts this weekend
 * 👍 @nzakas

**btmills:** ooh that'd be interesting!

**nzakas:** And last but not least: the release! Are you available to do it?

**btmills:** Yes I am! It'll be tomorrow

**btmills:** and looks like it's just `eslint` this time?

**nzakas:** We'll need an `eslintrc` one too.

**nzakas:** https://github.com/eslint/eslintrc/pull/89

**nzakas:** I don't think this is the right fix so I'll send a separate PR

**btmills:** Gotcha. I'll be on the lookout for that

**nzakas:** And this should be ready for flat config: https://github.com/eslint/eslint/pull/16272

**nzakas:** I believe I caught everything mdjermanovic mentioned

**btmills:** I won't wait to merge on Saturday if it turns out he's unable to approve

**btmills:** when I said "tomorrow", I was thinking today is Friday, which unfortunately is not the case. I mean Saturday

**nzakas:** No problem. I interpreted "tomorrow" as "this weekend" anyway 🙂

**btmills:** perfect, consistently doing Saturday releases pays off

**nzakas:** You have trained me well

**nzakas:** Okay, I believe that's all we have to discuss unless you'd like to bring anything else up?

**btmills:** nothing here

**btmills:** take care!

**nzakas:** You too!
