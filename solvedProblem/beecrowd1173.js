let n = parseInt(readline()),
  arr = [],
  x = n;

for (let i = 0; i < 10; i++) {
  arr.push(x);
  x *= 2;
  console.log(`N[${i}] = ${arr[i]}`);
}
