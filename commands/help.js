module.exports = {
    name: "help",
    description: "Help!",
    help: "~help",
    execute: function (message, args, client) {
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder();
        
        embed.setTitle("Here are all the commands!");
        embed.setURL('https://discord.js.org/')
        embed.setImage('https://lyezinha.vercel.app/content/otama-art.png')
        embed.setColor("#FF0000");

        message.channel.send({ embeds: [embed] });
    }
}
