const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'setpresence',
			aliases: [],
			group: 'owneronly',
			memberName: 'setpresence',
			description: 'Set Tomato\'s presence data.',
      clientPermissions: ['ADMINISTRATOR'],
			args: [
				{
					key: 'presence',
					prompt: 'What do you want to set the bot\'s game presence to?',
					type: 'string',
				},
        {
          key: 'userStatus',
          prompt: 'Please set the bot\'s status. **online/idle/dnd/invisible**',
          type: 'string',
        },
			],
		});
	}

	run(message, { presence, userStatus }) {

    this.client.user.setPresence({
        game: {
            name: presence,
            type: 'PLAYING'
        },
        status: userStatus
    })




	}
};
