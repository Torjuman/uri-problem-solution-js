while (true) {
  let n = parseInt(readline());
  if (n === 0) {
    break;
  } else {
    let str = "";
    for (let i = 1; i <= n; i++) {
      str += i + " ";
    }
    console.log(str.trim());
  }
}
