const checkAnagrams = (arrayOfStrings) => {
  const sortedString = arrayOfStrings.map((string) =>
    string.split("").sort().join("")
  );

  for (let i = 1; i < sortedString.length; i++) {
    if (sortedString[i] !== sortedString[0]) {
      return false;
    }
  }

  return true;
};

const strings1 = ["heart", "arthe", "tarhe"];
const strings2 = ["dfgh", "hgfd", "dfhj"];
const strings3 = ["acax", "xaac", "caax"];

const output1 = checkAnagrams(strings1);
const output2 = checkAnagrams(strings2);
const output3 = checkAnagrams(strings3);

console.log(`[${strings1}]: ${output1}`);
console.log(`[${strings2}]: ${output2}`);
console.log(`[${strings3}]: ${output3}`);
