module.exports = {
    name: 't',
    description: 'Talk with me OwO!',
    help: '~t <text>',
    
    execute: function(message, args, client){   
        var rawText = "";
        //ai path: ../ai/main.js
        //ai function: chat(imput)
        let ai = require('../ai/main')


        for (var i = 1; i < args.length; i++) {
            rawText += " " + args[i];
        }
        
        let response = ai.chat(rawText);
        
        message.channel.send(response);
    }
};