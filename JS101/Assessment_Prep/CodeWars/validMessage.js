/*
Problem: 
input: string
output: boolean

Rules:
if string is empty, return true
input will only consist of strings and messages
numbers can be more than one digit
for valid message
  number must precede string matching number length
  every number in string must have accompanying string of correct length to return true

Examples/test cases:
no surprises


Data structures:
array to hold numbers
array to hold words 
array to break string into numbers/words

Algorithm:
if string is empty, return true

use split to create array from string
  split to form array based on characters
  reduce to form array where integers and words are elements

check if array is of even length
check if even elements are numbers and odd elements are strings 

check that inegers are followed by words of correct lengthj

*/

function isValidMessage(string) {
  if (string === '') return true;

  let array = string.split('').reduce((prev, curr) => {
    if (Number.isNaN(Number(curr))) {
      if (typeof prev[prev.length - 1] === 'number') {
        prev[prev.length] = curr;
        return prev;
      } else {
        prev[prev.length - 1] = prev[prev.length - 1] + curr;
        return prev;
      }
    } else {
      if (typeof prev[prev.length - 1] === 'number') {
        prev[prev.length - 1] = prev[prev.length - 1] * 10 + Number(curr);
        return prev;
      } else {
        prev.push(Number(curr));
        return prev;
      }
    }
  }, []);

  console.log(array);


  for (let idx = 0; idx < array.length; idx++) {
    if (idx % 2 === 0) {
      if (typeof array[idx] !== 'number' || typeof array[idx + 1] !== 'string') {
        return false;
      }
    } else {
      if (typeof array[idx] !== 'string') return false;
    }
  }

  for (let idx = 0; idx < array.length; idx += 2) {
    if (array[idx + 1].length !== array[idx]) return false;
  }

  return true;

}


//console.log(isValidMessage("3hey5hello2hi5"));


function isValidMessage2(string) {
  if (string === '') return true;

  let array = string.split('');
  let pairs = [];

  array.forEach(char => {
    if (!Number.isNaN(Number(char))) {
      if (!Number.isNaN(Number(pairs[pairs.length - 1]))) {
        pairs[pairs.length - 1] += char;
      } else pairs.push(char)
    } else pairs[pairs.length - 1] += char;
  });

  return pairs.every(set => {
    let numberArr = set.split('').filter(num => !Number.isNaN(Number(num)));
    number = Number(set.substring(0, numberArr.length))
    return set.length - numberArr.length === number;
  });
}



console.log(isValidMessage2("4code13hellocodewars"));