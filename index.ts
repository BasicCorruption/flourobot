import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
	]
});

client.on("ready", async () => {

	console.log("Logged in!");

	// await mongoose.connect(`mongodb://${process.env.MONGO_URI}/${process.env.MONGO_DB}` || '', {
	// 	keepAlive: true,
	// });

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, "commands"),
		typeScript: true,
		testServers: '926898971522256937',
		mongoUri: `mongodb://${process.env.MONGO_URI}/${process.env.MONGO_DB}` || '',
	});
});

client.login(process.env.TOKEN);
