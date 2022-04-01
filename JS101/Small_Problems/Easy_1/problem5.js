const readline = require("readline-sync");

let bill = Number(readline.question("What is the total bill? "));
let tipPercent = Number(readline.question("What is the tip percentage? "));
let tip = (tipPercent / 100) * bill;
let total = tip + bill;

console.log(`\nThe tip is $${tip}`);
console.log(`The total is $${total}`);