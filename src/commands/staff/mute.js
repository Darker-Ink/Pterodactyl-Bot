const { Client, Message, MessageEmbed } = require("discord.js");
const ms = require("ms");
const config = require("../../config.json")
module.exports = {
    name: "mute",
    description: "Mute someone when they break a rule",
    usage: "mute <@user> <time> <reason>",
    example: "mute @Wumpus#0000 1d Spamming the chat",
    requiredPermissions: [],
    checks: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {

        if (!message.member.roles.cache.has(config.discord.roles.staff)) {
            return message.reply(`Sorry, You do not have the required roles to run this command!`)
        }

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const time = ms(args?.[1]) || ms("5m");
        const reason = args.slice(2).join(" ") || "unspecified";

        if (!user) return message.reply("Please mention a user to mute.");
        if (time > ms("28d")) return message.reply("You can't mute someone for more than 28 days!");
        if (time < ms("5m")) return message.reply("You can't mute someone for less than 5 minutes.");

        if (message.guild.members.cache.get(user.id).roles.cache.has(config.discord.roles.staff)) {
            return message.reply("You can't mute a staff member!");
        }

        if (user.id == message.author.id) {
            return message.reply("You can't mute yourself!");
        }

        message.guild.members.cache.get(user.id).timeout(time, reason).catch(err => {
            console.error(err);
            return message.reply("I was unable to mute that user.");
        })

        const embed = new MessageEmbed()
            .setTitle(`${user.username} has been muted`)
            .setDescription(`Reason: ${reason}`)
            .addField("Time", `${ms(time, { long: true })} (<t:${Math.round((Date.now() + time) / 1000)}:F>)`)
            .addField("Moderator", `${message.author.tag} (${message.author.id})`)
            .setColor("BLUE")
            .setTimestamp()

        const modchan = message.guild.channels.cache.get(config.discord.channels.moderationLogs);

        if (modchan) {
            modchan.send({ embeds: [embed] }).catch(err => {
                console.log(`Error sending mute to logs channel: ${err}`)
            })
        }

        message.reply(`${user.username} has been muted for ${ms(time, { long: true })} (Will Be UnMuted at <t:${Math.round((Date.now() + time) / 1000)}:F>)`);
    },
}