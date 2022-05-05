/*

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

Problem: given an array of integers, return the minimum sum of 5 consecutive numbers in the arrray
input: array of integers
output: integers

Rules:
if the array contains less than 5 elements, function should return null 


Algorithm:
if array length is less than 5, return null

declare array to hold all 5 consecutive sums from the input array
for each element of the array up to array length - 5
  slice array to include next 4 elements
  sum array with reduce
  push sujm to 5 consecutive sums array

sort 5 consecutive sums arrray

return first element of that array

*/


function minimumSum(array) {
  if (array.length < 5) return null;

  let allSums = [];

  for (let idx = 0; idx <= array.length - 5; idx++) {
    let fiveConsecutive = array.slice(idx, idx + 5);

    let sum = fiveConsecutive.reduce((prev, curr) => prev + curr);
    allSums.push(sum);
  }

  return allSums.sort((a, b) => a - b)[0];
}


console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);