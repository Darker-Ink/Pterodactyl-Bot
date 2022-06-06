const { Client, Message } = require("discord.js");

module.exports = {
    name: "example",
    description: "This is a sub example command",
    usage: "example",
    requiredPermissions: ["MANAGE_MESSAGES"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        message.reply("This is a example command");
    },
}