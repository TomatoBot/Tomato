const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bulkdelete',
			aliases: ['bulkdel', 'deletebulk'],
			group: 'moderation',
			memberName: 'bulkdelete',
			description: 'Delete multiple messages.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'numberOfMessages',
					prompt: 'How many messages do you want to delete?',
					type: 'integer',
				},
			],
		});
	}

	run(message, { numberOfMessages }) {

    message.channel.bulkDelete(numberOfMessages).then(() => {
  message.say(`Deleted ${numberOfMessages} messages.`).then(msg => msg.delete(3000));
});



	}
};
