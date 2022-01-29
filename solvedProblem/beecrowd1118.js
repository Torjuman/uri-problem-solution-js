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
      while (true) {
        let x = parseInt(readline());
        if (1 <= x && x <= 2) {
          console.log("novo calculo (1-sim 2-nao)");
          if (x === 2) {
            break;
          }
          let b = [];
          while (true) {
            let o = parseFloat(readline());
            if (o < 0.0 || o > 10.0) {
              console.log("nota invalida");
            } else if (0.0 <= o && o <= 10.0) {
              b.push(o);
              if (b.length === 2) {
                let result = (b[0] + b[1]) / 2;
                console.log("media = " + result.toFixed(2));
                break;
              }
            }
          }
        } else if (x < 1 || x > 2) {
          console.log("novo calculo (1-sim 2-nao)");
        }
      }
      break;
    }
  }
}
