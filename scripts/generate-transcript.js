#!/usr/bin/env node

const moment = require("moment");
const generateTranscript = require("discord-transcript-generator");
const { TOKEN, ID, ISSUE_TITLE } = process.env;

function extractDateString(issueTitle) {
    // Issue title is formatted as "TSC meeting DD-MMMM-YYYY".
    // https://github.com/eslint/eslint-github-bot/blob/master/src/plugins/recurring-issues/index.js#L202
    const [, dateString = null] = /(\d\d-.+-\d\d\d\d)$/.exec(issueTitle);

    if (!dateString) {
      throw new Error("PR title has incorrect format.")
    }

    return dateString;
}

function generateDate(dateString) {
  return moment(new Date(dateString)).format("MM/DD/YYYY");
}

function generateOutputPath(dateString) {
  return `./notes/${moment(new Date(dateString)).format("YYYY-MM-DD")}-transcript.md`;
}

(async function() {
    try {
        const date = generateDate(extractDateString(ISSUE_TITLE));
        const output = generateOutputPath(date);

        await generateTranscript({
           token: TOKEN,
           id: ID,
           date,
           output,
           name: "ESLint TSC Meeting",
        });
    } catch (e) {
        console.error(`Transcript generation failed with the following error:\n${e.message}`);
        process.exit(1);
    }
})();
