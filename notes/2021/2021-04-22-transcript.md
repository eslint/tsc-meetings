# 04/22/2021 ESLint TSC Meeting Transcript

**nzakas:** Hi everyone

**mdjermanovic:** Hi!

**btmills:** 👋

**nzakas:** I hope everyone is doing okay. My pinky is recovering from an unfortunate knife accident but I'm going to power through. 🙂

**nzakas:** @btmills can you take notes?

**btmills:** yep!

**nzakas:** Thank you, sir

**nzakas:** Let's jump right in.

**nzakas:** First item: https://github.com/eslint/eslint/issues/14312

**nzakas:** > **TSC Summary:** This issue outlines that we have documented a `meta.docs.suggestions` property in rules that appears to originally have been created to indicate when a rule has suggestions much like the `meta.fixable` property indicates if a rule is fixable. However, we don't rely on `meta.docs.suggestions` in any way, and do not enforce its usage to provide suggestions from rules. Additionally, all other current `meta.docs.*` properties are all optional, so this one seems out of place. There are several options but the most straightforward seems to be to create a new `meta.suggestions` property that, when set to `true`, enables rules to provide suggestions in the same way `meta.fixable` allows rules to provide fixes. This would be a breaking change but would ensure that both humans and tooling can easily tell when a rule provides suggestions.
> 
> **TSC Question:** How do we want to proceed here? And do we want to include this in v8.0.0 (somewhat related to #13349)?

**nzakas:** That last issue is mentioned is https://github.com/eslint/eslint/issues/13349

**mdjermanovic:** I don't have a strong opinion on this. Either way, if we decide to make a breaking change, we could do it in RuleTester for the start (v8.0.0).

**btmills:** I'd lean toward option four as well to treat it like `fixable`

**nzakas:** Okay, and thoughts about including in v8.0.0? (Assuming we should do an RFC for this as well)

**mdjermanovic:** I'd be okay with updating RuleTester in v8.0.0, and then Linter in v9.0.0

**nzakas:** @mdjermanovic why do it as two steps?

**btmills:** Is "treat it just like `fixable`" enough of an RFC? Other than the name, I'm not sure what else we'd need to cover in an RFC

**mdjermanovic:** Because users would have to wait for all the plugins they're using to update before migrating to ESLint v8.0.0

**nzakas:** @btmills maybe? I'm okay with a paragraph definition.

**nzakas:** @mdjermanovic I think we can solve that by doing a "here's what's coming in v8.0.0" blog post that lets people know to update their plugins.

**btmills:** thankfully the work on the plugin side is a one-liner

**mdjermanovic:** Yes, it's a very small work, but they still have to do it and publish the new version, and users can't migrate to v8.0.0 before that

**nzakas:** I think if we give people enough of a heads up, plus at least one beta release of v8.0.0 to play with, that should be enough.

**nzakas:** This just doesn't seem big enough of a change to warrant a multi-major-release process.

**mdjermanovic:** Okay, I can agree with that

**nzakas:** Cool, so it sounds like we've agreed that we want to go with a `meta.suggestions` property that must be set to true for a rule to provide suggestions, and that we will include this in v8.0.0. We will also publish a blog post about what's coming in v8.0.0 to give everyone a heads up.
 * 👍 @btmills, @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/issues/14231

**nzakas:** > **TSC Summary:** This issue suggests moving to conventional commits for all ESLint projects, which would allow us to adopt more conventional tooling for managing projects.
> 
> **TSC Question:** Shall we accept this proposal?

**nzakas:** As noted in the issue, this would be a phased transition so as not to disrupt releases

**mdjermanovic:** 👍 for accepting

**nzakas:** Given that I opened the issue, I'm 👍 as well

**btmills:** 👍 as well

**nzakas:** Okay, we have decided to accept the issue. 🎉
 * 🎉 @mdjermanovic

**nzakas:** Next item: https://github.com/eslint/eslint/pull/12397

**nzakas:** > **TSC Summary**: This PR implements the warning originally described in [eslint/rfcs#34](https://github.com/eslint/rfcs/pull/34). This functionality was removed prior to finalizing the RFC. Initially, this was a first step to warn people of directive-like comments that were not currently supported before ultimately supporting them.
> 
> **TSC Question**: Do we want to merge this PR or just go straight to implementing [eslint/rfcs#34](https://github.com/eslint/rfcs/pull/34)?

**nzakas:** My feeling is that this intermediate step doesn't accomplish much in the face of what the RFC ended up as, so my vote is not to merge. 👎

**mdjermanovic:** I agree.

**btmills:** I agree 👎

**nzakas:** Okay, we have decided to close the PR without merging.

**nzakas:** It looks like the last thing is the release

**mdjermanovic:** I can do the release tomorrow

**btmills:** thanks

**mdjermanovic:** btw. jenkins is down

**nzakas:** sigh

**mdjermanovic:** 502 Bad Gateway

**btmills:** I'll take care of it this evening

**mdjermanovic:** thanks!!

**nzakas:** Thanks guys.
