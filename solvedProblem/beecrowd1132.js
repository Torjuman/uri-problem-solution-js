let a = parseInt(readline()),
  b = parseInt(readline()),
  sum = 0;
if (a < b) {
  for (let i = a; i <= b; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }
} else if (a > b) {
  for (let i = b; i <= a; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }
}
console.log(sum);
