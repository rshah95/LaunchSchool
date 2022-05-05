/*
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

Problem: given an array of integers, return an array containing the number of elements that are smaller than 
each elements

input: array of integers
output: array of integers

Rules:
count only unique values, number should only be counted once
return array and input array have same length


Algorithm:
initialize array with unique values
iterate through array
  return number of elements in unique array that are smaller than main array element 
    iterate through each element of unique arrayh and compare to the main array element
    keep count of numbers smaller

return array with counts
*/

function smallerNumbersThanCurrent(array) {
  let uniqueValues = [];
  array.forEach(num => {
    if (!uniqueValues.includes(num)) uniqueValues.push(num);
  });

  return array.map(num => {
    let count = 0;
    uniqueValues.forEach(uniqueNum => {
      if (uniqueNum < num) count += 1;
    });

    return count;
  });
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]