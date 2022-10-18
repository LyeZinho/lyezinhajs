module.exports = {
    name: 'ping',
    description: 'Ping!',
    help: '~ping',
    execute: function(message, args, client){
        message.channel.send('Pong.');
    }
};