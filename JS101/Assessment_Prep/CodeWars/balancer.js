/*
# Write a method that takes a string and returns a boolean indicating if this string has a balanced set of parentheses

*/

function balancer(str) {
  let strArr = str.split('');

  let balance = 0;

  for (let idx = 0; idx < strArr.length; idx++) {
    if (balance < 0) return false;

    if (strArr[idx] === '(') balance += 1;
    if (strArr[idx] === ')') balance -= 1;
  }

  return balance === 0;

}


console.log(balancer("(hi") == false)
console.log(balancer("(hi)") == true)
console.log(balancer("(()) hi") == true)
console.log(balancer(")(") == false)
console.log(balancer("((") == false)
console.log(balancer("()))") == false)