let n = parseInt(readline()),
  c = 0,
  r = 0,
  s = 0;

for (let i = 0; i < n; i++) {
  let str = readline(),
    inputArr = str.split(" "),
    num = parseInt(inputArr[0]),
    nam = inputArr[1].toLocaleLowerCase();
  if (nam === "c") {
    c += num;
  } else if (nam === "r") {
    r += num;
  } else if (nam === "s") {
    s += num;
  }
}

let total = c + r + s,
  cPercent = (c / total) * 100,
  rPercent = (r / total) * 100,
  sPercent = (s / total) * 100;

console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + c);
console.log("Total de ratos: " + r);
console.log("Total de sapos: " + s);
console.log("Percentual de coelhos: " + cPercent.toFixed(2) + " %");
console.log("Percentual de ratos: " + rPercent.toFixed(2) + " %");
console.log("Percentual de sapos: " + sPercent.toFixed(2) + " %");
