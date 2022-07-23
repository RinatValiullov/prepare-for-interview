const mostCommon = (arrayOfStrings) => {
  const map = {};
  let maxFreqCount = 0;
  let maxFreqString = arrayOfStrings[0];

  for (let index = 0; index < arrayOfStrings.length; index++) {
    const element = arrayOfStrings[index];

    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }

    if (map[element] > maxFreqCount) {
      maxFreqCount = map[element];
      maxFreqString = element;
    }
  }

  return maxFreqString;
};

const inputArrayOfStrings1 = ["j", "k", "k", "l", "m", "n", "o"];
const inputArrayOfStrings2 = ["ijk", "ijk", "xyz", "xyz", "ijk", "opr", "stu"];
const inputArrayOfStrings3 = ["abc", "def"];

const output1 = mostCommon(inputArrayOfStrings1);
const output2 = mostCommon(inputArrayOfStrings2);
const output3 = mostCommon(inputArrayOfStrings3);

console.log(`Input string: ${inputArrayOfStrings1}. Result: ${output1}`);
console.log(`Input string: ${inputArrayOfStrings2}. Result: ${output2}`);
console.log(`Input string: ${inputArrayOfStrings3}. Result: ${output3}`);
