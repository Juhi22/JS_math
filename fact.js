function faktorialis (n) {
  let a = 1;
  let b = 2;
  let temp;

  for (let i = 1; i < n; i++) {
    temp = a * b;
    b = b + 1;
    a = temp;
  }
  return temp;
}

module.exports = { faktorialis };
