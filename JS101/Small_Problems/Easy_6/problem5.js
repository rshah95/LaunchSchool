function negative(number) {
  if (number === 0) return -0;
  return number > 0 ? number * -1 : number;
}

console.log(negative(76));
console.log(negative(-56));
console.log(negative(0));