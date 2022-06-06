const { Client } = require("discord.js");
const chalk = require("chalk");
module.exports = {
    event: "ready",
    /**
     * 
     * @param {Client} client 
     */
    run: async (client) => {
        console.log(chalk.green("[READY]"), `${chalk.cyan(client.user.tag)} ${chalk.blue("Is Ready!")}`);
    }
}