"use strict";

const map = (array, callback) => {
  let output = [];
  for (let elem of array) {
    output.push(callback(elem));
  }
  return output;
};
const mapSquare = map([4, 5, 6], (e) => Math.pow(e, 2));
const mapHalf = map([7, 3, 1], (e) => e / 2);

console.log(mapSquare);
console.log(mapHalf);
