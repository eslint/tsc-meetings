# 11/17/2022 ESLint TSC Meeting Transcript

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** Howdy

**nzakas:** Apologies for my lateness. @btmills are you good for notes?

**btmills:** not this time unfortunately

**nzakas:** This is why I ask each time 🙂

**btmills:** I appreciate it!

**nzakas:** @mdjermanovic would you mind taking notes?

**mdjermanovic:** Sure, I'll take notes

**nzakas:** Thank you!

**nzakas:** First item: https://github.com/eslint/rfcs/pull/97

**nzakas:** This is the big docs reorg

**nzakas:** > **TSC Summary:** The last point to address here is how to move forward with URL structure. Possible options are 1) persona/action such as users/configure, 2) use case/action such as use/configure, 3) using/configuring
> 
> **TSC Question:** Which format do we want to use?

**nzakas:** I'm currently favoring the `/use/configure` style.

**btmills:** Link directly to the thread: https://github.com/eslint/rfcs/pull/97#discussion_r1012146822

**mdjermanovic:** 2) might look weird in some cases, e.g., `extend/nodejs-api`, `use/core-concepts`, `contribute/architecture/` etc.

**nzakas:** Can you explain why those look weird you? It doesn't jump out at me as weird.

**mdjermanovic:** for example, "extend nodejs-api" sounds like extending the api

**nzakas:** Ah I see

**nzakas:** I think we may end up with those types of situations no matter which format we choose

**btmills:** I think that in most cases though, `/:verb/:subject` will feel pretty natural. For example `/contribute/rule-change` is great, as are many of the `/contribute` or `/maintain` paths

**btmills:** For the weird ones, we might be able to reword the subject some. Maybe `/extend/via-api` or `/extend/using-api`?

**nzakas:** Yeah, that's what I was thinking too

**nzakas:** We could also do things like `/contribute/learn/architecture`

**nzakas:** Although the API would be in intregrator section now, so `integrate/using-api`

**btmills:** `.../learn/...` at the second level could work well

**mdjermanovic:** Yes, sounds good to me

**nzakas:** Okay, it looks like we have agreed to `/:verb/:subject` for the URL format. For any that look too weird, we can consider changing the URL by either changing the `subject`, inserting `/learn/` in the middle, or otherwise adjusting so it reads better.
 * 👍 @btmills, @mdjermanovic

**nzakas:** I thought I had tagged two other items but I'm not seeing them. One sec while I look.

**nzakas:** Okay, just this one: https://github.com/eslint/eslint/discussions/16557

**nzakas:** It's been a couple of weeks without any comment, so wanted to bring it up holistically to see what folks are thinking about this as a general direction.

**mdjermanovic:** I support the idea generally. There are a lot of complex details to analyze though 🙂

**nzakas:** Oh yes, there may be a dozen RFCs in here total 🙂

**mdjermanovic:** And rewriting sounds good, even if it would be JS-only again.

**btmills:** You did a good job summarizing a lot of the things that we've been wanting to do, and the additional info re TS/Import plugins was helpful as well. I think we've established that doing all of that within the current codebase would be challenging to implement and require a lot of breaking changes

**btmills:** My biggest consideration would be bandwidth. That could go two ways: is it possible to maintain the existing codebase while building a new one? In the other direction, a friend texted me seeing that curious about helping, so maybe we'd get a bunch of new energy

**nzakas:** Yes, bandwidth is a concern for me too. That's part of why I wanted to split it out into a separate codebase. We don't need to have any set deadline, so if it needs to sit and do nothing for a while, that's okay because it's not hurting anything.
 * 👍 @MichaelDeBoey, @btmills, @mdjermanovic

**nzakas:** I do think there's an opportunity to have overlap, for instance, if we split out the JS functionality into its own plugin and consume that as part of the current ESLint project, then we could still manage changes to JS functionality and rules in one place that could be used in both projects.

**btmills:** I don't know if it'd be possible, but if it is, reusing the existing ecosystem of rules and plugins (less TS and import, and it seems like they'd be excited to use an API designed for them) would be huge

**nzakas:** That is the goal -- if we abandon the existing ecosystem, we can expect them to abandon us in return. The strength of ESLint is that ecosystem that's been built up around it, so I think some level of compatibility needs to be there. I think people will accept "make these two or three changes to have your plugin continue working" but won't accept that their plugin can't be used anymore.
 * 👍 @MichaelDeBoey, @mdjermanovic

**nzakas:** So, rewriting everything in Rust is not an option

**btmills:** Agreed re compatibility

**nzakas:** However, I had a really interesting conversation with Bartek from Deno. We could actually create a standalone executable in Rust that embeds Deno and then load all of our JS into Deno and run it through Rust.

**btmills:** That's a very intriguing idea. Rust core, wasm or JS at the edge

**nzakas:** And by creating a V8 snapshot of ESLint, we would get close to immediate startup

**nzakas:** At that point, we are free to start experimenting with moving different things into Rust from JS without requiring it.

**btmills:** Have you thought about a good place to start?

**nzakas:** Yes. I think the easiest place to start is by coming up a language-agnostic plugin format such that we could move all the JS functionality into its own plugin (whether or not that lives in a separate repo is up for discussion later). I've been thinking about this piece for at least a couple of years, and I think it could be done in such a way that it can be used with the current ESLint while not boxing us in going forward.

**nzakas:** And because I have my JSON parser that outputs a familiar AST format, I could probably also demo a JSON-specific plugin using that format as an example.

**nzakas:** Basically, I'd like to start as deep as possible and then move up each layer of the codebase rebuilding as we go.

**btmills:** I'd like to ask what the boundary between core and plugins would be, but I think that's verging on RFC territory, so instead I'll say that I'm intrigued enough to spend time reading an RFC

**btmills:** (is that the level of decision you're looking for here?)

**nzakas:** Yes

**nzakas:** and to answer your question briefly: core becomes language-agnostic. It doesn't know anything about the language it's parsing or analyzing. Anything language-specific (think interpretation of `languageOptions`) is in a plugin.

**nzakas:** In fact, `languageOptions` was designed with the goal of eventually being able to have a `language` setting where you could specify something other than JS
 * 🤯 @btmills

**btmills:** is core responsible for traversal? that sounds like something that languages might need to customize (TS/import already do)

**nzakas:** Plugins are responsible for traversal

**nzakas:** The way I envision it, plugins define a `languages` key where they can publish any number of language definitions. The language definition includes something like `parse()`, `traverse()`, `validate()`, etc.

**nzakas:** So the core just calls those on the appropriate languages and assumes they do the right thing.

**nzakas:** Actual API proposal will come in an RFC 🙂

**nzakas:** I also plan on reaching out to the markdownlint and stylelint folks to get an understanding of what they might need if they were to rewrite as ESLint plugins.

**btmills:** That sounds great

**btmills:** Anything else you need from us right now beyond 👍 to RFC?

**nzakas:** Nope, that is all I'm looking for.

**nzakas:** And of course, feel free to continue leaving comments on the discussion as things evolve
 * 👍 @MichaelDeBoey, @btmills, @mdjermanovic

**nzakas:** Okay, so it looks like we are happy with this general direction and the next action item is on me to produce the first RFC related to this.
 * 👍 @MichaelDeBoey, @btmills, @mdjermanovic

**nzakas:** Those are all the agenda items I have. Is there anything else anyone wants to bring up before we talk about the release?
 * 🦗 @btmills

**mdjermanovic:** Nothing in particular from me

**nzakas:** Okay, then let's talk about the release

**mdjermanovic:** I can tomorrow
 * 🙏 @nzakas, @btmills

**mdjermanovic:** I believe it's only `eslint` package this time.

**nzakas:** I think that's correct

**nzakas:** @btmills at what point will you be disappearing? 🙂

**btmills:** umm about 42 minutes from now haha

**nzakas:** For a few weeks?

**btmills:** yeah, back mid-December

**nzakas:** Okay, so we won't have you the next couple of meetings, correct?

**btmills:** Correct

**nzakas:** Cool. Well have fun!

**btmills:** Thanks, I will!

**nzakas:** All right, thanks everyone. Stay safe!

**mdjermanovic:** Thanks!

**btmills:** 👋 take care!
