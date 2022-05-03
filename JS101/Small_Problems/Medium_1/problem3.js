/*
Problem: given a number, rotate the number once for each digit in the number, locking the digit that was rotated on each iteration

input: integer
output: integer

Algorithm: 
convert number to array
iterate through each element of array 
  perform rotateRightmostDigit at each index
  push first digit of return to solution array

return array converted to integer


*/

function rotateRightmostDigits(numArr) {
  numArr.push(numArr.splice(0, 1)[0]);
  return numArr;
}

function maxRotation(num) {
  let maxRotateNum = [];
  let numArray = String(num).split('');
  const NUMBER_LENGTH = numArray.length

  for (let idx = 0; idx < NUMBER_LENGTH; idx++) {
    numArray = rotateRightmostDigits(numArray.slice());
    maxRotateNum.push(numArray.shift());
  }

  return Number(maxRotateNum.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845