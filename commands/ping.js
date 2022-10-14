module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute: function(message, args, client){
        message.channel.send('Pong.');
    }
};