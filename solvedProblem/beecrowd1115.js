while (true) {
  let n = readline(),
    inputArr = n.split(" ").map((x) => +x),
    [a, b] = [...inputArr];
  if (a === 0 || b === 0) {
    break;
  } else if (a > 0 && b > 0) {
    console.log("primeiro");
  } else if (a > 0 && b < 0) {
    console.log("quarto");
  } else if (a < 0 && b < 0) {
    console.log("terceiro");
  } else if (a < 0 && b > 0) {
    console.log("segundo");
  }
}
