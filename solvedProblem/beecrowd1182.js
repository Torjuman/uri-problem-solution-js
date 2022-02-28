let col = parseInt(readline()),
  char = readline(),
  arr = [],
  s = 0.0;

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    let n = parseFloat(readline());
    if (j === col) arr.push(n);
  }
}

for (let i = 0; i < arr.length; i++) {
  s += arr[i];
}
if (char === "S") {
  console.log(s.toFixed(1));
} else if (char === "M") {
  let m = s / 12.0;
  console.log(m.toFixed(1));
}
