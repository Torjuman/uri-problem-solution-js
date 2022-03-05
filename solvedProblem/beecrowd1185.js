let i,
  j,
  k,
  sum = 0.0,
  char = readline();

for (i = 0; i < 12; i++) {
  let temArr = [];
  for (j = 0; j < 12; j++) {
    let n = parseFloat(readline());
    temArr.push(n);
  }
  for (k = 0; k < 11 - i; k++) {
    sum += temArr[k];
  }
}
if (char === "S") {
  console.log(sum.toFixed(1));
} else if (char === "M") {
  let m = sum / 66.0;
  console.log(m.toFixed(1));
}
