/*
Problem:
input: string
output: integer

Rules:
all inputs are valid
return length of longest string that contains no repeating characters
  string must be consecutive characters of string 

Examples/test cases:
no edge cases specified despite saying all inputs are valid
  will return 0 if input is not string

Data Structures:

none needed 

Algorithm:

declare longestString variable and intialize to 0

iterate through each character of string to find longest substring from each index
  if longest substring is > current longestString, set equal to longest String
  if length of input - current index < current longestString, break

return longestSubstring

*/

function longestSubstring(string) {
  let longestString = 0;
  
  for (let idx = 0; idx < string.length; idx++) {
    let currentString = string[idx];
    
    if (string.length - 1 - idx < longestString) break;
    
    for (let idx2 = idx + 1; idx2 < string.length; idx2++) {
      if (!currentString.includes(string[idx2])) {
        currentString += string[idx2];
      } else break;
    }

    if (longestString < currentString.length) longestString = currentString.length;
  }

  return longestString;
}

console.log(longestSubstring("baacab") === 3);

console.log(longestSubstring("abcd") === 4);

console.log(longestSubstring("hchzvfrkmlnozjk") === 11);

console.log(longestSubstring("!@#$%^&^%$#@!") === 7);

console.log(longestSubstring("abcd".repeat(10)+"abcde"+"abcd".repeat(10)) === 5);




function altlongestSubstringOf(s){
  let unique = []
  let idx = 0
  const result = s.split('').reduce((acc, v) => {
    idx = unique.indexOf(v)
    if (idx !== -1) {
      unique = unique.slice(idx + 1)
    }
    unique.push(v)
    !acc.includes(unique.length) && acc.push(unique.length)
    console.log(acc);
    return acc;
  }, [])
  return Math.max(...result)
}

// learn about reduce here

console.log(altlongestSubstringOf("baacab"));