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
    chars,
  };
};

const nick = "4rontender";
const anotherNick = "coder";

const result1 = checkUniqueChars(nick);
const result2 = checkUniqueChars(anotherNick);

console.log(result1);
console.log(result2);
