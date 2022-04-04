function buyFruit(array) {
  let newArr = [];
  array.forEach(subArr => {
    let repeat = subArr[1];
    while (repeat > 0) {
      newArr.push(subArr[0]);
      repeat--;
    }
  })

  return newArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));