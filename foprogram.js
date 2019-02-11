const hatvanyozas = require('./pow');
const faktorialis = require('./fact');

let getrandom = (min, max) => {
  return Math.floor(Math.random * max) + min;
};

let min = 1;
let max = 8;
let random = getrandom(min, max);

let random1 = hatvanyozas.hatvanyozas(random, random);
let random2 = faktorialis.faktorialis(random);

console.log(random1);
console.log(random2);
