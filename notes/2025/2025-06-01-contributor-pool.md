# Contributor Pool Report for May 2025

## xbinaryx (1)
1. [feat: automatically assign issues to users willing to submit PRs](https://github.com/eslint/eslint-github-bot/pull/219)  
   This pull request introduced a plugin that automatically assigns issues to users who express willingness to submit pull requests via a checkbox in the issue template. It aims to streamline issue management and improve contributor engagement. The changes also addressed and closed issue #218.  
   * **Time to merge:** 4 days, 12 hours  
   * **Effort Estimate:** 2  

---

## thecalamiity (6)
1. [docs: add keyframe !important documentation](https://github.com/eslint/css/pull/150)  
   This pull request updates the documentation for the `no-important` rule by explicitly mentioning that `!important` declarations within `@keyframes` rules are ignored by browsers. It helps developers understand why using `!important` in keyframes is discouraged. Test cases for this behavior were also added.  
   * **Time to merge:** 0 days, 0 hours  
   * **Effort Estimate:** 1  

2. [feat: allow custom descriptors in no-invalid-at-rules](https://github.com/eslint/css/pull/128)  
   This pull request modifies the `no-invalid-at-rules` rule to allow custom descriptors in at-rules that start with `--`. This change improves the flexibility of the rule and allows developers to use custom descriptors without triggering warnings.  
   * **Time to merge:** 6 days, 6 hours  
   * **Effort Estimate:** 2  

3. [feat: add no-important rule](https://github.com/eslint/css/pull/124)  
   A new rule, `no-important`, was introduced to disallow the use of the `!important` flag in declarations. This pull request includes the implementation, documentation, and tests for the rule.  
   * **Time to merge:** 3 days, 2 hours  
   * **Effort Estimate:** 3  

4. [refactor: switch JSONSourceCode to extend TextSourceCodeBase](https://github.com/eslint/json/pull/96)  
   This pull request updates the `JSONSourceCode` class to extend `TextSourceCodeBase`. It also upgrades dependencies and ensures compatibility with the latest versions of the ESLint core and plugin kit.  
   * **Time to merge:** 3 days, 2 hours  
   * **Effort Estimate:** 2  

5. [refactor: switch CSSSourceCode to extend TextSourceCodeBase](https://github.com/eslint/css/pull/122)  
   Similar to the previous refactor, this pull request updates the `CSSSourceCode` class to extend `TextSourceCodeBase`, while upgrading dependencies for improved compatibility.  
   * **Time to merge:** 3 days, 6 hours  
   * **Effort Estimate:** 2  

6. [refactor: switch MarkdownSourceCode to extend TextSourceCodeBase](https://github.com/eslint/markdown/pull/356)  
   This pull request updates the `MarkdownSourceCode` class to extend `TextSourceCodeBase`, ensuring consistency across source code classes. Dependency upgrades were also included.  
   * **Time to merge:** 2 days, 17 hours  
   * **Effort Estimate:** 3  

---

## sethamus (7)
1. [feat: ignore overloaded function declarations in func-style rule](https://github.com/eslint/eslint/pull/19755)  
   This pull request modifies the `func-style` rule to ignore overloaded function declarations, providing better support for TypeScript and similar languages.  
   * **Time to merge:** 4 days, 13 hours  
   * **Effort Estimate:** 2  

2. [feat: add allowTypeAnnotation to func-style](https://github.com/eslint/eslint/pull/19754)  
   A new option, `allowTypeAnnotation`, was added to the `func-style` rule to allow expression-style functions with type annotations when the rule is set to "declaration" style.  
   * **Time to merge:** 5 days, 20 hours  
   * **Effort Estimate:** 3  

3. [feat: add `allowRegexCharacters` to `no-useless-escape`](https://github.com/eslint/eslint/pull/19705)  
   This pull request introduces the `allowRegexCharacters` option to the `no-useless-escape` rule, enabling users to specify which characters can be unnecessarily escaped in regular expressions.  
   * **Time to merge:** 6 days, 0 hours  
   * **Effort Estimate:** 2  

4. [fix: remove interopDefault to use jiti's default](https://github.com/eslint/eslint/pull/19697)  
   This bug fix removes the `interopDefault` option for jiti initialization, resolving compatibility issues with newer jiti versions.  
   * **Time to merge:** 21 days, 22 hours  
   * **Effort Estimate:** 2  

5. [feat: add reportGlobalThis to no-shadow-restricted-names](https://github.com/eslint/eslint/pull/19670)  
   A `reportGlobalThis` option was introduced to the `no-shadow-restricted-names` rule, allowing users to enforce stricter rules around shadowing the `globalThis` keyword.  
   * **Time to merge:** 3 days, 9 hours  
   * **Effort Estimate:** 2  

6. [fix: check cache file existence before deletion](https://github.com/eslint/eslint/pull/19648)  
   This pull request modifies the cache file deletion logic to ensure the file exists before attempting deletion, preventing unnecessary errors.  
   * **Time to merge:** 9 days, 15 hours  
   * **Effort Estimate:** 1  

7. [feat: convert no-array-constructor suggestions to autofixes](https://github.com/eslint/eslint/pull/19621)  
   This change converts `no-array-constructor` rule suggestions into autofixes, improving developer experience by automating common fixes.  
   * **Time to merge:** 22 days, 0 hours  
   * **Effort Estimate:** 3  

---

## azat-io (1)
1. [fix: avoid false positive in `no-unassigned-vars` for declare module](https://github.com/eslint/eslint/pull/19746)  
   This bug fix resolves a false positive in the `no-unassigned-vars` rule for `declare module` blocks in TypeScript. It ensures that unassigned variables in module declarations are not incorrectly flagged as errors.  
   * **Time to merge:** 5 days, 16 hours  
   * **Effort Estimate:** 2  

---

## Pixel998 (4)
1. [feat: add no-multiple-h1 rule](https://github.com/eslint/markdown/pull/377)  
   This pull request introduces a new rule, `no-multiple-h1`, to enforce the presence of at most one `<h1>` heading in Markdown documents, improving document structure consistency.  
   * **Time to merge:** 11 days, 1 hour  
   * **Effort Estimate:** 3  

2. [feat: add require-alt-text rule](https://github.com/eslint/markdown/pull/368)  
   A new rule, `require-alt-text`, was added to prevent images without alternative text in Markdown, promoting accessibility best practices.  
   * **Time to merge:** 7 days, 20 hours  
   * **Effort Estimate:** 2  

3. [feat: add no-empty-definitions rule](https://github.com/eslint/markdown/pull/364)  
   This rule warns against empty URL definitions in Markdown, helping authors avoid broken links or undefined references.  
   * **Time to merge:** 6 days, 22 hours  
   * **Effort Estimate:** 2  

4. [feat: add last updated date to blog posts](https://github.com/eslint/eslint.org/pull/692)  
   This pull request introduces a "last updated" date to blog posts, providing readers with additional context about the content's relevance.  
   * **Time to merge:** 110 days, 19 hours  
   * **Effort Estimate:** 4  

---

## SwetaTanwar (2)
1. [feat: add no-missing-atx-heading-space rule](https://github.com/eslint/markdown/pull/371)  
   This pull request introduces the `no-missing-atx-heading-space` rule, which ensures there is a space between the hash symbol and the text in ATX-style Markdown headings.  
   * **Time to merge:** 11 days, 17 hours  
   * **Effort Estimate:** 3  

2. [feat: add report an issue button](https://github.com/eslint/eslint.org/pull/724)  
   A "Report an Issue" button was added to the ESLint Playground, pre-filling issue templates with relevant information for easier bug reporting.  
   * **Time to merge:** 9 days, 21 hours  
   * **Effort Estimate:** 4  

---

## jokeyrhyme (1)
1. [fix: sort keys in eslint-suppressions.json to avoid git churn](https://github.com/eslint/eslint/pull/19711)  
   This pull request ensures that keys in `eslint-suppressions.json` are sorted to reduce unnecessary `git` churn and conflicts.  
   * **Time to merge:** 0 days, 10 hours  
   * **Effort Estimate:** 1  

---

## jtbandes (1)
1. [feat: add no-unassigned-vars rule](https://github.com/eslint/eslint/pull/19618)  
   A new rule, `no-unassigned-vars`, was introduced to flag `let` or `var` declarations that are never assigned any value but are read in the code, catching potential programmer errors.  
   * **Time to merge:** 25 days, 14 hours  
   * **Effort Estimate:** 4  

---

GitHub search URL: https://github.com/issues?q=org%3Aeslint%20type%3Apr%20label%3A%22contributor%20pool%22%20merged%3A2025-05-01..2025-05-31

Total PRs: 23

Date of report generation: 06/26/2025