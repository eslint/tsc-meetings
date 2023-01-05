# 12/29/2022 ESLint TSC Meeting Transcript

**btmills:** 👋

**mdjermanovic:** Hi!

**nzakas:** Howdy!

**nzakas:** @btmills can you take notes?

**btmills:** yessir

**nzakas:** Thanks!

**nzakas:** Okay, first item: https://github.com/eslint/eslint/issues/16537

**nzakas:** > **TSC Summary:** The one capability flat config doesn't currently have that eslintrc does is the ability to implement `extends: "eslint:recommended"`. This is the last compatibility piece for flat config to address before we move on to the next phase. This issue presents three options for how to move forward.
> 
> **TSC Question:** How do we want to support this use case in flat config?

**mdjermanovic:** A separate package sounds good for `eslint:recommended` as it changes only in major versions, but less good for `eslint:all` as it should be in sync with eslint all the time

**btmills:** I think the ideal future state of the world is option 3, the separate package

**btmills:** It means what is today "core" is no longer privileged above what any third party can build
 * 👌 @nzakas

**nzakas:** @mdjermanovic it seems like that's an easy problem to solve if the package lives in the eslint repo as well (for now)

**nzakas:** We could just release it with the same cadence as `eslint`

**mdjermanovic:** Easy for us, but what dependency constraints should users have in their package.json

**nzakas:** Good question. 🤔

**nzakas:** I'm guessing that `eslint:all` is probably not a very popular configuration to use, let alone to use in overrides, so I think it would be okay if that use case requires a bit more end-user involvement

**nzakas:** Just to be super clear: I think the desired end state is that this package lives in a separate repo and is released separately from the generic (non-JS-focused) core in the future.

**btmills:** I concur. That would, among other things, enable us to add a new rule to `eslint:recommended` as soon as it's written

**mdjermanovic:** Yeah, we could release the config package majors independently from eslint majors

**nzakas:** In the short term, this would mean a `@eslint/js` or `@eslint/plugin-js` (maybe we should also discuss naming now?) package that contains just the `recommended` and `all` configs, but in the future will also contain all of the JS-specific logic. This would also mean removing `"eslint:all"` and `"eslint:recommended"` as one-off special cases in flat config.

**mdjermanovic:** If this aligns well with future plans, I'm in favor. My only concern is synchronicity until the rules themselves get included in the same package.

**btmills:** Naming depends on "in the future will also contain all of the JS-specific logic". Do we bundle Espree, code path logic, rules, and all/recommended into one? If so `@eslint/js`. Or do we put the infrastructure of the parser, code path logic, and whatever else is absolutely required by the runtime into `@eslint/js` (or `@eslint/runtime-js`?) and put the rules and configs in `@eslint/plugin-js`?

**btmills:** Splitting those would allow someone to lint JS without using any core rules if they really wanted to do that. Or to version them separately, which might be more common

**nzakas:** So you're thinking end users wanting to lint with ESLint would include `@eslint/plugin-js`, and that in turn would depend on `@eslint/runtime-js`, which has all of the completely generic JS-specific stuff like parser, scope analyzer, code-path analysis, etc.?

**btmills:** Yeah, and theoretically one could provide only custom rules (or perhaps a fork with a subset of previously-core rules) that depend on `@eslint/runtime-js` but skip all of `@eslint/plugin-js`. Or maybe that's too much separation that doesn't have a practical use

**nzakas:** That scenario seems like it could get hairy if core rules depend on one version of `@eslint/runtime-js` and non-core end up depending on a different version.

**btmills:** It would add another branch in the dependency tree when someone wants to upgrade, that's true

**nzakas:** Given that, I think I'd prefer to keep everything in one package. If we really want to keep Espree and the other stuff separate, we can still do that (although I'd love to avoid needing to update four repos whenever new syntax gets added)

**nzakas:** I kind of like the idea of "this plugin provides all the basics you need for working with JavaScript" for end users.

**btmills:** Works for me. Definitely simpler that way

**nzakas:** So `@eslint/js` or `@eslint/plugin-js`? There is prior art for both approaches in other projects. Astro tends to the former and Rollup does the latter.

**btmills:** This is somewhat privileged in that it contains (or will eventually) common infrastructure that all JS users will want to use in addition to plugin-like things in rules and configs, so giving it a privileged name as `@eslint/js` could indicate that. I'm imagining the scenario of someone scanning their `package.json`, seeing a bunch of `*-plugin-*`  whatevers, and wanting `@eslint/js` to stand out as an obviously core component

**nzakas:** Yeah, that has been my thought process, too. @mdjermanovic ?

**mdjermanovic:** Agreed with `@eslint/js`

**nzakas:** Okay, we have agreed that the way forward is to publish the recommended and all configs in a separate package named `@eslint/js`, and that we will eventually move all JS-specific logic there.
 * 👍 @btmills, @mdjermanovic

**nzakas:** That's the only issue we have flagged. Are there any others that are stuck and need resolution?

**nzakas:** I'll take that as no 🙂

**nzakas:** I'd just like to flag again that I'm waiting for feedback on the language plugins RFC. Please take a look.
 * 👍 @btmills, @mdjermanovic

**nzakas:** For the documentation project, we are at the point where we will be switching up our URLs to a new format, probably for the next release. That's a pretty big milestone that will lay the foundation for more substantive changes soon.

**nzakas:** In tangentially related news: I was exploring using Rust/WebAssembly to speed up parsing and it turns out that it likely would not help. I've been exploring with my JSON parser and the final end result was slower than the JS version. So, a path probably not worth exploring as far as performance goes.

**btmills:** That's a bummer. I've been following along with the tweets to learn more

**nzakas:** And with that, we have contributor pool to do: https://github.com/issues?q=org%3Aeslint+label%3A%22contributor+pool%22+merged%3A%3E%3D2022-12-01

**nzakas:** These all look roughly the same size to me? $100 each?
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I'll let them know.

**nzakas:** Let's talk about the release

**btmills:** Jenkins has been upgraded to the latest LTS, and all plugins are on their latest versions

**btmills:** I'll volunteer to do the release in case something went wrong with the upgrades that won't be discovered until running a release
 * 👍 @nzakas

**mdjermanovic:** Thanks @btmills

**nzakas:** We should also do `@eslint/eslintrc` to get the updated README?

**mdjermanovic:** Note: when releasing `eslint`, now you choose `latest` from the dropdown. This is because we've updated script names in package.json and the Jenkins config accordingly

**btmills:** Yes, I will

**btmills:** Thanks for the heads up

**mdjermanovic:** It worked well on the last release

**btmills:** `@eslint/create-config` and `generator-eslint` also have small updates. Should I release them as well? They can also be released independently, so I don't have to

**nzakas:** I'd say go for it. Might as well get them all out
 * 👍 @btmills, @mdjermanovic

**nzakas:** All right, I think that's all for today. Thanks everyone!

**mdjermanovic:** Thanks 👋

**btmills:** take care! 👋
