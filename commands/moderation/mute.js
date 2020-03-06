const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mute',
			aliases: [],
			group: 'moderation',
			memberName: 'mute',
			description: 'Mute a user.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'memberToMute',
					prompt: 'Please mention the user you would like to mute.',
					type: 'member',
				},
        {
          key: 'muteReason',
          prompt: 'Please specify a reason to mute this user.',
          type: 'string',
        },
			],
		});
	}

	run(message, { memberToMute, muteReason }) {

    memberToMute.setMute(true, muteReason)

		message.reply(`I have **muted** ${memberToMute}. Mute reason: ${muteReason}.`);


	}
};
