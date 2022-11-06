const { AutoModerationRuleKeywordPresetType } = require('discord.js');

function makeImput(argArr){
    let result = "";
    for(let i = 0; i < argArr.length; i++){
        result += argArr[i] + " ";
    }
    return result;
}

module.exports = {
    name: 'c',
    description: 'Chat with me OwO!',
    help: '~c <text>',
    
    execute: async function(message, args, client){   
        //ai path: ../ai/main.js
        //ai function: chat(imput)
        const ai = require('../ai/main');
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder();

        //Get the imput
        let rawText = makeImput(args)

        //Return promise and resolve
        try{
            ai.chat(rawText).then((res) => {
                message.channel.send(res);
            })
        }
        catch(err){
            embed.setTitle("Error");
            embed.setDescription("Something went wrong!");
            embed.setColor("#FF0000");
            message.channel.send({ embeds: [embed] });
        }
    }
};