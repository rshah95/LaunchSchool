/*
Problem: given a number, return the next featured number
input: integer
output: integer 

Rules:
featured number is:
  odd
  multiple of 7
  digits only occur once


*/


function isFeaturedNumber(number) {
  if (number % 7 !== 0 || number % 2 !== 1) return false;

  let arr = String(number).split('');
  return arr.every((digit, idx) => !arr.slice(idx + 1).includes(digit));
}

function nextFeatured(number) {
  if (number + 1 > 9876543201) return 'Error: no possible number';
  
  number = (Math.floor(number / 7) + 1) * 7;
  while (!isFeaturedNumber(number)) {
    number += 7;
  }

  return number;
}

console.log(nextFeatured(12));           // 21
console.log(nextFeatured(20));           // 21
console.log(nextFeatured(21));           // 35
console.log(nextFeatured(997));          // 1029
console.log(nextFeatured(1029));         // 1043
console.log(nextFeatured(999999));       // 1023547
console.log(nextFeatured(999999987));    // 1023456987
console.log(nextFeatured(9876543186));   // 9876543201
console.log(nextFeatured(9876543200));   // 9876543201
console.log(nextFeatured(9876543201));   // "There is no possible number that fulfills those requirements."