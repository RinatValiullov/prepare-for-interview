type MultidimensionalArray = [][]

const multidimensionalArray = [[1], [[2]], [3, [4, [5, [6]]]]];

const flattenArray = (multiArray: any[]): [] => {
  const result: any = [];

  for (let i = 0; i < multiArray.length; i++) {
    if (Array.isArray(multiArray[i])) {
      const flat = flattenArray(multiArray[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(multiArray[i]);
    }
  }

  return result;
};

const resultArray = flattenArray(multidimensionalArray);
console.log(resultArray);
