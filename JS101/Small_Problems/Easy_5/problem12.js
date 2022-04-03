function beforeMidnight(string) {
  let hours = 24 - Number(string.slice(0, 2));
  let min = Number(string.slice(3));
  
  
  return ((hours * 60) - min) % 1440;
}


function afterMidnight(string) {
  let hours = Number(string.slice(0, 2));
  let min = Number(string.slice(3));

  return ((hours * 60) + min) % 1440;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
