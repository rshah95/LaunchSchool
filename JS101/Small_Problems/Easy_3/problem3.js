function stringy(int) {
  let number = ''
  for (let x = 0; x < int; x++) {
    if (x % 2 === 0) {
      number += '1';
    } else number += '0';
  }
  return number;
}

console.log(stringy(6));
console.log(stringy(7));