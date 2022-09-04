const removeLetters = (string, letters) => {
    const vowels = "aeiouy";
    letters = letters || vowels;
    const result = string.split("");
    return result
        .filter((letter) => letters.indexOf(letter.toLowerCase()) < 0)
        .join("");
};
const inputString = "JavaScript is awesome";
const output1 = removeLetters(inputString);
const output2 = removeLetters(inputString, "aw");
console.log(`${output1}`);
console.log(`${output2}`);
export { removeLetters };
