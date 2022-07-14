const isUnique = (inputString) => {
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (inputString.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;
};

const result1 = isUnique("abcdef");
const result2 = isUnique("123456");
const result3 = isUnique("abcABC");
const result4 = isUnique("abcaef");

console.log(`"abcdef", ${result1}`);
console.log(`"123456", ${result2}`);
console.log(`"abcABC", ${result3}`);
console.log(`"abcaef", ${result4}`);

export { isUnique };
