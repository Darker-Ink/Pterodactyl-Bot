const { Client, Message } = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick a user from the server",
    usage: "kick <@user> <reason>",
    example: "kick @Wumpus#0000 Being Annoying",
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