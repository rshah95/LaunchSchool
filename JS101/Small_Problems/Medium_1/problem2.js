/*
Problem: given a number and a rotate number, move the digit located at the rotate number, from right to left, to the end
input: two integers
output: integer

Rules:
only one digit moves, the rest shift spot

Examples/test cases:
straight forward

Algorithm:
convert integer to string and then array
splice number specified by rotate number and add it to the end
return joined array converted back to integer

*/


function rotateRightmostDigits(number, rotateNum) {
  let numArr = String(number).split('');

  numArr.push(numArr.splice(-1 * rotateNum, 1)[0]);
  return Number(numArr.join(''));
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
