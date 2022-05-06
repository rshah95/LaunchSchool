/*
Problem: given an integer, return the next biggest number using the same digits
input: integer
output: integer

Rules:
if no bigger number can be made, return -1

Examples/test cases: 
no surprises, straightforward

Algorithm: 
convert integer into array
sort integers in order

initialize solution array 

iterate through number from back to front
  replaceable digit is if the number ahead of current is < current
    if replaceable digit
      freeze numbers ahead of replaceable digit
      from remaining digits 
        add digits in ascending oreder
    if no replacebale digits
      return -1

*/

function nextBiggerNum(num) {
  let str = String(num);
  let arr = str.split('');
  let solution = [];
  let replaceIdx;

  for (let x = str.length; x >= 0; x--) {
    if (str[x] > str[x - 1]) {
      replaceIdx = x - 1;
      break;
    }
  }

  if (replaceIdx === undefined) return -1;


  for (let idx = 0; idx < replaceIdx; idx++) {
    solution.push(arr[idx]);
  }
  arr.splice(0, replaceIdx);
  
  
  arr = arr.sort((a, b) => a - b);
  for (let y = 0; y < arr.length; y++) {
    if (arr[y] > str[replaceIdx]) {
      solution.push(arr[y]);
      arr.splice(y, 1);
      break;
    }
  }
  
  arr.forEach(num => solution.push(num));

  return Number(solution.join(''));
}


console.log(nextBiggerNum2(1432) === 2134);
console.log(nextBiggerNum2(12) === 21);
console.log(nextBiggerNum2(513) === 531);
console.log(nextBiggerNum2(2017) === 2071);
console.log(nextBiggerNum2(111) === -1);
console.log(nextBiggerNum2(531) === -1);
console.log(nextBiggerNum2(123456789) === 123456798);
console.log(nextBiggerNum2(2341) === 2413);


function nextBiggerNum2(num) {
  let digits = String(num).split('');
  let maxNum = Number(digits.sort((a, b) => b - a).join(''));
  let possibleNums = [];

  num++;
  while (num <= maxNum) {
    let strNum = String(num);
    if (digits.every(digit => strNum.includes(digit))) {
      return num;
    }
    num++;
  }

  return -1;
}