// with for loop

const sumTo_fl = (number) => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
};

const num1_fl = 3;
const num2_fl = 1;
const num3_fl = 100;

const results_fl = [sumTo_fl(num1_fl), sumTo_fl(num2_fl), sumTo_fl(num3_fl)];

console.log(`With for loop: ${results_fl}`);

// with recursion

const sumTo_re = (number) => {
  let sum = 0;

  if (number == 0 || number == 1) {
    sum += number;
    return sum;
  } else {
    sum = number + sumTo_re(number - 1);
    return sum;
  }
};

const num1_re = 3;
const num2_re = 1;
const num3_re = 100;

const results_re = [sumTo_re(num1_re), sumTo_re(num2_re), sumTo_re(num3_re)];

console.log(`With recursion: ${results_re}`);

// with tail recursion

const sumTo_tre = (number, acc = 0) => {
  if (number == 0) {
    return acc;
  }
  return sumTo_tre(number - 1, number + acc);
};

const num1_tre = 3;
const num2_tre = 1;
const num3_tre = 100;

const results_tre = [
  sumTo_tre(num1_tre),
  sumTo_tre(num2_tre),
  sumTo_tre(num3_tre)
];

console.log(`With tail recursion: ${results_tre}`);

// with arithmetic progression

const sumTo_ar = (number) => {
  let sum = (number * (number + 1)) / 2;
  return sum;
};

const num1_ar = 3;
const num2_ar = 1;
const num3_ar = 100;

const results_ar = [sumTo_ar(num1_ar), sumTo_ar(num2_ar), sumTo_ar(num3_ar)];

console.log(`With arithmetic progression: ${results_ar}`);

export { sumTo_fl, sumTo_re, sumTo_tre, sumTo_ar };
