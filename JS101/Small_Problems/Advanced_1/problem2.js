const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];


function transpose(matrix) {
  return matrix.map((arr, idx) => {
    let construct = [];
    matrix.forEach(array => construct.push(array[idx]))
    return construct;
  });
}

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);


function transposeInPlace(matrix) {
  [matrix[0][1], matrix[1][0]] = [matrix[1][0], matrix[0][1]];
  [matrix[0][2], matrix[2][0]] = [matrix[2][0], matrix[0][2]];
  [matrix[1][2], matrix[2][1]] = [matrix[2][1], matrix[1][2]];
}

transposeInPlace(matrix);
console.log(matrix);