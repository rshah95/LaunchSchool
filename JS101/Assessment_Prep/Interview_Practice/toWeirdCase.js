/*
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

Problem: given a string, return the string with every fourth character of every second word capitalized
input: string
output: string

Rules: 
other characters remain the same 
if second word length is less than 4, no change
can be multiple characters capitalized per word


Algorithm: 
convert string into array split by word
iterate through words array with for loop
  check multiples of 4 until pass word length
    each multiple of 4, uppercase character


return array converted back to string


*/


function toWeirdCase(string) {
  let stringArr = string.split(' ');

  for (let idx = 1; idx < stringArr.length; idx += 2) {
    let charMultiple = 3;
    while (charMultiple < stringArr[idx].length) {
      let currWord = stringArr[idx];
      stringArr[idx] = currWord.substring(0, charMultiple) + currWord[charMultiple].toUpperCase() +
                 currWord.substring(charMultiple + 1);
      
      charMultiple += 4;
    }
  }

  return stringArr.join(' ');
}


console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');