

module.exports = {
    name: 'megumin',
    description: 'Explosion!',
    help: '~megumin <user>',
    execute: function(message, args, client){
        const { EmbedBuilder } = require('discord.js');
        const embed = new EmbedBuilder();
        embed.setTitle('EXPLOSION!');
        embed.setDescription(
            args[0] == null || args[0] == '' ? 'EXPLOSION!' : `${message.author.username} has exploded with ${args[0]}!`
        );
        embed.setImage('https://media.tenor.com/oWn3FXd8w1cAAAAC/megumin.gif');
        embed.setColor('#FF0000');
        message.channel.send({ embeds: [embed] });
    }
};