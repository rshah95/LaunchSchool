/*

Given a string of integers, return the number of odd-numbered substrings that 
can be formed.
For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, 
a total of 7 numbers.
solve("1341") = 7. See test cases for more examples.

# Examples:
- Ex1 '1341'
  - 1, 1, 3, 41, 341, 1341
  - [str[0..-1], str[1..-1], str[2..-1]
  - [str[0, 1], str[0, 2], str[0, 3] ... [str[0, length of str]
- Ex2 '1357'
 - 1, 3, 1, 13, 1341, 341, 41

console.log(solve("1341") == 7)
console.log(solve("28462713") == 21)
console.log(solve('') == 0)
console.log(solve("37284779745") == 44)
console.log(solve("11111") == 15)
console.log(solve("4736229571") == 39)

 */

function solve(number) {
  let numArr = number.split('');
  let solutionArr = [];


  numArr.forEach((num, idx) => {
    if (num % 2 === 1) {
      solutionArr.push(num);
      if (idx > 0) {
        for (let nextIdx = idx - 1; nextIdx >= 0; nextIdx--) {
          solutionArr.push((numArr.slice(nextIdx, idx + 1).join('')));
        }
      }
    }
  });

  return solutionArr.length;
}
