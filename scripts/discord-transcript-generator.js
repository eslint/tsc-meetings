/*
 * Original Author: kaicataldo
 * From: https://github.com/kaicataldo/discord-transcript-generator (npm package: discord-transcript-generator)
 * Licensed under MIT
 */
"use strict";

/** @import { Message, Channel } from "discord.js" */

const fs = require("node:fs").promises;
const path = require("node:path");
const { Client, GatewayIntentBits, Partials } = require("discord.js");

/**
 * Converts a date string representation to an UTC date offset.
 * @param {string} dateString String representation of the string
 * @returns {number} UTC date offset
 */
function getUTCDate(dateString) {
	const dateInstance = new Date(dateString);

	return Date.UTC(
		dateInstance.getYear(),
		dateInstance.getMonth(),
		dateInstance.getDate(),
	);
}

/**
 * Returns true for messages created at the given date.
 * @param {Message} message Discord message
 * @param {Date} date Date to compare to
 * @returns {boolean} True iff message created on date
 */
function messageMatchesDate(message, date) {
	// Ensure that comparisons are done using UTC.
	return getUTCDate(date) === getUTCDate(message.createdTimestamp);
}

/**
 * Generates a transcript based on the given channel messages for a given date.
 * @param {Message[]} messages Channel messages
 * @param {Date} date Date of the messages
 * @param {string} name Name of the transcript
 * @returns {Promise<string>} Generated transcript
 */
async function generateContent(messages, date, name) {
	const generatedMessages = (
		await Promise.all(
			messages.map(async message => {
				let content = `**${message.author.username}:** ${message.content}`;

				if (message.reactions.cache.size) {
					const reactions = (
						await Promise.all(
							Array.from(message.reactions.cache.entries()).map(
								async ([emoji, { users }]) => {
									const reaction = await users.fetch();
									return ` * ${emoji} ${Array.from(
										reaction.values(),
									)
										.map(({ username }) => `@${username}`)
										.join(", ")}`;
								},
							),
						)
					).join("\n");

					content += `\n${reactions}`;
				}

				return content;
			}),
		)
	).join("\n\n");

	return `# ${date} ${
		name ? `${name} ` : ""
	}Transcript\n\n${generatedMessages}\n`;
}

/**
 * Returns sorted messages of the given date.
 * @param {Message[]} messages Channel messages
 * @param {Date} date Date of the messages
 * @returns {Message[]} Sorted by created timestamp
 */
function getTranscriptMessages(messages, date) {
	return messages
		.filter(message => messageMatchesDate(message, date))
		.sort((a, b) => a.createdTimestamp - b.createdTimestamp);
}

/**
 * Fetches messages of the channel of the given date.
 * @param {Channel} channel Channel to get the messages from
 * @param {Date} date Date of the messages
 * @returns {Promise<Message[]>} Fetched messages
 */
async function fetchMessages(channel, date) {
	let messages = [];

	// Discord's API limits fetching messages to 50 at a time. Continue requesting batches
	// until we either have no messages or find a message from a previous date.
	while (true) {
		const batch = Array.from(
			await channel.messages.fetch(
				messages.length ? { before: messages[0].id } : void 0,
			),
		);

		if (!batch.length) {
			break;
		}

		messages = [...getTranscriptMessages(batch, date), ...messages];

		if (!messageMatchesDate(batch.at(-1), date)) {
			break;
		}
	}

	return messages.map(message => {
		message.content = message.content.replace(
			/<@!?(\d+)>/gu,
			(match, p1) => `@${channel.client.users.cache.get(p1).username}`,
		);
		return message;
	});
}

/**
 * Generates a transcript file of a discord channel on the given date.
 * @throws {Error} Discord API errors
 * @param {Object} options Configuration options
 * @param {string} options.token Discord token
 * @param {string} options.id ID of the channel
 * @param {string} options.date Date of the messages
 * @param {string} options.output Name of the output file
 * @param {?string} [options.name] Name of the transcript
 * @returns {Promise<void>}
 */
module.exports = async function generateTranscript({
	token,
	id,
	date,
	output,
	name = null,
}) {
	const client = new Client({
		intents: [GatewayIntentBits.MessageContent],
		partials: [Partials.Channel],
	});
	const transcriptPath = path.resolve(process.cwd(), output);

	try {
		// discord.js provides an events-based API. Promise.all() allows
		// us to wrap the entire login/message fetching flow in a Promise by registering
		// the event handler, kicking off the client login, and awaiting both promises.
		await Promise.all([
			new Promise((resolve, reject) => {
				client.on("clientReady", async () => {
					try {
						const channel = await client.channels.fetch(id);
						const messages = await fetchMessages(channel, date);

						await fs.writeFile(
							transcriptPath,
							await generateContent(messages, date, name),
						);
						resolve();
					} catch (e) {
						reject(e);
					}
				});
			}),
			client.login(token),
		]);
		console.log(
			`\nTranscript for channel ${id} on ${date} successfully written to ${transcriptPath}.`,
		);
	} finally {
		client.destroy();
	}
};
