let inputArr = [];
for (let i = 0; i < 10; i++) {
  let n = parseInt(readline());
  if (n > 0) {
    inputArr.push(n);
  } else if (n === null || n === undefined || n < 1) {
    inputArr.push(1);
  }
}
for (let j = 0; j < inputArr.length; j++) {
  console.log(`X[${j}] = ${inputArr[j]}`);
}
