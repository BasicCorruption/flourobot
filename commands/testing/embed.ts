import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
	category: 'Testing',
	description: 'Sends an embed',

	permissions: ['ADMINISTRATOR'],

	callback: async ({ message, text }) => {

		const embed = new MessageEmbed()
			.setTitle("Flourobot v1.0 embed command")
			.setDescription(text || "There was no text provided")
			.setColor("#9955ff")
			.setAuthor(message.author.username)
			.setThumbnail(message.author.avatarURL()?.toString() || "")

		return embed;
	}
} as ICommand
