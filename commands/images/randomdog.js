const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request')

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dogpic',
			aliases: ['randomdog'],
			group: 'images',
			memberName: 'dogpic',
			description: 'Bark! 🦴',
		});
	}

	run(message, {}) {

    request(`https://dog.ceo/api/breeds/image/random`, function (error, response, body) {
	    console.log('error:', error); // Print the error if one occurred
	    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


	    var parsedDogPicResponse = JSON.parse(body); // Parse the JSON output


			const dogPicEmbed = new Discord.MessageEmbed()
			.setTitle('Woof!')
			.setImage(parsedDogPicResponse.message);

			message.channel.send(dogPicEmbed);
	  });


	}
};
