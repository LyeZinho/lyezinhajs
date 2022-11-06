//Replace all whitespaces with %20
function cleanSearch(searchStr) {
    return searchStr.replace(/\s/g, '%20');
}

async function searchDuckGo(searchStr) {
    let url = 'https://api.duckduckgo.com/?q=' + cleanSearch(searchStr) + '&format=json&pretty=1&no_html=1&skip_disambig=1';
    const axios = require("axios");
    let response = await axios.get(url);
    return response.data;    
}

function argsJoiner(args) {
    let str = "";
    for (let i = 0; i < args.length; i++) {
        str += args[i] + " ";
    }
    return str;
}

module.exports = {
    name: 'duckduckgo',
    description: 'Make a serch in duckduckgo.',
    help: '~duckduckgo <search>',
    execute: function(message, args, client){
        /*
        Text: Abstract
        Image: duckgourl + Image
        */
        const { EmbedBuilder } = require("discord.js");
        const embed = new EmbedBuilder()

        let duckgourl = "https://duckduckgo.com"

        embed.setTitle("Duckduckgo search");
        embed.setColor("#FF0000");

        searchDuckGo(argsJoiner(args)).then(function(response){
            embed.setDescription(response.Abstract ? response.Abstract : "No results found.")
            embed.setImage(response.Image ? duckgourl + response.Image : null)

            message.channel.send({embeds: [embed]});
        })
    }
};