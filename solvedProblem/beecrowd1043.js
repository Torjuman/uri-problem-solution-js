let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  a = inputArr[0],
  b = inputArr[1],
  c = inputArr[2],
  sum1 = a + b,
  sum2 = b + c,
  sum3 = c + a,
  perimetro = a + b + c,
  area = (a + b) * c * 0.5;

if (sum1 > c && sum2 > a && sum3 > b) {
  console.log("Perimetro = " + perimetro.toFixed(1));
} else {
  console.log("Area = " + area.toFixed(1));
}
