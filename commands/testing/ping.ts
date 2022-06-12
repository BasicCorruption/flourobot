import { ICommand } from "wokcommands";

export default {
	category: 'Testing',
	description: "responds with 'pong'",

	slash: 'both',
	testOnly: true,

	callback: ({ }) => {
		return 'Pong!';
	}
} as ICommand
