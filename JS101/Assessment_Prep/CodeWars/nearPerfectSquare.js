/*
Problem: given a number, find the next perfect square
input: integer
output: integer

Rules:
if input is not perfect square, return -1


Algorithm:
if remainder of input / sqrt() !== 0
  return -1

return sqrt + 1 ** 2
*/


function findNextSquare(sq) {
  return sq % Math.sqrt(sq) ? -1 : (Math.sqrt(sq) + 1)**2;
}

console.log(findNextSquare(121));