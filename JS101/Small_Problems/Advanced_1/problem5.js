function merge(arr1, arr2) {
  [arr1, arr2] = [arr1.slice(), arr2.slice()];
  let sortArr = [];
  

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] <= arr2[0] ? sortArr.push(arr1.shift()) : sortArr.push(arr2.shift());
  }

  if (arr1.length === 0) sortArr = sortArr.concat(arr2);
  if (arr2.length === 0) sortArr = sortArr.concat(arr1);

  return sortArr;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]