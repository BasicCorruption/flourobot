// make a discord bot

require("dotenv").config();
const TOKEN = process.env.TOKEN;

const PREFIX = require("./config.json").prefix;

// require discord.js
const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on("ready", () => {
    console.log("Bot is ready and online!");
});

// run on message
client.on("messageCreate", (message) => {
    // check for bot
    if (message.author.bot) return;
    // make a ping command
    if (message.content.startsWith(PREFIX + "ping")) {
        message.channel.send("pong!");
    }
});

// login to discord with your app's token
client.login(TOKEN);
