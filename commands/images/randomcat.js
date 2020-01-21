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


    var parsedCatPicResponse = JSON.parse(body); // Parse the JSON output

    console.log(parsedCatPicResponse)


    const catPicAttachment = new Discord.Attachment(parsedCatPicResponse[0].url);
    // Send the attachment in the message channel
    message.say(catPicAttachment);



    });


	}
};
