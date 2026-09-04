---
description: >-
  Generates the ESLint TSC meeting transcript and notes from Discord, then
  applies the meeting's resolutions to any eslint org issues/PRs discussed.
on:
  issues:
    types: [closed]
if: contains(github.event.issue.labels.*.name, 'tsc meeting')
permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write
engine: copilot
steps:
  - name: Setup Node.js
    uses: actions/setup-node@v7
    with:
      node-version: "lts/*"
  - name: Install dependencies
    run: npm install
  - name: Generate transcript
    run: npm run generate:transcript
    env:
      TOKEN: ${{ secrets.DISCORD_BOT_TOKEN }}
      ID: ${{ secrets.DISCORD_CHANNEL_ID }}
      ISSUE_TITLE: ${{ github.event.issue.title }}
  - name: Resolve transcript/notes paths
    id: paths
    run: |
      mkdir -p /tmp/gh-aw/agent
      npm run resolve:notes-paths | tee /tmp/gh-aw/agent/meeting-paths.env >> "$GITHUB_OUTPUT"
    env:
      ISSUE_TITLE: ${{ github.event.issue.title }}
tools:
  github:
    toolsets: [issues, pull_requests]
    allowed-repos: ["eslint/*"]
    min-integrity: approved
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
safe-outputs:
  create-pull-request:
    title-prefix: "Add "
    labels: [automation]
    max: 1
  add-comment:
    target: "*"
    max: 20
    target-repo: "*"
    allowed-repos: ["eslint/*"]
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
  add-labels:
    allowed: [accepted]
    target: "*"
    max: 20
    target-repo: "*"
    allowed-repos: ["eslint/*"]
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
  remove-labels:
    allowed: ["tsc agenda","tsc waiting"]
    target: "*"
    max: 20
    target-repo: "*"
    allowed-repos: ["eslint/*"]
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
  close-issue:
    target: "*"
    max: 20
    target-repo: "*"
    allowed-repos: ["eslint/*"]
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
  close-pull-request:
    target: "*"
    max: 20
    target-repo: "*"
    allowed-repos: ["eslint/*"]
    github-token: ${{ secrets.ESLINT_ORG_TOKEN }}
---

# ESLint TSC Meeting Notes & Follow-up

This workflow runs after a "TSC meeting" issue is closed. The `Generate
transcript` and `Resolve transcript/notes paths` steps above have already run
before you start. Read the file `/tmp/gh-aw/agent/meeting-paths.env` — it
contains three `key=value` lines:

- `transcript_path` — where the raw Discord transcript for this meeting
  already exists on disk.
- `notes_path` — where the meeting notes file should be written.
- `notes_date` — the meeting date, in `YYYY-MM-DD` form.

## Step 1: Generate meeting notes

Use the **meeting-notes-generator** skill
(`.github/skills/meeting-notes-generator/SKILL.md`) to turn the transcript at
`transcript_path` into polished meeting notes, and write the result to
`notes_path`, following the skill's documented structure and conventions
exactly. Use your best judgement for any ambiguous attendee names or topics;
do not ask for clarification.

Once you have written both the transcript file and the notes file to disk, a
pull request will automatically be opened with your changes — you do not need
to commit, push, or open a pull request yourself.

## Step 2: Apply meeting resolutions to discussed issues/PRs

Read back the notes file you just wrote. For every `### [Title](url)` topic
heading whose `url` points to an issue or pull request under
`https://github.com/eslint/` (any repository in the `eslint` GitHub org), find
the `**Resolution:**` paragraph for that topic and do the following, in
order:

1. Always post a comment on the issue/PR with the exact Resolution text,
   prefixed with: `Resolution from the ESLint TSC meeting on <notes_date>:`
   (substitute the actual `notes_date` value you read earlier).
2. If, and only if, the Resolution states that the TSC decided to **accept**
   the issue/PR, add the `accepted` label to it and leave it open — do not
   close it.
3. Remove the `tsc agenda` and `tsc waiting` labels if present. 
3. Otherwise if the resolution explicitly says to close, reject, or decline,
   close the issue or pull request, unless it is already closed.

Skip any topic with no clear Resolution line, and skip any link that is not
under the `eslint` GitHub org. When targeting an issue/PR outside this
repository, remember to specify the correct target repository. When you are
done, summarize the action you took for each issue/PR discussed in the
meeting.
