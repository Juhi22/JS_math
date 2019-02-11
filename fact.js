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

let pelda1 = faktorialis(8);
console.log(pelda1);
