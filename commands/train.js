function creatTag(argsArray){
    let tag = argsArray.join(" ");
    tag = tag.replace(/[^a-zA-Z0-9]/g, "");
    let random = Math.floor(Math.random() * tag.length);
    tag = tag.substring(0, random);
    return tag;
}

function createSentence(argsArray){
    let sentence = argsArray.join(" ");
    return sentence;
}

function invalidString(string){
    if(string == null || string == undefined || string == ""){
        return true;
    }
    return false;
}

module.exports = {
    name: 'train',
    description: 'Let me learn something new!',
    help: '~train <sentence>',
    execute: function(message, args, client){
        const l = require('../ai/learn');
        const utils = require('../ai/utils');
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder()
        
        
        let raWsentence = createSentence(args);
        let raWtag = creatTag(args);
        let response = "";

        if ((raWsentence == "" || raWsentence == null) || (raWtag == "" || raWtag == null)){
            embed.setTitle("Error!");
            embed.setDescription("You need to provide a sentence!");
            embed.setColor("#FF0000");
            message.channel.send({ embeds: [embed] });
        }
        else{
            message.channel.send("What should I respond with?").then((msg) => {
                const filter = m => m.author.id === message.author.id;
                const collector = message.channel.createMessageCollector({ filter, time: 10000 });
                collector.on('collect', m => {
                    response = m.content;
                    collector.stop();
                });

                collector.on('end', collected => {
                    let info = null;
                    if(invalidString(response) || invalidString(raWtag) || invalidString(raWsentence)){
                        embed.setTitle("Error!");
                        embed.setDescription("You need to provide a response!");
                        embed.setColor("#FF0000");
                        message.channel.send({ embeds: [embed] });
                    }
                    else{
                        l.learn(raWtag, raWsentence, response)
                        .then((res) => {
                            info = utils.getIterations();
                            embed.setTitle("Success!");
                            embed.setDescription(`I have learned **${raWsentence}** as **${raWtag}**!\n
                            I will respond with **${response}**\n
                            I have learned in **${info.time}** seconds!\n`+
                            "`{"+'"iteractions": '+ info.iterations + ', "time": ' + info.time + ', "error": ' + info.error + "}`"); 
                            embed.setColor("#00FF00");
                            message.channel.send({ embeds: [embed] });
                        })
                        .catch((err) => {
                            embed.setTitle("Error!");
                            embed.setDescription("Something went wrong!");
                            embed.setColor("#FF0000");
                            message.channel.send({ embeds: [embed] });
                        });
                    }
                });
            });
        }
    }
};