let inputNum = parseInt(readline());
for (let i = 0; i < inputNum; i++) {
  let n = readline(),
    inputArr = n.split(" ").map((x) => +x),
    [a, b] = [...inputArr],
    result = a / b;
  if (result === -Infinity || result === Infinity) {
    console.log("divisao impossivel");
  } else {
    console.log(result.toFixed(1));
  }
}
