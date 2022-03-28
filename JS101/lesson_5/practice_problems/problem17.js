function createUUID() {
  // generate random character code and then convert to string 
  function generateChar() {
    let randomCharCode = Math.floor(Math.random() * 16) + 48;
    if (randomCharCode > 57) {
      randomCharCode += 39;
    }
    return String.fromCharCode(randomCharCode);
  }
  
  let arr = [];
  for (let x = 0; x < 38; x++) {
    if (x === 8 || x === 13 || x === 18 || x === 23) {
      arr.push('-');
    } else {
      arr.push(generateChar());
    }
  }
  let uuid = arr.join('');
  return uuid;
}

console.log(createUUID()); 