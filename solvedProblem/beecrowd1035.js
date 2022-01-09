let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  a = inputArr[0],
  b = inputArr[1],
  c = inputArr[2],
  d = inputArr[3];
if (b > c && d > a && c + d > a + b && c >= 0 && d >= 0 && a % 2 === 0) {
  print("Valores aceitos");
} else {
  print("Valores nao aceitos");
}
