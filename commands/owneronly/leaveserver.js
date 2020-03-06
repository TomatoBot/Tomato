const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'leaveserver',
			aliases: ['leavethisserver', 'lts'],
			group: 'owneronly',
			memberName: 'leaveserver',
			description: 'Leave the server that the command was sent in.',
		});
	}

	run(message, {}) {

    message.say('Leaving server. Goodbye! :wave:')

    message.guild.leave()

	}
};
