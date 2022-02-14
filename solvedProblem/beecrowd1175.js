let arr = [];
for (let i = 0; i < 20; i++) {
  let n = parseInt(readline());
  arr.push(n);
}
arr.reverse();
for (let j = 0; j < arr.length; j++) {
  console.log(`N[${j}] = ${arr[j]}`);
}
