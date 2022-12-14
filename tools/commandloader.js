function commandloader(path) {
  var fs = require("fs");
  var commands = {};
  var commandFiles = fs
    .readdirSync(path || "./commands")
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands[command.name] = command;
  }
  return commands;
}

exports.commandloader = commandloader;
