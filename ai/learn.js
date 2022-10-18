const mine = require('./datasets/mining');
const exec = require('child_process').exec;



function learn(tag, sentence, response) {
    mine.insertTrainingData(tag, sentence);
    mine.addResponse(tag, response);
    mine.tagLister()
    exec('npm run train', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

// learn('tag', 'sentence', 'response');

// learn('farwell', 'See you later', 'Goodbye');


module.exports = {
    learn
}