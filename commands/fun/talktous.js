const { Command } = require('discord.js-commando');
const nodtts =  require('nodtts');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'talktous',
			group: 'fun',
			memberName: 'talktous',
			description: 'Talk in a voice chat!',
			args: [
				{
					key: 'messageToSpeak',
					prompt: 'What do you want me to say?',
					type: 'string',
				},
			],
		});
	}

	async run(message, { messageToSpeak }) {

		const usersCurrentChannel = message.member.voice.channel;

		console.log(usersCurrentChannel)

	  function play(usersCurrentChannel) {
			usersCurrentChannel.join()
		connection.play('audio.mp3');
		}



	}
};
