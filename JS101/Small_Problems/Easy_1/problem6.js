const readline = require("readline-sync"); 

let integer = Number(readline.question("Please enter an integer greater than 1: "));
let operation = readline.question('Enter "s" to compute the sum or "p" to compute thr product: ');

function mathOperation(integer, operation) {
  if (integer === 1) {
    return 1;
  } else {
    if (operation === 's') {
      return integer + mathOperation(integer - 1, operation);
    } else if (operation === 'p') {
      return integer * mathOperation(integer - 1, operation);
    }
  }
}

let solution = mathOperation(integer, operation);

if (operation === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${solution}.`);
} else if (operation === 'p') {
  console.log(`The sum of the integers between 1 and ${integer} is ${solution}.`);
}