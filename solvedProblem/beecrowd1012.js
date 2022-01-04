let input = readline(),
  val = input.split(" ").map((x) => +x),
  a = val[0],
  b = val[1],
  c = val[2],
  pi = 3.14159,
  n = 3,
  triArea = (1 / 2) * a * c,
  cirArea = pi * Math.pow(c, 2),
  trapArea = (c * (a + b)) / 2,
  sqrArea = b * b,
  rectArea = a * b;
print("TRIANGULO: " + triArea.toFixed(n));
print("CIRCULO: " + cirArea.toFixed(n));
print("TRAPEZIO: " + trapArea.toFixed(n));
print("QUADRADO: " + sqrArea.toFixed(n));
print("RETANGULO: " + rectArea.toFixed(n));
