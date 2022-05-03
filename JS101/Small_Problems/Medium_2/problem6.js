function sumSquareDifference(number) {
  let sumOfSquares = 0
  let sum = 0
  for (let num = 1; num <= number; num++) {
    sum += num;
    sumOfSquares += num**2;
  }

  return sum**2 - sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150



// mistakeL: doing the same iteration so more effiecnt to do both processes at once