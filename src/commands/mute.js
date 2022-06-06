const { Client, Message } = require("discord.js");

module.exports = {
    name: "mute",
    description: "This is a sub example command",
    usage: "mute <@user> <time> <reason>",
    example: "mute @DarkerInk#1750 1d Spamming the chat",
    requiredPermissions: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        console.log(args)
    },
}