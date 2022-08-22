"use strict";

const filter = (array, callback) => {
  return array.reduce((acc, curr) => {
    return callback(curr) ? [...acc, curr] : acc;
  }, []);
};
const filterPositive = filter([-2, -1, 0, 1, 2, 3], (x) => x >= 0);

console.log(filterPositive);

const filterLengthThree = filter(
  ["abc", "ac", "abcd", "a", "ab"],
  (x) => x.length === 3
);

console.log(filterLengthThree);
