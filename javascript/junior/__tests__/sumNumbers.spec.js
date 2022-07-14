import { sumTo_fl } from "../sum-numbers/sumNumbers";

const testCases = [
  { number: 3, expected: 6 },
  { number: 1, expected: 1 },
  { number: 100, expected: 5050 }
];

describe("solution of sumTo_x function tests", () => {
  testCases.forEach(({ number, expected }) => {
    it(`should return ${expected}`, () => {
      expect(sumTo_fl(number)).toBe(expected);
    });
  });
});
