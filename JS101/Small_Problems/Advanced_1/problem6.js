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

function arraySplit(array) {
  if (array.length === 1) return array;

  let leftArr = array.slice(0, Math.floor(array.length / 2));
  let rightArr = array.slice(Math.floor(array.length / 2));

  return [arraySplit(leftArr), arraySplit(rightArr)];
}

function mergeNested(array) {
  if (array.length === 1) return array;
  if (array[0].length === 1 && array[1].length === 1) {
    return merge(array[0], array[1]);
  } else return merge(mergeNested(array[0]), mergeNested(array[1]));
}

function mergeSort(array) {
  return mergeNested(arraySplit(array))
}


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]



// overcomplicated process by destructuring and restructuring