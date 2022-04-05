while (true) {
  let n = readline(),
    inputArr = n.split(" ").map((x) => +x);
  if (inputArr[0] === 0) break;
  let [a, b, c] = [...inputArr],
    totalArea = (a * b * 100) / c,
    sqr = Math.sqrt(totalArea);
  console.log(parseInt(sqr));
}
