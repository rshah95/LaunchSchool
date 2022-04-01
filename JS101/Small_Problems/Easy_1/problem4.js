const readline = require("readline-sync");

function calculateArea(length, width) {
  let areas = []; 
  areas[0] = (Number(length) * Number(width)).toFixed(2);
  areas[1] = (areas[0] * 10.7639).toFixed(2);
  return areas; 
}

console.log("Enter the length of the room in meters:")
let length = readline.prompt();
console.log("Enter the width of the room in meters:")
let width = readline.prompt();

let areas = calculateArea(length, width);

console.log(`The area of the romm is ${areas[0]} square meters (${areas[1]} square feet)`);


