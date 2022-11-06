//https://avatars.dicebear.com/api/miniavs/13123123.svg

function getAvatarUrlSvg(seed){
    let url = "https://avatars.dicebear.com/api/miniavs/" + seed + ".svg";
    return url;
}

function getAvatarUrlPng(seed){
    let url = "https://avatars.dicebear.com/api/miniavs/" + seed + ".png";
    return url;
}

module.exports = {
    name: 'avatar',
    description: 'Generate a random avatar!',
    help: '~avatar <seed>',
    execute: function(message, args, client){
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder();

        embed.setTitle("Avatar");
        embed.setColor("#FF0000");

        embed.setImage(getAvatarUrlPng(args[0]));
        embed.setFields({name: "Svg avatar", value: getAvatarUrlSvg(args[0])});

        message.channel.send({embeds: [embed]});
    }
};