"use strict";
/*
  Takes an array(1) and callback(filter) function. Then returns a new array(2)
  containing only those elements for which callback(filter) function returns true.
*/
const filter = (array, callback) => {
    return array.reduce((acc, curr) => {
        return callback(curr) ? [...acc, curr] : acc;
    }, []);
};
const filterPositive = filter([-2, -1, 0, 1, 2, 3], x => x >= 0);
console.log(filterPositive);
const filterLengthThree = filter(['abc', 'ac', 'abcd', 'a', 'ab'], x => x.length === 3);
console.log(filterLengthThree);
