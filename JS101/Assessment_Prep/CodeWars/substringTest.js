/*
Problem: given two strings, identify whether there is a substring that is shared within both strings
input: two strings
output: boolean

Rules: 
only care about substrings longer than one letter
case-insenstive but strings may contain upper and lowercase letters
strings and valid substrings can contain numbers


Algorithm:
iterate through all substrings of shortest word
  if substring present in other word, return true

return false
*/


function substringTest(string1, string2) {
  let shortString = string1.toLowerCase();
  let longString = string2.toLowerCase();
  
  if (string1.length > string2.length) {
    shortString = string2.toLowerCase();
    longString = string1.toLowerCase();
  }

  for (let charIdx = 0; charIdx < shortString.length; charIdx++) {
    for (let substringIdx = charIdx + 1; substringIdx <= shortString.length; substringIdx++) {
      let substring = shortString.substring(charIdx, substringIdx);
      if (longString.split(substring).length > 1 && substring.length > 1) return true;
    }
  }

  return false;
}


console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('atrocious', 'expialidocious') === true);
