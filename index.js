const brain = require('brain.js')
const data = require('./data.json')

const net = new brain.recurrent.LSTM()

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));


net.train(trainingData, {
    iterations: 1500,
    log: true
});

const output = net.run("")

console.log(output)