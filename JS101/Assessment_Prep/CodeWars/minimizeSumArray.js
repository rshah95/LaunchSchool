/*
Problem: given an array of integers, return sum of products of each pair of elements in the array

input: array of integers
output: integer

Rules:
array will only contain positives
array will only be even in size
*/


function minSum(array) {
  array = array.sort((a, b) => a - b);
  let sum = 0;
  for (let idx = 0; idx < array.length / 2; idx ++) {
    sum += array[idx] * array[(array.length - 1) - idx]; 
  }

  return sum;
}


// could have use reduce on half of the array or used .pop() to remove elements while iterating 