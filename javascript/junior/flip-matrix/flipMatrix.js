/*
 * Elements after matrix flip (row:col, row:col, row:col)
 *
 * 0:0, 0:1, 0:2 ==> 0:2, 1:2, 2:2
 * 1:0, 1:1, 1:2 ==> 0:1, 1:1, 2:1
 * 2:0, 2:1, 2:2 ==> 0:0, 1:0, 2:0
 *
 */

const flipMatrix90 = (matrix) => {
  const newMatrix = matrix[0].map(() => []);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newMatrix[col][matrix.length - 1 - row] = matrix[row][col];
    }
  }

  return newMatrix;
};

const flipMatrix180 = (matrix) => {
  return flipMatrix90(flipMatrix90(matrix));
};

const flipMatrix270 = (matrix) => {
  return flipMatrix90(flipMatrix180(matrix));
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrix2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

const output1_1 = flipMatrix90(matrix1);
const output2_1 = flipMatrix180(matrix1);
const output3_1 = flipMatrix270(matrix1);

const output1_2 = flipMatrix90(matrix2);
const output2_2 = flipMatrix180(matrix2);
const output3_2 = flipMatrix270(matrix2);

console.log("90 degrees:", output1_1);
console.log("180 degrees:", output2_1);
console.log("270 degrees:", output3_1);

console.log("90 degrees:", output1_2);
console.log("180 degrees:", output2_2);
console.log("270 degrees:", output3_2);
