function stringToInteger(string) {
  let place = 1;
  let number = 0;

  for (let num = string.length - 1; num >= 0; num--) {
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

console.log(stringToInteger('4321') === 4321); 

// split and reduce would have made a more efficient solution