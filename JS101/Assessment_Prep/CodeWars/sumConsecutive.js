/*
Problem: 
input: array of integers
output: array of integers

Rules:
Only consecutive, equal integers are summed
input array will not be empty 

Examples/Test cases:
no surprises

Data Structures:
input array
array containing summed integers where appropriate

Algorithm:
  initialize empty array
  iterate though array
    if first number, push to new array
    if not first number, check and see if same as previous number
      if not same, push to array 
      if same, add to last number of array 

*/



function sumConsecutives(array) {
  let sumArr = [];

 for (let idx = 0; idx < array.length; idx++) {
   if (idx === 0) {
     sumArr.push(array[idx]);
     continue;
   }

   if (array[idx] === array[idx - 1]) {
     sumArr[sumArr.length - 1] += array[idx];
   } else sumArr.push(array[idx]);
 }

 return sumArr;
}


function sumConsecutives2(array) {
  return array.reduce((prev, curr, i, arr) => {
    if(curr != arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    console.log(prev);
    return prev;
  }, []);
}


console.log(sumConsecutives2([1,4,4,4,0,4,3,3,1]), [1,12,0,4,6,1])
console.log(sumConsecutives2([1,1,7,7,3]), [2,14,3])
console.log(sumConsecutives2([-5,-5,7,7,12,0]), [-10,14,12,0])
console.log(sumConsecutives2([3,3,3,3,1]), [12, 1])