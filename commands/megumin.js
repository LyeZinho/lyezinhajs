

module.exports = {
    name: 'megumin',
    description: 'Explosion!',
    execute: function(message, args, client){
        const { EmbedBuilder } = require('discord.js');
        const embed = new EmbedBuilder();
        embed.setTitle('EXPLOSION!');
        embed.setDescription(`${message.author.username} has exploded with ${args[0]}!`);
        embed.setImage('https://media.tenor.com/oWn3FXd8w1cAAAAC/megumin.gif');
        embed.setColor('#FF0000');
        message.channel.send({ embeds: [embed] });
    }
};