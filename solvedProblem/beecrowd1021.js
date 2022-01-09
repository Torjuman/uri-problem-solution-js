let n = readline(),
  inputArr = n.split(".").map((x) => +x),
  notesArr = [100, 50, 20, 10, 5, 2, 25],
  hundred = parseInt(inputArr[0] / notesArr[0]),
  fifty = parseInt((inputArr[0] % notesArr[0]) / notesArr[1]),
  twenty = parseInt(((inputArr[0] % notesArr[0]) % notesArr[1]) / notesArr[2]),
  ten = parseInt(
    (((inputArr[0] % notesArr[0]) % notesArr[1]) % notesArr[2]) / notesArr[3]
  ),
  five = parseInt(
    ((((inputArr[0] % notesArr[0]) % notesArr[1]) % notesArr[2]) %
      notesArr[3]) /
      notesArr[4]
  ),
  two = parseInt(
    (((((inputArr[0] % notesArr[0]) % notesArr[1]) % notesArr[2]) %
      notesArr[3]) %
      notesArr[4]) /
      notesArr[5]
  ),
  one = parseInt(
    (((((inputArr[0] % notesArr[0]) % notesArr[1]) % notesArr[2]) %
      notesArr[3]) %
      notesArr[4]) %
      notesArr[5]
  ),
  pointFiveZero = parseInt(inputArr[1] / notesArr[1]),
  pointTwoFive = parseInt((inputArr[1] % notesArr[1]) / notesArr[6]),
  pointOneZero = parseInt(
    ((inputArr[1] % notesArr[1]) % notesArr[6]) / notesArr[3]
  ),
  pointZeroFive = parseInt(
    (((inputArr[1] % notesArr[1]) % notesArr[6]) % notesArr[3]) / notesArr[4]
  ),
  pointZeroOne = parseInt(
    (((inputArr[1] % notesArr[1]) % notesArr[6]) % notesArr[3]) % notesArr[4]
  ),
  strNotes = " nota(s) de R$ ",
  strCoins = " moeda(s) de R$ ";

print("NOTAS:");
print(hundred + strNotes + "100.00");
print(fifty + strNotes + "50.00");
print(twenty + strNotes + "20.00");
print(ten + strNotes + "10.00");
print(five + strNotes + "5.00");
print(two + strNotes + "2.00");
print("MOEDAS:");
print(one + strCoins + "1.00");
print(pointFiveZero + strCoins + "0.50");
print(pointTwoFive + strCoins + "0.25");
print(pointOneZero + strCoins + "0.10");
print(pointZeroFive + strCoins + "0.05");
print(pointZeroOne + strCoins + "0.01");
