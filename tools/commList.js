const commandloader = require('./commandloader.js');
const fs = require('fs');

function commList(){
    var commands = commandloader.commandloader('../commands');
    var commList = [];
    
    for (const command in commands) {
        commList.push({
            name: command,
            description: commands[command].description,
            help: commands[command].help
        });
    }
    return commList;
}


function commandsSave(data){
    fs.writeFile('./commands.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

commandsSave(commList());