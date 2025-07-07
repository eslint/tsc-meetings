# Contributor Pool Report for June 2025

## xbinaryx (10)
1. [fix: skip HTML nodes in heading slugs for no-missing-link-fragments](https://github.com/eslint/markdown/pull/445)
   This pull request fixes the handling of heading slugs in the no-missing-link-fragments rule to ensure that HTML nodes are excluded from the generated anchor fragments. The changes involve updating the heading text extraction logic to skip HTML nodes when generating slugs for headings. 
   * **Time to merge:** 1 day, 1 hour
   * **Effort Estimate:** 2

2. [fix: handle URL-encoded link fragments in no-missing-link-fragments rule](https://github.com/eslint/markdown/pull/437)
   The purpose of this pull request is to fix a bug in the no-missing-link-fragments rule where URL-encoded link fragments were not correctly matched to their corresponding headings. The changes include decoding URL-encoded link fragments before comparison to avoid false positives. 
   * **Time to merge:** 3 days, 1 hour
   * **Effort Estimate:** 3

3. [feat: add no-bare-urls rule](https://github.com/eslint/markdown/pull/418)
   This PR implements the `no-bare-urls` rule to enforce proper URL formatting in Markdown documents. It ensures that URLs are either wrapped in angle brackets (autolinks) or used with text (links), instead of being used as bare URLs. 
   * **Time to merge:** 8 days, 5 hours
   * **Effort Estimate:** 4

4. [feat: add no-invalid-named-grid-areas rule](https://github.com/eslint/css/pull/169)
   This pull request adds a new rule `no-invalid-named-grid-areas` to enforce valid named grid area definitions in CSS Grid templates. It helps prevent common mistakes when using grid-template-areas by checking that named grid areas are properly defined according to the CSS Grid specification. 
   * **Time to merge:** 18 days, 6 hours
   * **Effort Estimate:** 4

5. [feat: add no-reversed-media-syntax rule](https://github.com/eslint/markdown/pull/398)
   This PR adds a new rule `no-reversed-media-syntax` to enforce correct link and image syntax in Markdown. The rule checks for and prevents reversed media syntax. 
   * **Time to merge:** 19 days, 11 hours
   * **Effort Estimate:** 3

6. [feat: add checkSiblingsOnly option to no-duplicate-headings rule](https://github.com/eslint/markdown/pull/393)
   The purpose of this pull request is to add a new `siblingsOnly` option to the no-duplicate-headings rule to make it more flexible, allowing it to only check for duplicate headings among siblings. 
   * **Time to merge:** 7 days, 1 hour
   * **Effort Estimate:** 3

7. [fix!: remove rollup and extraneous types](https://github.com/eslint/markdown/pull/383)
   This pull request simplifies the build process and type management by removing unnecessary Rollup bundling for this ESM package. It discusses potential breaking changes related to type declarations. 
   * **Time to merge:** 31 days, 2 hours
   * **Effort Estimate:** 5

8. [feat: add no-empty-definitions rule](https://github.com/eslint/markdown/pull/392)
   This PR adds a new rule `no-empty-definitions` to ensure that both regular definitions and footnote definitions in Markdown files are meaningful and not empty. 
   * **Time to merge:** 8 days, 5 hours
   * **Effort Estimate:** 3

9. [fix: use `process.version` in `--env-info`](https://github.com/eslint/eslint/pull/19865)
   This pull request modifies the `--env-info` command to use `process.version` instead of spawning `node --version` to get the Node.js version. 
   * **Time to merge:** 1 day, 1 hour
   * **Effort Estimate:** 2

10. [feat: prune suppressions for non-existent files](https://github.com/eslint/eslint/pull/19825)
   This PR adds functionality to remove suppressions for files that don't exist on disk when using the `--prune-suppressions` option. 
   * **Time to merge:** 4 days, 10 hours
   * **Effort Estimate:** 3

---

## TKDev7 (3)
1. [feat: add checkFootnoteDefinitions option to no-empty-definitions](https://github.com/eslint/markdown/pull/442)
   This pull request extends the `no-empty-definitions` rule to also report empty footnote definitions in Markdown files. The new option allows for better control over reporting empty definitions. 
   * **Time to merge:** 4 days, 1 hour
   * **Effort Estimate:** 3

2. [fix: use `process.version` in `--env-info`](https://github.com/eslint/eslint/pull/19865)
   This pull request modifies the `--env-info` command to utilize `process.version` instead of spawning `node --version` to get the Node.js version. 
   * **Time to merge:** 1 day, 1 hour
   * **Effort Estimate:** 2

3. [feat: prune suppressions for non-existent files](https://github.com/eslint/eslint/pull/19825)
   This PR adds functionality to remove suppressions for files that don't exist on disk when using the `--prune-suppressions` option. 
   * **Time to merge:** 4 days, 10 hours
   * **Effort Estimate:** 3

---

## jgoz (1)
1. [feat: no-invalid-properties allowUnknownVariables option](https://github.com/eslint/css/pull/178)
   This pull request adds an option to the `no-invalid-properties` rule, named `allowUnknownVariables`. When enabled, it ignores variable references that can't be traced to a custom property definition. 
   * **Time to merge:** 7 days, 9 hours
   * **Effort Estimate:** 4

---

## sethamus (3)
1. [feat: add `allowSeparateTypeImports` option to `no-duplicate-imports`](https://github.com/eslint/eslint/pull/19872)
   This pull request introduces the `allowSeparateTypeImports` option to the `no-duplicate-imports` rule, allowing a type import alongside a value import from the same module in TypeScript files. 
   * **Time to merge:** 2 days, 15 hours
   * **Effort Estimate:** 3

2. [feat: add auto-accessor fields support to class-methods-use-this](https://github.com/eslint/eslint/pull/19789)
   This pull request adds support for TypeScript auto-accessor fields in the `class-methods-use-this` rule. The rule reports errors for auto-accessor fields not utilizing `this` in their initializer function. 
   * **Time to merge:** 12 days, 10 hours
   * **Effort Estimate:** 4

3. [feat: ignore type annotations in no-restricted-globals](https://github.com/eslint/eslint/pull/19781)
   This PR modifies the `no-restricted-globals` rule to ignore restricted globals when they appear in TypeScript type annotations. 
   * **Time to merge:** 7 days, 12 hours
   * **Effort Estimate:** 3

---

## fisker (1)
1. [feat: add ES2025 globals](https://github.com/eslint/eslint/pull/19835)
   This pull request adds ES2025 globals to ESLint. 
   * **Time to merge:** 1 day, 17 hours
   * **Effort Estimate:** 2

---

## Pixel998 (2)
1. [feat: add JSON frontmatter support](https://github.com/eslint/code-explorer/pull/111)
   This pull request adds JSON frontmatter support to complement the existing YAML and TOML frontmatter in the code explorer. 
   * **Time to merge:** 14 days, 21 hours
   * **Effort Estimate:** 4

2. [feat: add JSON frontmatter support](https://github.com/eslint/markdown/pull/411)
   This pull request adds JSON frontmatter parser configuration using VitePress-style delimiters and includes tests and types. 
   * **Time to merge:** 1 day, 1 hour
   * **Effort Estimate:** 3

---

## SwetaTanwar (2)
1. [feat: added new rule table-column-count](https://github.com/eslint/markdown/pull/392)
   This pull request adds a new rule `table-column-count` to prevent data rows in Markdown tables from having more cells than the header row. 
   * **Time to merge:** 8 days, 5 hours
   * **Effort Estimate:** 3

2. [feat: add no-missing-link-fragments rule](https://github.com/eslint/markdown/pull/380)
   This PR adds a new rule `no-missing-link-fragments` to ensure there are no missing link fragments in Markdown. 
   * **Time to merge:** 22 days, 7 hours
   * **Effort Estimate:** 3

---

## remcohaszing (1)
1. [feat: allow global type declaration in `no-var`](https://github.com/eslint/eslint/pull/19714)
   This pull request updates the `no-var` rule to no longer report direct use of `var` within a TypeScript `declare global` block, ensuring expected behavior. 
   * **Time to merge:** 29 days, 23 hours
   * **Effort Estimate:** 4

---

GitHub search URL: https://github.com/issues?q=org%3Aeslint%20type%3Apr%20label%3A%22contributor%20pool%22%20merged%3A2025-06-01..2025-06-30

Total PRs: 21

Date of report generation: 07/07/2025