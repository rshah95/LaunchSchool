/*
Problem:
input: two strings. each a different word
output: integer

rules:
return sum of number of letters removed from each word in order for the remaining portion of the words to be anagrams
anagrams share the same letters, not necessarily the same order
all inputs will be lowercase

Examples/test cases: 
if two empty strings, return 0
if one empty string, return num of characters in other word
if no shared characters, return sum of num characters in each word 

Data structures:
two objects - one for each word
  objects hold characters of word as keys and frequency as values

Algorithm:
test for empty string/strings and return specified values if satisfied

convert each word to a separate array, split by character
Iterate through each word array to populate a object for each word
  set keys = character, frequency of charcter = value

declare variable to represent letters removed
Compare object keys - not shared keys = characters to remove 

return sum of removed characters

*/

function anagramDifference(word1, word2) {
  if (word1 === '' && word2 === '') return 0;

  let arrWord1 = word1.split('');
  let arrWord2 = word2.split('');
  let objWord1 = {};
  let objWord2 = {};

  loadObject(arrWord1, objWord1);
  loadObject(arrWord2, objWord2);

  let lettersRemoved = 0;
  for (key in objWord1) {
    if (objWord2[key] === undefined) {
      lettersRemoved += objWord1[key];
    } else if (objWord1[key] !== objWord2[key]) {
      lettersRemoved += Math.abs(objWord1[key] - objWord2[key]);
    }
  }
  
  for (key in objWord2) {
    if (objWord1[key] === undefined) {
      lettersRemoved += objWord2[key];
    }
  }

  return lettersRemoved;
}

function loadObject(array, obj) {
  array.forEach(char => {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else obj[char] += 1;
  })
}


console.log(anagramDifference("","") === 0);
console.log(anagramDifference("a","") === 1);
console.log(anagramDifference("", "a") === 1);
console.log(anagramDifference("ab","a") === 1);
console.log(anagramDifference("ab","cd") === 4);
console.log(anagramDifference("aab","a") === 2);
console.log(anagramDifference("a","aab") === 2);
console.log(anagramDifference("codewars","hackerrank") === 10);