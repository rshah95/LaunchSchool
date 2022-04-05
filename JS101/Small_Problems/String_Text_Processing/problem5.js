function swapCase(string) {
  return string
    .split('')
    .map(char => (char >= 'A' && char <= 'Z') ? char.toLowerCase() : char.toUpperCase())
    .join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV')); 