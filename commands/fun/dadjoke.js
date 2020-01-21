const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request')

var options = {
url: 'https://icanhazdadjoke.com/',
headers: {
'Accept': 'application/json'
}
};



module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dadjoke',
			group: 'fun',
			memberName: 'dadjoke',
			description: 'Get a dad joke. :P',
		});
	}

	run(message, {}) {


function callback(error, response, body) {

    var paredDadJokeResponse = JSON.parse(body);

    message.say(paredDadJokeResponse.joke)

}

request(options, callback);



};


	}
