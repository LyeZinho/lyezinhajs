module.exports = {
    name: "kill",
    description: "Kills a user!",
    execute: function (message, args, client) {
      const { EmbedBuilder } = require("discord.js");
      const embed = new EmbedBuilder();
      const fetch = new require("node-fetch");
      fetch("https://api.waifu.pics/sfw/kill")
        .then((res) => res.json())
        .then((json) => {
          embed.setTitle("Killed!");
          embed.setDescription(
            args[0] == null || args[0] == ""
              ? "You have been killed!"
              : `${message.author.username} has killed ${args[0]}!`
          );
          embed.setImage(json.url);
          embed.setColor("#FF0000");
          message.channel.send({ embeds: [embed] });
        });
    },
  };
  