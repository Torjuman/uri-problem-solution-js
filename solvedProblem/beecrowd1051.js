let n = parseFloat(readline()),
  arrOfLimit = [1000.0, 1500.0, 2000.0, 3000.0, 4500.0],
  arrOfPercentage = [0.08, 0.18, 0.28],
  firstPay = arrOfLimit[0] * arrOfPercentage[0],
  secondPay = arrOfLimit[1] * arrOfPercentage[1],
  str = "R$ ";

if (arrOfLimit[2] < n && n <= arrOfLimit[3]) {
  let payOne = (n - arrOfLimit[2]) * arrOfPercentage[0];

  print(str + payOne.toFixed(2));
} else if (arrOfLimit[3] < n && n <= arrOfLimit[4]) {
  let payTwo = (n - arrOfLimit[3]) * arrOfPercentage[1] + firstPay;

  print(str + payTwo.toFixed(2));
} else if (arrOfLimit[4] < n) {
  let payThree =
    (n - arrOfLimit[4]) * arrOfPercentage[2] + firstPay + secondPay;

  print(str + payThree.toFixed(2));
} else {
  print("Isento");
}
