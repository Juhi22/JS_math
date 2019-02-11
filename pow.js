const hatvanyozas = (a, b) => {
  let result = a;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};

module.exports = { hatvanyozas };
