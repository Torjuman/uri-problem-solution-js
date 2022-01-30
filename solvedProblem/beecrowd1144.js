let n = parseInt(readline()),
  a = 1,
  b = 1,
  c = 1;
for (let i = 0; i < n; i++) {
  console.log(`${a} ${b} ${c}`);
  console.log(`${a} ${b + 1} ${c + 1}`);
  a += 1;
  b = a * a;
  c = b * a;
}
