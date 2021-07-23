// with for loop

const sumTo_fl = (number) => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
};

const num1 = 3;
const num2 = 1;
const num3 = 100;

const results = [sumTo_fl(num1), sumTo_fl(num2), sumTo_fl(num3)];

console.log(results);
