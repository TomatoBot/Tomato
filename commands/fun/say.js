const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: ['parrot', 'copy'],
			group: 'fun',
			memberName: 'say',
			description: 'Replies with the text you provide.',
			args: [
				{
					key: 'messageToSay',
					prompt: 'What text would you like the bot to say?',
					type: 'string',
				},
			],
		});
	}

	run(message, { messageToSay }) {

		message.say(messageToSay);

		message.delete()

	}
};
