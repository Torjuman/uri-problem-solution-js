let i,
  j,
  k,
  sum = 0.0,
  b = 0,
  char = readline();

for (i = 0; i < 12; i++) {
  let temArr = [],
    a = 1 + b;
  for (j = 0; j < 12; j++) {
    let n = parseFloat(readline());
    temArr.push(n);
  }
  for (k = a; k < 12; k++) {
    sum += temArr[a];
    a++;
  }
  b++;
}
if (char === "S") {
  console.log(sum.toFixed(1));
} else if (char === "M") {
  let m = sum / 66.0;
  console.log(m.toFixed(1));
}
