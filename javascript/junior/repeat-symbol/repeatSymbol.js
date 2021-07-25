const repeatSymbol = (str) => {
  return str
    .toUpperCase()
    .split("")
    .map((elem, idx) => `${elem}${elem.repeat(idx).toLowerCase()}`)
    .join("-");
};

const str1 = "asd";
const str2 = "DtVq";

console.log(repeatSymbol(str1));
console.log(repeatSymbol(str2));
