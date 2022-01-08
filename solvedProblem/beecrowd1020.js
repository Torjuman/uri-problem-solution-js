let n = 800,
  arr = [365, 30],
  years = parseInt(n / arr[0]),
  months = parseInt((n % arr[0]) / arr[1]),
  days = (n % arr[0]) % arr[1];

console.log(years + " ano(s)");
console.log(months + " mes(es)");
console.log(days + " dia(s)");
