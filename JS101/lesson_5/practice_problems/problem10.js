let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof(subArr[0]) === 'string') {
    return subArr.slice().sort((a, b) => b.charCodeAt() - a.charCodeAt());
  } else {
    return subArr.slice().sort((a, b) => Number(b) - Number(a));
  }
});

console.log(newArr);

// could have also used equality operators for character comparisons