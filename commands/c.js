module.exports = {
    name: 'c',
    description: 'Chat with me OwO!',
    help: '~c <text>',
    
    execute: function(message, args, client){   
        var rawText = "";
        //ai path: ../ai/main.js
        //ai function: chat(imput)
        const ai = require('../ai/main');

        for (var i = 1; i < args.length; i++) {
            rawText += " " + args[i];
        }
        
        ai.chat(rawText).then(function(response){
            if(response == "I don't know what to say."){
                message.channel.send(response)
            }
            else{
                message.channel.send(response)
            }
        });
    }
};