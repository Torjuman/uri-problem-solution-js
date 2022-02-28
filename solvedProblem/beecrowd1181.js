let line = parseInt(readline()),
  char = readline(),
  arr = [];

for (let i = 0; i < 12; i++) {
  let temArr = 0.0;
  for (let j = 0; j < 12; j++) {
    let n = parseFloat(readline());
    temArr += n;
  }
  arr.push(temArr);
}
if (char === "S") {
  console.log(arr[line].toFixed(1));
} else if (char === "M") {
  let m = arr[line] / 12.0;
  console.log(m.toFixed(1));
}
