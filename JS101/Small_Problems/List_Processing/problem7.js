function sumOfSums(array) {
  let newArr = array.map((_, idx) => {
    let x = idx;
    let sum = 0;
    while (x >= 0) {
      sum += array[x];
      x--;
    }
    return sum
  })
  return newArr.reduce((prev, curr) => prev + curr);
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));