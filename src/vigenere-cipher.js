import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  symCode(symbol) {
    return symbol.charCodeAt(0) - 'A'.charCodeAt(0);
  }
  shift(symbol, length) {
      let cod = this.symCode(symbol);
      return String.fromCharCode((cod + length) % 26 + 'A'.charCodeAt(0));
  }
  encrypt(str, key) {
    if (!str) {
        throw new Error(`Incorrect arguments!`);
    }
    return this.getCrypt(str, key, false);
  }
  decrypt(str, key) {
    if (!str) {
      throw new Error(`Incorrect arguments!`);
    }
    return this.getCrypt(str, key, true);
  }
  getCrypt(string, key, isDec) {
    if (string == undefined || key == undefined) {
        throw new Error(`Incorrect arguments!`);
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let coded = 0;
    for(let i = 0; i < string.length; ++i) {
        if(string[i] >= 'A' && string[i] <= 'Z') {
            if(isDec) {
                arr.push(this.shift(string[i], 26 - this.symCode(key[coded % key.length])));
            } else {
                arr.push(this.shift(string[i], this.symCode(key[coded % key.length])));
            }
            coded++;
        } else {
            arr.push(string[i]);
        }
    }
    if(!this.direct) {
        arr.reverse();
    }
    return arr.join('');
  }
}
