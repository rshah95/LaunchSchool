/*
Problem: given an input number, return the number of positive odd numbers below the number

input: integer
output: integer

Rules:
Expect large numbers, straight forward 

Algorithm:
odd numbers is n / 2 rounded down

*/


function countOddBelow(num) {
  return Math.floor(num / 2);
}