const readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let retireAge = Number(readline.question("Waht age would you like to retire? "));

let currentYear = 2021;
let yearsLeft = retireAge - age;
let retireYear = 2021 + yearsLeft;


console.log(`\nIt's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You only have ${yearsLeft} years of work to go!`);