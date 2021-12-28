"use strict";

const moment = require("moment");
const generateTranscript = require("discord-transcript-generator");
const { TOKEN, ID, ISSUE_TITLE } = process.env;

/**
 * Extract a date string from an automatically generated TSC Meeting issue title.
 * Issue title is formatted as "TSC meeting DD-MMMM-YYYY".
 * https://github.com/eslint/eslint-github-bot/blob/460d2653de44eafa0c15c361a294f5ecf5d05840/src/plugins/recurring-issues/index.js#L235
 * @param {string} issueTitle The issue title from which to extract the date string.
 * @returns {string} The extracted date string.
 */
function extractDateString(issueTitle) {
    const [, dateString = null] = /(\d\d-.+-\d\d\d\d)$/u.exec(issueTitle) || [];

    if (!dateString) {
        throw new Error("Can't extract date from issue title. Expecting format \"TSC meeting DD-MMMM-YYYY\".");
    }

    return dateString;
}

/**
 * Formats a date string to MM/DD/YYYY.
 * @param {string} dateString The date string to format.
 * @returns {string} The formatted date string.
 */
function formatDate(dateString) {
    return moment(dateString, "DD-MMMM-YYYY").format("MM/DD/YYYY");
}

/**
 * Generates the transcript file output path.
 * @param {string} dateString The date string representing the date of the transcript.
 * @returns {string} The path in which to output the transcript.
 */
function generateOutputPath(dateString) {
    const date = moment(dateString, "MM/DD/YYYY");

    return `./notes/${date.year()}/${date.format("YYYY-MM-DD")}-transcript.md`;
}

(async function() {
    try {
        const date = formatDate(extractDateString(ISSUE_TITLE));
        const output = generateOutputPath(date);

        await generateTranscript({
            token: TOKEN,
            id: ID,
            date,
            output,
            name: "ESLint TSC Meeting"
        });
    } catch (e) {
        console.error(`Transcript generation failed with the following error:\n${e.message}`);
        process.exitCode = 1;
    }
}());
