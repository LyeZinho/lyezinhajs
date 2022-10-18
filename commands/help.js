module.exports = {
    name: "help",
    description: "Help!",
    help: "~help",
    execute: function (message, args, client) {
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder();
        
        embed.setTitle("Commands");
        embed.setDescription("Here are all the commands!");
        embed.setColor("#FF0000");
    }
}
