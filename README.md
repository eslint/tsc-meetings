# ESLint Technical Steering Committee (TSC) Meetings

The ESLint TSC meets every other week to discuss issues related to the project. This repository contains the meeting notes along with other related information.

Meetings are scheduled through issues on this repository. Agenda items may be added by adding the "tsc agenda" label to an issue in the [ESLint repository](https://github.com/eslint/eslint) or any other repository in the organization. If there is no issue, agenda items may also be added by leaving a comment on the issue for a specific meeting in this repository.

All meetings take place in [Discord](https://eslint.org/chat).

## Updating the Meeting Notes Agentic Workflow

Transcript generation, meeting notes generation, and post-meeting follow-up
actions (commenting on/closing/labeling discussed issues and PRs) are
automated by a [GitHub Agentic Workflow](https://github.com/github/gh-aw)
defined in [`.github/workflows/generate-meeting-notes.md`](.github/workflows/generate-meeting-notes.md).

This workflow is **authored in Markdown** (frontmatter + natural-language
instructions for the agent) and **compiled** into a plain GitHub Actions
workflow — [`.github/workflows/generate-meeting-notes.lock.yml`](.github/workflows/generate-meeting-notes.lock.yml)
— which is the file GitHub Actions actually runs. Never hand-edit the
`.lock.yml` file directly; your changes will be overwritten the next time
someone recompiles.

To make changes:

1. Install the `gh aw` CLI extension (one-time setup):
   ```bash
   gh extension install github/gh-aw
   ```
2. Edit `.github/workflows/generate-meeting-notes.md` (triggers, permissions,
   tools, `safe-outputs`, or the agent's instructions).
3. Recompile the workflow:
   ```bash
   gh aw compile
   ```
   This regenerates `generate-meeting-notes.lock.yml` (and
   `.github/aw/actions-lock.json`, which pins action versions used by the
   compiled workflow).
4. Lint the compiled workflow before committing:
   ```bash
   gh aw lint
   ```
5. If the compiler reports new secrets, tools, or other changes that require
   review (a "safe update" prompt), verify they're expected, then re-run with
   `gh aw compile --approve`.
6. Commit **both** the `.md` source and the regenerated `.lock.yml` (and any
   updated `.github/aw/` files) together.

The workflow requires the following repository secrets: `DISCORD_BOT_TOKEN`,
`DISCORD_CHANNEL_ID` (for transcript generation), and `ESLINT_ORG_TOKEN` (a
token with read/write access to issues and pull requests across the `eslint`
org, used to comment on, close, and label the issues/PRs discussed in each
meeting).

