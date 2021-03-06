const Discord = require('discord.js');

module.exports = {

  discordDevLogSend: function(client, channelId, logMessage) {
  	let channel = client.channels.get(channelId);

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

  	channel.send(errorReportEmbed);
  }
};
