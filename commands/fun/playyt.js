const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'playyt',
			group: 'fun',
			memberName: 'playyt',
			description: 'Play a Youtube video in a vc.',
			args: [
				{
					key: 'youtubeLink',
					prompt: 'Please provide the link to the video you want to play.',
					type: 'string',
				},
			],
		});
	}

	async run(message, { youtubeLink }) {

        const connection = await message.member.voice.channel.join();
        
        const stream = ytdl(youtubeLink, { filter: 'audioonly' });

        const dispatcher = connection.play(stream);

        dispatcher.on('end', () => connection.leave());

	}
};
