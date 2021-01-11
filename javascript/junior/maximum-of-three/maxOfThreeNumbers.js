const maxOfThreeNumbers = (a, b, c) => {
  let maximum;

  if (a > b) {
    if (a > c) {
      maximum = a;
    } else {
      maximum = c;
    }
  } else {
    if (b > c) {
      maximum = b;
    } else {
      maximum = c;
    }
  }

  return `Maximum of "${a}", "${b}" and "${c}" is ${maximum}`;
};

const results = [
  maxOfThreeNumbers(1, 2, 3),
  maxOfThreeNumbers(3, 2, 1),
  maxOfThreeNumbers(1, -2, 0),
  maxOfThreeNumbers(-2, 8, 10),
];

for (const resultMaximum of results) {
  console.log(resultMaximum);
}
