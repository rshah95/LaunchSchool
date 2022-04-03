function union(arr1, arr2) {
  let unionArr = arr1.slice();
  arr2.forEach(value => {
    if (!unionArr.includes(value)) unionArr.push(value);
  })
  
  return unionArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));