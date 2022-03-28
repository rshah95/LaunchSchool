let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
  let filter = subArr.filter(number => {
    if (number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  });
  return filter;
});

console.log(newArr); 

// correct implementation/steps but poor syntax

// false condition not needed, meaning conditional could be one liner