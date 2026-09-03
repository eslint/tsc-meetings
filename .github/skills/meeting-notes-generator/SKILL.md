---
name: meeting-notes-generator
description: Generates ESLint TSC meeting notes from a raw meeting transcript, following the conventions used in this repository's notes/ directory. Use this when asked to write, create, or generate meeting notes from a transcript, or to summarize an ESLint TSC meeting.
license: MIT
---

# ESLint TSC Meeting Notes Generator

This skill turns a raw chat-style meeting transcript into a polished meeting
notes file, matching the style used throughout `notes/<year>/`.

## Inputs

- A transcript, either:
  - An existing file already saved as `notes/<year>/<YYYY-MM-DD>-transcript.md`, or
  - Raw transcript text/paste provided directly in the conversation.
- The meeting date (infer from the transcript filename or content, or ask the
  user if it truly cannot be determined).

## Output

A file at `notes/<year>/<YYYY-MM-DD>.md` (same date/year as the transcript),
following the exact structure and conventions below. If the transcript isn't
already saved as `notes/<year>/<YYYY-MM-DD>-transcript.md`, save it there first
(verbatim, unedited) before writing the notes file.

**Summary-only requests are different from note-generation requests.** If the
user only asks for a spoken/chat summary of a transcript (not a notes file),
do not write or modify any files in `notes/` — just reply with the summary
directly in the conversation. Only save the verbatim transcript and write the
`notes/<year>/<YYYY-MM-DD>.md` file when the user is explicitly asking for
meeting notes to be generated (per this skill's contract). This avoids
unintentionally committing unedited, pasted transcript text to the repository
when the user only wanted a quick summary.

## Step-by-step process

1. **Determine the date and year** from the transcript filename or its first
   line (e.g., `# 12/11/2025 ESLint TSC Meeting Transcript`). The notes file
   uses ISO format: `YYYY-MM-DD.md`, saved under `notes/<YYYY>/`.

2. **Identify attendees.** Scan every speaker handle (`**handle:**`) in the
   transcript. Cross-reference past notes files (`grep` other files in
   `notes/`) to find each person's full display name — the "Attending" list
   always uses the pattern `Full Name (@handle) - TSC`. If a name can't be
   found in prior notes, use just `@handle` and flag it for the user to
   confirm rather than guessing a full name.

3. **Identify who moderated and who took notes.** Only attribute the
   moderator role based on explicit evidence in the transcript — e.g., someone
   asking "can you take notes?", visibly driving the agenda (asking the
   opening/status questions, introducing each topic, calling for
   resolutions), or an explicit statement of who's moderating. Do not default
   to attributing moderation to any particular person (including @nzakas)
   just because they're a frequent moderator in past meetings. If the
   transcript is genuinely ambiguous about who moderated, omit the
   moderator attribution sentence entirely (or ask the user to confirm)
   rather than guessing. If a third person is mentioned taking notes without
   attending/speaking (e.g., "(Thanks @sam3k_ for the notes.)"), do NOT list
   them under "Attending" — instead attribute note-taking to them in the
   sentence below the attendee list.

4. **Note absences.** If the transcript explicitly says a known TSC member is
   absent (e.g., "@nzakas is absent so it'll just be us today"), add a line:
   `**Note:** Full Name (@handle) was absent.` below the moderator/notes
   sentence. Do not invent absences — only note them if stated.

5. **Segment the transcript into topics.** Read through the whole transcript
   and split it into logical discussion topics in chronological order. Common
   recurring topics, in typical order, include:
   - Statuses / availability updates
   - Follow-ups from previous meeting notes
   - Specific issues/PRs discussed (one topic section per issue/PR, usually
     introduced via a linked GitHub URL)
   - Scheduling topics (meeting cadence, holidays, RFC duty rotation)
   - Contributor pool (recurring topic in the first meeting of a month; see
     the naming note under step 7 below — it's easy to get the covered month
     wrong)
   - The scheduled release for that cycle (almost always the last topic)

   Give each topic section a heading (`###`) using a short descriptive title.
   If the topic centers on a specific GitHub issue/PR, link its title:
   `### [Issue or PR title](https://github.com/.../issues/123)`. Use the
   actual issue/PR title from GitHub (fetch the page to confirm it) whenever
   possible. Never invent or infer a plausible-sounding title — if the title
   can't be confirmed (e.g., GitHub is unreachable), use a neutral heading
   that includes the raw URL instead (e.g., `### Discussion: <url>`), or ask
   the user to confirm the correct title before using it.

6. **Write each topic section** using these conventions:
   - Summarize the discussion in third person as concise bullet points or
     short prose attributed to each speaker, e.g.
     `* **@handle:** Has been mostly reviewing PRs...` or
     `* @handle thinks X, @otherhandle disagrees because Y.`
   - Preserve technical details, links, and numbers exactly as stated (dates,
     version numbers, PR/issue links) — do not paraphrase facts loosely.
   - When the transcript shows the group converging on a decision, add a
     `**Resolution:** ...` line (bold, on its own paragraph) summarizing what
     was decided and who is responsible for follow-up.
   - For longer/more nuanced discussions, you may add a
     `**TSC Summary:** ...` paragraph before the resolution, paraphrasing the
     core question/context in neutral third person (see
     `notes/2025/2025-12-11.md` for an example of this pattern).
   - Reaction emoji (e.g., `👍 @handle`) in the transcript signal agreement —
     use them as evidence of consensus but do not copy the raw emoji into the
     notes.
   - If a topic produces concrete follow-up work, add an
     `**Action Items:**` bullet list grouped by owner handle, e.g.:
     ```markdown
     **Action Items:**
     - @handle will:
       - Do the release
       - Open an issue for X
     ```
   - Do not include small talk, greetings, or off-topic banter in the notes.

7. **Assemble the final file** in this exact structure:

   ```markdown
   # <YYYY-MM-DD> ESLint TSC Meeting Notes

   ## Transcript

   [`<YYYY-MM-DD>-transcript.md`](<YYYY-MM-DD>-transcript.md)

   ## Attending

   - Full Name (@handle) - TSC
   - Full Name (@handle) - TSC

   @moderator moderated.

   **Note:** Full Name (@handle) was absent.

   ## Topics

   ### Topic Title

   ...discussion...

   **Resolution:** ...

   ### [Linked Issue/PR Title](url)

   ...discussion...

   **Resolution:** ...

   ### Scheduled release for <Month Day>, <Year>

   ...

   **Resolution:** ...
   ```

   Notes:
   - The "Attending" list may use either `-` or `*` bullets — check the most
     recent existing notes file in the same year for the currently preferred
     bullet style and match it.
   - Always end with the scheduled-release topic if the transcript discusses
     one, since this matches the established pattern.
   - The contributor pool topic is named after the month the linked
     `notes/<year>/<YYYY-MM-01>-contributor-pool.md` report *covers*, not the
     month the meeting takes place in. Since this report is generated on the
     1st of the month and typically discussed in that month's first TSC
     meeting, it always covers the *previous* calendar month (e.g., a report
     linked as `2026-06-01-contributor-pool.md` and discussed at the June 11
     meeting covers May 2026 activity, so the heading should read
     `### Contributor Pool for May 2026`). Open the linked report and check
     its date range in the title (e.g., `(05/01/2026 - 05/31/2026)`) to
     confirm the correct month before naming this heading — it's easy to get
     wrong.

8. **Verify before finishing:**
   - Every attendee in the transcript's speaker list appears in "Attending"
     (or is explicitly credited as note-taker/absent, not silently dropped).
   - Every `###` topic maps to a real, distinct portion of the transcript —
     don't invent topics that weren't discussed.
   - All GitHub links from the transcript appear somewhere in the notes.
   - Run a quick diff-read against 2-3 existing notes files (e.g.
     `notes/2025/2025-12-11.md`, `notes/2023/2023-01-12.md`) to confirm
     formatting/tone consistency before presenting the final file to the
     user.

## Example reference files

Use these as the canonical style reference when generating new notes:
- `notes/2025/2025-12-11-transcript.md` / `notes/2025/2025-12-11.md`
- `notes/2023/2023-01-12-transcript.md` / `notes/2023/2023-01-12.md`
