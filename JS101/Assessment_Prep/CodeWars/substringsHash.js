/* 
Given a certain string, create a hash with each character in string as key and
all possible substrings in string starting at each character as value.

# Examples:
-'abcd'
key1 == index 0
  - 'a' [0, 1]
  - 'ab'[0, 2]
  - 'abc'[0, 3]
  -'abcd' [0, 4] 
  - starting at the current index moving up the length of this particular
    substring
key2 = index 1
  - 'b' [1, 1]
  - 'bc' [1, 2]
  - 'bcd' [1, 3]
...etc

*/

function consecutiveRuns(str) {
  let solutionObj = {};
  let strArr = str.split('');

  strArr.forEach((char, idx) => {
    if (solutionObj[char] === undefined) {
      solutionObj[char] = [];
    }

    solutionObj[char].push(char);

    for (let substrIdx = idx + 1; substrIdx <= strArr.length - 1; substrIdx++) {
      solutionObj[char].push(strArr.slice(idx, substrIdx + 1).join(''));
    }
  });

  return solutionObj;
}


console.log(consecutiveRuns('abcde'));