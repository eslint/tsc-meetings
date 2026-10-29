/**
 * @fileoverview Applies the resolutions from a TSC meeting notes file to the
 * eslint org issues/PRs that were discussed.
 *
 * Resolution text is read directly from the notes file so it's posted
 * verbatim. The agent's decisions file only decides whether each item is
 * accepted, closed, or left as-is. Running the script twice for the same
 * meeting is safe: comments carry a hidden marker and are not duplicated.
 *
 * Environment variables:
 * - NOTES_PATH: Path to the meeting notes markdown file.
 * - NOTES_DATE: Meeting date in YYYY-MM-DD form.
 * - ACTIONS_PATH: Path to the JSON decisions file written by the agent.
 * - GITHUB_TOKEN: Token with write access to issues/PRs across the eslint org.
 * - FOOTER: Optional markdown appended to each comment.
 * - DRY_RUN: When "true", log intended changes without making them.
 */
"use strict";

const fs = require("node:fs");

const { NOTES_PATH, NOTES_DATE, ACTIONS_PATH, GITHUB_TOKEN, FOOTER, DRY_RUN } =
	process.env;

const dryRun = DRY_RUN === "true";
const LABELS_TO_REMOVE = ["tsc agenda", "tsc waiting"];
const VALID_ACTIONS = new Set(["accept", "close", "none"]);
const TOPIC_HEADING =
	/^### \[.*\]\((https:\/\/github\.com\/eslint\/([\w.-]+)\/(issues|pull)\/([1-9]\d{0,14}))\/?(?:[?#][^)]*)?\)\s*$/u;
const RESOLUTION_PREFIX = /^\*\*Resolution:?\*\*:?\s*/u;

/**
 * Extracts every eslint org issue/PR topic and its resolution from the notes.
 * @param {string} notes The meeting notes markdown.
 * @returns {Array<{url: string, repo: string, number: number, isPullRequest: boolean, resolution: string|null}>} The topics found.
 */
function parseTopics(notes) {
	const topics = [];
	let current = null;
	let collectingResolution = false;

	for (const line of notes.split(/\r?\n/u)) {
		if (line.startsWith("#")) {
			collectingResolution = false;
			current = null;

			const match = TOPIC_HEADING.exec(line);

			if (match) {
				current = {
					url: match[1],
					repo: match[2],
					isPullRequest: match[3] === "pull",
					number: Number(match[4]),
					resolution: null,
				};
				topics.push(current);
			}
			continue;
		}

		if (!current) {
			continue;
		}

		if (current.resolution === null && RESOLUTION_PREFIX.test(line)) {
			current.resolution = line.replace(RESOLUTION_PREFIX, "").trim();
			collectingResolution = true;
		} else if (collectingResolution) {
			if (line.trim() === "") {
				collectingResolution = false;
			} else {
				current.resolution += ` ${line.trim()}`;
			}
		}
	}

	return topics;
}

/**
 * Reads the agent's decisions file into a map of url -> action.
 * @param {string} filePath Path to the decisions JSON file.
 * @returns {Map<string, string>} The action for each url.
 * @throws {Error} If the file is not an array or contains an invalid action.
 */
function readActions(filePath) {
	const items = JSON.parse(fs.readFileSync(filePath, "utf8"));
	const actions = new Map();

	if (!Array.isArray(items)) {
		throw new Error(`${filePath} must contain a JSON array.`);
	}

	for (const { url, action } of items) {
		if (!VALID_ACTIONS.has(action)) {
			throw new Error(`Invalid action "${action}" for ${url}.`);
		}
		actions.set(url, action);
	}

	return actions;
}

/**
 * Ensures every topic with a resolution has a corresponding agent action.
 * @param {Array<{url: string, resolution: string|null}>} topics The parsed topics.
 * @param {Map<string, string>} actions The agent's actions.
 * @returns {void} Nothing.
 * @throws {Error} If a resolved topic has no corresponding action.
 */
function validateActions(topics, actions) {
	const missing = [
		...new Set(
			topics
				.filter(topic => topic.resolution && !actions.has(topic.url))
				.map(topic => topic.url),
		),
	];

	if (missing.length > 0) {
		throw new Error(
			`Missing actions for resolved topics: ${missing.join(", ")}`,
		);
	}
}

/**
 * Makes a request to the GitHub REST API.
 * @param {string} method The HTTP method.
 * @param {string} path The API path, starting with a slash.
 * @param {Object} [body] The JSON request body.
 * @returns {Promise<any>} The parsed response body, or null for empty responses.
 */
async function github(method, path, body) {
	const response = await fetch(`https://api.github.com${path}`, {
		method,
		headers: {
			Accept: "application/vnd.github+json",
			Authorization: `Bearer ${GITHUB_TOKEN}`,
			"X-GitHub-Api-Version": "2022-11-28",
			...(body && { "Content-Type": "application/json" }),
		},
		body: body && JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error(
			`${method} ${path} failed with ${response.status}: ${await response.text()}`,
		);
	}

	return response.status === 204 ? null : response.json();
}

/**
 * Checks whether a comment containing the given marker already exists.
 * @param {string} issuePath The API path of the issue, e.g. /repos/eslint/eslint/issues/1.
 * @param {string} marker The marker to search for.
 * @returns {Promise<boolean>} True if a matching comment exists.
 */
async function hasComment(issuePath, marker) {
	for (let page = 1; ; page++) {
		const comments = await github(
			"GET",
			`${issuePath}/comments?per_page=100&page=${page}`,
		);

		if (comments.some(comment => comment.body?.includes(marker))) {
			return true;
		}

		if (comments.length < 100) {
			return false;
		}
	}
}

/**
 * Applies the resolution for a single topic.
 * @param {Object} topic The topic parsed from the notes.
 * @param {string} action One of "accept", "close", or "none".
 * @returns {Promise<string[]>} Descriptions of the changes made.
 */
async function applyTopic(topic, action) {
	const issuePath = `/repos/eslint/${topic.repo}/issues/${topic.number}`;
	const marker = `<!-- tsc-meeting-resolution:${NOTES_DATE} -->`;
	const issue = await github("GET", issuePath);
	const labels = new Set(issue.labels.map(label => label.name));
	const changes = [];

	if (!(await hasComment(issuePath, marker))) {
		const body = [
			marker,
			`Resolution from the ESLint TSC meeting on ${NOTES_DATE}: ${topic.resolution}`,
			FOOTER && `\n${FOOTER}`,
		]
			.filter(Boolean)
			.join("\n");

		if (!dryRun) {
			await github("POST", `${issuePath}/comments`, { body });
		}
		changes.push("commented");
	}

	if (action === "accept" && !labels.has("accepted")) {
		if (!dryRun) {
			await github("POST", `${issuePath}/labels`, {
				labels: ["accepted"],
			});
		}
		changes.push('added "accepted"');
	}

	if (action === "close" && issue.state !== "closed") {
		if (!dryRun) {
			if (topic.isPullRequest) {
				await github(
					"PATCH",
					`/repos/eslint/${topic.repo}/pulls/${topic.number}`,
					{ state: "closed" },
				);
			} else {
				await github("PATCH", issuePath, {
					state: "closed",
					state_reason: "not_planned", // eslint-disable-line camelcase -- GitHub API field
				});
			}
		}
		changes.push("closed");
	}

	for (const label of LABELS_TO_REMOVE) {
		if (labels.has(label)) {
			if (!dryRun) {
				await github(
					"DELETE",
					`${issuePath}/labels/${encodeURIComponent(label)}`,
				);
			}
			changes.push(`removed "${label}"`);
		}
	}

	return changes;
}

(async function main() {
	try {
		const validateOnly = process.argv.includes("--validate");

		for (const [name, value] of Object.entries({
			NOTES_PATH,
			ACTIONS_PATH,
			...(!validateOnly && { NOTES_DATE }),
		})) {
			if (!value) {
				throw new Error(`${name} is not set.`);
			}
		}

		const topics = parseTopics(fs.readFileSync(NOTES_PATH, "utf8"));
		const actions = readActions(ACTIONS_PATH);
		validateActions(topics, actions);

		if (validateOnly) {
			console.log("Meeting actions validated.");
			return;
		}

		if (!GITHUB_TOKEN && !dryRun) {
			throw new Error("GITHUB_TOKEN is not set.");
		}

		const seen = new Set();
		let failures = 0;

		if (dryRun) {
			console.log("Dry run: no changes will be made.");
		}

		for (const url of actions.keys()) {
			if (!topics.some(topic => topic.url === url)) {
				console.warn(
					`Ignoring decision for ${url}: no matching topic in the notes.`,
				);
			}
		}

		for (const topic of topics) {
			if (seen.has(topic.url)) {
				continue;
			}
			seen.add(topic.url);

			if (!topic.resolution) {
				console.log(`- ${topic.url}: skipped (no resolution)`);
				continue;
			}

			const action = actions.get(topic.url) ?? "none";

			try {
				const changes =
					!GITHUB_TOKEN && dryRun
						? ["(not checked: no token)"]
						: await applyTopic(topic, action);

				console.log(
					`- ${topic.url} [${action}]: ${changes.join(", ") || "no changes needed"}`,
				);
			} catch (error) {
				failures++;
				console.error(`- ${topic.url} [${action}]: ${error.message}`);
			}
		}

		if (failures > 0) {
			process.exitCode = 1;
		}
	} catch (e) {
		console.error(
			`Applying meeting resolutions failed with the following error:\n${e.message}`,
		);
		process.exitCode = 1;
	}
})();
