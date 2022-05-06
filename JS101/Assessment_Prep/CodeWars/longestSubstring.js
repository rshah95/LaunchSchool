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
  let unique = [];
  let idx = 0;
  const result = s.split('').reduce((acc, v) => {
    idx = unique.indexOf(v)
    if (idx !== -1) {
      unique = unique.slice(idx + 1)
    }
    unique.push(v)
    !acc.includes(unique.length) && acc.push(unique.length)
    return acc;
  }, []);
  console.log(result);
  return Math.max(...result);
}

// learn about reduce here

console.log(altlongestSubstringOf("baacab"));



function longestSubstringOf3(s) {
  let uniqueStrings = [];

  let strArr = s.split('');

  for (let idx = 0; idx < strArr.length - 1; idx++) {
    let str = strArr[idx];
    let strIdx = idx + 1;

    while (!str.includes(strArr[strIdx]) && strIdx <= strArr.length - 1) {
      str += strArr[strIdx];
      strIdx++;
    }

    uniqueStrings.push(str);
  }
 
  return uniqueStrings.sort((a, b) => b.length - a.length)[0].length;
}

/*
Algorithm:
declare array to hold all unique strings
iterate from each letter of string until repeat
  build string until repeat
  when repeat, push string to unique string array

*/


/*
You are given a string s. It's a string consisting of letters, numbers or symbols.
Your task is to find the Longest substring consisting of unique characters in s, and return the length of it. 

1 <= s.length <= 10^7
All inputs are valid.


Examples:
longestSubstring("baacab") === 3);
longestSubstring("abcd") === 4);
longestSubstring("hchzvfrkmlnozjk") === 11);
longestSubstring("!@#$%^&^%$#@!") === 7);
longestSubstring("abcd".repeat(10)+"abcde"+"abcd".repeat(10)) === 5);

*/


