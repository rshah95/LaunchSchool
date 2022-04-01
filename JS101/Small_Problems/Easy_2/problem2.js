const readline = require("readline-sync");

let name = readline.question("What is your name? ");
let greeting = `Hello ${name}`

if (name[name.length - 1] === '!') {
  console.log(greeting.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else console.log(greeting + '.');

