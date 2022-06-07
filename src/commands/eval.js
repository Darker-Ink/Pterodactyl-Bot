const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "eval",
    description: "Get the stats about the bot",
    usage: "stats",
    example: "stats",
    requiredPermissions: [],
    checks: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }

            const embed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Eval")
                .addField(`Output`, `\`\`\`js\n${evaled}\`\`\``)
                .setDescription(`\`\`\`js\n${code}\n\`\`\``)
                .setFooter({ text: `Evaled by ${message.author.tag}` });
            try {
                await message.channel.send({ embeds: [embed] });
            } catch (e) {}
        } catch (e) {
            const embed = new MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Eval")
                .setDescription(`\`\`\`\n${e}\n\`\`\``)
                .setFooter({ text: `Evaled by ${message.author.tag}` });

            message.channel.send({ embeds: [embed] });
        }
    },
}