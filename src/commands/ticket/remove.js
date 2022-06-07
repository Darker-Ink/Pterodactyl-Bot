const config = require("../../config.json");
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "remove",
    description: "Remove someone from a ticket",
    usage: "remove <user>",
    example: "remove @Wumpus#0000",
    requiredPermissions: [],
    checks: [{
        check: (message) => config.discord.commands.ticketCommandsEnabled,
        error: "Ticket commands are disabled."
    }, {
        check: (message) => message.channel.name.endsWith("-ticket"),
        error: "You can only run this command in tickets."
    }],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])?.user;

        if (!user) {
            message.channel.send("Please mention a user or provide a valid user ID.");
            return;
        }


        if (message.guild.members.cache.get(user.id).roles.cache.has(config.discord.roles.staff)) { // Do not remove this, There is no reason staff should be removed from tickets. Upgrade your ticket if you don't want a certain staff member from seeing it.
            message.channel.send("You can't remove staff from a ticket.");
            return;
        }

        await message.channel.updateOverwrite(user, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
        });

        message.channel.send(`${user} has been removed from this ticket.`);
    },
}