/* 
Problem: 
input: unknown number of integers or stirngs
output: boolean

Rules:
return true if input arguments contains duplicates 

Examples/test cases:
no surprises

Data Structures:
convert arguments into array 

Algorithm:
convert arguments into an array
iterate through array looking for duplicate
  convert numbers to strings for comparisons
  if duplicate found, return true

if at end of iteration no duplicates, return false 

*/


function solution() {
  let args = [];
  for (let x = 0; x < arguments.length; x++) {
    args.push(String(arguments[x]));
  }
  
  for (let idx = 0; idx < args.length - 1; idx++) {
    if (args.slice(idx + 1).includes(args[idx])) return true;
  }

  return false;
}


console.log(solution(1,2,3) === false);
console.log(solution(1,2,3,6,5,6) === true);
console.log(solution('a','b','c','a') === true);
console.log(solution(1,2,3,'a','b') === false);