const isBalanced = (string: string): boolean => {
  const start = "{[(";
  const end = "}])";
  const brackets = [];

  const map: { [index: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "("
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (start.includes(char)) {
      brackets.push(char);
    } else if (end.includes(char)) {
      const last = brackets.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return !brackets.length;
};

const inputString1 = "[x] + (y)";
const inputString2 = "(((15)())(8))(((z)((y))))";
const inputString3 = "(?){(:)}(_";
const inputString4 = "[({)]}";

const output1 = isBalanced(inputString1);
const output2 = isBalanced(inputString2);
const output3 = isBalanced(inputString3);
const output4 = isBalanced(inputString4);

console.log(`Input string ${inputString1} is balanced: ${output1}`);
console.log(`Input string ${inputString2} is balanced: ${output2}`);
console.log(`Input string ${inputString3} is balanced: ${output3}`);
console.log(`Input string ${inputString4} is balanced: ${output4}`);

export { isBalanced };
