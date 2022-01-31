let n = parseInt(readline()),
  a = 0,
  b = 1,
  sum = b,
  str = "0";

for (let i = 1; i < n; i++) {
  str += " " + sum;
  sum = a + b;
  a = b;
  b = sum;
}
console.log(str);
