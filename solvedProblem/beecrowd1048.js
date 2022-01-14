let n = 900.0,
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
  console.log(newSalaryStr + firstTotal.toFixed(2));
  console.log(reAdSalaryStr + firstEarn.toFixed(2));
  console.log(inPerStr + "15 %");
} else if (400.01 <= n && n <= 800.0) {
  console.log(newSalaryStr + secondTotal.toFixed(2));
  console.log(reAdSalaryStr + secondEarn.toFixed(2));
  console.log(inPerStr + "12 %");
} else if (800.01 <= n && n <= 1200.0) {
  console.log(newSalaryStr + thirdTotal.toFixed(2));
  console.log(reAdSalaryStr + thirdEarn.toFixed(2));
  console.log(inPerStr + "10 %");
} else if (1200.01 <= n && n <= 2000.0) {
  console.log(newSalaryStr + fouthTotal.toFixed(2));
  console.log(reAdSalaryStr + fouthEarn.toFixed(2));
  console.log(inPerStr + "7 %");
} else if (2000.0 < n) {
  console.log(newSalaryStr + fifthTotal.toFixed(2));
  console.log(reAdSalaryStr + fifthEarn.toFixed(2));
  console.log(inPerStr + "4 %");
}
