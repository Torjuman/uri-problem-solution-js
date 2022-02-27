let evenArr = [],
  oddArr = [];

for (let i = 0; i < 15; i++) {
  let n = parseInt(readline());
  if (n % 2 === 0) {
    evenArr.push(n);
    if (evenArr.length === 5) {
      for (let k = 0; k < 5; k++) {
        console.log(`par[${k}] = ${evenArr[k]}`);
      }
      evenArr = [];
    }
  } else {
    oddArr.push(n);
    if (oddArr.length === 5) {
      for (let k = 0; k < 5; k++) {
        console.log(`impar[${k}] = ${oddArr[k]}`);
      }
      oddArr = [];
    }
  }
}
for (let i = 0; i < 5; i++) {
  if (oddArr[i] === undefined) break;
  console.log(`impar[${i}] = ${oddArr[i]}`);
}
for (let i = 0; i < 5; i++) {
  if (evenArr[i] === undefined) break;
  console.log(`par[${i}] = ${evenArr[i]}`);
}
