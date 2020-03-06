const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dmuser',
			aliases: [],
			group: 'owneronly',
			memberName: 'dmuser',
			description: 'Send a DM to a user',
      args: [
        {
          key: 'messageReciever',
          prompt: 'Who do you want to DM?',
          type: 'user',
        },
        {
            key: 'messagetoSend',
            prompt: 'What do you want to send to the user?',
            type: 'string',
          },
      ],
		});
	}

	run(message, { messageReciever, messagetoSend }) {

      messageReciever.send(messagetoSend)

	}
};