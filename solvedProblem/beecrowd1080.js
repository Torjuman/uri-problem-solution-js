let inputArr = [];
for (let i = 0; i < 100; i++) {
  let n = parseInt(readline());
  inputArr.push(n);
}
let copyArr = [...inputArr],
  highestNumArr = copyArr.sort((a, b) => b - a),
  pos = 1;
console.log(highestNumArr[0]);
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] === highestNumArr[0]) {
    console.log(pos);
  } else {
    pos++;
  }
}
