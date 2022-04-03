function timeOfDay(minutes) {
  let negative = false;
  if (minutes < 0) negative = true;
  minutes = Math.abs(minutes);
  
  while (minutes > 1440) {
    minutes -= 1440;
  }
  
  let hours = Math.floor(minutes / 60);
  let min = (minutes) - (hours * 60);

  if (negative === true) {
    hours = 24 - (hours + 1);
    min = 60 - min
  }

  hours < 10 ? hours = '0' + String(hours) : String(hours);
  min < 10 ? min = '0' + String(min) : String(min);
  
  return (`${hours}:${min}`);
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");