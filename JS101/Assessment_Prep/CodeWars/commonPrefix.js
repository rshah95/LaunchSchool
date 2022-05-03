/*
Problem: given an array of strings, return the longest prefix that is shared among all the strings in the array

input: array of strings
output: string

Rules:
if no common prefix, return empty string
all strings in the array will be comprised of lowercase letters

ALgorithm:
initialize empty string 'solution'

iterate through characters of first string in array
  if all strings contain substring
    add letter to 'solution'
  else return solution

*/


function commonPrefix(array) {
  let solution = '';

  for (let idx = 0; idx < array[0].length; idx++) {
    let firstWordSubstring = array[0].substring(0, idx + 1);
    if (array.every(str => str.substring(0, idx + 1) === firstWordSubstring)) {
      solution = firstWordSubstring;
    } else return solution;
  }
  return solution;
}


console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(commonPrefix(['dog', 'racecar', 'car']) === '');
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(commonPrefix(['throne', 'throne', 'throne']) === 'throne');