const { Client, Message } = require("discord.js");

module.exports = {
    name: "example",
    description: "This is a example command",
    usage: "example",
    requiredPermissions: ["MANAGE_MESSAGES"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        console.log(args)
        message.reply("This is a example command");
    },
}