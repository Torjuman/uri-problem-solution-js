let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  [a, b] = [...inputArr],
  aWin = 0,
  bWin = 0,
  drawMatch = 0;
if (a > b) {
  aWin++;
} else if (a < b) {
  bWin++;
} else if (a === b) {
  drawMatch++;
}
while (true) {
  let x = parseInt(readline());
  if (x === 1) {
    let m = readline(),
      inputArr = m.split(" ").map((x) => +x),
      [c, d] = [...inputArr];
    if (c > d) {
      aWin++;
    } else if (c < d) {
      bWin++;
    } else if (c === d) {
      drawMatch++;
    }
    console.log("Novo grenal (1-sim 2-nao)");
  } else if (x === 2) {
    let totalMatch = aWin + bWin + drawMatch;
    console.log("Novo grenal (1-sim 2-nao)");
    console.log(totalMatch + " grenais");
    console.log("Inter:" + aWin);
    console.log("Gremio:" + bWin);
    console.log("Empates:" + drawMatch);
    if (aWin > bWin) {
      console.log("Inter venceu mais");
    } else if (aWin < bWin) {
      console.log("Gremio venceu mais");
    } else if (aWin === bWin) {
      console.log("Não houve vencedor");
    }
    break;
  }
}
