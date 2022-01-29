let a = 30,
  b = 23;
if (a < b) {
  for (let i = a + 1; i < b; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
} else if (a > b) {
  for (let i = b + 1; i < a; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}
