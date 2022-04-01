function stringToSignedInteger(string) {
    let place = 1;
    let number = 0;
  
    for (let num = string.length - 1; num >= 0; num--) {
      if (string[num] === '-') return number * -1;
      if (string[num] === '+') return number;
      
      for (let x = 0; x < 10; x++) { 
        if (string[num] == x) {
          number += place * x;
          break;
        }
      }
      place *= 10;
    }
    return number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


// wasn't supposed to just alter function - oops