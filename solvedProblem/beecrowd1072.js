let n = parseInt(readline()),
  inValues = 0,
  outValues = 0;
for (let i = 0; i < n; i++) {
  let a = parseInt(readline());
  a >= 10 && a <= 20 ? inValues++ : outValues++;
}
console.log(inValues + " in");
console.log(outValues + " out");
