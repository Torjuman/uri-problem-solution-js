let t = parseInt(readline());

for (let i = 0; i < t; i++) {
  let str = readline(),
    inputArr = str.split(" "),
    PA = parseInt(inputArr[0]),
    PB = parseInt(inputArr[1]),
    G1 = parseFloat(inputArr[2]),
    G2 = parseFloat(inputArr[3]),
    count = 0;

  while (true) {
    PA = parseInt(PA + (PA * G1) / 100);
    PB = parseInt(PB + (PB * G2) / 100);
    count++;
    if (count > 100) {
      console.log("Mais de 1 seculo.");
      break;
    }
    if (PA > PB) {
      console.log(count + " anos.");
      break;
    }
  }
}
