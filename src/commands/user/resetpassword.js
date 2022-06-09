const { Client, Message, MessageEmbed } = require("discord.js");

const passwordGen = (length) => {
    const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }

    return password;
}

module.exports = {
    name: "resetpassword",
    description: "reset user password",
    usage: "resetpassword",
    example: "resetpassword",
    requiredPermissions: [],
    checks: [],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        message.reply("You passed the checks :)")
    },
}