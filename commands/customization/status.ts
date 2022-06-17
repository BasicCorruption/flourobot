import { ICommand } from "wokcommands";

export default {
	category: "Customization",
	description: "Change the status of the bot.",

	minArgs: 1,
	expectedArgs: "<status>",
	expectedArgsTypes: ["STRING"],

	slash: 'both',
	testOnly: true,

	ownerOnly: true,

	callback: ({ client, text }) => {
		client.user?.setPresence({
			status: "idle",
			activities: [
				{
					name: text,
					type: "PLAYING",
				}
			]
		});

		return {
			custom: true,
			content: "Status changed!",
			ephemeral: true,
		};
	}
} as ICommand
