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

        //Get the imput
        let rawText = makeImput(args)

        //Return promise and resolve
        ai.chat(rawText).then((res) => {
            message.channel.send(res);
        })
    }
};