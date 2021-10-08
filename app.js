require("dotenv").config();
const request = require('request');
const tmi = require('tmi.js');
var ComfyJS = require("comfy.js");


// comfy js init
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command === "testing" ) {
      ComfyJS.Say( "replying to !test" );
    }
  }
ComfyJS.Init(process.env.USERNAME_ID, process.env.CHAT_TOKEN);
// oauth for comfy.js

// tmi init
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'ianm93__',
		password: process.env.CHAT_TOKEN
	},
	channels: [ 'ianm93__']
});

client.connect();
//on message is specific chat
client.on('message', (channel, tags, message, self) => {
    if(self) return;
   if (message === "test"){
// log channel info
    console.log(channel)
   
    }
	// Ignore echoed messages.
// console.log(channel, tags, message, self)
});