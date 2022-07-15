/* 1 way */

const isUnique = (inputString) => {
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (inputString.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;
};

console.log("\n1 way with lastIndexOf method:\n");
const result1 = isUnique("abcdef");
const result2 = isUnique("123456");
const result3 = isUnique("abcABC");
const result4 = isUnique("abcaef");

console.log(`"abcdef", ${result1}`);
console.log(`"123456", ${result2}`);
console.log(`"abcABC", ${result3}`);
console.log(`"abcaef", ${result4}`);

/* 2 way */

const isUniqueWithSet = (inputString) => {
  let chars = new Set();

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return true;
};

const result1_S = isUnique("abcdef");
const result2_S = isUnique("123456");
const result3_S = isUnique("abcABC");
const result4_S = isUnique("abcaef");

console.log("\n2 way with Set structure:\n");
console.log(`"abcdef", ${result1_S}`);
console.log(`"123456", ${result2_S}`);
console.log(`"abcABC", ${result3_S}`);
console.log(`"abcaef", ${result4_S}`);

export { isUnique, isUniqueWithSet };
