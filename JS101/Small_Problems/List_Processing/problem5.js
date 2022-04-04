function leadingSubstrings(string) {
  let arr = [];
  for (let x = 0; x < string.length; x++) {
    arr.push(string.substring(0, x + 1));
  }
  return arr;
}

function substrings(string) {
  let array = [];
  for (let x = 0; x < string.length; x++) {
    let subArr = leadingSubstrings(string.substring(x));
    subArr.forEach(value => array.push(value));
  }
  return array;
}

console.log(substrings('abcde'));