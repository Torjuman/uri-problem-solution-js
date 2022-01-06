let p1 = readline(),
  p2 = readline(),
  p3 = p1.split(" ").map((x) => +x),
  p4 = p2.split(" ").map((x) => +x),
  distance = Math.sqrt(Math.pow(p4[0] - p3[0], 2) + Math.pow(p4[1] - p3[1], 2));

print(distance.toFixed(4));
