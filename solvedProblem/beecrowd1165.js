let n = parseInt(readline());

for (let i = 0; i < n; i++) {
  let x = parseInt(readline()),
    a = 1,
    b = 0;
  while (true) {
    if (x % a === 0) b++;
    a++;
    if (x === a) break;
  }
  if (b > 2) {
    console.log(x + " nao eh primo");
  } else {
    console.log(x + " eh primo");
  }
}
