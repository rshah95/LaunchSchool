/*
Problem:
input: array of integers
output: array of arrays

Rules:
looking for pairs of integers that have a difference of two
  integer location in the array does not matter
if pair found, added as array to result
if multiple pairs found, sorted from least to greatest in output

Examples/Test cases:
no specification for if no valid pairs found

Data Structures:
input array 
array that will hold pairs for output

Algorithm:
declare and initialize pairs - array that will hold output
iterate through array
  if array includes element + 2, add pair as an array to solution array

if solution array length is > 1, sort it by ascending order

*/


function twosDifference(array) {
  let pairsArr = [];

  array.forEach(num => {
    if (array.includes(num + 2)) {
      pairsArr.push([num, num + 2]);
    }
  });

  if (pairsArr.length > 1) {
    pairsArr = pairsArr.sort((a, b) => a[0] - b[0]);
  }

  return pairsArr;
}

//console.log(twosDifference([1,2,3,4]), [[1,3],[2,4]]);
//console.log(twosDifference([1,3,4,6]), [[1,3],[4,6]]);


function twosDifference2(array) {
  return array
    .reduce((prev, curr, _, arr) => {
      if (arr.includes(curr + 2)) {
        prev.push([curr, curr + 2])
      }
      return prev;
    }, [])
    .sort((a,b) => a[0] - b[0]);
}

console.log(twosDifference2([1,2,3,4]), [[1,3],[2,4]]);
