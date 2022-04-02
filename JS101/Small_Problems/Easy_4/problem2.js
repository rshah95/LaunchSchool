const readline = require("readline-sync");

let array = []

array[0] = readline.question("Enter the 1st number: ");
array[1] = readline.question("Enter the 2nd number: ");
array[2] = readline.question("Enter the 3rd number: ");
array[3] = readline.question("Enter the 4th number: ");
array[4] = readline.question("Enter the 5th number: ");
let testNum = readline.question("Enter the last number: ");

let inArray = array.includes(testNum)
let string = array.join(',');

if (inArray) {
  console.log(`The number ${testNum} appears in ${string}.`)
} else console.log(`The number ${testNum} does not appear in ${string}.`)