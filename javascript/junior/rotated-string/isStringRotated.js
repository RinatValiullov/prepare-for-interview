/* 1 way: with for loop */
const isStringRotatedFor = (inputString1, inputString2) => {
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
const string1For = "scriptjava";
const string2For = "iptjavascr";
const string3For = "tpircsavaj";
const output1For = isStringRotatedFor(stringSource, string1For);
const output2For = isStringRotatedFor(stringSource, string2For);
const output3For = isStringRotatedFor(stringSource, string3For);
console.log(`1 way: with for loop. "${stringSource}" - "${string1For}" ${output1For}`);
console.log(`1 way: with for loop. "${stringSource}" - "${string2For}" ${output2For}`);
console.log(`1 way: with for loop. "${stringSource}" - "${string3For}" ${output3For}`);
/* 2 way: with concatenation and string length check */
const isStringRotatedDoubleLength = (inputString1, inputString2) => {
    return ((inputString1 + inputString1).includes(inputString2) &&
        inputString1.length === inputString2.length);
};
const string1Double = "scriptjava";
const string2Double = "iptjavascr";
const string3Double = "tpircsavaj";
const output1Double = isStringRotatedDoubleLength(stringSource, string1Double);
const output2Double = isStringRotatedDoubleLength(stringSource, string2Double);
const output3Double = isStringRotatedDoubleLength(stringSource, string3Double);
console.log(`2 way: string length check, "${stringSource}" - "${string1Double}" ${output1Double}`);
console.log(`2 way: string length check, "${stringSource}" - "${string2Double}" ${output2Double}`);
console.log(`2 way: string length check, "${stringSource}" - "${string3Double}" ${output3Double}`);
export { isStringRotatedFor, isStringRotatedDoubleLength };
