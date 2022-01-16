let a = parseInt(readline()),
  b = parseInt(readline()),
  c = parseInt(readline()),
  d = parseInt(readline()),
  e = parseInt(readline()),
  inputArr = [a, b, c, d, e],
  n = 0;
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] % 2 === 0) {
    n++;
  }
}
console.log(n + " valores pares");
