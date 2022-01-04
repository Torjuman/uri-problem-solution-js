let a = readline(),
  b = parseFloat(readline()),
  c = parseFloat(readline()),
  bonus = (c * 15) / 100,
  totalSalary = b + bonus;

print("TOTAL = R$ " + totalSalary.toFixed(2));
