//Dotenv
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: 3276799,
  presence: {
    status: "online",
    activities: [
      {
        name: "with the code",
        type: "PLAYING",
      },
    ],
  },
});
const imputbuilder = require("./tools/imputbuilder.js");
const cmdloader = require("./tools/commandloader.js");
const axios = require("axios");

let commands = cmdloader.commandloader();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers: ${client.guilds.cache.size}`);
  console.log(`Users: ${client.users.cache.size}`);
  console.log(`Channels: ${client.channels.cache.size}`);

  console.log("Commands loaded:");
  console.log(" ------------------");
  for (const command in commands) {
    console.log(` - ${command}`);
  }
  console.log(" ------------------");
});








client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(process.env.PREFIX)) {
    var command = imputbuilder.commandbuilder(message.content);
    if (command.command in commands) {
      commands[command.command].execute(message, command.arguments, client);
    }
  }
});


client.login(process.env.TOKEN);
