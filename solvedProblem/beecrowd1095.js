let a = 1,
  b = 60;

for (let i = b; i > 0; i = i - 5) {
  console.log("I=" + a + " " + "J=" + b);
  a += 3;
  b -= 5;
}
console.log("I=" + a + " " + "J=" + b);
