/*
Problem: identify and return the length of the longest substring of consecutive vowels in a given string
input: string
output: integer

Rules:
vowels are aeiou
string will be lowercase with no spaces

Examples: 
no surprises

Data Structures:

Algorithm:
intitialize variable to hold current vowel string 
initialize variable to hold llongest vowel string

iterate through string
  if letter is vowel, add it to current vowel string
  if letter is not vowel
    if length of current vowel string is greater than 1
      compare length to longest vowel string
        if longer set current vowel string equal to longest
      clear current vowel string 
    else continue

*/


function solve(string) {
  let currentVowelString = '';
  let longestVowelString = '';

  string.split('').forEach(char => {
    if ('aeiou'.includes(char)) {
      currentVowelString += char;
    } else {
      if (currentVowelString.length > longestVowelString.length) {
        longestVowelString = currentVowelString;
      }
      currentVowelString = '';
    }
  });

  return longestVowelString.length
}

console.log(solve("codewarriors") === 2);
console.log(solve("suoidea") === 3);
console.log(solve("ultrarevolutionariees") === 3);
console.log(solve("strengthlessnesses") === 1);
console.log(solve("cuboideonavicuare") === 2);
console.log(solve("chrononhotonthuooaos") === 5);
console.log(solve("iiihoovaeaaaoougjyaw") === 8);



// Another way to solve

function solve2(string) {
  let bunches = string.split('').reduce((prev, current, idx) => {
    if ('aeiou'.includes(current)) {
      if ('aeiou'.includes(string[idx - 1])) {
        prev[prev.length - 1] += current;
      } else prev.push(current);
      return prev;
    } else return prev;
  }, []);

  let count = bunches.map(str => str.length);
  return Math.max(...count);
}

console.log(solve2("iiihoovaeaaaoougjyaw") === 8);