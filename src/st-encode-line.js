import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if(str === '') {
    return '';
  }
  let res = '',
  curent = 0; 
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1] || i === 0) {
      curent++;
    } else {
      if (curent > 1) {
        res += curent + str[i - 1];
      } else {
        res += str[i - 1];
      }
      curent = 1;
    }
    if (i === str.length - 1) {
      if (curent > 1) {
        res += curent + str[i - 1];
      } else {
        res += str[i];
      }
    }
  }
  return res;
}