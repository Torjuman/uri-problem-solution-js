let n = parseInt(readline()),
  x = readline(),
  inputArr = x.split(" ").map((a) => +a),
  sortedArr = Array.from(inputArr).sort((a, b) => a - b),
  l = sortedArr[0],
  lp;

for (let i = 0; i < inputArr.length; i++) {
  if (l === inputArr[i]) lp = i;
}
console.log("Menor valor: " + l);
console.log("Posicao: " + lp);
