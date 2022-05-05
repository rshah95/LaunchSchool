/*
Problem: given an integer, return array of all divisors of that number 
input: integer
output: array or string (if num is prime)

Rules:
input number is greater than 1


Algorithm:
iterate through 0 - n / 2
  if remainder of n / increment is 0
    add to array

*/


function divisors(integer) {
  let divisorArr = [];
  for (let x = 2; x <= integer / 2; x++) {
    if (integer % x === 0) divisorArr.push(x);
  }

  return divisorArr.length ? divisorArr : `${integer} is prime`;

}