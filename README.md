# ESLint Technical Steering Committee (TSC) Meetings

The ESLint TSC meets every other week to discuss issues related to the project. This repository contains the meeting notes along with other related information.

Meetings are scheduled through issues on this repository. Agenda items may be added by adding the "tsc agenda" label to an issue in the [ESLint repository](https://github.com/eslint/eslint) or any other repository in the organization. If there is no issue, agenda items may also be added by leaving a comment on the issue for a specific meeting in this repository.

All meetings take place in [Discord](https://eslint.org/chat).

## Meeting Notes Workflow

[`.github/workflows/generate-meeting-notes-flue.yml`](.github/workflows/generate-meeting-notes-flue.yml)
generates the transcript and notes for a meeting and applies the meeting's
resolutions to the issues/PRs discussed. It runs automatically when a "tsc
meeting" issue is closed, and can also be run manually from the Actions tab
("Run workflow") by entering the meeting issue's number.
Check "dry run" to generate the notes and log the intended issue/PR updates
without opening a PR or changing anything.

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
