import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = '';
  const option = {};
  option.str = `${str}`; 
  
  if (options.repeatTimes) {
    option.repeatTimes = options.repeatTimes;
  } else {
    option.repeatTimes = 1;
  }
  if (options.separator) {
    option.separator = options.separator;
  } else {
    option.separator = '+';
  }
  if (options.addition !== undefined) {
    option.addition = `${options.addition}`;
  }
  if (options.additionRepeatTimes) {
    option.additionRepeatTimes = options.additionRepeatTimes;
  } else {
    option.additionRepeatTimes = 1;
  }
  if (options.additionSeparator) {
    option.additionSeparator = options.additionSeparator;
  } else {
    option.additionSeparator = '|';
  }

  if (option.str) {
    for (let i = 0; i < option.repeatTimes; i++) {
      let res = option.str;
      if (option.addition) {
        for (let j = 0; j < option.additionRepeatTimes; j++) {
          if (j === option.additionRepeatTimes - 1) {
            res += option.addition;
          } else {
            res += option.addition;
            if (option.additionSeparator) {
              res += option.additionSeparator;
            }
          }
        }
      }
      if (i === option.repeatTimes - 1) {
        result += res;
      } else {
        result += res;
        if (option.separator) {
          result += option.separator;
        }
      }
    }
  }
  return result;
}