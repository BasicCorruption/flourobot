import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
	]
});

client.on("ready", () => {
	console.log("Logged in!");

	const guildId = '926898971522256937';
	const guild = client.guilds.cache.get(guildId);
	let commands;

	if (guild) {
		commands = guild.commands;
	} else {
		commands = client.application?.commands;
	}

	commands?.create({
		name: 'ping',
		description: 'Pong!',
	});
	commands?.create({
		name: 'add',
		description: 'Add two number',
		options: [
			{
				name: "num1",
				description: "First number",
				required: true,
				type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
			},
			{
				name: "num2",
				description: "Second number",
				required: true,
				type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
			}
		]
	});
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) {
		return;
	}

	const { commandName, options } = interaction;

	switch (commandName) {
		case "ping":
			interaction.reply({
				content: 'Pong!',
				ephemeral: true,
			});
			break;
		case "add":
			const num1 = options.getNumber("num1")!;
			const num2 = options.getNumber("num2")!;

			interaction.reply({
				content: `${num1} + ${num2} = ${num1 + num2}`,
				ephemeral: true,
			});
			break;
	}
})

client.login(process.env.TOKEN);
