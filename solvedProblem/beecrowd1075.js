let n = parseInt(readline());

for (let i = 1; i < 10000; i++) {
  if (i % n === 2) {
    console.log(i);
  }
}
