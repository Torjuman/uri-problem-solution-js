while (true) {
  let str = readline(),
    inputArr = str.split(" ").map((x) => +x),
    [a, b] = [...inputArr];
  if (a > b) {
    console.log("Decrescente");
  } else if (a < b) {
    console.log("Crescente");
  } else if (a === b) {
    break;
  }
}
