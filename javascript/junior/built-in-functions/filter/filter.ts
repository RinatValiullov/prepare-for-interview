const filter = (array: any[], callback: (inp: any) => boolean) => {
  return array.reduce((acc: number[] | string[], curr: number | string) => {
    return callback(curr) ? [...acc, curr] : acc;
  }, [])
};


const filterPositive = filter([-2, -1, 0, 1, 2, 3], x => x >= 0);
console.log(filterPositive)

const filterLengthThree = filter(['abc', 'ac', 'abcd', 'a', 'ab'], x => x.length === 3);
console.log(filterLengthThree)
