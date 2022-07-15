import {
  isUnique,
  isUniqueWithSet
} from "../check-unique-characters/hasUniqueChars";

const testCases = [
  { input: "abcdef", output: true },
  { input: "123456", output: true },
  { input: "abcABC", output: true },
  { input: "abcaef", output: false }
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
  ({ input, output }) => {
    test(`"${input}" contains only unique characters`, () => {
      expect(isUnique(input)).toBe(output);
    });
  }
);

describe.each(testCases)(
  "unique characters in the input string (Set)",
  ({ input, output }) => {
    test(`"${input}" contains only unique characters`, () => {
      expect(isUniqueWithSet(input)).toBe(output);
    });
  }
);
