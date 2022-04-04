function multiplyAllPairs(arr1, arr2) {
  let arr = [];
  for ( let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2.length; y++ ) {
      arr.push(arr1[x] * arr2[y])
    }
  }
  return arr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); 