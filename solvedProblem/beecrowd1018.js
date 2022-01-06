let n = parseInt(readline()),
  a = 100,
  b = 50,
  c = 20,
  d = 10,
  e = 5,
  f = 2,
  hundred = parseInt(n / a),
  fifty = parseInt((n % a) / b),
  twenty = parseInt(((n % a) % b) / c),
  ten = parseInt((((n % a) % b) % c) / d),
  five = parseInt(((((n % a) % b) % c) % d) / e),
  two = parseInt((((((n % a) % b) % c) % d) % e) / f),
  one = parseInt((((((n % a) % b) % c) % d) % e) % f),
  str = " nota(s) de R$ ";

print(n);
print(hundred + str + "100,00");
print(fifty + str + "50,00");
print(twenty + str + "20,00");
print(ten + str + "10,00");
print(five + str + "5,00");
print(two + str + "2,00");
print(one + str + "1,00");
