const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request')

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'catpic',
			aliases: ['randomcat'],
			group: 'images',
			memberName: 'catpic',
			description: 'Meow! 🐈',
		});
	}

	run(message, {}) {

    request(`https://api.thecatapi.com/v1/images/search`, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


    const parsedCatPicResponse = JSON.parse(body); // Parse the JSON output

		const catPicEmbed = new Discord.MessageEmbed()
		.setTitle('Meow!')
		.setImage(parsedCatPicResponse[0].url);

		message.channel.send(catPicEmbed);



    });


	}
};
