function sequence(number) {
  let arr = [];
  for (let x = 1; x <= number; x++) {
    arr.push(x);
  }
  return arr;
}

console.log(sequence(5));