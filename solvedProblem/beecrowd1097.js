let a = 7;

for (let i = 1; i <= 9; i = i + 2) {
  for (let j = a; j >= a - 2; j--) {
    console.log(`I=${i} J=${j}`);
  }
  a += 2;
}
