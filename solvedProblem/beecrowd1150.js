let n = parseInt(readline()),
  count = 1,
  sum = n,
  nIncrement = 1,
  afterSum = 0;
while (true) {
  let m = parseInt(readline());
  if (n < m) {
    while (true) {
      if (afterSum > m) break;
      afterSum = sum + (n + nIncrement);
      nIncrement++;
      sum = afterSum;
      count++;
    }
    break;
  }
}

console.log(count);
