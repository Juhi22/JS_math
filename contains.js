const generateArray = require('./generateArray');

let getrandom = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

let min = 1;
let max = 20;
let random = getrandom(min, max);

let contains = (generateArray, random) => {
  for (let i = 0; i < generateArray.length; i++) {
    if (generateArray[i] == random) {
      return true;
    }
  }
  return false;
};

module.exports = { contains, getrandom };
