let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  [a, b] = [...inputArr],
  result = b % a === 0 || a % b === 0 ? "Sao Multiplos" : "Nao sao Multiplos";
print(result);
