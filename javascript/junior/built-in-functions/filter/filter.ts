/*
  Takes an array(1) and callback(filter) function. Then returns a new array(2)
  containing only those elements for which callback(filter) function returns true.
*/

const filter = <T>(array: T, callback: (inp: any) => boolean): Array<T> => {
  return array.reduce((acc: number[] | string[], curr: number | string) => {
    return callback(curr) ? [...acc, curr] : acc;
  }, [])
};


const filterPositive = filter<number[]>([-2, -1, 0, 1, 2, 3], x => x >= 0);
console.log(filterPositive)

const filterLengthThree = filter<string[]>(['abc', 'ac', 'abcd', 'a', 'ab'], x => x.length === 3);
console.log(filterLengthThree)
