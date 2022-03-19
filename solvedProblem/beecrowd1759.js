let n = parseInt(readline()),
  ho = "Ho",
  result = "";

for (let i = 0; i < n; i++) {
  if (i === 0) {
    result += ho;
  } else {
    result += " " + ho;
  }
}

console.log(result + "!");
