/*
Problem:
input: array of integers
output: integer, mode of array 

Rules:
if tie for mode, return highest number 
no empty arrays will be given

Examples/ test caases: 
no surprises

Data Structures:
object that holds numbers in array as keys, occurences as values

Algorithm:
Iterate through array to fill object (numbers as keys, occurences as values)

decalre mode variable
set first integer as mode
iterate through object to find number with most occurences 
  if element is > mode, set element to mode
  if element occurences = mode occurences and > mode, set element to mode

*/


function highestRank(array) {
  let obj = {};
  array.forEach(num => {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else obj[num] += 1;
  })

  let mode = array[0];
  for (int in obj) {
    if (obj[int] > obj[mode]) {
      mode = int;
    } else if (obj[int] === obj[mode] && int > mode) mode = int;
  }

  console.log(obj);
  return Number(mode);
}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([1, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));