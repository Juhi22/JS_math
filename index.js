const generateArray = require('./generateArray');
const contains = require('./contains');
const evanSum = require('./evenSum');
const oddMult = require('./oddMult');

function init (number) {
  let randomarray = generateArray.generateArray(number);
  let result = contains.contains(randomarray, contains.getrandom(1, 20));
  return result;
}

init(10);
console.log(init(10));

console.log(evanSum.evenSum(generateArray.generateArray(10)));
console.log(oddMult.oddMult(generateArray.generateArray(10)));
