module.exports = {
    name: "hug",
    description: "Huggs user!",
    execute: function (message, args, client) {
      const { EmbedBuilder } = require("discord.js");
      const embed = new EmbedBuilder();
      const fetch = new require("node-fetch");
      fetch("https://api.waifu.pics/sfw/hug")
        .then((res) => res.json())
        .then((json) => {
          embed.setTitle("Hug!");
          embed.setDescription(
            args[0] == null || args[0] == ""
              ? "You received a hug!"
              : `${message.author.username} has hugged ${args[0]}!`
          );
          embed.setImage(json.url);
          embed.setColor("#FF0000");
          message.channel.send({ embeds: [embed] });
        });
    },
  };
  