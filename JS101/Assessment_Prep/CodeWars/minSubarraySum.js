/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous 
subarray of which the sum ≥ s. If there isn't one, return 0 instead.

# Examples:
[2,3,1,2,4,3], 7
2
2 + 3
2 + 3 + 1
2 + 3 + 1 + 2
2 + 3 + 1 + 2 + 4
2 + 3 + 1 + 2 + 4 + 3
3
3 + 1
3 + 1 + 2
3 + 1 + 2 + 4
3 + 1 + 2 + 4 + 3
1
1 + 2
1 + 2 + 4
1 + 2 + 4 + 3
2
2 + 4
2 + 4 + 3
4
4 + 3 = 7 **
3

console>.log(minSubLength([2,3,1,2,4,3], 7) == 2)
console>.log(minSubLength([1, 10, 5, 2, 7], 9) == 1)
console>.log(minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4)
console>.log(minSubLength([1, 2, 4], 8) == 0)


*/

function minSubLength(array, targetSum) {
  let minLengths = [];
  if (array.reduce((prev, curr) => prev + curr) < targetSum) return 0;

  for (let idx = 0; idx < array.length; idx++) {
    let num = array[idx];
    let minLength = array.length + 1;
    if (num > targetSum) return 1;

    for (let subIdx = idx + 1; subIdx < array.length; subIdx++) {
      let subArr = array.slice(idx, subIdx + 1)
      if (subArr.reduce((prev, curr) => prev + curr) >= targetSum) {
        minLength = subArr.length;
        break;
      }
    }

    minLengths.push(minLength);
  }

  return Math.min(...minLengths);
  
}

console.log(minSubLength([2,3,1,2,4,3], 7) == 2);
console.log(minSubLength([1, 10, 5, 2, 7], 9) == 1)
console.log(minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4)
console.log(minSubLength([1, 2, 4], 8) == 0)