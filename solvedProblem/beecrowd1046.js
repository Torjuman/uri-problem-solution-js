let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  a = inputArr[0],
  b = inputArr[1],
  durationCalculation = a < 12 ? b - a : 24 - a + b,
  lastedFinally = a === 0 ? 24 - a + b : durationCalculation;
print("O JOGO DUROU " + lastedFinally + " HORA(S)");
