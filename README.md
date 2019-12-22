# Javascript Neural Network

A small program using Brain.js to implement neural networks using JavaScript. NN's are mostly implemented using Python, so it's nice to be able to do small machine learning tasks using JavaScript. The program will go through data and display the field of work; Designer or Developer

## Installation

All you will need is Brain.js  
On Github - [Brain.js](https://github.com/BrainJS/brain.js)  
On Website - [Brain.js](https://brain.js.org/#/)  

```bash
npm install --save brain.js
```

A cdn is also available   
```bash
<script src="//unpkg.com/brain.js"></script>
```
## Usage

```JavaScript
const brain = require('brain.js') // bringing in brain
const data = require('./data.json') // Json Data

const net = new brain.recurrent.LSTM() // new neural network using Long Short Term Memory for strings

// maps over our training data to get text from data and outputs what field from user input
const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));
// traning phase
net.train(trainingData, {
    iterations: 1500, // how many training iterations the program does, the more iterations, the more accurate our model will be
    log: true // logs iterations
});

const output = net.run("") // type in a sentence using keywords from the data.js file and it will train and tell you if the field is dev or designer
console.log(output) // outputs field
```
If you type in "I use adobe illustrator" in the empty console.log string, you should get designer, if type in "i love javascript" you will get developer.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
