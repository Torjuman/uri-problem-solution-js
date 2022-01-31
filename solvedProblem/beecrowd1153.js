let n = parseInt(readline()),
  a = n;
for (let i = 1; i < n; i++) {
  let b = n - i;
  a *= b;
}
console.log(a);
