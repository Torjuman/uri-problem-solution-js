let arr = [];

for (let i = 0; i < 100; i++) {
  let n = readline(),
    x = Number(n);
  arr.push(x);
  if (arr[i] <= 10) console.log(`A[${i}] = ${arr[i].toFixed(1)}`);
}
