let i,
  j,
  k,
  l = 12,
  m = 7,
  sum = 0.0,
  char = readline();

for (i = 0; i < 12; i++) {
  let temArr = [];
  for (j = 0; j < 12; j++) {
    let n = parseFloat(readline());
    temArr.push(n);
  }
  if (i < 6) {
    for (k = l; k < 12; k++) {
      sum += temArr[k];
    }
    l--;
  } else if (i >= 6) {
    for (k = m; k < 12; k++) {
      sum += temArr[k];
    }
    m++;
  }
}
if (char === "S") {
  console.log(sum.toFixed(1));
} else if (char === "M") {
  let m = sum / 30.0;
  console.log(m.toFixed(1));
}
