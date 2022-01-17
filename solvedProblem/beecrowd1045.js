let n = readline(),
  inputArr = n
    .split(" ")
    .map((x) => +x)
    .sort((a, b) => b - a),
  [a, b, c] = [...inputArr],
  aSqr = a * a,
  bSqr = b * b,
  cSqr = c * c;

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (aSqr === bSqr + cSqr) {
    console.log("TRIANGULO RETANGULO");
  }

  if (aSqr > bSqr + cSqr) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (aSqr < bSqr + cSqr) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
  }
  if ((a === b && b !== c) || (b === c && c !== a)) {
    console.log("TRIANGULO ISOSCELES");
  }
}
