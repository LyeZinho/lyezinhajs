module.exports = {
  name: "pat",
  description: "Pats a user!",
  help: "~pat <user>",
  execute: function (message, args, client) {
    const { EmbedBuilder } = require("discord.js");
    const embed = new EmbedBuilder();
    const fetch = new require("node-fetch");
    fetch("https://api.waifu.pics/sfw/pat")
      .then((res) => res.json())
      .then((json) => {
        embed.setTitle("Pat!");
        embed.setDescription(
          args[0] == null || args[0] == ""
            ? "You have been patted!"
            : `${message.author.username} has patted ${args[0]}!`
        );
        embed.setImage(json.url);
        embed.setColor("#FF0000");
        message.channel.send({ embeds: [embed] });
      });
  },
};
