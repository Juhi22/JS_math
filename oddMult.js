const generateArray = require('./generateArray');

const oddMult = (array) => {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result = result * array[i];
    }
  }
  return result;

};

let array = generateArray.generateArray(10);

module.exports = { oddMult };
