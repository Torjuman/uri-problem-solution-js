let n = parseInt(readline()),
  x = 60,
  hr = parseInt(n / (x * x)),
  min = parseInt((n % (x * x)) / x),
  sec = n % x;
print(hr + ":" + min + ":" + sec);
