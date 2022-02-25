let t = parseInt(readline()),
  a = 0,
  arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(a);
  a++;
  if (t === a) a = 0;
  console.log(`N[${i}] = ${arr[i]}`);
}
