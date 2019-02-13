const generateArray = require('./generateArray');
const contains = require('./contains');

function init (number) {
  let randomarray = generateArray.generateArray(number);
  let result = contains.contains(randomarray, contains.getrandom(1, 20));
  return result;
}

let array = generateArray.generateArray(10);
init(10);
