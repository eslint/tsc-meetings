# ESLint Technical Steering Committee (TSC) Meetings

The ESLint TSC meets every other week to discuss issues related to the project. This repository contains the meeting notes along with other related information.

Meetings are scheduled through issues on this repository. Agenda items may be added by adding the "tsc agenda" label to an issue in the [ESLint repository](https://github.com/eslint/eslint) or any other repository in the organization. If there is no issue, agenda items may also be added by leaving a comment on the issue for a specific meeting in this repository.

All meetings take place in [Discord](https://eslint.org/chat).

## Meeting Notes Workflow (Flue)

[`.github/workflows/generate-meeting-notes-flue.yml`](.github/workflows/generate-meeting-notes-flue.yml)
generates the transcript and notes for each meeting and applies the meeting's
resolutions to the issues/PRs discussed. It runs automatically when a "tsc
meeting" issue is closed, and can also be run manually from the Actions tab
("Run workflow") by entering the meeting issue's number. Check "dry run" to
generate the notes and log the intended issue/PR updates without opening a PR
or changing anything.

The workflow has two jobs:

1. **Generate** pulls the transcript from Discord, then runs a
   [Flue](https://flueframework.com) agent
   ([`.flue/agents/meeting-notes.mjs`](.flue/agents/meeting-notes.mjs)) that
   writes the notes using the
   [meeting-notes-generator skill](.github/skills/meeting-notes-generator/SKILL.md)
   and records whether each discussed eslint org issue/PR should be accepted,
   closed, or left open. The agent only has a read-only GitHub token.
2. **Publish** opens a pull request with the transcript and notes, then runs
   [`scripts/apply-meeting-resolutions.js`](scripts/apply-meeting-resolutions.js),
   which comments each `**Resolution:**` verbatim on its issue/PR, applies the
   `accepted` label or closes as decided, and removes the `tsc agenda` and
   `tsc waiting` labels. Re-running the workflow for the same meeting does not
   post duplicate comments.

To try the agent locally against an existing transcript (with
`OPENAI_API_KEY` and `GH_TOKEN` set):

```bash
MEETING_ACTIONS_PATH=actions.json npx flue run .flue/agents/meeting-notes.mjs --message "Write the notes for the ESLint TSC meeting on 2026-10-01. Transcript path: notes/2026/2026-10-01-transcript.md Notes path: notes/2026/2026-10-01.md"
```

The workflow requires these repository secrets: `DISCORD_BOT_TOKEN` and
`DISCORD_CHANNEL_ID` (transcript generation), `OPENAI_API_KEY` (the agent),
and `ESLINT_ORG_TOKEN` (applying resolutions across the `eslint` org).

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

