function createQrCode(data, size = "150x150") {
    let url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + data + '&size=' + size
    return url
}

module.exports = {
    name: 'qrcode',
    description: 'Creiate a QR Code.',
    help: '~qrcode <url or something>',
    execute: function(message, args, client){
        //Validate if only one argument was passed
        if (args.length != 1) {
            message.channel.send('Please, dont use spaces for qrcode!');
            return
        }
        else {
            message.channel.send(createQrCode(args[0]));
        }
    }
};