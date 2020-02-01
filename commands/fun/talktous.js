const { Command } = require('discord.js-commando');
const textToSpeech = require('@google-cloud/text-to-speech');
const { createReadStream } = require('../../lib/mutliStream');

const fs = require('fs');
const util = require('util');
// Creates a client
const TTSclient = new textToSpeech.TextToSpeechClient();


module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'talktous',
			group: 'fun',
			memberName: 'talktous',
			description: 'Talk in a voice chat!',
			args: [
				{
					key: 'messageToSpeak',
					prompt: 'What do you want me to say?',
					type: 'string',
				},
			],
		});
	}

	async run(message, { messageToSpeak }) {


		message.delete() // Secret!
		


		const connection = await message.member.voice.channel.join();
		// Construct the request
		const request = {
		  input: {text: messageToSpeak},
		  // Select the language and SSML voice gender (optional)
		  voice: {languageCode: 'de-DE', ssmlGender: 'MALE'},
		  // select the type of audio encoding
		  audioConfig: {audioEncoding: 'MP3'},
		};
	  
		// Performs the text-to-speech request
		// const [response] = await TTSclient.synthesizeSpeech(request);

		// const writeFile = util.promisify(fs.writeFile);
		// await writeFile('output.mp3', response.audioContent, 'binary');
		// console.log('Audio content written to file: output.mp3');	  

		// const dispatcher = connection.play('output.mp3', {

		// 	// Add some dispatcher options here!


		//   });	

		TTSclient.synthesizeSpeech(request)
			.then(([response]) => {
				let stream = createReadStream(response.audioContent);
				connection.play(stream);
			})

	  
		
		



	}
};
