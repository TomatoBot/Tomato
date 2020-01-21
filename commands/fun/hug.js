const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hug',
			group: 'fun',
			memberName: 'hug',
			description: 'Hug someone!',
			args: [
				{
					key: 'memberToHug',
					prompt: 'Who would you like to hug?',
					type: 'member',
				},
			],
		});
	}

	run(message, { memberToHug }) {
		return message.say(`${memberToHug}, you have been hugged by ${message.author}! :heart:`);
	}
};
