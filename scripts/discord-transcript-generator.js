/*
 * Original Author: kaicataldo
 * From: https://github.com/kaicataldo/discord-transcript-generator (npm package: discord-transcript-generator)
 * Licensed under MIT
 */
'use strict';

const fs = require('fs').promises;
const path = require('path');
const { Client, GatewayIntentBits, Partials } = require('discord.js');

function getUTCDate(dateString) {
  const dateInstance = new Date(dateString);
  return Date.UTC(
    dateInstance.getYear(),
    dateInstance.getMonth(),
    dateInstance.getDate(),
  );
}

function messageMatchesDate(message, date) {
  // Ensure that comparisons are done using UTC.
  return getUTCDate(date) === getUTCDate(message.createdTimestamp);
}

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
                  return ` * ${emoji} ${Array.from(reaction.values())
                    .map(({ username }) => `@${username}`)
                    .join(', ')}`;
                },
              ),
            )
          ).join('\n');

          content += `\n${reactions}`;
        }

        return content;
      }),
    )
  ).join('\n\n');

  return `# ${date} ${
    name ? name + ' ' : ''
  }Transcript\n\n${generatedMessages}\n`;
}

function getTranscriptMessages(messages, date) {
  return messages
    .filter(message => messageMatchesDate(message, date))
    .sort((a, b) => a.createdTimestamp - b.createdTimestamp);
}

async function fetchMessages(channel, date) {
  let messages = [];

  // Discord's API limits fetching messages to 50 at a time. Continue requesting batches
  // until we either have no messages or find a message from a previous date.
  while (true) {
    const batch = Array.from(
      await channel.messages.fetch(
        messages.length ? { before: messages[0].id } : undefined,
      )
    );

    if (!batch.length) {
      break;
    }

    messages = [...getTranscriptMessages(batch, date), ...messages];

    if (!messageMatchesDate(batch[batch.length - 1], date)) {
      break;
    }
  }

  return messages.map(message => {
    message.content = message.content.replace(
      /<@!?(\d+)>/g,
      (match, p1) => `@${channel.client.users.cache.get(p1).username}`,
    );
    return message;
  });
}

module.exports = async function generateTranscript({
  token,
  id,
  date,
  output,
  name = null,
}) {
  const client = new Client({ intents: [GatewayIntentBits.MessageContent], partials: [Partials.Channel] });
  const transcriptPath = path.resolve(process.cwd(), output);

  try {
    // discord.js provides an events-based API. Promise.all() allows
    // us to wrap the entire login/message fetching flow in a Promise by registering
    // the event handler, kicking off the client login, and awaiting both promises.
    await Promise.all([
      new Promise((resolve, reject) => {
        client.on('clientReady', async () => {
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
