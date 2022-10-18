const utils = new require('./utils')
const mine = new require('./datasets/mining')
const fs = new require('fs')
const path = require('path')
const natural = require('natural')
const brain = require('brain.js')


//Load the dataset
let dataset = mine.loadDataset();

//Create the dictionary
let dictionary = utils.createDictionary(dataset);

//Load the train
let train = utils.loadTrain(dictionary);

//Create the neural network
let net = new brain.NeuralNetwork({
    hiddenLayers: [3]
});

//Train the neural network
// net.train(train, {
//         errorThresh: 0.005,
//         iterations: 20000,
//         log: false,
//         logPeriod: 10,
//         learningRate: 0.3
// });

// Load the model using fs
net.fromJSON(JSON.parse(fs.readFileSync(path.join(__dirname, './datasets/model.json'), 'utf8')));


async function chat(input){
    let word = utils.creatBoW(input, dictionary);
    let output = net.run(word);
    let response = mine.getResponse(utils.outputFilter(output));
    return response;
}

console.log(chat("How are you?"))


//Save the model using fs
// fs.writeFileSync(path.join(__dirname, './datasets/model.json'), JSON.stringify(net.toJSON()));
// console.log("________________________________________________")
// console.log(output);
// console.log("________________________________________________")
// console.log("------------------[Test]------------------------")
// console.log(`[${utils.outputFilter(output)}]  ---  [${output[utils.outputFilter(output)]}]`);
// console.log("Percentage of success: " + (output[utils.outputFilter(output)] * 100).toFixed(2).toString() + "%");
// console.log("------------------------------------------------")
// console.log(`input -> ${imput}`);
// console.log('response ->' + mine.getResponse(utils.outputFilter(output)))
// console.log("------------------------------------------------")


exports.chat = chat