import { Client } from "discord.js";

export default (client: Client) => { 
	const statusOptions = [
		"my new code for errors",
		"television",
		"Sid's YouTube videos",
	];
	let counter = 0;

	let interval = 5;
	const updateStatus = () => { 
		client.user?.setPresence({
			status: 'online',
			activities: [
				{
					name: statusOptions[counter],
					type: "WATCHING",
				}
			]
		});

		counter++;
		if (counter >= statusOptions.length) counter = 0;

		setTimeout(updateStatus, 1000 * interval);
	};
	updateStatus();
}

export const config = {
	dbName: "STATUS_CHANGER",
	displayName: "Status Changer",
}
