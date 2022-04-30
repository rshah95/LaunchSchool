/*
Problem: given an input string and substring, return the number of times the substring exists within the input string
input: two strings
output: integer

Rules:
instances can be greater than 1

Examples/test cases:
no surprises

Data Structures:

Algorithm: 
initialize count variable
convert string into array using split
iterate throgh array
  if string sfrom index matches input string, increment count by 1


*/

function substringInstance(string, search) {
  let count = 0;
  string.split('').forEach((_, idx) => {
    let length = search.length;
    if (string.substring(idx, idx + search.length) === search) {
      count += 1;
    }
  });

  return count; 
}

console.log(substringInstance('abcdeb','b') === 2);
console.log(substringInstance('abc','b') === 1);
console.log(substringInstance('abbc','bb') === 1);