const isStringRotated = (inputString1, inputString2) => {
  if (inputString1.length !== inputString2.length) {
    return false;
  }

  for (let i = 0; i < inputString1.length; i++) {
    const rotatedString = inputString1.slice(i) + inputString1.slice(0, i);

    if (rotatedString === inputString2) {
      return true;
    }
  }

  return false;
};

const stringSource = "javascript";
const string1 = "scriptjava";
const string2 = "iptjavascr";
const string3 = "tpircsavaj";

const output1 = isStringRotated(stringSource, string1);
const output2 = isStringRotated(stringSource, string2);
const output3 = isStringRotated(stringSource, string3);

console.log(output1);
console.log(output2);
console.log(output3);
