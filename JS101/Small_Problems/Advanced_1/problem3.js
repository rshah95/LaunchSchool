const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];


function transpose(matrix) {
  let width = matrix[0].length;
  let transposeArr = [];

  for (let widthIdx = 0; widthIdx < width; widthIdx++) {
    transposeArr[widthIdx] = [];
    matrix.forEach(array => transposeArr[widthIdx].push(array[widthIdx]));
  }

  return transposeArr;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);