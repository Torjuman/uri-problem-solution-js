let arr1 = [],
  arr2 = [],
  a,
  sum = 1;

for (let i = 2; i < 40; i++) {
  if (i % 2 === 1) arr1.push(i);
}

for (let j = 1; j < 20; j++) {
  a = Math.pow(2, j);
  arr2.push(a);
}

for (let k = 0; k < 19; k++) {
  sum += arr1[k] / arr2[k];
}
console.log(sum.toFixed(2));
