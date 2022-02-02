let firstInput = readline(),
  secondInput = readline(),
  thirdInput = readline(),
  fourthInput = readline(),
  startDayInput = firstInput.split(" "),
  startDay = parseInt(startDayInput[1]),
  startTime = secondInput.split(" :").map((x) => +x),
  [startHour, startMinute, startSecond] = [...startTime],
  endDayInput = thirdInput.split(" "),
  endDay = parseInt(endDayInput[1]),
  endTime = fourthInput.split(" :").map((x) => +x),
  [endHour, endMinute, endSecond] = [...endTime],
  day = 0,
  hour = 0,
  minute = 0,
  second = 0,
  dayEqual = startDay === endDay,
  dayGreater = startDay < endDay,
  hourEqual = startHour === endHour,
  hourGreater = startHour < endHour,
  hourLess = startHour > endHour,
  minuteEqual = startMinute === endMinute,
  minuteGreater = startMinute < endMinute,
  minuteLess = startMinute > endMinute,
  secondEqual = startSecond === endSecond,
  secondGreater = startSecond < endSecond,
  secondLess = startSecond > endSecond;
if (dayGreater && hourLess && minuteLess && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 11 : 23
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourLess && minuteLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 11 : 24/25
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourLess && minuteGreater && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 19 : 23
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour;
  minute = endMinute - startMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourLess && minuteGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 19 : 24/25
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourLess && minuteEqual && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 12 : 23
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourLess && minuteEqual) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 07 : 12 : 24/34
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourGreater && minuteLess && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 11 : 21
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourGreater && minuteLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 11 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourGreater && minuteEqual && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 12 : 23
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourGreater && minuteEqual) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourGreater && minuteGreater && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 13 : 23
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourGreater && minuteGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 09 : 13 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourEqual && minuteLess && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 11 : 23
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourEqual && minuteLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 11 : 24/25
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourEqual && minuteEqual && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 12 : 23
  day = endDay - startDay - 1;
  hour = 24 - startHour + endHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourEqual && minuteEqual) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (dayGreater && hourEqual && minuteGreater && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 13 : 23
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (dayGreater && hourEqual && minuteGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 6
  // 08 : 13 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (hourEqual && minuteGreater && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 08 : 12 : 23
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (hourEqual && minuteGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 08 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (hourEqual && minuteEqual) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 08 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (hourGreater && minuteLess && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 11 : 23
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (hourGreater && minuteLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 11 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = endSecond - startSecond;
} else if (hourGreater && minuteEqual && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 12 : 23
  day = endDay - startDay;
  hour = endHour - startHour - 1;
  minute = 60 - startMinute + endMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (hourGreater && minuteEqual) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (hourGreater && minuteGreater && secondLess) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 13 : 23
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute - 1;
  second = 60 - startSecond + endSecond;
} else if (hourGreater && minuteGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 13 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
} else if (hourGreater) {
  // Dia 5
  // 08 : 12 : 24
  // Dia 5
  // 09 : 12 : 24/25
  day = endDay - startDay;
  hour = endHour - startHour;
  minute = endMinute - startMinute;
  second = endSecond - startSecond;
}

console.log(day + " dia(s)");
console.log(hour + " hora(s)");
console.log(minute + " minuto(s)");
console.log(second + " segundo(s)");
