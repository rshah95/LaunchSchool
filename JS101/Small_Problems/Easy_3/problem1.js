function crunch(string) {
  let arr = string.split('');
  arr = arr.filter((char, idx) => char !== arr[idx - 1]);
  return arr.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
crunch('');                           // ""