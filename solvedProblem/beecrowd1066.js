let a = parseInt(readline()),
  b = parseInt(readline()),
  c = parseInt(readline()),
  d = parseInt(readline()),
  e = parseInt(readline()),
  inputArr = [a, b, c, d, e],
  n = 0,
  o = 0,
  p = 0;
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] % 2 === 0) {
    n++;
  }
  if (inputArr[i] > 0) {
    o++;
  } else if (inputArr[i] < 0) {
    p++;
  }
}
let m = inputArr.length - n;
console.log(n + " valor(es) par(es)");
console.log(m + " valor(es) impar(es)");
console.log(o + " valor(es) positivo(s)");
console.log(p + " valor(es) negativo(s)");
