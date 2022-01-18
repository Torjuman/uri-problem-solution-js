let n = parseInt(readline()),
  inputArr = [],
  odd = "ODD",
  even = "EVEN",
  neg = " NEGATIVE",
  pos = " POSITIVE";

for (let i = 0; i < n; i++) {
  let a = parseInt(readline());
  inputArr.push(a);
  if (inputArr[i] === 0) {
    console.log("NULL");
  } else if (inputArr[i] % 2 === 0) {
    if (inputArr[i] > 0) {
      console.log(even + pos);
    } else {
      console.log(even + neg);
    }
  } else {
    if (inputArr[i] > 0) {
      console.log(odd + pos);
    } else {
      console.log(odd + neg);
    }
  }
}
