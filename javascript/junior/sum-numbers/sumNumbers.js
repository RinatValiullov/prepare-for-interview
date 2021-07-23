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
