let a = 0,
  g = 0,
  d = 0;
while (true) {
  let n = parseInt(readline());

  if (n === 4) {
    console.log("MUITO OBRIGADO");
    console.log("Alcool: " + a);
    console.log("Gasolina: " + g);
    console.log("Diesel: " + d);
    break;
  } else if (n === 1) {
    a++;
  } else if (n === 2) {
    g++;
  } else if (n === 3) {
    d++;
  }
}
