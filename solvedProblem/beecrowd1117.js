let a = [];
while (true) {
  let n = parseFloat(readline());
  if (n < 0.0 || n > 10.0) {
    console.log("nota invalida");
  } else if (0.0 <= n && n <= 10.0) {
    a.push(n);
    if (a.length === 2) {
      let result = (a[0] + a[1]) / 2;
      console.log("media = " + result.toFixed(2));
      break;
    }
  }
}
