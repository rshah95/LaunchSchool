/*
Problem: 
Input: string
output: string

Rules:
return string that has only charactrers that appear more than once in input string
  only unique characters removed, duplicates remain 

Examples/test cases:
no surprises

Data Structures:
two arrays
  one array holding duplicate characters 
  one array that is string converted to array 

Algorithm:
split string into array 
iterate through array of characters 
  if rest of string contains duplicate, add charcter to array
  if duplicate array cotains char, add char to duplicate array 

return duplicate array as string

*/


function onlyDuplicates(string) {
  let array = string.split('');
  let duplicates = [];

  array.forEach((char, idx) => {
    if (array.slice(idx + 1).includes(char) || duplicates.includes(char)) {
      duplicates.push(char);
    }
  })
  
  return duplicates.join('');
}


console.log(onlyDuplicates('abccdefee') === 'cceee');
console.log(onlyDuplicates('hello') === 'll');
console.log(onlyDuplicates('colloquial') === 'ollol');
console.log(onlyDuplicates('foundersandcoders') === 'ondersndoders');
