// 1-20 között ad 10 random számot
const generateArray = (mennyinum) => {
  let result = [];
  for (let i = 0; i < mennyinum; i++) {
    let random = Math.floor(Math.random() * 20) + 1;
    result.push(random);
  }
  return result;
};

generateArray(10);

module.exports = { generateArray };
