const { Command } = require('discord.js-commando');
const request = require('request');
const { RichEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'xkcd',
			aliases: ['xkcdfetch'],
			group: 'fun',
			memberName: 'xkcd',
			description: 'Fetch the latest XKCD comic. Specify a comic number by adding a number as an argument. Type 0 for the latest one.',
			args: [
				{
					key: 'xkcdComicID',
					prompt: 'Pleace specify a comic ID.',
					type: 'integer',
				},
			],
		});
	}

	run(message, { xkcdComicID }) {

    request(`https://xkcd.com/${xkcdComicID}/info.0.json`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


  var parsedXKCDResponse = JSON.parse(body); // Parse the JSON output

  const exampleEmbed = new RichEmbed()
  	.setColor('#0099ff')
  	.setTitle('XKCD')
  	.setURL('https://discord.js.org/')
  	.setDescription(parsedXKCDResponse.alt)
  	.setImage(parsedXKCDResponse.img)
  	.setTimestamp()
  	.setFooter('All comics are created by Randall Monroe.', 'https://i.imgur.com/wSTFkRM.png');

  message.say(exampleEmbed);


});

	}
};
