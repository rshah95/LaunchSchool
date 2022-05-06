/*

How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:
rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
Rot 13 means each letter is replaced by the letter appearing 13 places in the alphabt. after the original letter. Last 13 letters alphabet you start over.


console.log(rot13("Abc") == "Nop")
console.log(rot13("xYz") == "kLm")
console.log(rot13("EBG13 rknzcyr.") == "ROT13 example.")
console.log(rot13("This is my first ROT13 excercise!") == "Guvf vf zl svefg EBG13 rkprepvfr!")




*/

function decodeChar(char) {
  if (!(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) return char;
  
  let uppercase = false;
  if (char >= 'A' && char <= 'Z') uppercase = true;

  char = char.toLowerCase();
  let charCode = char.charCodeAt(0);

  if (charCode <= 109) {
    charCode = charCode + 13;
  } else if (charCode > 109) {
    charCode = Math.abs(122 - (13 + charCode)) + 96;
  }

  if (uppercase === true) return String.fromCharCode(charCode).toUpperCase();

  return String.fromCharCode(charCode);
}

function rot13(str) {
  return str.split('').map(char => decodeChar(char)).join('');
}