/*
Problem: given a year, find the next year that is comprised of unique digits 
input: integer
output: integer

Rules:
input year will be between 1000 and 9000


Algorithm:
increment input by 1
  check if unique
    iterate through 3 of the numbers
      see if numbers following contain match
    return
*/


function uniqueNumber(num) {
  let digits = [];
  let numString = String(num);

  for (let idx = 0; idx < numString.length; idx++) {
    if (digits.includes(numString[idx])) {
      return false;
    } else digits.push(numString[idx]);
  }

  return true;
}


function distinctDigitYear(year) {
  year++;
  while (!uniqueNumber(year)) {
    year++;
  }

  return year;
}


console.log(distinctDigitYear2(1987));



function distinctDigitYear2(year) {
  let numArr;

  do {
    year++;
    numArr = String(year).split('');
  } while (!numArr.every((num, idx) => !numArr.slice(0, idx).concat(numArr.slice(idx + 1)).includes(num)));
  
  return year; 
}