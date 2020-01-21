const { Command } = require('discord.js-commando');
const Discord = require('discord.js');


module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'muffin',
			aliases: [],
			group: 'fun',
			memberName: 'muffin',
			description: 'It\'s muffin time!',

		});
	}

	run(message, { text }) {

		const attachment = new Discord.Attachment('https://thestayathomechef.com/wp-content/uploads/2018/07/Chocolate-Chip-Muffin-Recipe.jpg');
		// Send the attachment in the message channel
		message.say(attachment);


	}
};
