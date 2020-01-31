const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const winston = require('winston');
const Discord = require('discord.js');
const config = require('./config.json');
const discordUtils = require('./discordUtils.js');

const googleTranslate = require('google-translate')(config.googleCloudAPIKey);

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

const client = new CommandoClient({
	commandPrefix: config.prefix,
	owner: '523928057350717448',
	invite: 'https://discord.gg/hgba83n',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['moderation', 'Moderation Commands'],
    ['fun', 'Fun Commands! :)'],
		['images', 'Image related commands'],
		['owneronly', 'These commands can only be used by the bot owners.'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));


	client.on("ready", () => {

		client.user.setActivity(`over ${client.guilds.size} guilds`, { type: 'WATCHING' });


	});

	/* client.on("message", message => {

		if(message.author.id === client.user.id) return; // THis is here to prevent the bot from triggering itself.




			googleTranslate.translate(message.content, 'en', function(err, translation) {

				if(translation.detectedSourceLanguage === 'en') return; // prevent the bot from triggering on english

				message.channel.send(`Translated from ${translation.detectedSourceLanguage}:
				
				>>> ${translation.translatedText}
				
				
				`)


			  });
			

	});
	*/
	client.on('debug', m => logger.log('debug', m));
	client.on('warn', m => logger.log('warn', m));
	client.on('error', m => discordUtils.discordDevLogSend(client, config.devLogChannelId, error));
	process.on('unhandledRejection', error => discordUtils.discordDevLogSend(client, config.devLogChannelId, error));







	client.on('guildCreate', newGuild => {

	const joinedGuildSystemChannel = newGuild.systemChannel;

	const tomatoWelcomingEmbed = new Discord.MessageEmbed()

		.setColor('#0099ff')
		.setTitle('Welcome!')
		.setURL('https://example.com')
		.setAuthor('Tomato', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription(`Hello there! Thank you for adding Tomato to ${newGuild.name}!\n\nTo get started, visit the dashboard at https://example.com.\nYou can also get a list of commands with #help.\nThank you, we hope you enjoy using Tomato! :)`)
		.setTimestamp()
		.setFooter('Tomato', 'https://i.imgur.com/wSTFkRM.png');

		joinedGuildSystemChannel.send(tomatoWelcomingEmbed);


	});


client.login(config.token);
