module.exports = {
    name: 'nasapic',
    description: 'Weasome pics from nasa!',
    help: '~nasapic',
    
    execute: async function(message, args, client){   
        const axios = require('axios');
        const { EmbedBuilder } = require('discord.js');
        const embed = new EmbedBuilder();
        //Env
        require("dotenv").config();

        //Get the api key
        let apiKey = process.env.NASA_API_KEY;

        //Get the url
        let url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

        //Get the data
        let response = await axios.get(url);

        //Set the embed
        embed.setTitle(response.data.title);
        embed.setColor("#FF0000");
        embed.setImage(response.data.url);
        embed.setFields({name: "Explanation", value: response.data.explanation});
        embed.setFooter({ text: "🌌 - " + response.data.copyright + " | " + response.data.date, iconURL: client.user.avatarURL() });

        //Send the embed
        message.channel.send({embeds: [embed]});
    }
};