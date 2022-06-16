import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
	category: 'Testing',
	description: 'Sends an embed but with raw JSON data',

	permissions: ['ADMINISTRATOR'],

	callback: async ({ message, text }) => {
		const json = JSON.parse(text);

		const embed = new MessageEmbed(json);

		return embed;
	}
} as ICommand
