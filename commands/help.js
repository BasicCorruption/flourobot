// import discord.js
const Discord = require("discord.js");

module.exports = {
    name: "help",
    description:
        "List all available commands or info about a specific command.",
    execute(message, args) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Help")
                .setDescription("A list of all available commands.")
        );
    },
};
