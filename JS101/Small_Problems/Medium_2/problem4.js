/*
Problem: given an input year, return number of friday the 13ths within that year
input: integer
output: integer

Rules:
year will 152 or after

Algorithm: 
declare counter
for each month of the year,. check if the 13th is friday
  if so increment counter by 1

return counter

*/


function fridayThe13ths(year) {
  let count = 0;
  let date = new Date(`January 13, ${year}`);

  for (let month = 0; month < 12; month++) {
    date.setMonth(month);
    date.setDate(13);
    console.log(date, date.getDay());
    if (date.getDay() === 5) count += 1;
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2