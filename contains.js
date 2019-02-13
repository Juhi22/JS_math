const generateArray = require('./generateArray');

let getrandom = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

let min = 1;
let max = 20;
let random = getrandom(min, max);


let contains = (generateArray, random) => {
  for (i = 0; i < generatArray.length; i++) {
    if (arr[i] == random) {
      return true;
    }
  }
  return false;
}
let pelda1 = contains(generateArray.generateArray, random);
console.log(pelda1);

