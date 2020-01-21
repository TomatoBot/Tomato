const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			aliases: [],
			group: 'moderation',
			memberName: 'ban',
			description: 'Ban a user.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'memberToBan',
					prompt: 'Please mention the user you would like to ban.',
					type: 'member',
				},
        {
          key: 'banReason',
          prompt: 'Please specify a reason to kick this user.',
          type: 'string',
        },
			],
		});
	}

	run(message, { memberToBan, banReason }) {

    memberToBan.ban(banReason)

    message.reply(`I have **banned** ${memberToBan}. Ban reason: ${banReason}.`);




	}
};
