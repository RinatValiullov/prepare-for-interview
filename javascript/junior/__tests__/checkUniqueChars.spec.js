import { describe, expect, test } from "@jest/globals";
import { checkUniqueChars } from "../check-unique-characters/checkUniqueChars";

const testCases = [
  { input: "4rontender", expected: false },
  { input: "coder", expected: true }
];

describe.each(testCases)(
  "unique characters in the input string",
  ({ input, expected }) => {
    test(`"${input}" contains only unique characters: ${expected}`, () => {
      expect(checkUniqueChars(input)).toBe(expected);
    });
  }
);
