/*
Problem
input: 2 integers, n and k
output: string

Rules:
return the smallest possible integer after removing k digits from the integer n
order of digits in integer n must be maintained after removal
any digit can be removed, does not have to be in sequence

Examples/test cases:
no edge cases specified

Data Structure:
use array to hold all possible numbers that can arise from removing k digits from integer n

Algorithm:

convert integer to string and then split into array with each element being one digit of integer
iterate through array and remove first digit that is followed by a smaller digit
  repeat k times
return joined array

*/

function solve(n, k) {
  let array = String(n).split('');

  for (let repeat = 1; repeat <= k; repeat++) {
    for (let idx = 0; idx < array.length; idx++) {
      if (array[idx] > array[idx + 1]) {
        array.splice(idx, 1);
        break;
      }
      if (idx === array.length - 1) array.splice(idx, 1);
    }
  }
  return array.join('');
  
}


console.log(solve(123056,1) ==='12056');
console.log(solve(123056,2) ==='1056');
console.log(solve(123056,3) ==='056');
console.log(solve(123056,4) ==='05');
console.log(solve(1284569,1) === '124569');
console.log(solve(1284569,2) === '12456');
console.log(solve(1284569,3) === '1245');
console.log(solve(1284569,4) === '124');