const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "stats",
    description: "Get the stats about the bot",
    usage: "stats",
    example: "stats",
    requiredPermissions: [],
    checks: [],
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {        
        const embed = new MessageEmbed()
        .setTitle(`${client.user.username} | Stats`)
        .addField("Ram Usage", `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
        .addField("Bot Uptime", `${Math.round(client.uptime / 1000)}s`, true)
        .addField("Ping", `${Math.round(client.ws.ping)}ms`, true)
        .setTimestamp()
        .setColor("BLUE")

        message.channel.send({ embeds: [embed] });
    },
}