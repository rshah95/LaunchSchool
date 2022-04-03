function halvsies(array) {
  halfArray = Math.ceil(array.length / 2);
  let arr = [];
  arr[0] = array.slice(0, halfArray);
  arr[1] = array.slice(halfArray);

  
  return arr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]