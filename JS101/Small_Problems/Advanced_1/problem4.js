function rotate90(matrix) {
  let rotateArr = [];
  let height = matrix.length - 1;

  for (let idx = 0; idx < matrix[0].length; idx++) {
    rotateArr[idx] = [];
    for (let heightIdx = height; heightIdx >= 0; heightIdx--) {
      rotateArr[idx].push(matrix[heightIdx][idx]);
    }
  }

  return rotateArr;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]