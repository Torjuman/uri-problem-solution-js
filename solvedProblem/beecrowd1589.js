let t = parseInt(readline());

for (let i = 0; i < 3; i++) {
  let n = readline(),
    inputArr = n.split(" ").map((x) => +x),
    sum = 0;

  sum = inputArr[0] + inputArr[1];
  console.log(sum);
}
