let n = parseInt(readline()),
  arr = [365, 30],
  years = parseInt(n / arr[0]),
  months = parseInt((n % arr[0]) / arr[1]),
  days = (n % arr[0]) % arr[1];

print(years + " ano(s)");
print(months + " mes(es)");
print(days + " dia(s)");
