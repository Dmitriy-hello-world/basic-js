import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    if (!this.arr) {
      this.arr = [];
    }
    return this.arr.length;
  },
  addLink(value) {
    if (!this.arr) {
      this.arr = [];
    }
    this.arr.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (!this.arr) {
      this.arr = [];
    }
    if (!this.arr[position - 1]) {
      delete this.arr;
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.arr.splice(position - 1,1);
    }
    return this;
  },
  reverseChain() {
    if (!this.arr) {
      this.arr = [];
    }
    this.arr.reverse();
    return this;
  },
  finishChain() {
    if (!this.arr) {
      this.arr = [];
    }
    this.result = '';
    this.arr.forEach( (item,i) => {
      if (i !== this.arr.length - 1) {
        this.result += `( ${item} )~~`;
      } else {
        this.result += `( ${item} )`;
      }
    });
    delete this.arr;
    return this.result;
  }
};