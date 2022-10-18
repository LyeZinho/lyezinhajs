


module.exports = {
    name: 'train',
    description: 'Let me learn something new!',
    help: '~train <sentence>',
    execute: function(message, args, client){
        const l = require('../ai/learn');
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder()

        let raw = "";

        for (let i = 0; i < args.length; i++) {
            raw += args[i] + " ";
        }

        let sentence = raw;
        let tag = "";
        let response = "";

        embed.setTitle("Type the response");
        embed.setFooter("Type the response for i can learn.");
        embed.setColor("#FF0000");

        /*
        Ask user for the response then ask user for the tag

        then use the information for l.learn(tag, sentence, response)
        */

        message.channel.send({ embeds: [embed] }).then(() => {
            message.channel.awaitMessages(m => m.author.id === message.author.
                id, {
                    max: 1,
                    errors: ["time"],
                    time: 30000
                }).then(collected => {
                    response = collected.first().content;
                    // Get a random number of characters from the collected content
                    tag = response.substring(Math.floor(Math.random() * response.length), Math.floor(Math.random() * response.length) + 1);
                    l.learn(tag, sentence, response);
                    embed.setTitle("I've learned something new!");
                    embed.setFooter("Thanks for teaching me!");
                    embed.setColor("#FF0000");
                    message.channel.send({ embeds: [embed] })
                }).catch(() => {
                    message.channel.send("You didn't answer in time!");
                });
        });
    }
};