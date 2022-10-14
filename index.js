//Dotenv
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: 3276799,
    presence: {
        status: 'online',
        activities: [{
            name: 'with the code',
            type: 'PLAYING'
        }]
    }
});
import imputbuilder from './tools/imputbuilder.js';


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply('Pong!');
    }
});


client.login(process.env.TOKEN);