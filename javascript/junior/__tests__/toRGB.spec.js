import { describe, expect, test } from "@jest/globals";
import { toRGB } from "../get-rgb-values/toRGB";

const testCases = [
  {
    inputString: "rgb(235, 7, 98)",
    expected: { red: 235, green: 7, blue: 98 }
  },
  { inputString: "rgb(0, 0, 0)", expected: { red: 0, green: 0, blue: 0 } }
];

describe("get an object with numeric fields of colors from the input string", () => {
  testCases.forEach(({ inputString, expected }) => {
    test(`should return ${JSON.stringify(expected)}`, () => {
      expect(toRGB(inputString)).toMatchObject(expected);
    });
  });
});
