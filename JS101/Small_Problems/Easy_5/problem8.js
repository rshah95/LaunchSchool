function digitList(number) {
  let arr = (String(number)).split('')
  return arr.map(value => Number(value));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]