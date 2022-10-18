module.exports = {
  name: "dice",
  description: "Rolls a dice!",
  help: "~dice",
  execute: function (message, args, client) {
    const { EmbedBuilder } = require("discord.js");
    const embed = new EmbedBuilder();
    let rand = Math.floor(Math.random() * 20) + 1;
    embed.setTitle("Dice!");
    embed.setDescription(`${message.author.username} has rolled a **${rand}**!`);
    embed.setColor("#FF0000");
    message.channel.send({ embeds: [embed] });
  }
};