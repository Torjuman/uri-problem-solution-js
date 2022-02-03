let inputArr = [],
  sum = 0;
while (true) {
  let n = parseInt(readline());
  if (n < 0) break;
  inputArr.push(n);
}

for (let i = 0; i < inputArr.length; i++) {
  sum += inputArr[i];
}
let av = sum / inputArr.length;
console.log(av.toFixed(2));
