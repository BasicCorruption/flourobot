import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
	category: "Moderation",
	description: "Kick a user from the server.",

	permissions: ["KICK_MEMBERS"],

	slash: 'both',
	testOnly: true,

	guildOnly: true,

	minArgs: 2,
	expectedArgs: "<user> <reason>",
	expectedArgsTypes: ["USER", "STRING"],

	callback: ({ message, interaction, args }) => {
		const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember;
		if (!target) {
			return "Please mention a user to kick.";
		}
		if (!target.kickable) {
			return {
				custom: true,
				content: "I can't kick this user.",
				ephemeral: true,
			};
		}

		args.shift();
		const reason = args.join(' ');

		target.kick(reason);

		return {
			custom: true,
			content: `You kicked <@${target.id}>`,
			ephemeral: true,
		};
	}
} as ICommand
