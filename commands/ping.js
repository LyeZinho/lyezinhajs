module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(work, args) {
        //Simple ping command to test if the bot is working
        work.message.channel.send('Pong.');
    },
};