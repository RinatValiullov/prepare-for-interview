const checkAllBrackets = (str: string) => {
  const stack: string[] = [];
  const bracketsBank: object = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      const lastElement = stack.pop();
      // @ts-expect-error
      if (bracket !== bracketsBank[lastElement]) continue;
    }
  }

  if (stack.length) return false;

  return true;
};

const string1: string = "({[]})";
const string2: string = "({[]}";

const result1 = checkAllBrackets(string1);
const result2 = checkAllBrackets(string2);

console.log(result1);
console.log(result2);
