import { describe, expect, test } from "@jest/globals";
import {
  isUnique,
  isUniqueWithSet
} from "../check-unique-characters/hasUniqueChars";

const testCases = [
  { input: "abcdef", expected: true },
  { input: "123456", expected: true },
  { input: "abcABC", expected: true },
  { input: "abcaef", expected: false }
];

// describe("unique characters in the input string", () => {
//   testCases.forEach(({ input, output }) => {
//     test(`"${input}" contains only unique characters`, () => {
//       expect(isUnique(input)).toBe(output);
//     });
//   });
// });

describe.each(testCases)(
  "unique characters in the input string (lastIndexOf)",
  ({ input, expected }) => {
    test(`"${input}" contains only unique characters: ${expected}`, () => {
      expect(isUnique(input)).toBe(expected);
    });
  }
);

describe.each(testCases)(
  "unique characters in the input string (Set)",
  ({ input, expected }) => {
    test(`"${input}" contains only unique characters: ${expected}`, () => {
      expect(isUniqueWithSet(input)).toBe(expected);
    });
  }
);
