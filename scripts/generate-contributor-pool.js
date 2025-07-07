/**
 * @fileoverview Script to generate a contributor pool report.
 * @author Nicholas C. Zakas
 */

"use strict";

/* global fetch */

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const moment = require("moment");
const fs = require("fs");

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

const { GITHUB_TOKEN } = process.env;
const now = moment();
const firstDayOfPreviousMonth = now.clone().subtract(1, "month").startOf("month");
const lastDayOfPreviousMonth = firstDayOfPreviousMonth.clone().endOf("month");

const AI_URL = "https://models.github.ai/inference/chat/completions";
const AI_MODEL = "openai/gpt-4o";

const PROMPT = `You will be given a JSON object where the keys are GitHub
usernames and the values are arrays of pull request objects that were 
written by the user. Your task is to create a Markdown report of this
activity.

For each user, create a heading like this:

<example>
## GitHub username (pull request count)
</example>

Under each heading, list each pull request in the following format:

<example>
1. Pull request title linked to the PR URL
  A three-sentence summary of the pull request description ('body' field in the PR object).
  * **Time to merge:** X days, Y hours
  * **Effort Estimate:** X
</example>

The effort estimate is the amount of effort it took for the author to complete the PR
on a scale of 1 (not much work, very easy) to 5 (a lot of work). This should be
based on the complexity of the changes, the amount of review comments, the overall
size of the PR, the number of reactions, and the time taken to complete it.

The format of the JSON pull request object is as follows:

- user: The GitHub username of the pull request author
- title: The pull request title
- body: The pull request description in Markdown
- html_url: The URL of the pull request
- created_at: The date the pull request was created
- closed_at: The date the pull request was merged
- reactions: The total number of reactions on the pull request
- comments: The total number of comments on the pull request

The title of the report should be "Contributor Pool Report for [Month] [Year]".

IMPORTANT: Every pull request in the JSON array must be included in the report.
`;

const prKeys = new Set([
    "html_url",
    "title",
    "created_at",
    "closed_at",
    "user",
    "body",
    "comments",
    "reactions"
]);

const query = `org:eslint type:pr label:"contributor pool" merged:${firstDayOfPreviousMonth.format("YYYY-MM-DD")}..${lastDayOfPreviousMonth.format("YYYY-MM-DD")}`;

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Uses the GitHub API to fetch PRs that match the given search query. The
 * results are filtered to only include outside contributors.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of PRs.
 */
async function fetchGitHubSearchResults() {
    const headers = {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${GITHUB_TOKEN}`
    };

    console.log(`Fetching PRs from GitHub API with query:\n${query}\n`);

    const allItems = [];
    let page = 1;
    const perPage = 100; // Maximum allowed per page
    let hasMorePages = true;

    while (hasMorePages) {
        const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;

        console.log(`Fetching page ${page}...`);
        const response = await fetch(url, { headers });

        if (!response.ok) {
            console.error(`Error fetching page ${page}:`, await response.text());
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const { items, total_count: totalCount } = await response.json();

        allItems.push(...items);

        // Check if we have more pages to fetch
        // GitHub search API limits results to 1000 total, so we also check against that
        const maxResults = Math.min(totalCount, 1000);

        hasMorePages = allItems.length < maxResults && items.length === perPage;
        page++;

        console.log(`Retrieved ${allItems.length} of ${totalCount} total results`);
    }

    console.log(`Fetched ${allItems.length} PRs total\n`);

    return allItems
        .filter(pr => pr.author_association !== "MEMBER")
        .map(pr => {
            const smallPr = {};

            for (const [key, value] of Object.entries(pr)) {
                if (prKeys.has(key)) {
                    smallPr[key] = value;
                }
            }

            // also collapse reactions and user
            smallPr.reactions = pr.reactions.total_count;
            smallPr.user = pr.user.login;

            return smallPr;
        });
}

/**
 * Fetches the AI model response based on the provided results.
 * @param {Object} grouped The array of PRs to be processed by the AI model.
 * @returns {Promise<string>} A promise that resolves to the AI-generated report.
 */
async function fetchModelResponse(grouped) {

    const response = await fetch(AI_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`
        },
        body: JSON.stringify({
            model: AI_MODEL,
            messages: [
                { role: "system", content: PROMPT },
                { role: "user", content: JSON.stringify(grouped) }
            ],
            temperature: 0.7
        })
    });

    if (!response.ok) {
        console.log(await response.text());
        throw new Error(`AI model request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
        throw new Error("No response from AI model");
    }

    return data.choices[0].message.content;
}


/**
 * Generates the transcript file output path.
 * @param {string} dateString The date string representing the date of the transcript.
 * @returns {string} The path in which to output the transcript.
 */
function generateOutputPath(dateString) {
    const date = moment(dateString, "MM/DD/YYYY");

    return `./notes/${date.year()}/${date.format("YYYY-MM-DD")}-contributor-pool.md`;
}

//-----------------------------------------------------------------------------
// Main
//-----------------------------------------------------------------------------

(async () => {

    const results = await fetchGitHubSearchResults();
    const grouped = Object.groupBy(results, pr => pr.user);

    console.log(`Found ${results.length} contributor PRs merged.`);

    const report = `${await fetchModelResponse(grouped)}\n\n---\n\nGitHub search URL: https://github.com/issues?q=${encodeURIComponent(query)}\n\nTotal PRs: ${results.length}\n\nDate of report generation: ${now.format("MM/DD/YYYY")}`;
    const dateString = now.clone().startOf("month").format("MM/DD/YYYY");
    const outputPath = generateOutputPath(dateString);

    fs.mkdirSync(`./notes/${now.year()}`, { recursive: true });
    fs.writeFileSync(outputPath, report, "utf8");

    console.log(`Contributor pool report generated at ${outputPath}`);
})();
