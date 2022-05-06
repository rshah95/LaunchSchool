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



/*


/*
you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, 
without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. 
The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'. 

Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9. 


console.log(solve(123056,1) ==='12056');
console.log(solve(123056,2) ==='1056');
console.log(solve(123056,3) ==='056');
console.log(solve(123056,4) ==='05');
console.log(solve(1284569,1) === '124569');
console.log(solve(1284569,2) === '12456');
console.log(solve(1284569,3) === '1245');
console.log(solve(1284569,4) === '124');


*/