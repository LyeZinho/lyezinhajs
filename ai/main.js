const utils = new require('./utils')
const mine = new require('./datasets/mining')
const fs = new require('fs')
const path = require('path')
const natural = require('natural')
const brain = require('brain.js')



//Train the neural network
// net.train(train, {
//         errorThresh: 0.005,
//         iterations: 20000,
//         log: false,
//         logPeriod: 10,
//         learningRate: 0.3
// });



async function chat(input){
    
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

    // Load the model using fs
    net.fromJSON(JSON.parse(fs.readFileSync(path.join(__dirname, './datasets/model.json'), 'utf8')));

    //Create the bag of words
    let word = utils.creatBoW(input, dictionary);
    
    //Run the neural network
    let output = net.run(word);

    //Return the response
    return Promise.resolve(mine.getResponse(utils.outputFilter(output)));
}

// chat("test").then((response) => {
//     console.log(response);
// })


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