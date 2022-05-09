/*

Problem
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers


console.log(max_sequence([]) == 0)
console.log(max_sequence([11]) == 11)
console.log(max_sequence([-32]) == 0)
console.log(max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12)

*/

function maxSequence(array) {
  if (array.length === 0) return 0;

  let maxSumArr = [];

  array.forEach((num, idx) => {
    let currSum = num;

    for (let subIdx = idx + 1; subIdx < array.length; subIdx ++) {
      let subSum = array.slice(idx, subIdx + 1).reduce((prev, curr) => prev + curr);
      if (subSum > currSum) currSum = subSum;
    }

    maxSumArr.push(currSum);
  });

  return Math.max(...maxSumArr) > 0 ? Math.max(...maxSumArr) : 0;
}



console.log(maxSequence([]) == 0)
console.log(maxSequence([11]) == 11)
console.log(maxSequence([-32]) == 0)
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12)