/*
Problem: 
input: string
output: string

Rules:
if there are more than 2 consecutive duplicates of a character in the string, the extra characters should be placed in brackets
if input is not string, return "Please enter a valid string"

Examples/TestCases:
no surprising edge cases here 

Data Structures:
array: string will be converted to an array in oprder to parse through characters

Algorithm:
Ensure input is a string
  return specified phrase if it is not 
Convert the string to an array and split by character
Iterate through array in order to look for consecutive matching characters 
  if find more than two matching consecutive characters, place characters in brackets 
    place first bracket on left of first character that is extra
    place right bracker on last character that is extra 
*/


function stringParse(string) {
  if (typeof string !== 'string') return 'Please enter a valid string';

  let array = string.split('');

  for (let x = 0; x < array.length; x++) {
    if (string[x] === string[x + 1] && string[x] === string[x + 2]) {
      let startIndex = x + 2;
      let endIndex = x + 2;
      for (let check = x + 3; check < array.length; check++ ) {
        if (string[x] === string[check]) {
          endIndex = check;
          continue;
        } else break;
      }

      array[startIndex] = '[' + array[startIndex];
      array[endIndex] = array[endIndex] + ']';

      x = endIndex;
    }
  }
  
  return array.join('');
}


console.log(stringParse("aaaabbcdefffffffg") === "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop") === "boopdedoop")
console.log(stringParse("helloookat") === "helloo[o]kat")


function stringParse(string) {
  if (typeof string !== 'string') return 'Please enter a valid string';

  let consecStrings = [];

  string.split('').forEach((char, idx, arr) => {
    if (arr[idx - 1] === char) {
      consecStrings[consecStrings.length - 1] += char;
    } else consecStrings.push(char)
  });

  consecStrings.forEach((str, idx) => {
    if (str.length > 2) {
      consecStrings[idx] = str.substring(0, 2) + '[' + str.substring(2) + ']';
    }
  });

  return consecStrings.join(''); 
}


/*
Algorithm:
string validity check

turn string into array
declare array to hold consecutive strings

iterate through array
  if char same as previous char
    add it to last element of consecutive array
  else 
    add as new element to consecutive array

iterate through array of consecutive strings
  if element length is > 2
    add left brack before third element
    add right bracket at end of element

return concescutive strings array as a string

*/


/*
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical 
characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not. 

Examples:
console.log(stringParse("aaaabbcdefffffffg") === "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop") === "boopdedoop")
console.log(stringParse("helloookat") === "helloo[o]kat")

*/