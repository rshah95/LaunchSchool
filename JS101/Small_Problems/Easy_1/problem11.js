function utf16Value(string) {
  let total = 0;
  for (let x = 0; x < string.length; x++) {
    total += string.charCodeAt(x);
  }
  return total;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA)); 