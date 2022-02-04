let n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let str = readline(),
    inputArr = str.split(" ").map((p) => +p),
    [x, y] = [...inputArr],
    sum = 0;
  if (x % 2 === 0) x++;
  for (let j = 0; j < y; j++) {
    sum += x;
    x += 2;
  }

  console.log(sum);
}
