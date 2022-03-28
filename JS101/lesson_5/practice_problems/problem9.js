let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof(subArr[0]) === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => Number(a) - Number(b));
  }
});

console.log(newArr);

// forgot to use slice in order to not modify original array!