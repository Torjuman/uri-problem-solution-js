let n = parseFloat(readline()),
  percentageArr = [0.15, 0.12, 0.1, 0.07, 0.04],
  firstEarn = n * percentageArr[0],
  secondEarn = n * percentageArr[1],
  thirdEarn = n * percentageArr[2],
  fouthEarn = n * percentageArr[3],
  fifthEarn = n * percentageArr[4],
  firstTotal = n + firstEarn,
  secondTotal = n + secondEarn,
  thirdTotal = n + thirdEarn,
  fouthTotal = n + fouthEarn,
  fifthTotal = n + fifthEarn,
  newSalaryStr = "Novo salario: ",
  reAdSalaryStr = "Reajuste ganho: ",
  inPerStr = "Em percentual: ";

if (0 < n && n <= 400.0) {
  print(newSalaryStr + firstTotal.toFixed(2));
  print(reAdSalaryStr + firstEarn.toFixed(2));
  print(inPerStr + "15 %");
} else if (400.01 <= n && n <= 800.0) {
  print(newSalaryStr + secondTotal.toFixed(2));
  print(reAdSalaryStr + secondEarn.toFixed(2));
  print(inPerStr + "12 %");
} else if (800.01 <= n && n <= 1200.0) {
  print(newSalaryStr + thirdTotal.toFixed(2));
  print(reAdSalaryStr + thirdEarn.toFixed(2));
  print(inPerStr + "10 %");
} else if (1200.01 <= n && n <= 2000.0) {
  print(newSalaryStr + fouthTotal.toFixed(2));
  print(reAdSalaryStr + fouthEarn.toFixed(2));
  print(inPerStr + "7 %");
} else if (2000.0 < n) {
  print(newSalaryStr + fifthTotal.toFixed(2));
  print(reAdSalaryStr + fifthEarn.toFixed(2));
  print(inPerStr + "4 %");
}
