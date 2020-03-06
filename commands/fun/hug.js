const { Command } = require('discord.js-commando');
const request = require('request');
const Discord = require('discord.js');


module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hug',
			group: 'fun',
			memberName: 'hug',
			description: 'Hug someone!',
			args: [
				{
					key: 'memberToHug',
					prompt: 'Who would you like to hug?',
					type: 'user',
				},
			],
		});
	}

	run(message, { memberToHug }) {

		request('https://some-random-api.ml/animu/hug', { json: true }, (err, res, body) => {

			const hugEmbed = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username} hugged ${memberToHug.username}! ❤️`)
				.setImage(body.link)
				.setFooter('tomato likes anime lol');

			message.say(hugEmbed);


		});





	}
};
