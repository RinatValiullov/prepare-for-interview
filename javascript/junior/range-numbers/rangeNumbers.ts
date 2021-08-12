type Options = {
  from?: number;
  step?: number;
  to: number;
};

const rangeNumbers = (options: Options): number[] => {

  const { from = 0, step = 1, to } = options;

  if (!to) {
    throw new Error("You must set the 'to' parameter");
  }

  if (to <= from) {
    throw new Error("'from' can't be greater than 'to' or equal to it");
  }

  return Array.from(
    { length: (to - from) / step },
    (_, i) => i * step + from
  );

};


const rangeNumbers1 = rangeNumbers({ to: 5 });
const rangeNumbers2 = rangeNumbers({ from: 5, to: 15 });
const rangeNumbers3 = rangeNumbers({ from: 0, step: 2, to: 10 });

console.log(`
  ${rangeNumbers1}
  ${rangeNumbers2}
  ${rangeNumbers3}
`);
