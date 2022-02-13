let n = parseInt(readline());

for (let i = 0; i < n; i++) {
  let x = parseInt(readline()),
    sum = 0,
    count = 1;
  while (true) {
    sum += count;
    count++;
    if (sum >= x) break;
  }
  if (x === 1) {
    console.log(x + " nao eh perfeito");
  } else if (x === sum) {
    console.log(x + " eh perfeito");
  } else {
    console.log(x + " nao eh perfeito");
  }
}
