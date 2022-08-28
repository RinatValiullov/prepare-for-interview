/* 1 way */

const twoSum = (numbers: number[], target: number): number[] | undefined => {
  for (let firstTerm = 0; firstTerm < numbers.length - 1; firstTerm++) {
    const firstElement = numbers[firstTerm];
    for (
      let secondTerm = firstTerm + 1;
      secondTerm < numbers.length;
      secondTerm++
    ) {
      const secondElement = numbers[secondTerm];
      if (firstElement + secondElement === target) {
        return [firstTerm, secondTerm];
      }
    }
  }
};

const numbers1_1 = [3, 2, 4];
const target1_1 = 6;

const numbers2_1 = [-2, 1, 7, 3, 10];
const target2_1 = 5;

const numbers3_1 = [5, 5];
const target3_1 = 10;

const output1_1 = twoSum(numbers1_1, target1_1);
const output2_1 = twoSum(numbers2_1, target2_1);
const output3_1 = twoSum(numbers3_1, target3_1);

console.log("1 way");
console.log(
  `Elements in the array [${numbers1_1}] with indices ${output1_1?.join(
    " and "
  )} form a sum equal to ${target1_1}`
);
console.log(
  `Elements in the array [${numbers2_1}] with indices ${output2_1?.join(
    " and "
  )} form a sum equal to ${target2_1}`
);
console.log(
  `Elements in the array [${numbers3_1}] with indices ${output3_1?.join(
    " and "
  )} form a sum equal to ${target3_1}`
);

/* 2 way */

const twoSumMap = (numbers: number[], target: number): number[] | undefined => {
  const indexMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    const complement = target - element;
    const complementIndex = indexMap.get(complement);
    if (complementIndex != null) {
      return [complementIndex, i];
    }

    indexMap.set(element, i);
  }
};

const numbers1_2 = [3, 2, 4];
const target1_2 = 6;

const numbers2_2 = [-2, 1, 7, 3, 10];
const target2_2 = 5;

const numbers3_2 = [5, 5];
const target3_2 = 10;

const output1_2 = twoSumMap(numbers1_2, target1_2);
const output2_2 = twoSumMap(numbers2_2, target2_2);
const output3_2 = twoSumMap(numbers3_2, target3_2);

console.log("2 way");
console.log(
  `Elements in the array [${numbers1_2}] with indices ${output1_2?.join(
    " and "
  )} form a sum equal to ${target1_2}`
);
console.log(
  `Elements in the array [${numbers2_2}] with indices ${output2_2?.join(
    " and "
  )} form a sum equal to ${target2_2}`
);
console.log(
  `Elements in the array [${numbers3_2}] with indices ${output3_2?.join(
    " and "
  )} form a sum equal to ${target3_2}`
);

export { twoSum, twoSumMap };
