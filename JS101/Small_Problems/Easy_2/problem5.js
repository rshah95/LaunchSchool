const readline = require("readline-sync");

let num1 = Number(readline.question('==> Enter the first number:\n'));
let num2 = Number(readline.question('==> Enter the second number:\n'));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);

