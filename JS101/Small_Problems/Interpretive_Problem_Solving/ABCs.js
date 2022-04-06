function isBlockWord(word) {
  word = word .toUpperCase()
  let block = {
    B:'O',   X:'K',  D:'Q',   C:'P',   N:'A',
    G:'T',   R:'E',  F:'S',  J:'W',   H:'U',
    V:'I',   L:'Y',  Z:'M'
  }

  for (let x = 0; x < word.length; x++) {
    if (word.includes(block[word[x]])) return false;
    if (word.substring(x + 1).includes(word[x])) return false;
  }

  return true;
}

console.log(isBlockWord('batch'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

/*

** Problem
** input: word in string format
** output: boolean, whether word can be made
** condition for boolean: 13 pairs of letters, only one of
    the letters from each pair can be in the word.

** Examples/test cases
** must account for lowercase and uppercase words, letter cannot repear
** otherwise straightforward

** Data Structures 
** will store pairs in an object 

** Algorithm
** iterate through each char of word: if key is in word, make sure pair is not

*/
