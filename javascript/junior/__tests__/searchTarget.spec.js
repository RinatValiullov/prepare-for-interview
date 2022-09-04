import { describe, expect, it } from "@jest/globals";
import {
  searchTarget_logn,
  searchTarget_n
} from "../search-number/searchTarget";

const testCases = [
  { numbers: [4, 8, 9, 12, 18], target: 9, expected: 2 },
  { numbers: [4, 8, 9, 12, 18], target: 5, expected: -1 }
];

describe(`the index of the "target" in the "numbers"`, () => {
  testCases.forEach(({ numbers, target, expected }) => {
    it(`1 way: O(n) time complexity`, () => {
      expect(searchTarget_n(numbers, target)).toBe(expected);
    });
  });
});

describe(`the index of the "target" in the "numbers"`, () => {
  testCases.forEach(({ numbers, target, expected }) => {
    it(`2 way: O(log n) time complexity`, () => {
      expect(searchTarget_logn(numbers, target)).toBe(expected);
    });
  });
});
