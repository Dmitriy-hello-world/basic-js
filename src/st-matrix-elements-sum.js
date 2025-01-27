import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let count = 0;
  matrix.forEach( (arr,j) => {
    arr.forEach( (n,i) => {
      if (j === 0) {
        count += +n;
      } else {
        if (matrix[j - 1][i] !== 0) {
          count += +n;
        }
      }
    });
  });
  return count;
}
