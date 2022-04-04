function leadingSubstrings(string) {
  let arr = [];
  for (let x = 0; x < string.length; x++) {
    arr.push(string.substring(0, x + 1));
  }
  return arr;
}

function substrings(string) {
  let array = [];
  for (let x = 0; x < string.length; x++) {
    let subArr = leadingSubstrings(string.substring(x));
    subArr.forEach(value => array.push(value));
  }
  return array;
}

function isPalindrome(string1) {
  return string1 === string1.split('').reverse().join('') && string1.length > 1;
}

function palindromes(string) {
  let substringArr = substrings(string);
  let palindromeArr = [];
  for (let x = 0; x < substringArr.length; x++) {
    if (isPalindrome(substringArr[x])) palindromeArr.push(substringArr[x]);
  }

  return palindromeArr;
}

console.log(palindromes('madam'));
console.log(palindromes('abcd'));

console.log(palindromes('hello-madam-did-madam-goodbye'));