/*
Reverse or rotate?
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
If:
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
- Input: a string of numerical characters and an integer sz representing desires substring size
- Output: the same string with each substring of size sz either rotated or reversed
  - Reverse the substring if the cubes of its digits is divisible by 2
  - Rotate the substring one position to the left otherwise
    i.e. shift first digit in substring to be last digit in substring
  - if input string is empty return empty string
  - if size is 0 or negative return an empty string
  - if size is greater than the length of the string, return an empty string
  
# Examples:
revrot("123456987654", 6) --> "234561876549"
  123456 -> 1**3 + 2**3 + 3**3 + 4**3 + 5**3 + 6**3 = 441, rotated substring => 234561
  987654 -> 9**3 + 8**3 + 7**3 + 6**3 + 5**3 + 4**3 = 1989, rotated substring => 876549
revrot("123456987653", 6) --> "234561356789"
  987653 -> 9**3 + 8**3 + 7**3 + 6**3 + 5**3 + 3**3 = 1952, reverse substring => 356789
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"


Problem: given a string of digits and a divider k, split the string into chuinks of k digits and then perform operations on each chunk depending on certain conditions

input: string of digits
output: string of digits

Rules:
if string length or divider is <= 0, return '' 
if divider is greater than string length, return '' 

modifying chunk
  if cubes of digits is even
    reverse digits
  else 
    shift first digit to last position

algorithm:
return '' if edge cases are met

initialize chunks array
convert string into array of digits

let startIdx = 0
let endIdx = k

while (endIdx <= array.length + 1)
  add slice of array to chucks array
  increment startIdx to equal end endIdx
  increment endIdx by k


iterate through element of chunks array
  if cubes of each subelement is even
    return reverse of element
  else return shifted element


return chunks array as a string



*/

function revrot(str, divider) {
  if (str.length <= 0 || divider <= 0) return '';
  if (divider > str.length) return '';


  let chunksArr = [];
  let strArr = str.split('');
  
  let startIdx = 0;
  let endIdx = divider;

  while (endIdx <= strArr.length) {
    chunksArr.push(strArr.slice(startIdx, endIdx).join(''));
    startIdx = endIdx;
    endIdx += divider;
  }

  let solutionArr  = chunksArr.map(chunk => {
    let cubeSum = chunk.split('').reduce((prev, curr) => prev + curr**3, 0);
    if (cubeSum % 2 === 0) {
      return chunk.split('').reverse().join('');
    } else {
      return chunk.substring(1) + chunk[0];
    }
  });

  return solutionArr.join('');
}


console.log(revrot("123456987654", 6)); // "234561876549"

console.log(revrot("123456987653", 6)) // "234561356789"
console.log(revrot("66443875", 4)) // "44668753"
console.log(revrot("66443875", 8)) // "64438756"
console.log(revrot("664438769", 8)) // "67834466"
console.log(revrot("123456779", 8)) // "23456771"
console.log(revrot("", 8)) // ""
console.log(revrot("123456779", 0)) // "" 
console.log(revrot("563000655734469485", 4)) // "0365065073456944"