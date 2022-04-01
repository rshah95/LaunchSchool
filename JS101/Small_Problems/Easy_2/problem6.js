function penultimate(string) {
  let splitString = string.split(' ');
  return splitString[splitString.length - 2]; 
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true