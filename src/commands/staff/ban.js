const { Client, Message } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban a user from the server",
    usage: "ban <@user> <reason>",
    example: "ban @DarkerInk#1750 Being Annoying",
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