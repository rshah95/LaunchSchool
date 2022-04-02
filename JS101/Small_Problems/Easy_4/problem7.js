function runningTotal(array) {
  let runningTotalArr = [];
  for (let x = 0; x < array.length; x++) {
    let copyArr = array.slice().splice(0, 1 + x);
    let total = copyArr.reduce((prev, current) => prev + current);
    runningTotalArr.push(total);
  }

  return runningTotalArr;
}

console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []