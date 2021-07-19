const checkBrackets = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      const lastElement = stack.pop();
      if (!lastElement) return false;
    }
  }

  if (stack.length) return false;

  return true;
};

const str1 = "(())()";
const str2 = "(()))";

const result1 = checkBrackets(str1);
const result2 = checkBrackets(str2);

console.log(result1);
console.log(result2);
