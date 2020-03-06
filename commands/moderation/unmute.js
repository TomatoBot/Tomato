const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unmute',
			aliases: [],
			group: 'moderation',
			memberName: 'unmute',
			description: 'Unmute a user.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'membertoUnmute',
					prompt: 'Please mention the user you would like to mute.',
					type: 'member',
				},
        {
          key: 'unmuteReason',
          prompt: 'Please specify a reason to unmute this user.',
          type: 'string',
        },
			],
		});
	}

	run(message, { membertoUnmute, unmuteReason }) {

    membertoUnmute.setMute(false, unmuteReason)

		message.reply(`I have **unmuted** ${membertoUnmute}. Kick reason: ${unmuteReason}.`);


	}
};
