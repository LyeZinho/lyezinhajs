


module.exports = {
    name: 'train',
    description: 'Let me learn something new!',
    help: '~train <sentence>',
    execute: function(message, args, client){
        const l = require('../ai/learn');
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder()

        let raWsentence = "";
        let raWtag = "";
        let response = "";

        embed.setTitle("Training")
        embed.setColor(0x00ff00)
        embed.setDescription(`What is the response for this sencence?`)
        // embed.addFields(
        //     { name: "Sentence: ", value: tag, inline: true },
        //     { name: "Tag: ", value: tag, inline: true }
        // )

        message.channel.send({ embeds: [embed] }).then((msg) => {
        //Send the embed and wait for the message repy from the user
        //Then use for train
        const filter = m => m.author.id === message.author.id;
        const collector = msg.channel.createMessageCollector(filter, { time: 60000 });

        collector.on('collect', async msg => {
            response = await msg.content;
            msg.delete();
            collector.stop();
        });

        collector.on('end', async () => {
                embed.setTitle("Tank you!")
                embed.setColor(0x00ff00)
                embed.setDescription(`I have learned something new!`)
                message.channel.send({ embeds: [embed] })
                l.learn(sentence, tag, response);
            });
        });

        
    }
};