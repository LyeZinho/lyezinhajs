function creatTag(argsArray){
    let tag = argsArray.join(" ");
    tag = tag.replace(/[^a-zA-Z0-9]/g, "");
    let random = Math.floor(Math.random() * tag.length);
    tag = tag.substring(0, random);
    return tag;
}
const l = require('../ai/learn');~
l.learn("test", "test", "test");


function createSentence(argsArray){
    let sentence = argsArray.join(" ");
    return sentence;
}

module.exports = {
    name: 'train',
    description: 'Let me learn something new!',
    help: '~train <sentence>',
    execute: function(message, args, client){
        const l = require('../ai/learn');
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder()
        
        
        let raWsentence = createSentence(args);
        let raWtag = creatTag(args);
        let response = "";

        if(raWsentence == ""){
            message.channel.send("You need to give me something to learn!");
        }


    }
};