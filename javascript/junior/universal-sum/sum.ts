// @ts-nocheck
const sum = (z: number, x: number) => {
  if (typeof z === "undefined") {
    return sum;
  }
  if (typeof x === "undefined") {
    return function innerSum(c) {
      if (typeof c === "undefined") {
        return innerSum;
      }
      return z + c;
    };
  }
  return z + x;
};

const output1 = sum(11, 19);
const output2 = sum(11)(19);
const output3 = sum(11)()(19);
const output4 = sum(11)()()()(19);
const output5 = sum(11)()()()()()()()()()(19);
const output6 = sum()(11)(19);
const output7 = sum()()()(11)(19);
const output8 = sum()(11)()(19);
const output9 = sum()()()()(11)()()()(19);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7);
console.log(output8);
console.log(output9);

export { sum };
