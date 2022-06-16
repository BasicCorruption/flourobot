import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
	category: "Moderation",
	description: "Ban a user from the server.",

	permissions: ["BAN_MEMBERS"],

	slash: 'both',
	testOnly: true,

	guildOnly: true,

	minArgs: 2,
	expectedArgs: "<user> <reason>",
	expectedArgsTypes: ["USER", "STRING"],

	callback: ({ message, interaction, args }) => {
		const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember;
		if (!target) {
			return "Please mention a user to ban.";
		}
		if (!target.bannable) {
			return {
				custom: true,
				content: "I can't ban this user.",
				ephemeral: true,
			};
		}

		const reason = args.slice(2).join(" ");

		target.ban({
			reason: reason,
		});

		return {
			custom: true,
			content: `You banned <@${target.id}>`,
			ephemeral: true,
		};
	}
} as ICommand
