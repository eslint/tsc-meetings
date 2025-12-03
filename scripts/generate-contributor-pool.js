/**
 * @fileoverview Script to generate a contributor pool report.
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const moment = require("moment");
const fs = require("node:fs");

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

const { GITHUB_TOKEN } = process.env;
const now = moment();
const firstDayOfPreviousMonth = now.clone().subtract(1, "month").startOf("month");
const lastDayOfPreviousMonth = firstDayOfPreviousMonth.clone().endOf("month");
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
const CONTRIBUTOR_POOL_DIVISOR = 10;

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Fetches monthly donations from the ESLint sponsors data.
 * @returns {Promise<number>} A promise that resolves to the monthly donation amount.
 */
async function fetchMonthlyDonations() {
    const url = "https://raw.githubusercontent.com/eslint/eslint.org/refs/heads/main/src/_data/sponsors.json";

    console.log(`Fetching monthly donations from ${url}\n`);

    const response = await fetch(url);

    if (!response.ok) {
        console.error("Error fetching sponsors data:", await response.text());
        throw new Error(`Failed to fetch sponsors data with status ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.totals || typeof data.totals.monthlyDonations !== "number") {
        throw new Error("Invalid sponsors data structure: missing totals.monthlyDonations");
    }

    return data.totals.monthlyDonations;
}

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
 * Generates a report based on the grouped PRs.
 * @param {Object} grouped The grouped PRs by user.
 * @param {number} contributorPoolFunds The calculated contributor pool funds.
 * @returns {string} The formatted report.
 */
function generateReport(grouped, contributorPoolFunds) {

    return `
# Contributor Pool Report (${firstDayOfPreviousMonth.format("MM/DD/YYYY")} - ${lastDayOfPreviousMonth.format("MM/DD/YYYY")})

Contributor Pool Funds: $${contributorPoolFunds.toFixed(2)}

${
    Object.entries(grouped).sort((a, b) => b[1].length - a[1].length).map(([user, prs]) => {

        const prList = prs.map(pr => {
            const createdAt = moment(pr.created_at);
            const closedAt = moment(pr.closed_at);
            const duration = moment.duration(closedAt.diff(createdAt));
            const days = Math.floor(duration.asDays());
            const hours = duration.hours();

            return `1. [${pr.title}](${pr.html_url}) (💬 ${pr.comments} 😐 ${pr.reactions})  \n    Time to merge: ${days} days, ${hours} hours`;
        }).join("\n\n");

        return `## ${user} (${prs.length})\n\n${prList}`;
    }).join("\n\n")
}
`.trimStart();

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

    const [results, monthlyDonations] = await Promise.all([
        fetchGitHubSearchResults(),
        fetchMonthlyDonations()
    ]);

    const grouped = Object.groupBy(results, pr => pr.user);

    console.log(`Found ${results.length} contributor PRs merged.`);

    // Calculate contributor pool funds: monthly donations / 10, truncated to 2 decimal places
    const contributorPoolFunds = Math.floor((monthlyDonations / CONTRIBUTOR_POOL_DIVISOR) * 100) / 100;

    console.log(`Monthly donations: $${monthlyDonations.toFixed(2)}`);
    console.log(`Contributor pool funds: $${contributorPoolFunds.toFixed(2)}\n`);

    const report = `${generateReport(grouped, contributorPoolFunds)}\n\n---\n\nGitHub search URL: https://github.com/issues?q=${encodeURIComponent(query)}\n\nTotal PRs: ${results.length}\n\nDate of report generation: ${now.format("MM/DD/YYYY")}`;
    const dateString = now.clone().startOf("month").format("MM/DD/YYYY");
    const outputPath = generateOutputPath(dateString);

    fs.mkdirSync(`./notes/${now.year()}`, { recursive: true });
    fs.writeFileSync(outputPath, report, "utf8");

    console.log(`Contributor pool report generated at ${outputPath}`);
})();
