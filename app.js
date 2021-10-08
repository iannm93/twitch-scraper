require("dotenv").config();
const request = require('request');


const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'ianm93__',
		password: process.env.CHAT_TOKEN
	},
	channels: [ 'ianm93__']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if(self) return;
   if (message === "test"){

    console.log(channel)
   
    }
	// Ignore echoed messages.
console.log(channel, tags, message, self)
});