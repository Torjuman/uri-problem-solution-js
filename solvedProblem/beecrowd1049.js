let firstWord = readline(),
  secondWord = readline(),
  thirdWord = readline(),
  firstCon = "vertebrado",
  secondCon = ["ave", "inseto"],
  thirdCon = ["carnivoro", "onivoro", "hematofago"],
  outputArr = [
    "aguia",
    "pomba",
    "homem",
    "vaca",
    "pulga",
    "lagarta",
    "sanguessuga",
    "minhoca",
  ];
if (firstWord === firstCon) {
  if (secondWord === secondCon[0]) {
    if (thirdWord === thirdCon[0]) {
      print(outputArr[0]);
    } else {
      print(outputArr[1]);
    }
  } else {
    if (thirdWord === thirdCon[1]) {
      print(outputArr[2]);
    } else {
      print(outputArr[3]);
    }
  }
} else {
  if (secondWord === secondCon[1]) {
    if (thirdWord === thirdCon[2]) {
      print(outputArr[4]);
    } else {
      print(outputArr[5]);
    }
  } else {
    if (thirdWord === thirdCon[2]) {
      print(outputArr[6]);
    } else {
      print(outputArr[7]);
    }
  }
}
