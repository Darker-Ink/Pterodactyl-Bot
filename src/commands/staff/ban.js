const { Client, Message } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban a user from the server",
    usage: "ban <@user> <reason>",
    example: "ban @Wumpus#0000 Being Annoying",
    requiredPermissions: [],
    checks: [],
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