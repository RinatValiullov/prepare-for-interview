const checkUniqueChars = (string) => {
  let chars = new Set();

  for (const char of string) {
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return {
    hasUniqueCharacters: true,
    chars
  };
};

const inputString1 = "4rontender";
const inputString2 = "coder";

const result1 = checkUniqueChars(inputString1);
const result2 = checkUniqueChars(inputString2);

console.log(`"${inputString1}": ${result1}`);
console.log(`"${inputString2}":`, result2);
