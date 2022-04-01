// import discord.js
const Discord = require("discord.js");

module.exports = {
    name: "help",
    description:
        "List all available commands or info about a specific command.",
    execute(message, args) {
        // message.channel.send(
        //     `**Help**\n\n--| Commands |--\n\nHELP - ${
        //         require("./help").description
        //     }\nPING - ${require("./ping").description}`
        // );

        const hembed = new Discord.MessageEmbed({
            title: "Help",
            description:
                "List all available commands or info about a specific command.",
            color: 0x00ff00,
            fields: [
                {
                    name: "Commands",
                    value: [
                        "HELP | " + require("./help").description,
                        "PING | " + require("./ping").description,
                    ],
                },
            ],
        });

        message.channel.send({ embeds: [hembed] });
    },
};
