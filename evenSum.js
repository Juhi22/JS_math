const evenSum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result = result + array[i];
    }
  }
  return result;
};
module.exports = { evenSum };
