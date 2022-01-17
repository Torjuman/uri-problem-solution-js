let n = parseInt(readline()),
  a,
  b;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    a = i;
    b = Math.pow(a, 2);
    console.log(`${a}^2 = ${b}`);
  }
}
