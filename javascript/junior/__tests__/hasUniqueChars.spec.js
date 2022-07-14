import { isUnique } from "../check-unique-characters/hasUniqueChars";

const testCases = [
  { input: "abcdef", output: true },
  { input: "123456", output: true },
  { input: "abcABC", output: true },
  { input: "abcaef", output: false }
];

describe("unique characters in the input string", () => {
  testCases.forEach(({ input, output }) => {
    it(`should return ${output}`, () => {
      expect(isUnique(input)).toBe(output);
    });
  });
});
