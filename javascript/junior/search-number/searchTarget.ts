/* 1 way: O(n) time complexity */
const searchTarget_n = (numbers: number[], target: number): number => {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
};

/* 2 way: O(log n) time complexity */
const searchTarget_logn = (numbers: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  if (target < numbers[leftIndex] || target > numbers[rightIndex]) {
    return -1;
  }

  while (true) {
    if (target === numbers[leftIndex]) {
      return leftIndex;
    }

    if (target === numbers[rightIndex]) {
      return rightIndex;
    }

    if (rightIndex - leftIndex <= 1) {
      return -1;
    }

    const middle = Math.floor((rightIndex - leftIndex) / 2);

    if (target > numbers[middle]) {
      leftIndex = middle + 1;
    } else if (target < numbers[middle]) {
      rightIndex = middle - 1;
    } else {
      return middle;
    }
  }
};

const numbers = [4, 8, 9, 12, 18];
const target1 = 9;
const target2 = 5;

const output1_n = searchTarget_n(numbers, target1);
const output2_n = searchTarget_n(numbers, target2);

const output1_logn = searchTarget_logn(numbers, target1);
const output2_logn = searchTarget_logn(numbers, target2);

console.log(`1 way: O(n) ${output1_n}`);
console.log(`1 way: O(n) ${output2_n}`);

console.log(`2 way: O(log n) ${output1_logn}`);
console.log(`2 way: O(log n) ${output2_logn}`);
