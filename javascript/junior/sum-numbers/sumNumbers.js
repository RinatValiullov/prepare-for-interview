const sumTo = (number) => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
};

const num1 = 3;
const num2 = 1;
const num3 = 100;

const results = [sumTo(num1), sumTo(num2), sumTo(num3)];

console.log(results);
