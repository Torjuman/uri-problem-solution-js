let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  accArr = inputArr.slice();
accArr.sort((a, b) => a - b);
let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push(accArr[i]);
}
arr.push("");
for (let i = 0; i < 3; i++) {
  arr.push(inputArr[i]);
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
