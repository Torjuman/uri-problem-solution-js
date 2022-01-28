let a = 0;
for (let i = 0.0; i <= 2.1; i = i + 0.2) {
  for (let j = 1; j <= 3.0; j++) {
    a = j + i;
    let b = i.toFixed(1);
    if (b === "0.0" || b === "1.0" || b === "2.0") {
      console.log(`I=${i.toFixed(0)} J=${a.toFixed(0)}`);
    } else {
      console.log(`I=${i.toFixed(1)} J=${a.toFixed(1)}`);
    }
  }
}
