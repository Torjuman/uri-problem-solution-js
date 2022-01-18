let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  [inHour, inMinute, outHour, outMinute] = [...inputArr],
  hour = 0,
  minute = 0,
  firstStr = "O JOGO DUROU ",
  secondStr = " HORA(S) E ",
  thirdStr = " MINUTO(S)";

if (inHour === outHour && inMinute === outMinute) {
  hour = 24;
} else if (inHour === outHour && inMinute < outMinute) {
  minute = outMinute - inMinute;
} else if (inHour === outHour && inMinute > outMinute) {
  hour = 23;
  minute = 60 - inMinute + outMinute;
} else if (inHour < outHour && inMinute === outMinute) {
  hour = outHour - inHour;
} else if (inHour < outHour && inMinute < outMinute) {
  hour = outHour - inHour;
  minute = outMinute - inMinute;
} else if (inHour < outHour && inMinute > outMinute) {
  hour = outHour - inHour - 1;
  minute = 60 - inMinute + outMinute;
} else if (inHour > outHour && inMinute === outMinute) {
  hour = 24 - inHour + outHour;
} else if (inHour > outHour && inMinute < outMinute) {
  hour = 24 - inHour + outHour;
  minute = outMinute - inMinute;
} else if (inHour > outHour && inMinute > outMinute) {
  hour = 23 - inHour + outHour;
  minute = 60 - inMinute + outMinute;
}
console.log(firstStr + hour + secondStr + minute + thirdStr);
