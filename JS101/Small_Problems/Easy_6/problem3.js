function reverseNumber(number) {
  let arr = String(number).split('');
  let reverse = [];
  arr.forEach((num, idx) => {
    reverse[arr.length - 1 - idx] = num;
  })
  
  return Number(reverse.join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12000));    // 21
console.log(reverseNumber(1));        // 1