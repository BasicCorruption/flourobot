import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import 'dotenv/config';
import mongoose from 'mongoose';

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
	]
});

client.on("ready", async () => {
	await mongoose.connect('mongodb://localhost:27017/discordbots', {});

	console.log("Logged in!");

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, "commands"),
		typeScript: true,
		testServers: '926898971522256937',
	});
});

client.login(process.env.TOKEN);
