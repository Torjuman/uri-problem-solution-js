let input = readline(),
  val = input
    .split(" ")
    .map((x) => +x)
    .sort((a, b) => b - a);

print(val[0] + " eh o maior");
