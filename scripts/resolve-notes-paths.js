"use strict";

const moment = require("moment");
const { ISSUE_TITLE } = process.env;

/**
 * Extract a date string from an automatically generated TSC Meeting issue title.
 * Issue title is formatted as "TSC meeting DD-MMMM-YYYY".
 * https://github.com/eslint/eslint-github-bot/blob/460d2653de44eafa0c15c361a294f5ecf5d05840/src/plugins/recurring-issues/index.js#L235
 * @param {string} issueTitle The issue title from which to extract the date string.
 * @returns {string} The extracted date string.
 * @throws {Error} If the date string cannot be extracted from the issue title.
 */
function extractDateString(issueTitle) {
	const [, dateString = null] = /(\d\d-.+-\d\d\d\d)$/u.exec(issueTitle) || [];

	if (!dateString) {
		throw new Error(
			'Can\'t extract date from issue title. Expecting format "TSC meeting DD-MMMM-YYYY".',
		);
	}

	return dateString;
}

/**
 * Prints `key=value` lines suitable for appending to `$GITHUB_OUTPUT`,
 * describing where the transcript and meeting notes files for this
 * meeting live (or should be written to).
 * @returns {void}
 */
(function main() {
	try {
		const date = moment(extractDateString(ISSUE_TITLE), "DD-MMMM-YYYY");
		const isoDate = date.format("YYYY-MM-DD");
		const year = date.format("YYYY");

		console.log(`transcript_path=notes/${year}/${isoDate}-transcript.md`);
		console.log(`notes_path=notes/${year}/${isoDate}.md`);
		console.log(`notes_date=${isoDate}`);
	} catch (e) {
		console.error(
			`Resolving notes paths failed with the following error:\n${e.message}`,
		);
		process.exitCode = 1;
	}
})();
