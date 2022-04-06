while (true) {
  let l = parseInt(readline());
  if (l > 0 && l < 501) {
    let v = readline(),
      inputArr = v
        .split(" ")
        .map((x) => +x)
        .sort((a, b) => b - a);
    if (inputArr[0] < 10) {
      console.log(1);
    } else if (inputArr[0] >= 10 && inputArr[0] < 20) {
      console.log(2);
    } else {
      console.log(3);
    }
  } else {
    break;
  }
}
