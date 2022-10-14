function tokenizer(imput){   
    imput = imput.trim();
    var tokens = imput.split(" ");
    return tokens;
}

function commandbuilder(imput){
    var raw = imput.slice(1);
    var tokens = tokenizer(raw);
    var command = {
        "command": tokens[0],
        "arguments": tokens.slice(1)
    }
    return command;
}

exports.commandbuilder = commandbuilder;