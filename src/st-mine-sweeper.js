import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let array = [];
  matrix.forEach( (arr,i) => {
    array.push([]);
    arr.forEach( (item,j) => {
      let count = 0;
      try{
        if (matrix[i][j - 1] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i][j + 1] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i - 1][j] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i + 1][j] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i - 1][j - 1] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i - 1][j + 1] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i + 1][j - 1] === true ) {
          count++;
        }
      } catch(e){}
      try{
        if (matrix[i + 1][j + 1] === true ) {
          count++;
        }
      } catch(e){}
      array[i].push(count);
    });
  });
  return array;
}