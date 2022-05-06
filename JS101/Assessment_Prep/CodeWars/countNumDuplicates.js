/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and 
lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


console.log(duplicate_count("") == 0)
console.log(duplicate_count("abcde") == 0)
console.log(duplicate_count("abcdeaa") == 1)
console.log(duplicate_count("abcdeaB") == 2)
console.log(duplicate_count("Indivisibilities") == 2)




*/

function duplicateCount(str) {
  if (str === '') return 0;
  
  let strArray = str.toLowerCase().split('');
  let duplicateArr = [];

  for (let idx = 0; idx < strArray.length; idx++) {
    let char = strArray[idx];
    if (duplicateArr.includes(char)) continue;

    if (strArray.filter(filterChar => filterChar === char).length >= 2) {
      duplicateArr.push(char);
    }
  }

  return duplicateArr.length;

}

console.log(duplicateCount("") == 0);
console.log(duplicateCount("abcde") == 0);
console.log(duplicateCount("abcdeaa") == 1)
console.log(duplicateCount("abcdeaB") == 2)
console.log(duplicateCount("Indivisibilities") == 2)