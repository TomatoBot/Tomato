const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const winston = require('winston');
const Discord = require('discord.js');
const config = require('./config.json');
const discordUtils = require('./discordUtils.js');

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


	client.on("ready", () => logger.log('Client is ready.'));

	// client.on("message", message => {}); no current use
	client.on('debug', m => logger.log('debug', m));
	client.on('warn', m => logger.log('warn', m));
	client.on('error', m => discordUtils.discordDevLogSend(client, config.devLogChannelId, error));
	process.on('unhandledRejection', error => discordUtils.discordDevLogSend(client, config.devLogChannelId, error));





function discordDevLogSend(logMessage) {

	let discordDevLogChannel = client.channels.get('665000776279785513');

	const errorReportEmbed = new Discord.MessageEmbed()
		.setColor('#e63232')
		.setTitle('An error has occoured.')
		.setAuthor('Tomato', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('An error has occoured in Tomato. Diagnostics are below.')
		.setThumbnail('https://i.imgur.com/wSTFkRM.png')
		.addField('Error Type', `${logMessage.name}: ${logMessage.message}`)
		.addBlankField()
		.addField('Stacktrace', `${logMessage.stack}`)
		.addField('Server ID of error origin', 'discordDevLogChannel', true)
		.addField('Server ID of error origin', 'Some value here', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

	discordDevLogChannel.send(errorReportEmbed);

}



client.login(config.token);
