let a = readline(),
  b = readline(),
  c = readline(),
  d = readline(),
  e = readline(),
  f = readline(),
  inputArr = [a, b, c, d, e, f].map((x) => +x),
  totalPositive = 0;

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] > 0) {
    totalPositive++;
  }
}
print(totalPositive + " valores positivos");
