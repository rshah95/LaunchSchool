/*
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

Problem: given an array of integers, return the two integers of the array that are closest together in value
input: array of integers
output: array of two integers

Rules: 
order the two elements by their positions in the original array


Algorithm: 

declare new array and initialize to sorted input array descending order
using reduce on sorted array with initial of empty array
  load first two elements into accumulator if empty array
  if not empty, 
    if difference between accumulator elements is > difference next two elements
      replace accumulator elements with next two elements
  
  return accumulator

sort accumulator by index position of elements in original array and return 

*/


function closestNumbers(array) {
  let sortArr = array.slice().sort((a, b) => b - a);

  let solutionArr = sortArr.reduce((acc, current, idx) => {
    if (sortArr[idx +  1] === undefined) {
      return acc;
    }
    
    if (acc.length === 0) {
      acc = [current, sortArr[idx + 1]];
      return acc;
    }

    let accDiff = acc[0] - acc[1];
    let nextDifference = current - sortArr[idx + 1];
    if (nextDifference <= accDiff) {
      acc = [current, sortArr[idx + 1]];
    }
    return acc;
  }, [])

  return solutionArr.sort((a, b) => array.indexOf(a) - array.indexOf(b));
}


console.log(closestNumbers([5, 25, 15, 11, 20]));
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]