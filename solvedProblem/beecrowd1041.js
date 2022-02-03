let n = readline(),
  inputArr = n.split(" ").map((p) => parseFloat(p)),
  x = inputArr[0],
  y = inputArr[1];

if (x === 0.0 && y === 0.0) {
  print("Origem");
} else if (x === 0.0 && y !== 0.0) {
  print("Eixo Y");
} else if (y === 0.0 && x !== 0.0) {
  print("Eixo X");
} else if (x > 0.0 && y > 0.0) {
  print("Q1");
} else if (x < 0.0 && y > 0.0) {
  print("Q2");
} else if (x < 0.0 && y < 0.0) {
  print("Q3");
} else if (x > 0.0 && y < 0.0) {
  print("Q4");
}
