const generateArray = require('./generateArray');

const oddMult = (array) => {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
      result = result * array[i];
    }
  }
  return result;

};

let array = generateArray.generateArray(10);
let eredmeny = oddMult(array);
console.log(eredmeny);

module.exports = { oddMult };
