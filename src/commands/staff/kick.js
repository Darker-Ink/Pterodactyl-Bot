const { Client, Message } = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick a user from the server",
    usage: "kick <@user> <reason>",
    example: "kick @DarkerInk#1750 Being Annoying",
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