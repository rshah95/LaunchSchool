function repeater(string) {  
  let arr = string.split('').map(char => char.repeat(2)) 
  return arr.join(''); 
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""