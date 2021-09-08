import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let subArr = [];
  let mainArr = [];
  arr.forEach( item => {
    if (item === -1) {
      mainArr.push(item);
    } else {
      mainArr.push(0);
      subArr.push(item);
    }
  });
  subArr.sort((a,b) => {
    return b - a;
  });
  for(let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] === 0) {
      mainArr[i] = subArr[subArr.length - 1];
      subArr.pop();
    }
  }
  return mainArr;
}