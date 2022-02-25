// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 .....

let t = parseInt(readline());

for (let i = 0; i < t; i++) {
  let n = parseInt(readline()),
    a = 0,
    b = 1,
    c = 0,
    arr = [];
  for (let j = 0; j <= n; j++) {
    arr.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  console.log(`Fib(${n}) = ${arr[n]}`);
}
