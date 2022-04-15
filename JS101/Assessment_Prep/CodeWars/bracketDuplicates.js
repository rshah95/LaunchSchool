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