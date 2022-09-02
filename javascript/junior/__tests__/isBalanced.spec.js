import { isBalanced } from "../balanced-parentheses/isBalanced";

const testCases = [
  { input: "[x] + (y)", expected: true },
  { input: "(((15)())(8))(((z)((y))))", expected: true },
  { input: "(?){(:)}(_", expected: false },
  { input: "[({)]}", expected: false }
];

describe(`balanced parentheses`, () => {
  testCases.forEach(({ input, expected }) => {
    it(`${input} is balanced`, () => {
      expect(isBalanced(input)).toBe(expected);
    });
  });
});
