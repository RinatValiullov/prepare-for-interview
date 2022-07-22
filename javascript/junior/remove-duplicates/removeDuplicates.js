/* Variant 1 */

const removeDuplicates = (inputString) => {
  let arrayOfChars = inputString.split("");

  let setOfUniqueChars = new Set(arrayOfChars);

  let resultString = "";
  for (let char of setOfUniqueChars.values()) {
    resultString += char;
  }

  return resultString;
};

/* Variant 2 (shorter) */

const removeDuplicatesShort = (inputString) => {
  const resultString = Array.from(new Set(inputString)).join("");

  return resultString;
};

const input1 = "dfgh";
const input2 = "dfgfdgfdgfs";

// additional case
const input3 = "aabbccddaabbccddffaa";

const output1 = removeDuplicates(input1);
const output2 = removeDuplicates(input2);
const output3 = removeDuplicates(input3);

console.log(`Input string: "${input1}". Result: ${output1}`);
console.log(`Input string: "${input2}". Result: ${output2}`);
console.log(`Input string: "${input3}". Result: ${output3}`);
