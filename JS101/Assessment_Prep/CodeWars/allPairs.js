/*
Problem: from a given array of integers, return the number of pairs of the same integers exists in the array
input: array of integers
output: integer

Rules:
array can be empty or contain one value -> 0 pairs
if there are multiple pairs of an integer, count each pair only once

Examples/test cases:
no surprises

Data Structures:

Algorithm:
declare sumPairs (will be output)
intialize array for pair check

iterate through input array
  if number in pairCheck
    remove existing number in paircheck
    increment sumPairs by 1
  else 
    add number to paircheck

return sumPairs

*/


function numPairs(array) {
  let sumPairs = 0;
  let pairCheck = [];

  if (array.length < 2) return sumPairs;

  array.forEach(num => {
    if (pairCheck.includes(num)) {
      pairCheck.splice(pairCheck.indexOf(num), 1);
      sumPairs += 1;
    } else pairCheck.push(num);
  });

  return sumPairs;
}


console.log(numPairs([1, 2, 5, 6, 5, 2]) === 2 );
console.log(numPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4 );
console.log(numPairs([0, 0, 0, 0, 0, 0, 0]) === 3 );
console.log(numPairs([1000, 1000]) === 1 );
console.log(numPairs([]) === 0 );
console.log(numPairs([54]) === 0 );


