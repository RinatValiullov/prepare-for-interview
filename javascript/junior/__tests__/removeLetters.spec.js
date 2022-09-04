import { describe, expect, it } from "@jest/globals";
import { removeLetters } from "../remove-letters/removeLetters";

const testCases = [
  { input: "JavaScript is awesome", letters: "", expected: "JvScrpt s wsm" },
  {
    input: "JavaScript is awesome",
    letters: "aw",
    expected: "JvScript is esome"
  }
];

describe(`remove letters from the input string`, () => {
  testCases.forEach(({ input, letters, expected }) => {
    it(`${input} after removing ${letters}`, () => {
      expect(removeLetters(input, letters)).toBe(expected);
    });
  });
});
