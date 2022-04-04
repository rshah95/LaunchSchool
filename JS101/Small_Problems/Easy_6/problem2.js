function doubleConsonants(string) {  
  let arr = string.split('').map(char => {
    let noDouble = (/[^a-z]/gi.test(char) || 'aeiou'.includes(char))
    if (noDouble) {
      return char;
    } else return char.repeat(2);
  });
  
  return arr.join(''); 
}


console.log(doubleConsonants('String'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));