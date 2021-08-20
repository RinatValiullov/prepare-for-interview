import assert from 'assert/strict';


const deepCopy = <T>(original: T): T => {

  if (Array.isArray(original)) {
    const copy: any = [];
    for (const [index, value] of original.entries()) {
      copy[index] = deepCopy(value)
    }
    return copy;
  } else if (typeof original === 'object' && original !== null) {
    const copy: any = {};
    for (const [key, value] of Object.entries(original)) {
      copy[key] = deepCopy(value);
    }
    return copy;
  } else {
    // Primitive value: atomic, no need to copy
    return original;
  }

};


const original = { a: { b: { c: { d: 5 } } } };
const copy = deepCopy(original);

console.log(assert.deepStrictEqual(original, copy)); // Undefined. Ok
