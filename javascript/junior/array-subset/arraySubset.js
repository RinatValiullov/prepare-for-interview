const arraySubset = (source, subset) => {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);
    if (index === -1) {
      return false;
    }
    source.splice(index, 1);
  }

  return true;
};

const source1 = [5, 6, 4];
const subset1 = [4, 5, 6];

const source2 = [5, 5, 5, 4];
const subset2 = [5, 4, 4];

const source3 = [5, 4];
const subset3 = [4, 6, 5];

const output1 = arraySubset(source1, subset1);
const output2 = arraySubset(source2, subset2);
const output3 = arraySubset(source3, subset3);

console.log(output1);
console.log(output2);
console.log(output3);
