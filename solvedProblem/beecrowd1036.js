let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  a = inputArr[0],
  b = inputArr[1],
  c = inputArr[2],
  d = Math.pow(b, 2) - 4 * a * c,
  r1 = (-b + Math.sqrt(d)) / (2 * a),
  r2 = (-b - Math.sqrt(d)) / (2 * a);
if (a !== 0 && d > 0) {
  print("R1 = " + r1.toFixed(5));
  print("R2 = " + r2.toFixed(5));
} else {
  print("Impossivel calcular");
}
