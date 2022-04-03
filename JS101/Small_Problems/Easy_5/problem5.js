function interleave(arr1, arr2) {
  let newArr = [];
  for (let x = 0; x < arr1.length; x++) {
    newArr.push(arr1[x]);
    newArr.push(arr2[x]);
  }
  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));