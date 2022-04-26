/*
Problem: for an input string, return the minimum unique substring and the number of times it is repeated
input: string
output: array consisting of string and integer

Rules:
input string is not empty
input string consists of lowercase latin letters


Examples/ test cases:
no surprises

Data Structures:
array of divisible numbers

Algorithm:
  construct array of divisible numbers between 1-length / 2
  for each divisible number, check if string is repeat of first (divisibl number) elements of string
    if is repeat, return substring and substring length
  return string, 1

*/

function repeatedSubstring(string) {
  let divisibleNumbers = [];
  for (let num = 1; num <= string.length / 2; num++) {
    if (string.length % num === 0) {
      if (divisibleNumbers.includes(string.length / num)) continue;
      divisibleNumbers.push(num);
    }
  }

  for (let idx = 0; idx < divisibleNumbers.length; idx++) {
    let substring = string.substring(0, divisibleNumbers[idx]);
    let stringCheck = string.split(substring);
    if (stringCheck.every(str => str === '')) return [substring, string.length / substring.length];
  }

  return [string, 1];
}

console.log(repeatedSubstring('abababab')); 
console.log(repeatedSubstring("abcde"));
console.log(repeatedSubstring("adad"));


function repeatedSubstring2(string) {
  for (let count = 1; count <= string.length / 2; count++) {
    let idx = count - 1;
    if (string.length % count === 0) {
      let substring = string.substring(0, count);
      if (substring.repeat(string.length / count) === string) return [substring, string.length / substring.length];
    }
  }
  return [string, 1];
}