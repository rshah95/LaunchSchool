function dms(number) {
  let degrees = Math.floor(number);
  let decimal = number - degrees;
  let minutes = Math.floor(60 * decimal);
  if (minutes === 0) minutes = '00';
  let minutesDecimal = 60 * decimal - minutes;
  let seconds = Math.floor(60 * minutesDecimal);
  if (seconds === 0) seconds = '00'

  return `${degrees}˚ ${minutes}' ${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"