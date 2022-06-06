const { Client, Collection, Intents } = require("discord.js");
const config = require("./config.json");
const commandLoader = require("./utils/commandLoader");
const eventLoader = require("./utils/eventLoader");

const client = new Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
    ],
    allowedMentions: {
        parse: ["users", "roles"],
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
})

client.commands = new Collection();

commandLoader(client);
eventLoader(client);

client.login(config.bot.token);