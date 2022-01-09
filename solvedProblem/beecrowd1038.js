let n = readline(),
  inputArr = n.split(" ").map((codeP) => +codeP),
  x = inputArr[0],
  y = inputArr[1],
  priceArr = [4.0, 4.5, 5.0, 2.0, 1.5],
  result;
switch (x) {
  case 1:
    result = priceArr[0] * y;
    break;
  case 2:
    result = priceArr[1] * y;
    break;
  case 3:
    result = priceArr[2] * y;
    break;
  case 4:
    result = priceArr[3] * y;
    break;
  case 5:
    result = priceArr[4] * y;
}
print("Total: R$ " + result.toFixed(2));
