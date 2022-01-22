let n = parseInt(readline());

for (let i = 0; i < n; i++) {
  let str = readline(),
    inputArr = str.split(" ").map((x) => +x),
    [a, b, c] = [...inputArr],
    result = (a * 2 + b * 3 + c * 5) / 10;
  console.log(result.toFixed(1));
}
