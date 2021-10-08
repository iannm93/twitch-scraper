require("dotenv").config();
const request = require('request');


const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'ianm93__',
		password: process.env.CHAT_TOKEN
	},
	channels: [ 'ianm93__']
});

const tmi = require('tmi.js');