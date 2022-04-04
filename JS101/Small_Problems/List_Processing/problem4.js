function leadingSubstrings(string) {
  let arr = [];
  for (let x = 0; x < string.length; x++) {
    arr.push(string.substring(0, x + 1));
  }
  return arr;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));