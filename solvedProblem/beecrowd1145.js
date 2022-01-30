let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  [a, b] = [...inputArr];

for (let i = 1; i <= b; i = i + a) {
  let str = "";
  for (let j = i; j < i + a; j++) {
    str += j + " ";
  }
  console.log(str.trim());
}
