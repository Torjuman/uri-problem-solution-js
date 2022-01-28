let n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let m = readline(),
    inputArr = m
      .split(" ")
      .map((x) => +x)
      .sort((a, b) => a - b),
    sum = 0;
  for (let j = inputArr[0] + 1; j < inputArr[1]; j++) {
    if (j % 2 === 1) {
      sum += j;
    }
  }
  console.log(sum);
}
