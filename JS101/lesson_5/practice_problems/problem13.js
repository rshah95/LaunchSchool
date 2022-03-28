let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  sumA = 0
  sumB = 0
  
  a.forEach(number => {
    if (number % 2 === 1) {
      sumA += number;
    }
  });
  
  b.forEach(number => {
    if (number % 2 === 1) {
      sumB += number;
    }
  });

  return sumA - sumB;
});

console.log(arr);

// should have used .reduce for summing up array

// would have needed to use .filter() to sum up just the odd numbers with reduce