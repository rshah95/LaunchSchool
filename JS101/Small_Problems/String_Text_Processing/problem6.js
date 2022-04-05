function staggeredCase(string) {
  return string
    .split('')
    .map((char, idx) => (idx + 1) % 2 === 1 ? char.toUpperCase() : char.toLowerCase())
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));

