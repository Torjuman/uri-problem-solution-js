let a = readline(),
  b = readline(),
  prodArr1 = a.split(" ").map((x) => +x),
  prodArr2 = b.split(" ").map((y) => +y),
  totalValue = prodArr1[1] * prodArr1[2] + prodArr2[1] * prodArr2[2];
print("VALOR A PAGAR: R$ " + totalValue.toFixed(2));
