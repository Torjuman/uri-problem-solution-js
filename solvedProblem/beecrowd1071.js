let a = -5,
  b = -5,
  finalResult = 0;
function shortFor(a, b, result = 0) {
  if (a < b) {
    for (let i = a; i < b; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
    return result;
  } else {
    for (let i = b; i < a; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
    return result;
  }
}
if (a < 0 && a < b) {
  a += 1;
  finalResult = shortFor(a, b);
} else if (b < 0 && a > b) {
  b += 1;
  finalResult += shortFor(a, b);
} else if (a < b) {
  finalResult = shortFor(a, b);
} else if (a > b) {
  finalResult = shortFor(a, b);
}
console.log(finalResult);
