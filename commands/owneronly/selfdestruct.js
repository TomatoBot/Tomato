const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'selfdestruct',
			aliases: ['sd', 'kamikazi'],
			group: 'owneronly',
			memberName: 'selfdestruct',
			description: 'Leave the server that the command was sent in.',
      args: [
        {
          key: 'selfdestructConfirmation',
          prompt: 'You are about to unload Discord.JS. This will make Tomato useless until a manual reset is done. Are you sure you want to do this? ***yes/no***',
          type: 'string',
          oneOf: ['yes', 'no'],
        },
      ],
		});
	}

	run(message, { selfdestructConfirmation }) {

      if(selfdestructConfirmation === 'yes') {

        message.say('Done. Tomato will require a manual reset to work properly again.')

        this.client.destroy()

      } else {

        message.say('Self destruct aborted.')


      }

	}
};
