const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			aliases: [],
			group: 'moderation',
			memberName: 'kick',
			description: 'Kick a user.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'memberToKick',
					prompt: 'Please mention the user you would like to kick.',
					type: 'member',
				},
        {
          key: 'kickReason',
          prompt: 'Please specify a reason to kick this user.',
          type: 'string',
        },
			],
		});
	}

	run(message, { memberToKick, kickReason }) {

    memberToKick.kick(kickReason)

		message.reply(`I have **kicked** ${memberToKick}. Kick reason: ${kickReason}.`);


	}
};
