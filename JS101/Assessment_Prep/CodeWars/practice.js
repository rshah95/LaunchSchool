/*
Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
console.log(["bella", "label", "roller"]) == ["e", "l", "l"]);
console.log(["cool", "lock", "cook"]) == ["c", "o"]);
console.log(["aabbaa", "cccdddd", "eeffee", "ggrrrr"]) == []);
*/


/*
Problem: return an array of characters that are repeated in each element of an input string
input: array of strings
output: array of characters

Rules:
no empty array will be an input
if character occurs multiple times in each word, that should be reflected in output 

Examples: 
no surprises

Data Structures:
object to store first word


Algorithm:
iterate through first word
  initialize minCount = 0
  use filter to isolate freq of char in each word
    set minCount to lowest number of occurences
  
  if minCount greater than 0, add char to array minCount number of times
*/


function duplicates(array) {
  let firstWord = array[0];
  let otherWords = array.slice(1);
  let output = [];

  for (let idx = 0; idx < firstWord.length; idx++) {
    if (output.includes(firstWord[idx])) continue;
    
    let firstWordCount = firstWord.split('').filter(char => char === firstWord[idx]).length;
    let minCount = firstWordCount;
    otherWords.forEach(word => {
      wordCount = word.split('').filter(letter => letter === firstWord[idx]).length;
      if (wordCount < minCount) minCount = wordCount;
    });

    for (let add = 1; add <= minCount; add++) {
      output.push(firstWord[idx]);
    }
  }

  return output;
}



console.log(duplicates(["bella", "label", "roller"]));
console.log(duplicates(["cool", "lock", "cook"]));
console.log(duplicates(["aabbaa", "cccdddd", "eeffee", "ggrrrr"]));