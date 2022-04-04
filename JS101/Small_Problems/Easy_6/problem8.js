function sequence(num1, num2) {
  return [...Array(num1)].map((_, idx) => (idx + 1) * num2);
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 100000));