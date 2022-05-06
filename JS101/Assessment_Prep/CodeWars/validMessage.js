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

/*
Algo:

*/


/*
In this kata, you have an input string and you should check whether it is a valid message. To decide that, 
you need to split the string by the numbers, and then compare the numbers with the number of characters in 
the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, 
because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, 
the result is true.

Notes:
    Messages are composed of only letters and digits
    Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
    Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
    If the message is an empty string, you should return true

Examples:
console.log((isAValidMessage("3hey5hello2hi") === true));
console.log((isAValidMessage("4code13hellocodewars") === true));
console.log((isAValidMessage("3hey5hello2hi5") === false));
console.log((isAValidMessage("code4hello5") === false));
console.log((isAValidMessage("1a2bb3ccc4dddd5eeeee") === true));
console.log((isAValidMessage("") === true));

*/