const { Client } = require("discord.js");
const chalk = require("chalk");
const path = require("node:path");
const fs = require("node:fs");

/**
 * @param {Client} client 
 */
const interactionLoader = (client) => {
    const interactionFiles = fs.readdirSync(path.join(__dirname, "../interactions"));

    for (const file of interactionFiles) {
        
    }
}

module.exports = interactionLoader;