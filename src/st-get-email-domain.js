import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let result = '';
  for (let i = email.length - 1; i > 0; i--) {
    if (email[i] === '@') {
      for (let j = ++i; j < email.length; j++) {
        result += email[j];
      }
      break;
    }
  }
  return result;
}