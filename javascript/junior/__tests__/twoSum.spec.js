import { describe, expect, it } from "@jest/globals";
import { twoSum, twoSumMap } from "../two-sum/twoSum";

const testCases = [
  { numbers: [3, 2, 4], target: 6, expected: [1, 2] },
  { numbers: [-2, 1, 7, 3, 10], target: 5, expected: [0, 2] },
  { numbers: [5, 5], target: 10, expected: [0, 1] }
];

describe(`an array of two indices whose sum equals the target`, () => {
  testCases.forEach(({ numbers, target, expected }) => {
    it(`1 way: O(n2) time complexity`, () => {
      expect(twoSum(numbers, target)).toMatchObject(expected);
    });
  });
});

describe(`an array of two indices whose sum equals the target`, () => {
  testCases.forEach(({ numbers, target, expected }) => {
    it(`2 way: O(n) time complexity`, () => {
      expect(twoSumMap(numbers, target)).toMatchObject(expected);
    });
  });
});
