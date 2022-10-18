


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

        embed.setTitle("Type the rs");
        embed.setFooter("Type cancel to cancel the train! (1/3)");
        embed.setColor("#FF0000");

        /*
        Ask user for the response then ask user for the tag

        then use the information for l.learn(tag, sentence, response)
        */

        message.channel.send({ embeds: [embed] }).then(async function (msg) {
            const filter = m => m.author.id === message.author.id;
            const collector = msg.channel.createMessageCollector(filter, { time: 60 * 1000
            });

            collector.on('collect', async msg => {
                if (msg.content.toLowerCase() === "cancel") {
                    collector.stop();
                    embed.setTitle("Training cancelled");
                    embed.setFooter("Training cancelled :(");
                    msg.channel.send({ embeds: [embed] });
                }
            });

            collector.on('end', collected => {
                if (collected.size > 0 || collected.content != "cancel") {
                    response = collected.first().content;
                    embed.setTitle("Type the tag");
                    embed.setFooter("Type cancel to cancel the train! (1/2)");
                    embed.setColor("#FF0000");
                    tag = collected.first().content;
                    msg.channel.send({ embeds: [embed] })
                        .then(async function (msg) {
                            const filter = m => m.author.id === message.author.id;
                            const collector = msg.channel.createMessageCollector(filter, { time: 60 * 1000
                            });

                            collector.on('collect', async msg => {
                                if (msg.content.toLowerCase() === "cancel") {
                                    collector.stop();
                                    embed.setTitle("Training cancelled");
                                    embed.setFooter("Training cancelled :(");
                                    msg.channel.send({ embeds: [embed] });
                                }
                            });

                            collector.on('end', collected => {
                                if (collected.size > 0 || collected.content!= "cancel") {
                                    embed.setTitle("Type the ");
                                    embed.setFooter("Type cancel to cancel the train! (3/3)");
                                    embed.setColor("#FF0000");
                                    response = collected.first().content;
                                    msg.channel.send({ embeds: [embed] }).then(
                                        async function (msg) {
                                            embed.setTitle("Training Completed");
                                            embed.setFooter("Training Completed :)");
                                            embed.setColor("#FF0000");
                                            msg.channel.send({ embeds: [embed] })
                                        }
                                    );
                                    l.learn(tag, sentence, response);
                                }
                            });
                        })
                }
            });
        });
    }
};