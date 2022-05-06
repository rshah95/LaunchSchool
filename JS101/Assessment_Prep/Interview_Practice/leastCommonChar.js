/*

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

Problem: given a string, return the character that appears most frequently. If multiple characters have same frequency, then return character that appears first in the string

input: string
output: string w one character

Rules:
frequency is case insensitive
space and symbols count as characters


Algorithm:
build array with unique characters
build array with frequency of each unique character
  iterate through unique char array with map
    return length of filtered array of original string

find index of character with lowest frequency
use that index to return character with lowest frequency


*/


function leastCommonChar(str) {
  str = str.toLowerCase();
  let uniqueChars = [];
  str.split('').forEach(char => {
    if (!uniqueChars.includes(char)) uniqueChars.push(char);
  });


  let freqUniqueChars = uniqueChars.map(char => {
     return str.split('').filter(filterChar => filterChar === char).length
  });

  let idx = 0;
  freqUniqueChars.forEach((num, index) => {
    if (num < freqUniqueChars[idx]) idx = index;
  });

  return uniqueChars[idx];
  
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
