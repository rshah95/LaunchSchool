const readline = require("readline-sync");

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter a adjective: ");
let adverb = readline.question("Enter a adverb: ");

console.log(`Dont you hate it when a ${adjective} ${noun} ${adverb} ${verb}?`)