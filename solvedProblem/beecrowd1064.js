let a = readline(),
  b = readline(),
  c = readline(),
  d = readline(),
  e = readline(),
  f = readline(),
  inputArr = [a, b, c, d, e, f].map((x) => +x),
  positiveNumArr = [],
  sum = 0;
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] > 0) {
    positiveNumArr.push(inputArr[i]);
    sum += inputArr[i];
  }
}
let av = sum / positiveNumArr.length;
console.log(positiveNumArr.length + " valores positivos");
console.log(av.toFixed(1));
