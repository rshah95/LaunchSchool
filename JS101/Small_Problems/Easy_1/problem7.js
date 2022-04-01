function shortLongShort (string1, string2) {
  let shortString = string1;
  let longString = string2;

  if (string1.length > string2.length) {
    shortString = string2;
    longString = string1;
  }
  
  let string = shortString.concat(longString).concat(shortString);
  return string;
}

let output = shortLongShort('abcde', 'fgh'); 

console.log(output);

// should be doing string operatio in return statements to increase efficiency