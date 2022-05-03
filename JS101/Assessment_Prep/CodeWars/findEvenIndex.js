/*
Problem: given an array of integers, return the index of the position where the sum of left portion
of the array up until the inedx is equal to the sum of the right portion of the array starting from the index

input: array of integers
output: integer

Rules:
if no solution, return -1
integer at index position not incldued in any calculations


Algorithm:
Iterate through each index position of the array
  find sum of left portion
  find sum of right portion
  if sums are equal
    return index

return -1

*/

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftSum;
    let rightSum;
    
    leftSum = array.slice(0, idx).reduce((prev, curr) => prev + curr, 0);
    rightSum = array.slice(idx + 1).reduce((prev, curr) => prev + curr, 0);

    if (leftSum === rightSum) return idx;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
