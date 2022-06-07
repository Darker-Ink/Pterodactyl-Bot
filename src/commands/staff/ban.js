const { Client, Message } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "ban",
    description: "Ban a user from the server",
    usage: "ban <@user> <reason>",
    example: "ban @Wumpus#0000 Being Annoying",
    requiredPermissions: [],
    checks: [{
        check: (message) => message.member.roles.cache.has(config.discord.roles.staff),
        error: "You do not have permission to use this command."
    }, {
        check: (message, args) => args?.[0] !== undefined,
        error: "Please mention a user or provide a valid user ID."
    }],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    },
}