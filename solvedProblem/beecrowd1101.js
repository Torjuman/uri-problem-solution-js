while (true) {
  let n = readline(),
    inputArr = n
      .split(" ")
      .map((x) => +x)
      .sort((a, b) => a - b),
    [x, y] = [...inputArr],
    str = "",
    sum = 0;
  if (x <= 0 || y <= 0) {
    break;
  } else {
    for (let i = x; i <= y; i++) {
      str += i + " ";
      sum += i;
    }
    console.log(str + "Sum=" + sum);
  }
}
