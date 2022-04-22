/*
Problem: given an array, return an array that only contains each element a given number of times
input: array of integers, integer
ouput: array of integers

Rules:
each element of an array can only repeat a given number of times

Example/test cases:
no surprises

Data structures:
object to hold unique elements and their frequency
array to hold final output

Algorithm: 
declare empty array that will hold solution
declare empty object that will hold character data

iterate through array
  if element exists in object
    if value is equal to max occurrences
      continue
    if value is less than max occurences
      add element to solution array
      increment object value for element by 1

return output array
*/


function deleteNth(arr, n) {
  const MAX_OCCURRENCES = n;
  let output = [];
  let countObj = {};

  arr.forEach(num => {
    if (countObj[num] !== undefined) {
      if (countObj[num] < MAX_OCCURRENCES) {
        output.push(num);
        countObj[num] += 1;
      }
    } else {
      output.push(num);
      countObj[num] = 1;
    }
  });

  return output;
}

console.log(deleteNth([20,37,20,21], 1), [20,37,21]);
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);


//another solution?
function deleteNth2(arr, n) {
  const MAX_OCCURRENCES = n;
  let output = [];

  arr.forEach(num => {
    if (output.filter(elem => elem === num).length < MAX_OCCURRENCES) {
      output.push(num);
    }
  });

  return output;
}