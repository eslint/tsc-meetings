# 08/07/2025 ESLint TSC Meeting Transcript

**nzakas:** Howdy!

**fasttime:** Hi!

**nzakas:** It'll just be us today as @mdjermanovic is away

**fasttime:** Yes

**nzakas:** Just going through last meeting's notes

**nzakas:** Looks like we don't have any followups from last week.

**nzakas:** Last meeting, that is.
 * 👍 @fasttime

**nzakas:** Let's start with statuses. I've mostly been reviewing PRs for the Markdown and CSS plugins, which have had a lot of activity. I updated the MCP server prompt so it allows autofixing if requested, and continued work on the CSS variables RFC.

**fasttime:** I've been mostly busy reviewing PRs and a few issues. Other than that, I've updated the multithread linting PR and worked on some maintenance tasks.

**nzakas:** Let's talk availability for the next couple of weeks. I'm going to have a bit less time, around one hour per weekday, until the end of August.

**fasttime:** I should be able to work about 1 hour during weekdays and maybe 2 on the weekends, so like 9 hours per week. I expect to have more time starting August 18.

**nzakas:** RFC Duty:
This week - @nzakas 
August 11 - @fasttime 
August 18 - @nzakas
 * 👍 @fasttime

**nzakas:** It doesn't look like we have anything flagged for today. Any issues or PRs you'd like to discuss?

**fasttime:** Nothing in particular.

**nzakas:** Want to share a status update on parallel linting?

**fasttime:** There's only one open question: https://github.com/eslint/eslint/pull/19794#discussion_r2235619344

**fasttime:** Other than that no feedback to address. Shall we write a blog post?

**nzakas:** Write a blog about...?

**fasttime:** About the multithread linting, I mean

**nzakas:** When it's released, yes.

**fasttime:** Okay 🙂  That's all I think.

**nzakas:** For including `URL`, it looks like it's available in the TypeScript DOM library, so we could do:

```json
{
  "compilerOptions": {
    "lib": ["ESNext", "DOM"]
  }
}
```

?

**nzakas:** Although we don't have a `tsconfig.json` at the top-level. 🤔

**fasttime:** I think the problem is more consumers that don't use the DOM library or `@types/node` in their dependencies.

**fasttime:** For that we should add a production dependency on `@types/node` or ask TS consumers to use `@types/node` or a built-in library  that provides a definition for `URL`.

**nzakas:** That feels pretty clunky

**fasttime:** Yes

**nzakas:** Because this is the last blocking decision, then let's go with your idea of a custom type for now. As long as we have a runtime check for instanceof URL, then I think that gets us most of what we want.

**fasttime:** Sounds good. We can probably change this later with a simple fix.

**nzakas:** Yeah, that's my thinking too.

**fasttime:** Okay, I'll do the change.
 * 👍 @nzakas

**nzakas:** Oh, and OptionModule vs. OptionsModule?

**nzakas:** Ah looks like you already made that change

**nzakas:** Sorry, haven't caught up yet today.

**fasttime:** Yeah 🙂 I did that already.
 * 👍 @nzakas

**nzakas:** Okay, anything else before we talk contributor pool?

**fasttime:** Nothing from my side.

**nzakas:** Here's the report from July:
https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-07-01-contributor-pool.md

**nzakas:** Another massive month for contributions.
 * 😮 @fasttime

**nzakas:** I'm going to ask ChatGPT to review and give some recommendations. 🙂

**fasttime:** Good idea, let's give it a try.

**nzakas:** Here's what I got:

# 💰 Contributor Payouts – June 2025

Based on PR count, merge time, and interaction.

## Top Tier  
**xbinaryx** (7 PRs) – Major features, long reviews, high activity  
**→ $700**

## Strong Contributors  
**sethamus** (4 PRs) – Core ESLint features, solid feedback  
**→ $450**  
**TKDev7** (3 PRs) – Fast merges, steady work  
**→ $300**

## Focused Feature Work  
**SwetaTanwar** (2 PRs) – Original rules, detailed reviews  
**→ $250**  
**Pixel998** (2 PRs) – JSON frontmatter in two repos  
**→ $200**

## Impactful One-Offs  
**jgoz** (1 PR) – Heavy discussion  
**→ $200**  
**remcohaszing** (1 PR) – Longest merge delay  
**→ $200**  
**fisker** (1 PR) – ES2025 globals  
**→ $100**  
**ota-meshi** (1 PR) – ES2026 `using`, quick merge  
**→ $100**

---

### 📊 Summary

| Contributor     | PRs | 💵 |
|----------------|-----|-----|
| xbinaryx       | 7   | $700 |
| sethamus       | 4   | $450 |
| TKDev7         | 3   | $300 |
| SwetaTanwar    | 2   | $250 |
| Pixel998       | 2   | $200 |
| jgoz           | 1   | $200 |
| remcohaszing   | 1   | $200 |
| fisker         | 1   | $100 |
| ota-meshi      | 1   | $100 |

**Total: $2,500**

**nzakas:** I think I'd probably bump xbinaryx up to $800

**nzakas:** Removing rollup and extra types from `@eslint/markdown` was a larger job

**fasttime:** I didn't review their PRs but I also think that some of them seem larger

**nzakas:** Ah some of these are for new rules, which we typically pay higher for, let me adjust that algorithm and see what we come up with.

**nzakas:** This looks better

# 💰 Contributor Payouts – June 2025

Includes bonus for new rules and breaking changes.

## Top Tier  
**xbinaryx** (7 PRs)  
- 4 new rules (🧱), 1 breaking change (🔥), 11-comment thread  
**→ $950**

## Strong Contributors  
**sethamus** (4 PRs) – Feature options, steady value  
**→ $400**  
**TKDev7** (3 PRs) – Fixes + config additions, fast merges  
**→ $300**

## Feature-Focused  
**SwetaTanwar** (2 PRs)  
- 2 new rules (🧱), long review cycle  
**→ $350**  
**Pixel998** (2 PRs) – JSON frontmatter support  
**→ $200**

## High-Impact Singles  
**jgoz** (1 PR) – Option addition with 11 comments  
**→ $200**  
**remcohaszing** (1 PR) – Longest delay + solid discussion  
**→ $200**

## Quick & Clean  
**fisker** (1 PR) – ES2025 globals  
**→ $100**  
**ota-meshi** (1 PR) – ES2026 `using` support  
**→ $100**

---

### 📊 Summary

| Contributor     | PRs | 💵 |
|----------------|-----|-----|
| xbinaryx       | 7   | $950 |
| sethamus       | 4   | $400 |
| TKDev7         | 3   | $300 |
| SwetaTanwar    | 2   | $350 |
| Pixel998       | 2   | $200 |
| jgoz           | 1   | $200 |
| remcohaszing   | 1   | $200 |
| fisker         | 1   | $100 |
| ota-meshi      | 1   | $100 |

**Total: $2,800**

**fasttime:** What was your prompt?

**nzakas:** I'll share it with you outside of the meeting
 * 👍 @fasttime

**nzakas:** Thoughts on this?

**fasttime:** I'd round up xbinaryx's amount to $1000
 * 👍 @nzakas

**fasttime:** This PR was merged in June: https://github.com/eslint/js/pull/658

**nzakas:** Hmm, that's strange.

**fasttime:** I thought we rewarded that already?

**nzakas:** Fortunately, we now have reports to refer back to

**nzakas:** It wasn't on last month's report. 🤔

**nzakas:** Let me check the notes

**nzakas:** We did pay ota-meshi for this one

**fasttime:** The dates are 06/01/2025 - 06/30/2025

**nzakas:** Ah crap, I think I opened the wrong file. 😆

**fasttime:** I don't see a new one.

**nzakas:** Forgot to merge the PR.
https://github.com/eslint/tsc-meetings/pull/607
 * 😅 @fasttime

**nzakas:** Here we go: https://github.com/eslint/tsc-meetings/blob/main/notes/2025/2025-08-01-contributor-pool.md

**nzakas:** I'll run this through ChatGPT and see what we come up with.

**nzakas:**
# 💰 Contributor Payouts – July 2025

## Top Tier  
**TKDev7** (6 PRs)  
- 2 config features, 1 new rule (🧱), 1 breaking change (💥), useful fixes  
**→ $700**

## Strong Contributors  
**xbinaryx** (6 PRs)  
- 2 options, 1 config automation, 1 long-review feature  
**→ $500**

**DMartens** (3 PRs)  
- 2 notable features (long merges), 1 fix  
**→ $350**

## Feature Contributors  
**thecalamiity** (2 PRs)  
- 1 new rule (🧱), 1 enhancement  
**→ $275**

**SwetaTanwar** (1 PR)  
- Core rule feature addition  
**→ $175**

**sethamus** (1 PR)  
- Option added to core rule, solid merge time  
**→ $150**

**ST-DDT** (1 PR)  
- High interaction (14 💬), core testing improvement  
**→ $175**

## Fix-Oriented  
**ericcornelissen** (2 PRs) – Regex performance fixes  
**→ $200**  
**andreww2012** (1 PR) – Small but useful fix  
**→ $100**

---

### 📊 Summary

| Contributor     | PRs | 💵 |
|----------------|-----|-----|
| TKDev7         | 6   | $700 |
| xbinaryx       | 6   | $500 |
| DMartens       | 3   | $350 |
| thecalamiity   | 2   | $275 |
| SwetaTanwar    | 1   | $175 |
| sethamus       | 1   | $150 |
| ST-DDT         | 1   | $175 |
| ericcornelissen| 2   | $200 |
| andreww2012    | 1   | $100 |

**Total: $2,625**

**fasttime:** Okay, that looks correct.

**nzakas:** I think I would bump DMartens up to $500. The core rules work was a lot.

**fasttime:** Yes, definitely

**nzakas:** And xbinaryx to $700.
 * 👍 @fasttime

**nzakas:** The rest look roughly correct to me.

**fasttime:** Okay

**nzakas:** Okay, I'll let them know.
 * 👍 @fasttime

**nzakas:** For easier review:

| Contributor     | PRs | 💵 |
|----------------|-----|-----|
| TKDev7         | 6   | $700 |
| xbinaryx       | 6   | $700 |
| DMartens       | 3   | $500 |
| thecalamiity   | 2   | $275 |
| SwetaTanwar    | 1   | $175 |
| sethamus       | 1   | $150 |
| ST-DDT         | 1   | $175 |
| ericcornelissen| 2   | $200 |
| andreww2012    | 1   | $100 |
 * 👍 @fasttime

**nzakas:** Let's talk the release tomorrow.

**fasttime:** I can do the release tomorrow.

**nzakas:** Thanks!

**fasttime:** There are some PRs pending a second review, I'm not sure if there's anything important for tomorrows release.

**nzakas:** We should probably merge this and bump `@eslint/core`: https://github.com/eslint/rewrite/pull/252

**fasttime:** Okay, I can do that tomorrow.
 * 👍 @nzakas

**fasttime:** Other than that it will be only `eslint` and `@eslint/js` I think.

**nzakas:** Looks like it
 * 👍 @fasttime

**nzakas:** If there's not anything else, then I think we're done. Thanks (and thanks @sam3k_ for the notes)

**fasttime:** Thanks! Bye 👋

**nzakas:** 👋
