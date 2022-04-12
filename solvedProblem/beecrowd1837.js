let str = readline(),
  inputArr = str.split(" ").map((x) => +x),
  [a, b] = [...inputArr],
  e,
  f,
  q,
  r;

if (a < 0) {
  e = b;
  if (b < 0) e = b * -1;
  for (r = 0; r < e; r++) {
    f = a - r;
    if (f % b === 0) break;
  }
  q = f / b;
} else {
  q = a / b;
  r = a % b;
}

console.log(parseInt(q) + " " + r);
